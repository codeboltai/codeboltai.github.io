---
name: update
cbbaseinfo:
  description: "Updates an existing thread with new information.

Modifies the specified thread's configuration, metadata, or other
attributes. Only the fields provided in the request will be updated.
Use this to make changes to existing threads."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update
      isOptional: false
    - name: data
      typeName: UpdateThreadRequest
      description: The update request containing the fields to modify
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread>"
    description: A promise that resolves to the updated Thread object
data:
  name: update
  category: threadsApi
  link: update.md
---
# update

```typescript
plugin.threadsApi.update(threadId: string, data: UpdateThreadRequest): Promise<Thread>
```

Updates an existing thread with new information.

Modifies the specified thread's configuration, metadata, or other
attributes. Only the fields provided in the request will be updated.
Use this to make changes to existing threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadRequest` | The update request containing the fields to modify |

## Returns

**`Promise<Thread>`** — A promise that resolves to the updated Thread object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.update('threadId', /* UpdateThreadRequest */);
```
