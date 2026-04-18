---
title: initThread
---

# `initThread`

```typescript
plugin.chatApi.initThread(data: InitiateNewThreadRequest): Promise<ChatThreadInfo>
```

Initializes a chat thread.

An alias for  that creates or retrieves
a thread based on the provided parameters.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InitiateNewThreadRequest` | Yes | The thread initiation request |

## Returns

`Promise<ChatThreadInfo>` — A promise that resolves to the ChatThreadInfo

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.initThread(/* InitiateNewThreadRequest */);
console.log(result);
```
