---
name: list
cbbaseinfo:
  description: "Lists all available workspaces for the current user.

Returns every workspace the user has access to, including their
personal workspaces and any shared workspaces. Useful for workspace
browsing and selection UIs."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Workspace[]>"
    description: A promise that resolves to an array of Workspace objects
data:
  name: list
  category: workspace
  link: list.md
---
# list

```typescript
client.workspace.list(): Promise<Workspace[]>
```

Lists all available workspaces for the current user.

Returns every workspace the user has access to, including their
personal workspaces and any shared workspaces. Useful for workspace
browsing and selection UIs.

## Parameters

_None_

## Returns

**`Promise<Workspace[]>`** — A promise that resolves to an array of Workspace objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.workspace.list();
```
