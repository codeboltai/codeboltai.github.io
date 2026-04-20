#!/usr/bin/env node
/**
 * TypeDoc Generator — @codebolt/agent (Agent Framework)
 *
 * Generates Docusaurus-ready markdown from the agent package TypeScript source.
 *
 * Usage:
 *   node generate-docs.js
 *   node generate-docs.js --clean
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const DOCS_ROOT  = path.resolve(SCRIPT_DIR, '../..');
const AGENT_PKG  = path.resolve(DOCS_ROOT, '../CodeBolt/packages/agent');
const OUT_DIR    = path.resolve(DOCS_ROOT, 'docs/05_reference/05_agent-framework/type-reference');

const toFwd = p => p.split(path.sep).join('/');

// Multiple entry points — agent exposes several submodule patterns
const ENTRY_POINTS = [
  path.resolve(AGENT_PKG, 'src/unified/index.ts'),
  path.resolve(AGENT_PKG, 'src/processor-pieces/index.ts'),
].filter(fs.existsSync);

const TYPEDOC_OPTIONS = {
  plugin:                ['typedoc-plugin-markdown'],
  skipErrorChecking:     true,
  excludePrivate:        true,
  excludeProtected:      false,
  excludeInternal:       true,
  excludeNotDocumented:  false,
  hideBreadcrumbs:       true,
  hidePageHeader:        false,
  useCodeBlocks:         true,
  expandObjects:         true,
  expandParameters:      true,
  outputFileStrategy:    'members',
  parametersFormat:      'table',
  propertiesFormat:      'table',
  enumMembersFormat:     'table',
  typeDeclarationFormat: 'table',
  sort:                  ['alphabetical'],
};

function clean() {
  if (fs.existsSync(OUT_DIR)) {
    console.log(`Cleaning: ${OUT_DIR}`);
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
}

function buildCommand() {
  const args = ['npx', 'typedoc'];

  // Relative to AGENT_PKG (cwd when running)
  ENTRY_POINTS.forEach(ep => args.push('--entryPoints', toFwd(path.relative(AGENT_PKG, ep))));
  args.push(
    '--tsconfig', 'tsconfig.json',
    '--out', toFwd(OUT_DIR),
    '--entryPointStrategy', 'resolve',
    '--readme', 'none',
  );

  Object.entries(TYPEDOC_OPTIONS).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach(v => args.push(`--${key}`, v));
    } else if (val === true) {
      args.push(`--${key}`);
    } else if (val !== false) {
      args.push(`--${key}`, val);
    }
  });

  return args.join(' ');
}

function renameReadmeToIndex(dir) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    let stat;
    try { stat = fs.statSync(full); } catch { continue; }
    if (stat.isDirectory()) {
      renameReadmeToIndex(full);
    } else if (file === 'README.md') {
      let content = fs.readFileSync(full, 'utf-8');
      content = content.replace(/^---\ntitle: README\n---/, '---\ntitle: Overview\n---');
      fs.writeFileSync(path.join(dir, 'index.md'), content);
      fs.unlinkSync(full);
    }
  }
}

function postProcess(dir) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    let stat;
    try { stat = fs.statSync(full); } catch { continue; }
    if (stat.isDirectory()) {
      postProcess(full);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(full, 'utf-8');

      content = content.replace(/<!--[\s\S]*?-->/g, '');
      content = content.replace(/Defined in: \[([^\]]+)\]\([^)]+\)/g, 'Defined in: $1');

      if (!content.startsWith('---')) {
        const title = path.basename(full, '.md');
        content = `---\ntitle: ${title}\n---\n\n` + content;
      }

      content = content.replace(/\]\(([^)]+)\.md\)/g, ']($1)');
      content = content.replace(/\]\(([^)]*?)README\)/g, ']($1index)');

      // Escape { } in all non-code lines for MDX
      let inCode = false, inFrontmatter = false, frontmatterDone = false, fmCount = 0;
      content = content.split('\n').map(line => {
        if (!frontmatterDone && line === '---') {
          fmCount++;
          if (fmCount === 1) { inFrontmatter = true; return line; }
          if (fmCount === 2) { inFrontmatter = false; frontmatterDone = true; return line; }
        }
        if (inFrontmatter) return line;
        if (line.startsWith('```')) { inCode = !inCode; return line; }
        if (inCode) return line;
        return line.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
      }).join('\n');

      fs.writeFileSync(full, content);
    }
  }
}

function writeCategoryFile() {
  const category = {
    label: 'Type Reference',
    position: 2,
    link: { type: 'doc', id: 'reference/agent-framework/type-reference/index' },
  };
  fs.writeFileSync(path.join(OUT_DIR, '_category_.json'), JSON.stringify(category, null, 2));
}

function main() {
  const clean_flag = process.argv.includes('--clean');
  const start = Date.now();

  console.log('='.repeat(60));
  console.log('Agent Framework — TypeDoc Generator');
  console.log('='.repeat(60));
  console.log(`Source:  ${AGENT_PKG}`);
  console.log(`Output:  ${OUT_DIR}\n`);

  if (clean_flag) clean();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // NOTE: The @codebolt/agent package requires the CodeBolt monorepo workspace
  // deps to be installed (npm install from the CodeBolt root) before
  // TypeDoc can resolve @codebolt/types imports.
  try {
    execSync(buildCommand(), { stdio: 'inherit', cwd: AGENT_PKG });
  } catch (err) {
    console.error('TypeDoc failed:', err.message);
    console.error('Tip: Run `npm install` in the CodeBolt monorepo root first.');
    process.exit(1);
  }

  writeCategoryFile();
  renameReadmeToIndex(OUT_DIR);
  postProcess(OUT_DIR);

  const elapsed = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`\nDone in ${elapsed}s — output: ${OUT_DIR}`);
}

main();
