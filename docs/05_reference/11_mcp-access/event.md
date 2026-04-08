---
sidebar_position: 14
---

# Event

Tools for managing background agent tracking, monitoring completion events, and handling inter-agent communication.

## Tools

### event_add_running_agent
Add a running background agent to the tracking system. This allows monitoring and waiting for agent completion.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| thread_id | string | Yes | The thread ID of the background agent |
| data | any | Yes | The agent data to store |
| group_id | string | No | Optional group ID for grouping agents |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_add_running_agent", {
    thread_id: "agent-thread-123",
    data: { name: "DataProcessor", status: "running" },
    group_id: "batch-processing-group"
});
```

---

### event_get_running_count
Get the number of currently running background agents.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_get_running_count", {});
```

---

### event_check_completion
Check if any background agent has completed. Returns completion data if available, null otherwise. This is a non-blocking check.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_check_completion", {});
```

---

### event_on_completion
Wait for a background agent to complete. This is a blocking call that resolves when an agent completes.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_on_completion", {});
```

---

### event_check_grouped_completion
Check if any grouped background agent has completed. Returns completion data if available, null otherwise. This is a non-blocking check.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_check_grouped_completion", {});
```

---

### event_on_grouped_completion
Wait for a grouped background agent to complete. This is a blocking call that resolves when a grouped agent completes.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_on_grouped_completion", {});
```

---

### event_check_agent_event
Check if any agent event has been received. Returns event data if available, null otherwise. This is a non-blocking check.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_check_agent_event", {});
```

---

### event_on_agent_event
Wait for an agent event to be received. This is a blocking call that resolves when an agent event arrives.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_on_agent_event", {});
```

---

### event_wait_any
Wait for any external event (Background Completion, Group Completion, or Agent Event). This is a blocking call that resolves when any of these events occur.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.event", "event_wait_any", {});
```
