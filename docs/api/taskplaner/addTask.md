---
name: addTask
cbbaseinfo:
  description: Adds a task using a WebSocket message.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task to be added.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add task event.
---
<CBBaseInfo/> 
 <CBParameters/>