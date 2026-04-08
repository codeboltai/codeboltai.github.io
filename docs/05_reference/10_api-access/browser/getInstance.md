---
title: Get Browser Instance
description: Gets detailed information about a specific browser instance.
---

# Get Browser Instance

Retrieves detailed information about a specific browser instance using its unique identifier.

## Syntax

```js
const instance = await codebolt.getBrowserInstance(instanceId);
```

## Parameters

- **instanceId** (`string`): The unique identifier of the browser instance to retrieve

## Return Value

Returns a promise that resolves to a [`BrowserInstanceInfo`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/BrowserInstanceInfo) object if found, or `null` if the instance doesn't exist:

```js
{
  instanceId: "browser-1234567890-abc123",
  isActive: true,
  isReady: true,
  currentUrl: "https://example.com",
  createdAt: "2023-12-07T10:30:00.000Z",
  title: "Example Domain"
}
```

Or `null` if the instance is not found.

### BrowserInstanceInfo Properties

- **instanceId** (`string`): Unique identifier for the browser instance
- **isActive** (`boolean`): Whether this is the currently active instance
- **isReady** (`boolean`): Whether the instance is ready for operations
- **currentUrl** (`string`, optional): Current URL of the browser instance
- **createdAt** (`string`): ISO timestamp when the instance was created
- **title** (`string`, optional): Page title of the current page

## Examples

### Get Specific Instance

```js
import codebolt from '@codebolt/codeboltjs';

const instanceId = "browser-1234567890-abc123";
const instance = await codebolt.getBrowserInstance(instanceId);

if (instance) {
  console.log(`Instance found: ${instance.instanceId}`);
  console.log(`Status: ${instance.isReady ? 'Ready' : 'Not ready'}`);
  console.log(`Current URL: ${instance.currentUrl}`);
  console.log(`Page title: ${instance.title}`);
} else {
  console.log(`Instance ${instanceId} not found`);
}
```

### Check Instance Status

```js
async function isInstanceReady(instanceId) {
  const instance = await codebolt.getBrowserInstance(instanceId);
  
  if (!instance) {
    return { exists: false, ready: false };
  }
  
  return {
    exists: true,
    ready: instance.isReady,
    active: instance.isActive,
    url: instance.currentUrl
  };
}

// Usage
const status = await isInstanceReady("browser-1234567890-abc123");
console.log(status);
// Output: { exists: true, ready: true, active: true, url: "https://example.com" }
```

### Validate Instance Before Operation

```js
async function safeBrowserOperation(instanceId, operation) {
  const instance = await codebolt.getBrowserInstance(instanceId);
  
  if (!instance) {
    throw new Error(`Browser instance ${instanceId} not found`);
  }
  
  if (!instance.isReady) {
    throw new Error(`Browser instance ${instanceId} is not ready`);
  }
  
  // Perform the operation
  return await operation(instance);
}

// Usage
try {
  await safeBrowserOperation("browser-1234567890-abc123", async (instance) => {
    return await codebolt.browser.goToPage('https://example.com', { instanceId });
  });
} catch (error) {
  console.error('Browser operation failed:', error.message);
}
```

### Get Instance with Retry

```js
async function getInstanceWithRetry(instanceId, maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const instance = await codebolt.getBrowserInstance(instanceId);
    
    if (instance) {
      return instance;
    }
    
    if (attempt < maxRetries) {
      console.log(`Instance not found, retrying in ${delay}ms... (${attempt}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error(`Instance ${instanceId} not found after ${maxRetries} attempts`);
}
```

## Use Cases

### **Instance Validation**
Verify an instance exists and is ready before performing operations.

### **Status Monitoring**
Check the current state of a specific browser instance.

### **Debugging**
Get detailed information about a specific instance during troubleshooting.

### **Conditional Operations**
Perform operations only if an instance meets certain criteria.

## Error Handling

```js
try {
  const instance = await codebolt.getBrowserInstance(instanceId);
  
  if (!instance) {
    console.log('Instance does not exist');
    // Handle missing instance
    return;
  }
  
  // Use instance
  console.log(`Instance URL: ${instance.currentUrl}`);
  
} catch (error) {
  console.error('Failed to get browser instance:', error);
  // Handle error
}
```

## Notes

- **Null Return**: Returns `null` if instance is not found (doesn't throw error)
- **Real-time Data**: Returns current status of the instance
- **Safe Operation**: Read-only operation that doesn't affect the instance
- **Instance Validation**: Useful for validating instance existence before operations

## Related Functions

- [`listBrowserInstances()`](/docs/api/apiaccess/browser/listInstances) - List all instances
- [`setActiveBrowserInstance()`](/docs/api/apiaccess/browser/setActiveInstance) - Set active instance
- [`openNewBrowserInstance()`](/docs/api/apiaccess/browser/openNewInstance) - Create new instance
- [`closeBrowserInstance()`](/docs/api/apiaccess/browser/closeInstance) - Close instance
