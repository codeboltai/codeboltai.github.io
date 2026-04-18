---
name: stop
cbbaseinfo:
  description: Stops a running side execution process.
cbparameters:
  parameters:
    - name: sideExecutionId
      typeName: string
      description: The unique identifier of the side execution to stop.
      isOptional: false
  returns:
    signatureTypeName: "Promise<StopSideExecutionResponse>"
    description: A promise that resolves when the execution is stopped.
    typeArgs: []
data:
  name: stop
  category: sideExecution
  link: stop.md
---
# stop

```typescript
codebolt.sideExecution.stop(sideExecutionId: string): Promise<StopSideExecutionResponse>
```

Stops a running side execution process.
### Parameters

- **`sideExecutionId`** (string): The unique identifier of the side execution to stop.

### Returns

- **`Promise<[StopSideExecutionResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/StopSideExecutionResponse)>`**: A promise that resolves when the execution is stopped.

### Response Structure

The method returns a Promise that resolves to a [`StopSideExecutionResponse`](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/StopSideExecutionResponse) object with the following properties:

**Response Properties:**
- `type`: Always "stopSideExecutionResponse"
- `data`: Object containing the stop operation details
  - `sideExecutionId`: The ID of the execution that was stopped
  - `status`: The final status ('stopped', 'already_stopped', or error state)
  - `stoppedAt`: Timestamp when the execution was stopped
  - `result`: Partial result if the execution had completed some work
  - `output`: Any output generated before stopping
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Stop a Running Execution

```js
// Wait for connection
await codebolt.waitForReady();

// Start an execution
const started = await codebolt.sideExecution.startWithCode(`
  for (let i = 0; i < 100; i++) {
    console.log(\ Processing item \${i}...\`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return { completed: true };
`);
const executionId = started.data.sideExecutionId;

// Let it run for a bit
await new Promise(resolve => setTimeout(resolve, 3000));

// Stop the execution
const result = await codebolt.sideExecution.stop(executionId);
console.log('✅ Execution stopped:', result.data.sideExecutionId);
console.log('Status:', result.data.status);
```

**Explanation**: This example starts a long-running execution and then stops it after a delay. The stop operation terminates the side process gracefully.

#### Example 2: Stop Multiple Executions

```js
// Start multiple executions
const executionIds = [];
for (let i = 0; i < 5; i++) {
  const result = await codebolt.sideExecution.startWithCode(`
    await new Promise(resolve => setTimeout(resolve, 30000));
    return { done: true };
  `);
  executionIds.push(result.data.sideExecutionId);
}

console.log('Started', executionIds.length, 'executions');

// Stop all of them
const stopResults = await Promise.all(
  executionIds.map(id => codebolt.sideExecution.stop(id))
);

console.log('✅ Stopped all executions');
stopResults.forEach((result, index) => {
  console.log(`Execution ${index + 1}: ${result.data.status}`);
});
```

**Explanation**: This example demonstrates stopping multiple executions simultaneously using Promise.all for efficiency.

#### Example 3: Conditional Stopping

```js
// Start an execution with monitoring
async function executeWithTimeout(executionId, timeoutMs) {
  const startTime = Date.now();

  // Monitor the execution
  const monitor = setInterval(async () => {
    const elapsed = Date.now() - startTime;

    if (elapsed > timeoutMs) {
      clearInterval(monitor);
      console.log('⏱️ Timeout reached, stopping execution...');

      const result = await codebolt.sideExecution.stop(executionId);
      console.log('✅ Execution stopped due to timeout');
      return;
    }

    const status = await codebolt.sideExecution.getStatus(executionId);

    if (status.data.status === 'completed' || status.data.status === 'failed') {
      clearInterval(monitor);
      console.log('✅ Execution finished naturally');
      return;
    }

    console.log(`⏳ Running... (${Math.floor(elapsed / 1000)}s elapsed)`);

  }, 1000);
}

// Usage
const execution = await codebolt.sideExecution.startWithCode(`
  await new Promise(resolve => setTimeout(resolve, 60000));
  return { done: true };
`);

await executeWithTimeout(execution.data.sideExecutionId, 10000); // 10 second timeout
```

**Explanation**: This example implements a timeout mechanism that automatically stops an execution if it runs too long.

#### Example 4: Stop with Cleanup

```js
// Start execution that needs cleanup
const execution = await codebolt.sideExecution.startWithCode(`
  // Simulate resource usage
  const resources = ['resource1', 'resource2', 'resource3'];

  try {
    await new Promise(resolve => setTimeout(resolve, 30000));
    return { success: true };
  } finally {
    console.log('Cleaning up resources...');
  }
`);

const executionId = execution.data.sideExecutionId;

// Stop with cleanup handling
async function stopWithCleanup(id) {
  console.log('🛑 Stopping execution...');

  const result = await codebolt.sideExecution.stop(id);

  if (result.success) {
    console.log('✅ Execution stopped successfully');

    // Perform any additional cleanup
    console.log('🧹 Performing additional cleanup...');

    // Log the stop
    console.log('Stopped at:', result.data.stoppedAt);
  } else {
    console.error('❌ Failed to stop execution:', result.error);
  }

  return result;
}

await stopWithCleanup(executionId);
```

**Explanation**: This example shows how to stop an execution and perform cleanup operations afterward.

#### Example 5: Stop and Get Partial Results

```js
// Start a long-running computation
const execution = await codebolt.sideExecution.startWithCode(`
  const results = [];

  for (let i = 0; i < 100; i++) {
    results.push({ index: i, value: i * i });
    console.log(\`Processed \${i + 1}/100\`);
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return { results };
`);

const executionId = execution.data.sideExecutionId;

// Let it run for a bit then stop
await new Promise(resolve => setTimeout(resolve, 3000));

const stopResult = await codebolt.sideExecution.stop(executionId);

if (stopResult.data.output) {
  console.log('📊 Partial output captured:');
  console.log(stopResult.data.output);
}

if (stopResult.data.result) {
  console.log('📈 Partial results:');
  console.log(stopResult.data.result);
}
```

**Explanation**: This example demonstrates capturing partial results when stopping an execution that hasn't completed.

#### Example 6: Batch Stop with Error Handling

```js
// Stop multiple executions with individual error handling
async function batchStop(executionIds) {
  const results = {
    stopped: [],
    failed: [],
    alreadyStopped: []
  };

  for (const id of executionIds) {
    try {
      const result = await codebolt.sideExecution.stop(id);

      if (result.data.status === 'stopped') {
        results.stopped.push(id);
        console.log(`✅ Stopped execution: ${id}`);
      } else if (result.data.status === 'already_stopped') {
        results.alreadyStopped.push(id);
        console.log(`ℹ️ Execution already stopped: ${id}`);
      } else {
        results.failed.push({ id, reason: result.data.status });
        console.log(`⚠️ Unexpected status for ${id}: ${result.data.status}`);
      }

    } catch (error) {
      results.failed.push({ id, error: error.message });
      console.error(`❌ Failed to stop ${id}:`, error.message);
    }
  }

  console.log('\\n📊 Batch Stop Summary:');
  console.log(`  Stopped: ${results.stopped.length}`);
  console.log(`  Already stopped: ${results.alreadyStopped.length}`);
  console.log(`  Failed: ${results.failed.length}`);

  return results;
}

// Usage
const ids = ['id1', 'id2', 'id3', 'id4', 'id5'];
await batchStop(ids);
```

**Explanation**: This example provides a robust batch stopping function with comprehensive error handling and reporting.

### Common Use Cases

**1. Timeout Enforcement**: Prevent runaway processes.

```js
async function executeWithTimeout(actionBlockPath, params, timeoutMs) {
  const result = await codebolt.sideExecution.startWithActionBlock(
    actionBlockPath,
    params,
    timeoutMs
  );

  const executionId = result.data.sideExecutionId;

  // Set timeout
  const timeoutHandle = setTimeout(async () => {
    console.log('⏱️ Timeout reached, stopping execution...');
    await codebolt.sideExecution.stop(executionId);
  }, timeoutMs);

  // Wait for completion
  let status;
  do {
    await new Promise(resolve => setTimeout(resolve, 500));
    status = await codebolt.sideExecution.getStatus(executionId);
  } while (status.data.status === 'running');

  clearTimeout(timeoutHandle);

  return status.data;
}
```

**2. User Cancellation**: Allow users to cancel operations.

```js
async function cancellableExecution(actionBlockPath, onCancel) {
  const result = await codebolt.sideExecution.startWithActionBlock(actionBlockPath);
  const executionId = result.data.sideExecutionId;

  // Setup cancellation handler
  const cancelHandler = () => {
    console.log('🛑 Cancelling execution...');
    codebolt.sideExecution.stop(executionId);
  };

  // Register callback
  onCancel(cancelHandler);

  // Wait for completion
  let status = await codebolt.sideExecution.getStatus(executionId);
  while (status.data.status === 'running') {
    await new Promise(resolve => setTimeout(resolve, 500));
    status = await codebolt.sideExecution.getStatus(executionId);
  }

  return status.data;
}
```

**3. Resource Cleanup**: Stop executions when no longer needed.

```js
async function executeWithAutoCleanup(actionBlockPath) {
  const execution = await codebolt.sideExecution.startWithActionBlock(actionBlockPath);
  const executionId = execution.data.sideExecutionId;

  try {
    // Wait for completion
    let status = await codebolt.sideExecution.getStatus(executionId);
    while (status.data.status === 'running') {
      await new Promise(resolve => setTimeout(resolve, 500));
      status = await codebolt.sideExecution.getStatus(executionId);
    }

    return status.data;

  } finally {
    // Ensure cleanup even if errors occur
    const finalStatus = await codebolt.sideExecution.getStatus(executionId);
    if (finalStatus.data.status === 'running') {
      console.log('🧹 Cleaning up: stopping execution...');
      await codebolt.sideExecution.stop(executionId);
    }
  }
}
```

**4. Conditional Stopping**: Stop based on conditions.

```js
async function executeWithCondition(actionBlockPath, condition) {
  const execution = await codebolt.sideExecution.startWithActionBlock(actionBlockPath);
  const executionId = execution.data.sideExecutionId;

  const monitor = setInterval(async () => {
    const status = await codebolt.sideExecution.getStatus(executionId);

    // Check custom condition
    if (await condition(status.data)) {
      clearInterval(monitor);
      console.log('🛑 Condition met, stopping execution...');
      await codebolt.sideExecution.stop(executionId);
    }

    if (status.data.status !== 'running') {
      clearInterval(monitor);
    }

  }, 1000);

  return executionId;
}

// Usage: Stop if memory usage is too high
await executeWithCondition('/tasks/memory-intensive', async (status) => {
  return status.memoryUsage > 1000000000; // 1GB
});
```

**5. Emergency Stop**: Stop all running executions.

```js
async function emergencyStop() {
  // List all executions (you'd need a way to track this)
  const runningExecutions = await getRunningExecutions();

  console.log(`🚨 Emergency stop: terminating ${runningExecutions.length} executions`);

  const results = await Promise.allSettled(
    runningExecutions.map(id => codebolt.sideExecution.stop(id))
  );

  const stopped = results.filter(r => r.status === 'fulfilled').length;
  const failed = results.filter(r => r.status === 'rejected').length;

  console.log(`✅ Stopped: ${stopped}, Failed: ${failed}`);
}
```

### Notes

- The `sideExecutionId` must be a valid ID from a previous start operation
- Stopping an execution terminates the side process
- Already completed or failed executions cannot be stopped
- The operation is idempotent - stopping an already stopped execution is safe
- Partial results may be available in the response if the execution had progressed
- The stop operation is graceful - the process has a chance to clean up
- Force stopping may be used if graceful stop fails
- The execution's final status will be 'stopped' after successful stop operation
- Output generated before stopping is captured and available in the response
- Stopped executions cannot be resumed
- Resources used by the execution are released after stopping
- If the execution ID doesn't exist, the operation will fail with an error
- The stop operation may take a moment to complete if the process is busy
- Consider implementing cleanup handlers in your code for graceful shutdown
- Multiple stop calls for the same execution are safe
- The stoppedAt timestamp indicates when the stop operation completed
- Child processes spawned by the execution are also terminated
- Any file locks or resources held by the execution are released
