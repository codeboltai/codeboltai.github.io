---
name: pushToRemote
cbbaseinfo:
  description: Call pushToRemote on the Plugin SDK gitApi module.
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
  name: pushToRemote
  category: gitApi
  link: pushToRemote.md
---
# pushToRemote

```typescript
plugin.gitApi.pushToRemote(data?: GitPushRequest): Promise<unknown>
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

await plugin.gitApi.pushToRemote();
```
