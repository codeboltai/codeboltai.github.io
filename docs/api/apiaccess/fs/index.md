---
cbapicategory:
  - name: createFile
    link: /docs/api/apiaccess/fs/createFile
    description: 'Creates a new file with the specified name and content. Supports creating files with complex content including code definitions.'
  - name: createFolder
    link: /docs/api/apiaccess/fs/createFolder
    description: 'Creates a new folder at the specified location. Useful for organizing project structures and temporary workspaces.'
  - name: readFile
    link: /docs/api/apiaccess/fs/readFile
    description: 'Reads the contents of a file and returns it as a string. Works with various file types including text, code, and configuration files.'
  - name: updateFile
    link: /docs/api/apiaccess/fs/updateFile
    description: 'Updates an existing file with new content. Requires separate filename and path parameters.'
  - name: writeToFile
    link: /docs/api/apiaccess/fs/writeToFile
    description: 'Creates or updates a file and writes data to it. Uses a single relative path parameter and overwrites existing content.'
  - name: deleteFile
    link: /docs/api/apiaccess/fs/deleteFile
    description: 'Deletes a specified file from the filesystem. Includes proper error handling and cleanup workflows.'
  - name: deleteFolder
    link: /docs/api/apiaccess/fs/deleteFolder
    description: 'Deletes a specified folder and its contents. Requires the folder to be empty before deletion.'
  - name: listFile
    link: /docs/api/apiaccess/fs/listFile
    description: 'Lists all files in the specified directory. Supports recursive listing and enhanced file information modes.'
  - name: listCodeDefinitionNames
    link: /docs/api/apiaccess/fs/listCodeDefinitionNames
    description: 'Extracts and lists all code definition names (functions, classes, methods) from source files within a project.'
  - name: searchFiles
    link: /docs/api/apiaccess/fs/searchFiles
    description: 'Searches for files matching a regex pattern within file contents. Supports advanced regex patterns and file type filtering.'
---

# fs

The `fs` module provides comprehensive file system operations for CodeboltJS. It includes methods for creating, reading, updating, and deleting files and folders, as well as advanced features like code definition extraction and content searching.

<CBAPICategory />

## Key Features

### File Operations
- **File Creation**: Create files with simple or complex content, including code definitions
- **File Reading**: Read various file types (text, code, configuration files)
- **File Updates**: Two methods available - `updateFile` (separate name/path) and `writeToFile` (single path)
- **File Deletion**: Safe deletion with proper error handling and cleanup workflows

### Folder Operations
- **Folder Creation**: Create single folders or complex directory structures
- **Folder Deletion**: Remove folders with proper cleanup procedures
- **Directory Listing**: List files with options for recursive scanning and enhanced information

### Advanced Features
- **Code Analysis**: Extract function names, class names, and other code definitions from source files
- **Content Search**: Search within file contents using regex patterns with file type filtering
- **Batch Operations**: Perform operations on multiple files or folders efficiently

## Common Workflows

### Complete File Lifecycle
```js
// Create → Read → Update → Delete
await codebolt.fs.createFile('example.txt', 'Initial content', '.');
const content = await codebolt.fs.readFile('./example.txt');
await codebolt.fs.updateFile('example.txt', '.', 'Updated content');
await codebolt.fs.deleteFile('example.txt', '.');
```

### Project Structure Creation
```js
// Create organized project structure
await codebolt.fs.createFolder('my-project', '.');
await codebolt.fs.createFolder('src', './my-project');
await codebolt.fs.createFolder('tests', './my-project');
await codebolt.fs.createFile('index.js', 'console.log("Hello");', './my-project/src');
```

### Code Analysis Workflow
```js
// Create code file and extract definitions
const jsCode = `
class MyClass {
    method() { return 'test'; }
}
function myFunction() { return 'hello'; }
`;
await codebolt.fs.createFile('code.js', jsCode, '.');
const definitions = await codebolt.fs.listCodeDefinitionNames('.');
```

## Error Handling

All fs methods return promises and should be used with proper error handling:

```js
try {
    const result = await codebolt.fs.createFile('test.txt', 'content', '.');
    if (result.success) {
        console.log('✅ Operation successful');
    } else {
        console.log('❌ Operation failed:', result.message);
    }
} catch (error) {
    console.error('Error:', error.message);
}
```