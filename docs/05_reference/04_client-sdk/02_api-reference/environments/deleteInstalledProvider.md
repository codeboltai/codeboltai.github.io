---
name: deleteInstalledProvider
cbbaseinfo:
  description: "Deletes an installed environment provider.

Removes the provider registration. Environments already created by this
provider are not automatically deleted."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the installed provider to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteInstalledProvider
  category: environments
  link: deleteInstalledProvider.md
---
# deleteInstalledProvider

```typescript
client.environments.deleteInstalledProvider(id: string): Promise<unknown>
```

Deletes an installed environment provider.

Removes the provider registration. Environments already created by this
provider are not automatically deleted.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the installed provider to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.deleteInstalledProvider('id');
```
