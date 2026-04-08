---
name: updateThread
cbbaseinfo:
  description: Updates properties of an existing thread including title, description, and metadata.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update.
    - name: updates
      typeName: UpdateThreadOptions
      description: "Object containing the fields to update (title, description, metadata, etc.)."
  returns:
    signatureTypeName: "Promise<UpdateThreadResponse>"
    description: A promise that resolves with the updated thread details.
data:
  name: updateThread
  category: thread
  link: updateThread.md
---
# updateThread

```typescript
codebolt.thread.updateThread(threadId: string, updates: UpdateThreadOptions): Promise<UpdateThreadResponse>
```

Updates properties of an existing thread including title, description, and metadata.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to update.
- **`updates`** (UpdateThreadOptions): Object containing the fields to update (title, description, metadata, etc.).

### Returns

- **`Promise<UpdateThreadResponse>`**: A promise that resolves with the updated thread details.

### Response Structure

```typescript
interface UpdateThreadResponse {
  threadId: string;
  title: string;
  description?: string;
  status: string;
  updatedAt: string;
  metadata?: Record<string, any>;
}
```

### Examples

#### Example 1: Update Thread Title

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

// Update just the title
const updated = await codebolt.thread.updateThread(threadId, {
  title: 'Updated: Bug Fix - Login Timeout Issue'
});

console.log('Thread updated:', updated.title);
console.log('Updated at:', new Date(updated.updatedAt).toLocaleString());
```

#### Example 2: Update Multiple Fields

```typescript
const threadId = 'thread_def456';

// Update multiple properties at once
const updated = await codebolt.thread.updateThread(threadId, {
  title: 'Code Review: Authentication Module',
  description: 'Comprehensive review of the new authentication system including OAuth2 integration',
  metadata: {
    priority: 'high',
    reviewers: ['alice', 'bob'],
    deadline: '2024-02-01'
  }
});

console.log('Thread updated successfully');
console.log('New title:', updated.title);
console.log('New description:', updated.description);
```

#### Example 3: Add Progress Information to Metadata

```typescript
const threadId = 'thread_ghi789';

// Update metadata to track progress
const updated = await codebolt.thread.updateThread(threadId, {
  metadata: {
    progress: '50%',
    tasksCompleted: 5,
    totalTasks: 10,
    currentPhase: 'implementation',
    blockers: ['Waiting for API documentation']
  }
});

console.log('Progress updated:', updated.metadata.progress);
```

#### Example 4: Update Thread with Error Handling

```typescript
async function updateThreadSafely(threadId: string, updates: any) {
  try {
    // Verify thread exists first
    const existing = await codebolt.thread.getThreadDetail({ threadId });

    if (!existing.threadId) {
      throw new Error('Thread not found');
    }

    // Apply updates
    const updated = await codebolt.thread.updateThread(threadId, updates);

    console.log('Thread updated successfully');
    return updated;
  } catch (error) {
    console.error('Failed to update thread:', error.message);

    // Log the error for debugging
    console.error('Thread ID:', threadId);
    console.error('Updates:', JSON.stringify(updates, null, 2));

    throw error;
  }
}

// Usage
try {
  const updated = await updateThreadSafely('thread_jkl012', {
    title: 'New Title',
    metadata: { updated: true }
  });
} catch (error) {
  // Handle error
}
```

#### Example 5: Conditional Updates Based on Status

```typescript
const threadId = 'thread_mno345';

// Get current thread details
const current = await codebolt.thread.getThreadDetail({ threadId });

// Update based on current status
let updates: any = {};

switch (current.status) {
  case 'active':
    updates = {
      metadata: {
        ...current.metadata,
        lastActive: new Date().toISOString()
      }
    };
    break;

  case 'completed':
    updates = {
      title: `✓ ${current.title}`,
      metadata: {
        ...current.metadata,
        completedAt: new Date().toISOString()
      }
    };
    break;

  case 'paused':
    updates = {
      metadata: {
        ...current.metadata,
        pausedAt: new Date().toISOString(),
        pauseReason: 'Awaiting user input'
      }
    };
    break;
}

if (Object.keys(updates).length > 0) {
  const updated = await codebolt.thread.updateThread(threadId, updates);
  console.log('Thread updated based on status');
}
```

#### Example 6: Batch Update Multiple Threads

```typescript
const updates = [
  { threadId: 'thread_001', title: '[High Priority] Fix Login Bug' },
  { threadId: 'thread_002', title: '[In Progress] API Integration' },
  { threadId: 'thread_003', title: '[Review Needed] Database Migration' }
];

// Update multiple threads
const results = await Promise.all(
  updates.map(async ({ threadId, ...updateData }) => {
    try {
      const updated = await codebolt.thread.updateThread(threadId, updateData);
      return { threadId, success: true, title: updated.title };
    } catch (error) {
      return { threadId, success: false, error: error.message };
    }
  })
);

console.log('Batch update results:');
results.forEach(result => {
  if (result.success) {
    console.log(`✓ ${result.threadId}: ${result.title}`);
  } else {
    console.error(`✗ ${result.threadId}: ${result.error}`);
  }
});
```

### Common Use Cases

- **Title Updates**: Rename threads for better clarity
- **Progress Tracking**: Update metadata with progress information
- **Status Changes**: Add notes or change thread properties
- **Priority Adjustments**: Update priority or urgency
- **Metadata Enrichment**: Add additional context or tags
- **Batch Modifications**: Update multiple threads simultaneously

### Notes

- Only the fields specified in the `updates` parameter are modified
- The `threadId` cannot be changed
- The `updatedAt` timestamp is automatically updated
- Metadata updates merge with existing metadata (not replace)
- Thread status cannot be changed via `updateThread` - use `updateThreadStatus` instead
- Updates are applied atomically - all changes succeed or fail together
- Returns the updated thread object with all current values