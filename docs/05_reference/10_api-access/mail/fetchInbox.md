---
name: fetchInbox
cbbaseinfo:
  description: "Fetches messages from the agent's inbox with optional filtering."
cbparameters:
  parameters:
    - name: params
      typeName: IFetchInboxParams
      description: Parameters including agentId, limit, offset, and filters.
  returns:
    signatureTypeName: "Promise<IFetchInboxResponse>"
    description: A promise that resolves with inbox messages.
data:
  name: fetchInbox
  category: mail
  link: fetchInbox.md
---
# fetchInbox

```typescript
codebolt.mail.fetchInbox(params: IFetchInboxParams): Promise<IFetchInboxResponse>
```

Fetches messages from the agent's inbox with optional filtering.
### Parameters

- **`params`** (IFetchInboxParams): Parameters including agentId, limit, offset, and filters.

### Returns

- **`Promise<IFetchInboxResponse>`**: A promise that resolves with inbox messages.

### Response Structure

```typescript
interface IFetchInboxResponse {
  success: boolean;
  messages?: Array<{
    id: string;
    threadId: string;
    senderId: string;
    content: string;
    timestamp: string;
    read: boolean;
  }>;
  total?: number;
  error?: string;
}
```

### Examples

#### Example 1: Fetch Inbox Messages

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.fetchInbox({
  agentId: 'agent-001',
  limit: 20
});

console.log(`Inbox: ${result.total} messages`);
result.messages.forEach(msg => {
  console.log(`[${msg.read ? '✓' : '✗'}] ${msg.senderId}: ${msg.content}`);
});
```

### Common Use Cases

- **Message Retrieval**: Get new messages for an agent
- **Inbox Management**: Check unread messages
- **Polling**: Regularly check for new messages

### Notes

- Returns messages for the specified agent
- Supports pagination via limit and offset
- Read status indicates if message was viewed