---
name: getById
cbbaseinfo:
  description: "Retrieves a specific workspace by its unique identifier.

Returns detailed information about a single workspace including
its settings, members, projects, and configuration metadata."
cbparameters:
  parameters:
    - name: workspaceId
      typeName: string
      description: The unique identifier of the workspace to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<Workspace>"
    description: A promise that resolves to the requested Workspace object
data:
  name: getById
  category: workspace
  link: getById.md
---
# getById

```typescript
client.workspace.getById(workspaceId: string): Promise<Workspace>
```

Retrieves a specific workspace by its unique identifier.

Returns detailed information about a single workspace including
its settings, members, projects, and configuration metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspaceId` | `string` | The unique identifier of the workspace to retrieve |

## Returns

**`Promise<Workspace>`** — A promise that resolves to the requested Workspace object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.workspace.getById('workspaceId');
```
