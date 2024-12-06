---
name: writeToFile
cbbaseinfo:
  description: 'Creates or updates a file and writes data to it.'
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path where the file should be created or updated.
    - name: content
      typeName: string
      description: The content to write into the file.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
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


 let { success, result } = await codebolt.fs.readFile(toolInput.path);

```

### Explaination

The codebolt.fs.writeToFile method is used to create a new file or update in a specified pah, with content provided as a string. 

returns success and result. as output.