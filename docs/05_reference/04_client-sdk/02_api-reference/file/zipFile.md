---
name: zipFile
cbbaseinfo:
  description: "Creates a zip archive from specified files or directories.

Compresses the specified sources into a zip file at the given output
path. Useful for bundling project files for download or deployment."
cbparameters:
  parameters:
    - name: data
      typeName: ZipFileRequest
      description: Request specifying source paths and the output zip file location
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the zip file has been created
data:
  name: zipFile
  category: file
  link: zipFile.md
---
# zipFile

```typescript
client.file.zipFile(data: ZipFileRequest): Promise<unknown>
```

Creates a zip archive from specified files or directories.

Compresses the specified sources into a zip file at the given output
path. Useful for bundling project files for download or deployment.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ZipFileRequest` | Request specifying source paths and the output zip file location |

## Returns

**`Promise<unknown>`** — A promise that resolves when the zip file has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.file.zipFile(/* ZipFileRequest */);
```
