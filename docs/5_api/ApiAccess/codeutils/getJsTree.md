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
    signatureTypeName: Promise<JSTreeResponse>
    description: A promise that resolves with a `JSTreeResponse` object containing file structure or error information.
data:
  name: getJsTree
  category: codeutils
  link: getJsTree.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `JSTreeResponse` object with the following properties:

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
