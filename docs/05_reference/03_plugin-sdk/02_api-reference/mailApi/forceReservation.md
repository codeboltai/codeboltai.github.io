---
name: forceReservation
cbbaseinfo:
  description: Call forceReservation on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ForceReservationRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: forceReservation
  category: mailApi
  link: forceReservation.md
---
# forceReservation

```typescript
plugin.mailApi.forceReservation(data: ForceReservationRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ForceReservationRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.forceReservation(/* ForceReservationRequest */);
```
