---
name: start
cbbaseinfo:
  description: Starts the web crawler for automation tasks.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: No return value. Sends a start event to initialize the crawler.
    typeArgs: []
data:
  name: start
  category: crawler
  link: start.md
---
# start

```typescript
codebolt.crawler.start(): void
```

Starts the web crawler for automation tasks.
### Returns

- **`void`**: No return value. Sends a start event to initialize the crawler.

### Example 1: Basic Crawler Start

```js
// Start the crawler
codebolt.crawler.start();
console.log('Crawler started successfully');
```

### Example 2: Start and Navigate Pattern

```js
// Standard pattern: start then navigate
async function initCrawler(url) {
  // Start the crawler
  codebolt.crawler.start();

  // Wait for initialization
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Navigate to URL
  codebolt.crawler.goToPage(url);

  console.log('Crawler initialized and navigating to:', url);
}

// Usage
await initCrawler('https://example.com');
```

### Example 3: Crawler Session Setup

```js
// Complete crawler session setup
async function setupCrawlerSession(startUrl) {
  console.log('Setting up crawler session...');

  // Start crawler
  codebolt.crawler.start();

  // Wait for crawler to be ready
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Navigate to start page
  codebolt.crawler.goToPage(startUrl);

  // Wait for page load
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Take initial screenshot
  codebolt.crawler.screenshot();

  console.log('Crawler session ready');

  return { ready: true, url: startUrl };
}

// Usage
const session = await setupCrawlerSession('https://example.com');
```

### Example 4: Multiple Crawler Sessions

```js
// Manage multiple crawler sessions
async function runMultipleCrawlSession(urls) {
  const sessions = [];

  for (const url of urls) {
    console.log(`Starting crawler for: ${url}`);

    // Start new session
    codebolt.crawler.start();
    await new Promise(resolve => setTimeout(resolve, 1000));

    codebolt.crawler.goToPage(url);
    await new Promise(resolve => setTimeout(resolve, 2000));

    codebolt.crawler.screenshot();

    sessions.push({ url, timestamp: Date.now() });

    console.log(`Completed session for: ${url}`);
  }

  return sessions;
}

// Usage
const results = await runMultipleCrawlSession([
  'https://example.com',
  'https://example.org'
]);
```

### Example 5: Crawler Initialization Check

```js
// Start crawler with verification
async function startCrawlerWithVerify() {
  console.log('Initializing crawler...');

  // Start the crawler
  codebolt.crawler.start();

  // Wait and verify
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Try to navigate to verify it's working
  codebolt.crawler.goToPage('https://example.com');

  // Wait for navigation
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Take screenshot to verify
  codebolt.crawler.screenshot();

  console.log('Crawler verified and ready');

  return { initialized: true };
}

// Usage
const status = await startCrawlerWithVerify();
console.log('Crawler status:', status.initialized);
```

### Example 6: Error Handling Pattern

```js
// Start crawler with error handling
async function safeCrawlerStart(maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Crawler start attempt ${attempt}`);

      // Start crawler
      codebolt.crawler.start();

      // Wait for initialization
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Verify with navigation
      codebolt.crawler.goToPage('https://example.com');

      console.log('Crawler started successfully');
      return { success: true };
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        return { success: false, error: error.message };
      }
    }
  }
}

// Usage
const result = await safeCrawlerStart();
if (result.success) {
  console.log('Ready for crawling');
}
```

### Explanation

The `codebolt.crawler.start()` function initializes the web crawler, preparing it for automation tasks. This is typically the first function you call before performing any crawler operations.

**Key Points:**
- **Initialization**: Starts the crawler service
- **No Parameters**: Takes no parameters
- **No Return Value**: Returns void
- **Event-Based**: Sends a start event via WebSocket

**Common Use Cases:**
- Initializing the crawler before navigation
- Starting a new crawler session
- Preparing for web automation tasks
- Setting up web scraping operations

**Best Practices:**
1. Always call start() before other crawler operations
2. Add appropriate wait times after starting
3. Verify initialization with a test navigation
4. Handle potential initialization failures
5. Consider retry logic for robustness

**Typical Workflow:**
```js
// 1. Start crawler
codebolt.crawler.start();

// 2. Wait for initialization
await new Promise(resolve => setTimeout(resolve, 1000-2000));

// 3. Navigate to page
codebolt.crawler.goToPage(url);

// 4. Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000-3000));

// 5. Perform actions (click, scroll, screenshot)
```

**Notes:**
- The crawler operates via WebSocket events
- No direct return value to verify success
- Use wait times to ensure proper initialization
- Subsequent operations assume crawler is started
- May need to restart for new sessions