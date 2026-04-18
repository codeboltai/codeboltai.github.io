---
name: updateInstalledProvider
cbbaseinfo:
  description: "Updates the configuration of an installed provider.

Modifies provider settings such as name, credentials, or resource limits."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the installed provider to update
      isOptional: false
    - name: data
      typeName: UpdateInstalledProviderRequest
      description: The fields to update on the provider
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: A promise that resolves to the updated
data:
  name: updateInstalledProvider
  category: environments
  link: updateInstalledProvider.md
---
# updateInstalledProvider

```typescript
client.environments.updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>
```

Updates the configuration of an installed provider.

Modifies provider settings such as name, credentials, or resource limits.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the installed provider to update |
| `data` | `UpdateInstalledProviderRequest` | The fields to update on the provider |

## Returns

**`Promise<InstalledProvider>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.updateInstalledProvider('id', /* UpdateInstalledProviderRequest */);
```
