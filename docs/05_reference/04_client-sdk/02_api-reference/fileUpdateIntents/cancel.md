---
name: cancel
cbbaseinfo:
  description: "Cancels a file update intent.

Aborts an in-progress intent and releases any held resources or locks.
Use this when an operation fails or needs to be terminated before
completion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the intent
      isOptional: false
    - name: data
      typeName: CancelFileUpdateIntentRequest
      description: Optional cancellation parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the intent is cancelled
data:
  name: cancel
  category: fileUpdateIntents
  link: cancel.md
---
# cancel

```typescript
client.fileUpdateIntents.cancel(id: string, data?: CancelFileUpdateIntentRequest): Promise<unknown>
```

Cancels a file update intent.

Aborts an in-progress intent and releases any held resources or locks.
Use this when an operation fails or needs to be terminated before
completion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the intent |
| `data` | `CancelFileUpdateIntentRequest` _(optional)_ | Optional cancellation parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the intent is cancelled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.cancel('id');
```
