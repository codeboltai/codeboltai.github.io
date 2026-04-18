---
name: forceReservation
cbbaseinfo:
  description: "Force-releases a reservation, overriding the owning agent's hold.

Forcefully frees a resource reservation regardless of the current owner. Use this as
an administrative override when an agent has become unresponsive or the reservation
is stale."
cbparameters:
  parameters:
    - name: data
      typeName: ForceReservationRequest
      description: The force-release payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the reservation has been forcefully released
data:
  name: forceReservation
  category: mail
  link: forceReservation.md
---
# forceReservation

```typescript
client.mail.forceReservation(data: ForceReservationRequest): Promise<void>
```

Force-releases a reservation, overriding the owning agent's hold.

Forcefully frees a resource reservation regardless of the current owner. Use this as
an administrative override when an agent has become unresponsive or the reservation
is stale.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ForceReservationRequest` | The force-release payload |

## Returns

**`Promise<void>`** — A promise that resolves when the reservation has been forcefully released

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.forceReservation(/* ForceReservationRequest */);
```
