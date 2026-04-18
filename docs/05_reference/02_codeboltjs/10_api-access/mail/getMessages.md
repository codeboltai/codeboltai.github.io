---
name: getMessages
cbbaseinfo:
  description: Retrieves all messages from a specific mail thread.
cbparameters:
  parameters:
    - name: params
      typeName: IGetMessagesParams
      description: Object containing the threadId to get messages from.
  returns:
    signatureTypeName: "Promise<IGetMessagesResponse>"
    description: A promise that resolves with an array of messages.
data:
  name: getMessages
  category: mail
  link: getMessages.md
---
# getMessages

```typescript
codebolt.mail.getMessages(params: IGetMessagesParams): Promise<IGetMessagesResponse>
```

Retrieves all messages from a specific mail thread.
### Parameters

- **`params`** (IGetMessagesParams): Object containing the threadId to get messages from.

### Returns

- **`Promise<IGetMessagesResponse>`**: A promise that resolves with an array of messages.

### Response Structure

```typescript
interface IGetMessagesResponse {
  success: boolean;
  messages?: Array<{
    id: string;
    threadId: string;
    senderId: string;
    content: string;
    timestamp: string;
    read: boolean;
  }>;
  error?: string;
}
```

### Examples

#### Example 1: Get All Thread Messages

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.getMessages({
  threadId: 'thread-123'
});

console.log(`Thread has ${result.messages.length} messages`);
result.messages.forEach(msg => {
  const time = new Date(msg.timestamp).toLocaleTimeString();
  console.log(`[${time}] ${msg.senderId}: ${msg.content}`);
});
```

### Common Use Cases

- **Thread History**: View complete conversation
- **Context Loading**: Get all messages for context
- **Export**: Export thread conversation

### Notes

- Returns all messages in chronological order
- Includes read status for each message
- Useful for conversation review
