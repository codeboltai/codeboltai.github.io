---
name: updateFile
cbbaseinfo:
  description: 'Updates the content of a file at the specified path.'
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to update.
    - name: filePath
      typeName: string
      description: The path of the file to update.
    - name: newContent
      typeName: string
      description: The new content to write into the file.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: UpdateFileResponse
data:
  name: updateFile
  category: fs
  link: updateFile.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic File Update

```js
// Update a file with new content
const result = await codebolt.fs.updateFile(
    'example.txt', 
    '/home/user/documents', 
    'This is the updated content.'
);
console.log('File updated:', result);
```

### Update File in Current Directory

```js
// Update a file in the current working directory
const updateResult = await codebolt.fs.updateFile(
    'fs-test-file.txt',
    '.',
    'This is updated content for the test file'
);
console.log('✅ File updated:', updateResult);
```

### Complete File Workflow: Create, Read, Update, Read

```js
// 1. Create a file
await codebolt.fs.createFile(
    'workflow-test.txt', 
    'Original content', 
    '.'
);

// 2. Read the original content
const originalContent = await codebolt.fs.readFile('./workflow-test.txt');
console.log('Original content:', originalContent);

// 3. Update the file
const updateResult = await codebolt.fs.updateFile(
    'workflow-test.txt',
    '.',
    'Updated content - file has been modified'
);
console.log('Update result:', updateResult);

// 4. Read the updated content
const updatedContent = await codebolt.fs.readFile('./workflow-test.txt');
console.log('Updated content:', updatedContent);
```
