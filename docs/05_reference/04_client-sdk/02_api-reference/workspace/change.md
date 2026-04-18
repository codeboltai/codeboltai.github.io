---
name: change
cbbaseinfo:
  description: "Changes the active workspace to the specified one.

Updates the active workspace context directly without requiring
a separate selection object. This is a simplified version of the
select operation for quick workspace switching."
cbparameters:
  parameters:
    - name: workspaceId
      typeName: string
      description: The unique identifier of the workspace to activate
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the workspace has been changed
data:
  name: change
  category: workspace
  link: change.md
---
# change

```typescript
client.workspace.change(workspaceId: string): Promise<void>
```

Changes the active workspace to the specified one.

Updates the active workspace context directly without requiring
a separate selection object. This is a simplified version of the
select operation for quick workspace switching.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspaceId` | `string` | The unique identifier of the workspace to activate |

## Returns

**`Promise<void>`** — A promise that resolves when the workspace has been changed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.workspace.change('workspaceId');
```
