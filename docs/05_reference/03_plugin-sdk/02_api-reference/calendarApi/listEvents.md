---
name: listEvents
cbbaseinfo:
  description: Call listEvents on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEventSummary[]>"
    description: ""
data:
  name: listEvents
  category: calendarApi
  link: listEvents.md
---
# listEvents

```typescript
plugin.calendarApi.listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ |  |

## Returns

**`Promise<CalendarEventSummary[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.listEvents();
```
