---
name: getAgentState
cbbaseinfo:
  description: Retrieves the current state of the agent from the server via WebSocket.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the agent's state containing all key-value pairs stored via addToAgentState.
    typeArgs:
      - type: reference
        name: GetAgentStateResponse
data:
  name: getAgentState
  category: cbstate
  link: getAgentState.md
---

<CBBaseInfo/> 
<CBParameters/>

## What is getAgentState?

The `getAgentState` function allows you to retrieve all the temporary information you've stored during your current agent session. Think of it as checking what's in your agent's temporary storage box - you can see everything you've saved using `addToAgentState`.

**Key Points:**
- 🔍 **Retrieve all data** - Get everything stored in the current agent session
- 🤖 **Agent-specific** - Only shows data for the current agent session
- 📋 **Complete overview** - See all keys and values at once
- 🔄 **Real-time** - Always shows the most current state

## When to Use This

Use `getAgentState` when you need to:
- Check what data is currently stored in the agent session
- Retrieve specific values you've previously stored
- Debug your agent's state
- Verify that data was stored correctly

## Basic Usage

### Simple Example - Get All Agent State
```js
// Get all data stored in the current agent session
const agentState = await codebolt.cbstate.getAgentState();

console.log('Response type:', agentState.type); // 'getAgentStateResponse'
console.log('All agent data:', agentState.payload);
```

### Access Specific Values
```js
// Retrieve the agent state
const agentState = await codebolt.cbstate.getAgentState();

// Access specific values you've stored
const userPreference = agentState.payload.user_preference;
const sessionId = agentState.payload.session_id;
const userLanguage = agentState.payload.user_language;
const debugMode = agentState.payload.debug_mode;

console.log(`User Preference: ${userPreference}`);
console.log(`Session ID: ${sessionId}`);
console.log(`User Language: ${userLanguage}`);
console.log(`Debug Mode: ${debugMode}`);
```

## Working with Complex Data

If you stored objects or arrays as JSON strings, you'll need to parse them back:

```js
const agentState = await codebolt.cbstate.getAgentState();

// Parse JSON data safely
const parseJsonSafely = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
};

// Access complex data that was stored as JSON
if (agentState.payload.user_preferences) {
    const preferences = parseJsonSafely(agentState.payload.user_preferences);
    if (preferences) {
        console.log('Theme:', preferences.theme);
        console.log('Notifications:', preferences.notifications);
        console.log('Auto Save:', preferences.autoSave);
    }
}

// Access array data
if (agentState.payload.completed_tasks) {
    const tasks = parseJsonSafely(agentState.payload.completed_tasks);
    if (tasks) {
        console.log('Completed tasks:', tasks);
        console.log('Number of completed tasks:', tasks.length);
    }
}
```

## Complete Example - Check Agent Session Status

Here's how you might check and use your agent's current state:

```js
async function checkAgentStatus() {
    try {
        const agentState = await codebolt.cbstate.getAgentState();
        
        // Check basic session info
        const sessionId = agentState.payload.session_id || 'No session';
        const userLanguage = agentState.payload.user_language || 'en';
        const debugMode = agentState.payload.debug_mode === 'true';
        
        console.log('=== Agent Session Status ===');
        console.log(`Session ID: ${sessionId}`);
        console.log(`Language: ${userLanguage}`);
        console.log(`Debug Mode: ${debugMode ? 'ON' : 'OFF'}`);
        
        // Check progress if available
        if (agentState.payload.current_step && agentState.payload.total_steps) {
            const current = parseInt(agentState.payload.current_step);
            const total = parseInt(agentState.payload.total_steps);
            const progress = Math.round((current / total) * 100);
            console.log(`Progress: ${current}/${total} (${progress}%)`);
        }
        
        // Check user preferences
        if (agentState.payload.user_preferences) {
            const preferences = JSON.parse(agentState.payload.user_preferences);
            console.log('User Preferences:', preferences);
        }
        
        return agentState;
    } catch (error) {
        console.error('❌ Failed to get agent state:', error);
        return null;
    }
}

// Use the function
checkAgentStatus();
```

## Safe Data Access

Always check if data exists before using it:

```js
async function getAgentDataSafely() {
    const agentState = await codebolt.cbstate.getAgentState();
    
    // Helper function to safely get values
    const getStateValue = (key, defaultValue = null) => {
        return agentState.payload[key] || defaultValue;
    };
    
    // Safe access to common values
    const sessionInfo = {
        sessionId: getStateValue('session_id', 'unknown'),
        language: getStateValue('user_language', 'en'),
        debugMode: getStateValue('debug_mode', 'false') === 'true',
        lastActivity: getStateValue('last_activity', 'never')
    };
    
    console.log('Session Info:', sessionInfo);
    return sessionInfo;
}

getAgentDataSafely();
```

## Exploring Your Agent State

Find out what data is currently stored:

```js
async function exploreAgentState() {
    const agentState = await codebolt.cbstate.getAgentState();
    
    // Get all keys
    const allKeys = Object.keys(agentState.payload);
    console.log('All stored keys:', allKeys);
    
    // Filter system vs custom keys
    const systemKeys = allKeys.filter(key => key === 'ports');
    const customKeys = allKeys.filter(key => key !== 'ports');
    
    console.log('System keys:', systemKeys);
    console.log('Custom keys:', customKeys);
    
    // Show all custom data
    console.log('\n=== Custom Agent Data ===');
    customKeys.forEach(key => {
        const value = agentState.payload[key];
        console.log(`${key}: ${value}`);
    });
    
    return {
        totalKeys: allKeys.length,
        systemKeys: systemKeys.length,
        customKeys: customKeys.length
    };
}

exploreAgentState();
```

## Response Format

When you call `getAgentState`, you'll get back a response like this:

```js
{
  type: 'getAgentStateResponse',
  payload: {
    ports: [],                             // System-managed ports array
    user_preference: 'dark_theme',         // Your custom data
    session_id: 'sess_1750414044167',      // Session identifiers
    user_language: 'en',                   // Language settings
    debug_mode: 'true',                    // Debug flags
    last_activity: '2025-06-20T10:07:24.167Z', // Timestamps
    user_preferences: '{"theme":"dark","notifications":true}', // JSON strings
    // ... any other data you've stored
  }
}
```
