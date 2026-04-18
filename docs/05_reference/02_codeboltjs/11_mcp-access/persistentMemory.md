---
title: Persistent Memory MCP
sidebar_label: codebolt.persistentMemory
sidebar_position: 62
---

# codebolt.persistentMemory

Persistent memory management tools for creating, updating, and querying structured memory configurations with retrieval pipelines. Provides long-term storage with advanced querying and filtering capabilities.

## Available Tools

- `persistent_memory_create` - Creates a new persistent memory configuration
- `persistent_memory_get` - Retrieves a specific persistent memory by ID
- `persistent_memory_list` - Lists persistent memories with optional filtering
- `persistent_memory_update` - Updates an existing persistent memory
- `persistent_memory_delete` - Deletes a persistent memory by ID
- `persistent_memory_execute_retrieval` - Executes a memory retrieval pipeline with queries
- `persistent_memory_validate` - Validates a memory configuration
- `persistent_memory_get_step_specs` - Gets available step specifications for retrieval pipelines

## Tool Parameters

### persistent_memory_create

Creates a new persistent memory configuration with retrieval and contribution settings.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config | object | Yes | Complete memory configuration object |
| config.id | string | No | Custom memory identifier (auto-generated if not provided) |
| config.label | string | Yes | Human-readable name for the memory |
| config.description | string | No | Detailed description of the memory purpose |
| config.inputs_scope | string[] | No | Array of input scope identifiers that can access this memory |
| config.additional_variables | object | No | Additional custom configuration variables as key-value pairs |
| config.retrieval | object | Yes | Retrieval configuration specifying how to fetch data |
| config.retrieval.source_type | string | Yes | Type of data source: `vectordb`, `kv`, `eventlog`, or `kg` (knowledge graph) |
| config.retrieval.source_id | string | Yes | Unique identifier of the data source to retrieve from |
| config.retrieval.query_template | string | No | Template string for constructing queries |
| config.retrieval.limit | number | No | Maximum number of results to retrieve |
| config.retrieval.filters | object | No | Key-value pairs for filtering retrieval results |
| config.contribution | object | Yes | Contribution configuration specifying output format |
| config.contribution.format | string | Yes | Output format: `text`, `json`, or `markdown` |
| config.contribution.template | string | No | Template for formatting the output |
| config.contribution.max_tokens | number | No | Maximum number of tokens in the output |

### persistent_memory_get

Retrieves a specific persistent memory configuration by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | Unique identifier of the memory to retrieve |

### persistent_memory_list

Lists all persistent memories with optional filtering capabilities.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filtering criteria |
| filters.inputScope | string | No | Filter memories by specific input scope |
| filters.activeOnly | boolean | No | If true, only return memories with status 'active' |

### persistent_memory_update

Updates an existing persistent memory configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | Unique identifier of the memory to update |
| updates | object | Yes | Fields to update in the memory configuration |
| updates.label | string | No | New human-readable name for the memory |
| updates.description | string | No | New description of the memory purpose |
| updates.status | string | No | New status: `active`, `disabled`, or `draft` |
| updates.inputs_scope | string[] | No | New array of input scope identifiers |
| updates.additional_variables | object | No | New additional configuration variables |
| updates.retrieval | object | No | New retrieval configuration |
| updates.contribution | object | No | New contribution configuration |

### persistent_memory_delete

Permanently deletes a persistent memory configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | Unique identifier of the memory to delete |

### persistent_memory_execute_retrieval

Executes a retrieval pipeline on a memory configuration to fetch and return relevant data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | Unique identifier of the memory to query |
| intent | object | Yes | Execution intent containing query parameters |
| intent.keywords | string[] | No | Array of keywords for searching the memory |
| intent.action | string | No | Type of action to perform during retrieval |
| intent.context | object | No | Additional context data for the retrieval operation |
| intent.query | string | No | Natural language query string |

### persistent_memory_validate

Validates a memory configuration structure and parameters before creation or update.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memory | object | Yes | Memory configuration object to validate |

### persistent_memory_get_step_specs

Retrieves available step specifications for building retrieval pipelines.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | | | No parameters required |

## Sample Usage

### Creating a Vector Database Memory

```javascript
const { codebolt } = require('codebolt');

// Create a memory that retrieves from a vector database
const result = await codebolt.tools.run({
  tool: 'persistent_memory_create',
  config: {
    label: 'Project Documentation',
    description: 'Vector database of all project documentation',
    inputs_scope: ['documentation', 'knowledge-base'],
    retrieval: {
      source_type: 'vectordb',
      source_id: 'project-docs-db',
      query_template: '{query}',
      limit: 10,
      filters: { status: 'published' }
    },
    contribution: {
      format: 'markdown',
      template: '# {title}\n\n{content}',
      max_tokens: 1000
    }
  }
});
```

### Listing and Filtering Memories

```javascript
// List all memories
const allMemories = await codebolt.tools.run({
  tool: 'persistent_memory_list'
});

// List only active memories for a specific scope
const activeDocs = await codebolt.tools.run({
  tool: 'persistent_memory_list',
  filters: {
    inputScope: 'documentation',
    activeOnly: true
  }
});
```

### Executing Memory Retrieval

```javascript
// Query a memory with natural language
const retrievalResult = await codebolt.tools.run({
  tool: 'persistent_memory_execute_retrieval',
  memoryId: 'memory-123',
  intent: {
    query: 'How do I authenticate users in the API?',
    context: {
      userId: 'user-456',
      sessionId: 'session-789'
    }
  }
});

// Query with keywords
const keywordSearch = await codebolt.tools.run({
  tool: 'persistent_memory_execute_retrieval',
  memoryId: 'memory-123',
  intent: {
    keywords: ['authentication', 'API', 'security'],
    action: 'search'
  }
});
```

### Updating Memory Configuration

```javascript
// Update memory status and add filters
const updateResult = await codebolt.tools.run({
  tool: 'persistent_memory_update',
  memoryId: 'memory-123',
  updates: {
    status: 'active',
    retrieval: {
      source_type: 'vectordb',
      source_id: 'project-docs-db',
      filters: { 
        status: 'published',
        category: 'security'
      }
    }
  }
});
```

### Validating Before Creation

```javascript
// Validate a configuration before creating
const validation = await codebolt.tools.run({
  tool: 'persistent_memory_validate',
  memory: {
    label: 'Test Memory',
    retrieval: {
      source_type: 'vectordb',
      source_id: 'test-db'
    },
    contribution: {
      format: 'json'
    }
  }
});

if (validation.success) {
  // Proceed with creation
  await codebolt.tools.run({
    tool: 'persistent_memory_create',
    config: validation.data
  });
}
```

### Getting Step Specifications

```javascript
// Retrieve available step specifications for pipeline building
const stepSpecs = await codebolt.tools.run({
  tool: 'persistent_memory_get_step_specs'
});

console.log('Available steps:', stepSpecs);
```

### Creating a Key-Value Store Memory

```javascript
const kvMemory = await codebolt.tools.run({
  tool: 'persistent_memory_create',
  config: {
    label: 'User Preferences',
    description: 'Key-value store for user settings',
    inputs_scope: ['user-profile', 'preferences'],
    retrieval: {
      source_type: 'kv',
      source_id: 'user-prefs-store'
    },
    contribution: {
      format: 'json'
    }
  }
});
```

:::info
**Memory Types and Retrieval Pipelines**

- **Source Types**: The `source_type` in retrieval config determines the data backend:
  - `vectordb`: Vector database for semantic search and similarity matching
  - `kv`: Key-value store for structured data lookups
  - `eventlog`: Event log for chronological data retrieval
  - `kg`: Knowledge graph for relationship-based queries

- **Status Management**: Memories have three states:
  - `active`: Available for retrieval operations
  - `disabled`: Configured but not accessible for queries
  - `draft`: Incomplete configuration, not ready for use

- **Retrieval Intents**: The `intent` object in execute_retrieval provides context:
  - Use `query` for natural language questions
  - Use `keywords` for targeted term-based search
  - Use `context` to pass runtime variables
  - Use `action` to specify retrieval behavior

- **Step Specifications**: Use `persistent_memory_get_step_specs` to discover available pipeline steps when building complex retrieval workflows.
:::
