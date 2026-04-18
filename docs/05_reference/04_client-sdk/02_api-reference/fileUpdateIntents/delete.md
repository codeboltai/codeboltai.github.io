---
name: delete
cbbaseinfo:
  description: "Deletes a file update intent.

Removes the specified intent and releases any file locks it held.
Other agents will then be able to create intents for those files."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the intent to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the intent has been deleted
data:
  name: delete
  category: fileUpdateIntents
  link: delete.md
---
# delete

```typescript
client.fileUpdateIntents.delete(id: string): Promise<unknown>
```

Deletes a file update intent.

Removes the specified intent and releases any file locks it held.
Other agents will then be able to create intents for those files.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the intent to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the intent has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.delete('id');
```
