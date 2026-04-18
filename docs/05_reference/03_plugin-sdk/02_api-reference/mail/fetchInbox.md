---
title: fetchInbox
---

# `fetchInbox`

```typescript
plugin.mail.fetchInbox(params: IFetchInboxParams): Promise<IFetchInboxResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IFetchInboxParams` | Yes |  |

## Returns

`Promise<IFetchInboxResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.fetchInbox(/* IFetchInboxParams */);
console.log(result);
```
