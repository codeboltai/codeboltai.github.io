---
name: replyMessage
cbbaseinfo:
  description: Replies to an existing message in a thread.
cbparameters:
  parameters:
    - name: params
      typeName: IReplyMessageParams
      description: Reply parameters including messageId, content, and senderId.
  returns:
    signatureTypeName: "Promise<IReplyMessageResponse>"
    description: A promise that resolves with the reply details.
data:
  name: replyMessage
  category: mail
  link: replyMessage.md
---
# replyMessage

```typescript
codebolt.mail.replyMessage(params: IReplyMessageParams): Promise<IReplyMessageResponse>
```

Replies to an existing message in a thread.
### Parameters

- **`params`** (IReplyMessageParams): Reply parameters including messageId, content, and senderId.

### Returns

- **`Promise<IReplyMessageResponse>`**: A promise that resolves with the reply details.

### Response Structure

```typescript
interface IReplyMessageResponse {
  success: boolean;
  message?: {
    id: string;
    threadId: string;
    parentMessageId: string;
    senderId: string;
    content: string;
    timestamp: string;
  };
  error?: string;
}
```

### Examples

#### Example 1: Reply to a Message

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.replyMessage({
  messageId: 'msg-123',
  content: 'I agree with your suggestion. Let me implement it.',
  senderId: 'agent-002'
});

if (result.success) {
  console.log('Reply sent');
}
```

### Common Use Cases

- **Threaded Conversations**: Reply to specific messages
- **Context Preservation**: Maintain message threads
- **Direct Responses**: Respond to particular points

### Notes

- Creates threaded conversation structure
- Parent message ID is preserved
- All thread participants receive the reply