---
name: scroll
cbbaseinfo:
  description: Scrolls the crawler page in a specified direction.
cbparameters:
  parameters:
    - name: direction
      typeName: string
      description: "The direction to scroll ('up', 'down', 'left', 'right')."
  returns:
    signatureTypeName: void
    description: No return value. Sends a scroll event to the crawler.
    typeArgs: []
data:
  name: scroll
  category: crawler
  link: scroll.md
---
# scroll

```typescript
codebolt.crawler.scroll(direction: string): void
```

Scrolls the crawler page in a specified direction.
### Parameters

- **`direction`** (string): The direction to scroll ('up', 'down', 'left', 'right').

### Returns

- **`void`**: No return value. Sends a scroll event to the crawler.

### Example 1: Basic Scroll Down

```js
// Start crawler, navigate, and scroll
codebolt.crawler.start();
codebolt.crawler.goToPage('https://example.com');

// Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000));

// Scroll down
codebolt.crawler.scroll('down');
console.log('Scrolled down');
```

### Example 2: Multi-Direction Scrolling

```js
// Scroll in different directions
async function scrollAllDirections(url) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Scroll down
  codebolt.crawler.scroll('down');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Scrolled down');

  // Scroll up
  codebolt.crawler.scroll('up');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Scrolled up');

  // Scroll left (if content is wider than viewport)
  codebolt.crawler.scroll('left');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Scrolled left');

  // Scroll right
  codebolt.crawler.scroll('right');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Scrolled right');
}

// Usage
await scrollAllDirections('https://example.com');
```

### Example 3: Continuous Scrolling

```js
// Scroll continuously through a page
async function scrollThroughPage(url, scrollCount = 5) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  for (let i = 0; i < scrollCount; i++) {
    console.log(`Scroll ${i + 1}/${scrollCount}`);

    // Scroll down
    codebolt.crawler.scroll('down');

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Optional: take screenshot at each point
    codebolt.crawler.screenshot();
  }

  console.log('Finished scrolling through page');
}

// Usage
await scrollThroughPage('https://example.com', 10);
```

### Example 4: Infinite Scroll Handling

```js
// Handle infinite scroll pages
async function handleInfiniteScroll(url, maxScrolls = 10) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  let scrollCount = 0;

  while (scrollCount < maxScrolls) {
    console.log(`Infinite scroll iteration ${scrollCount + 1}`);

    // Scroll down
    codebolt.crawler.scroll('down');

    // Wait for new content to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot to capture new content
    codebolt.crawler.screenshot();

    scrollCount++;
  }

  console.log(`Completed ${scrollCount} scroll iterations`);
}

// Usage
await handleInfiniteScroll('https://example.com', 15);
```

### Example 5: Scroll and Capture

```js
// Scroll and capture at intervals
async function scrollAndCapture(url, scrollCount, interval) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  const captures = [];

  for (let i = 0; i < scrollCount; i++) {
    console.log(`Scroll and capture ${i + 1}`);

    // Scroll
    codebolt.crawler.scroll('down');

    // Wait
    await new Promise(resolve => setTimeout(resolve, interval));

    // Capture screenshot
    codebolt.crawler.screenshot();

    captures.push({
      scroll: i + 1,
      timestamp: Date.now()
    });
  }

  return captures;
}

// Usage
const captures = await scrollAndCapture('https://example.com', 5, 2000);
console.log(`Captured ${captures.length} scroll positions`);
```

### Example 6: Scroll Navigation Pattern

```js
// Use scroll to navigate long pages
async function navigateLongPage(url) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Starting at top of page');
  codebolt.crawler.screenshot();

  // Scroll to middle
  console.log('Scrolling to middle...');
  for (let i = 0; i < 3; i++) {
    codebolt.crawler.scroll('down');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  codebolt.crawler.screenshot();
  console.log('Reached middle');

  // Continue to bottom
  console.log('Scrolling to bottom...');
  for (let i = 0; i < 3; i++) {
    codebolt.crawler.scroll('down');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  codebolt.crawler.screenshot();
  console.log('Reached bottom');

  // Scroll back up
  console.log('Scrolling back to top...');
  for (let i = 0; i < 6; i++) {
    codebolt.crawler.scroll('up');
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  codebolt.crawler.screenshot();
  console.log('Returned to top');
}

// Usage
await navigateLongPage('https://example.com');
```

### Explanation

The `codebolt.crawler.scroll(direction)` function scrolls the page in a specified direction. This is essential for navigating long pages, accessing content below the fold, and interacting with scrollable elements.

**Key Points:**
- **Direction Parameter**: Accepts 'up', 'down', 'left', 'right'
- **No Return Value**: Returns void
- **Event-Based**: Sends scroll event via WebSocket
- **Immediate**: Returns immediately, scroll happens asynchronously

**Supported Directions:**
- **'down'**: Scroll down the page (most common)
- **'up'**: Scroll up the page
- **'left'**: Scroll left horizontally
- **'right'**: Scroll right horizontally

**Common Use Cases:**
- Accessing content below the fold
- Navigating long pages
- Triggering lazy-loaded content
- Infinite scroll handling
- Reaching page elements
- Content extraction from scrollable areas

**Best Practices:**
1. Add wait times between scrolls
2. Use appropriate delays for content loading
3. Combine with screenshots for verification
4. Handle infinite scroll pages carefully
5. Consider scroll distance per call

**Typical Workflow:**
```js
// 1. Navigate to page
codebolt.crawler.goToPage(url);
await new Promise(resolve => setTimeout(resolve, 2000));

// 2. Scroll down
codebolt.crawler.scroll('down');

// 3. Wait for content
await new Promise(resolve => setTimeout(resolve, 1500));

// 4. Capture or interact
codebolt.crawler.screenshot();
```

**Scroll Patterns:**
- **Single scroll**: One scroll action
- **Continuous scroll**: Multiple scrolls in sequence
- **Infinite scroll**: Repeated scrolls until no new content
- **Bidirectional**: Scroll down then back up

**Wait Times:**
- Quick content: 1000ms
- Normal content: 1500ms
- Lazy loading: 2000ms+
- Adjust based on content behavior

**Advanced Patterns:**
- Infinite scroll handling
- Scroll-based content extraction
- Position verification with screenshots
- Multi-direction navigation
- Timed scroll sequences

**Notes:**
- Scroll distance per call may vary
- Some pages may not scroll in all directions
- Horizontal scrolling requires wide content
- Lazy-loaded content needs longer waits
- No confirmation of scroll completion
- Use screenshots to verify position
- Consider page-specific scroll behavior