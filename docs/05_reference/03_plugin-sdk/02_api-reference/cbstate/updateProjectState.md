---
title: updateProjectState
---

# `updateProjectState`

```typescript
plugin.cbstate.updateProjectState(key: string, value: any): Promise<UpdateProjectStateResponse>
```

Updates the project state on the server via WebSocket.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key to update in the project state. |
| `value` | `any` | Yes | The value to set for the key. |

## Returns

`Promise<UpdateProjectStateResponse>` — A promise that resolves with the response to the update request.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.cbstate.updateProjectState('key', /* any */);
console.log(result);
```
