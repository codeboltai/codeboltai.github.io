---
title: extractText
---

# `extractText`

```typescript
plugin.browser.extractText(options?: BrowserOperationOptions): Promise<ExtractTextResponse>
```

Extracts text from the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<ExtractTextResponse>` — A promise that resolves with the extracted text.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.extractText();
console.log(result);
```
