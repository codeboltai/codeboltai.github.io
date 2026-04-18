---
name: getThreadSteps
cbbaseinfo:
  description: "Retrieves all steps for a chat thread.

Returns the complete step sequence for the given thread, showing
the progression of work within the conversation."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep[]>"
    description: A promise that resolves to an array of ChatThreadStep objects
data:
  name: getThreadSteps
  category: chatApi
  link: getThreadSteps.md
---
# getThreadSteps

```typescript
plugin.chatApi.getThreadSteps(threadId: string): Promise<ChatThreadStep[]>
```

Retrieves all steps for a chat thread.

Returns the complete step sequence for the given thread, showing
the progression of work within the conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<ChatThreadStep[]>`** — A promise that resolves to an array of ChatThreadStep objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.getThreadSteps('threadId');
```
