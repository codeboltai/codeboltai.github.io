---
name: createBranch
cbbaseinfo:
  description: Call createBranch on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitCreateBranchRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: createBranch
  category: gitApi
  link: createBranch.md
---
# createBranch

```typescript
plugin.gitApi.createBranch(data: GitCreateBranchRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCreateBranchRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.createBranch(/* GitCreateBranchRequest */);
```
