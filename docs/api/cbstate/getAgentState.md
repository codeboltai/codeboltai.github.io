---
name: getAgentState
cbbaseinfo:
  description: Retrieves the current state of the agent from the server via WebSocket.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the agent's state.
    typeArgs:
      - type: reference
        name: GetAgentStateResponse
data:
  name: getAgentState
  category: cbstate
  link: getAgentState.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Examples: 

```js

// Retrieve the current state of the agent
const agentState = await codebolt.cbstate.getAgentState();

// Access specific state information
const userID = agentState.userID;
const configSetting = agentState.configSetting;

// Log the retrieved state information
console.log(`User ID: ${userID}`);
console.log(`Configuration Setting: ${configSetting}`);

```

### Explanation

The codebolt.cbstate.getAgentState() function is used to retrieve the current state of the agent. If we are currently set in the agent's state, then we can access this value using getAgentState()