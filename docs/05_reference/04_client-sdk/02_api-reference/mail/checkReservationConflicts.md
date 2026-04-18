---
name: checkReservationConflicts
cbbaseinfo:
  description: "Checks whether a proposed reservation would conflict with existing ones.

Validates that a resource is available before attempting to reserve it. Use this to
implement optimistic locking patterns where agents check availability before acting."
cbparameters:
  parameters:
    - name: data
      typeName: CheckReservationConflictsRequest
      description: The conflict check payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves to an object indicating whether a conflict exists
data:
  name: checkReservationConflicts
  category: mail
  link: checkReservationConflicts.md
---
# checkReservationConflicts

```typescript
client.mail.checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<object>
```

Checks whether a proposed reservation would conflict with existing ones.

Validates that a resource is available before attempting to reserve it. Use this to
implement optimistic locking patterns where agents check availability before acting.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckReservationConflictsRequest` | The conflict check payload |

## Returns

**`Promise<object>`** — A promise that resolves to an object indicating whether a conflict exists

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.checkReservationConflicts(/* CheckReservationConflictsRequest */);
```
