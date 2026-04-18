---
name: updateThreadName
cbbaseinfo:
  description: "Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateThreadNameRequest
      description: The name update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the name has been updated
data:
  name: updateThreadName
  category: chat
  link: updateThreadName.md
---
# updateThreadName

```typescript
client.chat.updateThreadName(data: UpdateThreadNameRequest): Promise<void>
```

Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateThreadNameRequest` | The name update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the name has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.updateThreadName(/* UpdateThreadNameRequest */);
```
