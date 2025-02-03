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

### Example 

```js
// Let's assume you want to delete a folder named "exampleFolder" in the /home/user/documents directory.

codebolt.fs.deleteFolder('exampleFolder', '/home/user/documents');