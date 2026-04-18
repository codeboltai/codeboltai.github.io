---
title: checkReservationConflicts
---

# `checkReservationConflicts`

```typescript
plugin.mailApi.checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<object>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckReservationConflictsRequest` | Yes |  |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.checkReservationConflicts(/* CheckReservationConflictsRequest */);
console.log(result);
```
