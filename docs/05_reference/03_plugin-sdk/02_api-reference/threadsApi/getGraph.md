---
title: getGraph
---

# `getGraph`

```typescript
plugin.threadsApi.getGraph(): Promise<ThreadGraphNode[]>
```

Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies.

## Parameters

_No parameters._

## Returns

`Promise<ThreadGraphNode[]>` — A promise that resolves to an array of ThreadGraphNode objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.getGraph();
console.log(result);
```
