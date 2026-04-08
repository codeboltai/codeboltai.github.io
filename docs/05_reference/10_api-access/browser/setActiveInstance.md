---
title: Set Active Browser Instance
description: Sets a browser instance as the active instance for subsequent operations.
---

# Set Active Browser Instance

Sets a specific browser instance as the active instance, making it the default target for all subsequent browser operations that don't specify an explicit instanceId.

## Syntax

```js
const success = await codebolt.setActiveBrowserInstance(instanceId);
```

## Parameters

- **instanceId** (`string`): The unique identifier of the browser instance to set as active

## Return Value

Returns a promise that resolves to a `boolean`:
- `true` if the instance was successfully set as active
- `false` if the instance was not found

## Examples

### Set Active Instance

```js
import codebolt from '@codebolt/codeboltjs';

const instanceId = "browser-1234567890-abc123";
const success = await codebolt.setActiveBrowserInstance(instanceId);

if (success) {
  console.log(`Instance ${instanceId} is now active`);
  
  // Subsequent operations will use this instance by default
  await codebolt.browser.goToPage('https://example.com');
  await codebolt.browser.screenshot();
} else {
  console.log(`Failed to set instance ${instanceId} as active (not found)`);
}
```

### Switch Between Instances

```js
async function switchBetweenInstances(instanceId1, instanceId2) {
  // Set first instance as active
  const success1 = await codebolt.setActiveBrowserInstance(instanceId1);
  if (success1) {
    console.log('Switched to instance 1');
    await codebolt.browser.goToPage('https://example.com');
  }
  
  // Switch to second instance
  const success2 = await codebolt.setActiveBrowserInstance(instanceId2);
  if (success2) {
    console.log('Switched to instance 2');
    await codebolt.browser.goToPage('https://google.com');
  }
}
```

### Active Instance Management

```js
class BrowserInstanceManager {
  constructor() {
    this.activeInstance = null;
  }
  
  async setActive(instanceId) {
    const success = await codebolt.setActiveBrowserInstance(instanceId);
    if (success) {
      this.activeInstance = instanceId;
      console.log(`Active instance set to: ${instanceId}`);
    } else {
      throw new Error(`Instance ${instanceId} not found`);
    }
  }
  
  async getCurrentActive() {
    const instances = await codebolt.listBrowserInstances();
    return instances.find(inst => inst.isActive);
  }
  
  async switchAndNavigate(instanceId, url) {
    await this.setActive(instanceId);
    await codebolt.browser.goToPage(url);
    console.log(`Navigated ${url} on instance ${instanceId}`);
  }
}

// Usage
const manager = new BrowserInstanceManager();
await manager.switchAndNavigate("browser-123", "https://example.com");
```

### Safe Instance Switching

```js
async function safeSetActiveInstance(instanceId) {
  // First verify instance exists
  const instance = await codebolt.getBrowserInstance(instanceId);
  
  if (!instance) {
    throw new Error(`Instance ${instanceId} not found`);
  }
  
  if (!instance.isReady) {
    throw new Error(`Instance ${instanceId} is not ready`);
  }
  
  // Set as active
  const success = await codebolt.setActiveBrowserInstance(instanceId);
  
  if (!success) {
    throw new Error(`Failed to set instance ${instanceId} as active`);
  }
  
  console.log(`Successfully set ${instanceId} as active instance`);
  return instance;
}

// Usage
try {
  const activeInstance = await safeSetActiveInstance("browser-1234567890-abc123");
  await codebolt.browser.screenshot();
} catch (error) {
  console.error('Failed to set active instance:', error.message);
}
```

### Round-Robin Instance Usage

```js
class RoundRobinBrowser {
  constructor(instanceIds) {
    this.instanceIds = instanceIds;
    this.currentIndex = 0;
  }
  
  async switchToNext() {
    const instanceId = this.instanceIds[this.currentIndex];
    const success = await codebolt.setActiveBrowserInstance(instanceId);
    
    if (success) {
      console.log(`Switched to instance: ${instanceId}`);
      this.currentIndex = (this.currentIndex + 1) % this.instanceIds.length;
      return instanceId;
    } else {
      throw new Error(`Failed to switch to instance: ${instanceId}`);
    }
  }
  
  async performOnEach(operation) {
    const results = [];
    
    for (const instanceId of this.instanceIds) {
      await codebolt.setActiveBrowserInstance(instanceId);
      const result = await operation();
      results.push({ instanceId, result });
    }
    
    return results;
  }
}

// Usage
const roundRobin = new RoundRobinBrowser([
  "browser-123",
  "browser-456", 
  "browser-789"
]);

await roundRobin.switchToNext();
await codebolt.browser.goToPage('https://example.com');
```

## Use Cases

### **Task Switching**
Switch between different browser instances for different tasks.

### **Load Balancing**
Distribute browser operations across multiple instances.

### **Context Management**
Maintain separate contexts for different websites or tasks.

### **Resource Management**
Control which instance is currently being used.

## Error Handling

```js
async function setActiveWithErrorHandling(instanceId) {
  try {
    const success = await codebolt.setActiveBrowserInstance(instanceId);
    
    if (!success) {
      // Instance not found - list available instances
      const instances = await codebolt.listBrowserInstances();
      console.log('Available instances:');
      instances.forEach(inst => console.log(`- ${inst.instanceId}`));
      
      throw new Error(`Instance ${instanceId} not found`);
    }
    
    console.log(`Successfully set ${instanceId} as active`);
    
  } catch (error) {
    console.error('Failed to set active instance:', error.message);
    throw error;
  }
}
```

## Notes

- **Global State**: Affects all subsequent browser operations without explicit instanceId
- **Validation**: Returns false if instance doesn't exist (doesn't throw error)
- **Immediate Effect**: Changes take effect immediately for subsequent operations
- **Single Active**: Only one instance can be active at a time

## Best Practices

1. **Verify Instance**: Check instance exists before setting as active
2. **Error Handling**: Handle cases where instance is not found
3. **State Tracking**: Keep track of which instance is currently active
4. **Cleanup**: Reset active instance when closing instances

## Related Functions

- [`listBrowserInstances()`](/docs/api/apiaccess/browser/listInstances) - List all instances
- [`getBrowserInstance()`](/docs/api/apiaccess/browser/getInstance) - Get specific instance
- [`openNewBrowserInstance()`](/docs/api/apiaccess/browser/openNewInstance) - Create new instance
- [`closeBrowserInstance()`](/docs/api/apiaccess/browser/closeInstance) - Close instance
