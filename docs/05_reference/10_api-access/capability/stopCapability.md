---
name: stopCapability
cbbaseinfo:
  description: Stops a currently running capability execution by execution ID. This cancels the execution and releases resources.
cbparameters:
  parameters:
    - name: executionId
      typeName: string
      description: The ID of the execution to stop.
  returns:
    signatureTypeName: "Promise<StopCapabilityResponse>"
    description: A promise that resolves when the execution has been stopped.
    typeArgs: []
data:
  name: stopCapability
  category: capability
  link: stopCapability.md
---
# stopCapability

```typescript
codebolt.capability.stopCapability(executionId: string): Promise<StopCapabilityResponse>
```

Stops a currently running capability execution by execution ID. This cancels the execution and releases resources.
### Parameters

- **`executionId`** (string): The ID of the execution to stop.

### Returns

- **`Promise<[StopCapabilityResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StopCapabilityResponse)>`**: A promise that resolves when the execution has been stopped.

### Response Structure

The method returns a Promise that resolves to a [`StopCapabilityResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StopCapabilityResponse) object.

**Response Properties:**
- `type` (string): Always "stopCapabilityResponse"
- `success` (boolean): Indicates if the execution was stopped successfully
- `executionId` (string, optional): The ID of the stopped execution
- `status` (string, optional): Final status (stopped, cancelled, etc.)
- `error` (string, optional): Error details if the operation failed
- `requestId` (string, optional): Unique request identifier

### Examples

#### Example 1: Stop a Running Execution

```typescript
import codebolt from '@codebolt/codeboltjs';

// Start an execution
const execution = await codebolt.capability.startSkill('long-running-task');

// Later, stop it
const stopResult = await codebolt.capability.stopCapability(execution.executionId);

if (stopResult.success) {
  console.log('Execution stopped successfully');
} else {
  console.error('Failed to stop:', stopResult.error);
}
```

#### Example 2: Stop with Timeout

```typescript
const executeWithTimeout = async (skillName: string, params: any, timeoutMs: number) => {
  const execution = await codebolt.capability.startSkill(skillName, params);

  // Set timeout to stop if not complete
  const timeoutId = setTimeout(async () => {
    console.log('Timeout reached, stopping execution...');
    await codebolt.capability.stopCapability(execution.executionId);
  }, timeoutMs);

  // Monitor execution
  while (true) {
    const status = await codebolt.capability.getExecutionStatus(execution.executionId);

    if (status.data?.status === 'completed' || status.data?.status === 'failed') {
      clearTimeout(timeoutId);
      return status.data;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
```

#### Example 3: User-Initiated Cancellation

```typescript
let currentExecution: string | null = null;

// Start execution
const start = async () => {
  const result = await codebolt.capability.startSkill('interactive-task');
  currentExecution = result.executionId;
  return result;
};

// Cancel execution
const cancel = async () => {
  if (currentExecution) {
    const result = await codebolt.capability.stopCapability(currentExecution);
    console.log('Cancelled:', result.success);
    currentExecution = null;
  }
};

// Usage
await start();
// ... user clicks cancel button
await cancel();
```

### Common Use Cases

#### Clean Cancellation

```typescript
const gracefulShutdown = async (executionId: string) => {
  const stop = await codebolt.capability.stopCapability(executionId);

  if (stop.success) {
    console.log('Execution stopped cleanly');
    // Perform cleanup
  }
};
```

#### Batch Cancellation

```typescript
const stopAllExecutions = async (executionIds: string[]) => {
  const results = await Promise.allSettled(
    executionIds.map(id => codebolt.capability.stopCapability(id))
  );

  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(`Execution ${i} stopped:`, result.value.success);
    }
  });
};
```

### Notes

- Stopping an execution releases resources immediately
- Already completed executions cannot be stopped
- Partial results may be available after stopping
- Use to implement cancellation features in your UI
- Consider the state of data when stopping mid-execution
- The execution ID becomes invalid after stopping
- Some capabilities may support checkpoint/resume functionality