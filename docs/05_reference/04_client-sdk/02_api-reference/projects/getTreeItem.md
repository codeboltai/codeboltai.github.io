---
name: getTreeItem
cbbaseinfo:
  description: "Retrieves a specific item from the project's file tree by its identifier.

Returns metadata about a file or directory in the project tree, including its name,
path, type, and any associated metadata."
cbparameters:
  parameters:
    - name: itemId
      typeName: string
      description: The unique identifier of the tree item to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem>"
    description: A promise that resolves to the tree item details
data:
  name: getTreeItem
  category: projects
  link: getTreeItem.md
---
# getTreeItem

```typescript
client.projects.getTreeItem(itemId: string): Promise<TreeItem>
```

Retrieves a specific item from the project's file tree by its identifier.

Returns metadata about a file or directory in the project tree, including its name,
path, type, and any associated metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `itemId` | `string` | The unique identifier of the tree item to retrieve |

## Returns

**`Promise<TreeItem>`** — A promise that resolves to the tree item details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getTreeItem('itemId');
```
