---
name: listThreads
cbbaseinfo:
  description: Lists all mail threads with optional filtering and pagination.
cbparameters:
  parameters:
    - name: params
      typeName: IListThreadsParams
      description: Optional filters including type, status, participant, search, limit, and offset.
  returns:
    signatureTypeName: "Promise<IListThreadsResponse>"
    description: A promise that resolves with an array of threads and total count.
data:
  name: listThreads
  category: mail
  link: listThreads.md
---
# listThreads

```typescript
codebolt.mail.listThreads(params: IListThreadsParams): Promise<IListThreadsResponse>
```

Lists all mail threads with optional filtering and pagination.
### Parameters

- **`params`** (IListThreadsParams): Optional filters including type, status, participant, search, limit, and offset.

### Returns

- **`Promise<IListThreadsResponse>`**: A promise that resolves with an array of threads and total count.

### Response Structure

```typescript
interface IListThreadsResponse {
  success: boolean;
  threads?: Array<{
    id: string;
    subject: string;
    participants: string[];
    type: string;
    status: string;
    createdAt: string;
  }>;
  total?: number;
  error?: string;
}
```

### Examples

#### Example 1: List All Threads

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.listThreads();

console.log(`Total threads: ${result.total}`);
result.threads.forEach(thread => {
  console.log(`- ${thread.subject} (${thread.status})`);
});
```

#### Example 2: Filter by Status and Type

```typescript
const result = await codebolt.mail.listThreads({
  type: 'agent-to-agent',
  status: 'open',
  limit: 20
});

console.log('Open agent-to-agent threads:');
result.threads.forEach(thread => {
  console.log(`- ${thread.subject}`);
});
```

### Common Use Cases

- **Thread Discovery**: Find relevant conversations
- **Status Tracking**: Monitor open/closed threads
- **Dashboard Display**: Show thread lists in UI

### Notes

- Supports filtering by type, status, and participant
- Pagination supported via limit and offset
- Search performs case-insensitive text search
