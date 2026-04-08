---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/persistentmemory/create
    description: Creates a new persistent memory configuration.
  - name: get
    link: /docs/api/apiaccess/persistentmemory/get
    description: Gets a persistent memory by ID.
  - name: list
    link: /docs/api/apiaccess/persistentmemory/list
    description: Lists persistent memories with optional filters.
  - name: update
    link: /docs/api/apiaccess/persistentmemory/update
    description: Updates a persistent memory configuration.
  - name: delete
    link: /docs/api/apiaccess/persistentmemory/delete
    description: Deletes a persistent memory.
  - name: executeRetrieval
    link: /docs/api/apiaccess/persistentmemory/executeRetrieval
    description: Executes memory retrieval pipeline.
  - name: validate
    link: /docs/api/apiaccess/persistentmemory/validate
    description: Validates a memory configuration.
  - name: getStepSpecs
    link: /docs/api/apiaccess/persistentmemory/getStepSpecs
    description: Gets available step specifications.
---
# Persistent Memory API

The Persistent Memory API provides configurable memory retrieval and storage capabilities, enabling agents to access and utilize persistent knowledge across sessions through customizable pipelines.

## Overview

The persistent memory module enables you to:
- **Memory Configurations**: Create configurable memory access patterns
- **Retrieval Pipelines**: Define how data is retrieved from various sources
- **Contribution Formats**: Control how data is formatted and returned
- **Multi-Source**: Access vector databases, KV stores, event logs, and knowledge graphs
- **Validation**: Test and validate memory configurations before deployment

## Quick Start Example

```js
// Wait for connection
await codebolt.waitForReady();

// Create a persistent memory configuration
const memory = await codebolt.persistentMemory.create({
    label: 'Code Context Memory',
    description: 'Retrieves relevant code context for development tasks',
    inputs_scope: ['codebolt.project', 'codebolt.file'],
    retrieval: {
        source_type: 'vectordb',
        source_id: 'code-vectors',
        query_template: 'Find relevant code for {context}',
        limit: 10
    },
    contribution: {
        format: 'markdown',
        template: '## Relevant Code\n\n{results}',
        max_tokens: 2000
    }
});

// Execute retrieval with context
const result = await codebolt.persistentMemory.executeRetrieval(
    memory.data.memory.id,
    {
        query: 'How is authentication implemented?',
        context: { task: 'code_review' }
    }
);

console.log('Retrieved memory:', result.data.result);
```

## Response Structure

All persistent memory API functions return responses with a consistent structure:

```js
{
    type: string,
    success: boolean,
    data?: {
        memory: {
            id: string,
            label: string,
            description?: string,
            status: 'active' | 'disabled' | 'draft',
            inputs_scope: string[],
            retrieval: RetrievalConfig,
            contribution: ContributionConfig,
            createdAt: string,
            updatedAt: string
        },
        result?: any
    },
    message?: string,
    error?: string,
    timestamp: string,
    requestId: string
}
```

## Key Concepts

### Memory Configuration
Defines how agents access persistent knowledge through configurable pipelines.

### Retrieval Sources
- **vectordb**: Vector similarity search
- **kv**: Key-value store lookup
- **eventlog**: Event log queries
- **kg**: Knowledge graph queries

### Input Scope
Defines which inputs the memory configuration applies to (e.g., specific project types).

### Contribution Format
Controls how retrieved data is formatted:
- **text**: Plain text output
- **json**: Structured JSON
- **markdown**: Markdown formatted

### Pipeline Execution
Retrieval is triggered by execution intents with context, keywords, and queries.

### Validation
Test configurations before activating to ensure they work correctly.

<CBAPICategory />
