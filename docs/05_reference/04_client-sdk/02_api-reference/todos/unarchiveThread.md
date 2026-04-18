---
name: unarchiveThread
cbbaseinfo:
  description: "Unarchives a todo thread.

Removes the archived status from the specified thread, making it
visible in active views again. This restores the thread and all its
todos to normal operational status."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to unarchive
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been unarchived
data:
  name: unarchiveThread
  category: todos
  link: unarchiveThread.md
---
# unarchiveThread

```typescript
client.todos.unarchiveThread(threadId: string): Promise<void>
```

Unarchives a todo thread.

Removes the archived status from the specified thread, making it
visible in active views again. This restores the thread and all its
todos to normal operational status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to unarchive |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been unarchived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.unarchiveThread('threadId');
```
