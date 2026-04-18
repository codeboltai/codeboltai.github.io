---
name: get
cbbaseinfo:
  description: "Retrieves a specific file update intent by its ID.

Returns detailed information about a single intent including its
current status, files, agent, and metadata."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the intent
      isOptional: false
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves to the FileUpdateIntent object
data:
  name: get
  category: fileUpdateIntents
  link: get.md
---
# get

```typescript
client.fileUpdateIntents.get(id: string): Promise<FileUpdateIntent>
```

Retrieves a specific file update intent by its ID.

Returns detailed information about a single intent including its
current status, files, agent, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the intent |

## Returns

**`Promise<FileUpdateIntent>`** — A promise that resolves to the FileUpdateIntent object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.get('id');
```
