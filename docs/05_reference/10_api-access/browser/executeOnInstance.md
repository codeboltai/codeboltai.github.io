---
title: Execute on Instance
description: Executes a browser operation on a specific instance.
---

# Execute on Instance

Executes a browser operation on a specific instance without changing the active instance, providing direct control over which instance performs the operation.

## Syntax

```js
const result = await codebolt.executeOnInstance(instanceId, operation, params);
```

## Parameters

- **instanceId** (`string`): The unique identifier of the browser instance to execute on
- **operation** (`string`): The name of the browser operation to execute
- **params** (`any`): Parameters for the operation (varies by operation)

## Supported Operations

- **"goToPage"**: Navigate to a URL
  - `params.url` (`string`): URL to navigate to
- **"screenshot"**: Take a screenshot
  - `params.fullPage` (`boolean`, optional): Full page screenshot
  - `params.quality` (`number`, optional): Image quality (0-100)
  - `params.format` (`string`, optional): Image format ('png' | 'jpeg')
- **"getContent"**: Extract page content
  - No additional parameters required

## Return Value

Returns a promise that resolves to the result of the operation, which varies by operation type.

## Examples

### Execute Navigation on Specific Instance

```js
import codebolt from '@codebolt/codeboltjs';

const instanceId = "browser-1234567890-abc123";

// Navigate to a URL on specific instance without changing active instance
const result = await codebolt.executeOnInstance(
  instanceId,
  "goToPage",
  { url: "https://example.com" }
);

console.log('Navigation result:', result);
```

### Take Screenshot on Background Instance

```js
async function captureAllInstances() {
  const instances = await codebolt.listBrowserInstances();
  const screenshots = [];
  
  for (const instance of instances) {
    try {
      const screenshot = await codebolt.executeOnInstance(
        instance.instanceId,
        "screenshot",
        { fullPage: true, quality: 90 }
      );
      
      screenshots.push({
        instanceId: instance.instanceId,
        url: instance.currentUrl,
        screenshot: screenshot.payload.screenshot
      });
      
    } catch (error) {
      console.error(`Failed to capture ${instance.instanceId}:`, error.message);
    }
  }
  
  return screenshots;
}

// Usage
const allScreenshots = await captureAllInstances();
console.log(`Captured ${allScreenshots.length} screenshots`);
```

### Parallel Operations on Multiple Instances

```js
async function parallelNavigation(urls) {
  // Create instances for each URL
  const instances = await Promise.all(
    urls.map((url, index) => 
      codebolt.openNewBrowserInstance({
        instanceId: `parallel-${index}`,
        setActive: false
      })
    )
  );
  
  // Navigate all instances in parallel
  const navigationPromises = instances.map((instance, index) =>
    codebolt.executeOnInstance(
      instance.instanceId,
      "goToPage",
      { url: urls[index] }
    )
  );
  
  const results = await Promise.all(navigationPromises);
  
  console.log(`Navigated ${results.length} instances in parallel`);
  
  // Cleanup
  for (const instance of instances) {
    await codebolt.closeBrowserInstance(instance.instanceId);
  }
  
  return results;
}

// Usage
const urls = [
  "https://example.com",
  "https://google.com", 
  "https://github.com"
];

const results = await parallelNavigation(urls);
```

### Content Extraction from Multiple Instances

```js
async function extractContentFromAllInstances() {
  const instances = await codebolt.listBrowserInstances();
  const contentData = [];
  
  for (const instance of instances) {
    try {
      const content = await codebolt.executeOnInstance(
        instance.instanceId,
        "getContent",
        {}
      );
      
      contentData.push({
        instanceId: instance.instanceId,
        url: instance.currentUrl,
        title: instance.title,
        content: content.payload.content,
        extractedAt: new Date().toISOString()
      });
      
    } catch (error) {
      console.error(`Failed to extract content from ${instance.instanceId}:`, error.message);
    }
  }
  
  return contentData;
}

// Usage
const allContent = await extractContentFromAllInstances();
console.log(`Extracted content from ${allContent.length} instances`);
```

### Instance-Specific Operation Wrapper

```js
class InstanceOperationExecutor {
  constructor(instanceId) {
    this.instanceId = instanceId;
  }
  
  async navigate(url) {
    return await codebolt.executeOnInstance(
      this.instanceId,
      "goToPage",
      { url }
    );
  }
  
  async screenshot(options = {}) {
    return await codebolt.executeOnInstance(
      this.instanceId,
      "screenshot",
      options
    );
  }
  
  async getContent() {
    return await codebolt.executeOnInstance(
      this.instanceId,
      "getContent",
      {}
    );
  }
  
  async executeCustom(operation, params) {
    return await codebolt.executeOnInstance(
      this.instanceId,
      operation,
      params
    );
  }
}

// Usage
const executor = new InstanceOperationExecutor("browser-1234567890-abc123");

await executor.navigate("https://example.com");
const screenshot = await executor.screenshot({ fullPage: true });
const content = await executor.getContent();
```

### Batch Operations with Error Handling

```js
async function batchOperationOnInstances(instanceIds, operation, params) {
  const results = [];
  const errors = [];
  
  // Execute operations in parallel with error handling
  const promises = instanceIds.map(async (instanceId) => {
    try {
      const result = await codebolt.executeOnInstance(instanceId, operation, params);
      return { instanceId, success: true, result };
    } catch (error) {
      return { instanceId, success: false, error: error.message };
    }
  });
  
  const batchResults = await Promise.all(promises);
  
  // Separate successful and failed operations
  batchResults.forEach(result => {
    if (result.success) {
      results.push(result);
    } else {
      errors.push(result);
    }
  });
  
  console.log(`Batch operation completed: ${results.length} successful, ${errors.length} failed`);
  
  return { results, errors };
}

// Usage
const instanceIds = ["browser-123", "browser-456", "browser-789"];

const { results, errors } = await batchOperationOnInstances(
  instanceIds,
  "screenshot",
  { fullPage: false }
);

console.log(`Successfully captured ${results.length} screenshots`);
if (errors.length > 0) {
  console.log(`Failed to capture ${errors.length} screenshots`);
}
```

### Operation Queue for Instance

```js
class InstanceOperationQueue {
  constructor(instanceId) {
    this.instanceId = instanceId;
    this.queue = [];
    this.processing = false;
  }
  
  async add(operation, params) {
    return new Promise((resolve, reject) => {
      this.queue.push({ operation, params, resolve, reject });
      this.processQueue();
    });
  }
  
  async processQueue() {
    if (this.processing || this.queue.length === 0) {
      return;
    }
    
    this.processing = true;
    
    while (this.queue.length > 0) {
      const { operation, params, resolve, reject } = this.queue.shift();
      
      try {
        const result = await codebolt.executeOnInstance(
          this.instanceId,
          operation,
          params
        );
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    
    this.processing = false;
  }
  
  async navigate(url) {
    return await this.add("goToPage", { url });
  }
  
  async screenshot(options) {
    return await this.add("screenshot", options);
  }
  
  async getContent() {
    return await this.add("getContent", {});
  }
}

// Usage
const queue = new InstanceOperationQueue("browser-1234567890-abc123");

// Queue multiple operations - they'll execute sequentially
await queue.navigate("https://example.com");
await queue.screenshot({ fullPage: true });
await queue.getContent();
```

## Use Cases

### **Background Operations**
Perform operations on instances without disturbing the active instance.

### **Parallel Processing**
Execute operations on multiple instances simultaneously.

### **Isolated Testing**
Run tests on specific instances without affecting others.

### **Content Aggregation**
Extract content from multiple instances at once.

### **Batch Operations**
Perform the same operation across multiple instances.

## Error Handling

```js
async function safeExecuteOnInstance(instanceId, operation, params) {
  try {
    // Verify instance exists first
    const instance = await codebolt.getBrowserInstance(instanceId);
    if (!instance) {
      throw new Error(`Instance ${instanceId} not found`);
    }
    
    if (!instance.isReady) {
      throw new Error(`Instance ${instanceId} is not ready`);
    }
    
    // Execute operation
    const result = await codebolt.executeOnInstance(instanceId, operation, params);
    
    console.log(`✅ Successfully executed ${operation} on ${instanceId}`);
    return result;
    
  } catch (error) {
    console.error(`❌ Failed to execute ${operation} on ${instanceId}:`, error.message);
    throw error;
  }
}
```

## Notes

- **No Active Instance Change**: Does not modify which instance is currently active
- **Direct Execution**: Operates directly on the specified instance
- **Operation Support**: Only supports predefined operations (goToPage, screenshot, getContent)
- **Error Propagation**: Errors from the operation are propagated to the caller
- **Concurrent Safe**: Can be called concurrently on different instances

## Best Practices

1. **Instance Validation**: Verify instance exists before executing operations
2. **Error Handling**: Handle operation failures gracefully
3. **Parallel Operations**: Use Promise.all for concurrent operations on different instances
4. **Resource Management**: Close instances when no longer needed
5. **Operation Limits**: Be aware of supported operations and their parameters

## Related Functions

- [`listBrowserInstances()`](/docs/api/apiaccess/browser/listInstances) - List all instances
- [`getBrowserInstance()`](/docs/api/apiaccess/browser/getInstance) - Get specific instance
- [`setActiveBrowserInstance()`](/docs/api/apiaccess/browser/setActiveInstance) - Set active instance
- [`openNewBrowserInstance()`](/docs/api/apiaccess/browser/openNewInstance) - Create new instance
