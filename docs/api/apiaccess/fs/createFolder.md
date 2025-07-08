---
name: createFolder
cbbaseinfo:
  description: Creates a new folder at the specified path. This function allows you to create directories for organizing files and project structure.
cbparameters:
  parameters:
    - name: folderName
      typeName: string
      description: The name of the folder to create (e.g., 'my-folder', 'src', 'components').
    - name: folderPath
      typeName: string
      description: The path where the folder should be created (e.g., '.', '/home/user/documents', './src').
  returns:
    signatureTypeName: Promise<CreateFolderResponse>
    description: A promise that resolves with a `CreateFolderResponse` object containing the response type and folder creation metadata.
data:
  name: createFolder
  category: fs
  link: createFolder.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `CreateFolderResponse` object with the following properties:

- **`type`** (string): Always "createFolderResponse".
- **`path`** (string, optional): The full path where the folder was created.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Create a folder in a specific directory
const result = await codebolt.fs.createFolder('exampleFolder', '/home/user/documents');
console.log("Response type:", result.type); // "createFolderResponse"
console.log("Folder path:", result.path); // "/home/user/documents/exampleFolder"
console.log("Success:", result.success); // true (if successful)

// Example 2: Create a folder in current directory
const folderResult = await codebolt.fs.createFolder('test-folder', '.');
console.log("✅ Folder created:", folderResult.success);

// Example 3: Create project structure
const projectResult = await codebolt.fs.createFolder('my-project', '.');
if (projectResult.success) {
    const srcResult = await codebolt.fs.createFolder('src', './my-project');
    const docsResult = await codebolt.fs.createFolder('docs', './my-project');
    const testsResult = await codebolt.fs.createFolder('tests', './my-project');
    
    console.log("Project structure created:");
    console.log("- my-project/");
    console.log("  - src/");
    console.log("  - docs/");
    console.log("  - tests/");
}

// Example 4: Create multiple folders
const folders = [
    { name: 'assets', path: './public' },
    { name: 'components', path: './src' },
    { name: 'utils', path: './src' },
    { name: 'config', path: '.' }
];

for (const folder of folders) {
    const result = await codebolt.fs.createFolder(folder.name, folder.path);
    console.log(`${folder.name}: ${result.success ? 'created' : 'failed'}`);
}

// Example 5: Error handling
try {
    const folderResult = await codebolt.fs.createFolder('new-folder', './output');
    
    if (folderResult.success) {
        console.log('✅ Folder created successfully');
        console.log('Folder path:', folderResult.path);
        console.log('Message:', folderResult.message);
    } else {
        console.error('❌ Folder creation failed:', folderResult.error);
    }
} catch (error) {
    console.error('Error creating folder:', error);
}

// Example 6: Create nested folder structure
const nestedFolders = [
    { name: 'frontend', path: '.' },
    { name: 'src', path: './frontend' },
    { name: 'components', path: './frontend/src' },
    { name: 'pages', path: './frontend/src' },
    { name: 'styles', path: './frontend/src' }
];

for (const folder of nestedFolders) {
    const result = await codebolt.fs.createFolder(folder.name, folder.path);
    if (result.success) {
        console.log(`✅ Created: ${result.path}`);
    }
}
```

### Common Use Cases

- **Project Setup**: Create initial project directory structure
- **Organization**: Create folders for different types of files (assets, components, utils)
- **Build Output**: Create output directories for compiled files
- **Documentation**: Create folders for documentation and guides
- **Testing**: Create test directories and organize test files

### Notes

- The function creates a new folder with the specified name at the given path.
- If a folder with the same name already exists, the operation may fail (behavior depends on system settings).
- The `folderPath` parameter should be a valid directory path where you have write permissions.
- Use relative paths (like '.') for the current directory or absolute paths for specific locations.
- The response includes the full path where the folder was created for verification.
- If the operation fails, check the `error` property for details about what went wrong.
- This function is useful for creating organized project structures and directory hierarchies.
- Parent directories must exist before creating subdirectories.

## Examples

### Basic Folder Creation

```js
// Create a folder in a specific directory
const result = await codebolt.fs.createFolder('exampleFolder', '/home/user/documents');
console.log('Folder created:', result);
```

### Create Folder in Current Directory

```js
// Create a folder in the current working directory
const folderResult = await codebolt.fs.createFolder('test-folder', '.');
console.log('✅ Folder created:', folderResult);
```

### Complete Workflow with File Operations

```js
// Create a project structure
await codebolt.fs.createFolder('my-project', '.');
await codebolt.fs.createFolder('src', './my-project');

// Create files in the folders
await codebolt.fs.createFile('index.js', 'console.log("Hello World");', './my-project/src');

// List the created structure
const projectFiles = await codebolt.fs.listFile('./my-project', true);
console.log('Project structure:', projectFiles);
```

### Create Multiple Folders

```js
// Create multiple folders for different purposes
const folders = ['assets', 'components', 'utils', 'config'];

for (const folder of folders) {
    try {
        const result = await codebolt.fs.createFolder(folder, '.');
        console.log(`✅ Created folder: ${folder}`, result);
    } catch (error) {
        console.error(`❌ Failed to create folder ${folder}:`, error.message);
    }
}
```

### Error Handling

```js
try {
    const result = await codebolt.fs.createFolder('test-folder', '.');
    
    if (result.success) {
        console.log('✅ Folder created successfully');
    } else {
        console.log('❌ Folder creation failed:', result.message);
    }
} catch (error) {
    console.error('Error creating folder:', error.message);
}
```

```js
// Let's assume you want to create a folder named "exampleFolder" in the /home/user/documents directory.

codebolt.fs.createFolder('exampleFolder', '/home/user/documents');