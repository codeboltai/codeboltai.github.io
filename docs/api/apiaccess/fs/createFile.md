---
name: createFile
cbbaseinfo:
  description: 'Creates a new file with the specified content at the given path.'
cbparameters:
  parameters:
    - name: fileName
      typeName: string
      description: The name of the file to create.
    - name: source
      typeName: string
      description: The source content to write into the file.
    - name: filePath
      typeName: string
      description: The path where the file should be created.
  returns:
    signatureTypeName: Promise<CreateFileResponse>
    description: A promise that resolves with file creation details.
    typeArgs:
      - type: reference
        name: CreateFileResponse
data:
  name: createFile
  category: fs
  link: createFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `CreateFileResponse` object with the following properties:

**Response Properties:**
- `type`: Always "createFileResponse"
- `path`: Optional string containing the file path
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

## Examples

### Basic File Creation

```js
// Create a simple text file
const result = await codebolt.fs.createFile(
    'example.txt', 
    'This is the content of the file.', 
    '/home/user/documents'
);
console.log('File created:', result);
```

### Creating Files with Complex Content

```js
// Create a JavaScript file with code content
const jsCodeContent = `
// Sample JavaScript file with various code definitions
class TestClass {
    constructor(name) {
        this.name = name;
    }
    
    testMethod() {
        return 'Hello from ' + this.name;
    }
    
    static staticMethod() {
        return 'Static method called';
    }
}

function testFunction(param1, param2) {
    return param1 + param2;
}

const arrowFunction = (x, y) => x * y;

module.exports = { TestClass, testFunction, arrowFunction };
`;

const createResult = await codebolt.fs.createFile(
    'test-code-definitions.js', 
    jsCodeContent, 
    '.'
);
console.log('JavaScript file created:', createResult);
```

### Error Handling

```js
try {
    const result = await codebolt.fs.createFile(
        'test-file.txt', 
        'This is a test file created by CodeboltJS', 
        '.'
    );
    
    if (result.success) {
        console.log('✅ File created successfully:', result.fileName);
        console.log('Message:', result.message);
    } else {
        console.log('❌ File creation failed:', result.message);
    }
} catch (error) {
    console.error('Error creating file:', error.message);
}
```

### Creating Files in Current Directory

```js
// Create a file in the current working directory
const result = await codebolt.fs.createFile(
    'fs-test-file.txt', 
    'This is a test file created by CodeboltJS FS test', 
    '.'
);
console.log('File created in current directory:', result);
```

```js
// Let's assume you want to create a file named example.txt in the /home/user/documents directory with some content.

codebolt.fs.createFile('example.txt', 'This is the content of the file.', '/home/user/documents');