---
name: getTree
cbbaseinfo:
  description: "Retrieves the hierarchical tree structure for a thread.

Returns the complete tree representation starting from the specified thread,
including all descendant threads and their relationships. This is useful for
visualizing thread hierarchies and understanding nested thread structures."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the root thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadGraphNode>"
    description: A promise that resolves to a ThreadGraphNode representing the tree
data:
  name: getTree
  category: threadsApi
  link: getTree.md
---
# getTree

```typescript
plugin.threadsApi.getTree(threadId: string): Promise<ThreadGraphNode>
```

Retrieves the hierarchical tree structure for a thread.

Returns the complete tree representation starting from the specified thread,
including all descendant threads and their relationships. This is useful for
visualizing thread hierarchies and understanding nested thread structures.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the root thread |

## Returns

**`Promise<ThreadGraphNode>`** — A promise that resolves to a ThreadGraphNode representing the tree

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getTree('threadId');
```
