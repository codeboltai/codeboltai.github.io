---
title: send
---

# `send`

```typescript
plugin.mailApi.send(data: SendMailMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SendMailMessageRequest` | Yes |  |

## Returns

`Promise<MailMessage>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.send(/* SendMailMessageRequest */);
console.log(result);
```
