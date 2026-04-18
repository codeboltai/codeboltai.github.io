---
name: getAppState
cbbaseinfo:
  description: "Retrieves the current application state.

Returns the full application state object containing the active
configuration, user preferences, and runtime status."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AppState>"
    description: A promise that resolves to the current AppState object
data:
  name: getAppState
  category: application
  link: getAppState.md
---
# getAppState

```typescript
client.application.getAppState(): Promise<AppState>
```

Retrieves the current application state.

Returns the full application state object containing the active
configuration, user preferences, and runtime status.

## Parameters

_None_

## Returns

**`Promise<AppState>`** — A promise that resolves to the current AppState object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getAppState();
```
