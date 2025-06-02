---
title: Vector MCP
sidebar_label: codebolt.vector
sidebar_position: 9
---

# codebolt.vector

Vector database operations for storing and querying high-dimensional vector data.

## Available Tools

- `vectordb_query` - Query vectors by similarity
- `vectordb_add_item` - Add new vector item to database
- `vectordb_get_vector` - Retrieve specific vector by ID

## Sample Usage

```javascript
// Add a vector item
const addResult = await codeboltMCP.executeTool(
  "codebolt.vector",
  "vectordb_add_item",
  { 
    id: "doc_123",
    vector: [0.1, 0.2, 0.3, 0.4],
    metadata: {
      title: "Sample Document",
      category: "documentation"
    }
  }
);

// Query similar vectors
const queryResult = await codeboltMCP.executeTool(
  "codebolt.vector",
  "vectordb_query",
  { 
    vector: [0.1, 0.2, 0.3, 0.4],
    topK: 5,
    threshold: 0.8
  }
);

// Get specific vector
const getResult = await codeboltMCP.executeTool(
  "codebolt.vector",
  "vectordb_get_vector",
  { id: "doc_123" }
);
```

:::info
This functionality is similar to the [vectordb API](/docs/api/apiaccess/vectordb) and provides vector operations through MCP interface.
::: 