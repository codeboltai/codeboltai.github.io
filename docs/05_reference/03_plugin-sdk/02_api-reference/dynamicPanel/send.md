---
title: send
---

# `send`

```typescript
plugin.dynamicPanel.send(panelId: string, data: any): Promise<DynamicPanelResponse>
```

Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The target panel |
| `data` | `any` | Yes | Any JSON-serializable payload |

## Returns

`Promise<DynamicPanelResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.send('panelId', /* any */);
console.log(result);
```
