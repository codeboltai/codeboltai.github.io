---
name: revert
cbbaseinfo:
  description: "Reverts changes to tracked files in the working directory.

Discards uncommitted modifications to files that are already tracked
by Git, restoring them to their last committed state."
cbparameters:
  parameters:
    - name: data
      typeName: GitRevertRequest
      description: Request specifying which files to revert
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the revert is complete
data:
  name: revert
  category: git
  link: revert.md
---
# revert

```typescript
client.git.revert(data: GitRevertRequest): Promise<unknown>
```

Reverts changes to tracked files in the working directory.

Discards uncommitted modifications to files that are already tracked
by Git, restoring them to their last committed state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitRevertRequest` | Request specifying which files to revert |

## Returns

**`Promise<unknown>`** — A promise that resolves when the revert is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.revert(/* GitRevertRequest */);
```
