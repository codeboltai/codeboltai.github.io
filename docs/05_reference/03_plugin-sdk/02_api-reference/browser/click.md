---
title: click
---

# `click`

```typescript
plugin.browser.click(elementid: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Clicks on a specified element on the page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to click. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserActionResponseData>` — A promise that resolves when the click action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.click('elementid');
console.log(result);
```
