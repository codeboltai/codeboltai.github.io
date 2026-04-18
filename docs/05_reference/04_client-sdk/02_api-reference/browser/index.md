---
cbapicategory:
  - name: click
    link: /docs/reference/client-sdk/api-reference/browser/click
    description: "Clicks an element in the browser.

Simulates a mouse click on the specified element, identified by
a CSS selector or other locator strategy."
  - name: fill
    link: /docs/reference/client-sdk/api-reference/browser/fill
    description: "Fills a form field in the browser.

Types text into the specified form field, replacing any existing content.
The field is identified by a CSS selector or other locator strategy."
  - name: navigate
    link: /docs/reference/client-sdk/api-reference/browser/navigate
    description: "Navigates the browser to a URL.

Loads the specified URL in the browser, waiting for the page to
reach a ready state before resolving."
  - name: screenshot
    link: /docs/reference/client-sdk/api-reference/browser/screenshot
    description: "Takes a screenshot of the current browser viewport.

Captures the visible portion of the browser page as an image.
Useful for visual verification and debugging during automated testing."
  - name: sendAction
    link: /docs/reference/client-sdk/api-reference/browser/sendAction
    description: "Sends a generic browser action.

Executes an arbitrary browser action command. Use this for actions
that don't have a dedicated convenience method, or for sending
complex multi-step actions."
---
# Browser API

Browser API - browser automation

<CBAPICategory />

## Methods

- [`click()`](./click) — Clicks an element in the browser.

Simulates a mouse click on the specified element, identified by
a CSS selector or other locator strategy.
- [`fill()`](./fill) — Fills a form field in the browser.

Types text into the specified form field, replacing any existing content.
The field is identified by a CSS selector or other locator strategy.
- [`navigate()`](./navigate) — Navigates the browser to a URL.

Loads the specified URL in the browser, waiting for the page to
reach a ready state before resolving.
- [`screenshot()`](./screenshot) — Takes a screenshot of the current browser viewport.

Captures the visible portion of the browser page as an image.
Useful for visual verification and debugging during automated testing.
- [`sendAction()`](./sendAction) — Sends a generic browser action.

Executes an arbitrary browser action command. Use this for actions
that don't have a dedicated convenience method, or for sending
complex multi-step actions.
