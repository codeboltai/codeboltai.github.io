---
title: getMessages
---

# `getMessages`

```typescript
plugin.mail.getMessages(params: IGetMessagesParams): Promise<IGetMessagesResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetMessagesParams` | Yes |  |

## Returns

`Promise<IGetMessagesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.getMessages(/* IGetMessagesParams */);
console.log(result);
```
