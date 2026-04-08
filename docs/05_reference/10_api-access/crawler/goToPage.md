---
name: goToPage
cbbaseinfo:
  description: Navigates the crawler to a specified URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: "The URL to navigate to (must include protocol like https://)."
  returns:
    signatureTypeName: void
    description: No return value. Sends a navigation event to the crawler.
    typeArgs: []
data:
  name: goToPage
  category: crawler
  link: goToPage.md
---
# goToPage

```typescript
codebolt.crawler.goToPage(url: string): void
```

Navigates the crawler to a specified URL.
### Parameters

- **`url`** (string): The URL to navigate to (must include protocol like https://).

### Returns

- **`void`**: No return value. Sends a navigation event to the crawler.

### Example 1: Basic Navigation

```js
// Start crawler and navigate
codebolt.crawler.start();
codebolt.crawler.goToPage('https://example.com');
console.log('Navigated to example.com');
```

### Example 2: Multiple Page Navigation

```js
// Navigate to multiple pages sequentially
async function visitMultiplePages(urls) {
  codebolt.crawler.start();

  for (const url of urls) {
    console.log(`Navigating to: ${url}`);

    // Navigate to page
    codebolt.crawler.goToPage(url);

    // Wait for page load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Take screenshot
    codebolt.crawler.screenshot();

    console.log(`Completed: ${url}`);
  }
}

// Usage
await visitMultiplePages([
  'https://example.com',
  'https://example.org',
  'https://example.net'
]);
```

### Example 3: Navigation with Verification

```js
// Navigate and verify with screenshot
async function navigateAndVerify(url) {
  codebolt.crawler.start();

  console.log(`Navigating to: ${url}`);

  // Navigate
  codebolt.crawler.goToPage(url);

  // Wait for page load
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Verify with screenshot
  codebolt.crawler.screenshot();

  console.log('Navigation and verification complete');

  return { url, verified: true };
}

// Usage
const result = await navigateAndVerify('https://example.com');
console.log('Verification result:', result.verified);
```

### Example 4: Navigation with Error Handling

```js
// Navigate with error handling
async function safeNavigate(url, maxRetries = 3) {
  codebolt.crawler.start();

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Navigation attempt ${attempt} to: ${url}`);

      // Navigate to URL
      codebolt.crawler.goToPage(url);

      // Wait for page load
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Verify with screenshot
      codebolt.crawler.screenshot();

      console.log('Navigation successful');
      return { success: true, url, attempts: attempt };
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        return { success: false, error: error.message, url };
      }
    }
  }
}

// Usage
const result = await safeNavigate('https://example.com');
if (result.success) {
  console.log('Successfully navigated after', result.attempts, 'attempts');
}
```

### Example 5: Dynamic URL Construction

```js
// Navigate to dynamically constructed URLs
async function navigateToDynamicPath(baseUrl, paths) {
  codebolt.crawler.start();

  const results = [];

  for (const path of paths) {
    // Construct full URL
    const fullUrl = `${baseUrl}/${path}`;

    console.log(`Navigating to: ${fullUrl}`);

    // Navigate
    codebolt.crawler.goToPage(fullUrl);

    // Wait for page load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Capture screenshot
    codebolt.crawler.screenshot();

    results.push({
      path,
      url: fullUrl,
      timestamp: Date.now()
    });
  }

  return results;
}

// Usage
const visits = await navigateToDynamicPath('https://example.com', [
  'about',
  'contact',
  'products'
]);

console.log('Visited pages:', visits.length);
```

### Example 6: Navigation with Page State Capture

```js
// Navigate and capture page states
async function navigateAndCaptureState(url) {
  codebolt.crawler.start();

  console.log('Starting navigation to:', url);

  // Before navigation
  console.log('State: Before navigation');

  // Navigate
  codebolt.crawler.goToPage(url);

  // During load
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('State: Page loading...');

  // After load
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('State: Page loaded');

  // Capture state
  codebolt.crawler.screenshot();

  return {
    url,
    loadTime: 3000,
    timestamp: Date.now()
  };
}

// Usage
const state = await navigateAndCaptureState('https://example.com');
console.log('Navigation state captured:', state);
```

### Explanation

The `codebolt.crawler.goToPage(url)` function navigates the crawler to a specified URL. This is a fundamental operation for web crawling and automation.

**Key Points:**
- **URL Parameter**: Must include protocol (https:// or http://)
- **No Return Value**: Returns void
- **Event-Based**: Sends navigation event via WebSocket
- **Async Operation**: Navigation takes time to complete

**Common Use Cases:**
- Navigating to web pages
- Multi-page crawling
- Page testing and validation
- Content extraction
- Automated browsing

**Best Practices:**
1. Always include the protocol (https://)
2. Add appropriate wait times after navigation
3. Verify navigation with screenshots
4. Handle navigation failures gracefully
5. Consider page load times

**Typical Workflow:**
```js
// 1. Start crawler
codebolt.crawler.start();

// 2. Navigate to URL
codebolt.crawler.goToPage('https://example.com');

// 3. Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000-3000));

// 4. Verify/interact with page
codebolt.crawler.screenshot();
```

**Advanced Patterns:**
- Multiple sequential navigation
- Dynamic URL construction
- Navigation with retry logic
- Page state capture
- Navigation verification

**URL Format:**
```js
// Correct - with protocol
codebolt.crawler.goToPage('https://example.com');

// Incorrect - without protocol (may fail)
codebolt.crawler.goToPage('example.com');
```

**Wait Times:**
- Simple pages: 2000ms
- Dynamic content: 3000ms
- Heavy pages: 5000ms+
- Adjust based on page complexity

**Notes:**
- Always use full URLs with protocol
- Navigation is asynchronous
- No direct confirmation of success
- Use wait times for page loads
- Verify with screenshots or other operations
- Consider retry logic for reliability