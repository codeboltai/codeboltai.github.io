---
title: Browser MCP
sidebar_label: codebolt.browser
sidebar_position: 2
---

# codebolt.browser

Browser automation and web interaction tools for controlling web browsers programmatically.

## Available Tools

- `launch` - Launch browser at specified URL
- `click` - Click at specific coordinates
- `type` - Type text into active element
- `scroll_down` - Scroll page down
- `scroll_up` - Scroll page up
- `close` - Close the browser
- `getHtml` - Get HTML of current page
- `getContent` - Get text content of current page
- `getMarkdown` - Get markdown version of current page
- `screenshot` - Take screenshot of current page
- `extractText` - Extract text from current page
- `browserEnter` - Press Enter key
- `getPdf` - Get PDF version of current page

## Sample Usage

```javascript
// Launch browser at a specific URL
const launchResult = await codeboltMCP.executeTool(
  "codebolt.browser",
  "launch",
  { url: "https://example.com" }
);

// Click at specific coordinates
const clickResult = await codeboltMCP.executeTool(
  "codebolt.browser",
  "click",
  { x: 100, y: 200 }
);

// Type text into active element
const typeResult = await codeboltMCP.executeTool(
  "codebolt.browser",
  "type",
  { text: "Hello World" }
);

// Take a screenshot
const screenshotResult = await codeboltMCP.executeTool(
  "codebolt.browser",
  "screenshot",
  {}
);

// Get page content as markdown
const markdownResult = await codeboltMCP.executeTool(
  "codebolt.browser",
  "getMarkdown",
  {}
);
```

:::info
This functionality is similar to the [browser API](/docs/api/apiaccess/browser) and provides the same capabilities through MCP interface.
:::
