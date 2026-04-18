---
title: getThreadsInfo
---

# `getThreadsInfo`

```typescript
plugin.chatApi.getThreadsInfo(): Promise<ChatThreadInfo[]>
```

Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar.

## Parameters

_No parameters._

## Returns

`Promise<ChatThreadInfo[]>` — A promise that resolves to an array of ChatThreadInfo objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.getThreadsInfo();
console.log(result);
```
