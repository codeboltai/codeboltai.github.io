---
title: openNewBrowserInstance
---

# `openNewBrowserInstance`

```typescript
plugin.browser.openNewBrowserInstance(options?: BrowserInstanceOptions): Promise<object>
```

Open a new browser instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserInstanceOptions` | No | Optional instance creation options |

## Returns

`Promise<object>` — The new instance ID

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.openNewBrowserInstance();
console.log(result);
```
