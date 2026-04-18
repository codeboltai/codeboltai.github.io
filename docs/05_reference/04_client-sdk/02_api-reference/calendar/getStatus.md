---
name: getStatus
cbbaseinfo:
  description: "Retrieves the calendar service status.

Returns health and configuration information about the calendar
subsystem, including whether triggers are active."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CalendarStatus>"
    description: A promise that resolves to the CalendarStatus object
data:
  name: getStatus
  category: calendar
  link: getStatus.md
---
# getStatus

```typescript
client.calendar.getStatus(): Promise<CalendarStatus>
```

Retrieves the calendar service status.

Returns health and configuration information about the calendar
subsystem, including whether triggers are active.

## Parameters

_None_

## Returns

**`Promise<CalendarStatus>`** — A promise that resolves to the CalendarStatus object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getStatus();
```
