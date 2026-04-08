---
title: List Browser Instances
description: Lists all open browser instances with their status and metadata.
---

# List Browser Instances

Lists all currently open browser instances, providing detailed information about each instance including its status, current URL, and creation time.

## Syntax

```js
const instances = await codebolt.listBrowserInstances();
```

## Parameters

None

## Return Value

Returns a promise that resolves to an array of [`BrowserInstanceInfo`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/BrowserInstanceInfo) objects:

```js
[
  {
    instanceId: "browser-1234567890-abc123",
    isActive: true,
    isReady: true,
    currentUrl: "https://example.com",
    createdAt: "2023-12-07T10:30:00.000Z",
    title: "Example Domain"
  },
  {
    instanceId: "browser-1234567890-def456", 
    isActive: false,
    isReady: true,
    currentUrl: "https://google.com",
    createdAt: "2023-12-07T10:25:00.000Z",
    title: "Google"
  }
]
```

### BrowserInstanceInfo Properties

- **instanceId** (`string`): Unique identifier for the browser instance
- **isActive** (`boolean`): Whether this is the currently active instance
- **isReady** (`boolean`): Whether the instance is ready for operations
- **currentUrl** (`string`, optional): Current URL of the browser instance
- **createdAt** (`string`): ISO timestamp when the instance was created
- **title** (`string`, optional): Page title of the current page

## Examples

### List All Instances

```js
import codebolt from '@codebolt/codeboltjs';

// Get all browser instances
const instances = await codebolt.listBrowserInstances();

console.log(`Found ${instances.length} browser instances:`);
instances.forEach(instance => {
  console.log(`- ${instance.instanceId}`);
  console.log(`  Active: ${instance.isActive}`);
  console.log(`  URL: ${instance.currentUrl || 'N/A'}`);
  console.log(`  Created: ${instance.createdAt}`);
});
```

### Check Active Instance

```js
const instances = await codebolt.listBrowserInstances();
const activeInstance = instances.find(inst => inst.isActive);

if (activeInstance) {
  console.log(`Active instance: ${activeInstance.instanceId}`);
  console.log(`Current URL: ${activeInstance.currentUrl}`);
} else {
  console.log('No active instance found');
}
```

### Monitor Instance Status

```js
async function monitorBrowserInstances() {
  const instances = await codebolt.listBrowserInstances();
  
  const readyInstances = instances.filter(inst => inst.isReady);
  const activeInstances = instances.filter(inst => inst.isActive);
  
  console.log(`Total instances: ${instances.length}`);
  console.log(`Ready instances: ${readyInstances.length}`);
  console.log(`Active instances: ${activeInstances.length}`);
  
  return instances;
}

// Monitor every 5 seconds
setInterval(monitorBrowserInstances, 5000);
```

## Use Cases

### **Instance Management**
Monitor all browser instances and their status for resource management.

### **Debugging**
Check which instances are active and their current state during development.

### **Resource Cleanup**
Identify inactive or abandoned instances for cleanup.

### **Multi-Tasking**
Track multiple concurrent browser automation tasks.

## Notes

- **No Parameters**: This function doesn't require any parameters
- **Real-time Status**: Returns current status of all instances
- **Lightweight**: Efficient operation that doesn't affect browser performance
- **Safe**: Read-only operation that doesn't modify any instances

## Related Functions

- [`getBrowserInstance()`](/docs/api/apiaccess/browser/getInstance) - Get specific instance details
- [`setActiveBrowserInstance()`](/docs/api/apiaccess/browser/setActiveInstance) - Set active instance
- [`openNewBrowserInstance()`](/docs/api/apiaccess/browser/openNewInstance) - Create new instance
- [`closeBrowserInstance()`](/docs/api/apiaccess/browser/closeInstance) - Close instance
