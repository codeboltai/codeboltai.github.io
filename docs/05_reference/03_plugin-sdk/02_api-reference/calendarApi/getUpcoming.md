---
name: getUpcoming
cbbaseinfo:
  description: Call getUpcoming on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEvent[]>"
    description: ""
data:
  name: getUpcoming
  category: calendarApi
  link: getUpcoming.md
---
# getUpcoming

```typescript
plugin.calendarApi.getUpcoming(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ |  |

## Returns

**`Promise<CalendarEvent[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.getUpcoming();
```
