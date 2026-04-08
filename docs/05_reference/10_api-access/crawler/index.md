---
cbapicategory:
  - name: start
    link: /docs/api/apiaccess/crawler/start
    description: Starts the web crawler for web automation tasks.
  - name: screenshot
    link: /docs/api/apiaccess/crawler/screenshot
    description: Captures a screenshot of the current crawler page.
  - name: goToPage
    link: /docs/api/apiaccess/crawler/goToPage
    description: Navigates the crawler to a specified URL.
  - name: scroll
    link: /docs/api/apiaccess/crawler/scroll
    description: Scrolls the crawler page in a specified direction.
  - name: click
    link: /docs/api/apiaccess/crawler/click
    description: Simulates a click event on an element with a specific ID.
---

# Crawler API

The Crawler API provides web crawling and automation capabilities, allowing you to control a headless browser for web scraping, testing, and automation tasks.

## Overview

The crawler module enables you to:
- **Control Navigation**: Start the crawler and navigate to URLs
- **Capture Visuals**: Take screenshots of pages
- **Interact**: Click elements and scroll pages
- **Automate**: Build automated web workflows

## Quick Start Example

```js
// Start the crawler
codebolt.crawler.start();

// Navigate to a webpage
codebolt.crawler.goToPage('https://example.com');

// Wait for page load
await new Promise(resolve => setTimeout(resolve, 2000));

// Take a screenshot
codebolt.crawler.screenshot();

// Scroll down
codebolt.crawler.scroll('down');

// Click an element
await codebolt.crawler.click('submit-button');
```

## Common Use Cases

### Web Scraping
Automate data extraction from websites:

```js
async function scrapeWebsite(url) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  // Wait for content
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Capture screenshot
  codebolt.crawler.screenshot();

  // Scroll through content
  codebolt.crawler.scroll('down');
}
```

### Automated Testing
Perform automated UI tests:

```js
async function testNavigation(url) {
  codebolt.crawler.start();
  codebolt.crawler.goToPage(url);

  // Click navigation elements
  await codebolt.crawler.click('nav-home');
  await codebolt.crawler.click('nav-about');
}
```

## Response Structure

Crawler API functions return different responses:

**start(), screenshot(), goToPage(), scroll():**
- No return value (void)

**click():**
- Promise that resolves when the click action is complete

<CBAPICategory />
