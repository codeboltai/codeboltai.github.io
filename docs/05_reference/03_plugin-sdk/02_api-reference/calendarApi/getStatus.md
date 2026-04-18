---
name: getStatus
cbbaseinfo:
  description: Call getStatus on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CalendarStatus>"
    description: ""
data:
  name: getStatus
  category: calendarApi
  link: getStatus.md
---
# getStatus

```typescript
plugin.calendarApi.getStatus(): Promise<CalendarStatus>
```



## Parameters

_None_

## Returns

**`Promise<CalendarStatus>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.getStatus();
```
