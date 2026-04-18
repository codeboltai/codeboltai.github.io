---
title: getUrl
---

# `getUrl`

```typescript
plugin.browser.getUrl(options?: BrowserOperationOptions): Promise<UrlResponse>
```

Retrieves the current URL of the browser's active page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<UrlResponse>` — A promise that resolves with the URL.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getUrl();
console.log(result);
```
