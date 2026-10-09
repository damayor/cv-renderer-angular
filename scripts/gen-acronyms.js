// Builds scripts/acronyms.json ({ EN: { role: acronym }, ... }) from the mock files.
// Roles are the keys of `files` in loadMockCVData.ts; acronyms are each export's
// `occupation.acronym`. Run: npm run acronyms
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const loaderSrc = fs.readFileSync(path.join(root, 'src/app/services/loadMockCVData.ts'), 'utf8');

// 1) local alias -> { lang, exportName } from the import blocks
const aliasToExport = {};
const importRe = /import\s*\{([^}]*)\}\s*from\s*'[^']*\/([a-z]{2})-[A-Z]{2}\.mock'/g;
for (const [, names, code] of loaderSrc.matchAll(importRe)) {
  const lang = code.toUpperCase();
  for (const item of names.split(',').map(s => s.trim()).filter(Boolean)) {
    const [exp, alias = exp] = item.split(/\s+as\s+/);
    aliasToExport[`${lang}:${alias}`] = exp;
  }
}

// 2) export name -> acronym, per mock file (first `acronym:` inside each export block)
function acronymsOf(file) {
  const src = fs.readFileSync(path.join(root, 'src/assets/cv-data', file), 'utf8');
  const out = {};
  for (const block of src.split(/^export const /m).slice(1)) {
    const name = block.match(/^(\w+)/)[1];
    const m = block.match(/acronym:\s*['"]([^'"]+)['"]/);
    if (m) out[name] = m[1];
  }
  return out;
}

const mockFiles = { EN: 'en-EN.mock.ts', DE: 'de-DE.mock.ts', ES: 'es-ES.mock.ts' };
const result = {};
for (const [lang, file] of Object.entries(mockFiles)) {
  const byExport = acronymsOf(file);
  const mapBody = loaderSrc.match(new RegExp(`\\b${lang}:\\s*\\{([\\s\\S]*?)\\n  \\}`))[1];
  result[lang] = {};
  for (const line of mapBody.split('\n')) {
    const m = line.trim().match(/^(\w+)(?::\s*(\w+))?,?$/);
    if (!m) continue;
    const [, role, alias = role] = m;
    const exp = aliasToExport[`${lang}:${alias}`];
    if (exp && byExport[exp]) result[lang][role] = byExport[exp];
  }
}

fs.writeFileSync(path.join(__dirname, 'acronyms.json'), JSON.stringify(result, null, 2) + '\n');
console.log('scripts/acronyms.json updated:', result);
