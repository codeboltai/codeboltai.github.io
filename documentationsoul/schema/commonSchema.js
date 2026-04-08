/**
 * Common Schema for Documentation Soul System
 * Provides unified data structure for TypeDoc and documentation extraction
 */

const crypto = require('crypto');

// Schema Version
const SCHEMA_VERSION = '1.0.0';

// TypeDoc Kind Constants (for reference)
const TypeDocKinds = {
  PROJECT: 1,
  MODULE: 2,
  NAMESPACE: 4,
  ENUM: 8,
  ENUM_MEMBER: 16,
  VARIABLE: 32,
  FUNCTION: 64,
  CLASS: 128,
  INTERFACE: 256,
  CONSTRUCTOR: 512,
  PROPERTY: 1024,
  METHOD: 2048,
  CALL_SIGNATURE: 4096,
  PARAMETER: 32768,
  TYPE_LITERAL: 65536,
  TYPE_ALIAS: 4194304
};

/**
 * Parameter Schema
 * @typedef {Object} Parameter
 * @property {string} name - Parameter name
 * @property {string} typeName - Parameter type
 * @property {string} description - Parameter description
 * @property {boolean} isOptional - Whether parameter is optional
 * @property {string} [defaultValue] - Default value if any
 */

/**
 * Return Type Schema
 * @typedef {Object} ReturnType
 * @property {string} signatureTypeName - Return type signature
 * @property {string} description - Return description
 * @property {Array<{type: string, name: string}>} typeArgs - Type arguments
 */

/**
 * Human Curated Content Schema
 * Tracks sections that require human curation
 * @typedef {Object} HumanCuratedContent
 */
const createEmptyHumanCurated = () => ({
  responseStructure: {
    present: false,
    content: '',
    lastUpdated: null
  },
  examples: {
    present: false,
    count: 0,
    content: [],
    lastUpdated: null
  },
  advancedExamples: {
    present: false,
    count: 0,
    content: []
  },
  errorHandling: {
    present: false,
    content: ''
  },
  usageNotes: {
    present: false,
    content: ''
  },
  bestPractices: {
    present: false,
    content: ''
  },
  commonPitfalls: {
    present: false,
    content: ''
  }
});

/**
 * Create empty function documentation structure
 * @param {string} name - Function name
 * @param {string} module - Module name
 * @returns {Object} Empty function documentation structure
 */
function createEmptyFunctionDoc(name, module) {
  return {
    id: `${module}.${name}`,
    name: name,
    displayName: name.charAt(0).toUpperCase() + name.slice(1),
    module: module,
    category: module,
    source: {
      filePath: '',
      lineNumber: 0,
      columnNumber: 0
    },
    description: '',
    parameters: [],
    returns: {
      signatureTypeName: '',
      description: '',
      typeArgs: []
    },
    humanCurated: createEmptyHumanCurated(),
    documentationPath: '',
    documentationType: 'none', // 'ApiAccess', 'McpAccess', or 'none'
    extractedAt: new Date().toISOString(),
    lastSourceModified: null,
    signatureHash: ''
  };
}

/**
 * Create empty module documentation structure
 * @param {string} name - Module name
 * @returns {Object} Empty module documentation structure
 */
function createEmptyModuleDoc(name) {
  return {
    name: name,
    displayName: name.charAt(0).toUpperCase() + name.slice(1),
    description: '',
    category: name,
    functions: [],
    source: {
      filePath: ''
    },
    documentationPath: ''
  };
}

/**
 * Create empty documentation export structure
 * @param {string} sourceType - 'typedoc' or 'documentation'
 * @returns {Object} Empty export structure
 */
function createEmptyExport(sourceType) {
  return {
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    sourceType: sourceType,
    modules: []
  };
}

/**
 * Generate signature hash for change detection
 * Uses MD5 hash of function signature components
 * @param {Object} func - Function documentation object
 * @returns {string} MD5 hash string
 */
function generateSignatureHash(func) {
  const signatureData = {
    name: func.name,
    parameters: (func.parameters || []).map(p => ({
      name: p.name,
      typeName: p.typeName,
      isOptional: p.isOptional || false
    })),
    returns: func.returns?.signatureTypeName || ''
  };
  return crypto.createHash('md5').update(JSON.stringify(signatureData)).digest('hex');
}

/**
 * Validate parameter object
 * @param {Object} param - Parameter object to validate
 * @returns {{valid: boolean, errors: string[]}}
 */
function validateParameter(param) {
  const errors = [];

  if (!param.name || typeof param.name !== 'string') {
    errors.push('Parameter name is required and must be a string');
  }
  if (!param.typeName || typeof param.typeName !== 'string') {
    errors.push('Parameter typeName is required and must be a string');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate function documentation object
 * @param {Object} func - Function documentation object to validate
 * @returns {{valid: boolean, errors: string[]}}
 */
function validateFunction(func) {
  const errors = [];

  if (!func.id || typeof func.id !== 'string') {
    errors.push('Function id is required');
  }
  if (!func.name || typeof func.name !== 'string') {
    errors.push('Function name is required');
  }
  if (!func.module || typeof func.module !== 'string') {
    errors.push('Function module is required');
  }
  if (!func.signatureHash) {
    errors.push('Signature hash is required for change detection');
  }

  // Validate parameters if present
  if (func.parameters && Array.isArray(func.parameters)) {
    func.parameters.forEach((param, idx) => {
      const paramValidation = validateParameter(param);
      if (!paramValidation.valid) {
        errors.push(`Parameter ${idx}: ${paramValidation.errors.join(', ')}`);
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate module documentation object
 * @param {Object} module - Module documentation object to validate
 * @returns {{valid: boolean, errors: string[]}}
 */
function validateModule(module) {
  const errors = [];

  if (!module.name || typeof module.name !== 'string') {
    errors.push('Module name is required');
  }
  if (!Array.isArray(module.functions)) {
    errors.push('Module functions must be an array');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate documentation export object
 * @param {Object} data - Export data to validate
 * @returns {{valid: boolean, errors: string[]}}
 */
function validateDocumentationExport(data) {
  const errors = [];

  if (!data.schemaVersion) {
    errors.push('schemaVersion is required');
  }
  if (!data.exportedAt) {
    errors.push('exportedAt is required');
  }
  if (!data.sourceType || !['typedoc', 'documentation'].includes(data.sourceType)) {
    errors.push('sourceType must be "typedoc" or "documentation"');
  }
  if (!data.modules || !Array.isArray(data.modules)) {
    errors.push('modules array is required');
  } else {
    // Validate each module
    data.modules.forEach((mod, idx) => {
      const modValidation = validateModule(mod);
      if (!modValidation.valid) {
        errors.push(`Module ${idx} (${mod.name || 'unnamed'}): ${modValidation.errors.join(', ')}`);
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Normalize function name to consistent format
 * @param {string} name - Function name
 * @returns {string} Normalized name
 */
function normalizeFunctionName(name) {
  if (!name) return '';
  // Convert to camelCase if not already
  return name.charAt(0).toLowerCase() + name.slice(1);
}

/**
 * Get display name from function name
 * @param {string} name - Function name
 * @returns {string} Display name (PascalCase)
 */
function getDisplayName(name) {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Merge two function documentation objects
 * Source takes precedence for code-related fields
 * Documentation takes precedence for human-curated fields
 * @param {Object} sourceFunc - Function from source code (TypeDoc)
 * @param {Object} docFunc - Function from documentation
 * @returns {Object} Merged function documentation
 */
function mergeFunctionDocs(sourceFunc, docFunc) {
  return {
    // Identity from source
    id: sourceFunc.id || docFunc.id,
    name: sourceFunc.name || docFunc.name,
    displayName: docFunc.displayName || sourceFunc.displayName,
    module: sourceFunc.module || docFunc.module,
    category: docFunc.category || sourceFunc.category,

    // Source info from source
    source: sourceFunc.source || docFunc.source,

    // Documentation content - prefer documentation version if richer
    description: docFunc.description || sourceFunc.description,
    parameters: mergeParameters(sourceFunc.parameters, docFunc.parameters),
    returns: mergeReturns(sourceFunc.returns, docFunc.returns),

    // Human curated always from documentation
    humanCurated: docFunc.humanCurated || createEmptyHumanCurated(),

    // Metadata
    documentationPath: docFunc.documentationPath || '',
    documentationType: docFunc.documentationType || 'none',
    extractedAt: new Date().toISOString(),
    lastSourceModified: sourceFunc.extractedAt,
    signatureHash: sourceFunc.signatureHash || generateSignatureHash(sourceFunc)
  };
}

/**
 * Merge parameter arrays
 * @param {Array} sourceParams - Parameters from source
 * @param {Array} docParams - Parameters from documentation
 * @returns {Array} Merged parameters
 */
function mergeParameters(sourceParams, docParams) {
  if (!sourceParams || sourceParams.length === 0) return docParams || [];
  if (!docParams || docParams.length === 0) return sourceParams;

  // Use source for structure, documentation for descriptions
  return sourceParams.map(sp => {
    const dp = docParams.find(p => p.name === sp.name);
    return {
      name: sp.name,
      typeName: sp.typeName,
      description: dp?.description || sp.description || '',
      isOptional: sp.isOptional || false,
      defaultValue: sp.defaultValue
    };
  });
}

/**
 * Merge return type info
 * @param {Object} sourceReturns - Returns from source
 * @param {Object} docReturns - Returns from documentation
 * @returns {Object} Merged returns
 */
function mergeReturns(sourceReturns, docReturns) {
  return {
    signatureTypeName: sourceReturns?.signatureTypeName || docReturns?.signatureTypeName || '',
    description: docReturns?.description || sourceReturns?.description || '',
    typeArgs: sourceReturns?.typeArgs || docReturns?.typeArgs || []
  };
}

module.exports = {
  // Constants
  SCHEMA_VERSION,
  TypeDocKinds,

  // Factory functions
  createEmptyFunctionDoc,
  createEmptyModuleDoc,
  createEmptyExport,
  createEmptyHumanCurated,

  // Utility functions
  generateSignatureHash,
  normalizeFunctionName,
  getDisplayName,

  // Validation functions
  validateParameter,
  validateFunction,
  validateModule,
  validateDocumentationExport,

  // Merge functions
  mergeFunctionDocs,
  mergeParameters,
  mergeReturns
};
