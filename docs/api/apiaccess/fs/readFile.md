---
name: readFile
cbbaseinfo:
  description: 'Reads the content of a file from the specified path.'
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to read.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: ReadFileResponse
data:
  name: readFile
  category: fs
  link: readFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Let's assume you want to read the content of a file named example.txt in the /home/user/documents directory.

codebolt.fs.readFile('/home/user/documents/example.txt');