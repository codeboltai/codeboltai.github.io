---
name: revert
cbbaseinfo:
  description: Call revert on the Plugin SDK gitApi module.
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
  name: revert
  category: gitApi
  link: revert.md
---
# revert

```typescript
plugin.gitApi.revert(data: GitRevertRequest): Promise<unknown>
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

await plugin.gitApi.revert(/* GitRevertRequest */);
```
