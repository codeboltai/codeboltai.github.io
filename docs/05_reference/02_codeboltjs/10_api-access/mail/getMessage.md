---
name: getMessage
cbbaseinfo:
  description: Retrieves a specific message by its ID.
cbparameters:
  parameters:
    - name: params
      typeName: IGetMessageParams
      description: Object containing the messageId to retrieve.
  returns:
    signatureTypeName: "Promise<IGetMessageResponse>"
    description: A promise that resolves with the message details.
data:
  name: getMessage
  category: mail
  link: getMessage.md
---
# getMessage

```typescript
codebolt.mail.getMessage(params: IGetMessageParams): Promise<IGetMessageResponse>
```

Retrieves a specific message by its ID.
### Parameters

- **`params`** (IGetMessageParams): Object containing the messageId to retrieve.

### Returns

- **`Promise<IGetMessageResponse>`**: A promise that resolves with the message details.

### Response Structure

```typescript
interface IGetMessageResponse {
  success: boolean;
  message?: {
    id: string;
    threadId: string;
    senderId: string;
    content: string;
    timestamp: string;
    read: boolean;
    metadata?: Record<string, any>;
  };
  error?: string;
}
```

### Examples

#### Example 1: Get a Specific Message

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.getMessage({
  messageId: 'msg-123'
});

if (result.success) {
  console.log('Message:', result.message.content);
  console.log('From:', result.message.senderId);
  console.log('At:', new Date(result.message.timestamp).toLocaleString());
}
```

### Common Use Cases

- **Message Retrieval**: Get specific message details
- **Context Lookup**: Retrieve message for reference
- **Reply Preparation**: Get message before replying

### Notes

- Returns complete message information
- Includes metadata if present
- Error if message doesn't exist
