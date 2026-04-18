#!/usr/bin/env node
/**
 * Client SDK — TypeDoc JSON Export
 *
 * Runs TypeDoc with --json on @codebolt/clientsdk, finds CodeBoltClient class
 * and all referenced API classes, then outputs a normalized modules+functions JSON.
 *
 * Usage:
 *   node json-export.js
 *
 * Output: ./data/typedoc-data.json
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR  = __dirname;
const DOCS_ROOT   = path.resolve(SCRIPT_DIR, '../..');
const MONOREPO    = path.resolve(DOCS_ROOT, '../CodeBolt');
const CLIENT_SDK  = path.resolve(MONOREPO, 'packages/clientsdk');
const TEMP_JSON   = path.resolve(SCRIPT_DIR, 'data/typedoc-raw.json');
const OUT_JSON    = path.resolve(SCRIPT_DIR, 'data/typedoc-data.json');

const toFwd = p => p.split(path.sep).join('/');

// ─── TypeDoc kind constants ─────────────────────────────────────────────────
const Kind = {
  CLASS:     128,
  INTERFACE: 256,
  PROPERTY:  1024,
  METHOD:    2048,
  ACCESSOR:  262144,
};

// ─── type extraction ─────────────────────────────────────────────────────────

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
    case 'query':        return `typeof ${t.queryType?.name || 'unknown'}`;
    case 'predicate':    return `${t.name} is ${extractTypeName(t.targetType)}`;
    default:             return t.name || 'unknown';
  }
}

function extractComment(comment) {
  if (!comment) return '';
  return (comment.summary || []).filter(p => p.kind === 'text' || p.kind === 'code').map(p => p.text).join('').trim();
}

function extractBlockTag(comment, tag) {
  if (!comment?.blockTags) return '';
  const t = comment.blockTags.find(b => b.tag === tag);
  if (!t?.content) return '';
  return t.content.filter(p => p.kind === 'text' || p.kind === 'code').map(p => p.text).join('').trim();
}

function extractParams(signature) {
  if (!signature?.parameters) return [];
  return signature.parameters.map(p => ({
    name: p.name,
    typeName: extractTypeName(p.type),
    description: extractComment(p.comment) || '',
    isOptional: p.flags?.isOptional || false,
    defaultValue: p.defaultValue,
  }));
}

function extractReturns(signature) {
  const r = { signatureTypeName: 'void', description: '', typeArgs: [] };
  if (!signature?.type) return r;
  r.signatureTypeName = extractTypeName(signature.type);
  r.description = extractBlockTag(signature.comment, '@returns');
  r.typeArgs = (signature.type?.typeArguments || []).map(a => ({ type: a.type || 'reference', name: extractTypeName(a) }));
  return r;
}

// ─── node helpers ─────────────────────────────────────────────────────────────

function findNode(root, predicate) {
  if (!root) return null;
  if (predicate(root)) return root;
  for (const c of root.children || []) {
    const found = findNode(c, predicate);
    if (found) return found;
  }
  return null;
}

function findAll(root, predicate, results = []) {
  if (!root) return results;
  if (predicate(root)) results.push(root);
  for (const c of root.children || []) findAll(c, predicate, results);
  return results;
}

// ─── process a class/interface into function list ────────────────────────────

function processClass(classNode, moduleName) {
  const functions = [];
  for (const m of classNode.children || []) {
    if (m.flags?.isPrivate || m.flags?.isProtected) continue;
    if (m.name === 'constructor') continue;
    if (m.name.startsWith('_')) continue;
    if (m.comment?.modifierTags?.includes('@internal')) continue;

    let signature = null;
    if (m.kind === Kind.METHOD && m.signatures?.length) {
      signature = m.signatures[0];
    } else if (m.kind === Kind.PROPERTY && m.type?.declaration?.signatures?.length) {
      signature = m.type.declaration.signatures[0];
    }

    const description = extractComment(m.comment) || (signature ? extractComment(signature.comment) : '');
    const source = (m.sources || signature?.sources || [])[0];

    functions.push({
      id: `${moduleName}.${m.name}`,
      name: m.name,
      displayName: m.name.charAt(0).toUpperCase() + m.name.slice(1),
      module: moduleName,
      category: moduleName,
      source: source ? { filePath: source.fileName, lineNumber: source.line } : {},
      description,
      parameters: signature ? extractParams(signature) : [],
      returns: signature ? extractReturns(signature) : { signatureTypeName: 'void', description: '', typeArgs: [] },
    });
  }
  return functions;
}

// ─── main extraction ─────────────────────────────────────────────────────────

function extractModules(typedocJson) {
  const modules = [];

  const clientNode = findNode(typedocJson, n => n.name === 'CodeBoltClient' && n.kind === Kind.CLASS);
  if (!clientNode) {
    console.warn('Could not find CodeBoltClient class — searching for alternatives...');
    // Try CodeboltClient (lowercase b)
    const alt = findNode(typedocJson, n => n.name === 'CodeboltClient' && n.kind === Kind.CLASS);
    if (!alt) { console.error('No client class found'); return modules; }
  }
  const mainClass = clientNode || findNode(typedocJson, n =>
    (n.name === 'CodeboltClient' || n.name === 'ClientSdk') && n.kind === Kind.CLASS
  );

  console.log(`Found ${mainClass.name} with ${mainClass.children?.length || 0} members`);

  // Build type map for reference resolution
  const typeMap = new Map();
  findAll(typedocJson, n => n.kind === Kind.CLASS || n.kind === Kind.INTERFACE).forEach(n => {
    typeMap.set(n.name, n);
  });

  // Track used accessor/getter names as module entries
  const seenModules = new Set();

  for (const member of mainClass.children || []) {
    // Skip non-public, constructors, internals
    if (member.flags?.isPrivate || member.flags?.isProtected) continue;
    if (member.name === 'constructor') continue;
    if (member.name.startsWith('_')) continue;
    if (member.kind !== Kind.PROPERTY && member.kind !== Kind.ACCESSOR) continue;

    // Resolve referenced API class
    // Getters (ACCESSOR) expose the type via getSignature.type; properties via type
    const refName = member.getSignature?.type?.name || member.type?.name;
    if (!refName || seenModules.has(member.name)) continue;
    seenModules.add(member.name);

    const refNode = typeMap.get(refName);
    let functions = [];

    if (refNode && (refNode.kind === Kind.CLASS || refNode.kind === Kind.INTERFACE)) {
      functions = processClass(refNode, member.name);
    } else if (member.type?.declaration?.children) {
      functions = processClass({ children: member.type.declaration.children }, member.name);
    } else if (member.getSignature?.type?.declaration?.children) {
      functions = processClass({ children: member.getSignature.type.declaration.children }, member.name);
    }

    const description = extractComment(member.comment) ||
                        extractComment(member.getSignature?.comment) || '';

    if (functions.length > 0) {
      modules.push({
        name: member.name,
        description,
        apiClass: refName || null,
        source: { filePath: (member.sources || [])[0]?.fileName || '' },
        functions,
      });
      console.log(`  ${member.name} (${refName || 'inline'}): ${functions.length} methods`);
    }
  }

  return modules;
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('='.repeat(60));
  console.log('Client SDK — TypeDoc JSON Export');
  console.log('='.repeat(60));

  fs.mkdirSync(path.dirname(TEMP_JSON), { recursive: true });
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });

  console.log('\n1. Running TypeDoc --json...');
  const cmd = [
    'npx typedoc',
    '--entryPoints', toFwd(path.resolve(CLIENT_SDK, 'src/index.ts')),
    '--tsconfig', toFwd(path.resolve(CLIENT_SDK, 'tsconfig.json')),
    '--json', toFwd(TEMP_JSON),
    '--entryPointStrategy', 'resolve',
    '--excludePrivate',
    '--excludeInternal',
    '--pretty',
  ].join(' ');

  try {
    execSync(cmd, { cwd: DOCS_ROOT, stdio: 'inherit' });
  } catch (err) {
    console.error('TypeDoc failed:', err.message);
    process.exit(1);
  }

  console.log('\n2. Parsing TypeDoc output...');
  const raw = JSON.parse(fs.readFileSync(TEMP_JSON, 'utf-8'));
  console.log(`   Root children: ${raw.children?.length || 0}`);

  const modules = extractModules(raw);

  const output = {
    schemaVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    sdk: 'client-sdk',
    modules,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));

  console.log('\n=== Summary ===');
  console.log(`Modules: ${modules.length}`);
  console.log(`Functions: ${modules.reduce((s, m) => s + m.functions.length, 0)}`);
  console.log(`Output: ${OUT_JSON}`);
}

main();
