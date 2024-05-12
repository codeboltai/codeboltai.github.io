---
name: executeCommandRunUntilError
cbbaseinfo:
  description: "Executes a given command and keeps running until an error occurs.\r\nListens for messages from the WebSocket and resolves the promise when an error is encountered."
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when an error occurs during command execution.
---
<CBBaseInfo/> 
 <CBParameters/>