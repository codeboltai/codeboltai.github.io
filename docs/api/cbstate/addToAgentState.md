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