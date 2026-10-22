/**
 * Generates <lang>.data.md from <lang>.mock.ts: a plain-text mirror of the CV
 * data (no <b>/<i> tags) meant for copy-pasting into application forms.
 *
 * Usage: npx tsx scripts/generate-cv-md.ts <lang>      e.g. en-EN, de-DE, es-ES
 *
 * Approach: transpile the mock file and evaluate it with Node's `vm`, using
 * the real environment.ts. Every exported object with an `occupation` is a
 * role (CvData). Each block of a role (contact, languages, links, courses and
 * every timeline entry) is rendered to text; blocks whose text is identical in
 * two or more roles are written once under "Common Data" and only referenced
 * from the roles. Comparison is by value, so roles built with
 * `{...seniorfrontend, ...}` share what they inherit without any naming rules.
 */
import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import * as vm from 'vm';

const REPO_ROOT = path.resolve(__dirname, '..');
const MOCK_DIR = path.join(REPO_ROOT, 'src/assets/cv-data');

const stripTags = (s: unknown) =>
  String(s ?? '')
    .replace(/<\/?[a-z][^>]*>/gi, '')
    .replace(/[ \t]+/g, ' ')
    .trim();

type SectionKind = 'work' | 'education' | 'other';

interface Role {
  exportName: string;
  data: any;
}

/** A renderable block of a role, identified by `key` (its rendered text). */
interface Block {
  kind: string; // "Contact", "Languages", "Links", "Courses" or "<section> entry"
  label: string;
  text: string;
}

function evaluateModule(filePath: string): Record<string, any> {
  const compilerOptions = {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
    esModuleInterop: true,
  };
  const transpiled = ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {
    compilerOptions,
    fileName: filePath,
  });

  const envSource = fs.readFileSync(path.join(REPO_ROOT, 'src/environments/environment.ts'), 'utf8');
  const envTranspiled = ts.transpileModule(envSource, { compilerOptions });
  const envModule = { exports: {} as any };
  vm.runInNewContext(envTranspiled.outputText, {
    module: envModule,
    exports: envModule.exports,
    require: (id: string) => {
      throw new Error(`unexpected require('${id}') from environment.ts`);
    },
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

function loadRoles(filePath: string): Role[] {
  const evaluated = evaluateModule(filePath);
  return Object.entries(evaluated)
    .filter(([, v]) => v && typeof v === 'object' && (v as any).occupation && (v as any).experiences)
    .map(([exportName, data]) => ({ exportName, data }));
}

// ---------- rendering of single blocks ----------

const field = (label: string, value: unknown) => `${label}:\n${stripTags(value)}\n`;

function renderContact(c: any): string {
  const out = [
    field('Full name', c.fullname),
    field('Email', c.email),
    field('Phone', c.phone),
    field('Location', c.location),
  ];
  if (c.address) out.push(field('Address', c.address));
  out.push(field('Nationality', c.nationality));
  if (c.workStatus) out.push(field('Work status', c.workStatus));
  if (c.visaStatus) out.push(field('Visa status', c.visaStatus));
  if (c.arbeitsErlaubnis) out.push(field('Work authorization', c.arbeitsErlaubnis));
  if (c.titleRecognition) out.push(field('Title recognition', c.titleRecognition));
  return out.join('\n');
}

const renderLanguages = (langs: any[]) =>
  langs.map((l) => field(stripTags(l.name), l.cefrLevel ?? l.level)).join('\n');

const renderLinks = (links: any[]) => links.map((l) => field(stripTags(l.label), l.url)).join('\n');

const renderCourses = (courses: any[]) =>
  courses.map((c) => `${stripTags(c.name)}, ${stripTags(c.institution)}, ${stripTags(c.date)}`).join('\n') + '\n';

const taskList = (tasks: string[] | undefined) => (tasks ?? []).map(stripTags).join('\n\n');

const EDUCATION_TITLE = /educa|ausbild|formaci|studi/i;

function sectionKind(section: { title: string; entries: any[] }): SectionKind {
  if (EDUCATION_TITLE.test(section.title)) return 'education';
  const hasRange = section.entries.some((e) => / [-–] /.test(String(e.dates)));
  return hasRange ? 'work' : 'other';
}

function renderEntry(kind: SectionKind, e: any): string {
  const out: string[] = [];
  if (kind === 'work') {
    const [from, to] = String(e.dates).split(/ [-–] /).map((s) => s.trim());
    out.push(field('Job Title', e.role), field('Company', e.company), field('Location', e.location));
    out.push(field('From', from), field('To', to));
    out.push(field('Role Description', taskList(e.tasks)));
    if (e.achievements?.length) out.push(field('Achievements', taskList(e.achievements)));
  } else {
    const [org, title] = kind === 'education' ? ['Institution', 'Degree'] : ['Organization', 'Role'];
    out.push(field(org, e.company), field(title, e.role), field('Location', e.location));
    out.push(field('Dates', e.dates), field('Details', taskList(e.tasks)));
  }
  return out.join('\n');
}

// ---------- block collection and deduplication ----------

function blocksOf(role: Role): { fixed: Block[]; sections: { title: string; kind: SectionKind; entries: Block[] }[] } {
  const d = role.data;
  const fixed: Block[] = [
    { kind: 'Contact', label: 'Contact', text: renderContact(d.contact) },
    { kind: 'Languages', label: 'Languages', text: renderLanguages(d.languages) },
    { kind: 'Links', label: 'Links', text: renderLinks(d.links) },
    { kind: 'Courses', label: 'Courses', text: renderCourses(d.courses) },
  ].filter((b) => b.text.trim());
  // softwareFreelancer spreads the array into an object ({...seniorfrontend.experiences}).
  const experiences: { title: string; entries: any[] }[] = Array.isArray(d.experiences)
    ? d.experiences
    : Object.values(d.experiences);
  const sections = experiences.map((s) => {
    const kind = sectionKind(s);
    return {
      title: s.title,
      kind,
      entries: s.entries.map((e) => ({
        kind: s.title,
        label: `${stripTags(e.company)} — ${stripTags(e.role)}`,
        text: renderEntry(kind, e),
      })),
    };
  });
  return { fixed, sections };
}

/** Registry of distinct block texts per (kind, label); tracks which roles use each. */
class Registry {
  private byText = new Map<string, { block: Block; roles: Set<number> }>();

  add(block: Block, roleIdx: number) {
    const key = `${block.kind}\u0000${block.text}`;
    const hit = this.byText.get(key);
    if (hit) hit.roles.add(roleIdx);
    else this.byText.set(key, { block, roles: new Set([roleIdx]) });
  }

  /** Shared blocks (used by 2+ roles) with unique display names. */
  shared() {
    const list = [...this.byText.entries()].filter(([, v]) => v.roles.size >= 2);
    const perLabel = new Map<string, number>();
    for (const [, v] of this.byText) {
      if (v.roles.size < 2) continue;
      const k = `${v.block.kind}\u0000${v.block.label}`;
      perLabel.set(k, (perLabel.get(k) ?? 0) + 1);
    }
    const seen = new Map<string, number>();
    return list.map(([key, v]) => {
      const lk = `${v.block.kind}\u0000${v.block.label}`;
      const n = (seen.get(lk) ?? 0) + 1;
      seen.set(lk, n);
      const name = perLabel.get(lk)! > 1 ? `${v.block.label} (variant ${n})` : v.block.label;
      return { key, name, ...v };
    });
  }
}

function generateMd(lang: string, roles: Role[]): string {
  const registry = new Registry();
  const perRole = roles.map((r, i) => {
    const b = blocksOf(r);
    b.fixed.forEach((x) => registry.add(x, i));
    b.sections.forEach((s) => s.entries.forEach((x) => registry.add(x, i)));
    return b;
  });
  const shared = registry.shared();
  const nameOf = new Map(shared.map((s) => [s.key, s.name]));
  const keyOf = (b: Block) => `${b.kind}\u0000${b.text}`;

  const roleTitle = (i: number) => `${i + 1}. ${roles[i].exportName}`;
  const lines: string[] = [];
  lines.push(`# CV Data - Application Reference (${lang.split('-')[0].toUpperCase()})`, '');
  lines.push(`This file mirrors [${lang}.mock.ts](${lang}.mock.ts) in plain text, meant for copy-pasting into`);
  lines.push('application forms field by field. No HTML tags, no leading quotes, one value per line.', '');
  lines.push('Blocks that are identical in two or more roles (contact info, languages, links, courses,');
  lines.push('education, shared jobs, ...) are written once in Common Data and only referenced by name in');
  lines.push('each role section below. Generated by scripts/generate-cv-md.ts, do not edit by hand.', '');
  lines.push('---', '', '## Common Data', '');

  const order = ['Contact', 'Languages', 'Links', 'Courses'];
  const kinds = [...new Set(shared.map((s) => s.block.kind))].sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  for (const kind of kinds) {
    for (const s of shared.filter((x) => x.block.kind === kind)) {
      const isFixed = order.includes(kind);
      lines.push(`### ${isFixed ? s.name : `${kind}: ${s.name}`}`, '');
      lines.push(`Used by: ${[...s.roles].map(roleTitle).join('; ')}`, '');
      lines.push(s.block.text.trimEnd(), '');
    }
  }
  lines.push('---', '');

  roles.forEach((role, i) => {
    const d = role.data;
    const b = perRole[i];
    lines.push(`## ${roleTitle(i)}`, '');
    lines.push(field('Occupation', d.occupation.value));
    const about = stripTags(String(d.aboutme).replace(/\s+/g, ' '));
    const skills = Object.entries(d.skills as Record<string, string[]>)
      .map(([g, items]) => `${g}: ${items.map(stripTags).join(', ')}`)
      .join('\n');

    const sameAbout = roles.findIndex((r, j) => j < i && stripTags(String(r.data.aboutme).replace(/\s+/g, ' ')) === about);
    lines.push(sameAbout >= 0 ? `About Me: same as ${roleTitle(sameAbout)}\n` : field('About Me', about));
    const sameSkills = roles.findIndex(
      (r, j) =>
        j < i &&
        Object.entries(r.data.skills as Record<string, string[]>)
          .map(([g, items]) => `${g}: ${items.map(stripTags).join(', ')}`)
          .join('\n') === skills
    );
    lines.push(sameSkills >= 0 ? `Skills: same as ${roleTitle(sameSkills)}\n` : `Skills:\n${skills}\n`);

    const ref = (blk: Block) => {
      const n = nameOf.get(keyOf(blk));
      return n ? `${n.startsWith(blk.kind) ? n : `${blk.kind}: ${n}`}: see Common Data` : undefined;
    };

    for (const blk of b.fixed) {
      const r = ref(blk);
      if (r) lines.push(r, '');
      else lines.push(`### ${blk.kind}`, '', blk.text.trimEnd(), '');
    }

    for (const sec of b.sections) {
      lines.push(`### ${sec.title}`, '');
      sec.entries.forEach((e, j) => {
        const n = nameOf.get(keyOf(e));
        if (n) lines.push(`${j + 1}. ${n} — see Common Data`);
      });
      sec.entries.forEach((e, j) => {
        if (nameOf.has(keyOf(e))) return;
        lines.push('', `#### ${sec.title} ${j + 1}: ${e.label}`, '', e.text.trimEnd());
      });
      lines.push('');
    }
    lines.push('---', '');
  });

  return lines.join('\n');
}

function main() {
  const lang = process.argv[2];
  if (!lang) {
    console.error('Usage: npx tsx scripts/generate-cv-md.ts <lang>   (e.g. en-EN, de-DE, es-ES)');
    process.exit(1);
  }
  const mockPath = path.join(MOCK_DIR, `${lang}.mock.ts`);
  if (!fs.existsSync(mockPath)) {
    console.error(`No mock file found: ${mockPath}`);
    process.exit(1);
  }
  const roles = loadRoles(mockPath);
  const outPath = path.join(MOCK_DIR, `${lang}.data.md`);
  fs.writeFileSync(outPath, generateMd(lang, roles));
  console.log(`Wrote ${outPath} (${roles.length} roles)`);
}

main();
