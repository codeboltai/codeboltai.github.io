---
title: scroll
---

# `scroll`

```typescript
plugin.browser.scroll(direction: string, pixels: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Scrolls the current page in a specified direction by a specified number of pixels.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `direction` | `string` | Yes | The direction to scroll. |
| `pixels` | `string` | Yes | The number of pixels to scroll. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserActionResponseData>` — A promise that resolves when the scroll action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.scroll('direction', 'pixels');
console.log(result);
```
