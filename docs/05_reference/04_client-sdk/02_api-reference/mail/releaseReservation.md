---
name: releaseReservation
cbbaseinfo:
  description: "Releases a previously held resource reservation.

Frees the reserved resource so other agents can access it. Agents should release
reservations promptly when they no longer need exclusive access."
cbparameters:
  parameters:
    - name: data
      typeName: ReleaseReservationRequest
      description: The release payload identifying the reservation to free
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the reservation has been released
data:
  name: releaseReservation
  category: mail
  link: releaseReservation.md
---
# releaseReservation

```typescript
client.mail.releaseReservation(data: ReleaseReservationRequest): Promise<void>
```

Releases a previously held resource reservation.

Frees the reserved resource so other agents can access it. Agents should release
reservations promptly when they no longer need exclusive access.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ReleaseReservationRequest` | The release payload identifying the reservation to free |

## Returns

**`Promise<void>`** — A promise that resolves when the reservation has been released

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.releaseReservation(/* ReleaseReservationRequest */);
```
