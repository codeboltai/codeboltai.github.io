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
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
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

### Example 

```js
// Let's assume you want to create a file named example.txt in the /home/user/documents directory with some content.

codebolt.fs.createFile('example.txt', 'This is the content of the file.', '/home/user/documents');