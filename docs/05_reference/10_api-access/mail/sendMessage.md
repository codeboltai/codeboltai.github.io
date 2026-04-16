---
name: sendMessage
cbbaseinfo:
  description: Sends a message to a specific mail thread.
cbparameters:
  parameters:
    - name: params
      typeName: ISendMessageParams
      description: Message parameters including threadId, content, and senderId.
  returns:
    signatureTypeName: "Promise<ISendMessageResponse>"
    description: A promise that resolves with the sent message details.
data:
  name: sendMessage
  category: mail
  link: sendMessage.md
---
# sendMessage

```typescript
codebolt.mail.sendMessage(params: ISendMessageParams): Promise<ISendMessageResponse>
```

Sends a message to a specific mail thread.
### Parameters

- **`params`** (ISendMessageParams): Message parameters including threadId, content, and senderId.

### Returns

- **`Promise<ISendMessageResponse>`**: A promise that resolves with the sent message details.

### Response Structure

```typescript
interface ISendMessageResponse {
  success: boolean;
  message?: {
    id: string;
    threadId: string;
    senderId: string;
    content: string;
    timestamp: string;
  };
  error?: string;
}
```

### Examples

#### Example 1: Send a Message

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.sendMessage({
  threadId: 'thread-123',
  content: 'Please review the changes I made to the auth module',
  senderId: 'agent-001'
});

if (result.success) {
  console.log('Message sent:', result.message.id);
}
```

### Common Use Cases

- **Communication**: Send messages in threads
- **Collaboration**: Discuss with other agents
- **Updates**: Share progress and information

### Notes

- Thread must exist and be open
- Sender must be a participant in the thread
- Content can include text and structured data
