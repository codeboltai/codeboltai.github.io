---
name: logout
cbbaseinfo:
  description: "Logs out the current authenticated user.

Ends the current user session and invalidates authentication tokens.
Optionally accepts logout request data for additional session handling."
cbparameters:
  parameters:
    - name: data
      typeName: LogoutRequest
      description: Optional logout request parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when logout is complete
data:
  name: logout
  category: users
  link: logout.md
---
# logout

```typescript
client.users.logout(data?: LogoutRequest): Promise<void>
```

Logs out the current authenticated user.

Ends the current user session and invalidates authentication tokens.
Optionally accepts logout request data for additional session handling.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LogoutRequest` _(optional)_ | Optional logout request parameters |

## Returns

**`Promise<void>`** — A promise that resolves when logout is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.users.logout();
```
