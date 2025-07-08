---
name: addToAgentState
cbbaseinfo:
  description: Adds a key-value pair to the agent's state on the server via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key to add to the agent's state.
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

<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AddToAgentStateResponse` object with the following properties:

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




