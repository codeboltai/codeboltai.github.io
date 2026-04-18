---
name: getThreadInitiated
cbbaseinfo:
  description: "Checks whether a thread has been initiated.

Returns a boolean indicating if the thread has gone through the
initiation process and is ready for interaction."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves to an object with an `initiated` boolean flag
data:
  name: getThreadInitiated
  category: chat
  link: getThreadInitiated.md
---
# getThreadInitiated

```typescript
client.chat.getThreadInitiated(threadId: string): Promise<object>
```

Checks whether a thread has been initiated.

Returns a boolean indicating if the thread has gone through the
initiation process and is ready for interaction.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<object>`** — A promise that resolves to an object with an `initiated` boolean flag

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.getThreadInitiated('threadId');
```
