#!/usr/bin/env node
/**
 * Plugin SDK — Module Docs Generator
 *
 * Reads data/typedoc-data.json and generates Docusaurus-ready markdown:
 *   docs/05_reference/03_plugin-sdk/02_api-reference/{module}/index.md
 *   docs/05_reference/03_plugin-sdk/02_api-reference/{module}/{method}.md
 *
 * Usage:
 *   node generate-module-docs.js
 *   node generate-module-docs.js --clean
 *   node generate-module-docs.js --module=chat
 */

const fs   = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const DOCS_ROOT  = path.resolve(SCRIPT_DIR, '../..');
const DATA_FILE  = path.resolve(SCRIPT_DIR, 'data/typedoc-data.json');
const OUT_DIR    = path.resolve(DOCS_ROOT, 'docs/05_reference/03_plugin-sdk/02_api-reference');
const IMPORT     = `import plugin from '@codebolt/plugin-sdk';`;

const clean_flag    = process.argv.includes('--clean');
const module_filter = (process.argv.find(a => a.startsWith('--module=')) || '').split('=')[1] || null;

// ─── helpers ─────────────────────────────────────────────────────────────────

// Escape { } in plain-text markdown so MDX doesn't try to parse them as JSX expressions.
// Leaves content inside backtick spans untouched.
function escapeMdx(text) {
  if (!text) return '';
  // Split on backtick spans, escape only the non-code parts
  return text.split(/(`[^`]*`)/g).map((part, i) => {
    if (i % 2 === 1) return part; // inside backticks — leave alone
    return part.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
  }).join('');
}

function escapeYaml(s) {
  if (!s) return '""';
  s = String(s).replace(/\n/g, ' ').trim();
  return (s.includes(':') || s.includes('"') || s.includes("'"))
    ? `"${s.replace(/"/g, '\\"')}"`
    : s || '""';
}

function paramTable(params) {
  if (!params?.length) return '_No parameters._';
  const header = '| Parameter | Type | Required | Description |';
  const sep    = '|---|---|---|---|';
  const rows   = params.map(p => {
    const req  = p.isOptional ? 'No' : 'Yes';
    const def  = p.defaultValue ? ` _(default: \`${p.defaultValue}\`)_` : '';
    const desc = escapeMdx((p.description || '').replace(/\|/g, '\\|')) + def;
    return `| \`${p.name}\` | \`${p.typeName}\` | ${req} | ${desc} |`;
  });
  return [header, sep, ...rows].join('\n');
}

function exampleCall(module, name, params) {
  const args = (params || [])
    .filter(p => !p.isOptional)
    .map(p => {
      if (p.typeName === 'string')  return `'${p.name}'`;
      if (p.typeName === 'number')  return '0';
      if (p.typeName === 'boolean') return 'true';
      return `/* ${p.typeName} */`;
    }).join(', ');
  return `const result = await plugin.${module}.${name}(${args});`;
}

function sig(module, name, params, ret) {
  const p = (params || []).map(p => `${p.name}${p.isOptional ? '?' : ''}: ${p.typeName}`).join(', ');
  return `plugin.${module}.${name}(${p}): ${ret}`;
}

// ─── individual method page ───────────────────────────────────────────────────

function methodPage(func, moduleName) {
  const { name, description, parameters, returns } = func;
  const desc = escapeMdx(description || '');

  return `---
title: ${name}
---

# \`${name}\`

\`\`\`typescript
${sig(moduleName, name, parameters, returns.signatureTypeName)}
\`\`\`

${desc}

## Parameters

${paramTable(parameters)}

## Returns

\`${returns.signatureTypeName}\`${returns.description ? ' — ' + returns.description : ''}

## Example

\`\`\`typescript
${IMPORT}

${exampleCall(moduleName, name, parameters)}
console.log(result);
\`\`\`
`;
}

// ─── module index page ────────────────────────────────────────────────────────

function moduleIndex(mod) {
  const { name, description, functions } = mod;
  const title = name.charAt(0).toUpperCase() + name.slice(1) + ' API';

  // Quick reference table
  const tableRows = (functions || []).map(f =>
    `| [\`${f.name}\`](./${f.name}) | ${(f.description || '').split('\n')[0].replace(/\|/g, '\\|')} |`
  );
  const quickRef = [
    '| Method | Description |',
    '|---|---|',
    ...tableRows,
  ].join('\n');

  // Full inline method sections
  const methodSections = (functions || []).map(f => {
    const desc = escapeMdx(f.description || '');
    return `---

### \`${f.name}\`

\`\`\`typescript
${sig(name, f.name, f.parameters, f.returns.signatureTypeName)}
\`\`\`

${desc}

${paramTable(f.parameters)}

**Returns:** \`${f.returns.signatureTypeName}\`${f.returns.description ? ' — ' + f.returns.description : ''}

[Full reference →](./${f.name})
`;
  }).join('\n');

  return `---
title: ${title}
---

# ${title}

${description || `The \`${name}\` module of the \`@codebolt/plugin-sdk\`.`}

\`\`\`typescript
${IMPORT}
\`\`\`

## Quick Reference

${quickRef}

## Methods

${methodSections}
`;
}

// ─── top-level api-reference index ───────────────────────────────────────────

function apiReferenceIndex(modules) {
  const rows = modules.map(m => {
    const label = m.name.charAt(0).toUpperCase() + m.name.slice(1);
    return `| [${label}](./${m.name}/) | ${m.functions.length} | ${(m.description || '').split('\n')[0]} |`;
  });
  return `---
title: API Reference
sidebar_position: 1
---

# Plugin SDK — API Reference

All modules exposed by \`@codebolt/plugin-sdk\` via the \`plugin\` singleton.

\`\`\`typescript
import plugin from '@codebolt/plugin-sdk';
\`\`\`

## Modules

| Module | Methods | Description |
|---|---|---|
${rows.join('\n')}
`;
}

// ─── main ─────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`Data not found: ${DATA_FILE}\nRun: node json-export.js first`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  let modules = data.modules || [];

  if (module_filter) {
    modules = modules.filter(m => m.name === module_filter);
    if (!modules.length) { console.error(`Module '${module_filter}' not found`); process.exit(1); }
  }

  if (clean_flag && fs.existsSync(OUT_DIR)) {
    console.log(`Cleaning: ${OUT_DIR}`);
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  fs.writeFileSync(path.join(OUT_DIR, 'index.md'), apiReferenceIndex(modules));
  fs.writeFileSync(path.join(OUT_DIR, '_category_.json'), JSON.stringify(
    { label: 'API Reference', position: 2, collapsible: true, collapsed: false }, null, 2
  ));

  let totalMethods = 0;

  for (let i = 0; i < modules.length; i++) {
    const mod  = modules[i];
    const mDir = path.join(OUT_DIR, mod.name);
    fs.mkdirSync(mDir, { recursive: true });

    const label = mod.name.charAt(0).toUpperCase() + mod.name.slice(1);
    fs.writeFileSync(path.join(mDir, '_category_.json'), JSON.stringify(
      { label, position: i + 1, collapsible: true, collapsed: true }, null, 2
    ));

    fs.writeFileSync(path.join(mDir, 'index.md'), moduleIndex(mod));

    for (const func of mod.functions || []) {
      fs.writeFileSync(path.join(mDir, `${func.name}.md`), methodPage(func, mod.name));
      totalMethods++;
    }

    console.log(`  ${mod.name}: ${mod.functions?.length || 0} methods`);
  }

  console.log(`\nDone — ${modules.length} modules, ${totalMethods} method pages`);
  console.log(`Output: ${OUT_DIR}`);
}

main();
