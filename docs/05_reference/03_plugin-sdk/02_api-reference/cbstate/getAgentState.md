---
name: getAgentState
cbbaseinfo:
  description: Retrieves the current state of the agent from the server via WebSocket.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetAgentStateResponse>"
    description: "A promise that resolves with the agent's state."
data:
  name: getAgentState
  category: cbstate
  link: getAgentState.md
---
# getAgentState

```typescript
plugin.cbstate.getAgentState(): Promise<GetAgentStateResponse>
```

Retrieves the current state of the agent from the server via WebSocket.

## Parameters

_None_

## Returns

**`Promise<GetAgentStateResponse>`** — A promise that resolves with the agent's state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.cbstate.getAgentState();
```
