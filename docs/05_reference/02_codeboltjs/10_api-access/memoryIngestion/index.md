---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/memoryingestion/create
    description: Creates a new memory ingestion pipeline.
  - name: get
    link: /docs/api/apiaccess/memoryingestion/get
    description: Gets an ingestion pipeline by ID.
  - name: list
    link: /docs/api/apiaccess/memoryingestion/list
    description: Lists ingestion pipelines with optional filters.
  - name: update
    link: /docs/api/apiaccess/memoryingestion/update
    description: Updates an ingestion pipeline.
  - name: delete
    link: /docs/api/apiaccess/memoryingestion/delete
    description: Deletes an ingestion pipeline.
  - name: execute
    link: /docs/api/apiaccess/memoryingestion/execute
    description: Executes an ingestion pipeline.
  - name: validate
    link: /docs/api/apiaccess/memoryingestion/validate
    description: Validates a pipeline configuration.
  - name: getProcessorSpecs
    link: /docs/api/apiaccess/memoryingestion/getProcessorSpecs
    description: Gets available processor specifications.
  - name: activate
    link: /docs/api/apiaccess/memoryingestion/activate
    description: Activates an ingestion pipeline.
  - name: disable
    link: /docs/api/apiaccess/memoryingestion/disable
    description: Disables an ingestion pipeline.
  - name: duplicate
    link: /docs/api/apiaccess/memoryingestion/duplicate
    description: Duplicates an ingestion pipeline.
---
# Memory Ingestion API

The Memory Ingestion API provides automated pipeline capabilities for processing and routing data into various memory stores, enabling intelligent memory management and data flow control.

## Overview

The memory ingestion module enables you to:
- **Pipelines**: Create configurable data processing pipelines
- **Processors**: Chain multiple processing steps (LLM extraction, summarization, filtering, etc.)
- **Triggers**: Define when pipelines run (on events, schedule, manual)
- **Routing**: Route processed data to various destinations (vectordb, KV, eventlog, KG)
- **Lifecycle**: Manage pipeline activation and duplication

## Quick Start Example

```js
// Wait for connection
await codebolt.waitForReady();

// Create an ingestion pipeline
const pipeline = await codebolt.memoryIngestion.create({
    label: 'Conversation Summary Pipeline',
    description: 'Summarizes conversations and stores in vector DB',
    trigger: 'onConversationEnd',
    trigger_config: {
        min_length: 5,
        include_metadata: true
    },
    processors: [
        {
            type: 'llm_summarize',
            config: {
                model: 'gpt-4',
                max_length: 500,
                style: 'concise'
            },
            order: 1
        },
        {
            type: 'embed',
            config: {
                model: 'text-embedding-ada-002'
            },
            order: 2
        }
    ],
    routing: {
        destination: 'vectordb',
        destination_id: 'conversation-vectors',
        field_mapping: {
            summary: 'text',
            timestamp: 'metadata.timestamp'
        }
    }
});

// Activate the pipeline
await codebolt.memoryIngestion.activate(pipeline.data.pipeline.id);

// Execute manually
const result = await codebolt.memoryIngestion.execute({
    pipelineId: pipeline.data.pipeline.id,
    eventType: 'conversation_end',
    threadId: 'thread-123',
    payload: {
        conversation: '... conversation text ...'
    }
});

console.log('Processed:', result.data.result.processedCount);
```

## Response Structure

All memory ingestion API functions return responses with a consistent structure:

```js
{
    type: string,
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
        },
        result?: {
            success: boolean,
            pipelineId: string,
            processedCount?: number,
            routedCount?: number,
            executionTime?: number
        }
    },
    message?: string,
    error?: string,
    timestamp: string,
    requestId: string
}
```

## Key Concepts

### Triggers
Define when pipelines execute:
- **onConversationEnd**: After a conversation completes
- **onAgentComplete**: When an agent finishes a task
- **onFileChange**: When files are modified
- **onSchedule**: On a time-based schedule
- **manual**: Triggered manually via API

### Processors
Processing steps that transform data:
- **llm_extract**: Extract information using LLM
- **llm_summarize**: Summarize content using LLM
- **filter**: Filter data based on criteria
- **transform**: Transform data structure
- **aggregate**: Aggregate multiple records
- **split**: Split data into chunks
- **embed**: Generate embeddings

### Routing Destinations
Where processed data is sent:
- **vectordb**: Vector similarity database
- **kv**: Key-value store
- **eventlog**: Event log
- **kg**: Knowledge graph

### Pipeline Status
- **active**: Pipeline is running and processing
- **disabled**: Pipeline is paused
- **draft**: Pipeline is in development

### Field Mapping
Maps processed fields to destination schema.

<CBAPICategory />
