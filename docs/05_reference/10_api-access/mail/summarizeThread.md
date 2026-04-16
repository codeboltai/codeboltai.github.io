---
name: summarizeThread
cbbaseinfo:
  description: "Generates a summary of a mail thread's conversation."
cbparameters:
  parameters:
    - name: params
      typeName: ISummarizeThreadParams
      description: Parameters including the threadId to summarize.
  returns:
    signatureTypeName: "Promise<ISummarizeThreadResponse>"
    description: A promise that resolves with the thread summary.
data:
  name: summarizeThread
  category: mail
  link: summarizeThread.md
---
# summarizeThread

```typescript
codebolt.mail.summarizeThread(params: ISummarizeThreadParams): Promise<ISummarizeThreadResponse>
```

Generates a summary of a mail thread's conversation.
### Parameters

- **`params`** (ISummarizeThreadParams): Parameters including the threadId to summarize.

### Returns

- **`Promise<ISummarizeThreadResponse>`**: A promise that resolves with the thread summary.

### Examples

#### Example 1: Summarize Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.summarizeThread({
  threadId: 'thread-123'
});

if (result.success) {
  console.log('Thread Summary:', result.summary);
  console.log('Key Points:', result.keyPoints);
}
```

### Common Use Cases

- **Quick Overview**: Get thread summary without reading all messages
- **Meeting Prep**: Prepare for discussions based on thread content
- **Documentation**: Generate documentation from conversations

### Notes

- AI-powered summarization
- Extracts key points and decisions
- Useful for long conversations
