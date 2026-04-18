---
name: archiveMarkdownThread
cbbaseinfo:
  description: Archives a markdown thread to remove it from active listings.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the markdown thread to archive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the thread has been archived
data:
  name: archiveMarkdownThread
  category: memory
  link: archiveMarkdownThread.md
---
# archiveMarkdownThread

```typescript
client.memory.archiveMarkdownThread(threadId: string): Promise<unknown>
```

Archives a markdown thread to remove it from active listings.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the markdown thread to archive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the thread has been archived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.archiveMarkdownThread('threadId');
```
