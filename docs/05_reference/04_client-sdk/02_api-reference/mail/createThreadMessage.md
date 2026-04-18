---
name: createThreadMessage
cbbaseinfo:
  description: "Adds a new message to an existing mail thread.

Posts a message to the specified thread, making it visible to all thread participants.
This is the primary way agents communicate within an established conversation."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to post to
      isOptional: false
    - name: data
      typeName: SendMailMessageRequest
      description: The message payload including body and optional metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: A promise that resolves to the newly created message
data:
  name: createThreadMessage
  category: mail
  link: createThreadMessage.md
---
# createThreadMessage

```typescript
client.mail.createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>
```

Adds a new message to an existing mail thread.

Posts a message to the specified thread, making it visible to all thread participants.
This is the primary way agents communicate within an established conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to post to |
| `data` | `SendMailMessageRequest` | The message payload including body and optional metadata |

## Returns

**`Promise<MailMessage>`** — A promise that resolves to the newly created message

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.createThreadMessage('threadId', /* SendMailMessageRequest */);
```
