---
name: getApplicationState
cbbaseinfo:
  description: Retrieves the current application state from the server via WebSocket.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the application state containing project information, token usage, chats, and project-specific state data.
    typeArgs:
      - type: reference
        name: ApplicationState
data:
  name: getApplicationState
  category: cbstate
  
  link: getApplicationState.md
---

<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetAppStateResponse` object with the following properties:

- **`type`** (string): Always "getAppStateResponse".
- **`state`** (object, optional): Contains the complete application state as a `Record<string, any>` object with:
  - **`token_used`** (number): Number of tokens consumed in the current session
  - **`chats`** (array): Array of chat sessions
  - **`projectPath`** (string): Full path to the current project directory
  - **`projectName`** (string): Name of the current project
  - **`state`** (object): Nested object containing custom project state data including:
    - **`activeAgent`** (boolean): Whether an agent is currently active
    - **`currentLayout`** (object): Current UI layout configuration
    - **`pinnedAgent`** (array): Array of pinned agents
    - Custom key-value pairs you've stored using `updateProjectState`
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

## What is getApplicationState?

The `getApplicationState` function gives you access to your application's current state, including project information, usage statistics, and custom settings. It's similar to `getProjectState` but provides the data in a slightly different format that's optimized for application-level operations.

**Key Points:**
- 🏢 **Application-wide view** - Get a complete overview of your application state
- 📊 **Project + System data** - Access both project details and system information
- 💾 **Persistent settings** - Retrieve custom data that persists across sessions
- 🔄 **Real-time state** - Always shows the most current application state

## When to Use This

Use `getApplicationState` when you need to:
- Get a complete overview of your application's current state
- Access project information in a streamlined format
- Monitor application usage and performance
- Retrieve custom project settings for application logic
- Debug application-level issues

## Basic Usage

### Simple Example - Get Application Overview
```js
// Get complete application state
const appState = await codebolt.cbstate.getApplicationState();

console.log('Response type:', appState.type); // 'getAppStateResponse'
console.log('Application data:', appState.state);
```

### Access Project Information
```js
const appState = await codebolt.cbstate.getApplicationState();

// Access basic project details
const projectPath = appState.state.projectPath;
const projectName = appState.state.projectName;
const tokenUsed = appState.state.token_used;

console.log(`Project Name: ${projectName}`);
console.log(`Project Path: ${projectPath}`);
console.log(`Tokens Used: ${tokenUsed}`);
```

### Access Custom Project Settings
```js
const appState = await codebolt.cbstate.getApplicationState();
const projectState = appState.state.state;

// Access custom data you've stored with updateProjectState
if (projectState.project_name) {
    console.log('Custom Project Name:', projectState.project_name);
}
if (projectState.version) {
    console.log('Project Version:', projectState.version);
}
if (projectState.environment) {
    console.log('Environment:', projectState.environment);
}
```

## Working with Complex Data

Parse JSON strings that were stored as complex objects:

```js
const appState = await codebolt.cbstate.getApplicationState();
const projectState = appState.state.state;

// Parse JSON configuration safely
const parseJsonSafely = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
};

// Access complex configuration stored as JSON
if (projectState.ui_config) {
    const uiConfig = parseJsonSafely(projectState.ui_config);
    if (uiConfig) {
        console.log('UI Theme:', uiConfig.theme);
        console.log('Features:', uiConfig.features);
        console.log('Auto Save:', uiConfig.settings.autoSave);
    }
}

// Access other complex settings
if (projectState.app_settings) {
    const settings = parseJsonSafely(projectState.app_settings);
    if (settings) {
        console.log('Application Settings:', settings);
    }
}
```

## Complete Example - Application Status Check

Here's how you might check your application's overall status:

```js
async function checkApplicationStatus() {
    try {
        const appState = await codebolt.cbstate.getApplicationState();
        const projectState = appState.state.state;
        
        console.log('=== APPLICATION STATUS ===');
        
        // Project basics
        console.log('\n📁 Project Information:');
        console.log(`System Name: ${appState.state.projectName}`);
        console.log(`Project Path: ${appState.state.projectPath}`);
        console.log(`Custom Name: ${projectState.project_name || 'Not configured'}`);
        
        // Usage metrics
        console.log('\n📊 Usage Metrics:');
        console.log(`Total Tokens Used: ${appState.state.token_used}`);
        console.log(`Chat Sessions: ${appState.state.chats.length}`);
        
        // Configuration status
        console.log('\n⚙️ Configuration:');
        console.log(`Version: ${projectState.version || 'Not set'}`);
        console.log(`Environment: ${projectState.environment || 'Not set'}`);
        
        // System status
        console.log('\n🔧 System Status:');
        console.log(`Active Agent: ${projectState.activeAgent ? 'Running' : 'Stopped'}`);
        console.log(`Pinned Agents: ${projectState.pinnedAgent ? projectState.pinnedAgent.length : 0}`);
        
        // Custom configuration count
        const customKeys = Object.keys(projectState).filter(key => 
            !['activeAgent', 'currentLayout', 'pinnedAgent'].includes(key)
        );
        console.log(`Custom Settings: ${customKeys.length} configured`);
        
        return appState;
    } catch (error) {
        console.error('❌ Failed to check application status:', error);
        return null;
    }
}

// Run the status check
checkApplicationStatus();
```

## Safe Data Access

Always handle potential missing data gracefully:

```js
async function getApplicationDataSafely() {
    const appState = await codebolt.cbstate.getApplicationState();
    
    // Helper function to safely access nested properties
    const getAppProperty = (path, defaultValue = null) => {
        try {
            return path.split('.').reduce((obj, key) => obj?.[key], appState) || defaultValue;
        } catch (error) {
            return defaultValue;
        }
    };
    
    // Safe access to application data
    const applicationInfo = {
        projectName: getAppProperty('state.projectName', 'Unknown Project'),
        customName: getAppProperty('state.state.project_name', 'Not set'),
        version: getAppProperty('state.state.version', '1.0.0'),
        environment: getAppProperty('state.state.environment', 'development'),
        tokenUsage: getAppProperty('state.token_used', 0),
        chatCount: getAppProperty('state.chats.length', 0)
    };
    
    console.log('Safe Application Info:', applicationInfo);
    return applicationInfo;
}

getApplicationDataSafely();
```

## Monitor Application Health

Create a health check for your application:

```js
async function checkApplicationHealth() {
    const appState = await codebolt.cbstate.getApplicationState();
    
    const health = {
        project: {
            configured: !!appState.state.state.project_name,
            hasVersion: !!appState.state.state.version,
            hasEnvironment: !!appState.state.state.environment
        },
        usage: {
            tokensUsed: appState.state.token_used,
            hasActivity: appState.state.chats.length > 0,
            recentActivity: appState.state.state.last_modified
        },
        system: {
            agentActive: appState.state.state.activeAgent,
            pinnedAgents: appState.state.state.pinnedAgent?.length || 0,
            customSettings: Object.keys(appState.state.state).length
        }
    };
    
    // Calculate health score
    const scores = {
        projectScore: Object.values(health.project).filter(Boolean).length / 3,
        usageScore: health.usage.tokensUsed > 0 ? 1 : 0,
        systemScore: health.system.customSettings > 3 ? 1 : 0.5
    };
    
    const overallHealth = (scores.projectScore + scores.usageScore + scores.systemScore) / 3;
    
    console.log('Application Health:', health);
    console.log(`Overall Health Score: ${Math.round(overallHealth * 100)}%`);
    
    return { health, score: overallHealth };
}

checkApplicationHealth();
```

## Compare with Project State

Compare application state with project state to ensure consistency:

```js
async function compareStates() {
    const [appState, projectState] = await Promise.all([
        codebolt.cbstate.getApplicationState(),
        codebolt.cbstate.getProjectState()
    ]);
    
    const comparison = {
        projectName: {
            app: appState.state.projectName,
            project: projectState.projectState.projectName,
            match: appState.state.projectName === projectState.projectState.projectName
        },
        tokenUsage: {
            app: appState.state.token_used,
            project: projectState.projectState.token_used,
            match: appState.state.token_used === projectState.projectState.token_used
        },
        chatCount: {
            app: appState.state.chats.length,
            project: projectState.projectState.chats.length,
            match: appState.state.chats.length === projectState.projectState.chats.length
        }
    };
    
    console.log('State Comparison:', comparison);
    
    const allMatch = Object.values(comparison).every(item => item.match);
    console.log(`States are ${allMatch ? 'consistent' : 'inconsistent'}`);
    
    return comparison;
}

compareStates();
```

## Response Format

When you call `getApplicationState`, you'll get back a response like this:

```js
{
  type: 'getAppStateResponse',
  state: {
    token_used: 0,                    // Number of tokens consumed
    chats: [],                        // Array of chat sessions
    projectPath: 'C:\\path\\to\\project', // Full path to the project
    projectName: 'project-name',      // Name of the current project
    state: {
      activeAgent: false,             // Whether an agent is currently active
      currentLayout: {...},           // Current UI layout configuration
      pinnedAgent: [...],             // Array of pinned agents
      // Your custom project state values
      project_name: 'My Custom Project',
      version: '1.0.0',
      environment: 'development',
      ui_config: '{"theme":"dark","features":["autocomplete"]}',
      // ... other custom settings
    }
  }
}
```
