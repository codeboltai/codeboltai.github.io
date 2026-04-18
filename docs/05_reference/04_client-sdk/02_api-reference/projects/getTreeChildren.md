---
name: getTreeChildren
cbbaseinfo:
  description: "Retrieves the child items of a specific node in the project file tree.

Returns the immediate children (files and subdirectories) of the specified parent
directory in the project tree. Use this for lazy-loading tree navigation."
cbparameters:
  parameters:
    - name: parentId
      typeName: string
      description: The unique identifier of the parent tree node
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem[]>"
    description: A promise that resolves to an array of child tree items
data:
  name: getTreeChildren
  category: projects
  link: getTreeChildren.md
---
# getTreeChildren

```typescript
client.projects.getTreeChildren(parentId: string): Promise<TreeItem[]>
```

Retrieves the child items of a specific node in the project file tree.

Returns the immediate children (files and subdirectories) of the specified parent
directory in the project tree. Use this for lazy-loading tree navigation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `parentId` | `string` | The unique identifier of the parent tree node |

## Returns

**`Promise<TreeItem[]>`** — A promise that resolves to an array of child tree items

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getTreeChildren('parentId');
```
