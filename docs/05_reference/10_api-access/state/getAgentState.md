---
name: getAgentState
cbbaseinfo:
  description: Gets the current state of the agent.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetAgentStateResponse>"
    description: "A promise that resolves with the agent's state data."
    typeArgs: []
data:
  name: getAgentState
  category: state
  link: getAgentState.md
---
# getAgentState

```typescript
codebolt.state.getAgentState(): Promise<GetAgentStateResponse>
```

Gets the current state of the agent.
### Returns

- **`Promise<GetAgentStateResponse>`**: A promise that resolves with the agent's state data.

### Example 1: Basic Agent State Retrieval

```js
// Get the current agent state
const agentState = await codebolt.state.getAgentState();
console.log('Agent state:', agentState);

// Response structure:
// {
//   status: 'active',
//   mode: 'processing',
//   lastOperation: 'data-sync',
//   // ... other agent-specific properties
// }
```

### Example 2: Check Agent Status

```js
// Check current agent status
async function checkAgentStatus() {
  const state = await codebolt.state.getAgentState();

  const status = {
    currentStatus: state.status || 'unknown',
    mode: state.mode || 'unknown',
    lastOperation: state.lastOperation || 'none',
    lastUpdate: state.lastStatusUpdate || null
  };

  console.log('Agent Status:', status);

  return status;
}

// Usage
const status = await checkAgentStatus();
console.log(`Agent is ${status.currentStatus} in ${status.mode} mode`);
```

### Example 3: Retrieve Task Progress

```js
// Get task progress from agent state
async function getTaskProgress(taskId) {
  const state = await codebolt.state.getAgentState();

  const progress = {
    step: state[`task_${taskId}_step`] || 'not started',
    status: state[`task_${taskId}_status`] || 'unknown',
    startTime: state[`task_${taskId}_start`] || null,
    endTime: state[`task_${taskId}_end`] || null
  };

  console.log(`Task ${taskId} progress:`, progress);

  return progress;
}

// Usage
const progress = await getTaskProgress('task-001');
console.log(`Current step: ${progress.step}`);
```

### Example 4: Agent Activity Summary

```js
// Generate agent activity summary
async function getActivitySummary() {
  const state = await codebolt.state.getAgentState();

  const summary = {
    totalOperations: parseInt(state.operationCount || '0'),
    errors: parseInt(state.errorCount || '0'),
    lastOperation: state.lastOperation || 'none',
    lastError: state.lastError || null,
    uptime: state.uptime || 'unknown',
    mode: state.mode || 'unknown'
  };

  console.log('Agent Activity Summary:');
  console.log(`  Operations: ${summary.totalOperations}`);
  console.log(`  Errors: ${summary.errors}`);
  console.log(`  Last Operation: ${summary.lastOperation}`);
  console.log(`  Mode: ${summary.mode}`);

  return summary;
}

// Usage
const summary = await getActivitySummary();
if (summary.errors > 10) {
  console.log('Warning: High error count');
}
```

### Example 5: State-Based Decision Making

```js
// Make decisions based on agent state
async function makeStateBasedDecision() {
  const state = await codebolt.state.getAgentState();

  // Check if agent is busy
  if (state.status === 'busy' || state.mode === 'processing') {
    console.log('Agent is busy, queuing operation');
    return { action: 'queue', reason: 'Agent busy' };
  }

  // Check error rate
  const errorCount = parseInt(state.errorCount || '0');
  if (errorCount > 5) {
    console.log('High error count, pausing operations');
    return { action: 'pause', reason: 'High error rate' };
  }

  // Check if maintenance mode
  if (state.mode === 'maintenance') {
    console.log('Maintenance mode active');
    return { action: 'defer', reason: 'Maintenance mode' };
  }

  // Ready to proceed
  console.log('Agent ready for operations');
  return { action: 'proceed', reason: 'Agent ready' };
}

// Usage
const decision = await makeStateBasedDecision();
if (decision.action === 'proceed') {
  // Execute operation
}
```

### Example 6: Monitor Agent State Changes

```js
// Monitor agent state for changes
async function monitorAgentState(intervalMs = 5000) {
  let previousState = await codebolt.state.getAgentState();

  const monitor = setInterval(async () => {
    const currentState = await codebolt.state.getAgentState();

    const changes = detectStateChanges(previousState, currentState);

    if (Object.keys(changes).length > 0) {
      console.log('Agent state changed:', changes);

      // React to specific changes
      if (changes.status) {
        console.log(`Status changed: ${changes.status.from} -> ${changes.status.to}`);
      }

      if (changes.mode) {
        console.log(`Mode changed: ${changes.mode.from} -> ${changes.mode.to}`);
      }
    }

    previousState = currentState;
  }, intervalMs);

  // Return cleanup function
  return () => clearInterval(monitor);
}

function detectStateChanges(prev, current) {
  const changes = {};
  const keysToMonitor = ['status', 'mode', 'lastOperation', 'errorCount'];

  keysToMonitor.forEach(key => {
    if (prev[key] !== current[key]) {
      changes[key] = {
        from: prev[key],
        to: current[key]
      };
    }
  });

  return changes;
}

// Usage
const stopMonitoring = await monitorAgentState(3000);

// Later, stop monitoring
// stopMonitoring();
```

### Explanation

The `codebolt.state.getAgentState()` function retrieves the current state of the agent. This provides access to all agent-specific state data that has been stored using `addToAgentState()`.

**Key Points:**
- **Agent-Specific**: Returns state specific to the agent
- **Comprehensive**: Includes all stored key-value pairs
- **Read-Only**: Retrieves state without modifying it
- **Real-Time**: Reflects current agent state
- **Dynamic**: Structure depends on what has been stored

**Return Value Structure:**
```js
{
  // Common properties (depends on what was stored)
  status: string,              // Agent status
  mode: string,                // Agent mode
  lastOperation: string,       // Last operation performed
  lastUpdate: string,          // Last update timestamp
  errorCount: string,          // Number of errors
  operationCount: string,      // Number of operations
  // ... other stored key-value pairs
  // Task-specific keys like:
  // task_001_step: 'processing',
  // task_001_status: 'active',
  // etc.
}
```

**Common Use Cases:**
- Checking agent status
- Retrieving task progress
- Activity monitoring
- State-based decisions
- Debugging and diagnostics
- Performance tracking

**Best Practices:**
1. Cache state when appropriate
2. Handle missing properties gracefully
3. Use for monitoring and decision making
4. Combine with addToAgentState() for updates
5. Monitor specific keys for changes

**Typical Workflow:**
```js
// 1. Get agent state
const state = await codebolt.state.getAgentState();

// 2. Check specific properties
if (state.status === 'idle') {
  // 3. Take action based on state
  await codebolt.state.addToAgentState('status', 'active');
}

// 4. Verify update
const updatedState = await codebolt.state.getAgentState();
```

**Common State Properties:**
- **status**: Current agent status (active, idle, busy, etc.)
- **mode**: Agent mode (processing, waiting, maintenance, etc.)
- **lastOperation**: Most recent operation
- **lastUpdate**: Last state update timestamp
- **errorCount**: Number of errors encountered
- **operationCount**: Total operations performed

**Task-Specific State:**
```js
{
  task_001_step: 'processing',
  task_001_status: 'active',
  task_001_start: '2024-01-19T10:00:00Z',
  task_002_step: 'completed',
  task_002_status: 'done',
}
```

**Advanced Patterns:**
- State change monitoring
- Activity summary generation
- State-based decision making
- Task progress tracking
- Error rate monitoring
- Performance metrics

**Related Functions:**
- `addToAgentState()`: Add to agent state
- `getApplicationState()`: Get application state
- `getProjectState()`: Get project state
- `updateProjectState()`: Update project state

**Notes:**
- State structure is dynamic and depends on stored data
- Properties may be missing if never set
- All values are strings (parse for numbers/objects)
- State persists until explicitly changed
- Use for read-only access to agent data
- Consider polling for real-time updates
- Can be used for debugging agent behavior