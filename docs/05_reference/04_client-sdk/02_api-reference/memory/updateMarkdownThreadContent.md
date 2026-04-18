---
name: updateMarkdownThreadContent
cbbaseinfo:
  description: "Replaces the markdown content of a thread.

Updates the actual markdown text content stored in the thread. This is separate from
metadata updates to allow efficient content-only writes."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the markdown thread
      isOptional: false
    - name: data
      typeName: UpdateMarkdownContentRequest
      description: The new markdown content
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the content has been updated
data:
  name: updateMarkdownThreadContent
  category: memory
  link: updateMarkdownThreadContent.md
---
# updateMarkdownThreadContent

```typescript
client.memory.updateMarkdownThreadContent(threadId: string, data: UpdateMarkdownContentRequest): Promise<unknown>
```

Replaces the markdown content of a thread.

Updates the actual markdown text content stored in the thread. This is separate from
metadata updates to allow efficient content-only writes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the markdown thread |
| `data` | `UpdateMarkdownContentRequest` | The new markdown content |

## Returns

**`Promise<unknown>`** — A promise that resolves when the content has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateMarkdownThreadContent('threadId', /* UpdateMarkdownContentRequest */);
```
