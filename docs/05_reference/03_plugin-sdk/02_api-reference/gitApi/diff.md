---
name: diff
cbbaseinfo:
  description: Call diff on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitDiffRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitDiff[]>"
    description: ""
data:
  name: diff
  category: gitApi
  link: diff.md
---
# diff

```typescript
plugin.gitApi.diff(data?: GitDiffRequest): Promise<GitDiff[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitDiffRequest` _(optional)_ |  |

## Returns

**`Promise<GitDiff[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.diff();
```
