---
name: getReservations
cbbaseinfo:
  description: "Lists all currently active resource reservations.

Returns all reservations that have not been released, providing visibility into which
resources are currently claimed by which agents."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering reservations
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailReservation[]>"
    description: A promise that resolves to an array of active reservations
data:
  name: getReservations
  category: mail
  link: getReservations.md
---
# getReservations

```typescript
client.mail.getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>
```

Lists all currently active resource reservations.

Returns all reservations that have not been released, providing visibility into which
resources are currently claimed by which agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering reservations |

## Returns

**`Promise<MailReservation[]>`** — A promise that resolves to an array of active reservations

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getReservations();
```
