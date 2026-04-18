---
title: releaseReservation
---

# `releaseReservation`

```typescript
plugin.mailApi.releaseReservation(data: ReleaseReservationRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ReleaseReservationRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.releaseReservation(/* ReleaseReservationRequest */);
console.log(result);
```
