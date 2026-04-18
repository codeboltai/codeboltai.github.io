---
name: branch
cbbaseinfo:
  description: "Lists branches in the repository.

Returns all local (and optionally remote) branches with their
metadata. Useful for branch selection UIs and workflow logic."
cbparameters:
  parameters:
    - name: data
      typeName: GitBranchRequest
      description: Optional parameters to filter branches (e.g., local-only, remote)
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitBranch[]>"
    description: A promise that resolves to an array of  objects
data:
  name: branch
  category: git
  link: branch.md
---
# branch

```typescript
client.git.branch(data?: GitBranchRequest): Promise<GitBranch[]>
```

Lists branches in the repository.

Returns all local (and optionally remote) branches with their
metadata. Useful for branch selection UIs and workflow logic.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitBranchRequest` _(optional)_ | Optional parameters to filter branches (e.g., local-only, remote) |

## Returns

**`Promise<GitBranch[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.branch();
```
