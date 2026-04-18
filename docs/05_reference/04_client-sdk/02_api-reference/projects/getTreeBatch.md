---
name: getTreeBatch
cbbaseinfo:
  description: "Retrieves multiple tree items in a single batch request.

Fetches details for several tree items at once, reducing round trips compared to
individual  calls. Useful when loading multiple files or directories."
cbparameters:
  parameters:
    - name: data
      typeName: BatchTreeItemsRequest
      description: The batch request containing the item IDs to fetch
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem[]>"
    description: A promise that resolves to an array of tree items
data:
  name: getTreeBatch
  category: projects
  link: getTreeBatch.md
---
# getTreeBatch

```typescript
client.projects.getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>
```

Retrieves multiple tree items in a single batch request.

Fetches details for several tree items at once, reducing round trips compared to
individual  calls. Useful when loading multiple files or directories.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BatchTreeItemsRequest` | The batch request containing the item IDs to fetch |

## Returns

**`Promise<TreeItem[]>`** — A promise that resolves to an array of tree items

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getTreeBatch(/* BatchTreeItemsRequest */);
```
