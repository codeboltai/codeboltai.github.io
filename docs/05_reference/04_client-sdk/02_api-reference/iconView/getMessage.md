---
name: getMessage
cbbaseinfo:
  description: "Retrieves a specific message from a conversation thread's icon view.

Returns the full details of a single message including its content,
metadata, and any associated icon view display information."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the conversation thread
      isOptional: false
    - name: messageId
      typeName: string
      description: The unique identifier of the message within the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<IconViewMessage>"
    description: A promise that resolves to the
data:
  name: getMessage
  category: iconView
  link: getMessage.md
---
# getMessage

```typescript
client.iconView.getMessage(threadId: string, messageId: string): Promise<IconViewMessage>
```

Retrieves a specific message from a conversation thread's icon view.

Returns the full details of a single message including its content,
metadata, and any associated icon view display information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the conversation thread |
| `messageId` | `string` | The unique identifier of the message within the thread |

## Returns

**`Promise<IconViewMessage>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.iconView.getMessage('threadId', 'messageId');
```
