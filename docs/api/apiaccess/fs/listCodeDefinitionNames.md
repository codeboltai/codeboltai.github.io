---
name: listCodeDefinitionNames
cbbaseinfo:
  description: 'Lists all code definition names in a given path.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search for code definitions.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of code definition names.
    typeArgs:
      - type: reference
        name: ListCodeDefinitionNamesResponse
data:
  name: listCodeDefinitionNames
  category: fs
  link: listCodeDefinitionNames.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Let's assume you want to list all code definition names in the /home/user/projects directory.

codebolt.fs.listCodeDefinitionNames('/home/user/projects');