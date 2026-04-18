---
name: createMarkdownThread
cbbaseinfo:
  description: "Creates a new markdown-formatted memory thread.

Initializes a thread optimized for storing and rendering markdown content. Markdown
threads are ideal for notes, documentation, and free-form text with formatting."
cbparameters:
  parameters:
    - name: data
      typeName: CreateMarkdownThreadRequest
      description: The markdown thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the newly created markdown thread
data:
  name: createMarkdownThread
  category: memory
  link: createMarkdownThread.md
---
# createMarkdownThread

```typescript
client.memory.createMarkdownThread(data: CreateMarkdownThreadRequest): Promise<MemoryThread>
```

Creates a new markdown-formatted memory thread.

Initializes a thread optimized for storing and rendering markdown content. Markdown
threads are ideal for notes, documentation, and free-form text with formatting.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMarkdownThreadRequest` | The markdown thread creation payload |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the newly created markdown thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.createMarkdownThread(/* CreateMarkdownThreadRequest */);
```
