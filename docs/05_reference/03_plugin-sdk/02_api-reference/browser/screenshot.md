---
title: screenshot
---

# `screenshot`

```typescript
plugin.browser.screenshot(options?: BrowserScreenshotOptions): Promise<BrowserScreenshotResponse>
```

Takes a screenshot of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserScreenshotOptions` | No | Optional browser screenshot options |

## Returns

`Promise<BrowserScreenshotResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.screenshot();
console.log(result);
```
