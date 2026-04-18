---
name: branch
cbbaseinfo:
  description: Call branch on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitBranchRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitBranch[]>"
    description: ""
data:
  name: branch
  category: gitApi
  link: branch.md
---
# branch

```typescript
plugin.gitApi.branch(data?: GitBranchRequest): Promise<GitBranch[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitBranchRequest` _(optional)_ |  |

## Returns

**`Promise<GitBranch[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.branch();
```
