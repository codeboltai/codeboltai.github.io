---
title: completeTriggered
---

# `completeTriggered`

```typescript
plugin.calendarApi.completeTriggered(data: CompleteTriggeredRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CompleteTriggeredRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.completeTriggered(/* CompleteTriggeredRequest */);
console.log(result);
```
