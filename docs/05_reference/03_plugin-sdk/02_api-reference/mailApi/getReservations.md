---
title: getReservations
---

# `getReservations`

```typescript
plugin.mailApi.getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<MailReservation[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getReservations();
console.log(result);
```
