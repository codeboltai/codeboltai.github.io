---
name: listFile
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: folderPath
      typeName: string
      description: ''
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: listFile
  category: fs
  link: listFile.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 
```js


 let { success, result } = await codebolt.fs.listFile(path);

```

### Explaination

The listFiles function is designed to list files in a specified directory, with options for recursive listing and ignoring certain directories. Here's a summary of its functionality:
