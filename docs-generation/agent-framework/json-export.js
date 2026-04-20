#!/usr/bin/env node
/**
 * Agent Framework — TypeDoc JSON Export
 *
 * Runs TypeDoc --json on @codebolt/agent, finds main exported classes
 * (ComposableAgent, UnifiedAgent, etc.) and outputs normalized modules+functions JSON.
 *
 * Usage:  node json-export.js
 * Output: ./data/typedoc-data.json
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const DOCS_ROOT  = path.resolve(SCRIPT_DIR, '../..');
const AGENT_PKG  = path.resolve(DOCS_ROOT, '../CodeBolt/packages/agent');
const TEMP_JSON  = path.resolve(SCRIPT_DIR, 'data/typedoc-raw.json');
const OUT_JSON   = path.resolve(SCRIPT_DIR, 'data/typedoc-data.json');

const toFwd = p => p.split(path.sep).join('/');

const ENTRY_POINTS = [
  path.resolve(AGENT_PKG, 'src/unified/index.ts'),
  path.resolve(AGENT_PKG, 'src/processor-pieces/index.ts'),
].filter(fs.existsSync);

const Kind = { CLASS: 128, INTERFACE: 256, PROPERTY: 1024, METHOD: 2048, FUNCTION: 64, ACCESSOR: 262144 };

function extractTypeName(t) {
  if (!t) return 'unknown';
  switch (t.type) {
    case 'reference': {
      let n = t.name || 'unknown';
      if (t.typeArguments?.length) n += `<${t.typeArguments.map(extractTypeName).join(', ')}>`;
      return n;
    }
    case 'intrinsic':    return t.name || 'unknown';
    case 'literal':      return JSON.stringify(t.value);
    case 'union':        return (t.types || []).map(extractTypeName).join(' | ');
    case 'intersection': return (t.types || []).map(extractTypeName).join(' & ');
    case 'array':        return `${extractTypeName(t.elementType)}[]`;
    case 'tuple':        return `[${(t.elements || []).map(extractTypeName).join(', ')}]`;
    case 'reflection':   return t.declaration?.signatures ? 'Function' : 'object';
    default:             return t.name || 'unknown';
  }
}

function extractComment(c) {
  if (!c) return '';
  return (c.summary || []).filter(p => p.kind === 'text' || p.kind === 'code').map(p => p.text).join('').trim();
}

function extractReturns(sig) {
  const r = { signatureTypeName: 'void', description: '', typeArgs: [] };
  if (!sig?.type) return r;
  r.signatureTypeName = extractTypeName(sig.type);
  const retTag = (sig.comment?.blockTags || []).find(b => b.tag === '@returns');
  if (retTag) r.description = (retTag.content || []).map(p => p.text).join('').trim();
  r.typeArgs = (sig.type?.typeArguments || []).map(a => ({ type: a.type, name: extractTypeName(a) }));
  return r;
}

function extractParams(sig) {
  return (sig?.parameters || []).map(p => ({
    name: p.name,
    typeName: extractTypeName(p.type),
    description: extractComment(p.comment) || '',
    isOptional: p.flags?.isOptional || false,
    defaultValue: p.defaultValue,
  }));
}

function findNode(root, pred) {
  if (!root) return null;
  if (pred(root)) return root;
  for (const c of root.children || []) { const f = findNode(c, pred); if (f) return f; }
  return null;
}

function findAll(root, pred, acc = []) {
  if (!root) return acc;
  if (pred(root)) acc.push(root);
  for (const c of root.children || []) findAll(c, pred, acc);
  return acc;
}

function classToModule(classNode, moduleName) {
  const functions = [];
  for (const m of classNode.children || []) {
    if (m.flags?.isPrivate || m.flags?.isProtected || m.name === 'constructor' || m.name.startsWith('_')) continue;
    let sig = null;
    if (m.kind === Kind.METHOD && m.signatures?.length) sig = m.signatures[0];
    else if (m.kind === Kind.PROPERTY && m.type?.declaration?.signatures?.length) sig = m.type.declaration.signatures[0];
    const source = (m.sources || sig?.sources || [])[0];
    functions.push({
      id: `${moduleName}.${m.name}`,
      name: m.name,
      displayName: m.name,
      module: moduleName,
      category: moduleName,
      source: source ? { filePath: source.fileName, lineNumber: source.line } : {},
      description: extractComment(m.comment) || (sig ? extractComment(sig.comment) : ''),
      parameters: sig ? extractParams(sig) : [],
      returns: sig ? extractReturns(sig) : { signatureTypeName: 'void', description: '', typeArgs: [] },
    });
  }
  return functions;
}

function extractModules(raw) {
  const modules = [];
  const allClasses = findAll(raw, n => n.kind === Kind.CLASS);

  // Target the main agent classes by name pattern
  const targetClasses = allClasses.filter(n =>
    n.name.includes('Agent') || n.name.includes('Processor') || n.name.includes('Tool')
  );

  for (const cls of targetClasses) {
    const fns = classToModule(cls, cls.name);
    if (fns.length > 0) {
      modules.push({
        name: cls.name,
        description: extractComment(cls.comment) || '',
        source: { filePath: (cls.sources || [])[0]?.fileName || '' },
        functions: fns,
      });
      console.log(`  ${cls.name}: ${fns.length} methods`);
    }
  }

  // Also capture top-level exported functions
  const topFuncs = findAll(raw, n => n.kind === Kind.FUNCTION && n.signatures?.length);
  if (topFuncs.length > 0) {
    const fns = topFuncs.map(fn => {
      const sig = fn.signatures[0];
      const source = (fn.sources || [])[0];
      return {
        id: `functions.${fn.name}`,
        name: fn.name,
        displayName: fn.name,
        module: 'functions',
        category: 'functions',
        source: source ? { filePath: source.fileName, lineNumber: source.line } : {},
        description: extractComment(sig?.comment) || '',
        parameters: extractParams(sig),
        returns: extractReturns(sig),
      };
    });
    modules.push({ name: 'functions', description: 'Top-level utility functions', source: {}, functions: fns });
    console.log(`  functions: ${fns.length} functions`);
  }

  return modules;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Agent Framework — TypeDoc JSON Export');
  console.log('='.repeat(60));

  fs.mkdirSync(path.dirname(TEMP_JSON), { recursive: true });

  console.log('\n1. Running TypeDoc --json...');
  const entryArgs = ENTRY_POINTS.map(ep => `--entryPoints ${toFwd(ep)}`).join(' ');
  const cmd = [
    'npx typedoc',
    entryArgs,
    '--tsconfig', toFwd(path.resolve(AGENT_PKG, 'tsconfig.json')),
    '--json', toFwd(TEMP_JSON),
    '--entryPointStrategy', 'resolve',
    '--excludePrivate', '--excludeInternal', '--pretty',
  ].join(' ');

  try {
    execSync(cmd, { cwd: DOCS_ROOT, stdio: 'inherit' });
  } catch (err) {
    console.error('TypeDoc failed:', err.message);
    process.exit(1);
  }

  console.log('\n2. Parsing...');
  const raw = JSON.parse(fs.readFileSync(TEMP_JSON, 'utf-8'));
  const modules = extractModules(raw);

  fs.writeFileSync(OUT_JSON, JSON.stringify({
    schemaVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    sdk: 'agent-framework',
    modules,
  }, null, 2));

  console.log(`\nModules: ${modules.length}, Functions: ${modules.reduce((s, m) => s + m.functions.length, 0)}`);
  console.log(`Output: ${OUT_JSON}`);
}

main();
