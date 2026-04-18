---
title: getStatus
---

# `getStatus`

```typescript
plugin.calendarApi.getStatus(): Promise<CalendarStatus>
```



## Parameters

_No parameters._

## Returns

`Promise<CalendarStatus>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.getStatus();
console.log(result);
```
