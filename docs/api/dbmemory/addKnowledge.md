---
name: addKnowledge
cbbaseinfo:
  description: Adds a key-value pair to the in-memory database.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key under which to store the value.
    - name: value
      typeName: any
      description: The value to be stored.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the memory set event.
---
<CBBaseInfo/> 
 <CBParameters/>