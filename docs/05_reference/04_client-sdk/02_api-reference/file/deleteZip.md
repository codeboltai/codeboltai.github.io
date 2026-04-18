---
name: deleteZip
cbbaseinfo:
  description: "Deletes a previously created zip file.

Removes a zip archive from the workspace filesystem. Use this to
clean up temporary archives after they have been downloaded or processed."
cbparameters:
  parameters:
    - name: data
      typeName: DeleteZipRequest
      description: Request specifying the zip file path to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the zip file has been deleted
data:
  name: deleteZip
  category: file
  link: deleteZip.md
---
# deleteZip

```typescript
client.file.deleteZip(data: DeleteZipRequest): Promise<unknown>
```

Deletes a previously created zip file.

Removes a zip archive from the workspace filesystem. Use this to
clean up temporary archives after they have been downloaded or processed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `DeleteZipRequest` | Request specifying the zip file path to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the zip file has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.file.deleteZip(/* DeleteZipRequest */);
```
