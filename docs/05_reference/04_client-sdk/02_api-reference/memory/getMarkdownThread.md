---
name: getMarkdownThread
cbbaseinfo:
  description: "Retrieves a specific markdown thread by its unique identifier.

Returns the full markdown thread including its rendered content and metadata."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the markdown thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the markdown memory thread
data:
  name: getMarkdownThread
  category: memory
  link: getMarkdownThread.md
---
# getMarkdownThread

```typescript
client.memory.getMarkdownThread(threadId: string): Promise<MemoryThread>
```

Retrieves a specific markdown thread by its unique identifier.

Returns the full markdown thread including its rendered content and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the markdown thread to retrieve |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the markdown memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getMarkdownThread('threadId');
```
