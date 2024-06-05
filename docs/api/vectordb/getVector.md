---
name: getVector
cbbaseinfo:
  description: Retrieves a vector from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the retrieved vector.
    typeArgs:
      - type: reference
        name: GetVectorResponse
data:
  name: getVector
  category: vectordb
  link: getVector.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Working Progress...