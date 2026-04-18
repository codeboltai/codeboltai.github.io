---
title: onLoginRequest
---

# `onLoginRequest`

```typescript
plugin.llmProvider.onLoginRequest(callback: Function): void
```

Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, \{ authenticated: true \}) or sendError().

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.onLoginRequest(/* Function */);
console.log(result);
```
