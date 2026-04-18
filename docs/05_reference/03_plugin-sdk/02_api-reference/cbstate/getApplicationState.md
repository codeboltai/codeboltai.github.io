---
name: getApplicationState
cbbaseinfo:
  description: Retrieves the current application state from the server via WebSocket.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ApplicationState>"
    description: A promise that resolves with the application state.
data:
  name: getApplicationState
  category: cbstate
  link: getApplicationState.md
---
# getApplicationState

```typescript
plugin.cbstate.getApplicationState(): Promise<ApplicationState>
```

Retrieves the current application state from the server via WebSocket.

## Parameters

_None_

## Returns

**`Promise<ApplicationState>`** — A promise that resolves with the application state.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.cbstate.getApplicationState();
```
