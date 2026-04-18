---
name: deleteThread
cbbaseinfo:
  description: "Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadIdRequest
      description: The thread identifier
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been deleted
data:
  name: deleteThread
  category: chat
  link: deleteThread.md
---
# deleteThread

```typescript
client.chat.deleteThread(data: ThreadIdRequest): Promise<void>
```

Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadIdRequest` | The thread identifier |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.deleteThread(/* ThreadIdRequest */);
```
