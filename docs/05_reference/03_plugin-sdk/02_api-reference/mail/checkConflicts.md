---
title: checkConflicts
---

# `checkConflicts`

```typescript
plugin.mail.checkConflicts(params: ICheckConflictsParams): Promise<ICheckConflictsResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICheckConflictsParams` | Yes |  |

## Returns

`Promise<ICheckConflictsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.checkConflicts(/* ICheckConflictsParams */);
console.log(result);
```
