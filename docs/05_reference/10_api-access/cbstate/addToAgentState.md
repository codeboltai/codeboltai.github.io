---
name: addToAgentState
cbbaseinfo:
  description: "Adds a key-value pair to the agent's state on the server via WebSocket."
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: "The key to add to the agent's state."
    - name: value
      typeName: string
      description: The value associated with the key.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response to the addition request containing success status.
    typeArgs:
      - type: reference
        name: AddToAgentStateResponse
data:
  name: addToAgentState
  category: cbstate
  link: addToAgentState.md
---
# addToAgentState

```typescript
codebolt.cbstate.addToAgentState(key: string, value: string): Promise<AddToAgentStateResponse>
```

Adds a key-value pair to the agent's state on the server via WebSocket. 
### Parameters

- **`key`** (string): The key to add to the agent's state.
- **`value`** (string): The value associated with the key.

### Returns

- **`Promise<AddToAgentStateResponse>`**: A promise that resolves with the response to the addition request containing success status.

### Response Structure

The method returns a Promise that resolves to an [`AddToAgentStateResponse`](/docs/api/11_doc-type-ref/types/interfaces/AddToAgentStateResponse) object with the following properties:

- **`type`** (string): Always "addToAgentStateResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`success`** (boolean): Indicates if the operation was successful.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

## What is addToAgentState?

The `addToAgentState` function allows you to store temporary information that's specific to your current agent session. Think of it as a temporary storage system where you can save data that only needs to exist while your agent is running.

**Key Points:**
- 🤖 **Agent-specific storage** - Data is only available to the current agent session
- ⏱️ **Temporary** - Information is cleared when the agent session ends
- 🔄 **Session-based** - Perfect for storing temporary settings and session data
- 📝 **String values only** - All values must be stored as strings

## When to Use This

Use `addToAgentState` when you need to:
- Store temporary user preferences for the current session
- Keep track of the agent's current status or progress
- Save session-specific configuration
- Store temporary data that doesn't need to persist after the agent stops

## Basic Usage

### Simple Example - Store User Preference
```js
// Save a user's theme preference for this session
const result = await codebolt.cbstate.addToAgentState('user_preference', 'dark_theme');
console.log('Response:', result);
// Output: { type: 'addToAgentStateResponse', payload: { sucess: true } }
```

### Store Different Types of Session Data
```js
// Store session ID
await codebolt.cbstate.addToAgentState('session_id', 'sess_' + Date.now());

// Store user language preference
await codebolt.cbstate.addToAgentState('user_language', 'en');

// Store debug mode setting
await codebolt.cbstate.addToAgentState('debug_mode', 'true');

// Store current timestamp
await codebolt.cbstate.addToAgentState('last_activity', new Date().toISOString());

// Store current step in a process
await codebolt.cbstate.addToAgentState('current_step', '3');
```

## Working with Complex Data

Since agent state only accepts strings, you'll need to convert objects and arrays to JSON strings:

```js
// Store user preferences as JSON
const userPreferences = {
    theme: 'dark',
    notifications: true,
    autoSave: false,
    language: 'en'
};
await codebolt.cbstate.addToAgentState('user_preferences', JSON.stringify(userPreferences));

// Store a list of completed tasks
const completedTasks = ['task1', 'task2', 'task3'];
await codebolt.cbstate.addToAgentState('completed_tasks', JSON.stringify(completedTasks));

// Store configuration settings
const agentConfig = {
    maxRetries: 3,
    timeout: 5000,
    enableLogging: true
};
await codebolt.cbstate.addToAgentState('agent_config', JSON.stringify(agentConfig));
```

## Complete Example - Agent Session Setup

Here's how you might set up an agent session with various state data:

```js
async function setupAgentSession() {
    try {
        // Basic session info
        await codebolt.cbstate.addToAgentState('session_id', 'sess_' + Date.now());
        await codebolt.cbstate.addToAgentState('user_language', 'en');
        await codebolt.cbstate.addToAgentState('debug_mode', 'false');
        
        // User preferences
        const preferences = {
            theme: 'dark',
            notifications: true,
            autoComplete: true
        };
        await codebolt.cbstate.addToAgentState('user_preferences', JSON.stringify(preferences));
        
        // Track session start time
        await codebolt.cbstate.addToAgentState('session_start', new Date().toISOString());
        
        // Initialize progress tracking
        await codebolt.cbstate.addToAgentState('current_step', '1');
        await codebolt.cbstate.addToAgentState('total_steps', '5');
        
        console.log('✅ Agent session setup complete!');
    } catch (error) {
        console.error('❌ Session setup failed:', error);
    }
}

// Run the setup
setupAgentSession();
```

## Error Handling

Always handle potential errors when adding to agent state:

```js
async function addToAgentStateSafely(key, value) {
    try {
        const result = await codebolt.cbstate.addToAgentState(key, value);
        
        if (result.payload.sucess) { // Note: 'sucess' is the actual field name
            console.log(`✅ Successfully added ${key} to agent state`);
            return true;
        } else {
            console.log(`⚠️ Unexpected response:`, result);
            return false;
        }
    } catch (error) {
        console.error(`❌ Failed to add ${key}:`, error.message);
        return false;
    }
}

// Usage
const success = await addToAgentStateSafely('user_status', 'active');
if (success) {
    console.log('State update confirmed!');
}
```

## Adding Multiple Items

When you need to add several items to agent state:

```js
async function addMultipleToAgentState() {
    const stateItems = [
        { key: 'session_id', value: 'sess_' + Date.now() },
        { key: 'user_language', value: 'en' },
        { key: 'debug_mode', value: 'true' },
        { key: 'last_activity', value: new Date().toISOString() }
    ];
    
    console.log('Adding items to agent state...');
    
    for (const item of stateItems) {
        try {
            const result = await codebolt.cbstate.addToAgentState(item.key, item.value);
            if (result.payload.sucess) {
                console.log(`✅ ${item.key}: ${item.value}`);
            }
        } catch (error) {
            console.error(`❌ Failed to add ${item.key}:`, error.message);
        }
    }
    
    console.log('Agent state setup complete!');
}

addMultipleToAgentState();
```

## Response Format

When you call `addToAgentState`, you'll get back a response like this:

```js
{
  type: 'addToAgentStateResponse',
  payload: {
    sucess: true  // Note: 'sucess' is the actual field name (not 'success')
  }
}
```

## Advanced Usage Patterns

### Pattern 1: State Machine Implementation

```javascript
class AgentStateMachine {
  constructor() {
    this.states = ['idle', 'processing', 'completed', 'error'];
  }

  async transition(newState, metadata = {}) {
    if (!this.states.includes(newState)) {
      throw new Error(`Invalid state: ${newState}`);
    }

    // Store state transition
    await codebolt.cbstate.addToAgentState('current_state', newState);
    await codebolt.cbstate.addToAgentState(
      'state_metadata',
      JSON.stringify({
        ...metadata,
        timestamp: new Date().toISOString(),
        previousState: await this.getCurrentState()
      })
    );

    console.log(`State transitioned to: ${newState}`);
    return newState;
  }

  async getCurrentState() {
    const state = await codebolt.cbstate.getAgentState();
    return state.payload.current_state || 'idle';
  }

  async executeInState(state, action) {
    const currentState = await this.getCurrentState();

    if (currentState !== state) {
      throw new Error(`Cannot execute action in state: ${currentState}`);
    }

    return await action();
  }
}

// Usage
const stateMachine = new AgentStateMachine();
await stateMachine.transition('processing', { taskId: 'task_123' });
await stateMachine.executeInState('processing', async () => {
  console.log('Processing task...');
});
```

### Pattern 2: Incremental Counter

```javascript
async function incrementCounter(counterKey, increment = 1) {
  // Get current value
  const agentState = await codebolt.cbstate.getAgentState();
  const currentValue = parseInt(agentState.payload[counterKey] || '0');

  // Increment
  const newValue = currentValue + increment;

  // Store updated value
  await codebolt.cbstate.addToAgentState(counterKey, newValue.toString());

  return newValue;
}

// Usage
const retryCount = await incrementCounter('retry_count');
console.log(`Retry attempt: ${retryCount}`);

const processedItems = await incrementCounter('processed_items', 10);
console.log(`Processed items: ${processedItems}`);
```

### Pattern 3: Transaction Log

```javascript
async function logTransaction(type, data) {
  // Get existing log
  const agentState = await codebolt.cbstate.getAgentState();
  const existingLog = JSON.parse(agentState.payload.transaction_log || '[]');

  // Add new entry
  const newEntry = {
    type,
    data,
    timestamp: new Date().toISOString(),
    sequence: existingLog.length + 1
  };

  existingLog.push(newEntry);

  // Store updated log
  await codebolt.cbstate.addToAgentState(
    'transaction_log',
    JSON.stringify(existingLog)
  );

  return newEntry;
}

// Usage
await logTransaction('api_call', { endpoint: '/users', method: 'GET' });
await logTransaction('data_fetch', { query: 'SELECT * FROM users' });
await logTransaction('cache_update', { key: 'user_123' });
```

### Pattern 4: Scoped State Management

```javascript
class ScopedAgentState {
  constructor(scope) {
    this.scope = scope;
  }

  async set(key, value) {
    const scopedKey = `${this.scope}:${key}`;
    return await codebolt.cbstate.addToAgentState(scopedKey, value);
  }

  async get(key) {
    const scopedKey = `${this.scope}:${key}`;
    const agentState = await codebolt.cbstate.getAgentState();
    return agentState.payload[scopedKey];
  }

  async setMultiple(data) {
    const promises = Object.entries(data).map(([key, value]) =>
      this.set(key, value)
    );
    return await Promise.all(promises);
  }

  async getAll() {
    const agentState = await codebolt.cbstate.getAgentState();
    const prefix = `${this.scope}:`;

    return Object.entries(agentState.payload)
      .filter(([key]) => key.startsWith(prefix))
      .reduce((acc, [key, value]) => {
        acc[key.substring(prefix.length)] = value;
        return acc;
      }, {});
  }
}

// Usage
const userState = new ScopedAgentState('user');
await userState.setMultiple({
  id: 'user_123',
  name: 'John Doe',
  role: 'developer'
});

const allUserData = await userState.getAll();
console.log('User data:', allUserData);
```

### Pattern 5: Expiring Data

```javascript
async function setExpiringData(key, value, ttlSeconds) {
  const expiryTime = Date.now() + (ttlSeconds * 1000);

  // Store data with expiry
  await codebolt.cbstate.addToAgentState(
    `${key}:data`,
    JSON.stringify(value)
  );

  await codebolt.cbstate.addToAgentState(
    `${key}:expiry`,
    expiryTime.toString()
  );
}

async function getExpiringData(key) {
  const agentState = await codebolt.cbstate.getAgentState();
  const expiry = parseInt(agentState.payload[`${key}:expiry`] || '0');
  const now = Date.now();

  // Check if expired
  if (now > expiry) {
    // Clean up expired data
    await codebolt.cbstate.addToAgentState(`${key}:data`, '');
    await codebolt.cbstate.addToAgentState(`${key}:expiry`, '0');
    return null;
  }

  // Return data if not expired
  const data = agentState.payload[`${key}:data`];
  return data ? JSON.parse(data) : null;
}

// Usage
await setExpiringData('session_token', 'abc123', 300); // Expires in 5 minutes
const token = await getExpiringData('session_token');
console.log('Token:', token);
```

## Error Handling Strategies

### Strategy 1: Retry with Exponential Backoff

```javascript
async function addWithRetry(key, value, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await codebolt.cbstate.addToAgentState(key, value);

      if (result.payload.sucess) {
        console.log(`✅ Added ${key} on attempt ${attempt}`);
        return result;
      }

      // If not successful but no error, wait and retry
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 100; // Exponential backoff
        console.log(`Retry ${attempt}/${maxRetries} after ${delay}ms`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw error;
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}
```

### Strategy 2: Validation Before Storage

```javascript
const validators = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  url: (value) => /^https?:\/\/.+/.test(value),
  number: (value) => !isNaN(parseFloat(value)) && isFinite(value),
  json: (value) => {
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  }
};

async function addValidated(key, value, validator) {
  // Validate if validator provided
  if (validator && !validator(value)) {
    throw new Error(`Validation failed for key: ${key}`);
  }

  // Store validated value
  const result = await codebolt.cbstate.addToAgentState(key, value);

  if (result.payload.sucess) {
    console.log(`✅ Validated and stored: ${key}`);
    return result;
  } else {
    throw new Error(`Failed to store validated key: ${key}`);
  }
}

// Usage
await addValidated('user_email', 'user@example.com', validators.email);
await addValidated('api_url', 'https://api.example.com', validators.url);
await addValidated('config', '{"theme":"dark"}', validators.json);
```

### Strategy 3: Bulk Operations with Rollback

```javascript
async function bulkAddWithRollback(items) {
  const backup = [];

  try {
    // Store each item and keep backup
    for (const item of items) {
      // Get existing value as backup
      const agentState = await codebolt.cbstate.getAgentState();
      backup.push({
        key: item.key,
        oldValue: agentState.payload[item.key]
      });

      // Add new value
      const result = await codebolt.cbstate.addToAgentState(item.key, item.value);

      if (!result.payload.sucess) {
        throw new Error(`Failed to add ${item.key}`);
      }
    }

    console.log(`✅ Bulk operation completed: ${items.length} items`);
    return true;

  } catch (error) {
    console.error('❌ Bulk operation failed, rolling back...');

    // Rollback all changes
    for (const backupItem of backup) {
      if (backupItem.oldValue !== undefined) {
        await codebolt.cbstate.addToAgentState(
          backupItem.key,
          backupItem.oldValue
        );
      }
    }

    throw error;
  }
}

// Usage
await bulkAddWithRollback([
  { key: 'user_name', value: 'John Doe' },
  { key: 'user_email', value: 'john@example.com' },
  { key: 'user_role', value: 'admin' }
]);
```

## Performance Considerations

### Consideration 1: Batch Updates

```javascript
// ❌ Slow: Sequential updates
for (let i = 0; i < 100; i++) {
  await codebolt.cbstate.addToAgentState(`item_${i}`, `value_${i}`);
}

// ✅ Fast: Parallel updates
const updates = Array.from({ length: 100 }, (_, i) =>
  codebolt.cbstate.addToAgentState(`item_${i}`, `value_${i}`)
);
await Promise.all(updates);
```

### Consideration 2: String Length Limits

```javascript
async function addLargeData(key, largeObject) {
  const jsonString = JSON.stringify(largeObject);

  // Check size before storing (assuming 1MB limit)
  if (jsonString.length > 1_000_000) {
    // Split into chunks
    const chunks = [];
    for (let i = 0; i < jsonString.length; i += 500_000) {
      chunks.push(jsonString.substring(i, i + 500_000));
    }

    // Store chunk count
    await codebolt.cbstate.addToAgentState(`${key}:chunks`, chunks.length.toString());

    // Store each chunk
    for (let i = 0; i < chunks.length; i++) {
      await codebolt.cbstate.addToAgentState(`${key}:chunk_${i}`, chunks[i]);
    }

    console.log(`✅ Stored ${chunks.length} chunks`);
  } else {
    await codebolt.cbstate.addToAgentState(key, jsonString);
    console.log('✅ Stored as single chunk');
  }
}
```

### Consideration 3: Memory Management

```javascript
class StateBuffer {
  constructor(maxSize = 50) {
    this.maxSize = maxSize;
  }

  async add(key, value) {
    const agentState = await codebolt.cbstate.getAgentState();
    const currentKeys = Object.keys(agentState.payload).filter(k =>
      !k.startsWith('system:')
    );

    // Check if buffer is full
    if (currentKeys.length >= this.maxSize) {
      // Remove oldest entry (FIFO)
      const oldestKey = currentKeys[0];
      await codebolt.cbstate.addToAgentState(oldestKey, '');
      console.log(`Removed old key: ${oldestKey}`);
    }

    // Add new entry
    await codebolt.cbstate.addToAgentState(key, value);
  }
}

// Usage
const buffer = new StateBuffer(100);
for (let i = 0; i < 200; i++) {
  await buffer.add(`entry_${i}`, `value_${i}`);
}
```

## Common Pitfalls and Solutions

### Pitfall 1: Race Conditions

```javascript
// ❌ Problem: Race condition
await codebolt.cbstate.addToAgentState('counter', '1');
await codebolt.cbstate.addToAgentState('counter', '2'); // May overwrite first

// ✅ Solution: Use atomic operations with unique keys
await codebolt.cbstate.addToAgentState(`counter_${Date.now()}`, '1');
await codebolt.cbstate.addToAgentState(`counter_${Date.now()}`, '2');
```

### Pitfall 2: Data Type Loss

```javascript
// ❌ Problem: Numbers become strings
await codebolt.cbstate.addToAgentState('count', '42');
const count = agentState.payload.count; // '42' (string)
count + 1; // '421' (string concatenation!)

// ✅ Solution: Always convert types
const count = parseInt(agentState.payload.count || '0');
count + 1; // 43 (number)
```

### Pitfall 3: Memory Leaks

```javascript
// ❌ Problem: Accumulating data without cleanup
for (let i = 0; i < 1000; i++) {
  await codebolt.cbstate.addToAgentState(`temp_${i}`, `data_${i}`);
}

// ✅ Solution: Clean up old data
async function cleanupTempData(maxAge = 3600000) { // 1 hour
  const agentState = await codebolt.cbstate.getAgentState();
  const now = Date.now();

  for (const [key, value] of Object.entries(agentState.payload)) {
    if (key.startsWith('temp_')) {
      const timestamp = parseInt(value.split(':')[1] || '0');
      if (now - timestamp > maxAge) {
        await codebolt.cbstate.addToAgentState(key, '');
      }
    }
  }
}
```

## Integration Examples

### With History Module

```javascript
async function trackActionInHistory(action, details) {
  // Store action in agent state
  await codebolt.cbstate.addToAgentState(
    'last_action',
    JSON.stringify({ action, details, timestamp: new Date().toISOString() })
  );

  // Also add to history for timeline
  const history = await codebolt.history.summarizeAll();

  return history;
}
```

### With Debug Module

```javascript
async function debuggableStateUpdate(key, value) {
  // Log the update attempt
  await codebolt.debug.debug(`Updating agent state: ${key}`, 'info');

  try {
    const result = await codebolt.cbstate.addToAgentState(key, value);

    if (result.payload.sucess) {
      await codebolt.debug.debug(`Successfully updated: ${key}`, 'info');
    } else {
      await codebolt.debug.debug(`Failed to update: ${key}`, 'warning');
    }

    return result;
  } catch (error) {
    await codebolt.debug.debug(`Error updating ${key}: ${error.message}`, 'error');
    throw error;
  }
}
```