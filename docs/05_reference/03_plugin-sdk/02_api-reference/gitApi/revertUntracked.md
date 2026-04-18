---
name: revertUntracked
cbbaseinfo:
  description: Call revertUntracked on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitRevertRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: revertUntracked
  category: gitApi
  link: revertUntracked.md
---
# revertUntracked

```typescript
plugin.gitApi.revertUntracked(data: GitRevertRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitRevertRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.revertUntracked(/* GitRevertRequest */);
```
