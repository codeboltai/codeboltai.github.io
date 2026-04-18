---
name: listInstalledProviders
cbbaseinfo:
  description: "Lists all installed environment providers.

Returns every provider that has been registered or installed in the system."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<InstalledProvider[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstalledProviders
  category: environments
  link: listInstalledProviders.md
---
# listInstalledProviders

```typescript
client.environments.listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>
```

Lists all installed environment providers.

Returns every provider that has been registered or installed in the system.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<InstalledProvider[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.listInstalledProviders();
```
