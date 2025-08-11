---
title: RAG MCP
sidebar_label: codebolt.rag
sidebar_position: 10
---

# codebolt.rag

Retrieval Augmented Generation tools for creating and querying knowledge indexes.

## Available Tools

- `rag_create_index` - Create a new RAG index
- `rag_add_documents` - Add documents to a RAG index
- `rag_query` - Query documents from RAG index
- `rag_delete_index` - Delete a RAG index
- `rag_update_document` - Update a document in RAG index
- `rag_list_indexes` - List all available RAG indexes

## Sample Usage

```javascript
// Create a new RAG index
const createResult = await codeboltMCP.executeTool(
  "codebolt.rag",
  "rag_create_index",
  { 
    indexName: "project_docs",
    description: "Project documentation index"
  }
);

// Add documents to index
const addResult = await codeboltMCP.executeTool(
  "codebolt.rag",
  "rag_add_documents",
  { 
    indexName: "project_docs",
    documents: [
      {
        id: "doc1",
        content: "This is the API documentation...",
        metadata: { type: "api", version: "1.0" }
      }
    ]
  }
);

// Query the RAG index
const queryResult = await codeboltMCP.executeTool(
  "codebolt.rag",
  "rag_query",
  { 
    indexName: "project_docs",
    query: "How to authenticate users?",
    topK: 3
  }
);

// List all indexes
const listResult = await codeboltMCP.executeTool(
  "codebolt.rag",
  "rag_list_indexes",
  {}
);

// Update a document
const updateResult = await codeboltMCP.executeTool(
  "codebolt.rag",
  "rag_update_document",
  { 
    indexName: "project_docs",
    documentId: "doc1",
    content: "Updated API documentation..."
  }
);
```

:::info
This functionality is similar to the [rag API](/docs/api/apiaccess/rag) and provides knowledge retrieval through MCP interface.
::: 