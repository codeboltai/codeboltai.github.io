---
title: listReservations
---

# `listReservations`

```typescript
plugin.mail.listReservations(params: IListReservationsParams): Promise<IListReservationsResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListReservationsParams` | Yes |  |

## Returns

`Promise<IListReservationsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.listReservations(/* IListReservationsParams */);
console.log(result);
```
