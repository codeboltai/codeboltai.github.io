---
title: Crawler MCP
sidebar_label: codebolt.crawler
sidebar_position: 4
---

# codebolt.crawler

Web crawler and browser automation tools for programmatic web interaction and data extraction.

## Available Tools

- `crawler_start` - Start the web crawler
- `crawler_screenshot` - Take a screenshot of the current page
- `crawler_go_to_page` - Navigate to a specific URL
- `crawler_scroll` - Scroll the page in a specified direction
- `crawler_click` - Click on an element by ID

## Tool Parameters

### `crawler_start`

Starts the web crawler for browser automation. This must be called before using other crawler tools.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

### `crawler_screenshot`

Takes a screenshot of the current page using the web crawler.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

### `crawler_go_to_page`

Directs the web crawler to navigate to a specified URL.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | Yes | The URL for the crawler to navigate to. |

### `crawler_scroll`

Scrolls the web crawler in a specified direction (up, down, left, or right).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| direction | string | Yes | The direction to scroll: 'up', 'down', 'left', or 'right'. |

### `crawler_click`

Simulates a click event on an element with the specified ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the element to be clicked. |

## Sample Usage

```javascript
// Start the crawler
const startResult = await codebolt.tools.executeTool(
  "codebolt.crawler",
  "crawler_start",
  {}
);

// Navigate to a URL
const navigateResult = await codebolt.tools.executeTool(
  "codebolt.crawler",
  "crawler_go_to_page",
  { url: "https://example.com" }
);

// Take a screenshot
const screenshotResult = await codebolt.tools.executeTool(
  "codebolt.crawler",
  "crawler_screenshot",
  {}
);

// Scroll down the page
const scrollResult = await codebolt.tools.executeTool(
  "codebolt.crawler",
  "crawler_scroll",
  { direction: "down" }
);

// Click on an element
const clickResult = await codebolt.tools.executeTool(
  "codebolt.crawler",
  "crawler_click",
  { id: "submit-button" }
);
```

## Workflow Example

```javascript
// Complete workflow for web scraping
async function scrapeWebsite() {
  // 1. Start the crawler
  await codebolt.tools.executeTool(
    "codebolt.crawler",
    "crawler_start",
    {}
  );

  // 2. Navigate to target page
  await codebolt.tools.executeTool(
    "codebolt.crawler",
    "crawler_go_to_page",
    { url: "https://example.com/data" }
  );

  // 3. Scroll to load dynamic content
  await codebolt.tools.executeTool(
    "codebolt.crawler",
    "crawler_scroll",
    { direction: "down" }
  );

  // 4. Take a screenshot for verification
  await codebolt.tools.executeTool(
    "codebolt.crawler",
    "crawler_screenshot",
    {}
  );

  // 5. Click on a button to load more data
  await codebolt.tools.executeTool(
    "codebolt.crawler",
    "crawler_click",
    { id: "load-more" }
  );
}
```

:::info
This functionality provides web crawling and browser automation capabilities through the MCP interface. The crawler must be started before using other crawler tools.
:::

## Related Tools

- [Browser MCP](./browser.md) - Alternative browser automation tools
- [Search MCP](./search.md) - Search functionality
