---
name: screenshot
cbbaseinfo:
  description: "Takes a screenshot of the current browser viewport.

Captures the visible portion of the browser page as an image.
Useful for visual verification and debugging during automated testing."
cbparameters:
  parameters:
    - name: data
      typeName: BrowserScreenshotRequest
      description: Optional screenshot configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResult>"
    description: A promise that resolves to the BrowserActionResult containing the screenshot data
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
# screenshot

```typescript
client.browser.screenshot(data?: BrowserScreenshotRequest): Promise<BrowserActionResult>
```

Takes a screenshot of the current browser viewport.

Captures the visible portion of the browser page as an image.
Useful for visual verification and debugging during automated testing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BrowserScreenshotRequest` _(optional)_ | Optional screenshot configuration |

## Returns

**`Promise<BrowserActionResult>`** — A promise that resolves to the BrowserActionResult containing the screenshot data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.browser.screenshot();
```
