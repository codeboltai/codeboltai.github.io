---
name: listProjects
cbbaseinfo:
  description: "Lists all projects in the current workspace.

Returns an array of workspace projects with their metadata and status.
Use this to display available projects or navigate between them."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<WorkspaceProject[]>"
    description: A promise that resolves to an array of WorkspaceProject objects
data:
  name: listProjects
  category: workspace
  link: listProjects.md
---
# listProjects

```typescript
client.workspace.listProjects(): Promise<WorkspaceProject[]>
```

Lists all projects in the current workspace.

Returns an array of workspace projects with their metadata and status.
Use this to display available projects or navigate between them.

## Parameters

_None_

## Returns

**`Promise<WorkspaceProject[]>`** — A promise that resolves to an array of WorkspaceProject objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.workspace.listProjects();
```
