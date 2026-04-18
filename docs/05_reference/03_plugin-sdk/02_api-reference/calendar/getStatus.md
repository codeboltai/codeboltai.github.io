---
name: getStatus
cbbaseinfo:
  description: Get the calendar scheduler status
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<IGetStatusResponse>"
    description: Promise resolving to scheduler status information
data:
  name: getStatus
  category: calendar
  link: getStatus.md
---
# getStatus

```typescript
plugin.calendar.getStatus(): Promise<IGetStatusResponse>
```

Get the calendar scheduler status

## Parameters

_None_

## Returns

**`Promise<IGetStatusResponse>`** — Promise resolving to scheduler status information

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getStatus();
```
