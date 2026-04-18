---
title: getApplicationState
---

# `getApplicationState`

```typescript
plugin.cbstate.getApplicationState(): Promise<ApplicationState>
```

Retrieves the current application state from the server via WebSocket.

## Parameters

_No parameters._

## Returns

`Promise<ApplicationState>` — A promise that resolves with the application state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.cbstate.getApplicationState();
console.log(result);
```
