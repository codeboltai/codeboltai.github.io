---
name: getThreadDetail
cbbaseinfo:
  description: Retrieves detailed information about a specific thread including all properties and metadata.
cbparameters:
  parameters:
    - name: options
      typeName: GetThreadDetailOptions
      description: Options containing the threadId of the thread to retrieve.
  returns:
    signatureTypeName: "Promise<GetThreadResponse>"
    description: A promise that resolves with comprehensive thread details including status, participants, messages, and metadata.
data:
  name: getThreadDetail
  category: thread
  link: getThreadDetail.md
---
# getThreadDetail

```typescript
codebolt.thread.getThreadDetail(options: GetThreadDetailOptions): Promise<GetThreadResponse>
```

Retrieves detailed information about a specific thread including all properties and metadata.
### Parameters

- **`options`** (GetThreadDetailOptions): Options containing the threadId of the thread to retrieve.

### Returns

- **`Promise<GetThreadResponse>`**: A promise that resolves with comprehensive thread details including status, participants, messages, and metadata.

### Response Structure

```typescript
interface GetThreadResponse {
  threadId: string;
  title: string;
  description?: string;
  status: string;
  agentId: string;
  createdAt: string;
  updatedAt: string;
  startedAt?: string;
  completedAt?: string;
  messageCount: number;
  participants?: string[];
  metadata?: Record<string, any>;
  tags?: string[];
  priority?: string;
}
```

### Examples

#### Example 1: Get Basic Thread Details

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';
const details = await codebolt.thread.getThreadDetail({ threadId });

console.log('Thread Details:');
console.log('Title:', details.title);
console.log('Status:', details.status);
console.log('Created:', new Date(details.createdAt).toLocaleString());
// Output: Thread Details:
// Output: Title: Bug Fix: Login Issue
// Output: Status: active
// Output: Created: 1/15/2024, 10:30:00 AM
```

#### Example 2: Display Complete Thread Information

```typescript
const threadId = 'thread_xyz789';
const details = await codebolt.thread.getThreadDetail({ threadId });

function displayThreadDetails(thread) {
  console.log('='.repeat(50));
  console.log(`Thread: ${thread.title}`);
  console.log('='.repeat(50));
  console.log(`ID: ${thread.threadId}`);
  console.log(`Description: ${thread.description || 'No description'}`);
  console.log(`Status: ${thread.status}`);
  console.log(`Agent: ${thread.agentId}`);
  console.log(`Messages: ${thread.messageCount}`);
  console.log(`Created: ${new Date(thread.createdAt).toLocaleString()}`);
  console.log(`Updated: ${new Date(thread.updatedAt).toLocaleString()}`);

  if (thread.startedAt) {
    console.log(`Started: ${new Date(thread.startedAt).toLocaleString()}`);
  }

  if (thread.completedAt) {
    console.log(`Completed: ${new Date(thread.completedAt).toLocaleString()}`);
  }

  if (thread.priority) {
    console.log(`Priority: ${thread.priority}`);
  }

  if (thread.tags && thread.tags.length > 0) {
    console.log(`Tags: ${thread.tags.join(', ')}`);
  }

  if (thread.metadata) {
    console.log('Metadata:');
    Object.entries(thread.metadata).forEach(([key, value]) => {
      console.log(`  ${key}: ${value}`);
    });
  }

  console.log('='.repeat(50));
}

displayThreadDetails(details);
```

#### Example 3: Get Thread Details with Error Handling

```typescript
async function getThreadDetailsSafely(threadId: string) {
  try {
    const details = await codebolt.thread.getThreadDetail({ threadId });

    if (!details.threadId) {
      throw new Error('Thread not found');
    }

    return {
      success: true,
      data: details
    };
  } catch (error) {
    console.error(`Failed to get details for thread ${threadId}:`, error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

const result = await getThreadDetailsSafely('thread_abc123');

if (result.success) {
  console.log('Thread found:', result.data.title);
} else {
  console.log('Error:', result.error);
}
```

#### Example 4: Check Thread Status and Progress

```typescript
const threadId = 'thread_def456';
const details = await codebolt.thread.getThreadDetail({ threadId });

// Determine thread progress
function getThreadProgress(thread) {
  if (thread.status === 'completed' || thread.status === 'closed') {
    return '100% (Completed)';
  } else if (thread.status === 'active' || thread.status === 'running') {
    return 'In Progress';
  } else if (thread.status === 'archived') {
    return 'Archived';
  } else {
    return 'Not Started';
  }
}

const progress = getThreadProgress(details);
console.log(`Thread "${details.title}": ${progress}`);

// Check if thread is overdue
if (details.metadata?.deadline) {
  const deadline = new Date(details.metadata.deadline);
  const now = new Date();
  const isOverdue = now > deadline && details.status !== 'completed';

  if (isOverdue) {
    console.warn(`⚠️  Thread is overdue! Deadline was ${deadline.toLocaleDateString()}`);
  }
}
```

#### Example 5: Get Thread Details for Reporting

```typescript
async function generateThreadReport(threadId: string) {
  const details = await codebolt.thread.getThreadDetail({ threadId });

  const report = {
    basicInfo: {
      id: details.threadId,
      title: details.title,
      status: details.status,
      priority: details.priority || 'normal'
    },
    timing: {
      created: details.createdAt,
      updated: details.updatedAt,
      started: details.startedAt,
      completed: details.completedAt,
      duration: details.completedAt && details.startedAt
        ? new Date(details.completedAt).getTime() - new Date(details.startedAt).getTime()
        : null
    },
    activity: {
      messageCount: details.messageCount,
      participantCount: details.participants?.length || 0
    },
    metadata: details.metadata || {}
  };

  // Calculate duration in human-readable format
  if (report.timing.duration) {
    const minutes = Math.floor(report.timing.duration / 60000);
    const hours = Math.floor(minutes / 60);
    report.timing.durationFormatted = hours > 0
      ? `${hours}h ${minutes % 60}m`
      : `${minutes}m`;
  }

  return report;
}

const report = await generateThreadReport('thread_ghi789');
console.log('Thread Report:', JSON.stringify(report, null, 2));
```

#### Example 6: Batch Retrieve Thread Details

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003', 'thread_004'];

// Get details for multiple threads
const threadDetails = await Promise.all(
  threadIds.map(threadId =>
    codebolt.thread.getThreadDetail({ threadId })
      .catch(error => ({ threadId, error: error.message }))
  )
);

// Process results
threadDetails.forEach(result => {
  if (result.error) {
    console.error(`Error fetching ${result.threadId}: ${result.error}`);
  } else {
    console.log(`${result.title}: ${result.status}`);
  }
});

// Sort by status
const sorted = threadDetails
  .filter(t => !t.error)
  .sort((a, b) => a.status.localeCompare(b.status));

console.log('\nThreads by status:');
sorted.forEach(thread => {
  console.log(`[${thread.status}] ${thread.title}`);
});
```

### Common Use Cases

- **Thread Inspection**: View complete thread information
- **Status Checks**: Verify thread state before taking actions
- **Reporting**: Generate detailed reports on thread activity
- **Progress Tracking**: Monitor thread advancement and completion
- **Audit Logs**: Review thread history and metadata
- **Dashboard Displays**: Show thread details in UI components

### Notes

- Returns comprehensive information about a single thread
- Requires a valid `threadId` in the options parameter
- Includes timestamps for creation, updates, and completion
- Message count indicates total messages in the thread
- Metadata can contain custom fields and additional context
- Returns error if thread doesn't exist
- Use `getThreadList` to find thread IDs before calling this function
- Thread details are useful for displaying detailed views in dashboards