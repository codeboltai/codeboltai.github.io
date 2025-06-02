# updateProjectState

Updates the project state on the server via WebSocket.

## Syntax

```typescript
cbstate.updateProjectState(key: string, value: any): Promise<any>
```

## Parameters

- `key` (string) - The key of the project state property to update
- `value` (any) - The new value to set for the specified key

## Returns

- `Promise<any>` - A promise that resolves with the update response

## Description

The `updateProjectState` function updates a specific property in the project state on the server. This allows you to modify project-level configuration, status, metadata, and other state information that needs to be persisted and shared across the application.

This function is useful for:
- Updating build status and progress
- Modifying project configuration
- Setting environment variables
- Storing project metadata
- Tracking project-specific data

## Example

```typescript
import cbstate from '@codebolt/cbstate';

async function updateBuildStatus(status: string) {
  try {
    const response = await cbstate.updateProjectState('buildStatus', status);
    console.log('Build status updated:', response);
    return response;
  } catch (error) {
    console.error('Failed to update build status:', error);
    throw error;
  }
}

// Usage
await updateBuildStatus('building');
await updateBuildStatus('success');
```

## Use Cases

### Build Status Management
```typescript
// Update build status throughout the build process
async function manageBuildProcess() {
  try {
    // Start build
    await cbstate.updateProjectState('buildStatus', 'building');
    await cbstate.updateProjectState('buildStartTime', new Date().toISOString());
    
    // Simulate build process
    console.log('Building project...');
    
    // Update progress
    await cbstate.updateProjectState('buildProgress', 50);
    
    // Complete build
    await cbstate.updateProjectState('buildStatus', 'success');
    await cbstate.updateProjectState('buildEndTime', new Date().toISOString());
    await cbstate.updateProjectState('lastSuccessfulBuild', new Date().toISOString());
    
    console.log('Build completed successfully');
  } catch (error) {
    await cbstate.updateProjectState('buildStatus', 'failed');
    await cbstate.updateProjectState('buildError', error.message);
    throw error;
  }
}
```

### Configuration Updates
```typescript
// Update project configuration
async function updateProjectConfig(config: any) {
  const updates = [];
  
  // Update multiple configuration properties
  for (const [key, value] of Object.entries(config)) {
    try {
      const response = await cbstate.updateProjectState(key, value);
      updates.push({ key, value, success: true });
    } catch (error) {
      updates.push({ key, value, success: false, error: error.message });
    }
  }
  
  return updates;
}

// Usage
const newConfig = {
  environment: 'production',
  version: '2.0.0',
  debugMode: false,
  apiEndpoint: 'https://api.production.com'
};

const results = await updateProjectConfig(newConfig);
console.log('Configuration updates:', results);
```

### Environment Management
```typescript
// Switch between environments
async function switchEnvironment(environment: 'development' | 'staging' | 'production') {
  const environmentConfigs = {
    development: {
      environment: 'development',
      debugMode: true,
      apiEndpoint: 'http://localhost:3000',
      logLevel: 'debug'
    },
    staging: {
      environment: 'staging',
      debugMode: false,
      apiEndpoint: 'https://api.staging.com',
      logLevel: 'info'
    },
    production: {
      environment: 'production',
      debugMode: false,
      apiEndpoint: 'https://api.production.com',
      logLevel: 'error'
    }
  };
  
  const config = environmentConfigs[environment];
  
  // Update all environment-specific settings
  for (const [key, value] of Object.entries(config)) {
    await cbstate.updateProjectState(key, value);
  }
  
  console.log(`Switched to ${environment} environment`);
}
```

### Progress Tracking
```typescript
// Track long-running operations
class OperationTracker {
  constructor(private operationName: string) {}
  
  async start() {
    await cbstate.updateProjectState(`${this.operationName}Status`, 'running');
    await cbstate.updateProjectState(`${this.operationName}StartTime`, new Date().toISOString());
    await cbstate.updateProjectState(`${this.operationName}Progress`, 0);
  }
  
  async updateProgress(progress: number, message?: string) {
    await cbstate.updateProjectState(`${this.operationName}Progress`, progress);
    if (message) {
      await cbstate.updateProjectState(`${this.operationName}Message`, message);
    }
  }
  
  async complete(result?: any) {
    await cbstate.updateProjectState(`${this.operationName}Status`, 'completed');
    await cbstate.updateProjectState(`${this.operationName}EndTime`, new Date().toISOString());
    await cbstate.updateProjectState(`${this.operationName}Progress`, 100);
    if (result) {
      await cbstate.updateProjectState(`${this.operationName}Result`, result);
    }
  }
  
  async fail(error: string) {
    await cbstate.updateProjectState(`${this.operationName}Status`, 'failed');
    await cbstate.updateProjectState(`${this.operationName}EndTime`, new Date().toISOString());
    await cbstate.updateProjectState(`${this.operationName}Error`, error);
  }
}

// Usage
const deployTracker = new OperationTracker('deployment');
await deployTracker.start();
await deployTracker.updateProgress(25, 'Building application...');
await deployTracker.updateProgress(50, 'Running tests...');
await deployTracker.updateProgress(75, 'Deploying to server...');
await deployTracker.complete({ deploymentId: 'deploy-123' });
```

## Advanced Examples

### Batch Updates
```typescript
// Update multiple state properties efficiently
async function batchUpdateProjectState(updates: Record<string, any>) {
  const results = [];
  
  // Process updates in parallel for better performance
  const updatePromises = Object.entries(updates).map(async ([key, value]) => {
    try {
      const response = await cbstate.updateProjectState(key, value);
      return { key, value, success: true, response };
    } catch (error) {
      return { key, value, success: false, error: error.message };
    }
  });
  
  const results = await Promise.allSettled(updatePromises);
  
  return results.map(result => 
    result.status === 'fulfilled' ? result.value : { success: false, error: result.reason }
  );
}

// Usage
const batchUpdates = {
  version: '1.2.3',
  lastModified: new Date().toISOString(),
  buildNumber: 42,
  features: ['feature1', 'feature2']
};

const results = await batchUpdateProjectState(batchUpdates);
console.log('Batch update results:', results);
```

### Conditional Updates
```typescript
// Update state based on conditions
async function conditionalUpdate(key: string, value: any, condition?: (currentState: any) => boolean) {
  if (condition) {
    // Get current state to check condition
    const currentState = await cbstate.getProjectState();
    
    if (!condition(currentState)) {
      throw new Error('Condition not met for state update');
    }
  }
  
  return await cbstate.updateProjectState(key, value);
}

// Usage
await conditionalUpdate(
  'environment', 
  'production',
  (state) => state.data?.testsStatus === 'passed' && state.data?.buildStatus === 'success'
);
```

### State Validation
```typescript
// Validate state updates
interface StateValidator {
  [key: string]: (value: any) => boolean;
}

const validators: StateValidator = {
  environment: (value) => ['development', 'staging', 'production'].includes(value),
  version: (value) => /^\d+\.\d+\.\d+$/.test(value),
  buildStatus: (value) => ['pending', 'building', 'success', 'failed'].includes(value),
  debugMode: (value) => typeof value === 'boolean'
};

async function validatedUpdateProjectState(key: string, value: any) {
  // Validate the update
  if (validators[key] && !validators[key](value)) {
    throw new Error(`Invalid value for ${key}: ${value}`);
  }
  
  return await cbstate.updateProjectState(key, value);
}

// Usage
try {
  await validatedUpdateProjectState('environment', 'production'); // Valid
  await validatedUpdateProjectState('environment', 'invalid'); // Throws error
} catch (error) {
  console.error('Validation failed:', error.message);
}
```

## Error Handling

```typescript
async function robustUpdateProjectState(key: string, value: any, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await cbstate.updateProjectState(key, value);
      return response;
    } catch (error) {
      console.error(`Update attempt ${attempt} failed:`, error);
      
      if (attempt === retries) {
        // Final attempt failed
        throw new Error(`Failed to update ${key} after ${retries} attempts: ${error.message}`);
      }
      
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}

// Usage with error handling
try {
  await robustUpdateProjectState('buildStatus', 'success');
} catch (error) {
  console.error('All update attempts failed:', error);
  // Handle failure appropriately
}
```

## Response Format

The function typically returns an object with the following structure:

```typescript
{
  success: boolean;
  data?: {
    key: string;
    value: any;
    previousValue?: any;
    timestamp: string;
  };
  message?: string;
  error?: string;
}
```

## Best Practices

1. **Validate Input**: Always validate keys and values before updating
2. **Handle Errors**: Implement proper error handling and retry logic
3. **Use Meaningful Keys**: Use descriptive, consistent key names
4. **Batch Updates**: Group related updates for better performance
5. **Monitor Changes**: Track state changes for debugging and auditing

```typescript
// Best practice implementation
class ProjectStateManager {
  private readonly validKeys = [
    'buildStatus', 'testsStatus', 'environment', 'version', 
    'debugMode', 'lastBuild', 'lastTest'
  ];
  
  async updateState(key: string, value: any) {
    // Validate key
    if (!this.validKeys.includes(key)) {
      throw new Error(`Invalid state key: ${key}`);
    }
    
    // Log the update
    console.log(`Updating project state: ${key} = ${JSON.stringify(value)}`);
    
    try {
      const response = await cbstate.updateProjectState(key, value);
      console.log(`Successfully updated ${key}`);
      return response;
    } catch (error) {
      console.error(`Failed to update ${key}:`, error);
      throw error;
    }
  }
  
  async updateMultiple(updates: Record<string, any>) {
    const results = [];
    
    for (const [key, value] of Object.entries(updates)) {
      try {
        const result = await this.updateState(key, value);
        results.push({ key, success: true, result });
      } catch (error) {
        results.push({ key, success: false, error: error.message });
      }
    }
    
    return results;
  }
}
```

## Related Functions

- [`getProjectState()`](./getProjectState.md) - Get current project state
- [`getApplicationState()`](./getApplicationState.md) - Get application-wide state
- [`addToAgentState()`](./addToAgentState.md) - Add to agent state
- [`getAgentState()`](./getAgentState.md) - Get agent-specific state 