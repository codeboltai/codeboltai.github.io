---
title: onCompletionRequest
---

# `onCompletionRequest`

```typescript
plugin.llmProvider.onCompletionRequest(callback: Function): void
```

Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error).

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.onCompletionRequest(/* Function */);
console.log(result);
```
