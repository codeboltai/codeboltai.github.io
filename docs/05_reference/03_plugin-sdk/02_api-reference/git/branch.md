---
name: branch
cbbaseinfo:
  description: Creates a new branch in the local repository at the given path.
cbparameters:
  parameters:
    - name: branch
      typeName: string
      description: The name of the new branch to create.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitBranchResponse>"
    description: A promise that resolves with the response from the branch event.
data:
  name: branch
  category: git
  link: branch.md
---
# branch

```typescript
plugin.git.branch(branch: string): Promise<GitBranchResponse>
```

Creates a new branch in the local repository at the given path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `branch` | `string` | The name of the new branch to create. |

## Returns

**`Promise<GitBranchResponse>`** — A promise that resolves with the response from the branch event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.branch('branch');
```
