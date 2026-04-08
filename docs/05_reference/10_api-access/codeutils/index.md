---
cbapicategory:
  - name: getAllFilesAsMarkDown
    link: /docs/api/apiaccess/codeutils/getAllFilesAsMarkDown
    description: Retrieves all files as Markdown.
  - name: getJsTree
    link: /docs/api/apiaccess/codeutils/getJsTree
    description: Retrieves a JavaScript tree structure for a given file path.
  - name: getMatcherList
    link: /docs/api/apiaccess/codeutils/getMatcherList
    description: Retrieves the list of matchers.
  - name: matchDetail
    link: /docs/api/apiaccess/codeutils/matchDetail
    description: Retrieves details of a match.
  - name: performMatch
    link: /docs/api/apiaccess/codeutils/performMatch
    description: >-
      Performs a matching operation based on the provided matcher definition and
      problem patterns.

---
# codeutils

<CBAPICategory />

## Overview

The `codeutils` module provides essential utilities for code analysis, file processing, and problem matching. It enables agents to understand code structure, generate documentation, and parse tool outputs effectively.

## Quick Start Guide

### Basic File Analysis

```javascript
import codebolt from '@codebolt/codeboltjs';

// Get all project files as markdown
const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();
console.log(`Found ${markdown.files.length} files`);

// Analyze a specific file's structure
const jsTree = await codebolt.codeutils.getJsTree('./src/index.js');
if (jsTree.payload) {
  console.log('Functions:', jsTree.payload.structure.filter(el => el.type === 'function'));
}
```

### Problem Matching Workflow

```javascript
// Get available matchers
const matcherList = await codebolt.codeutils.getMatcherList();

// Get specific matcher details
const eslintDetail = await codebolt.codeutils.matchDetail('eslint-compact');

// Parse error output
const problems = [
  'file.js: line 10, col 5, Error - Unexpected console (no-console)',
  'file.js: line 15, col 8, Warning - Missing semicolon'
];

const matches = await codebolt.codeutils.performMatch(
  { owner: 'eslint', pattern: eslintDetail.matcher.pattern },
  eslintDetail.matcher.pattern,
  problems.map(p => ({ line: p, source: 'eslint' }))
);

console.log('Parsed errors:', matches.matches);
```

## Common Workflows

### Workflow 1: Comprehensive Code Analysis

Analyze an entire codebase to understand its structure and composition:

```javascript
async function analyzeCodebase() {
  const [markdown, structure] = await Promise.all([
    codebolt.codeutils.getAllFilesAsMarkDown(),
    codebolt.projectStructure.getMetadata()
  ]);

  // Language distribution
  const languages = {};
  markdown.files.forEach(file => {
    const lang = file.language || 'unknown';
    languages[lang] = (languages[lang] || 0) + 1;
  });

  // Package analysis
  const packages = structure.metadata.packages.map(pkg => ({
    name: pkg.name,
    type: pkg.type,
    fileCount: markdown.files.filter(f => f.path.startsWith(pkg.path)).length
  }));

  return { languages, packages, totalFiles: markdown.files.length };
}
```

### Workflow 2: Error Detection and Reporting

Parse tool outputs and generate structured error reports:

```javascript
async function generateErrorReport(toolOutput, toolName) {
  // Auto-detect appropriate matcher
  const matcherList = await codebolt.codeutils.getMatcherList();
  const matcherName = detectMatcher(toolName, toolOutput);

  if (!matcherName) {
    throw new Error('No suitable matcher found for this output');
  }

  // Get matcher details
  const detail = await codebolt.codeutils.matchDetail(matcherName);
  if (!detail.matcher) {
    throw new Error(`Failed to load matcher: ${matcherName}`);
  }

  // Parse errors
  const problems = toolOutput.split('\n').filter(line => line.trim());
  const matches = await codebolt.codeutils.performMatch(
    { owner: matcherName, pattern: detail.matcher.pattern },
    detail.matcher.pattern,
    problems.map(p => ({ line: p, source: toolName }))
  );

  // Generate report
  const report = {
    tool: toolName,
    totalProblems: problems.length,
    parsedErrors: matches.matches?.length || 0,
    errors: matches.matches.filter(m => m.severity === 'error'),
    warnings: matches.matches.filter(m => m.severity === 'warning'),
    byFile: groupByFile(matches.matches)
  };

  return report;
}

function groupByFile(matches) {
  return matches.reduce((acc, match) => {
    if (!acc[match.file]) {
      acc[match.file] = [];
    }
    acc[match.file].push(match);
    return acc;
  }, {});
}
```

### Workflow 3: Documentation Generation

Generate comprehensive documentation from code:

```javascript
async function generateDocumentation() {
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();

  // Filter out test files and node_modules
  const sourceFiles = markdown.files.filter(file =>
    !file.path.includes('test') &&
    !file.path.includes('spec') &&
    !file.path.includes('node_modules')
  );

  // Group by directory
  const byDirectory = {};
  sourceFiles.forEach(file => {
    const dir = file.path.split('/').slice(0, -1).join('/') || 'root';
    if (!byDirectory[dir]) byDirectory[dir] = [];
    byDirectory[dir].push(file);
  });

  // Generate documentation
  const docs = {
    title: 'Project Documentation',
    structure: Object.entries(byDirectory).map(([dir, files]) => ({
      directory: dir,
      fileCount: files.length,
      languages: [...new Set(files.map(f => f.language))],
      files: files.map(f => ({
        path: f.path,
        language: f.language,
        lineCount: f.content.split('\n').length
      }))
    }))
  };

  return docs;
}
```

### Workflow 4: Code Quality Assessment

Assess code quality using AST analysis:

```javascript
async function assessCodeQuality(filePath) {
  const jsTree = await codebolt.codeutils.getJsTree(filePath);

  if (!jsTree.payload) {
    return { error: 'Could not analyze file' };
  }

  const functions = jsTree.payload.structure.filter(el => el.type === 'function');
  const classes = jsTree.payload.structure.filter(el => el.type === 'class');

  const issues = [];

  // Check for long functions
  functions.forEach(fn => {
    const lines = fn.endLine - fn.startLine + 1;
    if (lines > 50) {
      issues.push({
        type: 'complexity',
        severity: 'warning',
        message: `Function '${fn.name}' is ${lines} lines long (recommend <50)`,
        location: { line: fn.startLine }
      });
    }
  });

  // Check for large classes
  classes.forEach(cls => {
    const methods = functions.filter(fn =>
      fn.startLine >= cls.startLine && fn.endLine <= cls.endLine
    );

    if (methods.length > 10) {
      issues.push({
        type: 'design',
        severity: 'warning',
        message: `Class '${cls.name}' has ${methods.length} methods (recommend <10)`,
        location: { line: cls.startLine }
      });
    }
  });

  return {
    file: filePath,
    metrics: {
      totalFunctions: functions.length,
      totalClasses: classes.length,
      avgFunctionLength: calculateAverage(functions, fn => fn.endLine - fn.startLine + 1)
    },
    issues
  };
}

function calculateAverage(items, selector) {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, item) => acc + selector(item), 0);
  return sum / items.length;
}
```

## Module Integration Examples

### Integration 1: Codeutils + CodebaseSearch

Find and analyze related code:

```javascript
async function findAndAnalyze(query) {
  // Search for relevant code
  const searchResults = await codebolt.codebaseSearch.search(query);

  // Analyze each found file
  const analyses = await Promise.all(
    searchResults.results.map(async result => {
      const jsTree = await codebolt.codeutils.getJsTree(result.file);
      return {
        file: result.file,
        match: result.content,
        structure: jsTree.payload?.structure || []
      };
    })
  );

  return analyses;
}
```

### Integration 2: Codeutils + Project Structure

Validate project structure matches actual files:

```javascript
async function validateProjectStructure() {
  const [markdown, structure] = await Promise.all([
    codebolt.codeutils.getAllFilesAsMarkDown(),
    codebolt.projectStructure.getMetadata()
  ]);

  const validation = {
    packages: [],
    totalFiles: markdown.files.length,
    documentedFiles: 0
  };

  for (const pkg of structure.metadata.packages) {
    const actualFiles = markdown.files.filter(f => f.path.startsWith(pkg.path));
    const documentedRoutes = pkg.routes?.length || 0;
    const documentedTables = pkg.tables?.length || 0;

    validation.packages.push({
      name: pkg.name,
      actualFileCount: actualFiles.length,
      documentedRoutes,
      documentedTables,
      validationScore: calculateValidationScore(actualFiles.length, documentedRoutes, documentedTables)
    });

    validation.documentedFiles += actualFiles.length;
  }

  return validation;
}

function calculateValidationScore(fileCount, routes, tables) {
  const score = (routes * 10 + tables * 5) / Math.max(fileCount, 1);
  return Math.min(100, Math.round(score * 100));
}
```

### Integration 3: Codeutils + Codemap

Generate visual codemap from file analysis:

```javascript
async function generateCodemap() {
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();
  const codemap = await codebolt.codemap.create({
    title: 'Project Structure Map',
    query: 'What is the project structure?'
  });

  // Build hierarchical structure
  const structure = buildFileTree(markdown.files);

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Project Structure Map',
    structure,
    metadata: {
      totalFiles: markdown.files.length,
      languages: [...new Set(markdown.files.map(f => f.language))],
      generatedAt: new Date().toISOString()
    }
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}

function buildFileTree(files) {
  const tree = {};

  files.forEach(file => {
    const parts = file.path.split('/');
    let current = tree;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = { type: 'file', language: file.language };
      } else {
        current[part] = current[part] || { type: 'directory', children: {} };
        current = current[part].children;
      }
    });
  });

  return tree;
}
```

## Best Practices

### 1. Error Handling

Always handle potential errors gracefully:

```javascript
async function safeCodeUtils(operation) {
  try {
    return await operation();
  } catch (error) {
    console.error('CodeUtils operation failed:', error);

    // Check for common error types
    if (error.message.includes('file not found')) {
      return { error: 'File not found', suggestion: 'Check file path' };
    }

    if (error.message.includes('pattern')) {
      return { error: 'Invalid pattern', suggestion: 'Verify regex pattern' };
    }

    return { error: 'Unknown error', details: error.message };
  }
}

// Usage
const result = await safeCodeUtils(() =>
  codebolt.codeutils.getJsTree('./src/file.js')
);
```

### 2. Performance Optimization

Cache results and avoid redundant operations:

```javascript
class CodeUtilsCache {
  constructor() {
    this.fileCache = new Map();
    this.matcherCache = new Map();
  }

  async getJsTree(filePath) {
    if (this.fileCache.has(filePath)) {
      return this.fileCache.get(filePath);
    }

    const result = await codebolt.codeutils.getJsTree(filePath);
    this.fileCache.set(filePath, result);
    return result;
  }

  async getMatcherDetail(matcherName) {
    if (this.matcherCache.has(matcherName)) {
      return this.matcherCache.get(matcherName);
    }

    const result = await codebolt.codeutils.matchDetail(matcherName);
    this.matcherCache.set(matcherName, result);
    return result;
  }

  clear() {
    this.fileCache.clear();
    this.matcherCache.clear();
  }
}
```

### 3. Data Validation

Validate inputs and sanitize outputs:

```javascript
async function validateAndParse(filePath) {
  // Validate file path
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('Invalid file path');
  }

  if (!filePath.endsWith('.js') && !filePath.endsWith('.ts')) {
    console.warn('File may not be supported:', filePath);
  }

  // Get JS tree
  const jsTree = await codebolt.codeutils.getJsTree(filePath);

  if (!jsTree.payload) {
    throw new Error(`Failed to parse ${filePath}: ${jsTree.error}`);
  }

  // Validate structure
  if (!Array.isArray(jsTree.payload.structure)) {
    throw new Error('Invalid structure data received');
  }

  // Sanitize output
  return {
    file: jsTree.payload.filePath,
    elements: jsTree.payload.structure.map(el => ({
      type: el.type || 'unknown',
      name: el.name || 'anonymous',
      startLine: el.startLine || 0,
      endLine: el.endLine || 0
    }))
  };
}
```

### 4. Batch Processing

Process multiple files efficiently:

```javascript
async function batchProcessFiles(filePaths, concurrency = 5) {
  const results = [];

  for (let i = 0; i < filePaths.length; i += concurrency) {
    const batch = filePaths.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(
      batch.map(path => codebolt.codeutils.getJsTree(path))
    );

    batchResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.payload) {
        results.push({
          file: batch[index],
          success: true,
          structure: result.value.payload.structure
        });
      } else {
        results.push({
          file: batch[index],
          success: false,
          error: result.reason?.message || 'Unknown error'
        });
      }
    });
  }

  return results;
}
```

### 5. Matcher Selection

Intelligently select appropriate matchers:

```javascript
async function selectMatcher(errorOutput, fileName) {
  const matcherList = await codebolt.codeutils.getMatcherList();

  // Analyze error output for clues
  const clues = {
    hasTsc: errorOutput.includes('error TS'),
    hasEslint: /\d:\d\d\s+(error|warning)/.test(errorOutput),
    hasPython: errorOutput.includes('flake8') || errorOutput.includes('pylint'),
    hasJava: fileName.endsWith('.java') && errorOutput.includes('.java:')
  };

  // Select based on clues
  if (clues.hasTsc) return 'tsc';
  if (clues.hasEslint) return 'eslint-compact';
  if (clues.hasPython) return 'flake8';
  if (clues.hasJava) return 'javac';

  // Fallback: try to find by language
  const ext = fileName.split('.').pop();
  const languageMatchers = {
    'js': 'eslint-compact',
    'ts': 'tsc',
    'py': 'flake8',
    'java': 'javac'
  };

  return languageMatchers[ext] || null;
}
```

## Common Pitfalls to Avoid

### Pitfall 1: Not Checking for Empty Results

```javascript
// ❌ Incorrect
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
result.files.forEach(file => console.log(file));

// ✅ Correct
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.files && result.files.length > 0) {
  result.files.forEach(file => console.log(file));
} else {
  console.warn('No files found');
}
```

### Pitfall 2: Assuming Matcher Availability

```javascript
// ❌ Incorrect
const detail = await codebolt.codeutils.matchDetail('eslint');
await codebolt.codeutils.performMatch(/* ... */);

// ✅ Correct
const matcherList = await codebolt.codeutils.getMatcherList();
const hasEslint = matcherList.matchers?.some(m => m.name === 'eslint-compact');

if (hasEslint) {
  const detail = await codebolt.codeutils.matchDetail('eslint-compact');
  // ... proceed with matching
} else {
  console.error('ESLint matcher not available');
}
```

### Pitfall 3: Not Handling Large Projects

```javascript
// ❌ Incorrect - may timeout on large projects
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
result.files.forEach(file => processFile(file));

// ✅ Correct - process in batches
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
const batchSize = 50;

for (let i = 0; i < result.files.length; i += batchSize) {
  const batch = result.files.slice(i, i + batchSize);
  batch.forEach(file => processFile(file));

  // Optional: Add delay between batches
  if (i + batchSize < result.files.length) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
```

### Pitfall 4: Ignoring Language Differences

```javascript
// ❌ Incorrect - treats all files the same
const jsTree = await codebolt.codeutils.getJsTree(filePath);

// ✅ Correct - handles language-specific parsing
const ext = path.extname(filePath);

if (['.js', '.ts', '.tsx', '.jsx'].includes(ext)) {
  const jsTree = await codebolt.codeutils.getJsTree(filePath);
  // Process JavaScript/TypeScript file
} else {
  console.log(`Skipping ${ext} file - not supported by getJsTree`);
}
```

### Pitfall 5: Not Validating Regex Patterns

```javascript
// ❌ Incorrect - assumes pattern is valid
const detail = await codebolt.codeutils.matchDetail('custom-matcher');
await codebolt.codeutils.performMatch(/* uses detail.matcher.pattern */);

// ✅ Correct - validates pattern first
const detail = await codebolt.codeutils.matchDetail('custom-matcher');

if (detail.matcher && detail.matcher.pattern) {
  try {
    new RegExp(detail.matcher.pattern); // Validate regex
    await codebolt.codeutils.performMatch(/* ... */);
  } catch (error) {
    console.error('Invalid regex pattern:', error.message);
  }
}
```
