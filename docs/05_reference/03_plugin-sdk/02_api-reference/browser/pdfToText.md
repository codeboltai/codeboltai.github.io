---
title: pdfToText
---

# `pdfToText`

```typescript
plugin.browser.pdfToText(options?: BrowserOperationOptions): Promise<void>
```

Converts the PDF content of the current page to text.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.pdfToText();
console.log(result);
```
