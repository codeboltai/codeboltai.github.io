#!/usr/bin/env node
/**
 * Link Types Script
 *
 * This script scans the type reference folder and updates documentation files
 * to automatically link type names to their reference pages.
 * Missing type references are tracked in missing-ref.json.
 *
 * Usage: node link-types.cjs [options]
 *
 * Options:
 *   --dry-run          Show what would be changed without modifying files
 *   --file=PATH        Process only a specific file
 *   --module=NAME      Process only files in a specific module folder
 *   --verbose          Show detailed output for each file
 *
 * Examples:
 *   node link-types.cjs --dry-run
 *   node link-types.cjs --module=actionPlan
 *   node link-types.cjs --file=agent/startAgent.md --verbose
 */

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

// Configuration
const CONFIG = {
  apiAccessPath: path.resolve(__dirname, '../../docs/5_api/ApiAccess'),
  // Multiple type reference paths (codeboltjs + types packages)
  typeRefPaths: [
    {
      path: path.resolve(__dirname, '../../docs/5_api/11_doc-type-ref/codeboltjs'),
      urlBase: '/docs/api/11_doc-type-ref/codeboltjs'
    },
    {
      path: path.resolve(__dirname, '../../docs/5_api/11_doc-type-ref/types'),
      urlBase: '/docs/api/11_doc-type-ref/types'
    }
  ],
  missingRefPath: path.resolve(__dirname, '../data/missing-ref.json')
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    file: null,
    module: null,
    verbose: false
  };

  for (const arg of args) {
    if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg.startsWith('--file=')) {
      options.file = arg.split('=')[1];
    } else if (arg.startsWith('--module=')) {
      options.module = arg.split('=')[1];
    } else if (arg === '--verbose') {
      options.verbose = true;
    }
  }

  return options;
}

/**
 * Build a map of all available types from all type reference folders
 * Only includes actual types (interfaces, classes, enums, type-aliases)
 * NOT functions or variables which are SDK module names
 */
function buildTypeMap() {
  const typeMap = new Map();
  // Only include actual type categories - NOT functions/variables which are SDK module names
  const categories = ['interfaces', 'classes', 'enumerations', 'type-aliases'];

  // Iterate over all type reference paths (codeboltjs, types, etc.)
  for (const typeRefConfig of CONFIG.typeRefPaths) {
    for (const category of categories) {
      const categoryPath = path.join(typeRefConfig.path, category);
      if (!fs.existsSync(categoryPath)) continue;

      const files = fs.readdirSync(categoryPath);
      for (const file of files) {
        if (!file.endsWith('.md')) continue;

        // Extract type name from filename (remove .md extension)
        const typeName = file.replace('.md', '');

        // Only add if not already present (first source wins)
        if (!typeMap.has(typeName)) {
          // Store with category for building the correct URL
          typeMap.set(typeName, {
            name: typeName,
            category,
            url: `${typeRefConfig.urlBase}/${category}/${typeName}`
          });
        }
      }
    }
  }

  return typeMap;
}

/**
 * Find all markdown files in ApiAccess folder
 */
function findMarkdownFiles(basePath, moduleFilter = null) {
  const files = [];

  function scanDir(dirPath, relativePath = '') {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relPath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        if (moduleFilter && relativePath === '' && entry.name !== moduleFilter) {
          continue;
        }
        scanDir(fullPath, relPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push({
          fullPath,
          relativePath: relPath,
          module: relativePath || 'root',
          fileName: entry.name
        });
      }
    }
  }

  scanDir(basePath);
  return files;
}

/**
 * Extract type names from a string (handles Promise<Type>, Type[], etc.)
 */
function extractTypeNames(typeString) {
  if (!typeString) return [];

  const types = new Set();

  // Remove Promise wrapper
  let cleaned = typeString.replace(/Promise\s*<\s*([^>]+)\s*>/g, '$1');

  // Remove array notation
  cleaned = cleaned.replace(/\[\]/g, '');

  // Split by | for union types
  const parts = cleaned.split(/\s*\|\s*/);

  for (const part of parts) {
    // Extract type name (alphanumeric + underscores, starting with uppercase typically)
    const matches = part.match(/[A-Z][a-zA-Z0-9_]*/g);
    if (matches) {
      for (const match of matches) {
        // Skip common primitive-like names
        if (!['Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Function', 'Record', 'Partial', 'Required', 'Readonly'].includes(match)) {
          types.add(match);
        }
      }
    }
  }

  return Array.from(types);
}

/**
 * Extract types from frontmatter
 */
function extractTypesFromFrontmatter(frontmatter) {
  const types = new Set();

  if (!frontmatter) return [];

  // Extract from cbparameters.returns.signatureTypeName
  if (frontmatter.cbparameters?.returns?.signatureTypeName) {
    const returnTypes = extractTypeNames(frontmatter.cbparameters.returns.signatureTypeName);
    returnTypes.forEach(t => types.add(t));
  }

  // Extract from cbparameters.returns.typeArgs
  if (frontmatter.cbparameters?.returns?.typeArgs) {
    for (const typeArg of frontmatter.cbparameters.returns.typeArgs) {
      if (typeArg.name) {
        const argTypes = extractTypeNames(typeArg.name);
        argTypes.forEach(t => types.add(t));
      }
    }
  }

  // Extract from parameters
  if (frontmatter.cbparameters?.parameters) {
    for (const param of frontmatter.cbparameters.parameters) {
      if (param.typeName) {
        const paramTypes = extractTypeNames(param.typeName);
        paramTypes.forEach(t => types.add(t));
      }
    }
  }

  return Array.from(types);
}

/**
 * Extract types from markdown body (in backticks)
 */
function extractTypesFromBody(body) {
  const types = new Set();

  // Find types in backticks that look like type names (PascalCase)
  const backtickPattern = /`([A-Z][a-zA-Z0-9_]*(?:<[^>]+>)?(?:\[\])?)`/g;
  let match;

  while ((match = backtickPattern.exec(body)) !== null) {
    const extracted = extractTypeNames(match[1]);
    extracted.forEach(t => types.add(t));
  }

  // Find types in (TypeName) patterns in description lines
  const parenPattern = /\(([A-Z][a-zA-Z0-9_]*(?:<[^>]+>)?(?:\[\])?)\)/g;

  while ((match = parenPattern.exec(body)) !== null) {
    const extracted = extractTypeNames(match[1]);
    extracted.forEach(t => types.add(t));
  }

  return Array.from(types);
}

/**
 * Find all code block ranges in content
 * Returns array of {start, end} positions
 */
function findCodeBlockRanges(content) {
  const ranges = [];
  const codeBlockPattern = /```[\s\S]*?```/g;
  let match;

  while ((match = codeBlockPattern.exec(content)) !== null) {
    ranges.push({
      start: match.index,
      end: match.index + match[0].length
    });
  }

  return ranges;
}

/**
 * Check if a position is inside a code block
 */
function isInsideCodeBlock(codeBlockRanges, position) {
  for (const range of codeBlockRanges) {
    if (position >= range.start && position < range.end) {
      return true;
    }
  }
  return false;
}

/**
 * Check if a type name is already linked
 */
function isAlreadyLinked(content, typeName, position) {
  const before = content.substring(Math.max(0, position - 200), position);
  const after = content.substring(position, Math.min(content.length, position + typeName.length + 100));

  // Check if we're inside [text](url) pattern
  const lastOpenBracket = before.lastIndexOf('[');
  const lastCloseBracket = before.lastIndexOf(']');

  if (lastOpenBracket > lastCloseBracket) {
    if (after.includes('](')) {
      return true;
    }
  }

  // Check if we're inside a URL part of a link
  const lastOpenParen = before.lastIndexOf('](');
  const lastCloseParen = before.lastIndexOf(')');
  if (lastOpenParen > lastCloseParen) {
    return true;
  }

  return false;
}

/**
 * Link types in content and track missing types
 */
function linkTypesInContent(content, typeMap, fileInfo, missingTypes) {
  const frontmatterEnd = content.indexOf('---', 3);
  if (frontmatterEnd === -1) {
    return { content, linksAdded: 0, linkedTypes: [], foundTypes: [] };
  }

  const beforeFrontmatter = content.substring(0, frontmatterEnd + 3);
  let afterFrontmatter = content.substring(frontmatterEnd + 3);

  // Parse frontmatter to extract types
  const frontmatterStr = content.substring(3, frontmatterEnd).trim();
  let frontmatter = null;
  try {
    frontmatter = yaml.load(frontmatterStr);
  } catch (e) {
    // Ignore parse errors
  }

  // Collect all types mentioned in this file
  const frontmatterTypes = extractTypesFromFrontmatter(frontmatter);
  const bodyTypes = extractTypesFromBody(afterFrontmatter);
  const allFoundTypes = [...new Set([...frontmatterTypes, ...bodyTypes])];

  // Track missing types
  for (const typeName of allFoundTypes) {
    if (!typeMap.has(typeName) && typeName.length >= 4) {
      if (!missingTypes[typeName]) {
        missingTypes[typeName] = {
          type: typeName,
          usedIn: [],
          firstFound: new Date().toISOString()
        };
      }
      if (!missingTypes[typeName].usedIn.includes(fileInfo.relativePath)) {
        missingTypes[typeName].usedIn.push(fileInfo.relativePath);
      }
    }
  }

  // Now link the types that exist
  let linksAdded = 0;
  const linkedTypes = new Set();

  // Find all code block ranges once (more efficient)
  const codeBlockRanges = findCodeBlockRanges(afterFrontmatter);

  // Sort types by length (longest first) to avoid partial matches
  const sortedTypes = Array.from(typeMap.keys()).sort((a, b) => b.length - a.length);

  // Comprehensive skip list for common words that shouldn't be linked
  const skipTypes = new Set([
    // Generic/primitive types
    'Type', 'Data', 'Info', 'List', 'Item', 'Node', 'Event', 'Error', 'Result',
    'True', 'False', 'Null', 'Void', 'Name', 'Value', 'Key', 'Index',
    // Common programming terms
    'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'Class',
    'Promise', 'Record', 'Partial', 'Required', 'Readonly', 'Omit', 'Pick',
    // Common short words that might match types
    'HEAD', 'FIFO', 'JSON', 'UUID', 'HTML', 'Text', 'Code', 'File', 'Path',
    'User', 'Role', 'Team', 'Task', 'Step', 'Hook', 'Tool', 'Test',
    // SDK module names (these are in variables/functions category)
    'Agent', 'Browser', 'Chat', 'Debug', 'Terminal', 'Thread', 'Memory',
    'Project', 'State', 'Codebolt', 'Feature', 'Message', 'Optional',
    // Other common terms
    'Default', 'Common', 'Interim', 'Updated', 'Completed', 'Process',
    'Question', 'Strategy', 'Automated', 'OVERDUE', 'SIGINT', 'Tools'
  ]);

  for (const typeName of sortedTypes) {
    const typeInfo = typeMap.get(typeName);

    // Skip very short type names (less than 6 chars) unless they end with Response/Request/Options/Config
    if (typeName.length < 6 && !/(Response|Request|Options|Config|Params|Result)$/.test(typeName)) {
      continue;
    }

    // Skip common words
    if (skipTypes.has(typeName)) continue;

    // Only link types that look like actual API types (contain Response, Request, Options, Config, Params, etc.)
    // Or are clearly PascalCase compound names
    const isLikelyAPIType = /(Response|Request|Options|Config|Params|Result|Data|Info|State|Event|Handler|Callback|Manager|Service|Client|Provider|Factory|Builder|Wrapper|Helper|Util|Utils|Interface|Abstract|Base|Default|Custom|Extended)$/.test(typeName) ||
                           typeName.length >= 12 ||
                           /^(I[A-Z]|Get|Set|Add|Update|Delete|Create|Remove|List|Find|Search|Execute|Start|Stop|Send|Receive)/.test(typeName);

    if (!isLikelyAPIType) continue;

    // Pattern to match ONLY standalone types in backticks (not partial matches)
    // This matches `TypeName` or `Promise<TypeName>` but not `someTypeNameHere`
    const backtickPattern = new RegExp(`\`(${typeName}(?:<[^>]+>)?(?:\\[\\])?)\``, 'g');

    let match;
    let tempContent = afterFrontmatter;
    let offset = 0;

    // Reset regex
    backtickPattern.lastIndex = 0;

    while ((match = backtickPattern.exec(afterFrontmatter)) !== null) {
      const fullMatch = match[0];
      const typeContent = match[1];

      // Check if inside code block
      if (isInsideCodeBlock(codeBlockRanges, match.index)) {
        continue;
      }

      // Check if already linked
      if (isAlreadyLinked(afterFrontmatter, typeName, match.index)) {
        continue;
      }

      // Create the linked version
      const linkedType = `[\`${typeContent}\`](${typeInfo.url})`;

      // Replace in temp content
      const startPos = match.index + offset;
      tempContent = tempContent.substring(0, startPos) +
        linkedType +
        tempContent.substring(startPos + fullMatch.length);

      offset += linkedType.length - fullMatch.length;
      linksAdded++;
      linkedTypes.add(typeName);
    }

    afterFrontmatter = tempContent;
  }

  const newContent = beforeFrontmatter + afterFrontmatter;

  return {
    content: newContent,
    linksAdded,
    linkedTypes: Array.from(linkedTypes),
    foundTypes: allFoundTypes
  };
}

/**
 * Process a single file
 */
function processFile(fileInfo, typeMap, options, missingTypes) {
  const { fullPath, relativePath } = fileInfo;

  if (options.verbose) {
    console.log(`\nProcessing: ${relativePath}`);
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  // Link types in content
  const { content: newContent, linksAdded, linkedTypes, foundTypes } = linkTypesInContent(content, typeMap, fileInfo, missingTypes);

  if (options.verbose && foundTypes.length > 0) {
    console.log(`  Found types: ${foundTypes.join(', ')}`);
  }

  if (linksAdded === 0) {
    if (options.verbose) {
      console.log(`  Skipped: No types to link`);
    }
    return { status: 'skipped', linksAdded: 0, foundTypes };
  }

  if (options.dryRun) {
    console.log(`  [DRY RUN] Would add ${linksAdded} links: ${linkedTypes.join(', ')}`);
    return { status: 'would-link', linksAdded, foundTypes };
  }

  // Write new content
  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log(`  Linked ${linksAdded} types: ${linkedTypes.join(', ')}`);

  return { status: 'linked', linksAdded, foundTypes };
}

/**
 * Save missing types to JSON file
 */
function saveMissingTypes(missingTypes) {
  const data = {
    schemaVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    totalMissing: Object.keys(missingTypes).length,
    types: Object.values(missingTypes).sort((a, b) => b.usedIn.length - a.usedIn.length)
  };

  fs.writeFileSync(CONFIG.missingRefPath, JSON.stringify(data, null, 2));
}

/**
 * Main execution
 */
function main() {
  const options = parseArgs();

  console.log('=== Link Types Script ===\n');
  console.log('Options:', {
    dryRun: options.dryRun,
    module: options.module || 'all',
    file: options.file || 'all',
    verbose: options.verbose
  });

  // Build type map
  console.log('\nBuilding type map...');
  const typeMap = buildTypeMap();
  console.log(`  Found ${typeMap.size} types in reference documentation`);

  if (options.verbose) {
    console.log('  Sample types:', Array.from(typeMap.keys()).slice(0, 10).join(', '));
  }

  // Track missing types
  const missingTypes = {};

  // Handle single file processing
  if (options.file) {
    const fullPath = path.join(CONFIG.apiAccessPath, options.file);
    if (!fs.existsSync(fullPath)) {
      console.error(`Error: File not found: ${fullPath}`);
      process.exit(1);
    }

    const fileInfo = {
      fullPath,
      relativePath: options.file,
      module: path.dirname(options.file) || 'root',
      fileName: path.basename(options.file)
    };

    console.log(`\nProcessing single file: ${options.file}`);
    const result = processFile(fileInfo, typeMap, options, missingTypes);
    console.log(`\nResult: ${result.status}, ${result.linksAdded} links`);

    // Save missing types
    if (Object.keys(missingTypes).length > 0) {
      saveMissingTypes(missingTypes);
      console.log(`\nMissing types saved to: ${CONFIG.missingRefPath}`);
    }
    return;
  }

  // Find all markdown files
  console.log(`\nScanning: ${CONFIG.apiAccessPath}`);
  const files = findMarkdownFiles(CONFIG.apiAccessPath, options.module);
  console.log(`Found ${files.length} markdown files`);

  // Process files
  const stats = {
    total: files.length,
    linked: 0,
    skipped: 0,
    wouldLink: 0,
    totalLinks: 0,
    errors: 0
  };

  console.log('\n=== Processing Files ===');

  for (const fileInfo of files) {
    try {
      const result = processFile(fileInfo, typeMap, options, missingTypes);

      switch (result.status) {
        case 'linked':
          stats.linked++;
          stats.totalLinks += result.linksAdded;
          break;
        case 'would-link':
          stats.wouldLink++;
          stats.totalLinks += result.linksAdded;
          break;
        case 'skipped':
          stats.skipped++;
          break;
      }
    } catch (error) {
      console.error(`  Error processing ${fileInfo.relativePath}: ${error.message}`);
      stats.errors++;
    }
  }

  // Save missing types
  saveMissingTypes(missingTypes);

  // Summary
  console.log('\n=== Summary ===');
  console.log(`Total files: ${stats.total}`);
  if (options.dryRun) {
    console.log(`Would link: ${stats.wouldLink} files (${stats.totalLinks} links)`);
  } else {
    console.log(`Linked: ${stats.linked} files (${stats.totalLinks} links)`);
  }
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Missing types: ${Object.keys(missingTypes).length} (saved to missing-ref.json)`);

  if (options.dryRun) {
    console.log('\n[DRY RUN] No files were modified. Remove --dry-run to apply changes.');
  }
}

// Export for testing
module.exports = {
  buildTypeMap,
  linkTypesInContent,
  extractTypeNames
};

// Run if executed directly
if (require.main === module) {
  main();
}
