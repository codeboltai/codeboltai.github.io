---
title: openDebugBrowser
---

# `openDebugBrowser`

```typescript
plugin.debug.openDebugBrowser(url: string, port: number): Promise<OpenDebugBrowserResponse>
```

Requests to open a debug browser at the specified URL and port.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | Yes | The URL where the debug browser should be opened. |
| `port` | `number` | Yes | The port on which the debug browser will listen. |

## Returns

`Promise<OpenDebugBrowserResponse>` — A promise that resolves with the response from the open debug browser event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.debug.openDebugBrowser('url', 0);
console.log(result);
```
