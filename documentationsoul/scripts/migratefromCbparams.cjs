#!/usr/bin/env node
/**
 * Migration Script: Convert CBBaseInfo/CBParameters to Static Content with Type Linking
 *
 * This script migrates markdown files in ApiAccess folder from using
 * <CBBaseInfo/> and <CBParameters/> components to static rendered content,
 * while also linking types to their reference documentation.
 *
 * Changes:
 * - Keeps frontmatter as is
 * - Replaces <CBBaseInfo/> with function signature and description
 * - Replaces <CBParameters/> with parameters in bullet-point format (like Response Structure)
 * - Links type names to their reference documentation pages
 * - Tracks missing type references in missing-ref.json
 *
 * Usage: node migratefromCbparams.cjs [options]
 *
 * Options:
 *   --dry-run          Show what would be changed without modifying files
 *   --file=PATH        Process only a specific file
 *   --module=NAME      Process only files in a specific module folder
 *   --backup           Create .bak backup files before modifying
 *   --verbose          Show detailed output for each file
 *   --no-linking       Skip type linking (migration only)
 *
 * Examples:
 *   node migratefromCbparams.cjs --dry-run
 *   node migratefromCbparams.cjs --module=browser --dry-run
 *   node migratefromCbparams.cjs --backup
 *   node migratefromCbparams.cjs --file=agent/startAgent.md
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
    backup: false,
    verbose: false,
    noLinking: false
  };

  for (const arg of args) {
    if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg.startsWith('--file=')) {
      options.file = arg.split('=')[1];
    } else if (arg.startsWith('--module=')) {
      options.module = arg.split('=')[1];
    } else if (arg === '--backup') {
      options.backup = true;
    } else if (arg === '--verbose') {
      options.verbose = true;
    } else if (arg === '--no-linking') {
      options.noLinking = true;
    }
  }

  return options;
}

// ============================================
// Type Linking Functions
// ============================================

/**
 * Build a map of all available types from all type reference folders
 */
function buildTypeMap() {
  const typeMap = new Map();
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
 * Extract type names from a type string (handles Promise<Type>, Type[], etc.)
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
    // Extract type name (alphanumeric + underscores, starting with uppercase)
    const matches = part.match(/[A-Z][a-zA-Z0-9_]*/g);
    if (matches) {
      for (const match of matches) {
        // Skip common primitive-like names and wrappers
        if (!['Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Function', 'Record', 'Partial', 'Required', 'Readonly'].includes(match)) {
          types.add(match);
        }
      }
    }
  }

  return Array.from(types);
}

/**
 * Link a type name if it exists in typeMap, otherwise track as missing
 */
function linkType(typeName, typeMap, missingTypes, fileRelativePath) {
  if (!typeName || typeName.length < 4) return typeName;

  // Skip common words that aren't really types
  const skipTypes = ['Type', 'Data', 'Info', 'List', 'Item', 'Node', 'Event', 'Error', 'Result', 'True', 'False', 'Null', 'Void'];
  if (skipTypes.includes(typeName)) return typeName;

  if (typeMap.has(typeName)) {
    const typeInfo = typeMap.get(typeName);
    return `[${typeName}](${typeInfo.url})`;
  } else {
    // Track missing type
    if (!missingTypes[typeName]) {
      missingTypes[typeName] = {
        type: typeName,
        usedIn: [],
        firstFound: new Date().toISOString()
      };
    }
    if (!missingTypes[typeName].usedIn.includes(fileRelativePath)) {
      missingTypes[typeName].usedIn.push(fileRelativePath);
    }
    return typeName;
  }
}

/**
 * Link types within a type string (handles Promise<Type>, Type[], unions)
 */
function linkTypeString(typeString, typeMap, missingTypes, fileRelativePath) {
  if (!typeString) return typeString;

  let result = typeString;
  const typeNames = extractTypeNames(typeString);

  // Sort by length (longest first) to avoid partial matches
  typeNames.sort((a, b) => b.length - a.length);

  for (const typeName of typeNames) {
    if (typeMap.has(typeName)) {
      const typeInfo = typeMap.get(typeName);
      // Replace the type name with linked version (but be careful not to double-link)
      const regex = new RegExp(`\\b${typeName}\\b(?![^\\[]*\\])`, 'g');
      result = result.replace(regex, `[${typeName}](${typeInfo.url})`);
    } else if (typeName.length >= 4) {
      // Track missing type
      if (!missingTypes[typeName]) {
        missingTypes[typeName] = {
          type: typeName,
          usedIn: [],
          firstFound: new Date().toISOString()
        };
      }
      if (!missingTypes[typeName].usedIn.includes(fileRelativePath)) {
        missingTypes[typeName].usedIn.push(fileRelativePath);
      }
    }
  }

  return result;
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

  // Ensure data directory exists
  const dataDir = path.dirname(CONFIG.missingRefPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(CONFIG.missingRefPath, JSON.stringify(data, null, 2));
}

// ============================================
// File Discovery Functions
// ============================================

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
        // If module filter is set, only scan that module
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
 * Parse markdown file and extract frontmatter
 */
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if file has frontmatter
  if (!content.startsWith('---')) {
    return { frontmatter: null, body: content, raw: content };
  }

  // Find end of frontmatter
  const endIndex = content.indexOf('---', 3);
  if (endIndex === -1) {
    return { frontmatter: null, body: content, raw: content };
  }

  const frontmatterStr = content.substring(3, endIndex).trim();
  const body = content.substring(endIndex + 3).trim();

  try {
    const frontmatter = yaml.load(frontmatterStr);
    return { frontmatter, body, raw: content, frontmatterStr };
  } catch (e) {
    console.warn(`  Warning: Could not parse frontmatter in ${filePath}: ${e.message}`);
    return { frontmatter: null, body: content, raw: content };
  }
}

/**
 * Generate function signature from frontmatter (no linking in code blocks)
 */
function generateFunctionSignature(frontmatter) {
  if (!frontmatter.data || !frontmatter.cbparameters) {
    return null;
  }

  const { data, cbparameters } = frontmatter;
  const category = data.category || 'unknown';
  const funcName = data.name || 'unknown';

  // Build parameters string
  const params = (cbparameters.parameters || [])
    .map(p => `${p.name}: ${p.typeName}`)
    .join(', ');

  // Build return type
  let returnType = cbparameters.returns?.signatureTypeName || 'void';
  if (cbparameters.returns?.typeArgs && cbparameters.returns.typeArgs.length > 0) {
    const typeArg = cbparameters.returns.typeArgs[0];
    if (typeArg.name) {
      returnType = `${returnType}<${typeArg.name}>`;
    }
  }

  return `codebolt.${category}.${funcName}(${params}): ${returnType}`;
}

/**
 * Generate CBBaseInfo content (name heading + signature + description)
 */
function generateBaseInfoContent(frontmatter) {
  const signature = generateFunctionSignature(frontmatter);
  const description = frontmatter.cbbaseinfo?.description || '';
  const name = frontmatter.name || '';

  let content = '';

  // Add name as heading
  if (name) {
    content += `# ${name}\n\n`;
  }

  if (signature) {
    content += '```typescript\n';
    content += signature + '\n';
    content += '```\n\n';
  }

  if (description) {
    content += description + '\n';
  }

  return content.trim();
}

/**
 * Generate CBParameters content in bullet-point format with type linking
 */
function generateParametersContent(frontmatter, typeMap, missingTypes, fileRelativePath, enableLinking = true) {
  if (!frontmatter.cbparameters) {
    return '';
  }

  const { cbparameters } = frontmatter;
  let content = '';

  // Parameters section
  const params = cbparameters.parameters || [];
  if (params.length > 0) {
    content += '### Parameters\n\n';

    for (const param of params) {
      let typeName = param.typeName || 'unknown';
      const description = param.description || '';
      const isOptional = param.isOptional ? ', optional' : '';

      // Link types if enabled
      if (enableLinking && typeMap) {
        typeName = linkTypeString(typeName, typeMap, missingTypes, fileRelativePath);
      }

      content += `- **\`${param.name}\`** (${typeName}${isOptional}): ${description}\n`;
    }
    content += '\n';
  }

  // Returns section
  const returns = cbparameters.returns;
  if (returns && returns.signatureTypeName) {
    content += '### Returns\n\n';

    let returnType = returns.signatureTypeName;
    if (returns.typeArgs && returns.typeArgs.length > 0 && returns.typeArgs[0].name) {
      returnType = `${returnType}<${returns.typeArgs[0].name}>`;
    }

    // Link return type if enabled
    if (enableLinking && typeMap) {
      returnType = linkTypeString(returnType, typeMap, missingTypes, fileRelativePath);
    }

    const description = returns.description || '';
    content += `- **\`${returnType}\`**: ${description}\n`;
  }

  return content.trim();
}

/**
 * Check if file needs migration
 */
function needsMigration(body) {
  return body.includes('<CBBaseInfo') || body.includes('<CBParameters');
}

/**
 * Migrate file content with optional type linking
 */
function migrateContent(frontmatter, body, typeMap, missingTypes, fileRelativePath, enableLinking = true) {
  if (!frontmatter) {
    return body;
  }

  let newBody = body;

  // Generate replacement content
  const baseInfoContent = generateBaseInfoContent(frontmatter);
  const parametersContent = generateParametersContent(frontmatter, typeMap, missingTypes, fileRelativePath, enableLinking);

  // Replace <CBBaseInfo/> or <CBBaseInfo /> with actual content
  newBody = newBody.replace(/<CBBaseInfo\s*\/>/gi, baseInfoContent);

  // Replace <CBParameters/> or <CBParameters /> with actual content
  newBody = newBody.replace(/<CBParameters\s*\/>/gi, parametersContent);

  return newBody;
}

/**
 * Rebuild full file content
 */
function rebuildFileContent(frontmatterStr, newBody) {
  return `---\n${frontmatterStr}\n---\n${newBody}`;
}

/**
 * Process a single file
 */
function processFile(fileInfo, options, typeMap, missingTypes) {
  const { fullPath, relativePath } = fileInfo;
  const enableLinking = !options.noLinking && typeMap;

  if (options.verbose) {
    console.log(`\nProcessing: ${relativePath}`);
  }

  // Parse file
  const { frontmatter, body, frontmatterStr } = parseMarkdownFile(fullPath);

  // Check if migration is needed
  if (!needsMigration(body)) {
    if (options.verbose) {
      console.log(`  Skipped: No CBBaseInfo/CBParameters found`);
    }
    return { status: 'skipped', reason: 'no-components', linksAdded: 0 };
  }

  if (!frontmatter) {
    if (options.verbose) {
      console.log(`  Skipped: No valid frontmatter`);
    }
    return { status: 'skipped', reason: 'no-frontmatter', linksAdded: 0 };
  }

  // Track links before migration (for counting)
  const missingBefore = Object.keys(missingTypes).length;

  // Migrate content with type linking
  const newBody = migrateContent(frontmatter, body, typeMap, missingTypes, relativePath, enableLinking);

  // Count types that were successfully linked (not added to missingTypes)
  const linkedTypes = [];
  if (enableLinking && frontmatter.cbparameters) {
    // Collect all types that should have been linked
    const params = frontmatter.cbparameters.parameters || [];
    for (const param of params) {
      if (param.typeName) {
        const types = extractTypeNames(param.typeName);
        for (const t of types) {
          if (typeMap.has(t)) linkedTypes.push(t);
        }
      }
    }
    const returns = frontmatter.cbparameters.returns;
    if (returns?.signatureTypeName) {
      let returnType = returns.signatureTypeName;
      if (returns.typeArgs?.[0]?.name) {
        returnType += `<${returns.typeArgs[0].name}>`;
      }
      const types = extractTypeNames(returnType);
      for (const t of types) {
        if (typeMap.has(t)) linkedTypes.push(t);
      }
    }
  }

  // Check if content actually changed
  if (newBody === body) {
    if (options.verbose) {
      console.log(`  Skipped: No changes needed`);
    }
    return { status: 'skipped', reason: 'no-changes', linksAdded: 0 };
  }

  // Rebuild file
  const newContent = rebuildFileContent(frontmatterStr, newBody);

  if (options.dryRun) {
    const uniqueLinked = [...new Set(linkedTypes)];
    let msg = `  [DRY RUN] Would migrate: ${relativePath}`;
    if (uniqueLinked.length > 0) {
      msg += ` (${uniqueLinked.length} types linked: ${uniqueLinked.join(', ')})`;
    }
    console.log(msg);
    if (options.verbose) {
      console.log('  --- New content preview (first 500 chars) ---');
      console.log(newContent.substring(0, 500));
      console.log('  --- End preview ---');
    }
    return { status: 'would-migrate', newContent, linksAdded: uniqueLinked.length };
  }

  // Create backup if requested
  if (options.backup) {
    const backupPath = fullPath + '.bak';
    fs.copyFileSync(fullPath, backupPath);
    if (options.verbose) {
      console.log(`  Backup created: ${backupPath}`);
    }
  }

  // Write new content
  fs.writeFileSync(fullPath, newContent, 'utf8');
  const uniqueLinked = [...new Set(linkedTypes)];
  let msg = `  Migrated: ${relativePath}`;
  if (uniqueLinked.length > 0) {
    msg += ` (${uniqueLinked.length} types linked)`;
  }
  console.log(msg);

  return { status: 'migrated', newContent, linksAdded: uniqueLinked.length };
}

/**
 * Main execution
 */
function main() {
  const options = parseArgs();

  console.log('=== CBParams Migration Script with Type Linking ===\n');
  console.log('Options:', {
    dryRun: options.dryRun,
    module: options.module || 'all',
    file: options.file || 'all',
    backup: options.backup,
    verbose: options.verbose,
    typeLinking: !options.noLinking
  });

  // Build type map for linking (unless disabled)
  let typeMap = null;
  if (!options.noLinking) {
    console.log('\nBuilding type map...');
    typeMap = buildTypeMap();
    console.log(`  Found ${typeMap.size} types in reference documentation`);

    if (options.verbose) {
      console.log('  Sample types:', Array.from(typeMap.keys()).slice(0, 10).join(', '));
    }
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
    const result = processFile(fileInfo, options, typeMap, missingTypes);
    console.log(`\nResult: ${result.status}`);
    if (result.linksAdded > 0) {
      console.log(`Types linked: ${result.linksAdded}`);
    }

    // Save missing types
    if (Object.keys(missingTypes).length > 0) {
      saveMissingTypes(missingTypes);
      console.log(`\nMissing types: ${Object.keys(missingTypes).length} (saved to missing-ref.json)`);
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
    migrated: 0,
    skipped: 0,
    wouldMigrate: 0,
    errors: 0,
    totalLinks: 0
  };

  console.log('\n=== Processing Files ===');

  for (const fileInfo of files) {
    try {
      const result = processFile(fileInfo, options, typeMap, missingTypes);

      switch (result.status) {
        case 'migrated':
          stats.migrated++;
          stats.totalLinks += result.linksAdded || 0;
          break;
        case 'would-migrate':
          stats.wouldMigrate++;
          stats.totalLinks += result.linksAdded || 0;
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
  if (Object.keys(missingTypes).length > 0 && !options.dryRun) {
    saveMissingTypes(missingTypes);
  }

  // Summary
  console.log('\n=== Summary ===');
  console.log(`Total files: ${stats.total}`);
  if (options.dryRun) {
    console.log(`Would migrate: ${stats.wouldMigrate}`);
  } else {
    console.log(`Migrated: ${stats.migrated}`);
  }
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);

  if (!options.noLinking) {
    console.log(`Types linked: ${stats.totalLinks}`);
    console.log(`Missing types: ${Object.keys(missingTypes).length} (saved to missing-ref.json)`);
  }

  if (options.dryRun) {
    console.log('\n[DRY RUN] No files were modified. Remove --dry-run to apply changes.');
  }
}

// Export for testing
module.exports = {
  parseMarkdownFile,
  generateFunctionSignature,
  generateBaseInfoContent,
  generateParametersContent,
  migrateContent,
  needsMigration,
  buildTypeMap,
  extractTypeNames,
  linkTypeString,
  saveMissingTypes
};

// Run if executed directly
if (require.main === module) {
  main();
}
