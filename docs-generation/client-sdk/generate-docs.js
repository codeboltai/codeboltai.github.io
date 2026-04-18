#!/usr/bin/env node

/**
 * TypeDoc Generator — @codebolt/client-sdk
 *
 * Generates Docusaurus-ready markdown from the clientsdk TypeScript source.
 *
 * Usage:
 *   node generate-docs.js
 *   node generate-docs.js --clean    (wipe output dir first)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR  = __dirname;
const DOCS_ROOT   = path.resolve(SCRIPT_DIR, '../..');                          // codeboltdocs/
const MONOREPO    = path.resolve(DOCS_ROOT, '../CodeBolt');                     // CodeBolt/
const CLIENT_SDK  = path.resolve(MONOREPO, 'packages/clientsdk');
const OUT_DIR     = path.resolve(DOCS_ROOT, 'docs/05_reference/04_client-sdk/type-reference');

const PACKAGE = {
    name:        '@codebolt/client-sdk',
    label:       'Client SDK',
    entryPoint:  path.resolve(CLIENT_SDK, 'src/index.ts'),
    tsconfig:    path.resolve(CLIENT_SDK, 'tsconfig.json'),
    cwd:         CLIENT_SDK,
};

const TYPEDOC_OPTIONS = {
    plugin:                 ['typedoc-plugin-markdown'],
    excludePrivate:         true,
    excludeProtected:       false,
    excludeInternal:        true,
    excludeNotDocumented:   false,
    disableSources:         false,
    hideBreadcrumbs:        true,
    hidePageHeader:         false,
    useCodeBlocks:          true,
    expandObjects:          true,
    expandParameters:       true,
    outputFileStrategy:     'members',
    parametersFormat:       'table',
    propertiesFormat:       'table',
    enumMembersFormat:      'table',
    typeDeclarationFormat:  'table',
    sort:                   ['alphabetical'],
};

// ─── helpers ───────────────────────────────────────────────────────────────

function clean() {
    if (fs.existsSync(OUT_DIR)) {
        console.log(`Cleaning: ${OUT_DIR}`);
        fs.rmSync(OUT_DIR, { recursive: true, force: true });
    }
}

const toFwd = p => p.split(path.sep).join('/');

function buildCommand() {
    const args = ['npx', 'typedoc',
        '--entryPoints', toFwd(PACKAGE.entryPoint),
        '--tsconfig',    toFwd(PACKAGE.tsconfig),
        '--out',         toFwd(OUT_DIR),
        '--entryPointStrategy', 'resolve',
        '--readme', 'none',
    ];

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
            const dest = path.join(dir, 'index.md');
            fs.writeFileSync(dest, content);
            fs.unlinkSync(full);
        }
    }
}

function postProcess(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
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
            let inCode = false;
            let inFrontmatter = false;
            let frontmatterDone = false;
            let fmLineCount = 0;
            content = content.split('\n').map(line => {
                if (!frontmatterDone && line === '---') {
                    fmLineCount++;
                    if (fmLineCount === 1) { inFrontmatter = true; return line; }
                    if (fmLineCount === 2) { inFrontmatter = false; frontmatterDone = true; return line; }
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
        link: {
            type: 'doc',
            id: 'reference/client-sdk/type-reference/index',
        },
    };
    fs.writeFileSync(path.join(OUT_DIR, '_category_.json'), JSON.stringify(category, null, 2));
}

// ─── main ──────────────────────────────────────────────────────────────────

function main() {
    const clean_flag = process.argv.includes('--clean');
    const start = Date.now();

    console.log('='.repeat(60));
    console.log('Client SDK — TypeDoc Generator');
    console.log('='.repeat(60));
    console.log(`Source:  ${CLIENT_SDK}`);
    console.log(`Output:  ${OUT_DIR}\n`);

    if (clean_flag) clean();

    fs.mkdirSync(OUT_DIR, { recursive: true });

    try {
        execSync(buildCommand(), { stdio: 'inherit', cwd: DOCS_ROOT });
    } catch (err) {
        console.error('TypeDoc failed:', err.message);
        process.exit(1);
    }

    writeCategoryFile();
    renameReadmeToIndex(OUT_DIR);
    postProcess(OUT_DIR);

    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`\nDone in ${elapsed}s — output: ${OUT_DIR}`);
}

main();
