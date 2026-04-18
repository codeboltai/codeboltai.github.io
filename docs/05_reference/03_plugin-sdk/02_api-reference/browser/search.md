---
title: search
---

# `search`

```typescript
plugin.browser.search(elementid: string, query: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Performs a search on the current page using a specified query.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to perform the search in. |
| `query` | `string` | Yes | The search query. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserActionResponseData>` — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.search('elementid', 'query');
console.log(result);
```
