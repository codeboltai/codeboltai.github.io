---
name: deleteThread
cbbaseinfo:
  description: Permanently deletes a thread and all its associated data including messages and file changes.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to delete.
  returns:
    signatureTypeName: "Promise<DeleteThreadResponse>"
    description: A promise that resolves when the thread is successfully deleted.
data:
  name: deleteThread
  category: thread
  link: deleteThread.md
---
# deleteThread

```typescript
codebolt.thread.deleteThread(threadId: string): Promise<DeleteThreadResponse>
```

Permanently deletes a thread and all its associated data including messages and file changes.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to delete.

### Returns

- **`Promise<DeleteThreadResponse>`**: A promise that resolves when the thread is successfully deleted.

### Response Structure

```typescript
interface DeleteThreadResponse {
  success: boolean;
  threadId: string;
  deletedAt: string;
  message?: string;
}
```

### Examples

#### Example 1: Delete a Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

const result = await codebolt.thread.deleteThread(threadId);

if (result.success) {
  console.log('Thread deleted successfully');
  console.log('Deleted at:', new Date(result.deletedAt).toLocaleString());
}
```

#### Example 2: Delete Thread with Confirmation

```typescript
async function deleteThreadWithConfirmation(threadId: string) {
  // First, get thread details to show user
  const details = await codebolt.thread.getThreadDetail({ threadId });

  console.log(`About to delete thread: ${details.title}`);
  console.log(`Status: ${details.status}`);
  console.log(`Messages: ${details.messageCount}`);

  // Ask for confirmation
  const confirmed = await codebolt.chat.sendConfirmationRequest(
    `Are you sure you want to delete "${details.title}"?`,
    ['Yes, delete it', 'Cancel']
  );

  if (confirmed === 'Yes, delete it') {
    const result = await codebolt.thread.deleteThread(threadId);
    console.log('Thread deleted successfully');
    return true;
  } else {
    console.log('Deletion cancelled');
    return false;
  }
}

// Usage
await deleteThreadWithConfirmation('thread_def456');
```

#### Example 3: Delete Thread with Error Handling

```typescript
async function deleteThreadSafely(threadId: string) {
  try {
    // Verify thread exists
    const details = await codebolt.thread.getThreadDetail({ threadId });

    if (!details.threadId) {
      console.log('Thread not found');
      return { success: false, message: 'Thread not found' };
    }

    // Check if thread is active
    if (details.status === 'running' || details.status === 'active') {
      console.warn('Cannot delete active thread. Stop it first.');
      return { success: false, message: 'Cannot delete active thread' };
    }

    // Delete the thread
    const result = await codebolt.thread.deleteThread(threadId);

    if (result.success) {
      console.log(`Thread ${threadId} deleted successfully`);
    }

    return result;
  } catch (error) {
    console.error('Error deleting thread:', error.message);
    return { success: false, error: error.message };
  }
}

// Usage
const result = await deleteThreadSafely('thread_ghi789');
```

#### Example 4: Delete Old Completed Threads

```typescript
async function cleanupOldThreads(daysToKeep: number = 30) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

  // Get all completed threads
  const threads = await codebolt.thread.getThreadList({
    status: 'completed'
  });

  console.log(`Found ${threads.threads.length} completed threads`);

  // Filter threads older than cutoff date
  const oldThreads = threads.threads.filter(thread => {
    const completedAt = new Date(thread.updatedAt);
    return completedAt < cutoffDate;
  });

  console.log(`Found ${oldThreads.length} threads older than ${daysToKeep} days`);

  // Delete old threads
  const results = await Promise.all(
    oldThreads.map(async (thread) => {
      try {
        await codebolt.thread.deleteThread(thread.threadId);
        return { threadId: thread.threadId, success: true };
      } catch (error) {
        return { threadId: thread.threadId, success: false, error: error.message };
      }
    })
  );

  const successCount = results.filter(r => r.success).length;
  console.log(`Successfully deleted ${successCount} old threads`);

  return results;
}

// Usage: Delete threads older than 90 days
await cleanupOldThreads(90);
```

#### Example 5: Delete Multiple Threads

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003'];

console.log(`Deleting ${threadIds.length} threads...`);

const results = await Promise.all(
  threadIds.map(async (threadId) => {
    try {
      const result = await codebolt.thread.deleteThread(threadId);
      return { threadId, success: true };
    } catch (error) {
      console.error(`Failed to delete ${threadId}:`, error.message);
      return { threadId, success: false, error: error.message };
    }
  })
);

console.log('Deletion results:');
results.forEach(result => {
  console.log(`${result.success ? '✓' : '✗'} ${result.threadId}`);
});

const successCount = results.filter(r => r.success).length;
console.log(`Successfully deleted ${successCount}/${threadIds.length} threads`);
```

#### Example 6: Delete Thread with Backup

```typescript
async function deleteThreadWithBackup(threadId: string) {
  try {
    // Get thread details before deletion
    const details = await codebolt.thread.getThreadDetail({ threadId });

    // Get all messages
    const messages = await codebolt.thread.getThreadMessages({
      threadId,
      limit: 1000
    });

    // Get file changes
    const fileChanges = await codebolt.thread.getThreadFileChanges(threadId);

    // Create backup record
    const backup = {
      thread: details,
      messages: messages.messages,
      fileChanges: fileChanges,
      backupDate: new Date().toISOString()
    };

    // Save backup (example: to a file or database)
    console.log('Backing up thread data...');
    // await saveBackup(backup);

    // Delete the thread
    const result = await codebolt.thread.deleteThread(threadId);

    console.log('Thread deleted. Backup created:', backup.backupDate);
    return { success: true, backup };
  } catch (error) {
    console.error('Failed to delete thread with backup:', error.message);
    return { success: false, error: error.message };
  }
}

// Usage
const result = await deleteThreadWithBackup('thread_backup_123');
```

### Common Use Cases

- **Cleanup**: Remove completed or archived threads
- **Data Management**: Delete test or temporary threads
- **Storage Optimization**: Free up space by deleting old threads
- **Batch Operations**: Delete multiple threads at once
- **Error Recovery**: Remove corrupted or stuck threads
- **Privacy**: Delete threads containing sensitive information

### Notes

- **Deletion is permanent** - all thread data is removed and cannot be recovered
- Messages associated with the thread are also deleted
- File changes linked to the thread are removed
- Cannot delete active or running threads - stop them first
- Thread ID becomes invalid after deletion
- Consider archiving instead of deleting if data might be needed later
- Always verify thread exists before attempting deletion
- Use with caution - deletion cannot be undone
- Returns success status even if thread doesn't exist (idempotent operation)