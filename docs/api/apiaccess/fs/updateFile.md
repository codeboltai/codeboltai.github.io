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

### Example 

```js
// Let's assume you want to update the content of a file named example.txt in the /home/user/documents directory.

codebolt.fs.updateFile('example.txt', '/home/user/documents', 'This is the updated content.');