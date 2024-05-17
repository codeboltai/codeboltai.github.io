---
name: executeCommandRunUntilError
cbbaseinfo:
  description: >-
    Executes a given command and keeps running until an error occurs.

    Listens for messages from the WebSocket and resolves the promise when an
    error is encountered.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when an error occurs during command execution.
    typeArgs:
      - type: reference
        name: CommandError
data:
  name: executeCommandRunUntilError
  category: terminal
  link: executeCommandRunUntilError.md
---
<CBBaseInfo/> 
 <CBParameters/>