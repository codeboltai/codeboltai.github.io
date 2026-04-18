---
name: readFile
cbbaseinfo:
  description: "Reads a file from within an environment.

Retrieves the contents of a specific file from the environment's
filesystem. Useful for inspecting files without SSH access."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: ReadEnvironmentFileRequest
      description: The file read request specifying the file path
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the file contents
data:
  name: readFile
  category: environments
  link: readFile.md
---
# readFile

```typescript
client.environments.readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>
```

Reads a file from within an environment.

Retrieves the contents of a specific file from the environment's
filesystem. Useful for inspecting files without SSH access.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `ReadEnvironmentFileRequest` | The file read request specifying the file path |

## Returns

**`Promise<unknown>`** — A promise that resolves to the file contents

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.readFile('id', /* ReadEnvironmentFileRequest */);
```
