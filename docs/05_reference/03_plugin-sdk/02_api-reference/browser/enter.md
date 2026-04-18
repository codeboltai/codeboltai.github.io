---
title: enter
---

# `enter`

```typescript
plugin.browser.enter(options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Simulates the Enter key press on the current page.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

## Returns

`Promise<BrowserActionResponseData>` — A promise that resolves when the Enter action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.enter();
console.log(result);
```
