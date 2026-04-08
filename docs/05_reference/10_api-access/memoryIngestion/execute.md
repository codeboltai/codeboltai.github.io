---
name: execute
cbbaseinfo:
  description: Executes a memory ingestion pipeline to process and route data.
cbparameters:
  parameters:
    - name: params
      typeName: ExecuteIngestionParams
      description: Execution parameters containing pipeline ID and data.
      nested:
        - name: pipelineId
          typeName: string
          description: "The ID of the pipeline to execute (required)."
        - name: eventType
          typeName: "string | undefined"
          description: Optional event type for context.
        - name: trigger
          typeName: "string | undefined"
          description: Optional trigger identifier.
        - name: threadId
          typeName: "string | undefined"
          description: Optional thread ID for context.
        - name: agentId
          typeName: "string | undefined"
          description: Optional agent ID for context.
        - name: swarmId
          typeName: "string | undefined"
          description: Optional swarm ID for context.
        - name: projectId
          typeName: "string | undefined"
          description: Optional project ID for context.
        - name: payload
          typeName: "Record<string, any> | undefined"
          description: "The data payload to process (required)."
  returns:
    signatureTypeName: "Promise<IngestionExecuteResponse>"
    description: A promise that resolves to execution results.
    typeArgs: []
data:
  name: execute
  category: memoryIngestion
  link: execute.md
---
# execute

```typescript
codebolt.memoryIngestion.execute(params: ExecuteIngestionParams): Promise<IngestionExecuteResponse>
```

Executes a memory ingestion pipeline to process and route data.
### Parameters

- **`params`** ([ExecuteIngestionParams](/docs/reference/type-reference/codeboltjs/interfaces/ExecuteIngestionParams)): Execution parameters containing pipeline ID and data.

### Returns

- **`Promise<[IngestionExecuteResponse](/docs/reference/type-reference/codeboltjs/interfaces/IngestionExecuteResponse)>`**: A promise that resolves to execution results.

### Examples

#### Basic Pipeline Execution

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Execute a pipeline with data
const result = await codebolt.memoryIngestion.execute({
    pipelineId: 'pipeline-123',
    payload: {
        text: 'This is the content to process...'
    }
});

if (result.success) {
    console.log('✅ Pipeline executed');
    console.log('Processed:', result.data.result.processedCount);
    console.log('Routed:', result.data.result.routedCount);
}
```

#### Execute with Full Context

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Execute with complete context
const result = await codebolt.memoryIngestion.execute({
    pipelineId: 'pipeline-123',
    eventType: 'conversation_end',
    trigger: 'manual',
    threadId: 'thread-456',
    agentId: 'agent-789',
    swarmId: 'swarm-001',
    projectId: 'project-abc',
    payload: {
        conversation: {
            messages: [
                { role: 'user', content: 'Hello' },
                { role: 'assistant', content: 'Hi there!' }
            ],
            summary: 'Greeting exchange',
            duration: 30
        }
    }
});

console.log('Execution result:', result.data.result);
```

#### Execute Document Processing Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Process a document through pipeline
const result = await codebolt.memoryIngestion.execute({
    pipelineId: 'doc-processor-123',
    eventType: 'file_change',
    payload: {
        file: 'README.md',
        content: '# Project Documentation\n\nThis is the documentation...',
        language: 'markdown',
        size: 2048
    }
});

if (result.success) {
    console.log('Document processed successfully');
    console.log('Execution time:', result.data.result.executionTime, 'ms');
}
```

#### Execute Conversation Summarization

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Summarize a conversation
const result = await codebolt.memoryIngestion.execute({
    pipelineId: 'summarizer-123',
    eventType: 'conversation_end',
    threadId: 'thread-789',
    payload: {
        conversation_history: [
            { speaker: 'User', text: 'How do I implement caching?' },
            { speaker: 'Assistant', text: 'You can use Redis...' },
            { speaker: 'User', text: 'What about in-memory caching?' },
            { speaker: 'Assistant', text: 'Node.js has built-in...' }
        ],
        metadata: {
            topic: 'caching',
            language: 'javascript',
            resolved: true
        }
    }
});

console.log('Summary generated:', result.data.result);
```

#### Execute with Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

async function executePipelineWithErrorHandling(params) {
    await codebolt.waitForReady();

    try {
        // Validate inputs
        if (!params.pipelineId) {
            throw new Error('Pipeline ID is required');
        }

        if (!params.payload) {
            throw new Error('Payload is required');
        }

        const result = await codebolt.memoryIngestion.execute(params);

        if (!result.success) {
            throw new Error(result.error || 'Execution failed');
        }

        if (!result.data.result.success) {
            throw new Error(result.data.result.error || 'Processing failed');
        }

        console.log(`✅ Pipeline executed in ${result.data.result.executionTime}ms`);
        console.log(`Processed ${result.data.result.processedCount} items`);
        console.log(`Routed ${result.data.result.routedCount} items`);

        return result.data.result;

    } catch (error) {
        console.error('Pipeline execution error:', error.message);
        return null;
    }
}

// Usage
const result = await executePipelineWithErrorHandling({
    pipelineId: 'pipeline-123',
    payload: { data: 'example' }
});
```

#### Execute Multiple Pipelines

```js
import codebolt from '@codebolt/codeboltjs';

async function executeMultiplePipelines(executions) {
    await codebolt.waitForReady();

    const results = await Promise.all(
        executions.map(exec =>
            codebolt.memoryIngestion.execute(exec)
        )
    );

    return results.map((result, index) => ({
        pipelineId: executions[index].pipelineId,
        success: result.success,
        processed: result.data?.result.processedCount,
        routed: result.data?.result.routedCount,
        executionTime: result.data?.result.executionTime
    }));
}

// Usage
const results = await executeMultiplePipelines([
    {
        pipelineId: 'summarizer-123',
        payload: { text: 'Document 1 content...' }
    },
    {
        pipelineId: 'embedder-456',
        payload: { text: 'Document 2 content...' }
    },
    {
        pipelineId: 'extractor-789',
        payload: { text: 'Document 3 content...' }
    }
]);

console.log('Batch execution results:', results);
```

#### Execute Data Import Pipeline

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Import external data through pipeline
const result = await codebolt.memoryIngestion.execute({
    pipelineId: 'import-pipeline-123',
    trigger: 'manual',
    projectId: 'project-abc',
    payload: {
        source: 'external_api',
        data: [
            { id: 1, name: 'Item 1', category: 'A' },
            { id: 2, name: 'Item 2', category: 'B' },
            { id: 3, name: 'Item 3', category: 'A' }
        ],
        metadata: {
            import_time: new Date().toISOString(),
            source_url: 'https://api.example.com/data'
        }
    }
});

if (result.success) {
    console.log('Data import completed');
    console.log('Items processed:', result.data.result.processedCount);
}
```

### Response Structure

```js
{
    type: 'memoryIngestion.execute',
    success: boolean,
    data?: {
        result: {
            success: boolean,
            pipelineId: string,
            processedCount?: number,
            routedCount?: number,
            error?: string,
            executionTime?: number
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
Process content through transformation pipelines.

**2. Data Import**
Import and process external data sources.

**3. Summarization**
Generate summaries of long content.

**4. Embedding Generation**
Create embeddings for semantic search.

**5. Batch Processing**
Process multiple items efficiently.

### Notes

- The pipeline must be in 'active' status to execute
- Payload structure should match pipeline expectations
- Context parameters (threadId, agentId, etc.) are used for logging and routing
- processedCount indicates how many items were processed
- routedCount indicates how many items were successfully routed
- executionTime is measured in milliseconds
- Consider implementing retry logic for failed executions
- Large payloads may take longer to process
- The result structure depends on the pipeline configuration