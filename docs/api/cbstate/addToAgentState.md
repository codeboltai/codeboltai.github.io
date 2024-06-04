---
name: addToAgentState
cbbaseinfo:
  description: Adds a key-value pair to the agent's state on the server via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key to add to the agent's state.
    - name: value
      typeName: string
      description: The value associated with the key.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response to the addition request.
    typeArgs:
      - type: reference
        name: AddToAgentStateResponse
data:
  name: addToAgentState
  category: cbstate
  link: addToAgentState.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples: 
```js
// Add a user ID to the agent's state
await codebolt.cbstate.addToAgentState("userID", "12345");

// Add a configuration setting to the agent's state
await codebolt.cbstate.addToAgentState("configSetting", "darkModeEnabled");

```

### Explanation
The codebolt.cbstate.addToAgentState(key: string, value: string) function is used to set key-value pair to the current agent's state. This function allows you to store state information.



