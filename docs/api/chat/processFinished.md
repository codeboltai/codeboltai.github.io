---
name: processFinished
cbbaseinfo:
  description: Notifies the server that a process has finished.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: processFinished
  category: chat
  link: processFinished.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// When your process is complete, notify the server
codebolt.chat.processFinished();
```

### Explanation

The `processFinished` function sends a message to the server indicating that the current process has completed. This is useful for updating the UI state and notifying the server that resources associated with the process can be released. 