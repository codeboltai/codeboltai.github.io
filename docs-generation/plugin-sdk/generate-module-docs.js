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
 *   node generate-module-docs.js --module chat
 */

const fs   = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const DOCS_ROOT  = path.resolve(SCRIPT_DIR, '../..');
const DATA_FILE  = path.resolve(SCRIPT_DIR, 'data/typedoc-data.json');
const OUT_DIR    = path.resolve(DOCS_ROOT, 'docs/05_reference/03_plugin-sdk/02_api-reference');

// ─── helpers ─────────────────────────────────────────────────────────────────

const clean_flag  = process.argv.includes('--clean');
const module_filter = (() => {
  const a = process.argv.find(a => a.startsWith('--module='));
  return a ? a.split('=')[1] : null;
})();

function slug(name) {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function escapeYaml(s) {
  if (!s) return '""';
  if (s.includes(':') || s.includes('"') || s.includes("'") || s.includes('\n')) {
    return `"${s.replace(/"/g, '\\"')}"`;
  }
  return s;
}

function paramTable(params) {
  if (!params?.length) return '_None_';
  const rows = params.map(p => {
    const opt = p.isOptional ? ' _(optional)_' : '';
    const def = p.defaultValue ? ` Default: \`${p.defaultValue}\`` : '';
    const desc = (p.description || '').replace(/\|/g, '\\|');
    return `| \`${p.name}\` | \`${p.typeName}\`${opt} | ${desc}${def} |`;
  });
  return ['| Parameter | Type | Description |', '|---|---|---|', ...rows].join('\n');
}

function buildExampleCall(moduleName, funcName, params) {
  const args = (params || []).map(p => {
    if (p.isOptional) return;
    switch (p.typeName) {
      case 'string': return `'${p.name}'`;
      case 'number': return '0';
      case 'boolean': return 'true';
      default: return `/* ${p.typeName} */`;
    }
  }).filter(Boolean).join(', ');
  return `await plugin.${moduleName}.${funcName}(${args});`;
}

// ─── method page ─────────────────────────────────────────────────────────────

function methodPage(func, moduleName) {
  const { name, description, parameters, returns } = func;
  const paramsStr = (parameters || [])
    .map(p => `${p.name}${p.isOptional ? '?' : ''}: ${p.typeName}`)
    .join(', ');
  const sig = `plugin.${moduleName}.${name}(${paramsStr}): ${returns.signatureTypeName}`;

  return `---
name: ${name}
cbbaseinfo:
  description: ${escapeYaml(description || `Call ${name} on the Plugin SDK ${moduleName} module.`)}
cbparameters:
  parameters:
${(parameters || []).map(p => `    - name: ${p.name}
      typeName: ${p.typeName}
      description: ${escapeYaml(p.description || '')}
      isOptional: ${p.isOptional}`).join('\n') || '    []'}
  returns:
    signatureTypeName: "${returns.signatureTypeName}"
    description: ${escapeYaml(returns.description || '')}
data:
  name: ${name}
  category: ${moduleName}
  link: ${name}.md
---
# ${name}

\`\`\`typescript
${sig}
\`\`\`

${description || ''}

## Parameters

${paramTable(parameters)}

## Returns

**\`${returns.signatureTypeName}\`**${returns.description ? ' — ' + returns.description : ''}

## Example

\`\`\`typescript
import plugin from '@codebolt/plugin-sdk';

${buildExampleCall(moduleName, name, parameters)}
\`\`\`
`;
}

// ─── module index page ────────────────────────────────────────────────────────

function moduleIndex(mod) {
  const { name, description, functions } = mod;
  const title = name.charAt(0).toUpperCase() + name.slice(1) + ' API';

  const categoryItems = (functions || []).map(f => `  - name: ${f.name}
    link: /docs/reference/plugin-sdk/api-reference/${name}/${f.name}
    description: ${escapeYaml(f.description || f.name)}`).join('\n');

  return `---
cbapicategory:
${categoryItems}
---
# ${title}

${description || `The \`${name}\` module of the Plugin SDK.`}

<CBAPICategory />

## Methods

${(functions || []).map(f => `- [\`${f.name}()\`](./${f.name}) — ${f.description || ''}`).join('\n')}
`;
}

// ─── _category_.json ─────────────────────────────────────────────────────────

function categoryJson(name, position) {
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  return JSON.stringify({ label, position, collapsible: true, collapsed: true }, null, 2);
}

// ─── top-level index ─────────────────────────────────────────────────────────

function apiReferenceIndex(modules) {
  const rows = modules.map(m =>
    `| [${m.name}](./${m.name}/) | ${m.functions.length} methods | ${m.description || ''} |`
  );
  return `---
title: API Reference
sidebar_position: 1
---
# Plugin SDK — API Reference

All HTTP API modules exposed by \`@codebolt/plugin-sdk\` via the \`plugin\` singleton.

\`\`\`typescript
import plugin from '@codebolt/plugin-sdk';
\`\`\`

## Modules

| Module | Methods | Description |
|---|---|---|
${rows.join('\n')}
`;
}

// ─── main ────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`JSON data not found: ${DATA_FILE}`);
    console.error('Run: node json-export.js first');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  let modules = data.modules || [];

  if (module_filter) {
    modules = modules.filter(m => m.name === module_filter);
    if (!modules.length) { console.error(`Module '${module_filter}' not found`); process.exit(1); }
  }

  if (clean_flag) {
    if (fs.existsSync(OUT_DIR)) {
      console.log(`Cleaning: ${OUT_DIR}`);
      fs.rmSync(OUT_DIR, { recursive: true, force: true });
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Top-level index
  fs.writeFileSync(path.join(OUT_DIR, 'index.md'), apiReferenceIndex(modules));
  fs.writeFileSync(path.join(OUT_DIR, '_category_.json'), JSON.stringify({
    label: 'API Reference', position: 2, collapsible: true, collapsed: false,
  }, null, 2));

  let totalMethods = 0;

  for (let i = 0; i < modules.length; i++) {
    const mod = modules[i];
    const modDir = path.join(OUT_DIR, mod.name);
    fs.mkdirSync(modDir, { recursive: true });

    // _category_.json
    fs.writeFileSync(path.join(modDir, '_category_.json'), categoryJson(mod.name, i + 1));

    // module index
    fs.writeFileSync(path.join(modDir, 'index.md'), moduleIndex(mod));

    // per-method pages
    for (const func of mod.functions || []) {
      const fileName = `${func.name}.md`;
      fs.writeFileSync(path.join(modDir, fileName), methodPage(func, mod.name));
      totalMethods++;
    }

    console.log(`  ${mod.name}: ${mod.functions?.length || 0} methods`);
  }

  console.log(`\nDone — ${modules.length} modules, ${totalMethods} method pages`);
  console.log(`Output: ${OUT_DIR}`);
}

main();
