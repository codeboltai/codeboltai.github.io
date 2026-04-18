---
title: createReservation
---

# `createReservation`

```typescript
plugin.mailApi.createReservation(data: CreateReservationRequest): Promise<MailReservation>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateReservationRequest` | Yes |  |

## Returns

`Promise<MailReservation>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.createReservation(/* CreateReservationRequest */);
console.log(result);
```
