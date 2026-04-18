---
cbapicategory:
  - name: startWithActionBlock
    link: /docs/api/apiaccess/sideExecution/startWithActionBlock
    description: Starts a side execution process using an ActionBlock directory.
  - name: startWithCode
    link: /docs/api/apiaccess/sideExecution/startWithCode
    description: Starts a side execution process using inline JavaScript code.
  - name: stop
    link: /docs/api/apiaccess/sideExecution/stop
    description: Stops a running side execution process.
  - name: listActionBlocks
    link: /docs/api/apiaccess/sideExecution/listActionBlocks
    description: Lists all available ActionBlocks in the project.
  - name: getStatus
    link: /docs/api/apiaccess/sideExecution/getStatus
    description: Gets the current status of a side execution process.
---

# Side Execution API

The Side Execution API provides capabilities for running code in isolated child processes. This allows you to execute long-running or resource-intensive tasks asynchronously without blocking the main thread, with support for both ActionBlock directories and inline code execution.

## Overview

The side execution module enables you to:
- **Execute ActionBlocks**: Run pre-defined ActionBlock directories as isolated processes
- **Run Inline Code**: Execute JavaScript code snippets directly in side processes
- **Control Execution**: Start, stop, and monitor side execution processes
- **Discover ActionBlocks**: List available ActionBlocks in your project
- **Monitor Status**: Check the status and results of running processes

## Quick Start Example

```js
// Initialize connection
await codebolt.waitForReady();

// List available ActionBlocks
const blocks = await codebolt.sideExecution.listActionBlocks();
console.log('Available ActionBlocks:', blocks.data.actionBlocks);

// Start execution with an ActionBlock
const execution = await codebolt.sideExecution.startWithActionBlock(
  '/path/to/actionBlock',
  { param1: 'value1' },
  300000 // 5 minute timeout
);
console.log('Started execution:', execution.data.sideExecutionId);

// Check status
const status = await codebolt.sideExecution.getStatus(execution.data.sideExecutionId);
console.log('Execution status:', status.data.status);

// Stop if needed
await codebolt.sideExecution.stop(execution.data.sideExecutionId);
```

## What are ActionBlocks?

ActionBlocks are self-contained directories that include:
- **index.js**: Main execution file
- **package.json**: Dependencies and metadata
- **README.md**: Documentation
- **Other assets**: Supporting files and resources

ActionBlocks provide a reusable way to package and execute code in isolated environments.

## Side Execution Lifecycle

```
┌─────────────┐
│   START     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  RUNNING    │ ◄────┐
└──────┬──────┘      │
       │             │
       ▼             │ Check Status
┌─────────────┐      │
│ COMPLETED   │      │
└─────────────┘      │
       │             │
       ▼             │
┌─────────────┐      │
│   STOPPED   │ ─────┘
└─────────────┘
```

## Use Cases

### 1. Long-Running Tasks

```js
// Execute a data processing task that runs for minutes
const result = await codebolt.sideExecution.startWithActionBlock(
  '/processors/data-sync',
  { source: 'api', target: 'database' },
  600000 // 10 minutes
);
```

### 2. Resource-Intensive Operations

```js
// Run heavy computations in isolation
const computation = await codebolt.sideExecution.startWithCode(`
  const result = performHeavyComputation(data);
  return result;
`, { data: largeDataset }, 300000);
```

### 3. Background Jobs

```js
// Start a background job and continue working
const job = await codebolt.sideExecution.startWithActionBlock('/jobs/weekly-report');
console.log('Job started:', job.data.sideExecutionId);

// Continue with other work while job runs
```

### 4. Parallel Execution

```js
// Run multiple processes in parallel
const executions = await Promise.all([
  codebolt.sideExecution.startWithActionBlock('/tasks/task1'),
  codebolt.sideExecution.startWithActionBlock('/tasks/task2'),
  codebolt.sideExecution.startWithActionBlock('/tasks/task3')
]);
console.log('Started', executions.length, 'parallel executions');
```

## Response Structure

All side execution API functions return responses with a consistent structure:

```js
{
  type: 'startSideExecutionResponse' | 'stopSideExecutionResponse' | etc.,
  data: {
    sideExecutionId: 'unique-id',
    actionBlock: 'path-or-name',
    status: 'running' | 'completed' | 'stopped' | 'failed',
    result: { ... },           // Execution result (if completed)
    output: 'stdout output',    // Standard output
    error: 'stderr output',     // Error output
    startTime: 'timestamp',
    endTime: 'timestamp',
    duration: 1234              // Duration in milliseconds
  },
  success: true,
  message: 'Operation completed',
  error: null
}
```

## Best Practices

1. **Use Appropriate Timeouts**: Set timeouts based on expected execution time
2. **Monitor Status**: Check execution status periodically for long-running tasks
3. **Handle Errors**: Always check for errors and handle failures gracefully
4. **Clean Up**: Stop executions that are no longer needed
5. **Resource Management**: Be aware of system resources when running parallel executions

<CBAPICategory />
