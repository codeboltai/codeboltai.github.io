---
title: getContent
---

# `getContent`

```typescript
plugin.browser.getContent(options?: BrowserOperationOptions): Promise<GetContentResponse>
```

Retrieves the content of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<GetContentResponse>` — A promise that resolves with the content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getContent();
console.log(result);
```
