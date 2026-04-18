---
name: status
cbbaseinfo:
  description: Call status on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitStatusRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitStatus>"
    description: ""
data:
  name: status
  category: gitApi
  link: status.md
---
# status

```typescript
plugin.gitApi.status(data?: GitStatusRequest): Promise<GitStatus>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitStatusRequest` _(optional)_ |  |

## Returns

**`Promise<GitStatus>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.status();
```
