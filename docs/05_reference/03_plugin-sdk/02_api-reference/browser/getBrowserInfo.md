---
title: getBrowserInfo
---

# `getBrowserInfo`

```typescript
plugin.browser.getBrowserInfo(options?: BrowserOperationOptions): Promise<BrowserInfoResponse>
```

Retrieves browser info like height width scrollx scrolly of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserInfoResponse>` — A promise that resolves with the browser info.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getBrowserInfo();
console.log(result);
```
