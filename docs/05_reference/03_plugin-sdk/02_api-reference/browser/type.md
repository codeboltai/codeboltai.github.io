---
title: type
---

# `type`

```typescript
plugin.browser.type(elementid: string, text: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Types text into a specified element on the page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to type into. |
| `text` | `string` | Yes | The text to type. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserActionResponseData>` — A promise that resolves when the typing action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.type('elementid', 'text');
console.log(result);
```
