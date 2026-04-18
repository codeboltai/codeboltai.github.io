---
title: getAgentState
---

# `getAgentState`

```typescript
plugin.cbstate.getAgentState(): Promise<GetAgentStateResponse>
```

Retrieves the current state of the agent from the server via WebSocket.

## Parameters

_No parameters._

## Returns

`Promise<GetAgentStateResponse>` — A promise that resolves with the agent's state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.cbstate.getAgentState();
console.log(result);
```
