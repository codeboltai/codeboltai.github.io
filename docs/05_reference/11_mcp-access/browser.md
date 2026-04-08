---
title: Browser MCP
sidebar_label: codebolt.browser
sidebar_position: 2
---

# codebolt.browser

Browser automation and web interaction tools for controlling web browsers programmatically.

## Available Tools

- `browser_navigate` - Navigate to a specific URL
- `browser_click` - Click on an element using a selector
- `browser_type` - Type text into an input element
- `browser_screenshot` - Take screenshot of current page
- `browser_get_content` - Get content of current page
- `browser_scroll` - Scroll the page in a specific direction
- `browser_get_url` - Get the current page URL
- `browser_get_html` - Get the HTML content of the current page
- `browser_get_markdown` - Get the page content in markdown format
- `browser_search` - Search for text in an input element
- `browser_enter` - Simulate pressing the Enter key
- `browser_close` - Close the current browser page

## Tool Parameters

### `browser_navigate`

Navigates the browser to a specified URL.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | Yes | The URL to navigate to. |
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_click`

Clicks on an element in the browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| element_id | string | Yes | The ID of the element to click. |
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_type`

Types text into an element in the browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| element_id | string | Yes | The ID of the element to type into. |
| text | string | Yes | The text to type. |
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_screenshot`

Takes a screenshot of the current browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |
| full_page | boolean | No | Whether to take a full page screenshot (default: false). |
| quality | number | No | Image quality from 0-100 (for JPEG format). |
| format | string | No | Image format: 'png' or 'jpeg'. |

### `browser_get_content`

Retrieves the text content of the current browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_scroll`

Scrolls the browser page in a specified direction.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| direction | string | Yes | Scroll direction: 'up', 'down', 'left', 'right'. |
| pixels | string | Yes | Number of pixels to scroll. |
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_get_url`

Retrieves the current URL of the browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_get_html`

Retrieves the HTML content of the current browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_get_markdown`

Retrieves the current browser page content as Markdown.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_search`

Performs a search within an element on the browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| element_id | string | Yes | The ID of the element to perform the search in. |
| query | string | Yes | The search query. |
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_enter`

Simulates pressing the Enter key in the browser.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

### `browser_close`

Closes the browser page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | No | Optional browser instance ID for multi-instance support. |

## Sample Usage

```javascript
// Navigate to a specific URL
const navigateResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_navigate",
  { url: "https://example.com" }
);

// Click on an element using element ID
const clickResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_click",
  { element_id: "submit-button" }
);

// Type text into an input element
const typeResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_type",
  { element_id: "search-input", text: "test" }
);

// Take a screenshot
const screenshotResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_screenshot",
  { full_page: true, format: "png" }
);

// Get page content
const contentResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_get_content",
  {}
);

// Scroll the page
const scrollResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_scroll",
  { direction: "down", pixels: "100" }
);

// Get current URL
const urlResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_get_url",
  {}
);

// Get HTML content
const htmlResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_get_html",
  {}
);

// Get markdown content
const markdownResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_get_markdown",
  {}
);

// Search in an input element
const searchResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_search",
  { element_id: "search-input", query: "test query" }
);

// Simulate Enter key
const enterResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_enter",
  {}
);

// Close the browser
const closeResult = await codebolt.tools.executeTool(
  "codebolt.browser",
  "browser_close",
  {}
);
```

:::info
This functionality provides browser automation capabilities through the MCP interface.
:::
