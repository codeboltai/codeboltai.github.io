---
name: writeFile
cbbaseinfo:
  description: "Writes a file to an environment's filesystem.

Creates or overwrites a file at the specified path within the
environment. Useful for deploying configuration or code changes."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: WriteEnvironmentFileRequest
      description: The file write request specifying path and content
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the file has been written
data:
  name: writeFile
  category: environments
  link: writeFile.md
---
# writeFile

```typescript
client.environments.writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>
```

Writes a file to an environment's filesystem.

Creates or overwrites a file at the specified path within the
environment. Useful for deploying configuration or code changes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `WriteEnvironmentFileRequest` | The file write request specifying path and content |

## Returns

**`Promise<unknown>`** — A promise that resolves when the file has been written

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.writeFile('id', /* WriteEnvironmentFileRequest */);
```
