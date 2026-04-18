---
title: forceReservation
---

# `forceReservation`

```typescript
plugin.mailApi.forceReservation(data: ForceReservationRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ForceReservationRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.forceReservation(/* ForceReservationRequest */);
console.log(result);
```
