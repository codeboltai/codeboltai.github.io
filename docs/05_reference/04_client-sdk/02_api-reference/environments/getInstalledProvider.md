---
name: getInstalledProvider
cbbaseinfo:
  description: "Retrieves a specific installed provider by its ID.

Returns the full details of a single provider including its configuration
and current state."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the installed provider
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: A promise that resolves to the
data:
  name: getInstalledProvider
  category: environments
  link: getInstalledProvider.md
---
# getInstalledProvider

```typescript
client.environments.getInstalledProvider(id: string): Promise<InstalledProvider>
```

Retrieves a specific installed provider by its ID.

Returns the full details of a single provider including its configuration
and current state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the installed provider |

## Returns

**`Promise<InstalledProvider>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getInstalledProvider('id');
```
