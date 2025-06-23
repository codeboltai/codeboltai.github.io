---
name: deleteFolder
cbbaseinfo:
  description: 'Deletes a folder at the specified path.'
cbparameters:
  parameters:
    - name: foldername
      typeName: string
      description: The name of the folder to delete.
    - name: folderpath
      typeName: string
      description: The path of the folder to delete.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: DeleteFolderResponse
data:
  name: deleteFolder
  category: fs
  link: deleteFolder.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic Folder Deletion

```js
// Delete a folder from a specific directory
const result = await codebolt.fs.deleteFolder('exampleFolder', '/home/user/documents');
console.log('Folder deleted:', result);
```

### Delete Folder from Current Directory

```js
// Delete a folder from the current working directory
const deleteFolderResult = await codebolt.fs.deleteFolder('test-folder', '.');
console.log('✅ Folder deleted:', deleteFolderResult);
```
