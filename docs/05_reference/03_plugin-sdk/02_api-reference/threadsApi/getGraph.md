---
name: getGraph
cbbaseinfo:
  description: "Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThreadGraphNode[]>"
    description: A promise that resolves to an array of ThreadGraphNode objects
data:
  name: getGraph
  category: threadsApi
  link: getGraph.md
---
# getGraph

```typescript
plugin.threadsApi.getGraph(): Promise<ThreadGraphNode[]>
```

Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies.

## Parameters

_None_

## Returns

**`Promise<ThreadGraphNode[]>`** — A promise that resolves to an array of ThreadGraphNode objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getGraph();
```
