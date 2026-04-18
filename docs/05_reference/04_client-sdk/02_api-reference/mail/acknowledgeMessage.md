---
name: acknowledgeMessage
cbbaseinfo:
  description: "Acknowledges receipt and processing of a message.

Signals that the receiving agent has processed the message content and taken
any required action. This is distinct from marking as read and indicates explicit
acknowledgment of the message's intent."
cbparameters:
  parameters:
    - name: messageId
      typeName: string
      description: The unique identifier of the message to acknowledge
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the acknowledgment has been recorded
data:
  name: acknowledgeMessage
  category: mail
  link: acknowledgeMessage.md
---
# acknowledgeMessage

```typescript
client.mail.acknowledgeMessage(messageId: string): Promise<void>
```

Acknowledges receipt and processing of a message.

Signals that the receiving agent has processed the message content and taken
any required action. This is distinct from marking as read and indicates explicit
acknowledgment of the message's intent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `messageId` | `string` | The unique identifier of the message to acknowledge |

## Returns

**`Promise<void>`** — A promise that resolves when the acknowledgment has been recorded

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.acknowledgeMessage('messageId');
```
