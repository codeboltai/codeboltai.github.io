---
title: VectorDB MCP
sidebar_label: codebolt.vector
sidebar_position: 18
---

# codebolt.vector

Vector database operations for adding, querying, and retrieving vectors.

## Available Tools

- `add_item` - Add an item to the vector database
- `query` - Query the vector database
- `get_vector` - Retrieve a vector by item

## Sample Usage

```javascript
// Add an item to the vector database
const addResult = await codebolt.tools.executeTool(
  "codebolt.vector",
  "add_item",
  { item: "This is a test document for vector database" }
);

// Query the vector database
const queryResult = await codebolt.tools.executeTool(
  "codebolt.vector",
  "query",
  { query: "test document vector", topK: 1 }
);

// Retrieve a vector by item
const getVectorResult = await codebolt.tools.executeTool(
  "codebolt.vector",
  "get_vector",
  { item: "test-vector-001" }
);
```

:::info
This functionality provides vector database operations through the MCP interface.
::: 