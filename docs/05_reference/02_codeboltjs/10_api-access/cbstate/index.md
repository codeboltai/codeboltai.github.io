---
cbapicategory:
  - name: addToAgentState
    link: /docs/api/apiaccess/cbstate/addToAgentState
    description: "Adds a key-value pair to the agent's state on the server via WebSocket."
  - name: getAgentState
    link: /docs/api/apiaccess/cbstate/getAgentState
    description: Retrieves the current state of the agent from the server via WebSocket.
  - name: getApplicationState
    link: /docs/api/apiaccess/cbstate/getApplicationState
    description: Retrieves the current application state from the server via WebSocket.
  - name: getProjectState
    link: /docs/api/apiaccess/cbstate/getProjectState
    description: Retrieves the current project state from the server via WebSocket.
  - name: updateProjectState
    link: /docs/api/apiaccess/cbstate/updateProjectState
    description: Updates the project state on the server via WebSocket.

---
# cbstate
<CBAPICategory />

## Quick Start Guide

The `cbstate` module provides a hierarchical state management system with three levels:

1. **Agent State** (`addToAgentState`, `getAgentState`) - Temporary, session-specific data
2. **Project State** (`updateProjectState`, `getProjectState`) - Persistent, project-wide data
3. **Application State** (`getApplicationState`) - Application-level overview

### Basic Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

// Store temporary agent session data
await codebolt.cbstate.addToAgentState('user_id', 'user_123');
await codebolt.cbstate.addToAgentState('session_start', new Date().toISOString());

// Store persistent project settings
await codebolt.cbstate.updateProjectState('project_name', 'My Awesome App');
await codebolt.cbstate.updateProjectState('version', '1.0.0');

// Retrieve agent state
const agentState = await codebolt.cbstate.getAgentState();
console.log('Agent data:', agentState.payload);

// Retrieve project state
const projectState = await codebolt.cbstate.getProjectState();
console.log('Project data:', projectState.projectState);
```

## Common Workflows

### Workflow 1: Initialize Agent Session

```javascript
async function initializeAgentSession(config) {
  try {
    // Store session metadata
    await codebolt.cbstate.addToAgentState('session_id', `sess_${Date.now()}`);
    await codebolt.cbstate.addToAgentState('session_start', new Date().toISOString());
    await codebolt.cbstate.addToAgentState('config', JSON.stringify(config));

    // Initialize progress tracking
    await codebolt.cbstate.addToAgentState('current_step', '0');
    await codebolt.cbstate.addToAgentState('total_steps', config.totalSteps.toString());

    console.log('✅ Agent session initialized');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize session:', error);
    return false;
  }
}
```

### Workflow 2: Project Configuration Management

```javascript
async function configureProject(settings) {
  try {
    // Store basic project info
    await codebolt.cbstate.updateProjectState('project_name', settings.name);
    await codebolt.cbstate.updateProjectState('version', settings.version);
    await codebolt.cbstate.updateProjectState('environment', settings.environment);

    // Store complex settings as JSON
    await codebolt.cbstate.updateProjectState(
      'ui_config',
      JSON.stringify(settings.ui || { theme: 'light' })
    );
    await codebolt.cbstate.updateProjectState(
      'api_config',
      JSON.stringify(settings.api || {})
    );

    console.log('✅ Project configured successfully');
    return true;
  } catch (error) {
    console.error('❌ Configuration failed:', error);
    return false;
  }
}
```

### Workflow 3: Progress Tracking

```javascript
async function updateProgress(step, message) {
  try {
    // Get current state
    const agentState = await codebolt.cbstate.getAgentState();
    const totalSteps = parseInt(agentState.payload.total_steps || '10');

    // Update progress
    await codebolt.cbstate.addToAgentState('current_step', step.toString());
    await codebolt.cbstate.addToAgentState('last_action', message);
    await codebolt.cbstate.addToAgentState('last_update', new Date().toISOString());

    // Calculate progress percentage
    const progress = Math.round((step / totalSteps) * 100);
    console.log(`Progress: ${step}/${totalSteps} (${progress}%) - ${message}`);

    return progress;
  } catch (error) {
    console.error('❌ Progress update failed:', error);
    return null;
  }
}
```

### Workflow 4: State Synchronization

```javascript
async function syncAgentToProject() {
  try {
    // Get agent state
    const agentState = await codebolt.cbstate.getAgentState();

    // Extract important data to persist
    const sessionSummary = {
      sessionId: agentState.payload.session_id,
      startTime: agentState.payload.session_start,
      lastActivity: agentState.payload.last_activity,
      actionsCompleted: agentState.payload.current_step
    };

    // Store in project state for persistence
    await codebolt.cbstate.updateProjectState(
      'last_session_summary',
      JSON.stringify(sessionSummary)
    );

    console.log('✅ State synchronized to project');
    return sessionSummary;
  } catch (error) {
    console.error('❌ Sync failed:', error);
    return null;
  }
}
```

## Module Integration Examples

### Integration with Chat Module

```javascript
import codebolt from '@codebolt/codeboltjs';

async function chatWithStateContext(userMessage) {
  // Get current agent state for context
  const agentState = await codebolt.cbstate.getAgentState();

  // Build context-aware message
  const context = {
    sessionId: agentState.payload.session_id,
    userLanguage: agentState.payload.user_language || 'en',
    preferences: JSON.parse(agentState.payload.user_preferences || '{}')
  };

  const contextualMessage = `
    Context: ${JSON.stringify(context)}
    User Message: ${userMessage}
  `;

  return await codebolt.chat.sendMessage(contextualMessage);
}
```

### Integration with Debug Module

```javascript
async function debugState() {
  try {
    const [agentState, projectState] = await Promise.all([
      codebolt.cbstate.getAgentState(),
      codebolt.cbstate.getProjectState()
    ]);

    // Log state information for debugging
    await codebolt.debug.debug('Agent State Snapshot', 'info');
    await codebolt.debug.debug(JSON.stringify(agentState.payload, null, 2), 'info');

    await codebolt.debug.debug('Project State Snapshot', 'info');
    await codebolt.debug.debug(
      JSON.stringify(projectState.projectState.state, null, 2),
      'info'
    );

    return { agentState, projectState };
  } catch (error) {
    await codebolt.debug.debug(`State debug failed: ${error.message}`, 'error');
    throw error;
  }
}
```

### Integration with Memory Module

```javascript
async function cacheStateInMemory() {
  try {
    const projectState = await codebolt.cbstate.getProjectState();

    // Cache frequently accessed state data in memory
    await codebolt.dbmemory.addKnowledge(
      'cache:project_config',
      projectState.projectState.state
    );

    await codebolt.dbmemory.addKnowledge(
      'cache:project_metadata',
      {
        name: projectState.projectState.projectName,
        path: projectState.projectState.projectPath,
        tokensUsed: projectState.projectState.token_used
      }
    );

    console.log('✅ State cached in memory');
    return true;
  } catch (error) {
    console.error('❌ Caching failed:', error);
    return false;
  }
}
```

## Best Practices

### 1. Choose the Right State Level

```javascript
// ✅ Good: Use agent state for temporary data
await codebolt.cbstate.addToAgentState('temp_counter', '5');

// ✅ Good: Use project state for persistent data
await codebolt.cbstate.updateProjectState('project_name', 'My App');

// ❌ Bad: Don't store temporary data in project state
await codebolt.cbstate.updateProjectState('temp_counter', '5'); // Wastes persistent storage
```

### 2. Handle Complex Data Properly

```javascript
// ✅ Good: Store objects as JSON strings
const config = { theme: 'dark', language: 'en' };
await codebolt.cbstate.addToAgentState('config', JSON.stringify(config));

// ✅ Good: Parse safely when retrieving
const agentState = await codebolt.cbstate.getAgentState();
const config = JSON.parse(agentState.payload.config || '{}');

// ❌ Bad: Don't store objects directly
await codebolt.cbstate.addToAgentState('config', config); // Will be converted to [object Object]
```

### 3. Implement Error Handling

```javascript
async function safeStateUpdate(key, value, isProject = false) {
  try {
    const updateFn = isProject
      ? codebolt.cbstate.updateProjectState
      : codebolt.cbstate.addToAgentState;

    const result = await updateFn(key, value);

    if (isProject ? result.message === 'success' : result.payload.sucess) {
      console.log(`✅ Updated ${key}`);
      return true;
    } else {
      console.warn(`⚠️ Unexpected response for ${key}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Failed to update ${key}:`, error.message);
    return false;
  }
}
```

### 4. Use Descriptive Key Names

```javascript
// ✅ Good: Descriptive, namespaced keys
await codebolt.cbstate.addToAgentState('user:session:id', 'sess_123');
await codebolt.cbstate.addToAgentState('user:preferences:theme', 'dark');
await codebolt.cbstate.updateProjectState('project:version', '1.0.0');

// ❌ Bad: Vague or conflicting keys
await codebolt.cbstate.addToAgentState('id', 'sess_123');
await codebolt.cbstate.addToAgentState('data', 'dark');
await codebolt.cbstate.updateProjectState('version', '1.0.0');
```

### 5. Validate Before Storing

```javascript
async function validatedStateUpdate(key, value, validator) {
  // Validate input
  if (validator && !validator(value)) {
    throw new Error(`Validation failed for key: ${key}`);
  }

  // Convert to string if needed
  const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

  // Store
  return await codebolt.cbstate.addToAgentState(key, stringValue);
}

// Usage with validation
await validatedStateUpdate(
  'user_age',
  '30',
  (val) => !isNaN(parseInt(val)) && parseInt(val) > 0 && parseInt(val) < 150
);
```

## Performance Considerations

### Batch State Updates

```javascript
// ❌ Bad: Multiple sequential calls
await codebolt.cbstate.addToAgentState('key1', 'value1');
await codebolt.cbstate.addToAgentState('key2', 'value2');
await codebolt.cbstate.addToAgentState('key3', 'value3');

// ✅ Good: Use Promise.all for parallel updates
await Promise.all([
  codebolt.cbstate.addToAgentState('key1', 'value1'),
  codebolt.cbstate.addToAgentState('key2', 'value2'),
  codebolt.cbstate.addToAgentState('key3', 'value3')
]);
```

### Cache State When Appropriate

```javascript
let stateCache = null;
let cacheTime = 0;
const CACHE_DURATION = 5000; // 5 seconds

async function getCachedState() {
  const now = Date.now();

  if (!stateCache || now - cacheTime > CACHE_DURATION) {
    stateCache = await codebolt.cbstate.getAgentState();
    cacheTime = now;
  }

  return stateCache;
}
```

## Common Pitfalls

### Pitfall 1: Forgetting String Conversion

```javascript
// ❌ Problem: Objects become "[object Object]"
await codebolt.cbstate.addToAgentState('config', { theme: 'dark' });

// ✅ Solution: Always stringify objects
await codebolt.cbstate.addToAgentState('config', JSON.stringify({ theme: 'dark' }));
```

### Pitfall 2: Not Checking for Existence

```javascript
// ❌ Problem: Assumes data exists
const agentState = await codebolt.cbstate.getAgentState();
const theme = JSON.parse(agentState.payload.user_preferences).theme; // May throw

// ✅ Solution: Check and provide defaults
const agentState = await codebolt.cbstate.getAgentState();
const prefs = JSON.parse(agentState.payload.user_preferences || '{}');
const theme = prefs.theme || 'light';
```

### Pitfall 3: Confusing State Levels

```javascript
// ❌ Problem: Using wrong state level
await codebolt.cbstate.addToAgentState('project_name', 'My App'); // Lost when session ends

// ✅ Solution: Use project state for persistent data
await codebolt.cbstate.updateProjectState('project_name', 'My App');
```

### Pitfall 4: Ignoring Response Validation

```javascript
// ❌ Problem: Assumes success
await codebolt.cbstate.addToAgentState('key', 'value');
console.log('Data saved!'); // May not be true

// ✅ Solution: Check response
const result = await codebolt.cbstate.addToAgentState('key', 'value');
if (result.payload.sucess) {
  console.log('Data saved!');
} else {
  console.error('Failed to save data');
}
```
