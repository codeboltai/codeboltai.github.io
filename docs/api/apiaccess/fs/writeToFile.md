---
name: writeToFile
cbbaseinfo:
  description: 'Writes content to a file at the specified path.'
cbparameters:
  parameters:
    - name: relPath
      typeName: string
      description: The relative path of the file to write to.
    - name: newContent
      typeName: string
      description: The new content to write into the file.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the write operation result.
    typeArgs:
      - type: reference
        name: WriteToFileResponse
data:
  name: writeToFile
  category: fs
  link: writeToFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Let's assume you want to write content to a file named example.txt in the /home/user/documents directory.

codebolt.fs.writeToFile('/home/user/documents/example.txt', 'This is the new content.');