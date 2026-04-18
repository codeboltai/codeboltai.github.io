---
name: send
cbbaseinfo:
  description: "Sends a new standalone mail message.

Delivers a message directly without requiring an existing thread. This is useful for
one-off notifications or messages that do not belong to an ongoing conversation."
cbparameters:
  parameters:
    - name: data
      typeName: SendMailMessageRequest
      description: The message payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: A promise that resolves to the sent message
data:
  name: send
  category: mail
  link: send.md
---
# send

```typescript
client.mail.send(data: SendMailMessageRequest): Promise<MailMessage>
```

Sends a new standalone mail message.

Delivers a message directly without requiring an existing thread. This is useful for
one-off notifications or messages that do not belong to an ongoing conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SendMailMessageRequest` | The message payload |

## Returns

**`Promise<MailMessage>`** — A promise that resolves to the sent message

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.send(/* SendMailMessageRequest */);
```
