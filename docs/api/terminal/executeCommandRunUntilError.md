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


### Example 

```js 

codebolt.terminal.executeCommandRunUntilError("npm i nodemon")

```

### Explaination 

The codebolt.terminal.executeCommandRunUntilError function takes a single parameter, command, which is a string representing the command you want to execute in the terminal. The function runs the specified command repeatedly until an error occurs.

command (string): The command to be executed in the terminal.