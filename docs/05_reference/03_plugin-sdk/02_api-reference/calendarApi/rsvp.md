---
name: rsvp
cbbaseinfo:
  description: Call rsvp on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CalendarRSVPRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: rsvp
  category: calendarApi
  link: rsvp.md
---
# rsvp

```typescript
plugin.calendarApi.rsvp(id: string, data: CalendarRSVPRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `CalendarRSVPRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.rsvp('id', /* CalendarRSVPRequest */);
```
