---
title: getThread
---

# `getThread`

```typescript
plugin.mailApi.getThread(threadId: string): Promise<MailThread>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<MailThread>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getThread('threadId');
console.log(result);
```
