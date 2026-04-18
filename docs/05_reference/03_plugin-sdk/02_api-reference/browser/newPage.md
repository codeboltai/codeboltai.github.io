---
title: newPage
---

# `newPage`

```typescript
plugin.browser.newPage(options?: BrowserInstanceOptions): Promise<BrowserActionResponseData>
```

Opens a new page in the browser.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserInstanceOptions` | No | Optional browser instance options |

## Returns

`Promise<BrowserActionResponseData>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.newPage();
console.log(result);
```
