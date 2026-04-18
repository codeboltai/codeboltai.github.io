---
title: updateThread
---

# `updateThread`

```typescript
plugin.mailApi.updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |
| `data` | `UpdateMailThreadRequest` | Yes |  |

## Returns

`Promise<MailThread>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.updateThread('threadId', /* UpdateMailThreadRequest */);
console.log(result);
```
