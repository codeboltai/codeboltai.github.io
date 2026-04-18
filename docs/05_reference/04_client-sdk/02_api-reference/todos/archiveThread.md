---
name: archiveThread
cbbaseinfo:
  description: "Archives a todo thread.

Marks the specified thread as archived, removing it from active view
while preserving all todos within it. Archived threads can still be
accessed but are typically hidden from default views."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to archive
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been archived
data:
  name: archiveThread
  category: todos
  link: archiveThread.md
---
# archiveThread

```typescript
client.todos.archiveThread(threadId: string): Promise<void>
```

Archives a todo thread.

Marks the specified thread as archived, removing it from active view
while preserving all todos within it. Archived threads can still be
accessed but are typically hidden from default views.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to archive |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been archived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.archiveThread('threadId');
```
