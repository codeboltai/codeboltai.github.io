---
name: createBranch
cbbaseinfo:
  description: "Creates a new Git branch.

Creates a branch with the specified name, optionally based on a
given starting point (commit, tag, or another branch)."
cbparameters:
  parameters:
    - name: data
      typeName: GitCreateBranchRequest
      description: Branch creation parameters including the new branch name
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the branch has been created
data:
  name: createBranch
  category: git
  link: createBranch.md
---
# createBranch

```typescript
client.git.createBranch(data: GitCreateBranchRequest): Promise<unknown>
```

Creates a new Git branch.

Creates a branch with the specified name, optionally based on a
given starting point (commit, tag, or another branch).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCreateBranchRequest` | Branch creation parameters including the new branch name |

## Returns

**`Promise<unknown>`** — A promise that resolves when the branch has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.createBranch(/* GitCreateBranchRequest */);
```
