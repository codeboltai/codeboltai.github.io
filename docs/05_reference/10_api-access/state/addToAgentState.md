---
name: addToAgentState
cbbaseinfo:
  description: "Adds a key-value pair to the agent's state."
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: "The key to add to the agent's state."
    - name: value
      typeName: string
      description: The value to associate with the key.
  returns:
    signatureTypeName: "Promise<AddToAgentStateResponse>"
    description: A promise that resolves with the response to the addition request.
    typeArgs: []
data:
  name: addToAgentState
  category: state
  link: addToAgentState.md
---
# addToAgentState

```typescript
codebolt.state.addToAgentState(key: string, value: string): Promise<AddToAgentStateResponse>
```

Adds a key-value pair to the agent's state.
### Parameters

- **`key`** (string): The key to add to the agent's state.
- **`value`** (string): The value to associate with the key.

### Returns

- **`Promise<AddToAgentStateResponse>`**: A promise that resolves with the response to the addition request.

### Example 1: Add Simple Value to Agent State

```js
// Add a key-value pair to agent state
const result = await codebolt.state.addToAgentState('lastAction', 'file-read');
console.log('Added to agent state:', result);

// Response structure:
// {
//   success: true,
//   key: 'lastAction',
//   value: 'file-read'
// }
```

### Example 2: Track Task Progress

```js
// Track task progress in agent state
async function trackTaskProgress(taskId, step) {
  const key = `task_${taskId}_step`;
  const value = step.toString();

  const result = await codebolt.state.addToAgentState(key, value);

  console.log(`Task ${taskId} step: ${step}`);

  return result;
}

// Usage
await trackTaskProgress('task-001', 'initialization');
await trackTaskProgress('task-001', 'processing');
await trackTaskProgress('task-001', 'completion');
```

### Example 3: Store Timestamps

```js
// Store operation timestamps
async function recordOperation(operationName) {
  const timestamp = new Date().toISOString();
  const key = `last_${operationName}_time`;

  await codebolt.state.addToAgentState(key, timestamp);

  console.log(`Recorded ${operationName} at ${timestamp}`);

  // Also update the last operation
  await codebolt.state.addToAgentState('lastOperation', operationName);

  return timestamp;
}

// Usage
await recordOperation('data-sync');
await recordOperation('backup');
await recordOperation('cleanup');
```

### Example 4: Status Tracking

```js
// Track agent status and mode
async function updateAgentStatus(status, mode) {
  // Update status
  await codebolt.state.addToAgentState('status', status);

  // Update mode
  await codebolt.state.addToAgentState('mode', mode);

  // Update timestamp
  await codebolt.state.addToAgentState(
    'lastStatusUpdate',
    new Date().toISOString()
  );

  console.log(`Agent status: ${status}, mode: ${mode}`);

  // Verify update
  const agentState = await codebolt.state.getAgentState();
  return agentState;
}

// Usage
await updateAgentStatus('active', 'processing');
await updateAgentStatus('idle', 'waiting');
```

### Example 5: Error Logging

```js
// Log errors to agent state
async function logError(errorType, errorMessage) {
  const timestamp = new Date().toISOString();
  const key = `error_${timestamp}`;

  const errorValue = JSON.stringify({
    type: errorType,
    message: errorMessage,
    timestamp: timestamp
  });

  await codebolt.state.addToAgentState(key, errorValue);

  // Update error count
  const currentState = await codebolt.state.getAgentState();
  const errorCount = parseInt(currentState.errorCount || '0');
  await codebolt.state.addToAgentState('errorCount', (errorCount + 1).toString());

  console.log(`Error logged: ${errorType} - ${errorMessage}`);

  return { key, value: errorValue };
}

// Usage
await logError('FileNotFound', 'Unable to locate config.json');
await logError('NetworkError', 'Connection timeout');
```

### Example 6: Metadata Storage

```js
// Store metadata about agent operations
async function storeMetadata(category, data) {
  const key = `metadata_${category}`;
  const value = JSON.stringify(data);

  await codebolt.state.addToAgentState(key, value);

  // Update metadata timestamp
  await codebolt.state.addToAgentState(
    `last_${category}_update`,
    new Date().toISOString()
  );

  console.log(`Stored metadata for ${category}`);

  return { key, value };
}

// Usage
await storeMetadata('file-operations', {
  filesProcessed: 42,
  totalSize: 1024000,
  errors: 0
});

await storeMetadata('network-requests', {
  total: 15,
  successful: 14,
  failed: 1
});
```

### Explanation

The `codebolt.state.addToAgentState(key, value)` function adds a key-value pair to the agent's state. This is useful for tracking agent activity, storing metadata, and maintaining state across operations.

**Key Points:**
- **Key-Value Storage**: Stores string key-value pairs
- **Agent-Specific**: State is scoped to the agent
- **Persistent**: State persists across operations
- **String Values**: Both key and value must be strings
- **Additive**: Adds or updates existing keys

**Parameters:**
1. **key** (string): The key to store
2. **value** (string): The value to associate with the key

**Return Value Structure:**
```js
{
  success: boolean,        // Whether the operation succeeded
  key: string,            // The key that was added
  value: string,          // The value that was set
  timestamp?: string,     // Optional timestamp of operation
  previousValue?: string  // Optional previous value if key existed
}
```

**Common Use Cases:**
- Task progress tracking
- Status updates
- Error logging
- Timestamp storage
- Metadata management
- Operation history

**Best Practices:**
1. Use descriptive, consistent key names
2. Convert complex data to JSON strings
3. Track timestamps for temporal data
4. Use prefixes for related keys (e.g., "task_*")
5. Consider key naming conventions
6. Handle string conversion for non-string values

**Key Naming Conventions:**
```js
// Status tracking
'status', 'mode', 'phase'

// Timestamps
'last_update', 'last_operation_time'

// Task-specific
'task_001_status', 'task_001_step'

// Metadata
'metadata_files', 'metadata_network'

// Error tracking
'error_count', 'last_error'
```

**Data Storage Patterns:**

**Simple Values:**
```js
await codebolt.state.addToAgentState('status', 'active');
await codebolt.state.addToAgentState('count', '42');
```

**Complex Data (JSON):**
```js
const data = { processed: 10, failed: 2 };
await codebolt.state.addToAgentState('stats', JSON.stringify(data));
```

**Timestamps:**
```js
const timestamp = new Date().toISOString();
await codebolt.state.addToAgentState('lastUpdate', timestamp);
```

**Typical Workflow:**
```js
// 1. Perform operation
const result = await performOperation();

// 2. Store result in state
await codebolt.state.addToAgentState('lastResult', JSON.stringify(result));

// 3. Update status
await codebolt.state.addToAgentState('status', 'completed');

// 4. Record timestamp
await codebolt.state.addToAgentState('completedAt', new Date().toISOString());

// 5. Verify state
const state = await codebolt.state.getAgentState();
```

**Advanced Patterns:**
- Task progress tracking
- Error logging and counting
- Metadata management
- Status history
- Operation metrics
- State-based workflows

**Related Functions:**
- `getAgentState()`: Retrieve agent state
- `getApplicationState()`: Get application state
- `getProjectState()`: Get project state
- `updateProjectState()`: Update project state

**Notes:**
- Both key and value must be strings
- Use JSON.stringify() for complex objects
- Overwrites existing keys
- No automatic cleanup of old keys
- Consider state size limits
- Use for agent-specific data only
- State persists until cleared or overwritten