---
title: rsvp
---

# `rsvp`

```typescript
plugin.calendarApi.rsvp(id: string, data: CalendarRSVPRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CalendarRSVPRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.rsvp('id', /* CalendarRSVPRequest */);
console.log(result);
```
