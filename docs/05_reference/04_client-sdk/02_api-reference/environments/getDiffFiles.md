---
name: getDiffFiles
cbbaseinfo:
  description: "Retrieves diff files for an environment.

Compares the environment's current file state against a baseline to
identify modified, added, or deleted files."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: GetDiffFilesRequest
      description: Parameters specifying the diff comparison (e.g., base commit or branch)
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the diff file information
data:
  name: getDiffFiles
  category: environments
  link: getDiffFiles.md
---
# getDiffFiles

```typescript
client.environments.getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>
```

Retrieves diff files for an environment.

Compares the environment's current file state against a baseline to
identify modified, added, or deleted files.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `GetDiffFilesRequest` | Parameters specifying the diff comparison (e.g., base commit or branch) |

## Returns

**`Promise<unknown>`** — A promise that resolves to the diff file information

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getDiffFiles('id', /* GetDiffFilesRequest */);
```
