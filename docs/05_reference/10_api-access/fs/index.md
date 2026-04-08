---
cbapicategory:
  - name: createFile
    link: /docs/api/apiaccess/fs/createFile
    description: "'Creates a new file with the specified name and content. Supports creating files with complex content including code definitions.'"
  - name: createFolder
    link: /docs/api/apiaccess/fs/createFolder
    description: "'Creates a new folder at the specified location. Useful for organizing project structures and temporary workspaces.'"
  - name: readFile
    link: /docs/api/apiaccess/fs/readFile
    description: "'Reads the contents of a file and returns it as a string. Works with various file types including text, code, and configuration files.'"
  - name: updateFile
    link: /docs/api/apiaccess/fs/updateFile
    description: "'Updates an existing file with new content. Requires separate filename and path parameters.'"
  - name: writeToFile
    link: /docs/api/apiaccess/fs/writeToFile
    description: "'Creates or updates a file and writes data to it. Uses a single relative path parameter and overwrites existing content.'"
  - name: deleteFile
    link: /docs/api/apiaccess/fs/deleteFile
    description: "'Deletes a specified file from the filesystem. Includes proper error handling and cleanup workflows.'"
  - name: deleteFolder
    link: /docs/api/apiaccess/fs/deleteFolder
    description: "'Deletes a specified folder and its contents. Requires the folder to be empty before deletion.'"
  - name: listFile
    link: /docs/api/apiaccess/fs/listFile
    description: "'Lists all files in the specified directory. Supports recursive listing and enhanced file information modes.'"
  - name: listCodeDefinitionNames
    link: /docs/api/apiaccess/fs/listCodeDefinitionNames
    description: "'Extracts and lists all code definition names (functions, classes, methods) from source files within a project.'"
  - name: searchFiles
    link: /docs/api/apiaccess/fs/searchFiles
    description: "'Searches for files matching a regex pattern within file contents. Supports advanced regex patterns and file type filtering.'"
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

## Quick Start Guide

### Basic File Operations

```js
import codebolt from '@codebolt/codeboltjs';

// Create a new file
await codebolt.fs.createFile('hello.txt', 'Hello, World!', '.');
console.log('✅ File created');

// Read file content
const content = await codebolt.fs.readFile('./hello.txt');
console.log('File content:', content.content);

// Update file content
await codebolt.fs.updateFile('hello.txt', '.', 'Hello, CodeboltJS!');
console.log('✅ File updated');

// Delete file
await codebolt.fs.deleteFile('hello.txt', '.');
console.log('✅ File deleted');
```

### Working with Folders

```js
// Create a nested directory structure
await codebolt.fs.createFolder('project', '.');
await codebolt.fs.createFolder('src', './project');
await codebolt.fs.createFolder('tests', './project');
await codebolt.fs.createFolder('docs', './project');

// List directory contents
const files = await codebolt.fs.listFile('./project');
console.log('Directory contents:', files);
```

### Searching and Analysis

```js
// Search for specific content in files
const searchResults = await codebolt.fs.searchFiles('.', 'function', '*.js');
console.log('Files containing "function":', searchResults);

// Extract code definitions
const definitions = await codebolt.fs.listCodeDefinitionNames('./src');
console.log('Code definitions:', definitions);
```

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

### Configuration File Management
```js
// Create and manage configuration files
const config = {
    name: 'my-app',
    version: '1.0.0',
    settings: {
        debug: true,
        port: 3000
    }
};

// Write configuration to JSON file
await codebolt.fs.createFile(
    'config.json',
    JSON.stringify(config, null, 2),
    './config'
);

// Read and parse configuration
const configContent = await codebolt.fs.readFile('./config/config.json');
const parsedConfig = JSON.parse(configContent.content);
console.log('App name:', parsedConfig.name);
```

### Batch File Processing
```js
// Process multiple files efficiently
const files = [
    { name: 'file1.txt', content: 'Content 1' },
    { name: 'file2.txt', content: 'Content 2' },
    { name: 'file3.txt', content: 'Content 3' }
];

for (const file of files) {
    await codebolt.fs.createFile(file.name, file.content, './output');
    console.log(`✅ Created ${file.name}`);
}

// List all created files
const outputFiles = await codebolt.fs.listFile('./output');
console.log('Files created:', outputFiles);
```

### Content Migration Workflow
```js
// Move content between files
const oldContent = await codebolt.fs.readFile('./old/data.txt');
await codebolt.fs.createFile('new/data.txt', oldContent.content, './new');
await codebolt.fs.deleteFile('data.txt', './old');
```

## Module Integration Examples

### Integration with Git Module
```js
// Create files and commit to git
await codebolt.fs.createFile('README.md', '# My Project\n\nDescription', '.');
await codebolt.fs.createFile('.gitignore', 'node_modules/\n.env', '.');
await codebolt.git.addAll();
await codebolt.git.commit('Initial commit: Add README and gitignore');
```

### Integration with Terminal Module
```js
// Create script and execute it
await codebolt.fs.createFile('script.sh', '#!/bin/bash\necho "Hello from script"', '.');
await codebolt.terminal.executeCommand('chmod +x script.sh');
await codebolt.terminal.executeCommand('./script.sh');
```

### Integration with Browser Module
```js
// Scrape data and save to file
await codebolt.browser.newPage();
await codebolt.browser.goToPage('https://example.com');
const content = await codebolt.browser.getContent();
await codebolt.fs.createFile('scraped-data.txt', content.content, './data');
codebolt.browser.close();
```

## Advanced Usage Patterns

### Atomic File Operations
```js
// Perform multiple operations atomically
async function atomicFileUpdate(fileName, path, newContent) {
    try {
        // Create backup
        const currentContent = await codebolt.fs.readFile(`${path}/${fileName}`);
        await codebolt.fs.createFile(`${fileName}.backup`, currentContent.content, path);

        // Write new content
        await codebolt.fs.updateFile(fileName, path, newContent);

        console.log('✅ File updated successfully with backup');
        return true;
    } catch (error) {
        console.error('❌ Atomic update failed:', error);
        // Restore from backup if needed
        return false;
    }
}
```

### Recursive Directory Operations
```js
// Recursively process directory structure
async function processDirectoryRecursively(path, pattern = '*.*') {
    const results = await codebolt.fs.listFile(path, true);

    for (const item of results.files || []) {
        if (item.type === 'file') {
            console.log(`Processing file: ${item.name}`);
            // Process each file
            const content = await codebolt.fs.readFile(item.path);
            // Perform operations on content
        }
    }
}
```

### File Validation Before Operations
```js
// Validate file before performing operations
async function safeFileOperation(fileName, path, operation) {
    try {
        // Check if file exists
        const files = await codebolt.fs.listFile(path);
        const fileExists = files.files?.some(f => f.name === fileName);

        if (!fileExists && operation === 'read') {
            throw new Error(`File ${fileName} does not exist`);
        }

        // Perform operation
        return await operation();
    } catch (error) {
        console.error('File operation failed:', error.message);
        throw error;
    }
}
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

### Comprehensive Error Handling Example
```js
async function robustFileOperation() {
    const errors = [];
    const successes = [];

    const operations = [
        () => codebolt.fs.createFile('file1.txt', 'content1', '.'),
        () => codebolt.fs.createFile('file2.txt', 'content2', '.'),
        () => codebolt.fs.readFile('nonexistent.txt')
    ];

    for (const op of operations) {
        try {
            const result = await op();
            if (result.success) {
                successes.push(result);
            } else {
                errors.push(result.error || result.message);
            }
        } catch (error) {
            errors.push(error.message);
        }
    }

    console.log(`✅ Successful operations: ${successes.length}`);
    console.log(`❌ Failed operations: ${errors.length}`);

    return { successes, errors };
}
```

## Performance Considerations

### Optimizing File Operations
```js
// Batch file reads for better performance
async function batchReadFiles(fileList, path) {
    const promises = fileList.map(file =>
        codebolt.fs.readFile(`${path}/${file}`)
    );

    const results = await Promise.allSettled(promises);

    return results.map((result, index) => ({
        file: fileList[index],
        success: result.status === 'fulfilled',
        content: result.status === 'fulfilled' ? result.value.content : null
    }));
}

// Usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
const contents = await batchReadFiles(files, './data');
```

### Memory Management for Large Files
```js
// Process files in chunks to manage memory
async function processLargeFile(filePath, chunkSize = 1024) {
    const content = await codebolt.fs.readFile(filePath);
    const text = content.content;

    for (let i = 0; i < text.length; i += chunkSize) {
        const chunk = text.substring(i, i + chunkSize);
        // Process chunk
        console.log(`Processing chunk ${i / chunkSize + 1}`);
    }
}
```

## Common Pitfalls and Solutions

### Pitfall 1: Not Checking File Existence
```js
// ❌ Bad: Assumes file exists
const content = await codebolt.fs.readFile('./data.txt');

// ✅ Good: Check file existence first
const files = await codebolt.fs.listFile('.');
const exists = files.files?.some(f => f.name === 'data.txt');
if (exists) {
    const content = await codebolt.fs.readFile('./data.txt');
} else {
    console.log('File does not exist');
}
```

### Pitfall 2: Race Conditions in File Operations
```js
// ❌ Bad: Multiple operations without coordination
await codebolt.fs.createFile('data.txt', 'content1', '.');
await codebolt.fs.createFile('data.txt', 'content2', '.');

// ✅ Good: Use sequential operations with error handling
async function safeFileCreate(fileName, path, content) {
    try {
        const result = await codebolt.fs.createFile(fileName, content, path);
        if (result.success) {
            return result;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Failed to create file:', error);
        throw error;
    }
}
```

### Pitfall 3: Not Handling Large Files
```js
// ❌ Bad: Loads entire file into memory
const content = await codebolt.fs.readFile('./huge-file.txt');
const lines = content.content.split('\n');

// ✅ Good: Process in manageable chunks
async function processFileInChunks(filePath, processor, chunkSize = 1000) {
    const content = await codebolt.fs.readFile(filePath);
    const lines = content.content.split('\n');

    for (let i = 0; i < lines.length; i += chunkSize) {
        const chunk = lines.slice(i, i + chunkSize);
        await processor(chunk);
    }
}
```

### Pitfall 4: Ignoring Path Separators
```js
// ❌ Bad: Hardcoded path separators
await codebolt.fs.createFile('file.txt', 'content', 'src\\utils');

// ✅ Good: Use forward slashes (cross-platform compatible)
await codebolt.fs.createFile('file.txt', 'content', 'src/utils');
```

## Best Practices

### 1. Always Use Absolute or Consistent Relative Paths
```js
// Define a base path for consistency
const BASE_PATH = './my-project';

await codebolt.fs.createFile('data.txt', 'content', BASE_PATH);
await codebolt.fs.readFile(`${BASE_PATH}/data.txt`);
```

### 2. Implement Proper Error Handling
```js
async function safeFileOperation(operation) {
    try {
        const result = await operation();
        if (!result.success) {
            throw new Error(result.message || 'Operation failed');
        }
        return result;
    } catch (error) {
        console.error('Operation error:', error);
        throw error;
    }
}
```

### 3. Validate File Contents Before Processing
```js
async function processJsonFile(filePath) {
    const content = await codebolt.fs.readFile(filePath);

    try {
        JSON.parse(content.content);
        return content.content;
    } catch (error) {
        console.error('Invalid JSON in file:', filePath);
        throw error;
    }
}
```

### 4. Use Appropriate File Methods
```js
// Use updateFile when you have separate name and path
await codebolt.fs.updateFile('config.json', './config', newContent);

// Use writeToFile when you have a complete path
await codebolt.fs.writeToFile('./config/config.json', newContent);
```

### 5. Clean Up Resources
```js
async function processWithCleanup(files, path) {
    const tempFiles = [];

    try {
        // Process files
        for (const file of files) {
            await codebolt.fs.createFile(file.name, file.content, path);
            tempFiles.push(file.name);
        }

        // Perform operations

    } finally {
        // Clean up temporary files
        for (const file of tempFiles) {
            await codebolt.fs.deleteFile(file, path);
        }
    }
}
```

## Troubleshooting

### Common Issues and Solutions

**Issue**: File not found errors
- **Solution**: Always verify file existence before operations using `listFile()`

**Issue**: Permission denied errors
- **Solution**: Ensure you have write permissions for the target directory

**Issue**: Path resolution issues
- **Solution**: Use consistent path formats and avoid mixing relative/absolute paths

**Issue**: Memory issues with large files
- **Solution**: Process files in chunks or use streaming operations

**Issue**: Concurrent file access conflicts
- **Solution**: Implement file locking or sequential operations