---
name: releaseReservation
cbbaseinfo:
  description: Call releaseReservation on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ReleaseReservationRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: releaseReservation
  category: mailApi
  link: releaseReservation.md
---
# releaseReservation

```typescript
plugin.mailApi.releaseReservation(data: ReleaseReservationRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ReleaseReservationRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.releaseReservation(/* ReleaseReservationRequest */);
```
