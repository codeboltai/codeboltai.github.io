---
title: listThreads
---

# `listThreads`

```typescript
plugin.mail.listThreads(params: IListThreadsParams): Promise<IListThreadsResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListThreadsParams` | Yes |  _(default: `{}`)_ |

## Returns

`Promise<IListThreadsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.listThreads(/* IListThreadsParams */);
console.log(result);
```
