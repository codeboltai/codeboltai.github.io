---
name: read
cbbaseinfo:
  description: "Reads the content of a file.

Retrieves the full content of a file at the specified path. Returns
the raw file data suitable for display or further processing."
cbparameters:
  parameters:
    - name: params
      typeName: FileReadParams
      description: Optional parameters specifying which file to read
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the file content
data:
  name: read
  category: fileRead
  link: read.md
---
# read

```typescript
client.fileRead.read(params?: FileReadParams): Promise<unknown>
```

Reads the content of a file.

Retrieves the full content of a file at the specified path. Returns
the raw file data suitable for display or further processing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileReadParams` _(optional)_ | Optional parameters specifying which file to read |

## Returns

**`Promise<unknown>`** — A promise that resolves to the file content

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.read();
```
