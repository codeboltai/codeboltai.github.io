---
name: stopProcess
cbbaseinfo:
  description: |-
    Stops the ongoing process.
    Sends a specific message to the server to stop the process.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: stopProcess
  category: chat
  link: stopProcess.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Examples

```js

// Notify the server that a process has started
await codebolt.chat.processStarted();

// Execute our functionality after perform all the operation than stop the chat Process

// Call the function to start and stop the process
await codebolt.chat.startAndStopProcess();

```


### Explanation
The codebolt.chat.stopProcess() function is used to halt an ongoing process within a Codebolt chat. When this function is called, it stops the current process in the Codebolt chat.