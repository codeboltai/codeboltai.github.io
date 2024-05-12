---
name: getKnowledge
cbbaseinfo:
  description: Retrieves a value from the in-memory database by key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the value to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the memory get event.
---
<CBBaseInfo/> 
 <CBParameters/>