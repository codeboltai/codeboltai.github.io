---
name: listCodeDefinitionNames
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to update.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: listCodeDefinitionNamesResponse
data:
  name: listCodeDefinitionNames
  category: fs
  link: listCodeDefinitionNames.md
---
<CBBaseInfo/> 
 <CBParameters/>



### Example 
```js


 let { success, result } = await codebolt.fs.listCodeDefinitionNames(path);

```

### Explaination

The codebolt.fs.listCodeDefinitionNames method extract meaningful code definitions from a path source files
returns success and result. as output.