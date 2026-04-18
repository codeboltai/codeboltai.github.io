---
title: addToAgentState
---

# `addToAgentState`

```typescript
plugin.cbstate.addToAgentState(key: string, value: string): Promise<AddToAgentStateResponse>
```

Adds a key-value pair to the agent's state on the server via WebSocket.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key to add to the agent's state. |
| `value` | `string` | Yes | The value associated with the key. |

## Returns

`Promise<AddToAgentStateResponse>` — A promise that resolves with the response to the addition request.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.cbstate.addToAgentState('key', 'value');
console.log(result);
```
