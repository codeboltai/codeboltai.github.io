---
sidebar_position: 40
---

# Mail

Tools for agent messaging, mail threads, and communication between agents. The mail system provides a comprehensive messaging infrastructure for multi-agent coordination, including thread management, message handling, and file reservation capabilities.

## Tools

### mail_register_agent
Registers an agent in the mail system with specified capabilities and metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The unique identifier for the agent |
| name | string | Yes | The name of the agent |
| capabilities | string[] | No | The capabilities of the agent |
| metadata | object | No | Additional metadata for the agent |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_register_agent", {
  agentId: "agent-001",
  name: "Code Review Agent",
  capabilities: ["code-review", "testing"],
  metadata: { version: "1.0" }
});
```

---

### mail_list_agents
Lists all registered agents in the mail system.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_list_agents", {});
```

---

### mail_get_agent
Gets details of a specific agent by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The unique identifier of the agent to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_get_agent", {
  agentId: "agent-001"
});
```

---

### mail_create_thread
Creates a new mail thread with specified subject, participants, and optional type.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| subject | string | Yes | The subject of the thread |
| participants | string[] | Yes | The participants in the thread |
| type | string | No | The type of thread: "agent-to-agent", "agent-to-user", or "broadcast" |
| metadata | object | No | Additional metadata for the thread |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_create_thread", {
  subject: "Code Review Discussion",
  participants: ["agent-001", "agent-002"],
  type: "agent-to-agent",
  metadata: { priority: "high" }
});
```

---

### mail_find_or_create_thread
Finds an existing thread matching the criteria or creates a new one if not found.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| subject | string | Yes | The subject of the thread |
| participants | string[] | Yes | The participants in the thread |
| type | string | No | The type of thread: "agent-to-agent", "agent-to-user", or "broadcast" |
| metadata | object | No | Additional metadata for the thread |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_find_or_create_thread", {
  subject: "Bug Fix Coordination",
  participants: ["agent-001", "agent-002", "agent-003"],
  type: "agent-to-agent"
});
```

---

### mail_list_threads
Lists mail threads with optional filters for type, status, participant, and search.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | string | No | Filter by thread type: "agent-to-agent", "agent-to-user", or "broadcast" |
| status | string | No | Filter by thread status: "open", "closed", or "archived" |
| participant | string | No | Filter by participant |
| search | string | No | Search query |
| limit | number | No | Maximum number of threads to return |
| offset | number | No | Offset for pagination |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_list_threads", {
  type: "agent-to-agent",
  status: "open",
  limit: 10,
  offset: 0
});
```

---

### mail_get_thread
Gets details of a specific thread by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The unique identifier of the thread to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_get_thread", {
  threadId: "thread-123"
});
```

---

### mail_update_thread_status
Updates the status of a thread (open, closed, or archived).

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The unique identifier of the thread to update |
| status | string | Yes | The new status for the thread: "open", "closed", or "archived" |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_update_thread_status", {
  threadId: "thread-123",
  status: "closed"
});
```

---

### mail_archive_thread
Archives a thread by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The unique identifier of the thread to archive |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_archive_thread", {
  threadId: "thread-123"
});
```

---

### mail_fetch_inbox
Fetches messages from the inbox for a specific agent with optional pagination and filters.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID to fetch inbox for |
| limit | number | No | Maximum number of messages to fetch |
| offset | number | No | Offset for pagination |
| unreadOnly | boolean | No | Filter by read status |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_fetch_inbox", {
  agentId: "agent-001",
  limit: 20,
  unreadOnly: true
});
```

---

### mail_send_message
Sends a message in a thread from one agent to one or more recipients.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The thread ID to send the message to |
| from | string | Yes | The sender agent ID |
| to | string[] | Yes | The recipient agent IDs |
| content | string | Yes | The message content |
| messageType | string | No | The message type |
| metadata | object | No | Additional metadata for the message |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_send_message", {
  threadId: "thread-123",
  from: "agent-001",
  to: ["agent-002", "agent-003"],
  content: "Please review the changes in module X.",
  messageType: "request",
  metadata: { urgency: "normal" }
});
```

---

### mail_reply_message
Replies to a specific message in a thread.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messageId | string | Yes | The message ID to reply to |
| from | string | Yes | The sender agent ID |
| content | string | Yes | The reply content |
| metadata | object | No | Additional metadata for the reply |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_reply_message", {
  messageId: "msg-456",
  from: "agent-002",
  content: "Review completed. All tests pass.",
  metadata: { status: "approved" }
});
```

---

### mail_get_message
Gets a specific message by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messageId | string | Yes | The unique identifier of the message to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_get_message", {
  messageId: "msg-456"
});
```

---

### mail_get_messages
Gets all messages in a specific thread.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The thread ID to get messages from |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_get_messages", {
  threadId: "thread-123"
});
```

---

### mail_mark_read
Marks one or more messages as read for a specific agent.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messageIds | string[] | Yes | The message IDs to mark as read |
| agentId | string | Yes | The agent ID marking the messages as read |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_mark_read", {
  messageIds: ["msg-456", "msg-457", "msg-458"],
  agentId: "agent-001"
});
```

---

### mail_acknowledge
Acknowledges receipt of one or more messages.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messageIds | string[] | Yes | The message IDs to acknowledge |
| agentId | string | Yes | The agent ID acknowledging the messages |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_acknowledge", {
  messageIds: ["msg-456", "msg-457"],
  agentId: "agent-002"
});
```

---

### mail_search
Searches messages with optional filters for thread, sender, and pagination.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | The search query |
| agentId | string | Yes | The agent ID performing the search |
| threadId | string | No | Filter by thread ID |
| from | string | No | Filter by sender |
| limit | number | No | Maximum number of results |
| offset | number | No | Offset for pagination |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_search", {
  query: "code review",
  agentId: "agent-001",
  limit: 25,
  offset: 0
});
```

---

### mail_summarize_thread
Generates a summary of a thread.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The thread ID to summarize |
| agentId | string | Yes | The agent ID requesting the summary |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_summarize_thread", {
  threadId: "thread-123",
  agentId: "agent-001"
});
```

---

### mail_reserve_files
Reserves files for exclusive access by an agent.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID requesting the reservation |
| files | string[] | Yes | The file paths to reserve |
| reason | string | No | The reason for reservation |
| duration | number | No | Duration of reservation in seconds |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_reserve_files", {
  agentId: "agent-001",
  files: ["src/module.ts", "src/utils.ts"],
  reason: "Refactoring module structure",
  duration: 3600
});
```

---

### mail_release_files
Releases file reservations held by an agent.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID releasing the reservation |
| files | string[] | Yes | The file paths to release |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_release_files", {
  agentId: "agent-001",
  files: ["src/module.ts", "src/utils.ts"]
});
```

---

### mail_force_reserve_files
Forcefully reserves files, overriding existing reservations if necessary.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID requesting the forced reservation |
| files | string[] | Yes | The file paths to force reserve |
| reason | string | No | The reason for forced reservation |
| duration | number | No | Duration of reservation in seconds |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_force_reserve_files", {
  agentId: "agent-admin",
  files: ["src/critical.ts"],
  reason: "Emergency hotfix required",
  duration: 1800
});
```

---

### mail_list_reservations
Lists file reservations with optional filters for agent and file.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | No | Filter by agent ID |
| file | string | No | Filter by file path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_list_reservations", {
  agentId: "agent-001"
});
```

---

### mail_check_conflicts
Checks if there are any conflicts for reserving specified files.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID checking for conflicts |
| files | string[] | Yes | The file paths to check for conflicts |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.mail", "mail_check_conflicts", {
  agentId: "agent-002",
  files: ["src/module.ts", "src/config.ts"]
});
```
