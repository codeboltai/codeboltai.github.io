---
name: createFolder
cbbaseinfo:
  description: 'Creates a new folder at the specified path.'
cbparameters:
  parameters:
    - name: folderName
      typeName: string
      description: The name of the folder to create.
    - name: folderPath
      typeName: string
      description: The path where the folder should be created.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: CreateFolderResponse
data:
  name: createFolder
  category: fs
  link: createFolder.md
---
<CBBaseInfo/> 
<CBParameters/>

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