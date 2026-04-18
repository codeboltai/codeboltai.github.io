---
name: pull
cbbaseinfo:
  description: Call pull on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitPullRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: pull
  category: gitApi
  link: pull.md
---
# pull

```typescript
plugin.gitApi.pull(data?: GitPullRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPullRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.pull();
```
