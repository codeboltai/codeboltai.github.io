---
name: markRead
cbbaseinfo:
  description: Marks a message or thread as read.
cbparameters:
  parameters:
    - name: params
      typeName: IMarkReadParams
      description: Parameters including messageId or threadId to mark as read.
  returns:
    signatureTypeName: "Promise<IMarkReadResponse>"
    description: A promise that resolves when the message/thread is marked read.
data:
  name: markRead
  category: mail
  link: markRead.md
---
# markRead

```typescript
codebolt.mail.markRead(params: IMarkReadParams): Promise<IMarkReadResponse>
```

Marks a message or thread as read.
### Parameters

- **`params`** (IMarkReadParams): Parameters including messageId or threadId to mark as read.

### Returns

- **`Promise<IMarkReadResponse>`**: A promise that resolves when the message/thread is marked read.

### Response Structure

```typescript
interface IMarkReadResponse {
  success: boolean;
  error?: string;
}
```

### Examples

#### Example 1: Mark a Message as Read

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.markRead({
  messageId: 'msg-123'
});

if (result.success) {
  console.log('Message marked as read');
}
```

### Common Use Cases

- **Read Receipts**: Mark messages as read
- **Inbox Management**: Clear unread indicators
- **Tracking**: Track message read status

### Notes

- Updates read status for the message
- Can mark individual messages or entire threads
- Idempotent operation (safe to call multiple times)