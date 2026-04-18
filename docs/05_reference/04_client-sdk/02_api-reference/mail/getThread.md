---
name: getThread
cbbaseinfo:
  description: "Retrieves a specific mail thread by its unique identifier.

Returns the full thread metadata including subject, participants, timestamps, and status.
Use  to fetch the actual messages within the thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: A promise that resolves to the mail thread details
data:
  name: getThread
  category: mail
  link: getThread.md
---
# getThread

```typescript
client.mail.getThread(threadId: string): Promise<MailThread>
```

Retrieves a specific mail thread by its unique identifier.

Returns the full thread metadata including subject, participants, timestamps, and status.
Use  to fetch the actual messages within the thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to retrieve |

## Returns

**`Promise<MailThread>`** — A promise that resolves to the mail thread details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getThread('threadId');
```
