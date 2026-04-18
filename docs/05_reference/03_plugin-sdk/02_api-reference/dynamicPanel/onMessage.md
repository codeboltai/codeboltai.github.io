---
title: onMessage
---

# `onMessage`

```typescript
plugin.dynamicPanel.onMessage(panelId: string, handler: Function): void
```

Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to listen to |
| `handler` | `Function` | Yes | Callback receiving the message data |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.onMessage('panelId', /* Function */);
console.log(result);
```
