---
name: deleteFile
cbbaseinfo:
  description: 'Deletes a file at the specified path.'
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to delete.
    - name: filePath
      typeName: string
      description: The path of the file to delete.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: DeleteFileResponse
data:
  name: deleteFile
  category: fs
  link: deleteFile.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic File Deletion

```js
// Delete a file from a specific directory
const result = await codebolt.fs.deleteFile('example.txt', '/home/user/documents');
console.log('File deleted:', result);
```

### Delete File from Current Directory

```js
// Delete a file from the current working directory
const deleteResult = await codebolt.fs.deleteFile('fs-test-file.txt', '.');
console.log('✅ File deleted:', deleteResult);
```
