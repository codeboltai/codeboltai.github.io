---
name: search
cbbaseinfo:
  description: Performs a search operation for the given query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
    typeArgs:
      - type: intrinsic
        name: string
---
<CBBaseInfo/> 
 <CBParameters/>