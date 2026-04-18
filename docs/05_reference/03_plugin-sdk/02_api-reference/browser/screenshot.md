---
name: screenshot
cbbaseinfo:
  description: Takes a screenshot of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserScreenshotOptions
      description: Optional browser screenshot options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserScreenshotResponse>"
    description: ""
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
# screenshot

```typescript
plugin.browser.screenshot(options?: BrowserScreenshotOptions): Promise<BrowserScreenshotResponse>
```

Takes a screenshot of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserScreenshotOptions` _(optional)_ | Optional browser screenshot options |

## Returns

**`Promise<BrowserScreenshotResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.screenshot();
```
