---
name: getActiveThreadStep
cbbaseinfo:
  description: "Retrieves the currently active step for a thread.

Returns the step that is currently in progress, or null if no
step is active."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep | null>"
    description: A promise that resolves to the active ChatThreadStep or null
data:
  name: getActiveThreadStep
  category: chatApi
  link: getActiveThreadStep.md
---
# getActiveThreadStep

```typescript
plugin.chatApi.getActiveThreadStep(threadId: string): Promise<ChatThreadStep | null>
```

Retrieves the currently active step for a thread.

Returns the step that is currently in progress, or null if no
step is active.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<ChatThreadStep | null>`** — A promise that resolves to the active ChatThreadStep or null

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.getActiveThreadStep('threadId');
```
