---
name: init
cbbaseinfo:
  description: Call init on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitInitRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: init
  category: gitApi
  link: init.md
---
# init

```typescript
plugin.gitApi.init(data?: GitInitRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitInitRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.init();
```
