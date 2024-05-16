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
---
<CBBaseInfo/> 
 <CBParameters/>