---
title: createThreadMessage
---

# `createThreadMessage`

```typescript
plugin.mailApi.createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |
| `data` | `SendMailMessageRequest` | Yes |  |

## Returns

`Promise<MailMessage>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.createThreadMessage('threadId', /* SendMailMessageRequest */);
console.log(result);
```
