---
cbapicategory:
  - name: newPage
    link: /docs/api/apiaccess/browser/newPage
    description: Creates a new browser page or tab for web automation.
  - name: getUrl
    link: /docs/api/apiaccess/browser/getUrl
    description: Gets the current URL of the active browser page.
  - name: goToPage
    link: /docs/api/apiaccess/browser/goToPage
    description: Navigates the browser to a specific URL.
  - name: screenshot
    link: /docs/api/apiaccess/browser/screenshot
    description: Captures a screenshot of the current page as base64 image data.
  - name: getHTML
    link: /docs/api/apiaccess/browser/getHTML
    description: Retrieves the complete HTML source code of the current page.
  - name: getMarkdown
    link: /docs/api/apiaccess/browser/getMarkdown
    description: Converts the current page content to Markdown format.
  - name: getContent
    link: /docs/api/apiaccess/browser/getContent
    description: Extracts the visible text content from the current page.
  - name: extractText
    link: /docs/api/apiaccess/browser/extractText
    description: Extracts clean, formatted text from the current page.
  - name: getSnapShot
    link: /docs/api/apiaccess/browser/getSnapShot
    description: Takes a visual snapshot of the current page (similar to screenshot).
  - name: getBrowserInfo
    link: /docs/api/apiaccess/browser/getBrowserInfo
    description: Gets detailed browser information including viewport, performance, and page statistics.
  - name: scroll
    link: /docs/api/apiaccess/browser/scroll
    description: Scrolls the page in a specified direction by a given number of pixels.
  - name: type
    link: /docs/api/apiaccess/browser/type
    description: Types text into a specific input element on the page.
  - name: click
    link: /docs/api/apiaccess/browser/click
    description: Clicks on a specific element using its element ID.
  - name: enter
    link: /docs/api/apiaccess/browser/enter
    description: Simulates pressing the Enter key on the current page.
  - name: search
    link: /docs/api/apiaccess/browser/search
    description: Performs a search by typing a query into a search input element.
  - name: close
    link: /docs/api/apiaccess/browser/close
    description: Closes the current browser page or tab.
  - name: getPDF
    link: /docs/api/apiaccess/browser/getPDF
    description: Retrieves PDF content from the current page.
  - name: pdfToText
    link: /docs/api/apiaccess/browser/pdfToText
    description: Converts PDF content on the current page to readable text.

---
# Browser API

The Browser API provides comprehensive web automation capabilities, allowing you to control a browser programmatically. You can navigate to websites, interact with page elements, extract content, and capture screenshots.

## Overview

The browser module enables you to:
- **Navigate**: Open new pages and navigate to URLs
- **Extract Content**: Get HTML, text, markdown, and other page content
- **Interact**: Click elements, type text, scroll pages
- **Capture**: Take screenshots and snapshots
- **Monitor**: Get browser information and page statistics

## Quick Start Example

```js
// Initialize browser session
await codebolt.waitForConnection();

// Create a new page
await codebolt.browser.newPage();

// Navigate to a website
await codebolt.browser.goToPage('https://example.com');

// Extract page content
const content = await codebolt.browser.getContent();
console.log('Page content:', content);

// Take a screenshot
const screenshot = await codebolt.browser.screenshot();
console.log('Screenshot captured');

// Close the browser
codebolt.browser.close();
```

## Response Structure

All browser API functions return responses with a consistent structure:

```js
{
  event: 'browserActionResponse',
  eventId: 'actionName_timestamp',
  payload: {
    content: 'response data',
    viewport: { width: 767, height: 577 },
    currentUrl: 'https://current-page-url.com'
  },
  type: 'specificResponseType'
}
```

<CBAPICategory />
