---
name: updateThreadStatus
cbbaseinfo:
  description: "Updates the status of a chat thread.

Changes the thread's status (e.g., active, paused, completed),
which affects how it is displayed and processed."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateChatThreadStatusRequest
      description: The status update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the status has been updated
data:
  name: updateThreadStatus
  category: chatApi
  link: updateThreadStatus.md
---
# updateThreadStatus

```typescript
plugin.chatApi.updateThreadStatus(data: UpdateChatThreadStatusRequest): Promise<void>
```

Updates the status of a chat thread.

Changes the thread's status (e.g., active, paused, completed),
which affects how it is displayed and processed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateChatThreadStatusRequest` | The status update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the status has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.updateThreadStatus(/* UpdateChatThreadStatusRequest */);
```
