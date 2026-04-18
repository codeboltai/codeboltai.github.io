---
title: onStreamRequest
---

# `onStreamRequest`

```typescript
plugin.llmProvider.onStreamRequest(callback: Function): void
```

Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error).

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.onStreamRequest(/* Function */);
console.log(result);
```
