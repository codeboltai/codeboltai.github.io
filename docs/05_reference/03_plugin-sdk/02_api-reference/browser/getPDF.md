---
title: getPDF
---

# `getPDF`

```typescript
plugin.browser.getPDF(options?: BrowserOperationOptions): Promise<void>
```

Retrieves the PDF content of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getPDF();
console.log(result);
```
