---
title: getStatus
---

# `getStatus`

```typescript
plugin.calendar.getStatus(): Promise<IGetStatusResponse>
```

Get the calendar scheduler status

## Parameters

_No parameters._

## Returns

`Promise<IGetStatusResponse>` — Promise resolving to scheduler status information

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getStatus();
console.log(result);
```
