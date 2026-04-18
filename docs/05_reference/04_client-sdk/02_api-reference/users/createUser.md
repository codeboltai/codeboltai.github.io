---
name: createUser
cbbaseinfo:
  description: "Creates a new user account in the system.

Registers a new local user with the provided credentials and profile
information. The user will be available for authentication immediately
after creation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateUserRequest
      description: Request containing user creation details
      isOptional: false
  returns:
    signatureTypeName: "Promise<User>"
    description: A promise that resolves to the created User object
data:
  name: createUser
  category: users
  link: createUser.md
---
# createUser

```typescript
client.users.createUser(data: CreateUserRequest): Promise<User>
```

Creates a new user account in the system.

Registers a new local user with the provided credentials and profile
information. The user will be available for authentication immediately
after creation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateUserRequest` | Request containing user creation details |

## Returns

**`Promise<User>`** — A promise that resolves to the created User object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.users.createUser(/* CreateUserRequest */);
```
