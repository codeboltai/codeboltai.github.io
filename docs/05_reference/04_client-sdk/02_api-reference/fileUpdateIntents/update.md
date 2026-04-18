---
name: update
cbbaseinfo:
  description: "Updates an existing file update intent.

Modifies the properties, files, or status of an existing intent.
Use this to extend file ranges, update metadata, or change intent
configuration as operations progress."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the intent to update
      isOptional: false
    - name: data
      typeName: UpdateFileUpdateIntentRequest
      description: Request containing the intent updates to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves to the updated FileUpdateIntent object
data:
  name: update
  category: fileUpdateIntents
  link: update.md
---
# update

```typescript
client.fileUpdateIntents.update(id: string, data: UpdateFileUpdateIntentRequest): Promise<FileUpdateIntent>
```

Updates an existing file update intent.

Modifies the properties, files, or status of an existing intent.
Use this to extend file ranges, update metadata, or change intent
configuration as operations progress.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the intent to update |
| `data` | `UpdateFileUpdateIntentRequest` | Request containing the intent updates to apply |

## Returns

**`Promise<FileUpdateIntent>`** — A promise that resolves to the updated FileUpdateIntent object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.update('id', /* UpdateFileUpdateIntentRequest */);
```
