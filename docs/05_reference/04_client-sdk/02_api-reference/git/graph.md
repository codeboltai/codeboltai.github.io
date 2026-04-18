---
name: graph
cbbaseinfo:
  description: "Retrieves the commit graph (history) of the repository.

Returns an array of commits representing the repository's history.
Useful for rendering commit timelines or inspecting past changes."
cbparameters:
  parameters:
    - name: data
      typeName: GitGraphRequest
      description: Optional parameters to filter the graph (e.g., branch, limit)
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitCommit[]>"
    description: A promise that resolves to an array of  objects
data:
  name: graph
  category: git
  link: graph.md
---
# graph

```typescript
client.git.graph(data?: GitGraphRequest): Promise<GitCommit[]>
```

Retrieves the commit graph (history) of the repository.

Returns an array of commits representing the repository's history.
Useful for rendering commit timelines or inspecting past changes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitGraphRequest` _(optional)_ | Optional parameters to filter the graph (e.g., branch, limit) |

## Returns

**`Promise<GitCommit[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.graph();
```
