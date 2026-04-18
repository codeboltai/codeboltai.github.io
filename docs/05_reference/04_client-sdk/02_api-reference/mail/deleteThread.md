---
name: deleteThread
cbbaseinfo:
  description: "Permanently deletes a mail thread and all its messages.

Removes the thread and its entire message history. This action cannot be undone.
Consider archiving threads instead if you may need to reference them later."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been deleted
data:
  name: deleteThread
  category: mail
  link: deleteThread.md
---
# deleteThread

```typescript
client.mail.deleteThread(threadId: string): Promise<void>
```

Permanently deletes a mail thread and all its messages.

Removes the thread and its entire message history. This action cannot be undone.
Consider archiving threads instead if you may need to reference them later.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.deleteThread('threadId');
```
