---
title: getThreadMessages
---

# `getThreadMessages`

```typescript
plugin.mailApi.getThreadMessages(threadId: string): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<MailMessage[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getThreadMessages('threadId');
console.log(result);
```
