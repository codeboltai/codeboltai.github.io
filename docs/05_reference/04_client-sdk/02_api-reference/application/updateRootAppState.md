---
name: updateRootAppState
cbbaseinfo:
  description: "Updates the root application state.

Applies changes to the top-level application state, affecting
global settings across all workspaces."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateRootAppStateRequest
      description: The root state update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the state has been updated
data:
  name: updateRootAppState
  category: application
  link: updateRootAppState.md
---
# updateRootAppState

```typescript
client.application.updateRootAppState(data: UpdateRootAppStateRequest): Promise<void>
```

Updates the root application state.

Applies changes to the top-level application state, affecting
global settings across all workspaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateRootAppStateRequest` | The root state update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the state has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.updateRootAppState(/* UpdateRootAppStateRequest */);
```
