/**
 * Generates <lang>.data.md from <lang>.mock.ts: a plain-text mirror of the CV
 * data (no <b>/<i> tags) meant for copy-pasting into application forms.
 *
 * Approach: parse the mock file's AST to find which intermediate variables
 * (freelancerExperience, defaultEducation, ...) are reused across more than
 * one exported CvData — those become "Common Data", referenced by name from
 * each role section instead of repeated. Everything else is printed inline.
 * The actual values are obtained by transpiling the file and evaluating it
 * with Node's `vm`, using the real environment.ts (cvScope 'DE' is the
 * fallback branch in every conditional field).
 */
import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import * as vm from 'vm';

const REPO_ROOT = path.resolve(__dirname, '..');
const MOCK_DIR = path.join(REPO_ROOT, 'src/assets/cv-data');

const stripTags = (s: string) => s.replace(/<\/?[bi]>/g, '');

interface RoleInfo {
  varName: string;
  exportName: string;
  data: any;
  // maps property path (e.g. "contact", "courses", "experiences[0].entries[0]") to
  // the shared variable name it was sourced from, if any.
  sourceVar: Map<string, string>;
}

function findSharedVarName(node: ts.Expression): string | undefined {
  if (ts.isIdentifier(node)) return node.text;
  return undefined;
}

function parseMockFile(filePath: string) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.ES2022, true);

  const roles: RoleInfo[] = [];
  const varUsageCount = new Map<string, number>();

  const bumpUsage = (name: string) => varUsageCount.set(name, (varUsageCount.get(name) ?? 0) + 1);

  const walkObjectForSources = (
    obj: ts.Expression,
    prefix: string,
    sourceVar: Map<string, string>
  ) => {
    if (ts.isIdentifier(obj)) {
      sourceVar.set(prefix, obj.text);
      bumpUsage(obj.text);
      return;
    }
    if (!ts.isObjectLiteralExpression(obj)) return;
    for (const prop of obj.properties) {
      if (ts.isSpreadAssignment(prop)) {
        const name = findSharedVarName(prop.expression);
        if (name) {
          sourceVar.set(prefix ? `${prefix}.<spread>` : '<spread>', name);
          bumpUsage(name);
        }
        continue;
      }
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = prop.name.getText(sourceFile).replace(/^["']|["']$/g, '');
      const path_ = prefix ? `${prefix}.${key}` : key;
      const value = prop.initializer;

      if (ts.isIdentifier(value)) {
        sourceVar.set(path_, value.text);
        bumpUsage(value.text);
      } else if (ts.isArrayLiteralExpression(value)) {
        value.elements.forEach((el, i) => {
          const elPath = `${path_}[${i}]`;
          if (ts.isIdentifier(el)) {
            sourceVar.set(elPath, el.text);
            bumpUsage(el.text);
          } else if (ts.isObjectLiteralExpression(el)) {
            walkObjectForSources(el, elPath, sourceVar);
          }
        });
      } else if (ts.isObjectLiteralExpression(value)) {
        walkObjectForSources(value, path_, sourceVar);
      }
    }
  };

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isVariableStatement(node)) return;
    const isExported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || !decl.initializer) continue;
      const varName = decl.name.text;
      if (!isExported) continue;
      // Only CvData-typed exports (role objects) — identified by having an
      // ObjectLiteralExpression initializer with an "occupation" property.
      if (!ts.isObjectLiteralExpression(decl.initializer)) continue;
      const hasOccupation = decl.initializer.properties.some(
        (p) => ts.isPropertyAssignment(p) && p.name.getText(sourceFile).replace(/["']/g, '') === 'occupation'
      );
      if (!hasOccupation) continue;

      const sourceVar = new Map<string, string>();
      walkObjectForSources(decl.initializer, '', sourceVar);
      roles.push({ varName, exportName: varName, data: undefined, sourceVar });
    }
  });

  return { roles, varUsageCount, sourceText };
}

function evaluateModule(filePath: string): Record<string, any> {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(sourceText, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filePath,
  });

  const envPath = path.join(REPO_ROOT, 'src/environments/environment.ts');
  const envSource = fs.readFileSync(envPath, 'utf8');
  const envTranspiled = ts.transpileModule(envSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const envModule = { exports: {} as any };
  const envRequire = (id: string) => {
    throw new Error(`unexpected require('${id}') from environment.ts`);
  };
  vm.runInNewContext(envTranspiled.outputText, {
    module: envModule,
    exports: envModule.exports,
    require: envRequire,
  });

  const cvDataModule = { exports: {} as any };
  const fakeRequire = (id: string) => {
    if (id.endsWith('environment')) return envModule.exports;
    if (id.includes('CVData')) return {};
    throw new Error(`unexpected require('${id}') from ${filePath}`);
  };
  vm.runInNewContext(transpiled.outputText, {
    module: cvDataModule,
    exports: cvDataModule.exports,
    require: fakeRequire,
  });

  return cvDataModule.exports;
}

function fmtDetails(tasks: string[] | undefined): string {
  if (!tasks || tasks.length === 0) return '';
  return tasks.map(stripTags).join('\n\n');
}

function renderExperienceEntry(lines: string[], entry: any) {
  lines.push('Job Title:', stripTags(entry.role), '');
  lines.push('Company:', stripTags(entry.company), '');
  lines.push('Location:', stripTags(entry.location), '');
  const [from, to] = String(entry.dates).split(' - ').map((s: string) => s.trim());
  lines.push('From:', from ?? '', '');
  lines.push('To:', to ?? '', '');
  lines.push('Role Description:', fmtDetails(entry.tasks), '');
  if (entry.achievements?.length) {
    lines.push('Achievements:', fmtDetails(entry.achievements), '');
  }
}

function renderEducationEntry(lines: string[], entry: any, heading?: string) {
  if (heading) lines.push(heading, '');
  lines.push('Institution:', stripTags(entry.company), '');
  lines.push('Degree:', stripTags(entry.role), '');
  lines.push('Location:', stripTags(entry.location), '');
  lines.push('Dates:', String(entry.dates).trim(), '');
  lines.push('Details:', fmtDetails(entry.tasks), '');
}

function generateMd(lang: string, roleVarNames: string[]) {
  const filePath = path.join(MOCK_DIR, `${lang}.mock.ts`);
  const { roles, varUsageCount } = parseMockFile(filePath);
  const evaluated = evaluateModule(filePath);

  const sharedVars = new Set(
    [...varUsageCount.entries()].filter(([, count]) => count >= 2).map(([name]) => name)
  );

  const roleByVar = new Map(roles.map((r) => [r.varName, r]));

  const lines: string[] = [];
  lines.push(`# CV Data - Application Reference (${lang.split('-')[0].toUpperCase()})`);
  lines.push('');
  lines.push(
    `This file mirrors [${lang}.mock.ts](${lang}.mock.ts) in plain text, meant for copy-pasting into`
  );
  lines.push('application forms field by field. No HTML tags, no leading quotes, one value per line.');
  lines.push('');
  lines.push(
    'Shared blocks (contact info, freelance experience, education, languages, courses, industry'
  );
  lines.push(
    'contributions) are written once in Common Data and only referenced by name in each role'
  );
  lines.push('section below, to avoid repeating the same lines over and over.');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Common Data');
  lines.push('');

  // Render each shared variable once, generically, based on its evaluated shape.
  for (const varName of sharedVars) {
    const anyRole = roles.find((r) => [...r.sourceVar.values()].includes(varName));
    if (!anyRole) continue;
    const value = evaluated[varName];
    if (value === undefined) continue;

    if (varName.toLowerCase().includes('contact')) {
      lines.push('### Contact', '');
      lines.push('Full name:', stripTags(value.fullname), '');
      lines.push('Email:', stripTags(value.email), '');
      lines.push('Phone:', stripTags(value.phone), '');
      lines.push('Location:', stripTags(value.location), '');
      if (value.address) lines.push('Address:', stripTags(value.address), '');
      lines.push('Nationality:', stripTags(value.nationality), '');
      if (value.workStatus) lines.push('Work status:', stripTags(value.workStatus), '');
    } else if (varName.toLowerCase().includes('language')) {
      lines.push('### Languages', '');
      for (const l of value as any[]) {
        lines.push(`${stripTags(l.name)}:`, stripTags(l.cefrLevel ?? String(l.level)), '');
      }
    } else if (varName === 'freelancerExperience') {
      lines.push('### Work Experience — Freelancer (shared)', '');
      renderExperienceEntry(lines, value);
    } else if (varName.toLowerCase().includes('education')) {
      lines.push('### Education — Default (shared)', '');
      (value.entries as any[]).forEach((entry, i) => {
        renderEducationEntry(lines, entry, `#### Education ${i + 1}`);
      });
    } else if (varName.toLowerCase().includes('extracurricular') || varName.toLowerCase().includes('contribution')) {
      lines.push('### Industry Contributions (shared)', '');
      (value.entries as any[]).forEach((entry, i) => {
        lines.push(`#### Contribution ${i + 1}`, '');
        lines.push('Organization:', stripTags(entry.company), '');
        lines.push('Role:', stripTags(entry.role), '');
        lines.push('Location:', stripTags(entry.location), '');
        lines.push('Dates:', String(entry.dates).trim(), '');
        lines.push('Details:', fmtDetails(entry.tasks), '');
      });
    } else if (varName.toLowerCase().includes('course')) {
      lines.push('### Courses — Default (shared)', '');
      for (const c of value as any[]) {
        lines.push(`${stripTags(c.name)}, ${stripTags(c.institution)}, ${c.date}`);
      }
      lines.push('');
    } else if (varName.toLowerCase().includes('link')) {
      lines.push('### Links — Default (shared)', '');
      for (const l of value as any[]) {
        lines.push(`${stripTags(l.label)}:`, l.url, '');
      }
    } else {
      // Fallback: generic named work-experience block.
      lines.push(`### ${varName} (shared)`, '');
      if (value.role) renderExperienceEntry(lines, value);
    }
  }

  lines.push('---', '');

  // Render each role.
  roleVarNames.forEach((varName, idx) => {
    const role = roleByVar.get(varName);
    const value = evaluated[varName];
    if (!role || !value) return;

    lines.push(`## ${idx + 1}. ${stripTags(value.occupation.value.split(' - ')[0])}`, '');
    lines.push('Occupation:', stripTags(value.occupation.value), '');
    lines.push('About Me:', stripTags(String(value.aboutme).replace(/\s+/g, ' ').trim()), '');

    lines.push('Skills:');
    for (const [group, items] of Object.entries(value.skills as Record<string, string[]>)) {
      lines.push(`${group}: ${(items as string[]).map(stripTags).join(', ')}`);
    }
    lines.push('');

    lines.push('Work Experience:');
    const experiencesArr: any[] = Array.isArray(value.experiences)
      ? value.experiences
      : Object.values(value.experiences ?? {});
    const workBlock = experiencesArr.find((e) => e.title === 'Work Experience');
    workBlock?.entries.forEach((entry: any, i: number) => {
      const path_ = `experiences.<work>[${i}]`;
      const from = role.sourceVar.get(path_);
      if (from) {
        lines.push(`${i + 1}. ${from} (see Common Data)`);
      } else {
        lines.push(`${i + 1}. ${stripTags(entry.company)} — ${stripTags(entry.role)}`);
      }
    });
    lines.push('');

    lines.push('Education, Contact, Languages, Courses, Links: see Common Data unless noted below.');
    lines.push('');
    lines.push('---', '');
  });

  return lines.join('\n');
}

function main() {
  const langArg = process.argv[2];
  const configs: Record<string, string[]> = {
    'en-EN': [
      'seniorfrontend', 'frontend', 'frontend3d', 'juniorfrontend', 'softwareFreelancer',
      'seniorSoftware', 'fullStackEngineer', 'graphicsEngineer', 'sre', 'contentcreator',
      'supportAssistant', 'itSupport',
    ],
  };

  const langs = langArg ? [langArg] : Object.keys(configs);
  for (const lang of langs) {
    const roleVarNames = configs[lang];
    if (!roleVarNames) {
      console.error(`No role list configured for ${lang}`);
      process.exit(1);
    }
    const md = generateMd(lang, roleVarNames);
    const outPath = path.join(MOCK_DIR, `${lang}.data.md`);
    fs.writeFileSync(outPath, md);
    console.log(`Wrote ${outPath}`);
  }
}

main();
