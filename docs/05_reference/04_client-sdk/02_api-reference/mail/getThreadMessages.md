---
name: getThreadMessages
cbbaseinfo:
  description: "Retrieves all messages within a specific mail thread.

Returns the complete ordered list of messages in a thread, useful for displaying
the full conversation history between agents."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread whose messages to fetch
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: A promise that resolves to an array of messages in chronological order
data:
  name: getThreadMessages
  category: mail
  link: getThreadMessages.md
---
# getThreadMessages

```typescript
client.mail.getThreadMessages(threadId: string): Promise<MailMessage[]>
```

Retrieves all messages within a specific mail thread.

Returns the complete ordered list of messages in a thread, useful for displaying
the full conversation history between agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread whose messages to fetch |

## Returns

**`Promise<MailMessage[]>`** — A promise that resolves to an array of messages in chronological order

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getThreadMessages('threadId');
```
