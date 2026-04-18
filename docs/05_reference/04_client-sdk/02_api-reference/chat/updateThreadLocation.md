---
name: updateThreadLocation
cbbaseinfo:
  description: "Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateThreadLocationRequest
      description: The location update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the location has been updated
data:
  name: updateThreadLocation
  category: chat
  link: updateThreadLocation.md
---
# updateThreadLocation

```typescript
client.chat.updateThreadLocation(data: UpdateThreadLocationRequest): Promise<void>
```

Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateThreadLocationRequest` | The location update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the location has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.updateThreadLocation(/* UpdateThreadLocationRequest */);
```
