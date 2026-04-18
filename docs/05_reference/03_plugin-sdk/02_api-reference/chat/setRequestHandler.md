---
title: setRequestHandler
---

# `setRequestHandler`

```typescript
plugin.chat.setRequestHandler(handler: RequestHandler): void
```

Sets a global request handler for all incoming messages

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `handler` | `RequestHandler` | Yes | The async handler function |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.setRequestHandler(/* RequestHandler */);
console.log(result);
```
