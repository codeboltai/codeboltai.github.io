---
name: replyToMessage
cbbaseinfo:
  description: "Sends a reply to an existing message.

Creates a response that is linked to a specific parent message, maintaining the
conversation thread structure. The reply is posted to the same thread as the
original message."
cbparameters:
  parameters:
    - name: data
      typeName: ReplyToMessageRequest
      description: The reply payload including the parent message reference and body
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: A promise that resolves to the newly created reply message
data:
  name: replyToMessage
  category: mail
  link: replyToMessage.md
---
# replyToMessage

```typescript
client.mail.replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>
```

Sends a reply to an existing message.

Creates a response that is linked to a specific parent message, maintaining the
conversation thread structure. The reply is posted to the same thread as the
original message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ReplyToMessageRequest` | The reply payload including the parent message reference and body |

## Returns

**`Promise<MailMessage>`** — A promise that resolves to the newly created reply message

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.replyToMessage(/* ReplyToMessageRequest */);
```
