---
title: getProjectState
---

# `getProjectState`

```typescript
plugin.cbstate.getProjectState(): Promise<GetProjectStateResponse>
```

Retrieves the current project state from the server via WebSocket.

## Parameters

_No parameters._

## Returns

`Promise<GetProjectStateResponse>` — A promise that resolves with the project's state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.cbstate.getProjectState();
console.log(result);
```
