---
sidebar_position: 35
---

# Side Execution

Tools for running isolated code execution and action blocks. Side execution allows you to run code or ActionBlocks in an isolated child process, providing a safe environment for executing tasks without affecting the main process.

## Tools

### side_execution_start_action_block
Start a side execution with an ActionBlock path. This runs code in an isolated child process using a predefined ActionBlock.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| action_block_path | string | Yes | Path to the ActionBlock directory |
| params | object | No | Additional parameters to pass to the ActionBlock |
| timeout | number | No | Execution timeout in milliseconds (default: 5 minutes) |

**Example:**
```typescript
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_start_action_block",
  {
    action_block_path: "/path/to/actionblock",
    params: { key: "value" },
    timeout: 300000
  }
);
```

---

### side_execution_start_code
Start a side execution with inline JavaScript code. This runs code in an isolated child process.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| inline_code | string | Yes | JavaScript code to execute in the side execution |
| params | object | No | Additional parameters available in the execution context |
| timeout | number | No | Execution timeout in milliseconds (default: 5 minutes) |

**Example:**
```typescript
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_start_code",
  {
    inline_code: "console.log('Hello from side execution'); return { success: true };",
    params: { userId: 123 },
    timeout: 60000
  }
);
```

---

### side_execution_stop
Stop a running side execution by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| side_execution_id | string | Yes | ID of the side execution to stop |

**Example:**
```typescript
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_stop",
  {
    side_execution_id: "exec-12345-abcde"
  }
);
```

---

### side_execution_list_action_blocks
List all available ActionBlocks that can be used for side execution. Optionally filter by project path.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| project_path | string | No | Optional project path to search for ActionBlocks |

**Example:**
```typescript
// List all ActionBlocks
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_list_action_blocks",
  {}
);

// List ActionBlocks in a specific project
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_list_action_blocks",
  {
    project_path: "/path/to/project"
  }
);
```

---

### side_execution_get_status
Get the status of a side execution by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| side_execution_id | string | Yes | ID of the side execution |

**Example:**
```typescript
const result = await codebolt.tools.executeTool(
  "codebolt.sideExecution",
  "side_execution_get_status",
  {
    side_execution_id: "exec-12345-abcde"
  }
);
```

**Response includes:**
- `status`: Current execution status (e.g., "running", "completed", "failed")
- `result`: The execution result (if completed)
- `startTime`: When the execution started
- `endTime`: When the execution ended (if completed)
