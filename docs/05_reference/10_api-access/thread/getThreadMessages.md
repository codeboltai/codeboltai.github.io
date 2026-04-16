---
name: getThreadMessages
cbbaseinfo:
  description: Retrieves messages from a specific thread with optional pagination and filtering.
cbparameters:
  parameters:
    - name: options
      typeName: GetThreadMessagesOptions
      description: Options including threadId, limit, offset, and filters for message retrieval.
  returns:
    signatureTypeName: "Promise<GetThreadMessagesResponse>"
    description: A promise that resolves with an array of messages and pagination metadata.
data:
  name: getThreadMessages
  category: thread
  link: getThreadMessages.md
---
# getThreadMessages

```typescript
codebolt.thread.getThreadMessages(options: GetThreadMessagesOptions): Promise<GetThreadMessagesResponse>
```

Retrieves messages from a specific thread with optional pagination and filtering.
### Parameters

- **`options`** (GetThreadMessagesOptions): Options including threadId, limit, offset, and filters for message retrieval.

### Returns

- **`Promise<GetThreadMessagesResponse>`**: A promise that resolves with an array of messages and pagination metadata.

### Response Structure

```typescript
interface GetThreadMessagesResponse {
  messages: Array<{
    messageId: string;
    threadId: string;
    role: string;
    content: string;
    timestamp: string;
    metadata?: Record<string, any>;
  }>;
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}
```

### Examples

#### Example 1: Get All Messages from a Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

// Get messages from the thread
const result = await codebolt.thread.getThreadMessages({
  threadId
});

console.log(`Total messages: ${result.total}`);
console.log('Messages:', result.messages);

result.messages.forEach(msg => {
  console.log(`[${msg.role}] ${msg.content}`);
});
```

#### Example 2: Get Messages with Pagination

```typescript
const threadId = 'thread_def456';

async function getAllMessages(threadId: string) {
  let allMessages = [];
  let offset = 0;
  const limit = 50;
  let hasMore = true;

  while (hasMore) {
    const result = await codebolt.thread.getThreadMessages({
      threadId,
      limit,
      offset
    });

    allMessages = allMessages.concat(result.messages);
    hasMore = result.hasMore;
    offset += limit;

    console.log(`Fetched ${result.messages.length} messages`);
  }

  return allMessages;
}

const messages = await getAllMessages(threadId);
console.log(`Retrieved ${messages.length} total messages`);
```

#### Example 3: Get Recent Messages

```typescript
const threadId = 'thread_ghi789';

// Get only the 10 most recent messages
const result = await codebolt.thread.getThreadMessages({
  threadId,
  limit: 10
});

console.log('Recent messages:');
result.messages.forEach((msg, index) => {
  const time = new Date(msg.timestamp).toLocaleTimeString();
  console.log(`${index + 1}. [${time}] ${msg.role}: ${msg.content.substring(0, 50)}...`);
});
```

#### Example 4: Display Messages in Conversation Format

```typescript
const threadId = 'thread_jkl012';

const result = await codebolt.thread.getThreadMessages({
  threadId,
  limit: 20
});

function displayConversation(messages) {
  console.log('='.repeat(60));
  console.log('Thread Conversation');
  console.log('='.repeat(60));

  messages.forEach((msg, index) => {
    const timestamp = new Date(msg.timestamp).toLocaleString();
    const role = msg.role.toUpperCase().padEnd(10);

    console.log(`[${index + 1}] ${timestamp}`);
    console.log(`${role}: ${msg.content}`);

    if (msg.metadata) {
      console.log(`Metadata: ${JSON.stringify(msg.metadata)}`);
    }

    console.log('-'.repeat(60));
  });

  console.log('='.repeat(60));
}

displayConversation(result.messages);
```

#### Example 5: Filter Messages by Role

```typescript
const threadId = 'thread_mno345';

const result = await codebolt.thread.getThreadMessages({
  threadId,
  limit: 100
});

// Filter messages by role
const agentMessages = result.messages.filter(msg => msg.role === 'agent');
const userMessages = result.messages.filter(msg => msg.role === 'user');
const systemMessages = result.messages.filter(msg => msg.role === 'system');

console.log(`Agent messages: ${agentMessages.length}`);
console.log(`User messages: ${userMessages.length}`);
console.log(`System messages: ${systemMessages.length}`);

// Display agent messages
console.log('\nAgent Messages:');
agentMessages.forEach(msg => {
  console.log(`- ${msg.content}`);
});
```

#### Example 6: Analyze Thread Activity

```typescript
const threadId = 'thread_pqr678';

const result = await codebolt.thread.getThreadMessages({
  threadId
});

function analyzeThreadActivity(messages) {
  const analysis = {
    totalMessages: messages.length,
    byRole: {},
    timeRange: {
      first: messages[0]?.timestamp,
      last: messages[messages.length - 1]?.timestamp
    },
    averageMessageLength: 0
  };

  // Count by role
  messages.forEach(msg => {
    analysis.byRole[msg.role] = (analysis.byRole[msg.role] || 0) + 1;
    analysis.averageMessageLength += msg.content.length;
  });

  analysis.averageMessageLength = Math.round(
    analysis.averageMessageLength / messages.length
  );

  // Calculate duration
  if (analysis.timeRange.first && analysis.timeRange.last) {
    const first = new Date(analysis.timeRange.first);
    const last = new Date(analysis.timeRange.last);
    const duration = last.getTime() - first.getTime();
    analysis.durationHours = (duration / (1000 * 60 * 60)).toFixed(2);
  }

  return analysis;
}

const analysis = analyzeThreadActivity(result.messages);

console.log('Thread Activity Analysis:');
console.log(`Total messages: ${analysis.totalMessages}`);
console.log('Messages by role:', analysis.byRole);
console.log(`Average message length: ${analysis.averageMessageLength} characters`);
console.log(`Duration: ${analysis.durationHours} hours`);
```

#### Example 7: Search Messages by Content

```typescript
const threadId = 'thread_stu901';

const result = await codebolt.thread.getThreadMessages({
  threadId,
  limit: 200
});

// Search for messages containing specific keywords
const keywords = ['error', 'bug', 'issue'];

const matchingMessages = result.messages.filter(msg => {
  const content = msg.content.toLowerCase();
  return keywords.some(keyword => content.includes(keyword));
});

console.log(`Found ${matchingMessages.length} messages matching keywords`);

matchingMessages.forEach(msg => {
  const timestamp = new Date(msg.timestamp).toLocaleString();
  console.log(`[${timestamp}] ${msg.role}: ${msg.content}`);
});
```

### Common Use Cases

- **Conversation Review**: Read through thread message history
- **Debugging**: Analyze message flow for troubleshooting
- **Content Extraction**: Extract specific information from messages
- **Activity Analysis**: Analyze thread participation and activity
- **Export Data**: Export message history for reporting
- **Context Gathering**: Retrieve context for further processing

### Notes

- Messages are returned in chronological order (oldest to newest)
- Pagination is supported through `limit` and `offset` parameters
- The `total` field indicates the total number of messages in the thread
- `hasMore` indicates if there are more messages beyond the current page
- Each message includes a role (agent, user, system, etc.)
- Message timestamps are in ISO 8601 format
- Large threads may require pagination to retrieve all messages
- Use metadata to store additional context with messages
- Empty message array is returned if thread has no messages
