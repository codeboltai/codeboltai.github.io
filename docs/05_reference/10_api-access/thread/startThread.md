---
name: startThread
cbbaseinfo:
  description: Starts an existing thread to begin or resume conversation and execution.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to start.
  returns:
    signatureTypeName: "Promise<StartThreadResponse>"
    description: A promise that resolves with the started thread details and status.
data:
  name: startThread
  category: thread
  link: startThread.md
---
# startThread

```typescript
codebolt.thread.startThread(threadId: string): Promise<StartThreadResponse>
```

Starts an existing thread to begin or resume conversation and execution.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to start.

### Returns

- **`Promise<StartThreadResponse>`**: A promise that resolves with the started thread details and status.

### Response Structure

```typescript
interface StartThreadResponse {
  threadId: string;
  status: string;
  startedAt: string;
  message?: string;
}
```

### Examples

#### Example 1: Start a Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';
const result = await codebolt.thread.startThread(threadId);

console.log('Thread started:', result.threadId);
console.log('Status:', result.status);
console.log('Started at:', new Date(result.startedAt).toLocaleString());
```

#### Example 2: Start Thread After Creation

```typescript
// Create a thread first
const thread = await codebolt.thread.createThread({
  title: 'Code Review',
  description: 'Review the authentication module',
  agentId: 'reviewer-agent'
});

console.log('Thread created:', thread.threadId);

// Start the thread
const started = await codebolt.thread.startThread(thread.threadId);
console.log('Thread is now', started.status);
```

#### Example 3: Start Thread with Status Check

```typescript
async function startThreadSafely(threadId: string) {
  // First check current status
  const details = await codebolt.thread.getThreadDetail({ threadId });

  if (details.status === 'running' || details.status === 'active') {
    console.log('Thread is already running');
    return details;
  }

  if (details.status === 'completed' || details.status === 'closed') {
    console.log('Cannot start a completed thread');
    return null;
  }

  // Start the thread
  const result = await codebolt.thread.startThread(threadId);
  console.log('Thread started successfully');
  return result;
}

const result = await startThreadSafely('thread_def456');
```

#### Example 4: Resume a Paused Thread

```typescript
const threadId = 'thread_ghi789';

// Check if thread exists and is paused
const details = await codebolt.thread.getThreadDetail({ threadId });

if (details.status === 'paused') {
  console.log('Resuming paused thread...');

  const result = await codebolt.thread.startThread(threadId);
  console.log('Thread resumed:', result.threadId);

  // Monitor the thread
  const checkInterval = setInterval(async () => {
    const currentDetails = await codebolt.thread.getThreadDetail({ threadId });
    console.log('Current status:', currentDetails.status);

    if (currentDetails.status === 'completed') {
      clearInterval(checkInterval);
      console.log('Thread completed!');
    }
  }, 5000);
}
```

#### Example 5: Batch Start Multiple Threads

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003'];

// Start multiple threads in parallel
const results = await Promise.all(
  threadIds.map(async (threadId) => {
    try {
      const result = await codebolt.thread.startThread(threadId);
      return { threadId, success: true, status: result.status };
    } catch (error) {
      return { threadId, success: false, error: error.message };
    }
  })
);

console.log('Batch start results:');
results.forEach(result => {
  if (result.success) {
    console.log(`✓ ${result.threadId}: ${result.status}`);
  } else {
    console.error(`✗ ${result.threadId}: ${result.error}`);
  }
});
```

#### Example 6: Start Thread with Error Handling and Retry

```typescript
async function startThreadWithRetry(threadId: string, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await codebolt.thread.startThread(threadId);
      console.log(`Thread started on attempt ${attempt}`);
      return result;
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw new Error(`Failed to start thread after ${maxRetries} attempts`);
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
}

// Usage
try {
  const result = await startThreadWithRetry('thread_jkl012');
  console.log('Thread started successfully');
} catch (error) {
  console.error('Failed to start thread:', error.message);
}
```

### Common Use Cases

- **Resume Work**: Start paused or stopped threads
- **Initialize Execution**: Begin thread execution after creation
- **Batch Processing**: Start multiple threads simultaneously
- **Workflow Automation**: Automatically start threads in workflows
- **Recovery**: Restart threads after interruptions

### Notes

- Thread must exist and be in a startable state
- Cannot start threads that are already completed or closed
- The thread status typically changes to 'running' or 'active'
- Use `createAndStartThread` for a combined create-and-start operation
- Check thread status before starting to avoid errors
- Starting a thread triggers the associated agent to begin work
- Thread execution continues until completed, stopped, or paused