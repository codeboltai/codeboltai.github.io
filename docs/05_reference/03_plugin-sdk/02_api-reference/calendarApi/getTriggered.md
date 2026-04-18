---
name: getTriggered
cbbaseinfo:
  description: Call getTriggered on the Plugin SDK calendarApi module.
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
  name: getTriggered
  category: calendarApi
  link: getTriggered.md
---
# getTriggered

```typescript
plugin.calendarApi.getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
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

await plugin.calendarApi.getTriggered();
```
