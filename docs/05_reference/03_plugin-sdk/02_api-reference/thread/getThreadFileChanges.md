---
name: getThreadFileChanges
cbbaseinfo:
  description: Retrieves file changes associated with a specific thread.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadFileChangesResponse>"
    description: A promise that resolves with the file changes
data:
  name: getThreadFileChanges
  category: thread
  link: getThreadFileChanges.md
---
# getThreadFileChanges

```typescript
plugin.thread.getThreadFileChanges(threadId: string): Promise<ThreadFileChangesResponse>
```

Retrieves file changes associated with a specific thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID |

## Returns

**`Promise<ThreadFileChangesResponse>`** — A promise that resolves with the file changes

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.getThreadFileChanges('threadId');
```
