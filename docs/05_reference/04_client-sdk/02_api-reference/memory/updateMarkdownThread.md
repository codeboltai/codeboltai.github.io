---
name: updateMarkdownThread
cbbaseinfo:
  description: "Updates the metadata of a markdown thread (name, tags, etc.).

Modifies thread-level properties without changing the markdown content itself.
Use  to change the actual markdown text."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the markdown thread to update
      isOptional: false
    - name: data
      typeName: UpdateMarkdownThreadRequest
      description: The metadata fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the updated markdown thread
data:
  name: updateMarkdownThread
  category: memory
  link: updateMarkdownThread.md
---
# updateMarkdownThread

```typescript
client.memory.updateMarkdownThread(threadId: string, data: UpdateMarkdownThreadRequest): Promise<MemoryThread>
```

Updates the metadata of a markdown thread (name, tags, etc.).

Modifies thread-level properties without changing the markdown content itself.
Use  to change the actual markdown text.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the markdown thread to update |
| `data` | `UpdateMarkdownThreadRequest` | The metadata fields to update |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the updated markdown thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateMarkdownThread('threadId', /* UpdateMarkdownThreadRequest */);
```
