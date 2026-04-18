---
name: checkReservationConflicts
cbbaseinfo:
  description: Call checkReservationConflicts on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CheckReservationConflictsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: checkReservationConflicts
  category: mailApi
  link: checkReservationConflicts.md
---
# checkReservationConflicts

```typescript
plugin.mailApi.checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<object>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckReservationConflictsRequest` |  |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.checkReservationConflicts(/* CheckReservationConflictsRequest */);
```
