---
title: sendError
---

# `sendError`

```typescript
plugin.llmProvider.sendError(requestId: string, error: string): void
```

Send an error for a completion or stream request.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `error` | `string` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.sendError('requestId', 'error');
console.log(result);
```
