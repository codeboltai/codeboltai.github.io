---
name: create
cbbaseinfo:
  description: Creates a new memory ingestion pipeline for processing and routing data into memory stores.
cbparameters:
  parameters:
    - name: config
      typeName: CreateIngestionPipelineParams
      description: Pipeline configuration object.
      nested:
        - name: id
          typeName: "string | undefined"
          description: Optional custom ID for the pipeline.
        - name: label
          typeName: string
          description: "Human-readable label for the pipeline (required)."
        - name: description
          typeName: "string | undefined"
          description: "Optional description of the pipeline's purpose."
        - name: trigger
          typeName: IngestionTrigger
          description: "When the pipeline executes (required)."
        - name: trigger_config
          typeName: "Record<string, any> | undefined"
          description: Configuration for the trigger.
        - name: processors
          typeName: "IngestionProcessor[]"
          description: "Array of processing steps (required)."
        - name: routing
          typeName: IngestionRouting
          description: "Where processed data is routed (required)."
  returns:
    signatureTypeName: "Promise<IngestionPipelineResponse>"
    description: A promise that resolves to the created pipeline details.
    typeArgs: []
data:
  name: create
  category: memoryIngestion
  link: create.md
---
# create

```typescript
codebolt.memoryIngestion.create(config: CreateIngestionPipelineParams): Promise<IngestionPipelineResponse>
```

Creates a new memory ingestion pipeline for processing and routing data into memory stores.
### Parameters

- **`config`** ([CreateIngestionPipelineParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateIngestionPipelineParams)): Pipeline configuration object.

### Returns

- **`Promise<[IngestionPipelineResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IngestionPipelineResponse)>`**: A promise that resolves to the created pipeline details.

### Examples

#### Create Basic Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a simple ingestion pipeline
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Conversation Summarizer',
    trigger: 'onConversationEnd',
    processors: [
        {
            type: 'llm_summarize',
            config: { max_length: 300 }
        }
    ],
    routing: {
        destination: 'vectordb',
        destination_id: 'summaries-vectors'
    }
});

if (pipeline.success) {
    console.log('✅ Pipeline created:', pipeline.data.pipeline.id);
}
```

#### Create Pipeline with Multiple Processors

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create pipeline with processing chain
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Document Processor',
    description: 'Extracts and embeds document content',
    trigger: 'onFileChange',
    trigger_config: {
        file_patterns: ['*.md', '*.txt']
    },
    processors: [
        {
            type: 'filter',
            config: { min_length: 100 },
            order: 1
        },
        {
            type: 'llm_extract',
            config: {
                extract: ['title', 'summary', 'keywords'],
                model: 'gpt-4'
            },
            order: 2
        },
        {
            type: 'embed',
            config: { model: 'text-embedding-ada-002' },
            order: 3
        }
    ],
    routing: {
        destination: 'vectordb',
        destination_id: 'docs-vectors',
        field_mapping: {
            summary: 'text',
            keywords: 'metadata.tags'
        }
    }
});

console.log('✅ Document processor pipeline created');
```

#### Create Manual Trigger Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create manually triggered pipeline
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Data Import Pipeline',
    description: 'Imports and processes external data',
    trigger: 'manual',
    processors: [
        {
            type: 'transform',
            config: {
                transformations: [
                    { field: 'date', operation: 'to_iso_date' },
                    { field: 'tags', operation: 'split', delimiter: ',' }
                ]
            }
        }
    ],
    routing: {
        destination: 'kv',
        destination_id: 'imported-data',
        field_mapping: {
            id: 'key',
            '*': 'value'
        }
    }
});

console.log('✅ Manual import pipeline created');
```

#### Create Scheduled Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create scheduled pipeline
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Daily Report Generator',
    description: 'Generates daily summary reports',
    trigger: 'onSchedule',
    trigger_config: {
        schedule: '0 9 * * *', // Cron: 9 AM daily
        timezone: 'UTC'
    },
    processors: [
        {
            type: 'aggregate',
            config: {
                period: '24h',
                metrics: ['count', 'avg', 'sum']
            }
        },
        {
            type: 'llm_summarize',
            config: {
                template: 'Daily Summary:\n{aggregated_data}',
                style: 'professional'
            }
        }
    ],
    routing: {
        destination: 'kv',
        destination_id: 'daily-reports',
        field_mapping: {
            date: 'key',
            summary: 'value'
        }
    }
});

console.log('✅ Scheduled pipeline created');
```

#### Create Agent Completion Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create pipeline that triggers on agent completion
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Agent Output Processor',
    description: 'Processes and stores agent outputs',
    trigger: 'onAgentComplete',
    trigger_config: {
        agent_types: ['coder', 'analyzer'],
        include_metadata: true
    },
    processors: [
        {
            type: 'filter',
            config: {
                filter_expression: 'output.status == "success"'
            }
        },
        {
            type: 'transform',
            config: {
                add_fields: {
                    processed_at: '{timestamp}',
                    agent_type: '{agent.type}'
                }
            }
        },
        {
            type: 'embed',
            config: { model: 'text-embedding-ada-002' }
        }
    ],
    routing: {
        destination: 'vectordb',
        destination_id: 'agent-outputs',
        field_mapping: {
            output: 'text',
            metadata: 'metadata'
        }
    }
});

console.log('✅ Agent output pipeline created');
```

#### Create Pipeline with Knowledge Graph Routing

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create pipeline that routes to knowledge graph
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Entity Extractor',
    description: 'Extracts entities and stores in knowledge graph',
    trigger: 'onConversationEnd',
    processors: [
        {
            type: 'llm_extract',
            config: {
                extract: ['entities', 'relationships'],
                model: 'gpt-4',
                prompt_template: 'Extract entities and relationships from: {text}'
            }
        },
        {
            type: 'transform',
            config: {
                format_for: 'knowledge_graph'
            }
        }
    ],
    routing: {
        destination: 'kg',
        destination_id: 'entity-graph',
        field_mapping: {
            entities: 'nodes',
            relationships: 'edges'
        }
    }
});

console.log('✅ Entity extraction pipeline created');
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

async function createPipelineWithErrorHandling(config) {
    await codebolt.waitForReady();

    try {
        // Validate required fields
        if (!config.label) {
            throw new Error('Label is required');
        }

        if (!config.trigger) {
            throw new Error('Trigger is required');
        }

        if (!config.processors || config.processors.length === 0) {
            throw new Error('At least one processor is required');
        }

        if (!config.routing || !config.routing.destination) {
            throw new Error('Routing configuration is required');
        }

        const result = await codebolt.memoryIngestion.create(config);

        if (!result.success) {
            throw new Error(result.error || 'Pipeline creation failed');
        }

        console.log('✅ Pipeline created successfully');
        return result.data.pipeline;

    } catch (error) {
        console.error('Error creating pipeline:', error.message);
        return null;
    }
}

// Usage
const pipeline = await createPipelineWithErrorHandling({
    label: 'Test Pipeline',
    trigger: 'manual',
    processors: [
        { type: 'filter', config: {} }
    ],
    routing: {
        destination: 'kv',
        destination_id: 'test-store'
    }
});
```

### Response Structure

```js
{
    type: 'memoryIngestion.create',
    success: boolean,
    data?: {
        pipeline: {
            id: string,
            label: string,
            description?: string,
            status: 'active' | 'disabled' | 'draft',
            trigger: IngestionTrigger,
            trigger_config?: Record<string, any>,
            processors: IngestionProcessor[],
            routing: IngestionRouting,
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

**1. Content Processing**
Process and structure content from various sources.

**2. Data Extraction**
Extract and route specific data fields.

**3. Summarization**
Summarize long content for storage.

**4. Embedding Generation**
Generate embeddings for semantic search.

**5. Data Routing**
Route processed data to appropriate storage.

### Notes

- Triggers: onConversationEnd, onAgentComplete, onFileChange, onSchedule, manual
- Processors: llm_extract, llm_summarize, filter, transform, aggregate, split, embed
- Destinations: vectordb, kv, eventlog, kg
- Processors execute in order based on their 'order' field
- Field mapping controls how data is structured at the destination
- Pipelines start in 'draft' status and must be activated
- Trigger config varies by trigger type
- Processor configs are specific to each processor type
- Consider performance when chaining multiple processors