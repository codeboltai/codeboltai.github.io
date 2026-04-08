/**
 * TypeDoc JSON Export Script
 * Generates TypeDoc JSON output and transforms to common schema format
 *
 * Usage: node jsdoc-json-export.js
 * Output: ../data/typedoc-data.json
 */

const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

const {
    SCHEMA_VERSION,
    TypeDocKinds,
    generateSignatureHash,
    createEmptyFunctionDoc,
    createEmptyModuleDoc,
    createEmptyExport,
    validateDocumentationExport
} = require('../schema/commonSchema');

// Configuration
const CONFIG = {
    codeboltjsPath: path.resolve(__dirname, '../../../../packages/codeboltjs'),
    tempJsonPath: path.resolve(__dirname, '../temp/typedoc-raw.json'),
    tempHtmlPath: path.resolve(__dirname, '../temp/typedoc-html'),
    outputPath: path.resolve(__dirname, '../data/typedoc-data.json'),
    // Redirect HTML output to temp folder to prevent polluting the package docs folder
    typedocCommand: 'npx typedoc --plugin typedoc-plugin-missing-exports --emit none --json'
};

/**
 * Run TypeDoc to generate raw JSON
 */
async function runTypedoc() {
    console.log('Running TypeDoc...');
    console.log(`  Working directory: ${CONFIG.codeboltjsPath}`);

    const command = `${CONFIG.typedocCommand} ${CONFIG.tempJsonPath} --pretty`;

    try {
        const { stdout, stderr } = await execAsync(command, {
            cwd: CONFIG.codeboltjsPath,
            maxBuffer: 100 * 1024 * 1024 // 100MB buffer for large output
        });

        if (stderr && !stderr.includes('warning') && !stderr.includes('Loaded plugin')) {
            console.warn('TypeDoc stderr:', stderr);
        }

        console.log('TypeDoc completed successfully');
        return true;
    } catch (error) {
        console.error('TypeDoc failed:', error.message);
        throw error;
    }
}

/**
 * Extract text from TypeDoc comment summary
 * @param {Array} summary - Comment summary array
 * @returns {string} Extracted text
 */
function extractCommentText(summary) {
    if (!summary || !Array.isArray(summary)) return '';

    return summary
        .filter(item => item.kind === 'text' || item.kind === 'code')
        .map(item => item.text)
        .join('')
        .trim();
}

/**
 * Extract description from block tags (for @returns, @param, etc.)
 * @param {Array} blockTags - Block tags array
 * @param {string} tagName - Tag name to extract (e.g., '@returns')
 * @returns {string} Extracted content
 */
function extractBlockTagContent(blockTags, tagName) {
    if (!blockTags || !Array.isArray(blockTags)) return '';

    const tag = blockTags.find(t => t.tag === tagName);
    if (!tag || !tag.content) return '';

    return tag.content
        .filter(item => item.kind === 'text' || item.kind === 'code')
        .map(item => item.text)
        .join('')
        .trim();
}

/**
 * Extract type name from TypeDoc type object
 * @param {Object} typeObj - TypeDoc type object
 * @returns {string} Type name string
 */
function extractTypeName(typeObj) {
    if (!typeObj) return 'unknown';

    switch (typeObj.type) {
        case 'reference':
            let name = typeObj.name || 'unknown';
            // Handle type arguments like Promise<T>
            if (typeObj.typeArguments && typeObj.typeArguments.length > 0) {
                const args = typeObj.typeArguments.map(extractTypeName).join(', ');
                name = `${name}<${args}>`;
            }
            return name;
        case 'intrinsic':
            return typeObj.name || 'unknown';
        case 'literal':
            return JSON.stringify(typeObj.value);
        case 'union':
            return typeObj.types?.map(extractTypeName).join(' | ') || 'unknown';
        case 'intersection':
            return typeObj.types?.map(extractTypeName).join(' & ') || 'unknown';
        case 'array':
            return `${extractTypeName(typeObj.elementType)}[]`;
        case 'tuple':
            return `[${typeObj.elements?.map(extractTypeName).join(', ') || ''}]`;
        case 'reflection':
            if (typeObj.declaration?.signatures) {
                return 'Function';
            }
            return 'object';
        case 'query':
            return `typeof ${typeObj.queryType?.name || 'unknown'}`;
        default:
            return typeObj.name || 'unknown';
    }
}

/**
 * Extract parameters from function signature
 * @param {Object} signature - TypeDoc signature object
 * @returns {Array} Array of parameter objects
 */
function extractParameters(signature) {
    if (!signature?.parameters) return [];

    return signature.parameters.map(param => ({
        name: param.name,
        typeName: extractTypeName(param.type),
        description: extractCommentText(param.comment?.summary) || '',
        isOptional: param.flags?.isOptional || false,
        defaultValue: param.defaultValue || undefined
    }));
}

/**
 * Extract return type from function signature
 * @param {Object} signature - TypeDoc signature object
 * @returns {Object} Return type object
 */
function extractReturnType(signature) {
    const returnType = {
        signatureTypeName: 'void',
        description: '',
        typeArgs: []
    };

    if (!signature?.type) return returnType;

    returnType.signatureTypeName = extractTypeName(signature.type);

    // Extract @returns description from block tags
    if (signature.comment?.blockTags) {
        returnType.description = extractBlockTagContent(signature.comment.blockTags, '@returns');
    }

    // Extract type arguments for generic types like Promise<T>
    if (signature.type?.typeArguments) {
        returnType.typeArgs = signature.type.typeArguments.map(arg => ({
            type: arg.type || 'reference',
            name: extractTypeName(arg)
        }));
    }

    return returnType;
}

/**
 * Process a function/property from TypeDoc output
 * @param {Object} funcNode - TypeDoc function/property node
 * @param {string} moduleName - Module name
 * @param {string} sourceFile - Source file path
 * @returns {Object} Function documentation object
 */
function processFunction(funcNode, moduleName, sourceFile) {
    const funcDoc = createEmptyFunctionDoc(funcNode.name, moduleName);

    // Set source information
    if (funcNode.sources && funcNode.sources[0]) {
        funcDoc.source = {
            filePath: funcNode.sources[0].fileName,
            lineNumber: funcNode.sources[0].line,
            columnNumber: funcNode.sources[0].character || 0
        };
    } else {
        funcDoc.source.filePath = sourceFile;
    }

    // Handle different node kinds
    let signature = null;

    if (funcNode.kind === TypeDocKinds.PROPERTY) {
        // Property with function type
        if (funcNode.type?.declaration?.signatures) {
            signature = funcNode.type.declaration.signatures[0];
        }
        // Use property comment if available
        funcDoc.description = extractCommentText(funcNode.comment?.summary) || '';

        // Also check for @description block tag
        if (!funcDoc.description && funcNode.comment?.blockTags) {
            funcDoc.description = extractBlockTagContent(funcNode.comment.blockTags, '@description');
        }
    } else if (funcNode.kind === TypeDocKinds.METHOD || funcNode.kind === TypeDocKinds.FUNCTION) {
        // Method with signatures
        if (funcNode.signatures && funcNode.signatures[0]) {
            signature = funcNode.signatures[0];
        }
    }

    // Extract from signature if available
    if (signature) {
        if (!funcDoc.description) {
            funcDoc.description = extractCommentText(signature.comment?.summary) || '';
            if (!funcDoc.description && signature.comment?.blockTags) {
                funcDoc.description = extractBlockTagContent(signature.comment.blockTags, '@description');
            }
        }
        funcDoc.parameters = extractParameters(signature);
        funcDoc.returns = extractReturnType(signature);

        // Get source from signature if not already set
        if (!funcDoc.source.lineNumber && signature.sources && signature.sources[0]) {
            funcDoc.source = {
                filePath: signature.sources[0].fileName,
                lineNumber: signature.sources[0].line,
                columnNumber: signature.sources[0].character || 0
            };
        }
    }

    // Generate signature hash for change detection
    funcDoc.signatureHash = generateSignatureHash(funcDoc);
    funcDoc.extractedAt = new Date().toISOString();

    return funcDoc;
}

/**
 * Find and process the Codebolt class and its module properties
 * @param {Object} typedocJson - Raw TypeDoc JSON
 * @returns {Array} Array of module documentation objects
 */
function processCodeboltClass(typedocJson) {
    const modules = [];

    // Navigate to find Codebolt class - it could be in different locations
    let codeboltClass = null;

    // Try to find in <internal> module first
    const internalModule = typedocJson.children?.find(c => c.name === '<internal>');
    if (internalModule) {
        codeboltClass = internalModule.children?.find(
            c => c.name === 'Codebolt' && c.kind === TypeDocKinds.CLASS
        );
    }

    // If not found, search in root children
    if (!codeboltClass) {
        codeboltClass = typedocJson.children?.find(
            c => c.name === 'Codebolt' && c.kind === TypeDocKinds.CLASS
        );
    }

    // Deep search if still not found
    if (!codeboltClass) {
        codeboltClass = findNodeByNameAndKind(typedocJson, 'Codebolt', TypeDocKinds.CLASS);
    }

    if (!codeboltClass) {
        console.warn('Could not find Codebolt class');
        return modules;
    }

    console.log(`Found Codebolt class with ${codeboltClass.children?.length || 0} members`);

    // Process each property that represents a module
    if (codeboltClass.children) {
        for (const member of codeboltClass.children) {
            // Skip constructor and non-property members
            if (member.kind !== TypeDocKinds.PROPERTY) continue;

            // Skip internal properties
            if (member.name.startsWith('_') ||
                member.name === 'websocket' ||
                member.name === 'isReady' ||
                member.name === 'readyPromise' ||
                member.name === 'readyHandlers' ||
                member.name === 'messageQueue' ||
                member.name === 'messageResolvers') {
                continue;
            }

            const moduleDoc = createEmptyModuleDoc(member.name);
            moduleDoc.description = extractCommentText(member.comment?.summary) || '';

            // Get source file
            if (member.sources && member.sources[0]) {
                moduleDoc.source.filePath = member.sources[0].fileName;
            }

            // If this property has a type with declaration containing functions
            if (member.type?.declaration?.children) {
                for (const funcNode of member.type.declaration.children) {
                    // Process all children that have function signatures
                    if (funcNode.type?.declaration?.signatures ||
                        funcNode.signatures ||
                        funcNode.kind === TypeDocKinds.METHOD ||
                        funcNode.kind === TypeDocKinds.FUNCTION) {
                        const funcDoc = processFunction(funcNode, member.name, moduleDoc.source.filePath);
                        moduleDoc.functions.push(funcDoc);
                    }
                }
            }

            // Also check if the type itself is a reference to a module object
            if (member.type?.type === 'reference' && !moduleDoc.functions.length) {
                // Try to find the referenced type
                const referencedType = findNodeByName(typedocJson, member.type.name);
                if (referencedType?.children) {
                    for (const funcNode of referencedType.children) {
                        if (funcNode.type?.declaration?.signatures || funcNode.signatures) {
                            const funcDoc = processFunction(funcNode, member.name, moduleDoc.source.filePath);
                            moduleDoc.functions.push(funcDoc);
                        }
                    }
                }
            }

            // Only add modules with functions
            if (moduleDoc.functions.length > 0) {
                modules.push(moduleDoc);
                console.log(`  Module ${member.name}: ${moduleDoc.functions.length} functions`);
            }
        }
    }

    return modules;
}

/**
 * Find a node by name in the TypeDoc tree
 * @param {Object} node - Starting node
 * @param {string} name - Name to find
 * @returns {Object|null} Found node or null
 */
function findNodeByName(node, name) {
    if (!node) return null;
    if (node.name === name) return node;

    if (node.children) {
        for (const child of node.children) {
            const found = findNodeByName(child, name);
            if (found) return found;
        }
    }

    return null;
}

/**
 * Find a node by name and kind in the TypeDoc tree
 * @param {Object} node - Starting node
 * @param {string} name - Name to find
 * @param {number} kind - Kind to match
 * @returns {Object|null} Found node or null
 */
function findNodeByNameAndKind(node, name, kind) {
    if (!node) return null;
    if (node.name === name && node.kind === kind) return node;

    if (node.children) {
        for (const child of node.children) {
            const found = findNodeByNameAndKind(child, name, kind);
            if (found) return found;
        }
    }

    return null;
}

/**
 * Process standalone module files (alternative extraction method)
 * @param {Object} typedocJson - Raw TypeDoc JSON
 * @returns {Array} Array of module documentation objects
 */
function processStandaloneModules(typedocJson) {
    const modules = [];
    const modulePatterns = ['cb', 'codebolt'];

    // Find module exports in the internal namespace
    const internalModule = typedocJson.children?.find(c => c.name === '<internal>');
    if (!internalModule) return modules;

    // Look for standalone module objects (like cbfs, cbbrowser, etc.)
    for (const child of internalModule.children || []) {
        // Check if name starts with module patterns
        const isModule = modulePatterns.some(p =>
            child.name.toLowerCase().startsWith(p.toLowerCase())
        );

        if (!isModule) continue;

        // Check if this looks like a module with functions
        if (child.children && child.children.some(c =>
            c.type?.declaration?.signatures || c.signatures
        )) {
            // Normalize module name (remove 'cb' prefix)
            let moduleName = child.name;
            if (moduleName.toLowerCase().startsWith('cb')) {
                moduleName = moduleName.slice(2);
            }
            moduleName = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);

            const moduleDoc = createEmptyModuleDoc(moduleName);
            moduleDoc.description = extractCommentText(child.comment?.summary) || '';

            if (child.sources && child.sources[0]) {
                moduleDoc.source.filePath = child.sources[0].fileName;
            }

            for (const funcNode of child.children) {
                if (funcNode.type?.declaration?.signatures || funcNode.signatures) {
                    const funcDoc = processFunction(funcNode, moduleName, moduleDoc.source.filePath);
                    moduleDoc.functions.push(funcDoc);
                }
            }

            if (moduleDoc.functions.length > 0) {
                modules.push(moduleDoc);
            }
        }
    }

    return modules;
}

/**
 * Transform TypeDoc JSON to common schema format
 * @param {Object} typedocJson - Raw TypeDoc JSON
 * @returns {Object} Documentation export object
 */
async function transformToCommonSchema(typedocJson) {
    console.log('Transforming TypeDoc output to common schema...');

    // Process Codebolt class modules
    const codeboltModules = processCodeboltClass(typedocJson);

    // Process standalone modules as fallback
    const standaloneModules = processStandaloneModules(typedocJson);

    // Merge and deduplicate modules
    const moduleMap = new Map();

    for (const mod of [...codeboltModules, ...standaloneModules]) {
        const existing = moduleMap.get(mod.name);
        if (existing) {
            // Merge functions, avoiding duplicates
            const existingNames = new Set(existing.functions.map(f => f.name));
            for (const func of mod.functions) {
                if (!existingNames.has(func.name)) {
                    existing.functions.push(func);
                }
            }
            // Use better description if available
            if (!existing.description && mod.description) {
                existing.description = mod.description;
            }
        } else {
            moduleMap.set(mod.name, mod);
        }
    }

    const exportData = createEmptyExport('typedoc');
    exportData.modules = Array.from(moduleMap.values());

    // Validate
    const validation = validateDocumentationExport(exportData);
    if (!validation.valid) {
        console.warn('Validation warnings:', validation.errors);
    }

    return exportData;
}

/**
 * Main execution
 */
async function main() {
    try {
        console.log('=== TypeDoc JSON Export ===\n');

        // Ensure directories exist
        const tempDir = path.dirname(CONFIG.tempJsonPath);
        const outputDir = path.dirname(CONFIG.outputPath);

        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Run TypeDoc
        await runTypedoc();

        // Read raw TypeDoc output
        console.log(`\nReading TypeDoc output from: ${CONFIG.tempJsonPath}`);
        const rawJson = JSON.parse(fs.readFileSync(CONFIG.tempJsonPath, 'utf8'));
        console.log(`Loaded TypeDoc JSON (schema version: ${rawJson.schemaVersion || 'unknown'})`);
        console.log(`Root children count: ${rawJson.children?.length || 0}`);

        // Transform to common schema
        const transformedData = await transformToCommonSchema(rawJson);

        // Write output
        fs.writeFileSync(CONFIG.outputPath, JSON.stringify(transformedData, null, 2));

        // Summary
        console.log('\n=== Export Summary ===');
        console.log(`Schema version: ${transformedData.schemaVersion}`);
        console.log(`Total modules: ${transformedData.modules.length}`);
        console.log(`Total functions: ${transformedData.modules.reduce((sum, m) => sum + m.functions.length, 0)}`);
        console.log(`Output: ${CONFIG.outputPath}`);

        // List modules
        console.log('\nModules found:');
        for (const mod of transformedData.modules) {
            console.log(`  - ${mod.name}: ${mod.functions.length} functions`);
        }

    } catch (error) {
        console.error('Export failed:', error);
        process.exit(1);
    }
}

module.exports = {
    main,
    transformToCommonSchema,
    processCodeboltClass,
    extractTypeName,
    extractParameters,
    extractReturnType
};

// Run if executed directly
if (require.main === module) {
    main();
}
