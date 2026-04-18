---
name: publishRemote
cbbaseinfo:
  description: Call publishRemote on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitPublishRemoteRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: publishRemote
  category: gitApi
  link: publishRemote.md
---
# publishRemote

```typescript
plugin.gitApi.publishRemote(data: GitPublishRemoteRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPublishRemoteRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.publishRemote(/* GitPublishRemoteRequest */);
```
