---
name: addFile
cbbaseinfo:
  description: "Creates a new file in the workspace.

Adds a file with the specified name and content. If the file already
exists, behavior depends on the server configuration."
cbparameters:
  parameters:
    - name: data
      typeName: AddFileRequest
      description: Request specifying the file path and content to create
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the file has been created
data:
  name: addFile
  category: file
  link: addFile.md
---
# addFile

```typescript
client.file.addFile(data: AddFileRequest): Promise<unknown>
```

Creates a new file in the workspace.

Adds a file with the specified name and content. If the file already
exists, behavior depends on the server configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddFileRequest` | Request specifying the file path and content to create |

## Returns

**`Promise<unknown>`** — A promise that resolves when the file has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.file.addFile(/* AddFileRequest */);
```
