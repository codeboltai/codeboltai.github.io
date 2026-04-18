---
name: summarizeContextThread
cbbaseinfo:
  description: "Generates a summary of the context stored in a thread.

Uses LLM processing to create a concise summary of all the context captured in the
thread. Useful for creating condensed knowledge bases from lengthy conversations."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the context thread to summarize
      isOptional: false
    - name: data
      typeName: SummarizeContextRequest
      description: Optional summarization parameters (e.g., max length, focus topics)
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the generated summary
data:
  name: summarizeContextThread
  category: memory
  link: summarizeContextThread.md
---
# summarizeContextThread

```typescript
client.memory.summarizeContextThread(threadId: string, data?: SummarizeContextRequest): Promise<unknown>
```

Generates a summary of the context stored in a thread.

Uses LLM processing to create a concise summary of all the context captured in the
thread. Useful for creating condensed knowledge bases from lengthy conversations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the context thread to summarize |
| `data` | `SummarizeContextRequest` _(optional)_ | Optional summarization parameters (e.g., max length, focus topics) |

## Returns

**`Promise<unknown>`** — A promise that resolves to the generated summary

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.summarizeContextThread('threadId');
```
