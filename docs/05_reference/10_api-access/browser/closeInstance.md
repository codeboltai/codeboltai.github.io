---
title: Close Browser Instance
description: Closes a specific browser instance and cleans up its resources.
---

# Close Browser Instance

Closes a specific browser instance and cleans up all associated resources, including memory, cookies, and session data.

## Syntax

```js
const success = await codebolt.closeBrowserInstance(instanceId);
```

## Parameters

- **instanceId** (`string`): The unique identifier of the browser instance to close

## Return Value

Returns a promise that resolves to a `boolean`:
- `true` if the instance was successfully closed
- `false` if the instance was not found or couldn't be closed

## Examples

### Close Specific Instance

```js
import codebolt from '@codebolt/codeboltjs';

const instanceId = "browser-1234567890-abc123";
const success = await codebolt.closeBrowserInstance(instanceId);

if (success) {
  console.log(`Instance ${instanceId} closed successfully`);
} else {
  console.log(`Failed to close instance ${instanceId} (not found)`);
}
```

### Close All Instances

```js
async function closeAllInstances() {
  const instances = await codebolt.listBrowserInstances();
  const results = [];
  
  for (const instance of instances) {
    const success = await codebolt.closeBrowserInstance(instance.instanceId);
    results.push({
      instanceId: instance.instanceId,
      success,
      url: instance.currentUrl
    });
  }
  
  console.log(`Closed ${results.filter(r => r.success).length}/${results.length} instances`);
  return results;
}

// Usage
const closeResults = await closeAllInstances();
closeResults.forEach(result => {
  console.log(`${result.success ? '✅' : '❌'} ${result.instanceId} (${result.url})`);
});
```

### Safe Instance Cleanup

```js
async function safeInstanceCleanup(instanceId) {
  try {
    // Verify instance exists before closing
    const instance = await codebolt.getBrowserInstance(instanceId);
    
    if (!instance) {
      console.log(`Instance ${instanceId} not found, nothing to close`);
      return true; // Consider it successful since instance doesn't exist
    }
    
    console.log(`Closing instance ${instanceId} (URL: ${instance.currentUrl})`);
    
    const success = await codebolt.closeBrowserInstance(instanceId);
    
    if (success) {
      console.log(`✅ Successfully closed instance ${instanceId}`);
      
      // Verify it's actually closed
      const verifyInstance = await codebolt.getBrowserInstance(instanceId);
      if (!verifyInstance) {
        console.log(`✅ Verified instance ${instanceId} is closed`);
      }
    } else {
      console.log(`❌ Failed to close instance ${instanceId}`);
    }
    
    return success;
    
  } catch (error) {
    console.error(`Error closing instance ${instanceId}:`, error.message);
    return false;
  }
}
```

### Instance Lifecycle Management

```js
class BrowserInstanceManager {
  constructor() {
    this.instances = new Map(); // instanceId -> metadata
  }
  
  async createInstance(name, options = {}) {
    const instance = await codebolt.openNewBrowserInstance({
      instanceId: `managed-${name}-${Date.now()}`,
      setActive: false,
      ...options
    });
    
    this.instances.set(instance.instanceId, {
      name,
      createdAt: new Date(),
      lastUsed: new Date()
    });
    
    console.log(`Created managed instance: ${instance.instanceId} (${name})`);
    return instance;
  }
  
  async useInstance(instanceId, operation) {
    const metadata = this.instances.get(instanceId);
    if (!metadata) {
      throw new Error(`Instance ${instanceId} not managed`);
    }
    
    // Set as active
    await codebolt.setActiveBrowserInstance(instanceId);
    
    // Update last used
    metadata.lastUsed = new Date();
    
    // Perform operation
    return await operation();
  }
  
  async closeInstance(instanceId) {
    const metadata = this.instances.get(instanceId);
    if (!metadata) {
      throw new Error(`Instance ${instanceId} not managed`);
    }
    
    const success = await codebolt.closeBrowserInstance(instanceId);
    
    if (success) {
      this.instances.delete(instanceId);
      console.log(`✅ Closed managed instance: ${instanceId} (${metadata.name})`);
    } else {
      console.log(`❌ Failed to close instance: ${instanceId}`);
    }
    
    return success;
  }
  
  async cleanupOldInstances(maxAgeMinutes = 30) {
    const now = new Date();
    const toClose = [];
    
    for (const [instanceId, metadata] of this.instances) {
      const ageMinutes = (now - metadata.lastUsed) / (1000 * 60);
      if (ageMinutes > maxAgeMinutes) {
        toClose.push(instanceId);
      }
    }
    
    console.log(`Found ${toClose.length} instances older than ${maxAgeMinutes} minutes`);
    
    for (const instanceId of toClose) {
      await this.closeInstance(instanceId);
    }
    
    return toClose.length;
  }
}

// Usage
const manager = new BrowserInstanceManager();

const researchInstance = await manager.createInstance("research");
await manager.useInstance(researchInstance.instanceId, async () => {
  await codebolt.browser.goToPage('https://scholar.google.com');
  await codebolt.browser.screenshot();
});

// Cleanup old instances
await manager.cleanupOldInstances(15); // Close instances unused for 15 minutes
```

### Graceful Shutdown

```js
async function gracefulShutdown() {
  console.log('Starting graceful browser shutdown...');
  
  try {
    // Get all instances
    const instances = await codebolt.listBrowserInstances();
    
    if (instances.length === 0) {
      console.log('No browser instances to close');
      return;
    }
    
    console.log(`Found ${instances.length} instances to close`);
    
    // Close each instance with timeout
    const closePromises = instances.map(async (instance) => {
      return Promise.race([
        codebolt.closeBrowserInstance(instance.instanceId),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 5000)
        )
      ]).catch(error => {
        console.error(`Failed to close ${instance.instanceId}:`, error.message);
        return false;
      });
    });
    
    const results = await Promise.all(closePromises);
    const successCount = results.filter(Boolean).length;
    
    console.log(`✅ Successfully closed ${successCount}/${instances.length} instances`);
    
    // Verify all are closed
    const remaining = await codebolt.listBrowserInstances();
    if (remaining.length > 0) {
      console.warn(`⚠️ ${remaining.length} instances still remaining`);
    } else {
      console.log('✅ All browser instances closed successfully');
    }
    
  } catch (error) {
    console.error('Error during graceful shutdown:', error);
  }
}

// Usage on process exit
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
```

### Conditional Cleanup

```js
async function conditionalCleanup(keepActive = true) {
  const instances = await codebolt.listBrowserInstances();
  
  let instancesToClose = instances;
  
  if (keepActive) {
    // Keep the active instance
    const activeInstance = instances.find(inst => inst.isActive);
    if (activeInstance) {
      instancesToClose = instances.filter(inst => inst.instanceId !== activeInstance.instanceId);
      console.log(`Keeping active instance: ${activeInstance.instanceId}`);
    }
  }
  
  // Close instances that have been inactive for more than 1 hour
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const oldInstances = instancesToClose.filter(inst => 
    new Date(inst.createdAt) < oneHourAgo
  );
  
  console.log(`Closing ${oldInstances.length} old instances...`);
  
  for (const instance of oldInstances) {
    const success = await codebolt.closeBrowserInstance(instance.instanceId);
    console.log(`${success ? '✅' : '❌'} Closed ${instance.instanceId}`);
  }
  
  return oldInstances.length;
}
```

## Use Cases

### **Resource Management**
Free up system resources by closing unused instances.

### **Session Cleanup**
End browsing sessions and clear sensitive data.

### **Application Shutdown**
Clean shutdown of all browser instances.

### **Memory Management**
Prevent memory leaks by properly closing instances.

### **Privacy Protection**
Ensure all browsing data is cleared when done.

## Error Handling

```js
async function closeWithErrorHandling(instanceId) {
  try {
    const success = await codebolt.closeBrowserInstance(instanceId);
    
    if (!success) {
      // Instance might not exist - check what instances are available
      const instances = await codebolt.listBrowserInstances();
      console.log('Available instances:', instances.map(inst => inst.instanceId));
      
      if (instances.length === 0) {
        console.log('No instances exist - nothing to close');
        return true;
      }
    }
    
    return success;
    
  } catch (error) {
    console.error(`Unexpected error closing instance ${instanceId}:`, error);
    return false;
  }
}
```

## Notes

- **Resource Cleanup**: Frees memory, cookies, storage, and session data
- **Final Operation**: Cannot be undone - instance is permanently closed
- **Active Instance**: If closing the active instance, no instance will be active afterward
- **Safe Operation**: Returns false if instance doesn't exist (doesn't throw error)
- **Background Operations**: Any ongoing operations on the instance will be terminated

## Best Practices

1. **Verify Before Close**: Check instance exists before attempting to close
2. **Graceful Shutdown**: Use timeouts to prevent hanging
3. **Batch Operations**: Close multiple instances efficiently
4. **Error Handling**: Handle failures gracefully
5. **Resource Monitoring**: Monitor system resources during cleanup

## Related Functions

- [`listBrowserInstances()`](/docs/api/apiaccess/browser/listInstances) - List all instances
- [`getBrowserInstance()`](/docs/api/apiaccess/browser/getInstance) - Get specific instance
- [`openNewBrowserInstance()`](/docs/api/apiaccess/browser/openNewInstance) - Create new instance
- [`setActiveBrowserInstance()`](/docs/api/apiaccess/browser/setActiveInstance) - Set active instance
