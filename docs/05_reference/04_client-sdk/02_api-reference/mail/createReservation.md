---
name: createReservation
cbbaseinfo:
  description: "Creates a resource reservation for an agent.

Reserves exclusive access to a shared resource (e.g., a file, tool, or service) for
the requesting agent. Other agents can check for conflicts before attempting to access
the same resource."
cbparameters:
  parameters:
    - name: data
      typeName: CreateReservationRequest
      description: The reservation request payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailReservation>"
    description: A promise that resolves to the created reservation
data:
  name: createReservation
  category: mail
  link: createReservation.md
---
# createReservation

```typescript
client.mail.createReservation(data: CreateReservationRequest): Promise<MailReservation>
```

Creates a resource reservation for an agent.

Reserves exclusive access to a shared resource (e.g., a file, tool, or service) for
the requesting agent. Other agents can check for conflicts before attempting to access
the same resource.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateReservationRequest` | The reservation request payload |

## Returns

**`Promise<MailReservation>`** — A promise that resolves to the created reservation

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.createReservation(/* CreateReservationRequest */);
```
