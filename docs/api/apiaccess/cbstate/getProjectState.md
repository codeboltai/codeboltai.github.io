# getProjectState

Retrieves the current project state from the server via WebSocket.

## Syntax

```typescript
cbstate.getProjectState(): Promise<any>
```

## Parameters

This function takes no parameters.

## Returns

- `Promise<any>` - A promise that resolves with the project state response

## Description

The `getProjectState` function retrieves the current state of the project from the server. This includes project-specific configuration, settings, metadata, and other state information that is maintained at the project level.

Project state typically includes:
- Project configuration settings
- Build status and information
- Environment variables
- Project metadata
- Custom project-specific data

## Example

```typescript
import cbstate from '@codebolt/cbstate';

async function checkProjectState() {
  try {
    const projectState = await cbstate.getProjectState();
    console.log('Current project state:', projectState);
    
    // Access specific state properties
    if (projectState.data) {
      console.log('Project name:', projectState.data.name);
      console.log('Project version:', projectState.data.version);
      console.log('Build status:', projectState.data.buildStatus);
    }
    
    return projectState;
  } catch (error) {
    console.error('Failed to get project state:', error);
    throw error;
  }
}

// Usage
const state = await checkProjectState();
```

## Use Cases

### Project Status Monitoring
```typescript
// Monitor project status
async function monitorProjectStatus() {
  const state = await cbstate.getProjectState();
  
  if (state.data?.buildStatus === 'building') {
    console.log('Project is currently building...');
    return { status: 'building', message: 'Build in progress' };
  } else if (state.data?.buildStatus === 'failed') {
    console.log('Last build failed');
    return { status: 'failed', message: 'Build failed' };
  } else if (state.data?.buildStatus === 'success') {
    console.log('Project built successfully');
    return { status: 'success', message: 'Build successful' };
  }
  
  return { status: 'unknown', message: 'Build status unknown' };
}
```

### Configuration Management
```typescript
// Get project configuration
async function getProjectConfig() {
  const state = await cbstate.getProjectState();
  
  const config = {
    name: state.data?.name || 'Unknown Project',
    version: state.data?.version || '1.0.0',
    environment: state.data?.environment || 'development',
    dependencies: state.data?.dependencies || [],
    scripts: state.data?.scripts || {}
  };
  
  return config;
}

// Use configuration for operations
async function runBasedOnConfig() {
  const config = await getProjectConfig();
  
  if (config.environment === 'production') {
    console.log('Running in production mode');
    // Production-specific logic
  } else {
    console.log('Running in development mode');
    // Development-specific logic
  }
}
```

### State-Based Decision Making
```typescript
// Make decisions based on project state
async function conditionalOperations() {
  const state = await cbstate.getProjectState();
  
  // Check if project is ready for deployment
  if (state.data?.testsStatus === 'passed' && 
      state.data?.buildStatus === 'success' &&
      state.data?.lintStatus === 'clean') {
    
    console.log('Project is ready for deployment');
    return { readyForDeployment: true };
  }
  
  // Identify what needs to be done
  const issues = [];
  if (state.data?.testsStatus !== 'passed') issues.push('tests');
  if (state.data?.buildStatus !== 'success') issues.push('build');
  if (state.data?.lintStatus !== 'clean') issues.push('linting');
  
  return { 
    readyForDeployment: false, 
    issues: issues 
  };
}
```

### Integration with Other Modules
```typescript
import cbstate from '@codebolt/cbstate';
import cbproject from '@codebolt/project';

// Sync project state with project operations
async function syncProjectOperations() {
  const projectState = await cbstate.getProjectState();
  const projectPath = await cbproject.getProjectPath();
  
  // Combine state and path information
  const combinedInfo = {
    state: projectState.data,
    path: projectPath.data?.path,
    lastSync: new Date().toISOString()
  };
  
  console.log('Combined project info:', combinedInfo);
  return combinedInfo;
}
```

## Advanced Examples

### State Caching and Optimization
```typescript
class ProjectStateManager {
  private cache: any = null;
  private cacheTime = 0;
  private cacheDuration = 10000; // 10 seconds
  
  async getState(useCache = true) {
    const now = Date.now();
    
    if (useCache && this.cache && (now - this.cacheTime) < this.cacheDuration) {
      return this.cache;
    }
    
    const state = await cbstate.getProjectState();
    this.cache = state;
    this.cacheTime = now;
    
    return state;
  }
  
  invalidateCache() {
    this.cache = null;
    this.cacheTime = 0;
  }
  
  async waitForStateChange(property: string, expectedValue: any, timeout = 30000) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      const state = await this.getState(false); // Don't use cache
      
      if (state.data?.[property] === expectedValue) {
        return state;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    throw new Error(`Timeout waiting for ${property} to become ${expectedValue}`);
  }
}

// Usage
const stateManager = new ProjectStateManager();

// Wait for build to complete
try {
  await stateManager.waitForStateChange('buildStatus', 'success', 60000);
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build did not complete in time:', error);
}
```

### State Comparison and Change Detection
```typescript
// Compare project states
async function compareProjectStates(previousState: any) {
  const currentState = await cbstate.getProjectState();
  
  const changes = [];
  
  // Compare specific properties
  const properties = ['buildStatus', 'testsStatus', 'version', 'environment'];
  
  for (const prop of properties) {
    const oldValue = previousState.data?.[prop];
    const newValue = currentState.data?.[prop];
    
    if (oldValue !== newValue) {
      changes.push({
        property: prop,
        oldValue: oldValue,
        newValue: newValue
      });
    }
  }
  
  return {
    hasChanges: changes.length > 0,
    changes: changes,
    currentState: currentState
  };
}
```

## Error Handling

```typescript
async function robustGetProjectState() {
  try {
    const state = await cbstate.getProjectState();
    return state;
  } catch (error) {
    console.error('Failed to get project state:', error);
    
    // Handle specific error types
    if (error.message.includes('network')) {
      console.warn('Network error. Retrying...');
      // Retry logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      return await cbstate.getProjectState();
    }
    
    if (error.message.includes('unauthorized')) {
      console.error('Unauthorized access to project state');
      return {
        success: false,
        error: 'Unauthorized',
        data: null
      };
    }
    
    // Return default state for other errors
    return {
      success: false,
      error: error.message,
      data: {
        name: 'Unknown Project',
        status: 'error'
      }
    };
  }
}
```

## Response Format

The function typically returns an object with the following structure:

```typescript
{
  success: boolean;
  data: {
    name?: string;
    version?: string;
    environment?: string;
    buildStatus?: 'pending' | 'building' | 'success' | 'failed';
    testsStatus?: 'pending' | 'running' | 'passed' | 'failed';
    lintStatus?: 'pending' | 'running' | 'clean' | 'issues';
    dependencies?: string[];
    scripts?: Record<string, string>;
    lastBuild?: string;
    lastTest?: string;
    customData?: Record<string, any>;
  };
  timestamp?: string;
  message?: string;
}
```

## Performance Considerations

- Project state queries may be expensive for large projects
- Consider caching results for frequently accessed state
- Use change detection to avoid unnecessary operations

## Related Functions

- [`getApplicationState()`](./getApplicationState.md) - Get application-wide state
- [`getAgentState()`](./getAgentState.md) - Get agent-specific state
- [`updateProjectState()`](./updateProjectState.md) - Update project state
- [`addToAgentState()`](./addToAgentState.md) - Add to agent state 