---
name: updateThread
cbbaseinfo:
  description: "Partially updates a mail thread's metadata.

Applies a partial update (PATCH) to the thread, allowing you to modify specific fields
such as the subject, status, or participants without affecting other properties."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update
      isOptional: false
    - name: data
      typeName: UpdateMailThreadRequest
      description: The fields to patch on the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: A promise that resolves to the updated mail thread
data:
  name: updateThread
  category: mail
  link: updateThread.md
---
# updateThread

```typescript
client.mail.updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>
```

Partially updates a mail thread's metadata.

Applies a partial update (PATCH) to the thread, allowing you to modify specific fields
such as the subject, status, or participants without affecting other properties.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateMailThreadRequest` | The fields to patch on the thread |

## Returns

**`Promise<MailThread>`** — A promise that resolves to the updated mail thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.updateThread('threadId', /* UpdateMailThreadRequest */);
```
