---
name: getProjectState
cbbaseinfo:
  description: Retrieves the current project state from the server via WebSocket.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the project state containing project information, token usage, chats, and all custom project state data.
    typeArgs:
      - type: reference
        name: GetProjectStateResponse
data:
  name: getProjectState
  category: cbstate
  link: getProjectState.md
---

<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetProjectStateResponse` object with the following properties:

- **`type`** (string): Always "getProjectStateResponse".
- **`projectState`** (object, optional): Contains the complete project state as a `Record<string, any>` object with:
  - **`token_used`** (number): Number of tokens consumed in the current project
  - **`chats`** (array): Array of chat sessions associated with this project
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

## What is getProjectState?

The `getProjectState` function allows you to retrieve comprehensive information about your current project, including both system information (like project path and token usage) and any custom data you've stored using `updateProjectState`. Think of it as getting a complete snapshot of your project's current status and configuration.

**Key Points:**
- 📊 **Complete project overview** - Get all project information in one call
- 💾 **Persistent data** - Access data that survives across sessions
- 🔧 **System + Custom data** - Both built-in project info and your custom settings
- 📈 **Usage tracking** - Monitor token consumption and chat history

## When to Use This

Use `getProjectState` when you need to:
- Check your project's current configuration and settings
- Monitor token usage and project activity
- Retrieve custom project data you've previously stored
- Get a complete overview of your project's state
- Debug project-level issues

## Basic Usage

### Simple Example - Get Project Overview
```js
// Get complete project information
const projectState = await codebolt.cbstate.getProjectState();

console.log('Response type:', projectState.type); // 'getProjectStateResponse'
console.log('Project data:', projectState.projectState);
```

### Access Basic Project Information
```js
const projectState = await codebolt.cbstate.getProjectState();

// Access basic project details
const projectPath = projectState.projectState.projectPath;
const projectName = projectState.projectState.projectName;
const tokenUsed = projectState.projectState.token_used;

console.log(`Project Name: ${projectName}`);
console.log(`Project Path: ${projectPath}`);
console.log(`Tokens Used: ${tokenUsed}`);
```

### Access Custom Project Settings
```js
const projectState = await codebolt.cbstate.getProjectState();
const state = projectState.projectState.state;

// Access custom data you've stored with updateProjectState
if (state.project_name) {
    console.log('Custom Project Name:', state.project_name);
}
if (state.version) {
    console.log('Project Version:', state.version);
}
if (state.environment) {
    console.log('Environment:', state.environment);
}
```

## Working with Complex Data

If you stored complex objects as JSON strings, you'll need to parse them:

```js
const projectState = await codebolt.cbstate.getProjectState();
const state = projectState.projectState.state;

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
if (state.ui_config) {
    const uiConfig = parseJsonSafely(state.ui_config);
    if (uiConfig) {
        console.log('UI Theme:', uiConfig.theme);
        console.log('Features:', uiConfig.features);
        console.log('Settings:', uiConfig.settings);
    }
}

// Access project settings
if (state.project_settings) {
    const settings = parseJsonSafely(state.project_settings);
    if (settings) {
        console.log('Project Settings:', settings);
    }
}
```

## Complete Example - Project Dashboard

Here's how you might create a project dashboard showing all important information:

```js
async function createProjectDashboard() {
    try {
        const projectState = await codebolt.cbstate.getProjectState();
        const state = projectState.projectState.state;
        
        console.log('=== PROJECT DASHBOARD ===');
        
        // Basic project info
        console.log('\n📁 Project Information:');
        console.log(`Name: ${projectState.projectState.projectName}`);
        console.log(`Path: ${projectState.projectState.projectPath}`);
        console.log(`Custom Name: ${state.project_name || 'Not set'}`);
        console.log(`Version: ${state.version || 'Not set'}`);
        console.log(`Environment: ${state.environment || 'Not set'}`);
        
        // Usage statistics
        console.log('\n📊 Usage Statistics:');
        console.log(`Tokens Used: ${projectState.projectState.token_used}`);
        console.log(`Chat Sessions: ${projectState.projectState.chats.length}`);
        
        // System status
        console.log('\n🔧 System Status:');
        console.log(`Active Agent: ${state.activeAgent ? 'Yes' : 'No'}`);
        console.log(`Pinned Agents: ${state.pinnedAgent ? state.pinnedAgent.length : 0}`);
        
        // Custom settings
        console.log('\n⚙️ Custom Settings:');
        const customKeys = Object.keys(state).filter(key => 
            !['activeAgent', 'currentLayout', 'pinnedAgent'].includes(key)
        );
        
        if (customKeys.length > 0) {
            customKeys.forEach(key => {
                console.log(`${key}: ${state[key]}`);
            });
        } else {
            console.log('No custom settings found');
        }
        
        return projectState;
    } catch (error) {
        console.error('❌ Failed to create project dashboard:', error);
        return null;
    }
}

// Create the dashboard
createProjectDashboard();
```

## Safe Data Access

Always check if data exists before using it:

```js
async function getProjectDataSafely() {
    const projectState = await codebolt.cbstate.getProjectState();
    
    // Helper function to safely access nested properties
    const getProjectProperty = (key, defaultValue = null) => {
        return projectState.projectState?.state?.[key] || defaultValue;
    };
    
    // Safe access to project data
    const projectInfo = {
        systemName: projectState.projectState?.projectName || 'Unknown',
        customName: getProjectProperty('project_name', 'Not set'),
        version: getProjectProperty('version', '1.0.0'),
        environment: getProjectProperty('environment', 'development'),
        tokenUsage: projectState.projectState?.token_used || 0
    };
    
    console.log('Safe Project Info:', projectInfo);
    return projectInfo;
}

getProjectDataSafely();
```

## Monitor Project Changes

Track your project's evolution over time:

```js
async function monitorProject() {
    const projectState = await codebolt.cbstate.getProjectState();
    
    const summary = {
        projectInfo: {
            name: projectState.projectState.projectName,
            path: projectState.projectState.projectPath,
            customName: projectState.projectState.state.project_name
        },
        usage: {
            tokensUsed: projectState.projectState.token_used,
            chatSessions: projectState.projectState.chats.length,
            lastModified: projectState.projectState.state.last_modified
        },
        configuration: {
            version: projectState.projectState.state.version,
            environment: projectState.projectState.state.environment,
            customSettings: Object.keys(projectState.projectState.state).length
        }
    };
    
    console.log('Project Summary:', summary);
    return summary;
}

monitorProject();
```

## Find Specific Configuration

Search for specific settings in your project state:

```js
async function findProjectSetting(settingName) {
    const projectState = await codebolt.cbstate.getProjectState();
    const state = projectState.projectState.state;
    
    if (state[settingName]) {
        console.log(`Found setting '${settingName}':`, state[settingName]);
        
        // Try to parse as JSON if it looks like JSON
        if (state[settingName].startsWith('{') || state[settingName].startsWith('[')) {
            try {
                const parsed = JSON.parse(state[settingName]);
                console.log('Parsed value:', parsed);
                return parsed;
            } catch (error) {
                console.log('Raw value:', state[settingName]);
                return state[settingName];
            }
        }
        
        return state[settingName];
    } else {
        console.log(`Setting '${settingName}' not found`);
        return null;
    }
}

// Usage
findProjectSetting('ui_config');
findProjectSetting('version');
```

## Response Format

When you call `getProjectState`, you'll get back a response like this:

```js
{
  type: 'getProjectStateResponse',
  projectState: {
    token_used: 0,                    // Number of tokens consumed
    chats: [],                        // Array of chat sessions
    projectPath: 'C:\\path\\to\\project', // Full path to the project
    projectName: 'project-name',      // Name of the current project
    state: {
      activeAgent: false,             // Whether an agent is currently active
      currentLayout: {...},           // Current UI layout configuration
      pinnedAgent: [...],             // Array of pinned agents
      // Your custom project state values
      project_name: 'My Awesome Project',
      version: '1.0.0',
      environment: 'development',
      ui_config: '{"theme":"dark","features":["autocomplete"]}',
      // ... other custom settings
    }
  }
}
```