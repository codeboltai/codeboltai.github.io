---
name: getStatus
cbbaseinfo:
  description: Gets the current status and details of a side execution process.
cbparameters:
  parameters:
    - name: sideExecutionId
      typeName: string
      description: The unique identifier of the side execution to query.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GetSideExecutionStatusResponse>"
    description: A promise that resolves with the execution status and details.
    typeArgs: []
data:
  name: getStatus
  category: sideExecution
  link: getStatus.md
---
# getStatus

```typescript
codebolt.sideExecution.getStatus(sideExecutionId: string): Promise<GetSideExecutionStatusResponse>
```

Gets the current status and details of a side execution process.
### Parameters

- **`sideExecutionId`** (string): The unique identifier of the side execution to query.

### Returns

- **`Promise<[GetSideExecutionStatusResponse](/docs/reference/type-reference/codeboltjs/interfaces/GetSideExecutionStatusResponse)>`**: A promise that resolves with the execution status and details.

### Response Structure

The method returns a Promise that resolves to a [`GetSideExecutionStatusResponse`](/docs/reference/type-reference/codeboltjs/interfaces/GetSideExecutionStatusResponse) object with the following properties:

**Response Properties:**
- `type`: Always "getSideExecutionStatusResponse"
- `data`: Object containing the execution status
  - `sideExecutionId`: The execution ID
  - `status`: Current status ('running', 'completed', 'failed', 'stopped')
  - `startTime`: Timestamp when the execution started
  - `endTime`: Timestamp when the execution ended (if completed)
  - `duration`: Duration in milliseconds (if completed)
  - `result`: The return value from the execution (if completed)
  - `output`: Standard output captured from the execution
  - `error`: Error output or error message (if failed)
  - `progress`: Optional progress information (0-100)
  - `memoryUsage`: Memory usage in bytes (if available)
  - `cpuUsage`: CPU usage percentage (if available)
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Check Execution Status

```js
// Wait for connection
await codebolt.waitForReady();

// Start an execution
const started = await codebolt.sideExecution.startWithCode(`
  await new Promise(resolve => setTimeout(resolve, 5000));
  return { message: 'Complete!' };
`);

const executionId = started.data.sideExecutionId;

// Check status
const status = await codebolt.sideExecution.getStatus(executionId);
console.log('✅ Execution status:', status.data.status);
console.log('Start time:', status.data.startTime);

if (status.data.result) {
  console.log('Result:', status.data.result);
}
```

**Explanation**: This example retrieves the current status of a side execution, showing whether it's running, completed, or failed.

#### Example 2: Monitor Execution Until Complete

```js
// Start execution and monitor until complete
async function monitorExecution(executionId) {
  console.log('🔍 Monitoring execution:', executionId);

  let status;
  let attempts = 0;
  const maxAttempts = 60; // Prevent infinite loops

  while (attempts < maxAttempts) {
    status = await codebolt.sideExecution.getStatus(executionId);

    console.log(`⏳ Status: ${status.data.status} (Attempt ${attempts + 1})`);

    // Check if execution is finished
    if (status.data.status === 'completed' ||
        status.data.status === 'failed' ||
        status.data.status === 'stopped') {
      console.log('✅ Execution finished');
      break;
    }

    // Wait before checking again
    await new Promise(resolve => setTimeout(resolve, 2000));
    attempts++;
  }

  // Display final results
  if (status.data.status === 'completed') {
    console.log('✅ Execution completed successfully');
    console.log('Duration:', status.data.duration, 'ms');
    if (status.data.result) {
      console.log('Result:', status.data.result);
    }
  } else if (status.data.status === 'failed') {
    console.error('❌ Execution failed');
    console.error('Error:', status.data.error);
  } else if (status.data.status === 'stopped') {
    console.log('🛑 Execution was stopped');
  }

  return status.data;
}

// Usage
const execution = await codebolt.sideExecution.startWithCode(`
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { done: true };
`);

await monitorExecution(execution.data.sideExecutionId);
```

**Explanation**: This example shows how to poll the status of an execution until it completes, displaying progress and final results.

#### Example 3: Real-time Progress Monitoring

```js
// Start execution with progress reporting
async function executeWithProgress(code) {
  const result = await codebolt.sideExecution.startWithCode(code);
  const executionId = result.data.sideExecutionId;

  console.log('🚀 Started execution:', executionId);

  // Monitor with progress display
  const startTime = Date.now();
  let lastProgress = 0;

  const monitor = setInterval(async () => {
    const status = await codebolt.sideExecution.getStatus(executionId);

    // Display progress
    if (status.data.progress !== undefined) {
      const progress = status.data.progress;
      if (progress !== lastProgress) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        console.log(`⏳ Progress: ${progress}% (${elapsed}s elapsed)`);
        lastProgress = progress;
      }
    }

    // Check if complete
    if (status.data.status !== 'running') {
      clearInterval(monitor);
      const duration = Date.now() - startTime;
      console.log(`✅ Finished in ${Math.floor(duration / 1000)}s`);
      console.log('Final status:', status.data.status);
    }

  }, 1000);

  // Wait for completion
  let status;
  do {
    await new Promise(resolve => setTimeout(resolve, 500));
    status = await codebolt.sideExecution.getStatus(executionId);
  } while (status.data.status === 'running');

  return status.data;
}

// Usage
await executeWithProgress(`
  for (let i = 0; i <= 100; i += 10) {
    console.log(\`Progress: \${i}%\`);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  return { completed: true };
`);
```

**Explanation**: This example demonstrates monitoring an execution with real-time progress updates.

#### Example 4: Capture Output During Execution

```js
// Start execution and capture output
async function executeWithOutputCapture(code) {
  const result = await codebolt.sideExecution.startWithCode(code);
  const executionId = result.data.sideExecutionId;

  console.log('🚀 Started execution');

  let previousOutput = '';

  // Monitor and capture output
  while (true) {
    const status = await codebolt.sideExecution.getStatus(executionId);

    // Display new output
    if (status.data.output && status.data.output !== previousOutput) {
      const newOutput = status.data.output.substring(previousOutput.length);
      console.log('📤 Output:', newOutput);
      previousOutput = status.data.output;
    }

    // Check if complete
    if (status.data.status !== 'running') {
      console.log('✅ Execution complete');
      break;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Get final status with all output
  const finalStatus = await codebolt.sideExecution.getStatus(executionId);
  return finalStatus.data;
}

// Usage
await executeWithOutputCapture(`
  console.log('Step 1: Initializing...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Step 2: Processing...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Step 3: Complete!');
  return { success: true };
`);
```

**Explanation**: This example captures and displays console output from the running execution in real-time.

#### Example 5: Resource Usage Monitoring

```js
// Monitor execution resource usage
async function executeWithResourceMonitoring(code) {
  const result = await codebolt.sideExecution.startWithCode(code);
  const executionId = result.data.sideExecutionId;

  console.log('🚀 Started execution with resource monitoring');

  const snapshots = [];

  // Take periodic snapshots
  const monitor = setInterval(async () => {
    const status = await codebolt.sideExecution.getStatus(executionId);

    snapshots.push({
      timestamp: Date.now(),
      memoryUsage: status.data.memoryUsage,
      cpuUsage: status.data.cpuUsage,
      status: status.data.status
    });

    if (status.data.status !== 'running') {
      clearInterval(monitor);

      // Analyze resource usage
      const maxMemory = Math.max(...snapshots.map(s => s.memoryUsage || 0));
      const avgCpu = snapshots.reduce((sum, s) => sum + (s.cpuUsage || 0), 0) / snapshots.length;

      console.log('📊 Resource Usage Summary:');
      console.log(`  Max Memory: ${(maxMemory / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Avg CPU: ${avgCpu.toFixed(2)}%`);
      console.log(`  Snapshots: ${snapshots.length}`);
    }

  }, 1000);

  // Wait for completion
  let status;
  do {
    await new Promise(resolve => setTimeout(resolve, 500));
    status = await codebolt.sideExecution.getStatus(executionId);
  } while (status.data.status === 'running');

  return status.data;
}

// Usage
await executeWithResourceMonitoring(`
  // Simulate resource-intensive work
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push({ id: i, data: 'x'.repeat(100) });
  }
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { processed: largeArray.length };
`);
```

**Explanation**: This example monitors the resource usage (memory and CPU) of an execution over time.

#### Example 6: Multiple Execution Monitoring

```js
// Monitor multiple executions simultaneously
async function monitorMultipleExecutions(executionIds) {
  console.log(`🔍 Monitoring ${executionIds.length} executions`);

  const statuses = new Map();

  // Create a monitoring interval
  const monitor = setInterval(async () => {
    let allComplete = true;

    for (const id of executionIds) {
      const status = await codebolt.sideExecution.getStatus(id);
      statuses.set(id, status.data);

      if (status.data.status === 'running') {
        allComplete = false;
      }
    }

    // Display summary
    console.clear();
    console.log('📊 Execution Status Summary:\n');

    for (const [id, status] of statuses.entries()) {
      const icon = status.status === 'completed' ? '✅' :
                   status.status === 'failed' ? '❌' :
                   status.status === 'stopped' ? '🛑' : '🔄';
      console.log(`${icon} ${id.substring(0, 8)}...`);
      console.log(`   Status: ${status.status}`);
      if (status.progress !== undefined) {
        console.log(`   Progress: ${status.progress}%`);
      }
      console.log();
    }

    if (allComplete) {
      clearInterval(monitor);
      console.log('✅ All executions complete');
    }

  }, 2000);

  // Wait for all to complete
  await new Promise(resolve => {
    const check = setInterval(() => {
      if (statuses.size === executionIds.length) {
        const allDone = Array.from(statuses.values())
          .every(s => s.status !== 'running');
        if (allDone) {
          clearInterval(check);
          resolve();
        }
      }
    }, 1000);
  });

  return Array.from(statuses.values());
}

// Usage
const executions = await Promise.all([
  codebolt.sideExecution.startWithCode('await new Promise(r => setTimeout(r, 3000)); return 1;'),
  codebolt.sideExecution.startWithCode('await new Promise(r => setTimeout(r, 5000)); return 2;'),
  codebolt.sideExecution.startWithCode('await new Promise(r => setTimeout(r, 4000)); return 3;')
]);

const ids = executions.map(e => e.data.sideExecutionId);
await monitorMultipleExecutions(ids);
```

**Explanation**: This example demonstrates monitoring multiple executions concurrently, showing a unified status dashboard.

### Common Use Cases

**1. Dashboard Display**: Show execution status in a UI.

```js
async function getExecutionDashboard(executionId) {
  const status = await codebolt.sideExecution.getStatus(executionId);

  return {
    id: executionId,
    status: status.data.status,
    progress: status.data.progress || 0,
    duration: status.data.duration || 0,
    hasOutput: !!status.data.output,
    hasError: !!status.data.error,
    isRunning: status.data.status === 'running'
  };
}
```

**2. Health Check**: Verify execution is healthy.

```js
async function healthCheck(executionId) {
  const status = await codebolt.sideExecution.getStatus(executionId);

  const health = {
    healthy: true,
    issues: []
  };

  if (status.data.status === 'failed') {
    health.healthy = false;
    health.issues.push('Execution failed');
  }

  if (status.data.memoryUsage > 1000000000) { // 1GB
    health.healthy = false;
    health.issues.push('High memory usage');
  }

  if (status.data.duration > 600000) { // 10 minutes
    health.healthy = false;
    health.issues.push('Long execution time');
  }

  return health;
}
```

**3. Completion Notification**: Notify when execution completes.

```js
async function waitForCompletion(executionId, callback) {
  while (true) {
    const status = await codebolt.sideExecution.getStatus(executionId);

    if (status.data.status !== 'running') {
      callback(status.data);
      break;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

// Usage
waitForCompletion(executionId, (result) => {
  console.log('Execution completed:', result.status);
  if (result.status === 'completed') {
    console.log('Result:', result.result);
  }
});
```

**4. Status History**: Track status changes over time.

```js
async function trackStatusHistory(executionId) {
  const history = [];

  const tracker = setInterval(async () => {
    const status = await codebolt.sideExecution.getStatus(executionId);

    history.push({
      timestamp: Date.now(),
      status: status.data.status,
      progress: status.data.progress
    });

    if (status.data.status !== 'running') {
      clearInterval(tracker);
      console.log('Status history:', history);
    }
  }, 1000);

  return history;
}
```

### Notes

- The `sideExecutionId` must be from a previous start operation
- Status can be polled repeatedly without side effects
- The status operation is lightweight and can be called frequently
- Output accumulates over time and includes all console.log statements
- Memory and CPU usage may not be available on all platforms
- Progress information is only available if the execution reports it
- The duration is calculated from start time to end time
- Results are only available when status is 'completed'
- Error details are available when status is 'failed'
- Stopped executions have status 'stopped' with partial results if available
- The operation returns quickly even for long-running executions
- Timestamps are in ISO 8601 format
- Multiple simultaneous status calls are safe
- The status reflects the execution state at the time of the query
- Network latency may affect real-time monitoring accuracy
- Consider using websockets for real-time updates in production
- Status data may be cached briefly for performance
- Very long output may be truncated in the response
- The executionId is preserved even after completion for historical queries
