---
name: queryVectorItem
cbbaseinfo:
  description: Queries a vector item from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to query the item from.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the queried vector item.
    typeArgs:
      - type: intrinsic
        name: any
---
<CBBaseInfo/> 
 <CBParameters/>