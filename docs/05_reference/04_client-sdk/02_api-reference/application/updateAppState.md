---
name: updateAppState
cbbaseinfo:
  description: "Updates the application state.

Applies changes to the application state, persisting the updated
configuration across sessions."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateAppStateRequest
      description: The state update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the state has been updated
data:
  name: updateAppState
  category: application
  link: updateAppState.md
---
# updateAppState

```typescript
client.application.updateAppState(data: UpdateAppStateRequest): Promise<void>
```

Updates the application state.

Applies changes to the application state, persisting the updated
configuration across sessions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateAppStateRequest` | The state update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the state has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.updateAppState(/* UpdateAppStateRequest */);
```
