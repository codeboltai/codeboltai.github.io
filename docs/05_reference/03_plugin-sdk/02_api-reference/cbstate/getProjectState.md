---
name: getProjectState
cbbaseinfo:
  description: Retrieves the current project state from the server via WebSocket.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetProjectStateResponse>"
    description: "A promise that resolves with the project's state."
data:
  name: getProjectState
  category: cbstate
  link: getProjectState.md
---
# getProjectState

```typescript
plugin.cbstate.getProjectState(): Promise<GetProjectStateResponse>
```

Retrieves the current project state from the server via WebSocket.

## Parameters

_None_

## Returns

**`Promise<GetProjectStateResponse>`** — A promise that resolves with the project's state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.cbstate.getProjectState();
```
