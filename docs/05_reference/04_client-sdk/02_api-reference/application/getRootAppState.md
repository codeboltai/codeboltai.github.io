---
name: getRootAppState
cbbaseinfo:
  description: "Retrieves the root application state.

Returns the top-level state object that encompasses all workspace
and global application settings."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<RootAppState>"
    description: A promise that resolves to the RootAppState object
data:
  name: getRootAppState
  category: application
  link: getRootAppState.md
---
# getRootAppState

```typescript
client.application.getRootAppState(): Promise<RootAppState>
```

Retrieves the root application state.

Returns the top-level state object that encompasses all workspace
and global application settings.

## Parameters

_None_

## Returns

**`Promise<RootAppState>`** — A promise that resolves to the RootAppState object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getRootAppState();
```
