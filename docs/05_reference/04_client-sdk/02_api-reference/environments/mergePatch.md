---
name: mergePatch
cbbaseinfo:
  description: "Merges a patch into the environment's project files.

Applies a set of file changes (additions, modifications, deletions) to
the environment in a single atomic operation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: MergePatchRequest
      description: The patch payload describing file changes to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the patch has been applied
data:
  name: mergePatch
  category: environments
  link: mergePatch.md
---
# mergePatch

```typescript
client.environments.mergePatch(id: string, data: MergePatchRequest): Promise<unknown>
```

Merges a patch into the environment's project files.

Applies a set of file changes (additions, modifications, deletions) to
the environment in a single atomic operation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `MergePatchRequest` | The patch payload describing file changes to apply |

## Returns

**`Promise<unknown>`** — A promise that resolves when the patch has been applied

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.mergePatch('id', /* MergePatchRequest */);
```
