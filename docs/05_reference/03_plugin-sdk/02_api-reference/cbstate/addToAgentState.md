---
name: addToAgentState
cbbaseinfo:
  description: "Adds a key-value pair to the agent's state on the server via WebSocket."
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: "The key to add to the agent's state."
      isOptional: false
    - name: value
      typeName: string
      description: The value associated with the key.
      isOptional: false
  returns:
    signatureTypeName: "Promise<AddToAgentStateResponse>"
    description: A promise that resolves with the response to the addition request.
data:
  name: addToAgentState
  category: cbstate
  link: addToAgentState.md
---
# addToAgentState

```typescript
plugin.cbstate.addToAgentState(key: string, value: string): Promise<AddToAgentStateResponse>
```

Adds a key-value pair to the agent's state on the server via WebSocket.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key to add to the agent's state. |
| `value` | `string` | The value associated with the key. |

## Returns

**`Promise<AddToAgentStateResponse>`** — A promise that resolves with the response to the addition request.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.cbstate.addToAgentState('key', 'value');
```
