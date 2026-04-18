---
name: updateProjectState
cbbaseinfo:
  description: Updates the project state on the server via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key to update in the project state.
      isOptional: false
    - name: value
      typeName: any
      description: The value to set for the key.
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateProjectStateResponse>"
    description: A promise that resolves with the response to the update request.
data:
  name: updateProjectState
  category: cbstate
  link: updateProjectState.md
---
# updateProjectState

```typescript
plugin.cbstate.updateProjectState(key: string, value: any): Promise<UpdateProjectStateResponse>
```

Updates the project state on the server via WebSocket.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key to update in the project state. |
| `value` | `any` | The value to set for the key. |

## Returns

**`Promise<UpdateProjectStateResponse>`** — A promise that resolves with the response to the update request.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.cbstate.updateProjectState('key', /* any */);
```
