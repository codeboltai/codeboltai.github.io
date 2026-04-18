---
name: complete
cbbaseinfo:
  description: "Marks a file update intent as complete.

Finalizes an intent after all file modifications are finished.
This releases locks and records the successful completion of
the update operation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the intent
      isOptional: false
    - name: data
      typeName: CompleteFileUpdateIntentRequest
      description: Optional completion parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the intent is marked complete
data:
  name: complete
  category: fileUpdateIntents
  link: complete.md
---
# complete

```typescript
client.fileUpdateIntents.complete(id: string, data?: CompleteFileUpdateIntentRequest): Promise<unknown>
```

Marks a file update intent as complete.

Finalizes an intent after all file modifications are finished.
This releases locks and records the successful completion of
the update operation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the intent |
| `data` | `CompleteFileUpdateIntentRequest` _(optional)_ | Optional completion parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the intent is marked complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.complete('id');
```
