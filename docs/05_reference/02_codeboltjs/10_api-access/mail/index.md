---
cbapicategory:
  - name: registerAgent
    link: /docs/api/apiaccess/mail/registerAgent
    description: Registers an agent with the mail system to enable sending and receiving messages.
  - name: listAgents
    link: /docs/api/apiaccess/mail/listAgents
    description: Lists all registered agents in the mail system.
  - name: getAgent
    link: /docs/api/apiaccess/mail/getAgent
    description: Retrieves details about a specific registered agent.
  - name: createThread
    link: /docs/api/apiaccess/mail/createThread
    description: Creates a new mail thread for conversation between agents or users.
  - name: findOrCreateThread
    link: /docs/api/apiaccess/mail/findOrCreateThread
    description: Finds an existing thread or creates a new one based on participants.
  - name: listThreads
    link: /docs/api/apiaccess/mail/listThreads
    description: Lists all mail threads with optional filtering and pagination.
  - name: getThread
    link: /docs/api/apiaccess/mail/getThread
    description: Retrieves detailed information about a specific mail thread.
  - name: updateThreadStatus
    link: /docs/api/apiaccess/mail/updateThreadStatus
    description: "Updates the status of a mail thread (open, closed, archived)."
  - name: archiveThread
    link: /docs/api/apiaccess/mail/archiveThread
    description: Archives a mail thread to remove it from active view.
  - name: fetchInbox
    link: /docs/api/apiaccess/mail/fetchInbox
    description: "Fetches messages from the agent's inbox."
  - name: sendMessage
    link: /docs/api/apiaccess/mail/sendMessage
    description: Sends a message to a specific mail thread.
  - name: replyMessage
    link: /docs/api/apiaccess/mail/replyMessage
    description: Replies to an existing message in a thread.
  - name: getMessage
    link: /docs/api/apiaccess/mail/getMessage
    description: Retrieves a specific message by its ID.
  - name: getMessages
    link: /docs/api/apiaccess/mail/getMessages
    description: Retrieves all messages from a specific mail thread.
  - name: markRead
    link: /docs/api/apiaccess/mail/markRead
    description: Marks a message or thread as read.
  - name: acknowledge
    link: /docs/api/apiaccess/mail/acknowledge
    description: Acknowledges receipt of a message.
  - name: search
    link: /docs/api/apiaccess/mail/search
    description: Searches for messages matching specific criteria.
  - name: summarizeThread
    link: /docs/api/apiaccess/mail/summarizeThread
    description: "Generates a summary of a mail thread's conversation."
  - name: reserveFiles
    link: /docs/api/apiaccess/mail/reserveFiles
    description: Reserves files for exclusive access during collaboration.
  - name: releaseFiles
    link: /docs/api/apiaccess/mail/releaseFiles
    description: Releases file reservations after collaboration is complete.
  - name: forceReserveFiles
    link: /docs/api/apiaccess/mail/forceReserveFiles
    description: Forcefully reserves files, overriding existing reservations.
  - name: listReservations
    link: /docs/api/apiaccess/mail/listReservations
    description: Lists all active file reservations.
  - name: checkConflicts
    link: /docs/api/apiaccess/mail/checkConflicts
    description: Checks for potential conflicts in file reservations.

---
# Mail API

The Mail API provides comprehensive messaging and collaboration capabilities, enabling agents to communicate through threads, manage messages, and coordinate file access during collaborative work.

## Overview

The mail module enables you to:
- **Agent Communication**: Register and manage agents for inter-agent messaging
- **Thread Management**: Create and manage conversation threads
- **Message Exchange**: Send, receive, and search messages
- **Collaboration**: Coordinate file access with reservation system
- **Status Tracking**: Monitor message and thread status

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Register an agent
await codebolt.mail.registerAgent({
  agentId: 'agent-001',
  name: 'Developer Agent',
  capabilities: ['code-review', 'debugging']
});

// Create a conversation thread
const thread = await codebolt.mail.createThread({
  subject: 'Code Review: Authentication Module',
  participants: ['agent-001', 'agent-002'],
  type: 'agent-to-agent',
  metadata: {
    project: 'auth-system',
    priority: 'high'
  }
});

// Send a message
await codebolt.mail.sendMessage({
  threadId: thread.thread.id,
  content: 'Please review the authentication changes',
  senderId: 'agent-001'
});

// Fetch inbox for new messages
const inbox = await codebolt.mail.fetchInbox({
  agentId: 'agent-002',
  limit: 10
});

console.log('New messages:', inbox.messages);
```

## Response Structure

All mail API functions return responses with a consistent structure:

```typescript
{
  success: boolean;
  data?: any;
  error?: string;
  timestamp?: string;
}
```

## Common Use Cases

### Agent-to-Agent Communication

```typescript
// Register multiple agents
await codebolt.mail.registerAgent({
  agentId: 'frontend-agent',
  name: 'Frontend Developer',
  capabilities: ['ui', 'react']
});

await codebolt.mail.registerAgent({
  agentId: 'backend-agent',
  name: 'Backend Developer',
  capabilities: ['api', 'database']
});

// Create a thread for collaboration
const thread = await codebolt.mail.createThread({
  subject: 'API Integration Discussion',
  participants: ['frontend-agent', 'backend-agent'],
  type: 'agent-to-agent'
});

// Exchange messages
await codebolt.mail.sendMessage({
  threadId: thread.thread.id,
  content: 'I need the new API endpoints for user management',
  senderId: 'frontend-agent'
});
```

### File Collaboration with Reservations

```typescript
// Reserve files for exclusive access
await codebolt.mail.reserveFiles({
  agentId: 'agent-001',
  files: ['src/auth/login.ts', 'src/auth/session.ts'],
  threadId: 'thread-123'
});

// Work on the files...

// Release when done
await codebolt.mail.releaseFiles({
  agentId: 'agent-001',
  files: ['src/auth/login.ts', 'src/auth/session.ts']
});
```

### Message Search and Retrieval

```typescript
// Search for specific messages
const results = await codebolt.mail.search({
  query: 'authentication bug',
  threadId: 'thread-123',
  limit: 20
});

// Get thread summary
const summary = await codebolt.mail.summarizeThread({
  threadId: 'thread-123'
});

console.log('Thread summary:', summary.summary);
```

<CBAPICategory />
