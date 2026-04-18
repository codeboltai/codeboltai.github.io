---
name: commit
cbbaseinfo:
  description: Call commit on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitCommitRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: commit
  category: gitApi
  link: commit.md
---
# commit

```typescript
plugin.gitApi.commit(data: GitCommitRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCommitRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.commit(/* GitCommitRequest */);
```
