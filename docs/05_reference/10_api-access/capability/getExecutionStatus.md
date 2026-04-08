---
name: getExecutionStatus
cbbaseinfo:
  description: Gets the current status of a capability execution, including progress, results, and any errors.
cbparameters:
  parameters:
    - name: executionId
      typeName: string
      description: The ID of the execution to check.
  returns:
    signatureTypeName: "Promise<GetExecutionStatusResponse>"
    description: A promise that resolves to the current execution status.
    typeArgs: []
data:
  name: getExecutionStatus
  category: capability
  link: getExecutionStatus.md
---
# getExecutionStatus

```typescript
codebolt.capability.getExecutionStatus(executionId: string): Promise<GetExecutionStatusResponse>
```

Gets the current status of a capability execution, including progress, results, and any errors.
### Parameters

- **`executionId`** (string): The ID of the execution to check.

### Returns

- **`Promise<[GetExecutionStatusResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetExecutionStatusResponse)>`**: A promise that resolves to the current execution status.

### Response Structure

The method returns a Promise that resolves to a [`GetExecutionStatusResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetExecutionStatusResponse) object.

**Response Properties:**
- `type` (string): Always "getExecutionStatusResponse"
- `success` (boolean): Indicates if the status was retrieved successfully
- `execution` (object, optional): Execution details
  - `executionId` (string): Execution identifier
  - `status` (string): Current status (pending, running, completed, failed, stopped)
  - `progress` (number, optional): Progress percentage (0-100)
  - `result` (any, optional): Result data if completed
  - `error` (string, optional): Error message if failed
  - `startedAt` (string, optional): ISO timestamp of start
  - `completedAt` (string, optional): ISO timestamp of completion
  - `logs` (string[], optional): Execution logs
- `error` (string, optional): Error details if the operation failed

### Examples

#### Example 1: Check Execution Status

```typescript
import codebolt from '@codebolt/codeboltjs';

const execution = await codebolt.capability.startSkill('data-processor');

// Check status
const status = await codebolt.capability.getExecutionStatus(execution.executionId);

console.log('Current status:', status.execution?.status);
console.log('Progress:', status.execution?.progress);
```

#### Example 2: Poll Until Complete

```typescript
const waitForCompletion = async (executionId: string) => {
  while (true) {
    const status = await codebolt.capability.getExecutionStatus(executionId);

    console.log(`Status: ${status.execution?.status}, Progress: ${status.execution?.progress}%`);

    if (status.execution?.status === 'completed') {
      return status.execution.result;
    } else if (status.execution?.status === 'failed') {
      throw new Error(status.execution.error);
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

const result = await waitForCompletion(execution.executionId);
console.log('Final result:', result);
```

#### Example 3: Monitor with Progress Updates

```typescript
const monitorWithProgress = async (executionId: string, onUpdate: (progress: number) => void) => {
  let lastProgress = -1;

  while (true) {
    const status = await codebolt.capability.getExecutionStatus(executionId);
    const currentProgress = status.execution?.progress || 0;

    if (currentProgress !== lastProgress) {
      onUpdate(currentProgress);
      lastProgress = currentProgress;
    }

    if (status.execution?.status === 'completed') {
      return status.execution.result;
    } else if (status.execution?.status === 'failed') {
      throw new Error(status.execution.error);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

// Usage
await monitorWithProgress(execution.executionId, (progress) => {
  console.log(`Progress: ${progress}%`);
});
```

### Common Use Cases

#### Execution Monitoring Dashboard

```typescript
const monitorExecution = (executionId: string) => {
  const interval = setInterval(async () => {
    const status = await codebolt.capability.getExecutionStatus(executionId);

    updateUI({
      status: status.execution?.status,
      progress: status.execution?.progress,
      logs: status.execution?.logs
    });

    if (['completed', 'failed', 'stopped'].includes(status.execution?.status)) {
      clearInterval(interval);
    }
  }, 2000);
};
```

#### Multiple Execution Tracker

```typescript
const trackMultiple = async (executionIds: string[]) => {
  const statuses = await Promise.all(
    executionIds.map(async (id) => {
      const status = await codebolt.capability.getExecutionStatus(id);
      return { id, status: status.execution?.status };
    })
  );

  return statuses;
};
```

### Notes

- Status checks are lightweight and fast
- Use polling for real-time updates
- Consider implementing exponential backoff for frequent checks
- Logs may be truncated for very long executions
- Progress is optional; not all capabilities report it
- Execution IDs remain valid after completion for status lookup
- Use shorter polling intervals for user-facing operations
- Cache status results to avoid redundant calls