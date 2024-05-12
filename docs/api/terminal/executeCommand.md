---
name: executeCommand
cbbaseinfo:
  description: "Executes a given command and returns the result.\r\nListens for messages from the WebSocket that indicate the output, error, or finish state\r\nof the executed command and resolves the promise accordingly."
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
  returns:
    signatureTypeName: Promise
    description: >-
      A promise that resolves with the command's output, error, or finish
      signal.
---
<CBBaseInfo/> 
 <CBParameters/>