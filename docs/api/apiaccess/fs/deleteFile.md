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

### Example 

```js
// Let's assume you want to delete a file named example.txt in the /home/user/documents directory.

codebolt.fs.deleteFile('example.txt', '/home/user/documents');