---
title: createThread
---

# `createThread`

```typescript
plugin.chatApi.createThread(data: CreateChatThreadRequest): Promise<ChatThreadInfo>
```

Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateChatThreadRequest` | Yes | The thread creation payload |

## Returns

`Promise<ChatThreadInfo>` — A promise that resolves to the newly created ChatThreadInfo

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.createThread(/* CreateChatThreadRequest */);
console.log(result);
```
