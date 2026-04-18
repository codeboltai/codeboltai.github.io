---
name: markMessageRead
cbbaseinfo:
  description: "Marks a specific message as read by the current agent.

Updates the read status of a message, which can be used to track which messages
have been processed by each agent in a conversation."
cbparameters:
  parameters:
    - name: messageId
      typeName: string
      description: The unique identifier of the message to mark as read
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the read status has been updated
data:
  name: markMessageRead
  category: mail
  link: markMessageRead.md
---
# markMessageRead

```typescript
client.mail.markMessageRead(messageId: string): Promise<void>
```

Marks a specific message as read by the current agent.

Updates the read status of a message, which can be used to track which messages
have been processed by each agent in a conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `messageId` | `string` | The unique identifier of the message to mark as read |

## Returns

**`Promise<void>`** — A promise that resolves when the read status has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.markMessageRead('messageId');
```
