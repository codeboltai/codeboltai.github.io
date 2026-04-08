---
name: screenshot
cbbaseinfo:
  description: Captures a screenshot of the current crawler page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: No return value. Sends a screenshot event to capture the current page.
    typeArgs: []
data:
  name: screenshot
  category: crawler
  link: screenshot.md
---
# screenshot

```typescript
codebolt.crawler.screenshot(): void
```

Captures a screenshot of the current crawler page.
### Returns

- **`void`**: No return value. Sends a screenshot event to capture the current page.

### Example 1: Basic Screenshot

```js
// Start crawler and take screenshot
codebolt.crawler.start();
codebolt.crawler.goToPage('https://example.com');

// Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000));

// Capture screenshot
codebolt.crawler.screenshot();
console.log('Screenshot captured');
```

### Example 2: Screenshot After Navigation

```js
// Navigate and capture screenshot
async function navigateAndCapture(url) {
  codebolt.crawler.start();

  // Navigate to page
  codebolt.crawler.goToPage(url);

  // Wait for page to fully load
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Capture screenshot
  codebolt.crawler.screenshot();

  console.log(`Screenshot captured for ${url}`);
}

// Usage
await navigateAndCapture('https://example.com');
```

### Example 3: Multiple Screenshots

```js
// Capture screenshots at different stages
async function captureMultipleStages(url) {
  codebolt.crawler.start();

  // Initial navigation
  codebolt.crawler.goToPage(url);
  await new Promise(resolve => setTimeout(resolve, 2000));
  codebolt.crawler.screenshot();
  console.log('Screenshot 1: Initial page load');

  // Scroll down
  codebolt.crawler.scroll('down');
  await new Promise(resolve => setTimeout(resolve, 1000));
  codebolt.crawler.screenshot();
  console.log('Screenshot 2: After scrolling');

  // Scroll again
  codebolt.crawler.scroll('down');
  await new Promise(resolve => setTimeout(resolve, 1000));
  codebolt.crawler.screenshot();
  console.log('Screenshot 3: After second scroll');
}

// Usage
await captureMultipleStages('https://example.com');
```

### Example 4: Screenshot with Interaction

```js
// Capture screenshots during interactions
async function interactAndCapture(url, elementId) {
  codebolt.crawler.start();

  // Navigate to page
  codebolt.crawler.goToPage(url);
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Before interaction
  codebolt.crawler.screenshot();
  console.log('Screenshot: Before click');

  // Perform interaction
  await codebolt.crawler.click(elementId);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // After interaction
  codebolt.crawler.screenshot();
  console.log('Screenshot: After click');
}

// Usage
await interactAndCapture('https://example.com', 'submit-button');
```

### Example 5: Timed Screenshot Sequence

```js
// Capture screenshots at time intervals
async function timedScreenshotSequence(url, duration, interval) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  await new Promise(resolve => setTimeout(resolve, 2000));

  const screenshots = [];
  const elapsed = { time: 0 };

  while (elapsed.time < duration) {
    // Capture screenshot
    codebolt.crawler.screenshot();
    screenshots.push({
      timestamp: Date.now(),
      elapsed: elapsed.time
    });

    console.log(`Screenshot at ${elapsed.time}ms`);

    // Wait for interval
    await new Promise(resolve => setTimeout(resolve, interval));
    elapsed.time += interval;
  }

  return screenshots;
}

// Usage
// Capture 5 screenshots every 2 seconds
const captures = await timedScreenshotSequence('https://example.com', 10000, 2000);
console.log(`Captured ${captures.length} screenshots`);
```

### Example 6: Screenshot Documentation

```js
// Document page states with screenshots
async function documentPageStates(url) {
  codebolt.crawler.start();

  const states = [];

  // State 1: Initial load
  codebolt.crawler.goToPage(url);
  await new Promise(resolve => setTimeout(resolve, 2000));
  codebolt.crawler.screenshot();
  states.push({ state: 'initial', timestamp: Date.now() });
  console.log('Documented: Initial state');

  // State 2: After scroll
  codebolt.crawler.scroll('down');
  await new Promise(resolve => setTimeout(resolve, 1000));
  codebolt.crawler.screenshot();
  states.push({ state: 'scrolled', timestamp: Date.now() });
  console.log('Documented: Scrolled state');

  // State 3: After interaction
  codebolt.crawler.scroll('up');
  await new Promise(resolve => setTimeout(resolve, 1000));
  codebolt.crawler.screenshot();
  states.push({ state: 'scrolled-up', timestamp: Date.now() });
  console.log('Documented: Scrolled up state');

  return states;
}

// Usage
const documentation = await documentPageStates('https://example.com');
console.log('Page state documentation:', documentation);
```

### Explanation

The `codebolt.crawler.screenshot()` function captures a screenshot of the current page displayed in the crawler. This is useful for visual documentation, debugging, and recording page states.

**Key Points:**
- **Visual Capture**: Takes a screenshot of the current page
- **No Parameters**: Requires no parameters
- **No Return Value**: Returns void
- **Event-Based**: Sends a screenshot event via WebSocket

**Common Use Cases:**
- Documenting page states
- Debugging crawler behavior
- Recording visual changes
- Creating page load documentation
- Verifying page rendering
- Capturing interaction results

**Best Practices:**
1. Wait for page load before capturing
2. Use appropriate delays for dynamic content
3. Capture before and after interactions
4. Document the context of each screenshot
5. Consider file naming for multiple screenshots

**Typical Workflow:**
```js
// 1. Navigate to page
codebolt.crawler.goToPage(url);

// 2. Wait for content to load
await new Promise(resolve => setTimeout(resolve, 2000));

// 3. Capture screenshot
codebolt.crawler.screenshot();

// 4. Perform interactions
codebolt.crawler.scroll('down');
await new Promise(resolve => setTimeout(resolve, 1000));

// 5. Capture another screenshot
codebolt.crawler.screenshot();
```

**Advanced Patterns:**
- Timed screenshot sequences
- Multiple state documentation
- Before/after comparison
- Visual regression testing
- Page load verification

**Notes:**
- Screenshots are captured via WebSocket events
- No direct return value to verify success
- Screenshot storage location depends on configuration
- Consider timing for dynamic content
- May need delays for animations/transitions
- Useful for debugging and documentation