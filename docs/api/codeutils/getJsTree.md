---
name: getJsTree
cbbaseinfo:
  description: Retrieves a JavaScript tree structure for a given file path.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to retrieve the JS tree for.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the JS tree response.
    typeArgs:
      - type: reference
        name: GetJsTreeResponse
data:
  name: getJsTree
  category: codeutils
  link: getJsTree.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples 

```js 

const GetJsTree = await codebolt.codeutils.getJsTree();

```


### Explaination

The method codebolt.codeutils.getJsTree(filePath: string) is designed to analyze a JavaScript file located at the given file path and return its tree structure. This tree structure is a hierarchical representation of the code within the file, which typically includes various elements such as functions, variables, classes, etc.