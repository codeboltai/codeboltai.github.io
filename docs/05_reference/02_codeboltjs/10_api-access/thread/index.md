---
cbapicategory:
  - name: createThread
    link: /docs/api/apiaccess/thread/createThread
    description: Creates a new thread with comprehensive options for conversation management.
  - name: createAndStartThread
    link: /docs/api/apiaccess/thread/createAndStartThread
    description: Creates and immediately starts a new thread in one operation.
  - name: getThreadList
    link: /docs/api/apiaccess/thread/getThreadList
    description: Retrieves a list of threads with optional filtering capabilities.
  - name: getThreadDetail
    link: /docs/api/apiaccess/thread/getThreadDetail
    description: Gets detailed information about a specific thread.
  - name: startThread
    link: /docs/api/apiaccess/thread/startThread
    description: Starts an existing thread to begin or resume conversation.
  - name: updateThread
    link: /docs/api/apiaccess/thread/updateThread
    description: Updates properties of an existing thread.
  - name: deleteThread
    link: /docs/api/apiaccess/thread/deleteThread
    description: Permanently deletes a thread and all its associated data.
  - name: updateThreadStatus
    link: /docs/api/apiaccess/thread/updateThreadStatus
    description: "Updates the status of a thread (e.g., active, archived, closed)."
  - name: getThreadMessages
    link: /docs/api/apiaccess/thread/getThreadMessages
    description: Retrieves all messages from a specific thread.
  - name: getThreadFileChanges
    link: /docs/api/apiaccess/thread/getThreadFileChanges
    description: Gets file changes associated with a specific thread.
  - name: getThreadFileChangesSummary
    link: /docs/api/apiaccess/thread/getThreadFileChangesSummary
    description: Gets a summary of file changes for the ChangesSummaryPanel.

---
# Thread API

The Thread API provides comprehensive conversation thread management capabilities, allowing you to create, manage, and track conversation threads throughout their lifecycle.

## Overview

The thread module enables you to:
- **Create Threads**: Initialize new conversation threads with custom configurations
- **Manage Lifecycle**: Start, update, and delete threads
- **Track Status**: Monitor thread status and progress
- **Access Messages**: Retrieve messages and thread history
- **File Changes**: Track file modifications associated with threads

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a new thread
const thread = await codebolt.thread.createThread({
  title: 'Feature Implementation Discussion',
  description: 'Discussing the new authentication feature',
  agentId: 'agent-123',
  metadata: {
    priority: 'high',
    project: 'auth-system'
  }
});

console.log('Thread created:', thread.threadId);

// Start the thread
await codebolt.thread.startThread(thread.threadId);

// Get thread details
const details = await codebolt.thread.getThreadDetail({
  threadId: thread.threadId
});

console.log('Thread details:', details);

// List all threads
const threadList = await codebolt.thread.getThreadList({
  status: 'active',
  limit: 10
});

console.log('Active threads:', threadList.threads);
```

## Response Structure

All thread API functions return responses with a consistent structure:

```typescript
{
  threadId: string;
  title: string;
  description?: string;
  status: 'active' | 'archived' | 'closed';
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
  // ... additional fields based on the specific function
}
```

## Common Use Cases

### Creating and Starting a Thread

```typescript
// Create a thread for a specific task
const thread = await codebolt.thread.createThread({
  title: 'Bug Fix: Login Issue',
  description: 'Investigating and fixing the login timeout problem',
  agentId: 'debugger-agent',
  metadata: {
    bugId: 'BUG-123',
    severity: 'critical'
  }
});

// Immediately start working on it
await codebolt.thread.startThread(thread.threadId);
```

### Monitoring Thread Progress

```typescript
// Get thread messages to track progress
const messages = await codebolt.thread.getThreadMessages({
  threadId: thread.threadId,
  limit: 50
});

messages.messages.forEach(msg => {
  console.log(`[${msg.timestamp}] ${msg.role}: ${msg.content}`);
});

// Get file changes made in the thread
const fileChanges = await codebolt.thread.getThreadFileChanges(thread.threadId);
console.log('Files modified:', fileChanges.changes);
```

### Managing Thread Status

```typescript
// Update thread status when work is complete
await codebolt.thread.updateThreadStatus(
  thread.threadId,
  'completed'
);

// Archive old threads
await codebolt.thread.updateThreadStatus(
  oldThreadId,
  'archived'
);

// Delete threads that are no longer needed
await codebolt.thread.deleteThread(threadId);
```

<CBAPICategory />
