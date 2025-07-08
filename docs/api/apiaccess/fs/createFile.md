---
name: createFile
cbbaseinfo:
  description: Creates a new file with the specified content at the given path. This function allows you to create files in any directory with custom content.
cbparameters:
  parameters:
    - name: fileName
      typeName: string
      description: The name of the file to create (e.g., 'example.txt', 'script.js').
    - name: source
      typeName: string
      description: The source content to write into the file. Can be any text content including code, data, or plain text.
    - name: filePath
      typeName: string
      description: The path where the file should be created (e.g., '.', '/home/user/documents', 'src/components').
  returns:
    signatureTypeName: Promise<CreateFileResponse>
    description: A promise that resolves with a `CreateFileResponse` object containing the response type and file creation metadata.
data:
  name: createFile
  category: fs
  link: createFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `CreateFileResponse` object with the following properties:

- **`type`** (string): Always "createFileResponse".
- **`path`** (string, optional): The full path where the file was created.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Create a simple text file
const result = await codebolt.fs.createFile(
    'example.txt', 
    'This is the content of the file.', 
    '/home/user/documents'
);
console.log("Response type:", result.type); // "createFileResponse"
console.log("File path:", result.path); // "/home/user/documents/example.txt"
console.log("Success:", result.success); // true (if successful)

// Example 2: Create a JavaScript file with code content
const jsCodeContent = `
class TestClass {
    constructor(name) {
        this.name = name;
    }
    
    testMethod() {
        return 'Hello from ' + this.name;
    }
}

function testFunction(param1, param2) {
    return param1 + param2;
}

module.exports = { TestClass, testFunction };
`;

const jsResult = await codebolt.fs.createFile(
    'test-code.js', 
    jsCodeContent, 
    './src'
);
console.log("JavaScript file created:", jsResult.success);

// Example 3: Create a configuration file
const configContent = JSON.stringify({
    name: "my-app",
    version: "1.0.0",
    description: "A sample application",
    scripts: {
        start: "node index.js",
        test: "jest"
    }
}, null, 2);

const configResult = await codebolt.fs.createFile(
    'package.json',
    configContent,
    '.'
);
console.log("Config file created:", configResult.path);

// Example 4: Error handling
try {
    const fileResult = await codebolt.fs.createFile(
        'test-file.txt', 
        'This is a test file created by CodeboltJS', 
        './output'
    );
    
    if (fileResult.success) {
        console.log('✅ File created successfully');
        console.log('File path:', fileResult.path);
        console.log('Message:', fileResult.message);
    } else {
        console.error('❌ File creation failed:', fileResult.error);
    }
} catch (error) {
    console.error('Error creating file:', error);
}

// Example 5: Create multiple files
const filesToCreate = [
    { name: 'index.html', content: '<!DOCTYPE html><html><head><title>My App</title></head><body><h1>Hello World</h1></body></html>', path: './public' },
    { name: 'style.css', content: 'body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }', path: './public' },
    { name: 'script.js', content: 'console.log("Hello from script!");', path: './public' }
];

for (const file of filesToCreate) {
    const result = await codebolt.fs.createFile(file.name, file.content, file.path);
    console.log(`${file.name}: ${result.success ? 'created' : 'failed'}`);
}
```

### Common Use Cases

- **Project Setup**: Create initial project files and configurations
- **Code Generation**: Generate source code files programmatically
- **Documentation**: Create README files, documentation, and guides
- **Configuration**: Create config files, environment files, and settings
- **Testing**: Create test files and mock data files

### Notes

- The function creates a new file with the specified content at the given path.
- If a file with the same name already exists, it may be overwritten (behavior depends on system settings).
- The `filePath` parameter should be a valid directory path where you have write permissions.
- Use relative paths (like '.') for the current directory or absolute paths for specific locations.
- The response includes the full path where the file was created for verification.
- If the operation fails, check the `error` property for details about what went wrong.
- This function is useful for programmatically generating files during development workflows.

```js
// Let's assume you want to create a file named example.txt in the /home/user/documents directory with some content.

codebolt.fs.createFile('example.txt', 'This is the content of the file.', '/home/user/documents');