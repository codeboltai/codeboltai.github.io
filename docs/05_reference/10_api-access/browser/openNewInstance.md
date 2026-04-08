---
title: Open New Browser Instance
description: Creates a new browser instance for isolated browsing sessions.
---

# Open New Browser Instance

Creates a new browser instance with a unique identifier, enabling isolated browsing sessions and multi-instance browser automation.

## Syntax

```js
const instance = await codebolt.openNewBrowserInstance(options);
```

## Parameters

- **options** ([`BrowserInstanceOptions`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/BrowserInstanceOptions), optional): Configuration options for the new instance

### BrowserInstanceOptions

- **instanceId** (`string`, optional): Custom instance ID. If not provided, a unique ID will be generated
- **setActive** (`boolean`, optional): Whether to set this instance as the active one. Default: `true`

## Return Value

Returns a promise that resolves to an object containing the new instance ID:

```js
{
  instanceId: "browser-1234567890-abc123"
}
```

## Examples

### Create New Instance (Auto-Generated ID)

```js
import codebolt from '@codebolt/codeboltjs';

// Create new instance with auto-generated ID
const instance = await codebolt.openNewBrowserInstance();
console.log(`New instance created: ${instance.instanceId}`);

// Instance is automatically set as active
await codebolt.browser.goToPage('https://example.com');
```

### Create New Instance with Custom ID

```js
const customInstance = await codebolt.openNewBrowserInstance({
  instanceId: "my-custom-browser-instance"
});

console.log(`Custom instance created: ${customInstance.instanceId}`);
```

### Create Instance Without Setting as Active

```js
const backgroundInstance = await codebolt.openNewBrowserInstance({
  instanceId: "background-browser",
  setActive: false
});

console.log(`Background instance created: ${backgroundInstance.instanceId}`);
// This instance is NOT the active one

// Current active instance remains unchanged
await codebolt.browser.goToPage('https://example.com'); // Uses previous active instance

// Later, switch to the background instance
await codebolt.setActiveBrowserInstance(backgroundInstance.instanceId);
await codebolt.browser.goToPage('https://google.com'); // Now uses background instance
```

### Multi-Instance Setup

```js
async function setupMultiInstanceBrowsing() {
  // Create instances for different tasks
  const researchInstance = await codebolt.openNewBrowserInstance({
    instanceId: "research-browser",
    setActive: false
  });
  
  const socialInstance = await codebolt.openNewBrowserInstance({
    instanceId: "social-browser", 
    setActive: false
  });
  
  const workInstance = await codebolt.openNewBrowserInstance({
    instanceId: "work-browser",
    setActive: true  // This becomes the active instance
  });
  
  console.log('Created instances:', {
    research: researchInstance.instanceId,
    social: socialInstance.instanceId,
    work: workInstance.instanceId
  });
  
  return { researchInstance, socialInstance, workInstance };
}

// Usage
const instances = await setupMultiInstanceBrowsing();
```

### Instance Pool Management

```js
class BrowserInstancePool {
  constructor(maxSize = 5) {
    this.instances = [];
    this.maxSize = maxSize;
  }
  
  async createInstance(options = {}) {
    if (this.instances.length >= this.maxSize) {
      throw new Error(`Maximum pool size (${this.maxSize}) reached`);
    }
    
    const instance = await codebolt.openNewBrowserInstance({
      setActive: false, // Don't automatically set as active
      ...options
    });
    
    this.instances.push(instance);
    console.log(`Instance ${instance.instanceId} added to pool`);
    
    return instance;
  }
  
  async getInstance(instanceId) {
    const instance = this.instances.find(inst => inst.instanceId === instanceId);
    if (instance) {
      await codebolt.setActiveBrowserInstance(instanceId);
      return instance;
    }
    throw new Error(`Instance ${instanceId} not found in pool`);
  }
  
  listInstances() {
    return this.instances.map(inst => inst.instanceId);
  }
  
  async removeInstance(instanceId) {
    const index = this.instances.findIndex(inst => inst.instanceId === instanceId);
    if (index !== -1) {
      this.instances.splice(index, 1);
      await codebolt.closeBrowserInstance(instanceId);
      console.log(`Instance ${instanceId} removed from pool`);
    }
  }
}

// Usage
const pool = new BrowserInstancePool(3);

const instance1 = await pool.createInstance({ instanceId: "pool-1" });
const instance2 = await pool.createInstance({ instanceId: "pool-2" });

await pool.getInstance("pool-1");
await codebolt.browser.goToPage('https://example.com');
```

### Isolated Session Management

```js
async function createIsolatedSession(sessionName, startUrl) {
  const instanceId = `session-${sessionName}-${Date.now()}`;
  
  const instance = await codebolt.openNewBrowserInstance({
    instanceId,
    setActive: false  // Don't disturb current active instance
  });
  
  // Switch to new instance temporarily
  const previousActive = await codebolt.listBrowserInstances()
    .then(instances => instances.find(inst => inst.isActive)?.instanceId);
  
  await codebolt.setActiveBrowserInstance(instanceId);
  
  // Setup the isolated session
  await codebolt.browser.newPage();
  if (startUrl) {
    await codebolt.browser.goToPage(startUrl);
  }
  
  console.log(`Isolated session '${sessionName}' created with ID: ${instanceId}`);
  
  // Restore previous active instance
  if (previousActive) {
    await codebolt.setActiveBrowserInstance(previousActive);
  }
  
  return instance;
}

// Usage
const session1 = await createIsolatedSession("research", "https://scholar.google.com");
const session2 = await createIsolatedSession("shopping", "https://amazon.com");
```

## Use Cases

### **Task Isolation**
Separate browser instances for different tasks or contexts.

### **Parallel Processing**
Run multiple browser operations simultaneously.

### **Session Management**
Maintain separate sessions for different users or accounts.

### **Resource Management**
Control browser instance lifecycle and resource usage.

### **Testing**
Create isolated environments for testing different scenarios.

## Error Handling

```js
async function safeCreateInstance(options = {}) {
  try {
    const instance = await codebolt.openNewBrowserInstance(options);
    console.log(`Successfully created instance: ${instance.instanceId}`);
    return instance;
  } catch (error) {
    console.error('Failed to create browser instance:', error.message);
    
    // List existing instances for debugging
    const existing = await codebolt.listBrowserInstances();
    console.log('Existing instances:', existing.map(inst => inst.instanceId));
    
    throw error;
  }
}
```

## Notes

- **Unique IDs**: Instance IDs must be unique within the current session
- **Auto-Generation**: If no instanceId provided, a unique ID is generated automatically
- **Active by Default**: New instances are set as active unless `setActive: false`
- **Isolation**: Each instance maintains separate cookies, storage, and session state
- **Resource Usage**: Each instance consumes system resources

## Best Practices

1. **Descriptive IDs**: Use meaningful instance IDs for easier management
2. **Cleanup**: Close instances when no longer needed to free resources
3. **Pool Management**: Limit the number of concurrent instances
4. **Error Handling**: Handle creation failures gracefully
5. **State Tracking**: Keep track of created instances for proper cleanup

## Related Functions

- [`listBrowserInstances()`](/docs/api/apiaccess/browser/listInstances) - List all instances
- [`getBrowserInstance()`](/docs/api/apiaccess/browser/getInstance) - Get specific instance
- [`setActiveBrowserInstance()`](/docs/api/apiaccess/browser/setActiveInstance) - Set active instance
- [`closeBrowserInstance()`](/docs/api/apiaccess/browser/closeInstance) - Close instance
