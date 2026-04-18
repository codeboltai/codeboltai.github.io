---
name: acknowledge
cbbaseinfo:
  description: "Acknowledges an inbox message.

Marks a message as seen/acknowledged without resolving it. This
indicates the user is aware of the message but may not have acted
on it yet."
cbparameters:
  parameters:
    - name: messageId
      typeName: string
      description: The unique identifier of the message to acknowledge
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the message has been acknowledged
data:
  name: acknowledge
  category: inbox
  link: acknowledge.md
---
# acknowledge

```typescript
client.inbox.acknowledge(messageId: string): Promise<void>
```

Acknowledges an inbox message.

Marks a message as seen/acknowledged without resolving it. This
indicates the user is aware of the message but may not have acted
on it yet.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `messageId` | `string` | The unique identifier of the message to acknowledge |

## Returns

**`Promise<void>`** — A promise that resolves when the message has been acknowledged

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.inbox.acknowledge('messageId');
```
