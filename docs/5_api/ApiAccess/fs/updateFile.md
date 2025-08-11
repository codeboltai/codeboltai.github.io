---
name: updateFile
cbbaseinfo:
  description: Updates the content of a file at the specified path. This function allows you to modify existing files with new content.
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to update (e.g., 'example.txt', 'config.json').
    - name: filePath
      typeName: string
      description: The path of the file to update (e.g., '.', '/home/user/documents', './src').
    - name: newContent
      typeName: string
      description: The new content to write into the file, replacing the existing content.
  returns:
    signatureTypeName: Promise<UpdateFileResponse>
    description: A promise that resolves with an `UpdateFileResponse` object containing the response type and file update metadata.
data:
  name: updateFile
  category: fs
  link: updateFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `UpdateFileResponse` object with the following properties:

- **`type`** (string): Always "updateFileResponse".
- **`path`** (string, optional): The full path of the file that was updated.
- **`bytesWritten`** (number, optional): The number of bytes written to the file.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Update a file with new content
const result = await codebolt.fs.updateFile(
    'example.txt', 
    '/home/user/documents', 
    'This is the updated content.'
);
console.log("Response type:", result.type); // "updateFileResponse"
console.log("File path:", result.path); // "/home/user/documents/example.txt"
console.log("Bytes written:", result.bytesWritten); // Number of bytes
console.log("Success:", result.success); // true (if successful)

// Example 2: Update a configuration file
const configContent = JSON.stringify({
    name: "my-app",
    version: "2.0.0",
    description: "Updated application configuration",
    main: "index.js"
}, null, 2);

const configResult = await codebolt.fs.updateFile(
    'package.json',
    '.',
    configContent
);
console.log("Config updated:", configResult.success);
console.log("Bytes written:", configResult.bytesWritten);

// Example 3: Update source code file
const codeContent = `
// Updated JavaScript code
class UpdatedClass {
    constructor(name) {
        this.name = name;
        this.version = "2.0";
    }
    
    getInfo() {
        return \`\${this.name} v\${this.version}\`;
    }
}

module.exports = UpdatedClass;
`;

const codeResult = await codebolt.fs.updateFile(
    'MyClass.js',
    './src',
    codeContent
);
console.log("Code file updated:", codeResult.path);

// Example 4: Complete file workflow
try {
    // 1. Create a file
    await codebolt.fs.createFile(
        'workflow-test.txt', 
        'Original content', 
        '.'
    );
    
    // 2. Read the original content
    const originalContent = await codebolt.fs.readFile('./workflow-test.txt');
    console.log('Original content:', originalContent.content);
    
    // 3. Update the file
    const updateResult = await codebolt.fs.updateFile(
        'workflow-test.txt',
        '.',
        'Updated content - file has been modified'
    );
    
    if (updateResult.success) {
        console.log('✅ File updated successfully');
        console.log('Bytes written:', updateResult.bytesWritten);
        
        // 4. Read the updated content
        const updatedContent = await codebolt.fs.readFile('./workflow-test.txt');
        console.log('Updated content:', updatedContent.content);
    }
} catch (error) {
    console.error('Error in file workflow:', error);
}

// Example 5: Update multiple files
const filesToUpdate = [
    { name: 'version.txt', path: '.', content: 'v2.0.0' },
    { name: 'status.txt', path: '.', content: 'Updated' },
    { name: 'info.txt', path: '.', content: 'File updated on ' + new Date().toISOString() }
];

for (const file of filesToUpdate) {
    const result = await codebolt.fs.updateFile(file.name, file.path, file.content);
    console.log(`${file.name}: ${result.success ? 'updated' : 'failed'} (${result.bytesWritten} bytes)`);
}

// Example 6: Error handling
try {
    const fileResult = await codebolt.fs.updateFile(
        'non-existent-file.txt',
        '.',
        'This will fail'
    );
    
    if (fileResult.success) {
        console.log('✅ File updated successfully');
        console.log('File path:', fileResult.path);
        console.log('Bytes written:', fileResult.bytesWritten);
    } else {
        console.error('❌ File update failed:', fileResult.error);
    }
} catch (error) {
    console.error('Error updating file:', error);
}
```

### Common Use Cases

- **Configuration Updates**: Update config files, environment files, and settings
- **Code Modifications**: Update source code files with new implementations
- **Data Updates**: Update JSON, XML, CSV, and other data files
- **Documentation**: Update README files, documentation, and guides
- **Version Control**: Update version files and changelogs

### Notes

- The function replaces the entire content of the file with the new content.
- If the file doesn't exist, the operation will fail (use `createFile` to create new files).
- The `bytesWritten` property indicates how much data was written to the file.
- The `path` property confirms which file was updated.
- Use error handling to gracefully handle cases where files don't exist or are read-only.
- This operation is atomic - either the entire content is updated or the operation fails.
- Large content updates may take longer to complete.
- Always backup important files before updating them programmatically.
