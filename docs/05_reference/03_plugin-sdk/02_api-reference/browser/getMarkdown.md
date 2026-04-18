---
title: getMarkdown
---

# `getMarkdown`

```typescript
plugin.browser.getMarkdown(options?: BrowserOperationOptions): Promise<GetMarkdownResponse>
```

Retrieves the Markdown content of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<GetMarkdownResponse>` — A promise that resolves with the Markdown content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getMarkdown();
console.log(result);
```
