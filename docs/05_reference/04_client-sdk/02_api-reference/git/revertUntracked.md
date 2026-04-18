---
name: revertUntracked
cbbaseinfo:
  description: "Removes untracked files from the working directory.

Deletes files that are not tracked by Git (i.e., new files that
have not been staged or committed). Use with caution as this
operation cannot be undone."
cbparameters:
  parameters:
    - name: data
      typeName: GitRevertRequest
      description: Request specifying which untracked files to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the untracked files have been removed
data:
  name: revertUntracked
  category: git
  link: revertUntracked.md
---
# revertUntracked

```typescript
client.git.revertUntracked(data: GitRevertRequest): Promise<unknown>
```

Removes untracked files from the working directory.

Deletes files that are not tracked by Git (i.e., new files that
have not been staged or committed). Use with caution as this
operation cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitRevertRequest` | Request specifying which untracked files to remove |

## Returns

**`Promise<unknown>`** — A promise that resolves when the untracked files have been removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.revertUntracked(/* GitRevertRequest */);
```
