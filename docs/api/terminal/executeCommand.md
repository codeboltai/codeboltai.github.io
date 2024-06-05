---
name: executeCommand
cbbaseinfo:
  description: >-
    Executes a given command and returns the result.

    Listens for messages from the WebSocket that indicate the output, error, or
    finish state

    of the executed command and resolves the promise accordingly.
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
    typeArgs:
      - type: ' '
        name: ' '
data:
  name: executeCommand
  category: terminal
  link: executeCommand.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples
 
```js 

// The codebolt.terminal.executeCommand function is likely used to execute a command in the terminal and retrieve the result.

const cmd = await codebolt.terminal.executeCommand("npm i nodemon");

```


### Explaination 

The codebolt.terminal.executeCommand function takes a single parameter, which is the command you want to execute in the terminal. It returns the result of the command execution. It has one parameter.

command (string): The command to be executed in the terminal. In this case, the command is "npm i nodemon", which installs the nodemon package using npm.