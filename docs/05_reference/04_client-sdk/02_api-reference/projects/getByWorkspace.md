---
name: getByWorkspace
cbbaseinfo:
  description: "Retrieves all projects belonging to a specific workspace.

Returns the list of projects within the specified workspace, useful for workspace
navigation and project switching."
cbparameters:
  parameters:
    - name: workspaceId
      typeName: string
      description: The unique identifier of the workspace
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project[]>"
    description: A promise that resolves to an array of projects in the workspace
data:
  name: getByWorkspace
  category: projects
  link: getByWorkspace.md
---
# getByWorkspace

```typescript
client.projects.getByWorkspace(workspaceId: string): Promise<Project[]>
```

Retrieves all projects belonging to a specific workspace.

Returns the list of projects within the specified workspace, useful for workspace
navigation and project switching.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspaceId` | `string` | The unique identifier of the workspace |

## Returns

**`Promise<Project[]>`** — A promise that resolves to an array of projects in the workspace

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getByWorkspace('workspaceId');
```
