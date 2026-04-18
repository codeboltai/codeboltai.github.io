---
title: close
---

# `close`

```typescript
plugin.browser.close(options?: BrowserOperationOptions): Promise<void>
```

Closes the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.close();
console.log(result);
```
