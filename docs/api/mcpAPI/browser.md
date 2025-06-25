---
title: Browser MCP
sidebar_label: codebolt.browser
sidebar_position: 2
---

# codebolt.browser

Browser automation and web interaction tools for controlling web browsers programmatically.

## Available Tools

- `navigate` - Navigate to a specific URL
- `click` - Click on an element using a selector
- `type` - Type text into an input element
- `screenshot` - Take screenshot of current page
- `get_content` - Get content of current page
- `scroll` - Scroll the page in a specific direction
- `new_page` - Create a new browser page
- `get_url` - Get the current page URL
- `get_html` - Get the HTML content of the current page
- `get_markdown` - Get the page content in markdown format
- `extract_text` - Extract text content from the current page
- `get_snapshot` - Take a snapshot of the current page state
- `get_info` - Get browser information
- `search` - Search for text in an input element
- `enter` - Simulate pressing the Enter key
- `close` - Close the current browser page

## Sample Usage

```javascript
// Navigate to a specific URL
const navigateResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "navigate",
  { url: "https://example.com" }
);

// Click on an element using a selector
const clickResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "click",
  { selector: "body" }
);

// Type text into an input element
const typeResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "type",
  { selector: "input", text: "test" }
);

// Take a screenshot
const screenshotResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "screenshot",
  { fullPage: true }
);

// Get page content
const contentResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_content",
  {}
);

// Scroll the page
const scrollResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "scroll",
  { direction: "down", amount: 100 }
);

// Create a new page
const newPageResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "new_page",
  {}
);

// Get current URL
const urlResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_url",
  {}
);

// Get HTML content
const htmlResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_html",
  {}
);

// Get markdown content
const markdownResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_markdown",
  {}
);

// Extract text content
const textResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "extract_text",
  {}
);

// Get page snapshot
const snapshotResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_snapshot",
  {}
);

// Get browser info
const infoResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "get_info",
  {}
);

// Search in an input element
const searchResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "search",
  { selector: "input", query: "test query" }
);

// Simulate Enter key
const enterResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "enter",
  {}
);

// Close the browser
const closeResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "close",
  {}
);
```

:::info
This functionality provides browser automation capabilities through the MCP interface.
:::
