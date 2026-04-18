---
name: getTree
cbbaseinfo:
  description: "Retrieves the hierarchical file tree for a workspace project.

Returns a nested tree structure representing all files and directories
within the specified project. Useful for rendering file explorers or
programmatically traversing project contents."
cbparameters:
  parameters:
    - name: workspaceId
      typeName: string
      description: The unique identifier of the workspace containing the project
      isOptional: false
    - name: projectName
      typeName: string
      description: The name of the project whose file tree to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<EditorTreeNode>"
    description: A promise that resolves to the root  with nested children
data:
  name: getTree
  category: editorApi
  link: getTree.md
---
# getTree

```typescript
client.editorApi.getTree(workspaceId: string, projectName: string): Promise<EditorTreeNode>
```

Retrieves the hierarchical file tree for a workspace project.

Returns a nested tree structure representing all files and directories
within the specified project. Useful for rendering file explorers or
programmatically traversing project contents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspaceId` | `string` | The unique identifier of the workspace containing the project |
| `projectName` | `string` | The name of the project whose file tree to retrieve |

## Returns

**`Promise<EditorTreeNode>`** — A promise that resolves to the root  with nested children

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.editorApi.getTree('workspaceId', 'projectName');
```
