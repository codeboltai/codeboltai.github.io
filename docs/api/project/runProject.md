# runProject

Runs the current project.

## Syntax

```typescript
cbproject.runProject(): void
```

## Parameters

This function takes no parameters.

## Returns

- `void` - This function does not return a value

## Description

The `runProject` function initiates the execution of the current project. This function sends a command to run the project through the WebSocket connection. The actual execution and output handling are managed by the underlying system.

This function is typically used to:
- Start development servers
- Execute build processes
- Launch applications
- Run project scripts

## Example

```typescript
import cbproject from '@codebolt/project';

async function startProject() {
  try {
    // Run the current project
    cbproject.runProject();
    console.log('Project execution initiated');
    
    // Note: This function doesn't return a promise, so we can't await it
    // The execution status should be monitored through other means
    
  } catch (error) {
    console.error('Failed to run project:', error);
  }
}

// Usage
startProject();
```

## Use Cases

### Development Server Startup
```typescript
// Start development server
function startDevServer() {
  console.log('Starting development server...');
  cbproject.runProject();
  
  // Monitor terminal output for server status
  // (This would typically be done through terminal module)
}
```

### Build Process Execution
```typescript
// Execute build process
function buildProject() {
  console.log('Building project...');
  cbproject.runProject();
  
  // The build process will run in the background
  // Monitor progress through terminal or other modules
}
```

### Application Launch
```typescript
// Launch the application
function launchApp() {
  console.log('Launching application...');
  cbproject.runProject();
  
  // Application will start running
  // Use other modules to monitor status
}
```

### Automated Workflow
```typescript
import cbproject from '@codebolt/project';
import cbterminal from '@codebolt/terminal';

async function automatedProjectRun() {
  try {
    // Get project path first
    const projectInfo = await cbproject.getProjectPath();
    console.log(`Running project at: ${projectInfo.path}`);
    
    // Run the project
    cbproject.runProject();
    
    // Monitor execution through terminal
    const terminalOutput = await cbterminal.getOutput();
    console.log('Project output:', terminalOutput);
    
  } catch (error) {
    console.error('Automated run failed:', error);
  }
}
```

## Integration with Other Modules

### With Terminal Module
```typescript
import cbproject from '@codebolt/project';
import cbterminal from '@codebolt/terminal';

function runAndMonitor() {
  // Start the project
  cbproject.runProject();
  
  // Monitor output
  cbterminal.onOutput((output) => {
    console.log('Project output:', output);
    
    if (output.includes('Server started')) {
      console.log('Project is running successfully!');
    }
    
    if (output.includes('Error')) {
      console.error('Project encountered an error:', output);
    }
  });
}
```

### With State Module
```typescript
import cbproject from '@codebolt/project';
import cbstate from '@codebolt/cbstate';

async function runWithStateTracking() {
  // Update project state
  await cbstate.updateProjectState('status', 'starting');
  
  // Run the project
  cbproject.runProject();
  
  // Update state to running
  await cbstate.updateProjectState('status', 'running');
  await cbstate.updateProjectState('lastRun', new Date().toISOString());
}
```

## Error Handling

Since this function doesn't return a promise, error handling should be done through monitoring:

```typescript
import cbproject from '@codebolt/project';
import cbterminal from '@codebolt/terminal';

function runProjectWithErrorHandling() {
  try {
    // Run the project
    cbproject.runProject();
    
    // Set up error monitoring
    cbterminal.onOutput((output) => {
      if (output.includes('Error') || output.includes('Failed')) {
        console.error('Project execution error detected:', output);
        handleProjectError(output);
      }
    });
    
  } catch (error) {
    console.error('Failed to initiate project run:', error);
  }
}

function handleProjectError(errorOutput) {
  // Handle specific error types
  if (errorOutput.includes('Port already in use')) {
    console.log('Port conflict detected. Trying alternative port...');
    // Handle port conflict
  } else if (errorOutput.includes('Module not found')) {
    console.log('Missing dependencies detected. Installing...');
    // Handle missing dependencies
  }
}
```

## Best Practices

1. **Pre-run Checks**: Verify project state before running
2. **Output Monitoring**: Use terminal module to monitor execution
3. **State Management**: Update project state appropriately
4. **Error Handling**: Monitor output for error conditions

```typescript
import cbproject from '@codebolt/project';
import cbstate from '@codebolt/cbstate';

async function bestPracticeRun() {
  try {
    // Check project state
    const projectState = await cbstate.getProjectState();
    if (projectState.status === 'running') {
      console.log('Project is already running');
      return;
    }
    
    // Get project info
    const projectInfo = await cbproject.getProjectPath();
    console.log(`Running project: ${projectInfo.name}`);
    
    // Update state
    await cbstate.updateProjectState('status', 'starting');
    
    // Run project
    cbproject.runProject();
    
    // Update state
    await cbstate.updateProjectState('status', 'running');
    
  } catch (error) {
    await cbstate.updateProjectState('status', 'error');
    console.error('Project run failed:', error);
  }
}
```

## Related Functions

- [`getProjectPath()`](./getProjectPath.md) - Get the current project path
- [`getProjectSettings()`](./getProjectSettings.md) - Get project settings
- [`getRepoMap()`](./getRepoMap.md) - Get repository structure
- [`getEditorFileStatus()`](./getEditorFileStatus.md) - Get editor file status 