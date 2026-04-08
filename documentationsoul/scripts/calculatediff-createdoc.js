/**
 * Calculate Diff and Create Documentation Script
 * Compares typedoc-data.json with documentation-data.json
 * Uses Claude Agent SDK to generate missing documentation
 *
 * Usage: node calculatediff-createdoc.js [--generate] [--dry-run]
 * Output: ../data/diff-report.json
 */

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

// Optional: Claude SDK for documentation generation
let Anthropic = null;
try {
  Anthropic = require('@anthropic-ai/sdk').default;
} catch (e) {
  // SDK not installed - generation features will be disabled
}

const {
  generateSignatureHash,
  createEmptyHumanCurated,
  mergeFunctionDocs
} = require('../schema/commonSchema');

// Configuration
const CONFIG = {
  typedocDataPath: path.resolve(__dirname, '../data/typedoc-data.json'),
  documentationDataPath: path.resolve(__dirname, '../data/documentation-data.json'),
  diffOutputPath: path.resolve(__dirname, '../data/diff-report.json'),
  generatedDocsPath: path.resolve(__dirname, '../../docs/5_api/ApiAccess'),

  // Claude API configuration
  claudeModel: 'claude-sonnet-4-20250514',
  maxTokens: 4096
};

/**
 * Diff Result Types
 */
const DiffType = {
  NEW_FUNCTION: 'new_function',
  REMOVED_FUNCTION: 'removed_function',
  SIGNATURE_CHANGED: 'signature_changed',
  DESCRIPTION_MISSING: 'description_missing',
  EXAMPLES_MISSING: 'examples_missing',
  DOCUMENTATION_OUTDATED: 'documentation_outdated'
};

/**
 * Priority levels for diff items
 */
const Priority = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

/**
 * Load JSON data files
 * @returns {{typedocData: Object, docData: Object}}
 */
function loadDataFiles() {
  if (!fs.existsSync(CONFIG.typedocDataPath)) {
    throw new Error(`TypeDoc data not found: ${CONFIG.typedocDataPath}\nRun jsdoc-json-export.js first.`);
  }

  if (!fs.existsSync(CONFIG.documentationDataPath)) {
    throw new Error(`Documentation data not found: ${CONFIG.documentationDataPath}\nRun one-time-docdata-export.js first.`);
  }

  const typedocData = JSON.parse(fs.readFileSync(CONFIG.typedocDataPath, 'utf8'));
  const docData = JSON.parse(fs.readFileSync(CONFIG.documentationDataPath, 'utf8'));

  return { typedocData, docData };
}

/**
 * Build lookup maps for efficient comparison
 * @param {Object} data - Documentation export data
 * @returns {{moduleMap: Map, functionMap: Map}}
 */
function buildLookupMaps(data) {
  const moduleMap = new Map();
  const functionMap = new Map();

  for (const module of data.modules || []) {
    moduleMap.set(module.name, module);

    for (const func of module.functions || []) {
      const key = `${module.name}.${func.name}`;
      functionMap.set(key, { ...func, moduleName: module.name });
    }
  }

  return { moduleMap, functionMap };
}

/**
 * Compare function signatures
 * @param {Object} sourceFunc - Function from source (TypeDoc)
 * @param {Object} docFunc - Function from documentation
 * @returns {Array} Array of difference objects
 */
function compareSignatures(sourceFunc, docFunc) {
  const differences = [];

  // Compare parameter count
  const sourceParams = sourceFunc.parameters || [];
  const docParams = docFunc.parameters || [];

  if (sourceParams.length !== docParams.length) {
    differences.push({
      field: 'parameterCount',
      source: sourceParams.length,
      documentation: docParams.length
    });
  }

  // Compare individual parameters
  const maxParams = Math.max(sourceParams.length, docParams.length);
  for (let i = 0; i < maxParams; i++) {
    const sourceParam = sourceParams[i];
    const docParam = docParams[i];

    if (!sourceParam && docParam) {
      differences.push({
        field: `parameter[${i}]`,
        source: null,
        documentation: docParam.name,
        type: 'removed_in_source'
      });
    } else if (sourceParam && !docParam) {
      differences.push({
        field: `parameter[${i}]`,
        source: sourceParam.name,
        documentation: null,
        type: 'new_in_source'
      });
    } else if (sourceParam && docParam) {
      if (sourceParam.name !== docParam.name) {
        differences.push({
          field: `parameter[${i}].name`,
          source: sourceParam.name,
          documentation: docParam.name
        });
      }
      if (sourceParam.typeName !== docParam.typeName) {
        differences.push({
          field: `parameter[${i}].typeName`,
          source: sourceParam.typeName,
          documentation: docParam.typeName
        });
      }
    }
  }

  // Compare return type
  const sourceReturn = sourceFunc.returns?.signatureTypeName || '';
  const docReturn = docFunc.returns?.signatureTypeName || '';

  if (sourceReturn !== docReturn) {
    differences.push({
      field: 'returnType',
      source: sourceReturn,
      documentation: docReturn
    });
  }

  return differences;
}

/**
 * Calculate diff between source and documentation
 * @param {Object} typedocData - TypeDoc export data
 * @param {Object} docData - Documentation export data
 * @returns {Object} Diff results
 */
function calculateDiff(typedocData, docData) {
  const { functionMap: sourceMap } = buildLookupMaps(typedocData);
  const { functionMap: docMap } = buildLookupMaps(docData);

  const diffResults = {
    timestamp: new Date().toISOString(),
    typedocExportedAt: typedocData.exportedAt,
    documentationExportedAt: docData.exportedAt,
    summary: {
      totalSourceFunctions: sourceMap.size,
      totalDocumentedFunctions: docMap.size,
      newFunctions: 0,
      removedFunctions: 0,
      signatureChanges: 0,
      missingDescriptions: 0,
      missingExamples: 0
    },
    items: []
  };

  // Find new and changed functions
  for (const [key, sourceFunc] of sourceMap) {
    const docFunc = docMap.get(key);

    if (!docFunc) {
      // New function - not documented
      diffResults.items.push({
        type: DiffType.NEW_FUNCTION,
        key,
        module: sourceFunc.moduleName,
        function: sourceFunc.name,
        source: sourceFunc,
        priority: Priority.HIGH,
        message: `New function '${sourceFunc.name}' in module '${sourceFunc.moduleName}' needs documentation`
      });
      diffResults.summary.newFunctions++;
    } else {
      // Check for signature changes using hash
      if (sourceFunc.signatureHash !== docFunc.signatureHash) {
        const sigDiffs = compareSignatures(sourceFunc, docFunc);
        if (sigDiffs.length > 0) {
          diffResults.items.push({
            type: DiffType.SIGNATURE_CHANGED,
            key,
            module: sourceFunc.moduleName,
            function: sourceFunc.name,
            differences: sigDiffs,
            source: sourceFunc,
            documentation: docFunc,
            priority: Priority.HIGH,
            message: `Function '${sourceFunc.name}' signature changed: ${sigDiffs.map(d => d.field).join(', ')}`
          });
          diffResults.summary.signatureChanges++;
        }
      }

      // Check for missing description
      if (sourceFunc.description && (!docFunc.description || docFunc.description.trim() === ' ')) {
        diffResults.items.push({
          type: DiffType.DESCRIPTION_MISSING,
          key,
          module: sourceFunc.moduleName,
          function: sourceFunc.name,
          sourceDescription: sourceFunc.description,
          priority: Priority.MEDIUM,
          message: `Function '${sourceFunc.name}' has description in source but not in documentation`
        });
        diffResults.summary.missingDescriptions++;
      }

      // Check for missing examples (only for documented functions)
      if (!docFunc.humanCurated?.examples?.present || docFunc.humanCurated?.examples?.count === 0) {
        diffResults.items.push({
          type: DiffType.EXAMPLES_MISSING,
          key,
          module: sourceFunc.moduleName,
          function: sourceFunc.name,
          priority: Priority.LOW,
          message: `Function '${sourceFunc.name}' has no code examples`
        });
        diffResults.summary.missingExamples++;
      }
    }
  }

  // Find removed functions (documented but no longer in source)
  for (const [key, docFunc] of docMap) {
    if (!sourceMap.has(key)) {
      diffResults.items.push({
        type: DiffType.REMOVED_FUNCTION,
        key,
        module: docFunc.moduleName,
        function: docFunc.name,
        documentation: docFunc,
        priority: Priority.MEDIUM,
        message: `Function '${docFunc.name}' is documented but no longer exists in source`
      });
      diffResults.summary.removedFunctions++;
    }
  }

  // Sort items by priority
  const priorityOrder = { [Priority.HIGH]: 0, [Priority.MEDIUM]: 1, [Priority.LOW]: 2 };
  diffResults.items.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return diffResults;
}

/**
 * Build prompt for Claude documentation generation
 * @param {Object} diffItem - Diff item to generate documentation for
 * @param {Object|null} existingDoc - Existing documentation if any
 * @returns {string} Prompt string
 */
function buildGenerationPrompt(diffItem, existingDoc) {
  const parts = [];

  parts.push(`Generate comprehensive API documentation for the following JavaScript/TypeScript function.`);
  parts.push(`\n## Function Information`);
  parts.push(`- Module: ${diffItem.module}`);
  parts.push(`- Function Name: ${diffItem.function}`);

  if (diffItem.source) {
    parts.push(`\n## Source Code Information`);
    parts.push(`- Description: ${diffItem.source.description || 'Not provided'}`);
    parts.push(`- Source File: ${diffItem.source.source?.filePath || 'Unknown'}`);

    if (diffItem.source.parameters?.length > 0) {
      parts.push(`\n### Parameters`);
      for (const param of diffItem.source.parameters) {
        parts.push(`- \`${param.name}\` (${param.typeName}${param.isOptional ? ', optional' : ''}): ${param.description || 'No description'}`);
      }
    } else {
      parts.push(`\n### Parameters\nNone`);
    }

    parts.push(`\n### Returns`);
    parts.push(`- Type: \`${diffItem.source.returns?.signatureTypeName || 'void'}\``);
    parts.push(`- Description: ${diffItem.source.returns?.description || 'No description'}`);
  }

  if (existingDoc?.humanCurated) {
    parts.push(`\n## Existing Human-Curated Content (MUST PRESERVE)`);
    if (existingDoc.humanCurated.examples?.present) {
      parts.push(`\n### Existing Examples (preserve these)`);
      parts.push('```');
      parts.push(existingDoc.humanCurated.examples.content?.slice(0, 2).join('\n---\n') || 'No examples');
      parts.push('```');
    }
    if (existingDoc.humanCurated.responseStructure?.present) {
      parts.push(`\n### Existing Response Structure (preserve this)`);
      parts.push(existingDoc.humanCurated.responseStructure.content || '');
    }
    if (existingDoc.humanCurated.errorHandling?.present) {
      parts.push(`\n### Existing Error Handling (preserve this)`);
      parts.push(existingDoc.humanCurated.errorHandling.content || '');
    }
  }

  parts.push(`\n## Required Output Format`);
  parts.push(`Generate documentation with the following sections:`);
  parts.push(`1. A clear, concise description of what the function does`);
  parts.push(`2. Detailed parameter descriptions (if not already well described)`);
  parts.push(`3. Response/Return structure documentation`);
  parts.push(`4. At least 2 practical code examples showing common usage`);
  parts.push(`5. Usage notes or best practices (if applicable)`);
  parts.push(`\nFormat the output as a markdown document that can be used in Docusaurus.`);

  return parts.join('\n');
}

/**
 * Generate documentation using Claude API
 * @param {Object} diffItem - Diff item to generate documentation for
 * @param {Object|null} existingDoc - Existing documentation if any
 * @returns {Promise<Object>} Generated documentation
 */
async function generateDocumentation(diffItem, existingDoc = null) {
  // If Anthropic SDK is not available, use basic template
  if (!Anthropic) {
    console.log(`    [INFO] Anthropic SDK not installed, using basic template`);
    return createBasicTemplate(diffItem, existingDoc);
  }

  const prompt = buildGenerationPrompt(diffItem, existingDoc);

  try {
    const client = new Anthropic();

    const response = await client.messages.create({
      model: CONFIG.claudeModel,
      max_tokens: CONFIG.maxTokens,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      system: `You are a technical documentation writer specializing in JavaScript/TypeScript API documentation.
Your task is to create clear, comprehensive documentation that helps developers understand and use the API effectively.
Always include practical code examples that demonstrate real-world usage patterns.
Preserve any existing human-curated content provided to you.`
    });

    const generatedContent = response.content[0].text;

    // Parse the generated content into structured documentation
    return parseGeneratedContent(diffItem, generatedContent, existingDoc);
  } catch (error) {
    console.error(`Failed to generate documentation for ${diffItem.key}:`, error.message);

    // Return a basic template if generation fails
    return createBasicTemplate(diffItem, existingDoc);
  }
}

/**
 * Parse generated content into structured documentation
 * @param {Object} diffItem - Diff item
 * @param {string} content - Generated markdown content
 * @param {Object|null} existingDoc - Existing documentation
 * @returns {Object} Structured documentation
 */
function parseGeneratedContent(diffItem, content, existingDoc) {
  return {
    frontmatter: {
      name: diffItem.function.charAt(0).toUpperCase() + diffItem.function.slice(1),
      cbbaseinfo: {
        description: diffItem.source?.description || extractDescription(content)
      },
      cbparameters: {
        parameters: (diffItem.source?.parameters || []).map(p => ({
          name: p.name,
          typeName: p.typeName,
          description: p.description || `The ${p.name} parameter`
        })),
        returns: {
          signatureTypeName: diffItem.source?.returns?.signatureTypeName || 'Promise<void>',
          description: diffItem.source?.returns?.description || 'A promise that resolves when the operation completes',
          typeArgs: diffItem.source?.returns?.typeArgs || []
        }
      },
      data: {
        name: diffItem.function,
        category: diffItem.module,
        link: `${diffItem.function}.md`
      }
    },
    body: content,
    preservedContent: existingDoc?.humanCurated || null
  };
}

/**
 * Extract description from generated content
 * @param {string} content - Generated markdown content
 * @returns {string} Extracted description
 */
function extractDescription(content) {
  // Try to extract first paragraph or description section
  const descMatch = content.match(/^(?:#.*\n+)?([^#\n][^\n]+)/m);
  return descMatch ? descMatch[1].trim() : '';
}

/**
 * Create basic documentation template
 * @param {Object} diffItem - Diff item
 * @param {Object|null} existingDoc - Existing documentation
 * @returns {Object} Basic template
 */
function createBasicTemplate(diffItem, existingDoc) {
  const body = `<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a \`${diffItem.source?.returns?.signatureTypeName || 'Promise<void>'}\`.

### Example

\`\`\`javascript
// Example usage of ${diffItem.function}
const result = await codebolt.${diffItem.module}.${diffItem.function}(${
  (diffItem.source?.parameters || []).map(p => `/* ${p.name} */`).join(', ')
});
console.log(result);
\`\`\`

### Notes

- Add relevant usage notes here
`;

  return {
    frontmatter: {
      name: diffItem.function.charAt(0).toUpperCase() + diffItem.function.slice(1),
      cbbaseinfo: {
        description: diffItem.source?.description || `Documentation for ${diffItem.function}`
      },
      cbparameters: {
        parameters: (diffItem.source?.parameters || []).map(p => ({
          name: p.name,
          typeName: p.typeName,
          description: p.description || `The ${p.name} parameter`
        })),
        returns: {
          signatureTypeName: diffItem.source?.returns?.signatureTypeName || 'Promise<void>',
          description: diffItem.source?.returns?.description || 'A promise that resolves when the operation completes',
          typeArgs: diffItem.source?.returns?.typeArgs || []
        }
      },
      data: {
        name: diffItem.function,
        category: diffItem.module,
        link: `${diffItem.function}.md`
      }
    },
    body,
    preservedContent: existingDoc?.humanCurated || null
  };
}

/**
 * Write generated documentation to file
 * @param {string} moduleName - Module name
 * @param {string} funcName - Function name
 * @param {Object} generatedDoc - Generated documentation
 * @returns {string} File path
 */
function writeDocumentationFile(moduleName, funcName, generatedDoc) {
  const moduleDir = path.join(CONFIG.generatedDocsPath, moduleName);

  // Ensure directory exists
  if (!fs.existsSync(moduleDir)) {
    fs.mkdirSync(moduleDir, { recursive: true });
  }

  const filePath = path.join(moduleDir, `${funcName}.md`);

  // Check if file exists and has human-curated content
  let existingCurated = null;
  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf8');
    existingCurated = extractCuratedSections(existingContent);
  }

  // Build file content
  let content = '---\n';
  content += yaml.dump(generatedDoc.frontmatter);
  content += '---\n';

  // Add body content
  if (existingCurated) {
    content += mergeWithCuratedContent(generatedDoc.body, existingCurated);
  } else {
    content += generatedDoc.body;
  }

  fs.writeFileSync(filePath, content);

  return filePath;
}

/**
 * Extract human-curated sections from existing documentation
 * @param {string} content - Existing markdown content
 * @returns {Object|null} Curated sections or null
 */
function extractCuratedSections(content) {
  const curated = {};

  // Extract sections that appear to be manually written
  const advancedExamples = content.match(/###?\s*Advanced\s*Examples?[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (advancedExamples) {
    curated.advancedExamples = advancedExamples[0];
  }

  const errorHandling = content.match(/###?\s*Error\s*Handling[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (errorHandling) {
    curated.errorHandling = errorHandling[0];
  }

  const bestPractices = content.match(/###?\s*Best\s*Practices?[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (bestPractices) {
    curated.bestPractices = bestPractices[0];
  }

  const pitfalls = content.match(/###?\s*(?:Common\s*)?Pitfalls?[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (pitfalls) {
    curated.pitfalls = pitfalls[0];
  }

  const integrationExamples = content.match(/###?\s*Integration\s*Examples?[\s\S]*?(?=###?\s[A-Z]|##\s|$)/i);
  if (integrationExamples) {
    curated.integrationExamples = integrationExamples[0];
  }

  return Object.keys(curated).length > 0 ? curated : null;
}

/**
 * Merge generated content with preserved curated sections
 * @param {string} generatedBody - Generated body content
 * @param {Object} curatedSections - Preserved curated sections
 * @returns {string} Merged content
 */
function mergeWithCuratedContent(generatedBody, curatedSections) {
  let merged = generatedBody;

  // Append preserved sections at the end
  if (curatedSections.advancedExamples) {
    merged += '\n\n' + curatedSections.advancedExamples;
  }

  if (curatedSections.errorHandling) {
    merged += '\n\n' + curatedSections.errorHandling;
  }

  if (curatedSections.bestPractices) {
    merged += '\n\n' + curatedSections.bestPractices;
  }

  if (curatedSections.pitfalls) {
    merged += '\n\n' + curatedSections.pitfalls;
  }

  if (curatedSections.integrationExamples) {
    merged += '\n\n' + curatedSections.integrationExamples;
  }

  return merged;
}

/**
 * Process diff results and generate documentation
 * @param {Object} diffResults - Diff calculation results
 * @param {Object} docData - Documentation data
 * @param {Object} options - Processing options
 * @returns {Promise<Object>} Processing results
 */
async function processDiffResults(diffResults, docData, options = {}) {
  const { dryRun = false, generateAll = false, maxItems = Infinity } = options;
  const { functionMap: docMap } = buildLookupMaps(docData);

  const results = {
    generated: [],
    skipped: [],
    errors: []
  };

  // Filter items to process
  let itemsToProcess = diffResults.items.filter(item =>
    item.type === DiffType.NEW_FUNCTION ||
    item.type === DiffType.SIGNATURE_CHANGED ||
    (generateAll && item.type === DiffType.EXAMPLES_MISSING)
  );

  // Limit items if specified
  itemsToProcess = itemsToProcess.slice(0, maxItems);

  console.log(`\nProcessing ${itemsToProcess.length} items...`);

  for (const item of itemsToProcess) {
    console.log(`\n  Processing: ${item.key}`);

    if (dryRun) {
      console.log(`    [DRY RUN] Would generate documentation`);
      results.skipped.push({ key: item.key, reason: 'dry_run' });
      continue;
    }

    try {
      const existingDoc = docMap.get(item.key);
      const generatedDoc = await generateDocumentation(item, existingDoc);

      const filePath = writeDocumentationFile(item.module, item.function, generatedDoc);

      results.generated.push({
        key: item.key,
        type: item.type,
        filePath
      });

      console.log(`    Generated: ${filePath}`);
    } catch (error) {
      console.error(`    Error: ${error.message}`);
      results.errors.push({ key: item.key, error: error.message });
    }
  }

  return results;
}

/**
 * Print diff summary
 * @param {Object} diffResults - Diff calculation results
 */
function printDiffSummary(diffResults) {
  console.log('\n=== Diff Summary ===');
  console.log(`Source functions: ${diffResults.summary.totalSourceFunctions}`);
  console.log(`Documented functions: ${diffResults.summary.totalDocumentedFunctions}`);
  console.log(`New functions (need docs): ${diffResults.summary.newFunctions}`);
  console.log(`Removed functions: ${diffResults.summary.removedFunctions}`);
  console.log(`Signature changes: ${diffResults.summary.signatureChanges}`);
  console.log(`Missing descriptions: ${diffResults.summary.missingDescriptions}`);
  console.log(`Missing examples: ${diffResults.summary.missingExamples}`);

  // Print high priority items
  const highPriority = diffResults.items.filter(i => i.priority === Priority.HIGH);
  if (highPriority.length > 0) {
    console.log(`\n=== High Priority Items (${highPriority.length}) ===`);
    for (const item of highPriority.slice(0, 10)) {
      console.log(`  [${item.type}] ${item.key}: ${item.message}`);
    }
    if (highPriority.length > 10) {
      console.log(`  ... and ${highPriority.length - 10} more`);
    }
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const shouldGenerate = args.includes('--generate');
  const dryRun = args.includes('--dry-run');
  const maxItems = parseInt(args.find(a => a.startsWith('--max='))?.split('=')[1] || 'Infinity');

  try {
    console.log('=== Documentation Diff & Generate ===\n');

    // Load data
    console.log('Loading data files...');
    const { typedocData, docData } = loadDataFiles();

    console.log(`  TypeDoc: ${typedocData.modules?.length || 0} modules, exported at ${typedocData.exportedAt}`);
    console.log(`  Documentation: ${docData.modules?.length || 0} modules, exported at ${docData.exportedAt}`);

    // Calculate diff
    console.log('\nCalculating differences...');
    const diffResults = calculateDiff(typedocData, docData);

    // Save diff report
    const outputDir = path.dirname(CONFIG.diffOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(CONFIG.diffOutputPath, JSON.stringify(diffResults, null, 2));
    console.log(`Diff report saved to: ${CONFIG.diffOutputPath}`);

    // Print summary
    printDiffSummary(diffResults);

    // Generate documentation if requested
    if (shouldGenerate || dryRun) {
      const needsGeneration = diffResults.summary.newFunctions > 0 ||
                              diffResults.summary.signatureChanges > 0;

      if (needsGeneration) {
        console.log('\n=== Documentation Generation ===');

        if (dryRun) {
          console.log('Running in DRY RUN mode - no files will be written');
        }

        const results = await processDiffResults(diffResults, docData, {
          dryRun,
          maxItems
        });

        console.log('\n=== Generation Results ===');
        console.log(`Generated: ${results.generated.length} files`);
        console.log(`Skipped: ${results.skipped.length} items`);
        console.log(`Errors: ${results.errors.length} items`);

        if (results.generated.length > 0) {
          console.log('\nGenerated files:');
          for (const g of results.generated) {
            console.log(`  - ${g.filePath}`);
          }
        }

        if (results.errors.length > 0) {
          console.log('\nErrors:');
          for (const e of results.errors) {
            console.log(`  - ${e.key}: ${e.error}`);
          }
        }
      } else {
        console.log('\nNo documentation generation needed.');
      }
    } else {
      console.log('\nRun with --generate to create documentation for new/changed functions.');
      console.log('Run with --dry-run to preview what would be generated.');
    }

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = {
  main,
  calculateDiff,
  generateDocumentation,
  buildLookupMaps,
  compareSignatures,
  DiffType,
  Priority
};

// Run if executed directly
if (require.main === module) {
  main();
}
