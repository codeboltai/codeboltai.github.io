---
name: summarizeThread
cbbaseinfo:
  description: "Generates a summarized view of a mail thread's conversation.

Produces a concise summary of the thread's messages, useful for quickly understanding
the key points of a long conversation without reading every message."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to summarize
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThreadSummary>"
    description: A promise that resolves to the thread summary
data:
  name: summarizeThread
  category: mail
  link: summarizeThread.md
---
# summarizeThread

```typescript
client.mail.summarizeThread(threadId: string): Promise<MailThreadSummary>
```

Generates a summarized view of a mail thread's conversation.

Produces a concise summary of the thread's messages, useful for quickly understanding
the key points of a long conversation without reading every message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to summarize |

## Returns

**`Promise<MailThreadSummary>`** — A promise that resolves to the thread summary

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.summarizeThread('threadId');
```
