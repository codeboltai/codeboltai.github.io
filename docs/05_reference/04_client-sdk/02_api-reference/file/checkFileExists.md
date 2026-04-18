---
name: checkFileExists
cbbaseinfo:
  description: "Checks whether a file exists at the specified path.

Verifies file existence without reading its contents. Useful for
conditional logic that depends on whether a file is already present."
cbparameters:
  parameters:
    - name: data
      typeName: CheckFileExistsRequest
      description: Request specifying the file path to check
      isOptional: false
  returns:
    signatureTypeName: "Promise<CheckFileExistsResponse>"
    description: A promise that resolves to a  indicating existence
data:
  name: checkFileExists
  category: file
  link: checkFileExists.md
---
# checkFileExists

```typescript
client.file.checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>
```

Checks whether a file exists at the specified path.

Verifies file existence without reading its contents. Useful for
conditional logic that depends on whether a file is already present.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckFileExistsRequest` | Request specifying the file path to check |

## Returns

**`Promise<CheckFileExistsResponse>`** — A promise that resolves to a  indicating existence

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.file.checkFileExists(/* CheckFileExistsRequest */);
```
