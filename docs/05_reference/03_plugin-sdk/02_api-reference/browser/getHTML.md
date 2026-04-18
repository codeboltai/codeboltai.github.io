---
title: getHTML
---

# `getHTML`

```typescript
plugin.browser.getHTML(options?: BrowserOperationOptions): Promise<HtmlReceived>
```

Retrieves the HTML content of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<HtmlReceived>` — A promise that resolves with the HTML content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getHTML();
console.log(result);
```
