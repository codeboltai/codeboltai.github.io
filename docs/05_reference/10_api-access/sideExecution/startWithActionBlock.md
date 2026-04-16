---
name: startWithActionBlock
cbbaseinfo:
  description: Starts a side execution process using an ActionBlock directory path.
cbparameters:
  parameters:
    - name: actionBlockPath
      typeName: string
      description: The file system path to the ActionBlock directory.
      isOptional: false
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the ActionBlock execution context.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Execution timeout in milliseconds (default: 5 minutes)."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartSideExecutionResponse>"
    description: A promise that resolves with the side execution ID and initial status.
    typeArgs: []
data:
  name: startWithActionBlock
  category: sideExecution
  link: startWithActionBlock.md
---
# startWithActionBlock

```typescript
codebolt.sideExecution.startWithActionBlock(actionBlockPath: string, params: Record<string, any>, timeout: number): Promise<StartSideExecutionResponse>
```

Starts a side execution process using an ActionBlock directory path.
### Parameters

- **`actionBlockPath`** (string): The file system path to the ActionBlock directory.
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the ActionBlock execution context.
- **`timeout`** (number, optional): Execution timeout in milliseconds (default: 5 minutes).

### Returns

- **`Promise<[StartSideExecutionResponse](/docs/reference/type-reference/codeboltjs/interfaces/StartSideExecutionResponse)>`**: A promise that resolves with the side execution ID and initial status.

### Response Structure

The method returns a Promise that resolves to a [`StartSideExecutionResponse`](/docs/reference/type-reference/codeboltjs/interfaces/StartSideExecutionResponse) object with the following properties:

**Response Properties:**
- `type`: Always "startSideExecutionResponse"
- `data`: Object containing the execution details
  - `sideExecutionId`: Unique identifier for the execution
  - `actionBlock`: The ActionBlock path or name
  - `status`: Current status ('running', 'completed', 'failed', etc.)
  - `startTime`: Timestamp when execution started
  - `params`: Parameters passed to the execution
  - `timeout`: Timeout in milliseconds
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Basic ActionBlock Execution

```js
// Wait for connection
await codebolt.waitForReady();

// Start an ActionBlock execution
const result = await codebolt.sideExecution.startWithActionBlock(
  '/path/to/my-actionblock'
);
console.log('✅ Execution started:', result.data.sideExecutionId);
console.log('Status:', result.data.status);
```

**Explanation**: This is the simplest way to start an ActionBlock execution. The ActionBlock at the specified path will be executed in an isolated child process with default timeout settings.

#### Example 2: Execute with Parameters

```js
// Start ActionBlock with custom parameters
const result = await codebolt.sideExecution.startWithActionBlock(
  '/processors/data-transform',
  {
    inputFile: '/data/input.json',
    outputFile: '/data/output.json',
    transformType: 'csv-to-json',
    batchSize: 1000
  }
);
console.log('✅ Data transform started:', result.data.sideExecutionId);
console.log('Parameters:', result.data.params);
```

**Explanation**: This example passes parameters to the ActionBlock. These parameters are available in the execution context and can be used to configure the ActionBlock's behavior.

#### Example 3: Custom Timeout

```js
// Start a long-running ActionBlock with extended timeout
const result = await codebolt.sideExecution.startWithActionBlock(
  '/jobs/data-sync',
  { source: 'production', target: 'backup' },
  600000 // 10 minutes
);
console.log('✅ Long job started with 10-minute timeout');
```

**Explanation**: For long-running tasks, you can specify a custom timeout in milliseconds. The default timeout is 5 minutes (300000ms).

#### Example 4: Monitor Execution Progress

```js
// Start execution and monitor progress
async function executeWithMonitoring(actionBlockPath, params) {
  // Start the execution
  const startResult = await codebolt.sideExecution.startWithActionBlock(
    actionBlockPath,
    params,
    300000
  );

  const executionId = startResult.data.sideExecutionId;
  console.log('🚀 Execution started:', executionId);

  // Poll for status updates
  let status;
  let attempts = 0;
  const maxAttempts = 60; // Check for up to 5 minutes

  while (attempts < maxAttempts) {
    const statusResult = await codebolt.sideExecution.getStatus(executionId);
    status = statusResult.data;

    console.log(`⏳ Status: ${status.status} (Attempt ${attempts + 1})`);

    if (status.status === 'completed' || status.status === 'failed' || status.status === 'stopped') {
      break;
    }

    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
    attempts++;
  }

  console.log('✅ Execution finished:', status.status);
  if (status.result) {
    console.log('Result:', status.result);
  }

  return status;
}

// Usage
const result = await executeWithMonitoring(
  '/processors/batch-process',
  { items: [1, 2, 3, 4, 5] }
);
```

**Explanation**: This example demonstrates how to start an execution and monitor its progress by polling the status until completion.

#### Example 5: Parallel ActionBlock Execution

```js
// Run multiple ActionBlocks in parallel
async function runParallelExecutions(actionBlocks) {
  const executions = await Promise.all(
    actionBlocks.map(block =>
      codebolt.sideExecution.startWithActionBlock(
        block.path,
        block.params,
        block.timeout || 300000
      )
    )
  );

  console.log(`✅ Started ${executions.length} parallel executions`);

  const executionIds = executions.map(e => e.data.sideExecutionId);
  console.log('Execution IDs:', executionIds);

  // Monitor all executions
  const results = await Promise.all(
    executionIds.map(id => codebolt.sideExecution.getStatus(id))
  );

  return results;
}

// Usage
const results = await runParallelExecutions([
  { path: '/tasks/task1', params: { id: 1 } },
  { path: '/tasks/task2', params: { id: 2 } },
  { path: '/tasks/task3', params: { id: 3 }, timeout: 600000 }
]);
```

**Explanation**: This example shows how to run multiple ActionBlocks in parallel, which is useful for processing independent tasks concurrently.

#### Example 6: Error Handling and Recovery

```js
// Start ActionBlock with comprehensive error handling
async function executeWithErrorHandling(actionBlockPath, params, timeout) {
  try {
    const result = await codebolt.sideExecution.startWithActionBlock(
      actionBlockPath,
      params,
      timeout
    );

    if (!result.success) {
      console.error('❌ Failed to start execution:', result.message);
      return null;
    }

    console.log('✅ Execution started:', result.data.sideExecutionId);

    // Wait a bit and check initial status
    await new Promise(resolve => setTimeout(resolve, 2000));

    const status = await codebolt.sideExecution.getStatus(result.data.sideExecutionId);

    if (status.data.status === 'failed') {
      console.error('❌ Execution failed:', status.data.error);
      // Attempt recovery or cleanup
      return { success: false, error: status.data.error };
    }

    return status;

  } catch (error) {
    console.error('❌ Error starting execution:', error.message);

    // Log error for debugging
    console.error('Error details:', {
      actionBlock: actionBlockPath,
      params,
      timeout,
      timestamp: new Date().toISOString()
    });

    return null;
  }
}

// Usage
const result = await executeWithErrorHandling(
  '/risky-operation',
  { mode: 'safe' },
  300000
);
```

**Explanation**: This example demonstrates robust error handling when starting ActionBlock executions, including checking for failures and handling exceptions.

### Common Use Cases

**1. Data Processing Pipeline**: Execute data transformation tasks.

```js
async function runDataPipeline(source, destination) {
  const stages = [
    { path: '/pipelines/validate', params: { source } },
    { path: '/pipelines/transform', params: { format: 'json' } },
    { path: '/pipelines/load', params: { destination } }
  ];

  for (const stage of stages) {
    console.log(`Running stage: ${stage.path}`);
    const result = await codebolt.sideExecution.startWithActionBlock(
      stage.path,
      stage.params
    );

    // Wait for completion
    let status = await codebolt.sideExecution.getStatus(result.data.sideExecutionId);
    while (status.data.status === 'running') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      status = await codebolt.sideExecution.getStatus(result.data.sideExecutionId);
    }

    if (status.data.status !== 'completed') {
      throw new Error(`Pipeline stage failed: ${stage.path}`);
    }
  }

  console.log('✅ Pipeline completed successfully');
}
```

**2. Scheduled Tasks**: Run periodic maintenance tasks.

```js
async function runScheduledTask(taskConfig) {
  console.log(`Starting scheduled task: ${taskConfig.name}`);

  const result = await codebolt.sideExecution.startWithActionBlock(
    taskConfig.actionBlock,
    taskConfig.params,
    taskConfig.timeout
  );

  console.log(`Task ${taskConfig.name} started:`, result.data.sideExecutionId);

  // Store execution ID for monitoring
  return result.data.sideExecutionId;
}

// Usage
await runScheduledTask({
  name: 'daily-backup',
  actionBlock: '/maintenance/backup',
  params: { type: 'incremental' },
  timeout: 600000
});
```

**3. Testing and Validation**: Run test suites in isolation.

```js
async function runTestSuite(testPath) {
  console.log(`Running tests: ${testPath}`);

  const result = await codebolt.sideExecution.startWithActionBlock(
    '/tests/run-suite',
    { testPath, reporter: 'json' },
    300000
  );

  const executionId = result.data.sideExecutionId;

  // Wait for completion
  let status;
  do {
    await new Promise(resolve => setTimeout(resolve, 2000));
    status = await codebolt.sideExecution.getStatus(executionId);
    console.log('Test status:', status.data.status);
  } while (status.data.status === 'running');

  if (status.data.status === 'completed') {
    console.log('✅ Tests passed');
    return status.data.result;
  } else {
    console.error('❌ Tests failed:', status.data.error);
    return null;
  }
}
```

**4. Batch Processing**: Process items in batches.

```js
async function processBatch(items, actionBlockPath) {
  const batchSize = 100;
  const batches = [];

  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  console.log(`Processing ${items.length} items in ${batches.length} batches`);

  const results = [];
  for (const [index, batch] of batches.entries()) {
    console.log(`Processing batch ${index + 1}/${batches.length}`);

    const result = await codebolt.sideExecution.startWithActionBlock(
      actionBlockPath,
      { items: batch, batchIndex: index }
    );

    results.push(result.data.sideExecutionId);
  }

  return results;
}
```

### Notes

- The `actionBlockPath` must be a valid path to an ActionBlock directory
- ActionBlock directories must contain an `index.js` file as the entry point
- The default timeout is 300000 milliseconds (5 minutes)
- Parameters passed to the ActionBlock are available in the execution context
- The side execution runs in an isolated child process
- The `sideExecutionId` is required to check status or stop the execution
- Multiple executions can run simultaneously
- Execution output (stdout/stderr) can be retrieved via the `getStatus` method
- If the ActionBlock path doesn't exist, the operation will fail
- The ActionBlock has access to its own dependencies specified in its package.json
- System resources (CPU, memory) are shared between the main process and side executions
- Long-running executions should be monitored and stopped if no longer needed
- The ActionBlock can return data which will be available in the status result
- Timeouts are enforced to prevent runaway processes
