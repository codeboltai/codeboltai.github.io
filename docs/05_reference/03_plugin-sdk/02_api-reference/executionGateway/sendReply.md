---
title: sendReply
---

# `sendReply`

```typescript
plugin.executionGateway.sendReply(requestId: string, result: any, success: boolean): void
```

Send a reply for a specific execution request.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes | The requestId from the ExecutionRequest |
| `result` | `any` | Yes | The result object to send back (will be the response to the agent) |
| `success` | `boolean` | Yes | Whether the execution succeeded (default: true) _(default: `true`)_ |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.sendReply('requestId', /* any */, true);
console.log(result);
```
