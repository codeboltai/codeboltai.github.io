---
name: graph
cbbaseinfo:
  description: Call graph on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitGraphRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitCommit[]>"
    description: ""
data:
  name: graph
  category: gitApi
  link: graph.md
---
# graph

```typescript
plugin.gitApi.graph(data?: GitGraphRequest): Promise<GitCommit[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitGraphRequest` _(optional)_ |  |

## Returns

**`Promise<GitCommit[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.graph();
```
