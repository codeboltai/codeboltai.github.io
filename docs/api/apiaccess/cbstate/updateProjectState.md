---
name: updateProjectState
cbbaseinfo:
  description: Updates the project state on the server via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the project state property to update.
    - name: value
      typeName: any
      description: The new value to set for the specified key.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the update response containing success confirmation.
    typeArgs:
      - type: reference
        name: UpdateProjectStateResponse
data:
  name: updateProjectState
  category: cbstate
  link: updateProjectState.md
---

<CBBaseInfo/> 
<CBParameters/>

## What is updateProjectState?

The `updateProjectState` function allows you to save and update information that needs to be shared across your entire project. Think of it as a project-wide storage system where you can store settings, configurations, and data that should persist and be accessible from anywhere in your project.

**Key Points:**
- 📁 **Project-wide storage** - Data is available throughout your entire project
- 💾 **Persistent** - Information stays saved even after restarting
- 🔄 **Real-time updates** - Changes are immediately available
- 🌐 **Shared** - All parts of your project can access the same data

## When to Use This

Use `updateProjectState` when you need to:
- Store project settings (theme, language, preferences)
- Save project metadata (name, version, description)
- Keep track of project status or progress
- Store configuration that multiple parts of your project need

## Basic Usage

### Simple Example - Store Project Name
```js
// Save your project name
await codebolt.cbstate.updateProjectState('project_name', 'My Awesome App');

// The response will be:
// { type: 'updateProjectStateResponse', message: 'success' }
```

### Store Different Types of Data
```js
// Store text
await codebolt.cbstate.updateProjectState('project_description', 'A cool web application');

// Store numbers (as strings)
await codebolt.cbstate.updateProjectState('version_number', '1.0.0');

// Store dates
await codebolt.cbstate.updateProjectState('created_date', new Date().toISOString());

// Store true/false values
await codebolt.cbstate.updateProjectState('is_published', 'true');
```

## Working with Complex Data

When you need to store objects or arrays, convert them to JSON strings first:

```js
// Store user preferences
const userPreferences = {
    theme: 'dark',
    language: 'english',
    notifications: true,
    autoSave: true
};

await codebolt.cbstate.updateProjectState('user_preferences', JSON.stringify(userPreferences));

// Store a list of features
const enabledFeatures = ['chat', 'file-upload', 'dark-mode'];
await codebolt.cbstate.updateProjectState('enabled_features', JSON.stringify(enabledFeatures));
```

## Complete Example - Project Setup

Here's how you might set up basic project information:

```js
async function setupProject() {
    try {
        // Basic project info
        await codebolt.cbstate.updateProjectState('project_name', 'Todo App');
        await codebolt.cbstate.updateProjectState('version', '1.0.0');
        await codebolt.cbstate.updateProjectState('environment', 'development');
        
        // Project settings
        const settings = {
            theme: 'light',
            language: 'en',
            autoSave: true
        };
        await codebolt.cbstate.updateProjectState('settings', JSON.stringify(settings));
        
        // Track when project was last updated
        await codebolt.cbstate.updateProjectState('last_updated', new Date().toISOString());
        
        console.log('✅ Project setup complete!');
    } catch (error) {
        console.error('❌ Setup failed:', error);
    }
}

// Run the setup
setupProject();
```

## Error Handling

Always handle potential errors when updating project state:

```js
async function updateProjectSafely(key, value) {
    try {
        const result = await codebolt.cbstate.updateProjectState(key, value);
        
        if (result.message === 'success') {
            console.log(`✅ Successfully updated ${key}`);
            return true;
        } else {
            console.log(`⚠️ Unexpected response:`, result);
            return false;
        }
    } catch (error) {
        console.error(`❌ Failed to update ${key}:`, error.message);
        return false;
    }
}

// Usage
const success = await updateProjectSafely('project_status', 'active');
if (success) {
    console.log('Update confirmed!');
}
```

## Updating Multiple Items

When you need to update several project state items:

```js
async function updateMultipleSettings() {
    const updates = [
        { key: 'project_name', value: 'My New Project' },
        { key: 'version', value: '2.0.0' },
        { key: 'status', value: 'active' },
        { key: 'last_modified', value: new Date().toISOString() }
    ];
    
    console.log('Updating project settings...');
    
    for (const update of updates) {
        try {
            const result = await codebolt.cbstate.updateProjectState(update.key, update.value);
            if (result.message === 'success') {
                console.log(`✅ ${update.key}: ${update.value}`);
            }
        } catch (error) {
            console.error(`❌ Failed to update ${update.key}:`, error.message);
        }
    }
    
    console.log('Update process complete!');
}

updateMultipleSettings();
```

## Response Format

When you call `updateProjectState`, you'll get back a response like this:

```js
{
  type: 'updateProjectStateResponse',
  message: 'success'  // This means it worked!
}
```

## Related Functions

- Use `getApplicationState()` to retrieve the values you've stored
- Use `addToAgentState()` for session-specific data that doesn't need to persist project-wide

---