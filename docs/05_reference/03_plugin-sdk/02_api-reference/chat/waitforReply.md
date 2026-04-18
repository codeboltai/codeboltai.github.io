---
name: waitforReply
cbbaseinfo:
  description: Waits for a reply to a sent message.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The message for which a reply is expected.
      isOptional: false
  returns:
    signatureTypeName: "Promise<UserMessage>"
    description: A promise that resolves with the reply.
data:
  name: waitforReply
  category: chat
  link: waitforReply.md
---
# waitforReply

```typescript
plugin.chat.waitforReply(message: string): Promise<UserMessage>
```

Waits for a reply to a sent message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The message for which a reply is expected. |

## Returns

**`Promise<UserMessage>`** — A promise that resolves with the reply.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.waitforReply('message');
```
