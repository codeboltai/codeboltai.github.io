#!/usr/bin/env node

/**
 * Unified TypeDoc Markdown Generator for Docusaurus
 *
 * This script generates markdown documentation from TypeScript source files
 * for multiple packages using typedoc-plugin-markdown, formatted for seamless
 * Docusaurus integration.
 *
 * Usage:
 *   node scripts/generate-type-docs.js [options]
 *
 * Options:
 *   --clean         Clean output directory before generating
 *   --help          Show help message
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Paths relative to this script's location (documentation/publicDocs/scripts/)
const SCRIPT_DIR = __dirname;
const PUBLIC_DOCS_DIR = path.resolve(SCRIPT_DIR, '..');
const MONOREPO_ROOT = path.resolve(PUBLIC_DOCS_DIR, '../..');

// Configuration
const CONFIG = {
    // Output directory for combined documentation
    outDir: path.resolve(PUBLIC_DOCS_DIR, 'docs/5_api/11_doc-type-ref'),

    // Package configurations
    packages: [
        {
            name: '@codebolt/codeboltjs',
            slug: 'codeboltjs',
            label: 'CodeboltJS',
            position: 1,
            description: 'Core SDK for building Codebolt applications',
            entryPoints: [
                path.resolve(MONOREPO_ROOT, 'packages/codeboltjs/src/index.ts'),
            ],
            tsconfig: path.resolve(MONOREPO_ROOT, 'packages/codeboltjs/tsconfig.json'),
            cwd: path.resolve(MONOREPO_ROOT, 'packages/codeboltjs'),
        },
        {
            name: '@codebolt/agent',
            slug: 'agent',
            label: 'Agent',
            position: 2,
            description: 'Agent utilities for building and managing AI agents',
            entryPoints: [
                path.resolve(MONOREPO_ROOT, 'packages/agent/src/unified/index.ts'),
                path.resolve(MONOREPO_ROOT, 'packages/agent/src/processor-pieces/index.ts'),
            ],
            tsconfig: path.resolve(MONOREPO_ROOT, 'packages/agent/tsconfig.json'),
            cwd: path.resolve(MONOREPO_ROOT, 'packages/agent'),
        },
        {
            name: '@codebolt/provider',
            slug: 'provider',
            label: 'Provider',
            position: 3,
            description: 'Base provider utilities for CodeBOLT environment providers',
            entryPoints: [
                path.resolve(MONOREPO_ROOT, 'packages/provider/src/index.ts'),
            ],
            tsconfig: path.resolve(MONOREPO_ROOT, 'packages/provider/tsconfig.json'),
            cwd: path.resolve(MONOREPO_ROOT, 'packages/provider'),
        },
        {
            name: '@codebolt/mcp',
            slug: 'mcp',
            label: 'MCP',
            position: 4,
            description: 'Model Context Protocol (MCP) server implementation',
            entryPoints: [
                path.resolve(MONOREPO_ROOT, 'packages/mcp/src/index.ts'),
            ],
            tsconfig: path.resolve(MONOREPO_ROOT, 'packages/mcp/tsconfig.json'),
            cwd: path.resolve(MONOREPO_ROOT, 'packages/mcp'),
        },
        {
            name: '@codebolt/types',
            slug: 'types',
            label: 'SDK Types',
            position: 5,
            description: 'Shared TypeScript types for Codebolt SDK functions',
            entryPoints: [
                path.resolve(MONOREPO_ROOT, 'common/types/src/sdk-types.ts'),
            ],
            tsconfig: path.resolve(MONOREPO_ROOT, 'common/types/tsconfig.json'),
            cwd: path.resolve(MONOREPO_ROOT, 'common/types'),
        },
    ],

    // TypeDoc options for Docusaurus-friendly markdown
    typedocOptions: {
        plugin: ['typedoc-plugin-markdown'],
        excludePrivate: true,
        excludeProtected: false,
        excludeInternal: true,
        excludeNotDocumented: false,
        disableSources: false,
        sourceLinkTemplate: '{path}#L{line}',
        sort: ['alphabetical'],
        kindSortOrder: [
            'Module',
            'Namespace',
            'Class',
            'Interface',
            'TypeAlias',
            'Enum',
            'Variable',
            'Function',
            'Constructor',
            'Property',
            'Method',
            'Accessor',
        ],
        hideBreadcrumbs: true,
        hidePageHeader: false,
        useCodeBlocks: true,
        expandObjects: true,
        expandParameters: true,
        outputFileStrategy: 'members',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        enumMembersFormat: 'table',
        typeDeclarationFormat: 'table',
    },
};

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        clean: false,
    };

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--clean':
                options.clean = true;
                break;
            case '--help':
                printHelp();
                process.exit(0);
        }
    }

    return options;
}

function printHelp() {
    console.log(`
Unified TypeDoc Markdown Generator for Docusaurus

Generates API documentation from all Codebolt packages.

Usage:
  node scripts/generate-type-docs.js [options]

Options:
  --clean         Clean output directory before generating
  --help          Show this help message

Examples:
  node scripts/generate-type-docs.js
  node scripts/generate-type-docs.js --clean

Output:
  docs/5_api/11_doc-type-ref/
    ├── codeboltjs/    - @codebolt/codeboltjs types
    ├── agent/         - @codebolt/agent types
    ├── provider/      - @codebolt/provider types
    └── mcp/           - @codebolt/mcp types
`);
}

// Clean output directory
function cleanOutputDir(outDir) {
    if (fs.existsSync(outDir)) {
        console.log(`Cleaning output directory: ${outDir}`);
        fs.rmSync(outDir, { recursive: true, force: true });
    }
}

// Create root Docusaurus category file
function createRootCategoryFile(outDir) {
    const categoryContent = {
        label: 'Type Reference',
        position: 11,
        link: {
            type: 'generated-index',
            title: 'Type Reference',
            description: 'Auto-generated TypeScript type definitions and API reference for Codebolt packages.',
            slug: '/api/type-reference',
        },
    };

    const categoryPath = path.join(outDir, '_category_.json');
    fs.writeFileSync(categoryPath, JSON.stringify(categoryContent, null, 2));
    console.log(`Created root category file: ${categoryPath}`);
}

// Create package-specific category file
function createPackageCategoryFile(pkgOutDir, pkg) {
    // Note: Docusaurus strips numeric prefixes from doc IDs
    // So "5_api/11_doc-type-ref" becomes "api/doc-type-ref"
    const categoryContent = {
        label: pkg.label,
        position: pkg.position,
        link: {
            type: 'doc',
            id: `api/doc-type-ref/${pkg.slug}/index`,
        },
    };

    const categoryPath = path.join(pkgOutDir, '_category_.json');
    fs.writeFileSync(categoryPath, JSON.stringify(categoryContent, null, 2));
}

// Rename README.md files to index.md for Docusaurus compatibility
function renameReadmeToIndex(outDir) {
    console.log('Renaming README.md files to index.md...');

    const walkDir = (dir) => {
        if (!fs.existsSync(dir)) return;

        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (file === 'README.md') {
                const newPath = path.join(dir, 'index.md');
                // Read content and update title if needed
                let content = fs.readFileSync(filePath, 'utf-8');
                // Update title from README to the directory name or a better title
                content = content.replace(/^---\ntitle: README\n---/, '---\ntitle: Overview\n---');
                fs.writeFileSync(newPath, content);
                fs.unlinkSync(filePath);
                console.log(`  Renamed: ${path.relative(outDir, filePath)} -> index.md`);
            }
        }
    };

    walkDir(outDir);
}

// Post-process generated markdown files for Docusaurus compatibility
function postProcessMarkdown(outDir) {
    console.log('Post-processing markdown files...');

    const processFile = (filePath) => {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Remove HTML comments that might cause MDX issues
        content = content.replace(/<!--[\s\S]*?-->/g, '');

        // Convert "Defined in:" links to plain text paths
        content = content.replace(/Defined in: \[([^\]]+)\]\([^)]+\)/g, 'Defined in: $1');

        // Ensure proper frontmatter exists
        if (!content.startsWith('---')) {
            const fileName = path.basename(filePath, '.md');
            const frontmatter = `---
title: ${fileName}
---

`;
            content = frontmatter + content;
        }

        // Fix internal links - convert .md extensions to no extension for Docusaurus
        content = content.replace(/\]\(([^)]+)\.md\)/g, ']($1)');

        // Fix README links to index (since we renamed README.md to index.md)
        content = content.replace(/\]\(([^)]*?)README\)/g, ']($1index)');

        // Escape curly braces in table rows for MDX compatibility
        // MDX interprets {foo} as JSX expressions, causing build errors
        // Process line by line to only affect table rows (lines starting with |)
        const lines = content.split('\n');
        const processedLines = lines.map(line => {
            // Only process table rows (lines starting with |)
            if (line.startsWith('|')) {
                // Escape { and } that aren't already escaped
                // But preserve already escaped \{ and \}
                line = line.replace(/(?<!\\)\{/g, '\\{').replace(/(?<!\\)\}/g, '\\}');
            }
            return line;
        });
        content = processedLines.join('\n');

        fs.writeFileSync(filePath, content);
    };

    const walkDir = (dir) => {
        if (!fs.existsSync(dir)) return;

        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (file.endsWith('.md')) {
                processFile(filePath);
            }
        }
    };

    walkDir(outDir);
}

// Build TypeDoc command for a package
function buildTypedocCommand(pkg, outDir) {
    const opts = CONFIG.typedocOptions;
    const args = ['npx', 'typedoc'];

    // Add entry points
    pkg.entryPoints.forEach(entry => {
        args.push('--entryPoints', entry);
    });

    args.push('--tsconfig', pkg.tsconfig);
    args.push('--out', outDir);
    args.push('--entryPointStrategy', 'resolve');
    args.push('--readme', 'none');

    // Add plugins
    if (opts.plugin) {
        opts.plugin.forEach(p => args.push('--plugin', p));
    }

    // Boolean options
    const booleanOptions = [
        'excludePrivate',
        'excludeProtected',
        'excludeInternal',
        'excludeNotDocumented',
        'disableSources',
        'hideBreadcrumbs',
        'hidePageHeader',
        'useCodeBlocks',
        'expandObjects',
        'expandParameters',
    ];

    booleanOptions.forEach(opt => {
        if (opts[opt] === true) {
            args.push(`--${opt}`);
        }
    });

    // String options
    const stringOptions = [
        'outputFileStrategy',
        'parametersFormat',
        'propertiesFormat',
        'enumMembersFormat',
        'typeDeclarationFormat',
        'sourceLinkTemplate',
    ];

    stringOptions.forEach(opt => {
        if (opts[opt]) {
            args.push(`--${opt}`, opts[opt]);
        }
    });

    // Sort options
    if (opts.sort) {
        opts.sort.forEach(s => args.push('--sort', s));
    }

    if (opts.kindSortOrder) {
        opts.kindSortOrder.forEach(k => args.push('--kindSortOrder', k));
    }

    return args.join(' ');
}

// Generate docs for a single package
function generatePackageDocs(pkg, baseOutDir) {
    const pkgOutDir = path.join(baseOutDir, pkg.slug);

    console.log(`\nGenerating docs for ${pkg.name}...`);
    console.log(`  Entry points:`);
    pkg.entryPoints.forEach(entry => console.log(`    - ${path.relative(MONOREPO_ROOT, entry)}`));
    console.log(`  Output: ${pkg.slug}/`);

    // Ensure package output directory exists
    fs.mkdirSync(pkgOutDir, { recursive: true });

    const cmd = buildTypedocCommand(pkg, pkgOutDir);

    try {
        execSync(cmd, {
            stdio: 'inherit',
            cwd: PUBLIC_DOCS_DIR,
        });

        // Create package-specific category file
        createPackageCategoryFile(pkgOutDir, pkg);

        console.log(`  Done: ${pkg.name}`);
        return true;
    } catch (error) {
        console.error(`  Error generating docs for ${pkg.name}:`, error.message);
        return false;
    }
}

// Create a summary index.md for the root
function createRootIndex(outDir) {
    const content = `---
title: Type Reference
---

# Type Reference

Auto-generated TypeScript type definitions and API reference for Codebolt packages.

## Packages

${CONFIG.packages.map(pkg => `- **[${pkg.label}](./${pkg.slug}/)** - ${pkg.description}`).join('\n')}
`;

    fs.writeFileSync(path.join(outDir, 'index.md'), content);
    console.log('Created root index.md');
}

// Main execution
async function main() {
    const options = parseArgs();
    const startTime = Date.now();

    console.log('='.repeat(60));
    console.log('Unified TypeDoc Generator for Docusaurus');
    console.log('='.repeat(60));
    console.log(`\nOutput: ${CONFIG.outDir}`);
    console.log(`Packages: ${CONFIG.packages.map(p => p.name).join(', ')}`);

    // Clean if requested
    if (options.clean) {
        cleanOutputDir(CONFIG.outDir);
    }

    // Ensure output directory exists
    fs.mkdirSync(CONFIG.outDir, { recursive: true });

    // Generate docs for each package in its own subdirectory
    let successCount = 0;
    let failCount = 0;

    for (const pkg of CONFIG.packages) {
        const result = generatePackageDocs(pkg, CONFIG.outDir);
        if (result) {
            successCount++;
        } else {
            failCount++;
        }
    }

    // Create root category file and index
    createRootCategoryFile(CONFIG.outDir);
    createRootIndex(CONFIG.outDir);

    // Rename README.md files to index.md for Docusaurus
    renameReadmeToIndex(CONFIG.outDir);

    // Post-process markdown files
    postProcessMarkdown(CONFIG.outDir);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log('\n' + '='.repeat(60));

    if (failCount === 0) {
        console.log(`Documentation generated successfully in ${elapsed}s`);
        console.log(`  Packages: ${successCount}/${CONFIG.packages.length}`);
        console.log(`  Output: ${CONFIG.outDir}`);
    } else {
        console.log(`Documentation generated with errors in ${elapsed}s`);
        console.log(`  Success: ${successCount}/${CONFIG.packages.length}`);
        console.log(`  Failed: ${failCount}/${CONFIG.packages.length}`);
        console.log(`  Output: ${CONFIG.outDir}`);
    }

    console.log('='.repeat(60));

    // Exit with error if any package failed
    if (failCount > 0) {
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
