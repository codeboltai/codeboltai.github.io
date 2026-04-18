---
name: checkIfUserExistsLocally
cbbaseinfo:
  description: "Checks if a user exists locally in the system.

Verifies whether a user with the specified credentials or identifier
is already present in the local user store. Useful for preventing
duplicate registrations during setup."
cbparameters:
  parameters:
    - name: data
      typeName: CheckUserExistsRequest
      description: Request containing user identification information
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: "A promise that resolves to an object with an 'exists' boolean flag"
data:
  name: checkIfUserExistsLocally
  category: users
  link: checkIfUserExistsLocally.md
---
# checkIfUserExistsLocally

```typescript
client.users.checkIfUserExistsLocally(data: CheckUserExistsRequest): Promise<object>
```

Checks if a user exists locally in the system.

Verifies whether a user with the specified credentials or identifier
is already present in the local user store. Useful for preventing
duplicate registrations during setup.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckUserExistsRequest` | Request containing user identification information |

## Returns

**`Promise<object>`** — A promise that resolves to an object with an 'exists' boolean flag

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.users.checkIfUserExistsLocally(/* CheckUserExistsRequest */);
```
