---
name: getJsTree
cbbaseinfo:
  description: Retrieves a JavaScript tree structure for a given file path. Analyzes JavaScript and TypeScript files to extract their structural representation.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to retrieve the JS tree for. Optional - if not provided, analyzes current directory.
  returns:
    signatureTypeName: Promise<GetJsTreeResponse>
    description: A promise that resolves with the JS tree response containing file structure or error information.
    typeArgs:
      - type: reference
        name: GetJsTreeResponse
data:
  name: getJsTree
  category: codeutils
  link: getJsTree.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `getJsTree` function analyzes JavaScript or TypeScript files and returns their tree structure. This provides a hierarchical representation of the code including functions, variables, classes, and other structural elements.

## Usage

```javascript
// Analyze current directory
const result = await codebolt.codeutils.getJsTree();

// Analyze specific file
const result = await codebolt.codeutils.getJsTree(filePath);
```

## Examples

### Analyzing Current Directory

```javascript
const jsTreeResult = await codebolt.codeutils.getJsTree();
console.log(jsTreeResult);
// Output:
// {
//   event: 'getJsTreeResponse',
//   error: 'No file path provided for parsing'
// }
```

### Analyzing Specific File

```javascript
const specificFileResult = await codebolt.codeutils.getJsTree('./tests/terminal-test.js');
console.log(specificFileResult);
// Output:
// {
//   event: 'getJsTreeResponse',
//   payload: {
//     filePath: 'C:\\path\\to\\file\\terminal-test.js',
//     structure: [
//       { /* function/class structure */ },
//       { /* function/class structure */ }
//     ]
//   }
// }
```

### TypeScript File Analysis

```javascript
const tsFileResult = await codebolt.codeutils.getJsTree('./src/index.ts');
console.log(tsFileResult);
// Output (if file doesn't exist):
// {
//   event: 'getJsTreeResponse',
//   error: "ENOENT: no such file or directory, access 'C:\\path\\to\\src\\index.ts'"
// }
```

## Response Format

### Success Response

```javascript
{
  event: 'getJsTreeResponse',
  payload: {
    filePath: 'string',      // Absolute path to the analyzed file
    structure: [             // Array of structural elements
      {
        // Function, class, or variable information
        // Structure depends on the code elements found
      }
    ]
  }
}
```

### Error Response

```javascript
{
  event: 'getJsTreeResponse',
  error: 'string'            // Error message describing the issue
}
```

## Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)

## Error Handling

The function handles various error scenarios:

- **No file path provided**: Returns error when called without parameters on directory
- **File not found**: Returns ENOENT error for non-existent files
- **Unsupported language**: Returns error for unsupported file types
- **Access permissions**: Returns error if file cannot be accessed
