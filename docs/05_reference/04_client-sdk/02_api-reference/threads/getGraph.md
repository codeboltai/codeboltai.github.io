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
  category: threads
  link: getGraph.md
---
# getGraph

```typescript
client.threads.getGraph(): Promise<ThreadGraphNode[]>
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
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.getGraph();
```
