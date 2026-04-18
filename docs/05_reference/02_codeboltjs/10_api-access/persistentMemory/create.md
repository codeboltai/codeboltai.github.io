---
name: create
cbbaseinfo:
  description: Creates a new persistent memory configuration for defining how agents access and retrieve persistent knowledge.
cbparameters:
  parameters:
    - name: config
      typeName: CreatePersistentMemoryParams
      description: Memory configuration object.
      nested:
        - name: id
          typeName: "string | undefined"
          description: Optional custom ID for the memory.
        - name: label
          typeName: string
          description: "Human-readable label for the memory (required)."
        - name: description
          typeName: "string | undefined"
          description: "Optional description of the memory's purpose."
        - name: inputs_scope
          typeName: "string[] | undefined"
          description: Array of input scopes this memory applies to.
        - name: additional_variables
          typeName: "Record<string, any> | undefined"
          description: Additional variables for the memory configuration.
        - name: retrieval
          typeName: RetrievalConfig
          description: "Retrieval pipeline configuration (required)."
        - name: contribution
          typeName: ContributionConfig
          description: "Contribution format configuration (required)."
  returns:
    signatureTypeName: "Promise<PersistentMemoryResponse>"
    description: A promise that resolves to the created memory details.
    typeArgs: []
data:
  name: create
  category: persistentMemory
  link: create.md
---
# create

```typescript
codebolt.persistentMemory.create(config: CreatePersistentMemoryParams): Promise<PersistentMemoryResponse>
```

Creates a new persistent memory configuration for defining how agents access and retrieve persistent knowledge.
### Parameters

- **`config`** ([CreatePersistentMemoryParams](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/CreatePersistentMemoryParams)): Memory configuration object.

### Returns

- **`Promise<[PersistentMemoryResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/PersistentMemoryResponse)>`**: A promise that resolves to the created memory details.

### Examples

#### Create Basic Persistent Memory

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a simple persistent memory configuration
const memory = await codebolt.persistentMemory.create({
    label: 'Code Context Memory',
    retrieval: {
        source_type: 'vectordb',
        source_id: 'code-vectors'
    },
    contribution: {
        format: 'text'
    }
});

if (memory.success) {
    console.log('✅ Memory created:', memory.data.memory.id);
    console.log('Label:', memory.data.memory.label);
}
```

#### Create Memory with Vector DB Retrieval

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memory with vector database retrieval
const memory = await codebolt.persistentMemory.create({
    label: 'Documentation Search',
    description: 'Searches documentation for relevant context',
    inputs_scope: ['codebolt.project', 'codebolt.file'],
    retrieval: {
        source_type: 'vectordb',
        source_id: 'docs-vectors',
        query_template: 'Find documentation about {query}',
        limit: 5,
        filters: {
            language: 'en'
        }
    },
    contribution: {
        format: 'markdown',
        template: '## Relevant Documentation\n\n{results}\n\n',
        max_tokens: 1500
    }
});

console.log('✅ Documentation memory created');
```

#### Create Memory with KV Store

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memory using key-value store
const memory = await codebolt.persistentMemory.create({
    label: 'User Preferences',
    description: 'Retrieves user preference settings',
    retrieval: {
        source_type: 'kv',
        source_id: 'user-prefs',
        query_template: 'user:{userId}'
    },
    contribution: {
        format: 'json'
    }
});

console.log('✅ User preferences memory created');
```

#### Create Memory with Event Log

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memory that queries event logs
const memory = await codebolt.persistentMemory.create({
    label: 'Recent Activity Log',
    description: 'Accesses recent system events',
    retrieval: {
        source_type: 'eventlog',
        source_id: 'system-events',
        query_template: 'type:{eventType} since:{timeframe}',
        limit: 50
    },
    contribution: {
        format: 'text',
        template: 'Recent Events:\n{events}',
        max_tokens: 2000
    }
});

console.log('✅ Event log memory created');
```

#### Create Memory with Knowledge Graph

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memory that queries knowledge graph
const memory = await codebolt.persistentMemory.create({
    label: 'Entity Relationships',
    description: 'Retrieves related entities from knowledge graph',
    retrieval: {
        source_type: 'kg',
        source_id: 'entity-graph',
        query_template: 'FIND relationships FOR entity:{entityId}',
        filters: {
            depth: 2,
            maxResults: 20
        }
    },
    contribution: {
        format: 'json',
        template: '{ "entities": {entities}, "relationships": {relationships} }'
    }
});

console.log('✅ Knowledge graph memory created');
```

#### Create Memory with Custom Variables

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memory with additional configuration variables
const memory = await codebolt.persistentMemory.create({
    label: 'Contextual Memory',
    description: 'Context-aware memory retrieval',
    inputs_scope: ['codebolt.task', 'codebolt.conversation'],
    additional_variables: {
        context_window: 5,
        include_metadata: true,
        ranking_method: 'semantic_similarity',
        min_confidence: 0.7
    },
    retrieval: {
        source_type: 'vectordb',
        source_id: 'context-store',
        limit: 10
    },
    contribution: {
        format: 'markdown',
        max_tokens: 3000
    }
});

console.log('✅ Contextual memory created with custom variables');
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

async function createPersistentMemoryWithErrorHandling(config) {
    await codebolt.waitForReady();

    try {
        // Validate required fields
        if (!config.label) {
            throw new Error('Label is required');
        }

        if (!config.retrieval || !config.retrieval.source_type) {
            throw new Error('Retrieval configuration with source_type is required');
        }

        if (!config.contribution || !config.contribution.format) {
            throw new Error('Contribution configuration with format is required');
        }

        const result = await codebolt.persistentMemory.create(config);

        if (!result.success) {
            throw new Error(result.error || 'Memory creation failed');
        }

        console.log('✅ Persistent memory created successfully');
        return result.data.memory;

    } catch (error) {
        console.error('Error creating persistent memory:', error.message);
        return null;
    }
}

// Usage
const memory = await createPersistentMemoryWithErrorHandling({
    label: 'Test Memory',
    retrieval: { source_type: 'vectordb', source_id: 'test-db' },
    contribution: { format: 'text' }
});
```

### Response Structure

```js
{
    type: 'persistentMemory.create',
    success: boolean,
    data?: {
        memory: {
            id: string,
            label: string,
            description?: string,
            status: 'active' | 'disabled' | 'draft',
            inputs_scope: string[],
            additional_variables?: Record<string, any>,
            retrieval: {
                source_type: 'vectordb' | 'kv' | 'eventlog' | 'kg',
                source_id: string,
                query_template?: string,
                limit?: number,
                filters?: Record<string, any>
            },
            contribution: {
                format: 'text' | 'json' | 'markdown',
                template?: string,
                max_tokens?: number
            },
            createdAt: string,
            updatedAt: string
        }
    },
    message?: string,
    error?: string,
    timestamp: string,
    requestId: string
}
```

### Common Use Cases

**1. Context Retrieval**
Provide relevant context for agent tasks.

**2. Knowledge Access**
Enable agents to access stored knowledge.

**3. User Preferences**
Retrieve user-specific configuration and preferences.

**4. Historical Data**
Access historical events and logs.

**5. Entity Relationships**
Query related entities in knowledge graphs.

### Notes

- Source types: vectordb, kv, eventlog, kg
- Format types: text, json, markdown
- Query templates support variable substitution
- Limits control the number of results returned
- Filters vary by source type
- Templates can include `{variables}` for substitution
- max_tokens controls output size for contribution
- Custom variables can be used for advanced configuration
- Memories start in 'active' status by default
- Input scopes control which operations can use the memory
