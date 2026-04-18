---
name: deleteEnvironment
cbbaseinfo:
  description: "Deletes an environment.

Permanently removes the environment and releases its resources. The
environment should be stopped before deletion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteEnvironment
  category: environments
  link: deleteEnvironment.md
---
# deleteEnvironment

```typescript
client.environments.deleteEnvironment(id: string): Promise<unknown>
```

Deletes an environment.

Permanently removes the environment and releases its resources. The
environment should be stopped before deletion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.deleteEnvironment('id');
```
