---
title: searchMessages
---

# `searchMessages`

```typescript
plugin.mailApi.searchMessages(params?: MailSearchParams): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `MailSearchParams` | No |  |

## Returns

`Promise<MailMessage[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.searchMessages();
console.log(result);
```
