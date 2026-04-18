---
title: goToPage
---

# `goToPage`

```typescript
plugin.browser.goToPage(url: string, options?: BrowserOperationOptions): Promise<GoToPageResponse>
```

Navigates to a specified URL.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | Yes | The URL to navigate to. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<GoToPageResponse>` — A promise that resolves when navigation is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.goToPage('url');
console.log(result);
```
