---
name: resolve
cbbaseinfo:
  description: "Resolves an inbox message.

Marks a message as fully resolved, indicating the user has addressed
it. Resolved messages can later be cleared with ."
cbparameters:
  parameters:
    - name: messageId
      typeName: string
      description: The unique identifier of the message to resolve
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the message has been resolved
data:
  name: resolve
  category: inbox
  link: resolve.md
---
# resolve

```typescript
client.inbox.resolve(messageId: string): Promise<void>
```

Resolves an inbox message.

Marks a message as fully resolved, indicating the user has addressed
it. Resolved messages can later be cleared with .

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `messageId` | `string` | The unique identifier of the message to resolve |

## Returns

**`Promise<void>`** — A promise that resolves when the message has been resolved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.inbox.resolve('messageId');
```
