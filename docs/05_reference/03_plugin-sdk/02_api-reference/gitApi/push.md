---
name: push
cbbaseinfo:
  description: Call push on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitPushRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: push
  category: gitApi
  link: push.md
---
# push

```typescript
plugin.gitApi.push(data?: GitPushRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPushRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.push();
```
