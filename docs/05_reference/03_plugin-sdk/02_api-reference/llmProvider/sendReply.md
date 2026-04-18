---
title: sendReply
---

# `sendReply`

```typescript
plugin.llmProvider.sendReply(requestId: string, response: any, success: boolean): void
```

Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `response` | `any` | Yes |  |
| `success` | `boolean` | Yes |  _(default: `true`)_ |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.sendReply('requestId', /* any */, true);
console.log(result);
```
