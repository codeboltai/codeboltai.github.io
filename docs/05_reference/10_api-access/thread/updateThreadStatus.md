---
name: updateThreadStatus
cbbaseinfo:
  description: Updates the status of a thread to control its lifecycle and workflow state.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update.
    - name: status
      typeName: string
      description: "The new status value (e.g., 'active', 'paused', 'completed', 'archived', 'closed')."
  returns:
    signatureTypeName: "Promise<UpdateThreadStatusResponse>"
    description: A promise that resolves with the updated thread status.
data:
  name: updateThreadStatus
  category: thread
  link: updateThreadStatus.md
---
# updateThreadStatus

```typescript
codebolt.thread.updateThreadStatus(threadId: string, status: string): Promise<UpdateThreadStatusResponse>
```

Updates the status of a thread to control its lifecycle and workflow state.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to update.
- **`status`** (string): The new status value (e.g., 'active', 'paused', 'completed', 'archived', 'closed').

### Returns

- **`Promise<UpdateThreadStatusResponse>`**: A promise that resolves with the updated thread status.

### Response Structure

```typescript
interface UpdateThreadStatusResponse {
  threadId: string;
  status: string;
  previousStatus?: string;
  updatedAt: string;
}
```

### Examples

#### Example 1: Complete a Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

// Mark thread as completed
const result = await codebolt.thread.updateThreadStatus(threadId, 'completed');

console.log('Thread status updated to:', result.status);
console.log('Previous status:', result.previousStatus);
console.log('Updated at:', new Date(result.updatedAt).toLocaleString());
```

#### Example 2: Pause and Resume Thread

```typescript
const threadId = 'thread_def456';

// Pause the thread
const paused = await codebolt.thread.updateThreadStatus(threadId, 'paused');
console.log('Thread paused at:', new Date(paused.updatedAt).toLocaleString());

// ... do some other work ...

// Resume the thread
const resumed = await codebolt.thread.updateThreadStatus(threadId, 'active');
console.log('Thread resumed at:', new Date(resumed.updatedAt).toLocaleString());
```

#### Example 3: Archive Old Threads

```typescript
async function archiveCompletedThreads(daysThreshold: number = 7) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysThreshold);

  // Get completed threads
  const threads = await codebolt.thread.getThreadList({
    status: 'completed'
  });

  console.log(`Found ${threads.total} completed threads`);

  // Archive threads older than threshold
  const results = await Promise.all(
    threads.threads
      .filter(thread => new Date(thread.updatedAt) < cutoffDate)
      .map(async (thread) => {
        const result = await codebolt.thread.updateThreadStatus(
          thread.threadId,
          'archived'
        );
        return { threadId: thread.threadId, success: true };
      })
  );

  console.log(`Archived ${results.length} old threads`);
  return results;
}

// Usage: Archive threads completed more than 30 days ago
await archiveCompletedThreads(30);
```

#### Example 4: Status Transition Workflow

```typescript
const threadId = 'thread_ghi789';

// Get current status
const current = await codebolt.thread.getThreadDetail({ threadId });
console.log('Current status:', current.status);

// Define status transitions
const transitions = {
  'pending': 'active',
  'active': 'in_review',
  'in_review': 'completed',
  'completed': 'archived'
};

// Transition to next status
const nextStatus = transitions[current.status];

if (nextStatus) {
  const result = await codebolt.thread.updateThreadStatus(threadId, nextStatus);
  console.log(`Status changed from ${result.previousStatus} to ${result.status}`);
} else {
  console.log('No valid transition from current status');
}
```

#### Example 5: Close Thread with Status Update

```typescript
async function closeThread(threadId: string, reason: string) {
  // Update thread with reason
  await codebolt.thread.updateThread(threadId, {
    metadata: {
      closeReason: reason,
      closedBy: 'user',
      closedAt: new Date().toISOString()
    }
  });

  // Update status to closed
  const result = await codebolt.thread.updateThreadStatus(threadId, 'closed');

  console.log('Thread closed:', result.threadId);
  console.log('Reason:', reason);

  return result;
}

// Usage
await closeThread('thread_jkl012', 'Task completed successfully');
```

#### Example 6: Batch Status Updates

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003'];
const newStatus = 'completed';

console.log(`Updating ${threadIds.length} threads to ${newStatus}...`);

const results = await Promise.all(
  threadIds.map(async (threadId) => {
    try {
      const result = await codebolt.thread.updateThreadStatus(threadId, newStatus);
      return {
        threadId,
        success: true,
        previousStatus: result.previousStatus,
        newStatus: result.status
      };
    } catch (error) {
      return {
        threadId,
        success: false,
        error: error.message
      };
    }
  })
);

console.log('Status update results:');
results.forEach(result => {
  if (result.success) {
    console.log(`✓ ${result.threadId}: ${result.previousStatus} → ${result.newStatus}`);
  } else {
    console.error(`✗ ${result.threadId}: ${result.error}`);
  }
});
```

#### Example 7: Status-Based Actions

```typescript
async function handleThreadByStatus(threadId: string) {
  const result = await codebolt.thread.updateThreadStatus(threadId, 'processing');

  console.log('Processing thread:', threadId);

  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Determine final status based on conditions
  const finalStatus = Math.random() > 0.5 ? 'completed' : 'failed';

  const final = await codebolt.thread.updateThreadStatus(threadId, finalStatus);

  console.log('Thread processing complete. Final status:', final.status);
}

// Usage
await handleThreadByStatus('thread_mno345');
```

### Common Use Cases

- **Workflow Management**: Move threads through different stages
- **Task Completion**: Mark threads as completed when done
- **Pause/Resume**: Temporarily halt and resume thread execution
- **Cleanup**: Archive or close old threads
- **Error Handling**: Mark threads as failed when errors occur
- **Batch Operations**: Update status for multiple threads at once

### Notes

- Common status values include: 'pending', 'active', 'paused', 'completed', 'failed', 'archived', 'closed'
- Status updates are timestamped automatically
- The `previousStatus` field shows the status before the update
- Some status transitions may not be reversible (e.g., completed → active)
- Thread status affects how threads appear in listings and filters
- Use appropriate status values for your workflow
- Consider the implications of status changes before updating
- Status changes can trigger automated workflows or notifications
- Always check current status before transitioning to a new state