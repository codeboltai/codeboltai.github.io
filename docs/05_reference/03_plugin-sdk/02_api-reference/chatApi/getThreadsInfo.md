---
name: getThreadsInfo
cbbaseinfo:
  description: "Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ChatThreadInfo[]>"
    description: A promise that resolves to an array of ChatThreadInfo objects
data:
  name: getThreadsInfo
  category: chatApi
  link: getThreadsInfo.md
---
# getThreadsInfo

```typescript
plugin.chatApi.getThreadsInfo(): Promise<ChatThreadInfo[]>
```

Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar.

## Parameters

_None_

## Returns

**`Promise<ChatThreadInfo[]>`** — A promise that resolves to an array of ChatThreadInfo objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.getThreadsInfo();
```
