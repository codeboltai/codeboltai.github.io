---
name: executeRetrieval
cbbaseinfo:
  description: Executes a persistent memory retrieval pipeline with context and returns formatted results.
cbparameters:
  parameters:
    - name: memoryId
      typeName: string
      description: The ID of the persistent memory to execute.
    - name: intent
      typeName: PipelineExecutionIntent
      description: Execution intent with context and query information.
      nested:
        - name: keywords
          typeName: "string[] | undefined"
          description: Optional keywords for search relevance.
        - name: action
          typeName: "string | undefined"
          description: Optional action context for retrieval.
        - name: context
          typeName: "Record<string, any> | undefined"
          description: Additional context variables for the query.
        - name: query
          typeName: "string | undefined"
          description: The query string for retrieval.
  returns:
    signatureTypeName: "Promise<PersistentMemoryExecuteResponse>"
    description: A promise that resolves to retrieval results.
    typeArgs: []
data:
  name: executeRetrieval
  category: persistentMemory
  link: executeRetrieval.md
---
# executeRetrieval

```typescript
codebolt.persistentMemory.executeRetrieval(memoryId: string, intent: PipelineExecutionIntent): Promise<PersistentMemoryExecuteResponse>
```

Executes a persistent memory retrieval pipeline with context and returns formatted results.
### Parameters

- **`memoryId`** (string): The ID of the persistent memory to execute.
- **`intent`** ([PipelineExecutionIntent](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/PipelineExecutionIntent)): Execution intent with context and query information.

### Returns

- **`Promise<[PersistentMemoryExecuteResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/PersistentMemoryExecuteResponse)>`**: A promise that resolves to retrieval results.

### Examples

#### Basic Retrieval Execution

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Execute a simple retrieval
const result = await codebolt.persistentMemory.executeRetrieval(
    'memory-123',
    {
        query: 'How do I implement authentication?'
    }
);

if (result.success) {
    console.log('✅ Retrieval successful');
    console.log('Results:', result.data.result);
}
```

#### Execute with Context

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Execute with detailed context
const result = await codebolt.persistentMemory.executeRetrieval(
    'memory-123',
    {
        query: 'Best practices for API design',
        context: {
            project: 'E-commerce Platform',
            stack: ['Node.js', 'Express', 'MongoDB'],
            stage: 'development'
        },
        action: 'code_review'
    }
);

console.log('Retrieval with context:', result.data.result);
```

#### Execute with Keywords

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Execute with keywords for better matching
const result = await codebolt.persistentMemory.executeRetrieval(
    'memory-123',
    {
        query: 'Database optimization techniques',
        keywords: ['performance', 'mongodb', 'indexing', 'query']
    }
);

console.log('Retrieval results:', result.data.result);
```

#### Execute for Code Context

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Retrieve code-related context
const result = await codebolt.persistentMemory.executeRetrieval(
    'code-memory-123',
    {
        query: 'Error handling in async functions',
        context: {
            language: 'typescript',
            framework: 'express',
            file: 'auth.ts'
        },
        action: 'code_assist'
    }
);

if (result.success) {
    console.log('Code context retrieved');
    // Use the result to provide intelligent assistance
}
```

#### Execute with Multiple Context Variables

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Complex execution with extensive context
const result = await codebolt.persistentMemory.executeRetrieval(
    'memory-123',
    {
        query: 'User onboarding flow',
        context: {
            user_id: 'user-456',
            current_step: 'verification',
            previous_steps: ['signup', 'email_confirmation'],
            user_segment: 'enterprise',
            a_b_test_group: 'B'
        },
        action: 'user_guidance',
        keywords: ['onboarding', 'verification', 'enterprise']
    }
);

console.log('Guidance retrieved:', result.data.result);
```

#### Handle Retrieval Errors

```js
import codebolt from '@codebolt/codeboltjs';

async function executeRetrievalWithErrorHandling(memoryId, intent) {
    await codebolt.waitForReady();

    try {
        // Validate input
        if (!memoryId) {
            throw new Error('Memory ID is required');
        }

        if (!intent.query && !intent.keywords) {
            throw new Error('Query or keywords are required');
        }

        const result = await codebolt.persistentMemory.executeRetrieval(
            memoryId,
            intent
        );

        if (!result.success) {
            console.error('Retrieval failed:', result.error);
            return null;
        }

        if (!result.data.result.success) {
            console.error('Execution error:', result.data.result.error);
            return null;
        }

        console.log(`✅ Retrieval completed in ${result.data.result.executionTime}ms`);
        return result.data.result;

    } catch (error) {
        console.error('Error executing retrieval:', error.message);
        return null;
    }
}

// Usage
const result = await executeRetrievalWithErrorHandling(
    'memory-123',
    {
        query: 'How to handle errors in TypeScript?',
        context: { language: 'typescript' }
    }
);

if (result) {
    console.log('Retrieved data:', result.data);
}
```

#### Execute Multiple Retrievals in Parallel

```js
import codebolt from '@codebolt/codeboltjs';

async function executeMultipleRetrievals(memoryId, queries) {
    await codebolt.waitForReady();

    const retrievals = queries.map(query =>
        codebolt.persistentMemory.executeRetrieval(memoryId, { query })
    );

    const results = await Promise.all(retrievals);

    return results.map((result, index) => ({
        query: queries[index],
        success: result.success,
        data: result.data?.result
    }));
}

// Usage
const results = await executeMultipleRetrievals(
    'memory-123',
    [
        'How to implement caching?',
        'Database connection pooling',
        'API rate limiting strategies'
    ]
);

results.forEach(r => {
    console.log(`${r.query}: ${r.success ? '✅' : '❌'}`);
});
```

### Response Structure

```js
{
    type: 'persistentMemory.executeRetrieval',
    success: boolean,
    data?: {
        result: {
            success: boolean,
            data?: any,
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

**1. Context Provisioning**
Provide relevant context to agents for task completion.

**2. Knowledge Retrieval**
Retrieve stored knowledge and information.

**3. Decision Support**
Support decision-making with historical data.

**4. User Assistance**
Provide intelligent assistance based on stored information.

**5. Data Enrichment**
Enrich current context with relevant historical data.

### Notes

- Query and keywords are used for search relevance
- Context variables are substituted into query templates
- Action can influence how results are formatted
- Execution time is reported in milliseconds
- Results are formatted according to the contribution config
- Empty results are possible if no matches are found
- Consider cache frequently used queries for performance
- The intent structure is flexible and extensible
- Error handling should account for both API and execution errors
