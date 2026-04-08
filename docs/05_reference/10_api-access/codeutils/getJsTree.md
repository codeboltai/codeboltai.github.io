---
name: getJsTree
cbbaseinfo:
  description: Retrieves a JavaScript tree structure for a given file path. Analyzes JavaScript and TypeScript files to extract their structural representation.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: "Optional: The path of the file to retrieve the JS tree for. If not provided, an error will be returned."
  returns:
    signatureTypeName: "Promise<JSTreeResponse>"
    description: A promise that resolves with a `JSTreeResponse` object containing file structure or error information.
data:
  name: getJsTree
  category: codeutils
  link: getJsTree.md
---
# getJsTree

```typescript
codebolt.codeutils.getJsTree(filePath: string): Promise<JSTreeResponse>
```

Retrieves a JavaScript tree structure for a given file path. Analyzes JavaScript and TypeScript files to extract their structural representation. 
### Parameters

- **`filePath`** (string): Optional: The path of the file to retrieve the JS tree for. If not provided, an error will be returned.

### Returns

- **`Promise<JSTreeResponse>`**: A promise that resolves with a [`JSTreeResponse`](/docs/api/11_doc-type-ref/types/interfaces/JSTreeResponse) object containing file structure or error information.

### Response Structure

The method returns a Promise that resolves to a [`JSTreeResponse`](/docs/api/11_doc-type-ref/types/interfaces/JSTreeResponse) object with the following properties:

- **`event`** (string): Always "getJsTreeResponse".
- **`payload`** (object, optional): Contains the parsed file structure when successful:
  - **`filePath`** (string): The absolute path to the analyzed file.
  - **`structure`** (array): An array of structural elements with the following properties:
    - **`type`** (string): The type of the structural element (e.g., "function", "class", "variable").
    - **`name`** (string): The name of the element.
    - **`startLine`** (number): The starting line number in the file.
    - **`endLine`** (number): The ending line number in the file.
    - **`startColumn`** (number): The starting column number in the file.
    - **`endColumn`** (number): The ending column number in the file.
    - **`nodeType`** (string): The AST node type.
- **`error`** (string, optional): Error message if the operation failed.

### Examples

```javascript
// Example 1: Analyze a specific JavaScript file
const jsTreeResult = await codebolt.codeutils.getJsTree('./src/index.js');
if (jsTreeResult.payload) {
  console.log("File Path:", jsTreeResult.payload.filePath);
  console.log("Structure Elements:", jsTreeResult.payload.structure.length);
  jsTreeResult.payload.structure.forEach(element => {
    console.log(`${element.type}: ${element.name} (lines ${element.startLine}-${element.endLine})`);
  });
} else {
  console.error("Error:", jsTreeResult.error);
}

// Example 2: Analyze a TypeScript file
const tsTreeResult = await codebolt.codeutils.getJsTree('./src/components/Button.tsx');
if (tsTreeResult.payload) {
  console.log("Analyzed TypeScript file successfully");
  console.log("Found elements:", tsTreeResult.payload.structure.map(el => el.name));
} else {
  console.error("Failed to analyze TypeScript file:", tsTreeResult.error);
}

// Example 3: Error handling for missing file path
try {
  const result = await codebolt.codeutils.getJsTree();
  if (result.error) {
    console.error("Expected error:", result.error); // "No file path provided for parsing"
  }
} catch (error) {
  console.error("Unexpected error:", error);
}

// Example 4: Error handling for non-existent file
const nonExistentResult = await codebolt.codeutils.getJsTree('./non-existent-file.js');
if (nonExistentResult.error) {
  console.error("File not found:", nonExistentResult.error);
}

// Example 5: Filter elements by type
const result = await codebolt.codeutils.getJsTree('./src/utils.js');
if (result.payload) {
  const functions = result.payload.structure.filter(el => el.type === 'function');
  const classes = result.payload.structure.filter(el => el.type === 'class');
  const variables = result.payload.structure.filter(el => el.type === 'variable');

  console.log(`Found ${functions.length} functions, ${classes.length} classes, ${variables.length} variables`);
}

// Example 6: Find specific element by name
const result = await codebolt.codeutils.getJsTree('./src/api.js');
if (result.payload) {
  const fetchDataFn = result.payload.structure.find(
    el => el.name === 'fetchData' && el.type === 'function'
  );

  if (fetchDataFn) {
    console.log(`Function 'fetchData' found at lines ${fetchDataFn.startLine}-${fetchDataFn.endLine}`);
  }
}

// Example 7: Calculate complexity metrics
const result = await codebolt.codeutils.getJsTree('./src/service.js');
if (result.payload) {
  const functions = result.payload.structure.filter(el => el.type === 'function');

  const complexity = functions.map(fn => ({
    name: fn.name,
    lines: fn.endLine - fn.startLine + 1,
    complexity: calculateCyclomaticComplexity(fn)
  }));

  console.table(complexity);
}

// Example 8: Generate code navigation map
const result = await codebolt.codeutils.getJsTree('./src/app.js');
if (result.payload) {
  const navigationMap = {
    filePath: result.payload.filePath,
    elements: result.payload.structure.map(el => ({
      type: el.type,
      name: el.name,
      location: {
        start: { line: el.startLine, column: el.startColumn },
        end: { line: el.endLine, column: el.endColumn }
      }
    }))
  };

  console.log('Navigation map:', JSON.stringify(navigationMap, null, 2));
}
```

### Advanced Usage Patterns

#### Pattern 1: Multi-File Analysis
```javascript
async function analyzeDirectory(directory, pattern = '*.js') {
  const fs = require('fs').promises;
  const path = require('path');

  const files = await fs.readdir(directory);
  const jsFiles = files.filter(f => f.endsWith('.js') || f.endsWith('.ts'));

  const analysisResults = [];

  for (const file of jsFiles) {
    const filePath = path.join(directory, file);
    const result = await codebolt.codeutils.getJsTree(filePath);

    if (result.payload) {
      analysisResults.push({
        file: filePath,
        elements: result.payload.structure,
        elementCount: result.payload.structure.length,
        elementTypes: getElementTypes(result.payload.structure)
      });
    }
  }

  return analysisResults;
}

function getElementTypes(structure) {
  return structure.reduce((acc, el) => {
    acc[el.type] = (acc[el.type] || 0) + 1;
    return acc;
  }, {});
}
```

#### Pattern 2: Dependency Extraction
```javascript
async function extractDependencies(filePath) {
  const result = await codebolt.codeutils.getJsTree(filePath);

  if (!result.payload) return [];

  const imports = result.payload.structure.filter(el =>
    el.nodeType && el.nodeType.includes('import')
  );

  const dependencies = imports.map(imp => {
    // Extract module name from import statement
    const match = imp.name.match(/require\(['"]([^'"]+)['"]\)/) ||
                  imp.name.match(/import.*from\s+['"]([^'"]+)['"]/);
    return match ? match[1] : null;
  }).filter(Boolean);

  return [...new Set(dependencies)]; // Remove duplicates
}
```

#### Pattern 3: Code Quality Assessment
```javascript
async function assessCodeQuality(filePath) {
  const result = await codebolt.codeutils.getJsTree(filePath);

  if (!result.payload) {
    return { error: 'Could not analyze file' };
  }

  const functions = result.payload.structure.filter(el => el.type === 'function');
  const classes = result.payload.structure.filter(el => el.type === 'class');

  const issues = [];

  // Check for long functions
  functions.forEach(fn => {
    const lines = fn.endLine - fn.startLine + 1;
    if (lines > 50) {
      issues.push({
        type: 'long_function',
        name: fn.name,
        lines,
        severity: 'warning',
        message: `Function '${fn.name}' is ${lines} lines long (recommend <50)`
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
        type: 'large_class',
        name: cls.name,
        methodCount: methods.length,
        severity: 'warning',
        message: `Class '${cls.name}' has ${methods.length} methods (recommend <10)`
      });
    }
  });

  return {
    file: result.payload.filePath,
    totalElements: result.payload.structure.length,
    functionCount: functions.length,
    classCount: classes.length,
    issues
  };
}
```

#### Pattern 4: Generate Documentation Outline
```javascript
async function generateDocumentationOutline(filePath) {
  const result = await codebolt.codeutils.getJsTree(filePath);

  if (!result.payload) return null;

  const outline = {
    file: result.payload.filePath,
    exports: [],
    functions: [],
    classes: []
  };

  result.payload.structure.forEach(el => {
    const item = {
      name: el.name,
      line: el.startLine,
      description: `Defined at line ${el.startLine}`
    };

    if (el.type === 'function') {
      outline.functions.push(item);
    } else if (el.type === 'class') {
      outline.classes.push(item);
    }
  });

  return outline;
}
```

### Error Handling Examples

#### Handle Syntax Errors
```javascript
const result = await codebolt.codeutils.getJsTree('./syntax-error.js');

if (result.error && result.error.includes('syntax')) {
  console.error('Syntax error detected in file:', result.error);
  // Attempt to recover or provide helpful feedback
}
```

#### Handle Unsupported File Types
```javascript
const supportedExtensions = ['.js', '.ts', '.tsx', '.jsx', '.mjs'];

async function safeGetJsTree(filePath) {
  const ext = path.extname(filePath);

  if (!supportedExtensions.includes(ext)) {
    return {
      error: `Unsupported file type: ${ext}. Supported types: ${supportedExtensions.join(', ')}`
    };
  }

  return await codebolt.codeutils.getJsTree(filePath);
}
```

#### Handle Large Files
```javascript
async function getJsTreeWithLimit(filePath, maxElements = 1000) {
  const result = await codebolt.codeutils.getJsTree(filePath);

  if (result.payload && result.payload.structure.length > maxElements) {
    console.warn(`File has ${result.payload.structure.length} elements (limit: ${maxElements})`);
    console.warn('Consider splitting this file into smaller modules');

    return {
      ...result,
      warning: 'File exceeds recommended complexity'
    };
  }

  return result;
}
```

### Performance Considerations

1. **File Size**: Large files (>1000 lines) may take longer to parse
   - Consider splitting large files into smaller modules
   - Use selective analysis to focus on specific elements

2. **Batch Processing**: When analyzing multiple files:
   - Use `Promise.all()` for concurrent requests
   - Implement rate limiting to avoid overwhelming the system
   - Cache results to avoid re-parsing unchanged files

3. **Memory Management**:
   - Clear result objects after processing
   - For large codebases, process files in batches
   - Consider using streaming for very large files

4. **Parser Selection**: The function uses tree-sitter parsers:
   - Different languages have different parsing speeds
   - TypeScript files may take longer than JavaScript
   - Complex syntax (e.g., decorators, generics) adds overhead

### Common Pitfalls

#### Pitfall 1: Not Checking Payload Existence
```javascript
// ❌ Incorrect
const result = await codebolt.codeutils.getJsTree('./file.js');
result.payload.structure.forEach(el => console.log(el)); // May throw error

// ✅ Correct
const result = await codebolt.codeutils.getJsTree('./file.js');
if (result.payload) {
  result.payload.structure.forEach(el => console.log(el));
} else {
  console.error('Analysis failed:', result.error);
}
```

#### Pitfall 2: Assuming Line Numbers Start at 1
```javascript
// ❌ Incorrect
const lineNum = result.payload.structure[0].startLine - 1; // May be 0

// ✅ Correct
const lineNum = result.payload.structure[0].startLine; // Already 1-based
```

#### Pitfall 3: Not Handling Edge Cases
```javascript
// ❌ Incorrect - doesn't handle empty files
const elementCount = result.payload.structure.length;

// ✅ Correct - handles empty files
const elementCount = result.payload?.structure?.length || 0;
```

### Integration Examples

#### With Codebase Search
```javascript
async function findFunctionImplementations(functionName) {
  const [searchResults, jsTrees] = await Promise.all([
    codebolt.codebaseSearch.search(functionName),
    // Analyze files from search results
  ]);

  const implementations = [];

  for (const result of searchResults.results) {
    const jsTree = await codebolt.codeutils.getJsTree(result.file);
    if (jsTree.payload) {
      const matchingFunctions = jsTree.payload.structure.filter(
        el => el.name === functionName && el.type === 'function'
      );

      implementations.push(...matchingFunctions.map(fn => ({
        file: result.file,
        function: fn.name,
        location: { line: fn.startLine, column: fn.startColumn }
      })));
    }
  }

  return implementations;
}
```

#### With Project Structure
```javascript
async function analyzePackageStructure(packagePath) {
  const [pkgData, files] = await Promise.all([
    codebolt.projectStructure.getPackage(packagePath),
    // Get all JS/TS files in package
  ]);

  const analysis = {
    package: pkgData.package.name,
    files: {},
    totalFunctions: 0,
    totalClasses: 0
  };

  for (const file of files) {
    const jsTree = await codebolt.codeutils.getJsTree(file);
    if (jsTree.payload) {
      const functions = jsTree.payload.structure.filter(el => el.type === 'function');
      const classes = jsTree.payload.structure.filter(el => el.type === 'class');

      analysis.files[file] = {
        functions: functions.length,
        classes: classes.length,
        elements: jsTree.payload.structure
      };

      analysis.totalFunctions += functions.length;
      analysis.totalClasses += classes.length;
    }
  }

  return analysis;
}
```

#### With Codeutils Matcher
```javascript
async function analyzeAndValidateCode(filePath) {
  const [jsTree, markdown] = await Promise.all([
    codebolt.codeutils.getJsTree(filePath),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  const fileContent = markdown.files.find(f => f.path === filePath);

  if (!jsTree.payload || !fileContent) {
    return { error: 'Could not analyze file' };
  }

  // Validate structure against content
  const lines = fileContent.content.split('\n');

  jsTree.payload.structure.forEach(el => {
    if (el.startLine > lines.length) {
      console.warn(`Element ${el.name} references line ${el.startLine} but file has only ${lines.length} lines`);
    }
  });

  return {
    structure: jsTree.payload.structure,
    lineCount: lines.length,
    validation: 'passed'
  };
}
```

### Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)
- TypeScript JSX (`.tsx`)
- And other languages supported by the tree-sitter parsers

### Notes

- The function analyzes the file's Abstract Syntax Tree (AST) to extract structural information.
- If no file path is provided, the function returns an error.
- The function supports various programming languages through tree-sitter parsers.
- File paths are resolved to absolute paths for consistent processing.
- The structure array contains elements sorted by their position in the file.
- Each structural element includes precise location information (line and column numbers).
- Error responses provide detailed information about what went wrong (file not found, unsupported language, etc.).