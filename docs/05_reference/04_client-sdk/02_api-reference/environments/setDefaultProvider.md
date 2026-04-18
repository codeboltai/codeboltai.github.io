---
name: setDefaultProvider
cbbaseinfo:
  description: "Sets an installed provider as the system default.

New environments will use this provider unless another is explicitly
specified during creation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the provider to set as default
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional configuration for the default setting
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the default is updated
data:
  name: setDefaultProvider
  category: environments
  link: setDefaultProvider.md
---
# setDefaultProvider

```typescript
client.environments.setDefaultProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Sets an installed provider as the system default.

New environments will use this provider unless another is explicitly
specified during creation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the provider to set as default |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional configuration for the default setting |

## Returns

**`Promise<unknown>`** — A promise that resolves when the default is updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.setDefaultProvider('id');
```
