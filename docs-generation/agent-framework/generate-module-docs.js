#!/usr/bin/env node
/**
 * Agent Framework — Module Docs Generator
 *
 * Reads data/typedoc-data.json and generates Docusaurus-ready markdown:
 *   docs/05_reference/05_agent-framework/02_api-reference/{class}/index.md
 *   docs/05_reference/05_agent-framework/02_api-reference/{class}/{method}.md
 *
 * Usage:
 *   node generate-module-docs.js
 *   node generate-module-docs.js --clean
 *   node generate-module-docs.js --module=ComposableAgent
 */

const fs   = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const DOCS_ROOT  = path.resolve(SCRIPT_DIR, '../..');
const DATA_FILE  = path.resolve(SCRIPT_DIR, 'data/typedoc-data.json');
const OUT_DIR    = path.resolve(DOCS_ROOT, 'docs/05_reference/05_agent-framework/02_api-reference');
const IMPORT     = `import { /* ClassName */ } from '@codebolt/agent';`;

const clean_flag    = process.argv.includes('--clean');
const module_filter = (process.argv.find(a => a.startsWith('--module=')) || '').split('=')[1] || null;

function escapeMdx(text) {
  if (!text) return '';
  return text.split(/(`[^`]*`)/g).map((part, i) => {
    if (i % 2 === 1) return part;
    return part.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
  }).join('');
}

function paramTable(params) {
  if (!params?.length) return '_No parameters._';
  const rows = params.map(p => {
    const req  = p.isOptional ? 'No' : 'Yes';
    const def  = p.defaultValue ? ` _(default: \`${p.defaultValue}\`)_` : '';
    const desc = escapeMdx((p.description || '').replace(/\|/g, '\\|')) + def;
    return `| \`${p.name}\` | \`${p.typeName}\` | ${req} | ${desc} |`;
  });
  return ['| Parameter | Type | Required | Description |', '|---|---|---|---|', ...rows].join('\n');
}

function exampleCall(className, name, params) {
  const args = (params || []).filter(p => !p.isOptional).map(p => {
    if (p.typeName === 'string')  return `'${p.name}'`;
    if (p.typeName === 'number')  return '0';
    if (p.typeName === 'boolean') return 'true';
    return `/* ${p.typeName} */`;
  }).join(', ');
  return `const result = await agent.${name}(${args});`;
}

function sig(className, name, params, ret) {
  const p = (params || []).map(p => `${p.name}${p.isOptional ? '?' : ''}: ${p.typeName}`).join(', ');
  return `agent.${name}(${p}): ${ret}`;
}

function methodPage(func, className) {
  const { name, description, parameters, returns } = func;
  return `---
title: ${name}
---

# \`${name}\`

\`\`\`typescript
${sig(className, name, parameters, returns.signatureTypeName)}
\`\`\`

${escapeMdx(description || '')}

## Parameters

${paramTable(parameters)}

## Returns

\`${returns.signatureTypeName}\`${returns.description ? ' — ' + escapeMdx(returns.description) : ''}

## Example

\`\`\`typescript
import { ${className} } from '@codebolt/agent';

const agent = new ${className}({ /* config */ });

${exampleCall(className, name, parameters)}
console.log(result);
\`\`\`
`;
}

function classIndex(mod) {
  const { name, description, functions } = mod;

  const tableRows = (functions || []).map(f =>
    `| [\`${f.name}\`](./${f.name}) | ${escapeMdx((f.description || '').split('\n')[0].replace(/\|/g, '\\|'))} |`
  );
  const quickRef = ['| Method | Description |', '|---|---|', ...tableRows].join('\n');

  const methodSections = (functions || []).map(f => `---

### \`${f.name}\`

\`\`\`typescript
${sig(name, f.name, f.parameters, f.returns.signatureTypeName)}
\`\`\`

${escapeMdx(f.description || '')}

${paramTable(f.parameters)}

**Returns:** \`${f.returns.signatureTypeName}\`${f.returns.description ? ' — ' + escapeMdx(f.returns.description) : ''}

[Full reference →](./${f.name})
`).join('\n');

  return `---
title: ${name}
---

# \`${name}\`

${escapeMdx(description || `The \`${name}\` class from \`@codebolt/agent\`.`)}

\`\`\`typescript
import { ${name} } from '@codebolt/agent';
\`\`\`

## Quick Reference

${quickRef}

## Methods

${methodSections}
`;
}

function apiReferenceIndex(modules) {
  const rows = modules.map(m =>
    `| [${m.name}](./${m.name}/) | ${m.functions.length} | ${escapeMdx((m.description || '').split('\n')[0])} |`
  );
  return `---
title: API Reference
sidebar_position: 1
---

# Agent Framework — API Reference

Classes and utilities exported by \`@codebolt/agent\`.

\`\`\`typescript
import { ComposableAgent, createTool } from '@codebolt/agent';
\`\`\`

## Classes & Modules

| Name | Methods | Description |
|---|---|---|
${rows.join('\n')}
`;
}

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

    fs.writeFileSync(path.join(mDir, '_category_.json'), JSON.stringify(
      { label: mod.name, position: i + 1, collapsible: true, collapsed: true }, null, 2
    ));
    fs.writeFileSync(path.join(mDir, 'index.md'), classIndex(mod));

    for (const func of mod.functions || []) {
      fs.writeFileSync(path.join(mDir, `${func.name}.md`), methodPage(func, mod.name));
      totalMethods++;
    }
    console.log(`  ${mod.name}: ${mod.functions?.length || 0} methods`);
  }

  console.log(`\nDone — ${modules.length} classes, ${totalMethods} method pages`);
  console.log(`Output: ${OUT_DIR}`);
}

main();
