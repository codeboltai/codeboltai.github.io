---
title: getSnapShot
---

# `getSnapShot`

```typescript
plugin.browser.getSnapShot(options?: BrowserOperationOptions): Promise<BrowserSnapshotResponse>
```

Retrieves the snapshot of the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserSnapshotResponse>` — A promise that resolves with the snapshot.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getSnapShot();
console.log(result);
```
