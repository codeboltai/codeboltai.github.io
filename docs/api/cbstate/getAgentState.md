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