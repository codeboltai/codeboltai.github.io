/**
 * One-Time Documentation Data Export Script
 * Parses existing markdown files in ApiAccess and McpAccess
 * Extracts frontmatter data and detects human-curated content sections
 *
 * Usage: node one-time-docdata-export.js
 * Output: ../data/documentation-data.json
 */

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const {
  SCHEMA_VERSION,
  generateSignatureHash,
  createEmptyFunctionDoc,
  createEmptyModuleDoc,
  createEmptyExport,
  createEmptyHumanCurated,
  validateDocumentationExport
} = require('../schema/commonSchema');

// Configuration
const CONFIG = {
  apiAccessPath: path.resolve(__dirname, '../../docs/5_api/ApiAccess'),
  mcpAccessPath: path.resolve(__dirname, '../../docs/5_api/McpAccess'),
  outputPath: path.resolve(__dirname, '../data/documentation-data.json')
};

/**
 * Recursively get all markdown files in a directory
 * @param {string} dir - Directory path
 * @param {string} basePath - Base path for relative paths
 * @returns {Array<{filePath: string, relativePath: string}>}
 */
function getMarkdownFiles(dir, basePath = dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath, basePath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({
        filePath: fullPath,
        relativePath: path.relative(basePath, fullPath)
      });
    }
  }

  return files;
}

/**
 * Parse frontmatter from markdown content
 * @param {string} content - Markdown content
 * @returns {{frontmatter: Object|null, body: string}}
 */
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return { frontmatter: null, body: content };
  }

  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    const body = content.slice(frontmatterMatch[0].length).trim();
    return { frontmatter, body };
  } catch (error) {
    console.warn('Failed to parse frontmatter:', error.message);
    return { frontmatter: null, body: content };
  }
}

/**
 * Detect human-curated content sections in markdown body
 * @param {string} body - Markdown body content
 * @returns {Object} Human curated content object
 */
function detectHumanCuratedContent(body) {
  const curated = createEmptyHumanCurated();

  // Response Structure detection
  const responseMatch = body.match(/###?\s*Response\s*Structure[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (responseMatch) {
    curated.responseStructure.present = true;
    curated.responseStructure.content = responseMatch[0].trim();
    curated.responseStructure.lastUpdated = new Date().toISOString();
  }

  // Examples detection - look for Examples section
  const exampleSectionMatch = body.match(/###?\s*(?:Example|Examples|Sample\s*Usage)[\s\S]*?(?=###?\s[A-Z]|##\s|$)/gi);
  if (exampleSectionMatch) {
    curated.examples.present = true;
    curated.examples.content = exampleSectionMatch.map(m => m.trim());
    curated.examples.lastUpdated = new Date().toISOString();
  }

  // Count code blocks as examples
  const codeBlocks = body.match(/```(?:javascript|js|typescript|ts)?[\s\S]*?```/g);
  if (codeBlocks && codeBlocks.length > 0) {
    curated.examples.present = true;
    curated.examples.count = codeBlocks.length;
    if (!curated.examples.content.length) {
      curated.examples.content = codeBlocks;
    }
  }

  // Advanced Examples detection
  const advancedMatch = body.match(/###?\s*Advanced\s*Examples?[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (advancedMatch) {
    curated.advancedExamples.present = true;
    curated.advancedExamples.content = [advancedMatch[0].trim()];
    const advCodeBlocks = advancedMatch[0].match(/```[\s\S]*?```/g);
    curated.advancedExamples.count = advCodeBlocks ? advCodeBlocks.length : 0;
  }

  // Error Handling detection
  const errorMatch = body.match(/###?\s*(?:Error\s*Handling|Errors?|Exception)[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (errorMatch) {
    curated.errorHandling.present = true;
    curated.errorHandling.content = errorMatch[0].trim();
  }

  // Usage Notes detection
  const notesMatch = body.match(/###?\s*(?:Notes?|Usage\s*Notes?|Important)[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (notesMatch) {
    curated.usageNotes.present = true;
    curated.usageNotes.content = notesMatch[0].trim();
  }

  // Best Practices detection
  const practicesMatch = body.match(/###?\s*(?:Best\s*Practices?|Recommendations?)[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (practicesMatch) {
    curated.bestPractices.present = true;
    curated.bestPractices.content = practicesMatch[0].trim();
  }

  // Common Pitfalls detection
  const pitfallsMatch = body.match(/###?\s*(?:Common\s*Pitfalls?|Pitfalls?|Gotchas?|Caveats?)[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (pitfallsMatch) {
    curated.commonPitfalls.present = true;
    curated.commonPitfalls.content = pitfallsMatch[0].trim();
  }

  return curated;
}

/**
 * Process ApiAccess markdown file
 * @param {string} filePath - File path
 * @param {string} relativePath - Relative path from ApiAccess root
 * @returns {Object|null} Function documentation or null
 */
function processApiAccessFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(content);

  if (!frontmatter) {
    return null;
  }

  // Skip index and category files
  const fileName = path.basename(filePath);
  if (fileName.includes('index') || fileName.startsWith('_') || fileName.startsWith('1-')) {
    return null;
  }

  // Extract category from path
  const pathParts = relativePath.split(path.sep);
  const category = pathParts.length > 1 ? pathParts[0] : 'unknown';

  // Get function name
  const funcName = frontmatter.data?.name ||
                   frontmatter.name?.toLowerCase() ||
                   path.basename(filePath, '.md');

  const funcDoc = createEmptyFunctionDoc(funcName, category);

  // Override with frontmatter data
  funcDoc.displayName = frontmatter.name || funcDoc.displayName;
  funcDoc.description = frontmatter.cbbaseinfo?.description || '';
  funcDoc.category = frontmatter.data?.category || category;

  // Parameters from frontmatter
  if (frontmatter.cbparameters?.parameters && Array.isArray(frontmatter.cbparameters.parameters)) {
    funcDoc.parameters = frontmatter.cbparameters.parameters.map(p => ({
      name: p.name || '',
      typeName: p.typeName || 'any',
      description: p.description || '',
      isOptional: false
    }));
  }

  // Returns from frontmatter
  if (frontmatter.cbparameters?.returns) {
    funcDoc.returns = {
      signatureTypeName: frontmatter.cbparameters.returns.signatureTypeName || '',
      description: frontmatter.cbparameters.returns.description || '',
      typeArgs: frontmatter.cbparameters.returns.typeArgs || []
    };
  }

  // Detect human-curated content
  funcDoc.humanCurated = detectHumanCuratedContent(body);

  // Documentation metadata
  funcDoc.documentationPath = filePath;
  funcDoc.documentationType = 'ApiAccess';
  funcDoc.extractedAt = new Date().toISOString();
  funcDoc.signatureHash = generateSignatureHash(funcDoc);

  return funcDoc;
}

/**
 * Process McpAccess markdown file
 * @param {string} filePath - File path
 * @returns {Object|null} Module documentation or null
 */
function processMcpAccessFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(content);

  // Skip index files
  const fileName = path.basename(filePath);
  if (fileName.includes('index') || fileName.startsWith('_') || fileName.startsWith('1-')) {
    return null;
  }

  const moduleName = path.basename(filePath, '.md');

  // For MCP files, we create a module-level documentation
  const moduleDoc = createEmptyModuleDoc(moduleName);
  moduleDoc.displayName = frontmatter?.title || moduleName;
  moduleDoc.description = frontmatter?.description || '';
  moduleDoc.category = 'mcp';
  moduleDoc.documentationPath = filePath;

  // Parse tool definitions from body
  const tools = parseToolsFromMcpBody(body, moduleName);

  for (const tool of tools) {
    const funcDoc = createEmptyFunctionDoc(tool.name, moduleName);
    funcDoc.description = tool.description;
    funcDoc.parameters = tool.parameters;
    funcDoc.humanCurated = tool.humanCurated;
    funcDoc.documentationType = 'McpAccess';
    funcDoc.documentationPath = filePath;
    funcDoc.signatureHash = generateSignatureHash(funcDoc);
    funcDoc.extractedAt = new Date().toISOString();

    moduleDoc.functions.push(funcDoc);
  }

  return moduleDoc.functions.length > 0 ? moduleDoc : null;
}

/**
 * Parse tool definitions from MCP markdown body
 * @param {string} body - Markdown body
 * @param {string} moduleName - Module name
 * @returns {Array} Array of tool objects
 */
function parseToolsFromMcpBody(body, moduleName) {
  const tools = [];

  // Match tool sections: ### `tool_name` or ### tool_name
  const toolMatches = body.matchAll(/###\s*`?([^`\n]+)`?\s*\n([\s\S]*?)(?=###\s|##\s[A-Z]|$)/g);

  for (const match of toolMatches) {
    let toolName = match[1].trim();
    const toolContent = match[2];

    // Skip non-tool sections
    if (toolName.toLowerCase().includes('example') ||
        toolName.toLowerCase().includes('usage') ||
        toolName.toLowerCase().includes('parameter') ||
        toolName.toLowerCase().includes('available')) {
      continue;
    }

    const tool = {
      name: toolName,
      description: '',
      parameters: [],
      humanCurated: createEmptyHumanCurated()
    };

    // Extract description (first paragraph before any table or list)
    const descMatch = toolContent.match(/^([^\n|#\-*]+)/);
    if (descMatch) {
      tool.description = descMatch[1].trim();
    }

    // Parse parameter table
    const tableMatch = toolContent.match(/\|[^\n]+\|\n\|[-:\s|]+\|\n([\s\S]*?)(?=\n\n|###|##|$)/);
    if (tableMatch) {
      const rows = tableMatch[1].trim().split('\n');
      for (const row of rows) {
        const cells = row.split('|').map(c => c.trim()).filter(c => c);
        if (cells.length >= 2) {
          tool.parameters.push({
            name: cells[0],
            typeName: cells[1] || 'any',
            description: cells.slice(3).join(' ') || '',
            isOptional: cells[2] === 'No' || cells[2] === 'false'
          });
        }
      }
    }

    // Detect human curated content within tool section
    tool.humanCurated = detectHumanCuratedContent(toolContent);

    tools.push(tool);
  }

  // If no tools found with ### pattern, try to find them in Available Tools section
  if (tools.length === 0) {
    const availableToolsMatch = body.match(/##\s*Available\s*Tools?\s*\n([\s\S]*?)(?=##\s|$)/i);
    if (availableToolsMatch) {
      const toolListMatch = availableToolsMatch[1].matchAll(/[-*]\s*`([^`]+)`\s*[-–:]\s*([^\n]+)/g);
      for (const match of toolListMatch) {
        tools.push({
          name: match[1].trim(),
          description: match[2].trim(),
          parameters: [],
          humanCurated: createEmptyHumanCurated()
        });
      }
    }
  }

  return tools;
}

/**
 * Process all ApiAccess documentation files
 * @returns {Promise<Array>} Array of module documentation objects
 */
async function processApiAccessDocs() {
  console.log('Processing ApiAccess documentation...');
  console.log(`  Path: ${CONFIG.apiAccessPath}`);

  const modules = new Map();
  const files = getMarkdownFiles(CONFIG.apiAccessPath);

  console.log(`  Found ${files.length} markdown files`);

  let processed = 0;
  let skipped = 0;

  for (const { filePath, relativePath } of files) {
    const funcDoc = processApiAccessFile(filePath, relativePath);

    if (funcDoc) {
      const moduleName = funcDoc.category;

      if (!modules.has(moduleName)) {
        const moduleDoc = createEmptyModuleDoc(moduleName);
        moduleDoc.documentationPath = path.dirname(filePath);
        modules.set(moduleName, moduleDoc);
      }

      modules.get(moduleName).functions.push(funcDoc);
      processed++;
    } else {
      skipped++;
    }
  }

  console.log(`  Processed: ${processed}, Skipped: ${skipped}, Modules: ${modules.size}`);
  return Array.from(modules.values());
}

/**
 * Process all McpAccess documentation files
 * @returns {Promise<Array>} Array of module documentation objects
 */
async function processMcpAccessDocs() {
  console.log('Processing McpAccess documentation...');
  console.log(`  Path: ${CONFIG.mcpAccessPath}`);

  const modules = [];
  const files = getMarkdownFiles(CONFIG.mcpAccessPath);

  console.log(`  Found ${files.length} markdown files`);

  let processed = 0;
  let skipped = 0;

  for (const { filePath } of files) {
    const moduleDoc = processMcpAccessFile(filePath);

    if (moduleDoc) {
      modules.push(moduleDoc);
      processed++;
    } else {
      skipped++;
    }
  }

  console.log(`  Processed: ${processed}, Skipped: ${skipped}, Modules: ${modules.length}`);
  return modules;
}

/**
 * Calculate and print human curation statistics
 * @param {Array} modules - Array of module documentation objects
 */
function printCurationStats(modules) {
  let totalFunctions = 0;
  let withExamples = 0;
  let withResponseStructure = 0;
  let withErrorHandling = 0;
  let withBestPractices = 0;
  let withAdvancedExamples = 0;
  let totalExampleCount = 0;

  for (const mod of modules) {
    for (const func of mod.functions) {
      totalFunctions++;

      if (func.humanCurated?.examples?.present) {
        withExamples++;
        totalExampleCount += func.humanCurated.examples.count || 0;
      }
      if (func.humanCurated?.responseStructure?.present) {
        withResponseStructure++;
      }
      if (func.humanCurated?.errorHandling?.present) {
        withErrorHandling++;
      }
      if (func.humanCurated?.bestPractices?.present) {
        withBestPractices++;
      }
      if (func.humanCurated?.advancedExamples?.present) {
        withAdvancedExamples++;
      }
    }
  }

  console.log('\n=== Human Curation Statistics ===');
  console.log(`Total functions documented: ${totalFunctions}`);
  console.log(`With examples: ${withExamples} (${Math.round(withExamples/totalFunctions*100)}%)`);
  console.log(`Total code examples: ${totalExampleCount}`);
  console.log(`With response structure: ${withResponseStructure} (${Math.round(withResponseStructure/totalFunctions*100)}%)`);
  console.log(`With error handling: ${withErrorHandling} (${Math.round(withErrorHandling/totalFunctions*100)}%)`);
  console.log(`With best practices: ${withBestPractices} (${Math.round(withBestPractices/totalFunctions*100)}%)`);
  console.log(`With advanced examples: ${withAdvancedExamples} (${Math.round(withAdvancedExamples/totalFunctions*100)}%)`);
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('=== Documentation Data Export ===\n');

    // Ensure output directory exists
    const outputDir = path.dirname(CONFIG.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process both documentation types
    const apiAccessModules = await processApiAccessDocs();
    const mcpAccessModules = await processMcpAccessDocs();

    // Combine all modules
    const allModules = [...apiAccessModules, ...mcpAccessModules];

    const exportData = createEmptyExport('documentation');
    exportData.modules = allModules;

    // Validate
    const validation = validateDocumentationExport(exportData);
    if (!validation.valid) {
      console.warn('\nValidation warnings:', validation.errors);
    }

    // Write output
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(exportData, null, 2));

    // Summary
    console.log('\n=== Export Summary ===');
    console.log(`Schema version: ${exportData.schemaVersion}`);
    console.log(`ApiAccess modules: ${apiAccessModules.length}`);
    console.log(`McpAccess modules: ${mcpAccessModules.length}`);
    console.log(`Total modules: ${allModules.length}`);
    console.log(`Total functions: ${allModules.reduce((sum, m) => sum + m.functions.length, 0)}`);
    console.log(`Output: ${CONFIG.outputPath}`);

    // List modules
    console.log('\nModules found:');
    for (const mod of allModules) {
      console.log(`  - ${mod.name}: ${mod.functions.length} functions (${mod.documentationPath ? 'ApiAccess' : 'McpAccess'})`);
    }

    // Print curation statistics
    printCurationStats(allModules);

  } catch (error) {
    console.error('Export failed:', error);
    process.exit(1);
  }
}

module.exports = {
  main,
  processApiAccessFile,
  processMcpAccessFile,
  parseFrontmatter,
  detectHumanCuratedContent,
  parseToolsFromMcpBody
};

// Run if executed directly
if (require.main === module) {
  main();
}
