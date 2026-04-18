---
name: rebuildIndex
cbbaseinfo:
  description: "Rebuilds the environment debug index from scratch.

Triggers a full re-indexing of all environment instances. Use this when
the index becomes inconsistent or after bulk data migrations."
cbparameters:
  parameters:
    - name: data
      typeName: RebuildEnvironmentIndexRequest
      description: Optional configuration for the rebuild process
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the rebuild is initiated
data:
  name: rebuildIndex
  category: environmentDebugApi
  link: rebuildIndex.md
---
# rebuildIndex

```typescript
client.environmentDebugApi.rebuildIndex(data?: RebuildEnvironmentIndexRequest): Promise<unknown>
```

Rebuilds the environment debug index from scratch.

Triggers a full re-indexing of all environment instances. Use this when
the index becomes inconsistent or after bulk data migrations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `RebuildEnvironmentIndexRequest` _(optional)_ | Optional configuration for the rebuild process |

## Returns

**`Promise<unknown>`** — A promise that resolves when the rebuild is initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.rebuildIndex();
```
