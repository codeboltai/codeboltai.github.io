---
name: getThreadList
cbbaseinfo:
  description: Retrieves a list of threads with optional filtering and pagination capabilities.
cbparameters:
  parameters:
    - name: options
      typeName: GetThreadListOptions
      description: Optional filters including status, agentId, limit, offset, date range, and metadata filters.
  returns:
    signatureTypeName: "Promise<ListThreadsResponse>"
    description: A promise that resolves with an array of threads and pagination metadata.
data:
  name: getThreadList
  category: thread
  link: getThreadList.md
---
# getThreadList

```typescript
codebolt.thread.getThreadList(options: GetThreadListOptions): Promise<ListThreadsResponse>
```

Retrieves a list of threads with optional filtering and pagination capabilities.
### Parameters

- **`options`** (GetThreadListOptions): Optional filters including status, agentId, limit, offset, date range, and metadata filters.

### Returns

- **`Promise<ListThreadsResponse>`**: A promise that resolves with an array of threads and pagination metadata.

### Response Structure

```typescript
interface ListThreadsResponse {
  threads: Array<{
    threadId: string;
    title: string;
    description?: string;
    status: string;
    agentId: string;
    createdAt: string;
    updatedAt: string;
    metadata?: Record<string, any>;
  }>;
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}
```

### Examples

#### Example 1: Get All Threads

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.thread.getThreadList();

console.log(`Total threads: ${result.total}`);
console.log('Threads:', result.threads);
// Output: Total threads: 25
// Output: Threads: [{ threadId: 'thread_001', title: 'Bug Fix', ... }, ...]
```

#### Example 2: Filter by Status

```typescript
// Get only active threads
const activeThreads = await codebolt.thread.getThreadList({
  status: 'active'
});

console.log(`Active threads: ${activeThreads.threads.length}`);
activeThreads.threads.forEach(thread => {
  console.log(`- ${thread.title} (${thread.threadId})`);
});
```

#### Example 3: Filter by Agent

```typescript
// Get threads handled by a specific agent
const agentThreads = await codebolt.thread.getThreadList({
  agentId: 'debugger-agent-001'
});

console.log(`Threads handled by debugger-agent: ${agentThreads.total}`);
agentThreads.threads.forEach(thread => {
  console.log(`${thread.title}: ${thread.status}`);
});
```

#### Example 4: Paginate Through Threads

```typescript
async function getAllThreadsPaginated() {
  let allThreads = [];
  let offset = 0;
  const limit = 20;
  let hasMore = true;

  while (hasMore) {
    const result = await codebolt.thread.getThreadList({
      limit,
      offset
    });

    allThreads = allThreads.concat(result.threads);
    hasMore = result.hasMore;
    offset += limit;

    console.log(`Fetched ${result.threads.length} threads (total: ${allThreads.length})`);
  }

  return allThreads;
}

const threads = await getAllThreadsPaginated();
console.log(`Total threads retrieved: ${threads.length}`);
```

#### Example 5: Filter by Date Range

```typescript
// Get threads created in the last 7 days
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

const recentThreads = await codebolt.thread.getThreadList({
  startDate: sevenDaysAgo.toISOString(),
  endDate: new Date().toISOString(),
  limit: 50
});

console.log(`Threads created in last 7 days: ${recentThreads.total}`);
recentThreads.threads.forEach(thread => {
  console.log(`${thread.title} - Created: ${new Date(thread.createdAt).toLocaleDateString()}`);
});
```

#### Example 6: Filter by Metadata

```typescript
// Get high priority threads
const highPriorityThreads = await codebolt.thread.getThreadList({
  metadata: {
    priority: 'high'
  }
});

console.log('High priority threads:');
highPriorityThreads.threads.forEach(thread => {
  console.log(`- ${thread.title} (${thread.metadata?.bugId || 'N/A'})`);
});

// Get threads for a specific project
const projectThreads = await codebolt.thread.getThreadList({
  metadata: {
    project: 'E-Commerce Platform'
  },
  status: 'active'
});

console.log(`Active threads for E-Commerce Platform: ${projectThreads.total}`);
```

#### Example 7: Complex Filtering with Sorting

```typescript
// Get active threads for a specific project, sorted by creation date
const filteredThreads = await codebolt.thread.getThreadList({
  status: 'active',
  agentId: 'developer-agent',
  metadata: {
    project: 'User Management',
    sprint: 'Sprint-23'
  },
  sortBy: 'createdAt',
  sortOrder: 'desc',
  limit: 10
});

console.log('Recent active threads:');
filteredThreads.threads.forEach((thread, index) => {
  console.log(`${index + 1}. ${thread.title}`);
  console.log(`   Created: ${new Date(thread.createdAt).toLocaleString()}`);
  console.log(`   Status: ${thread.status}`);
});
```

#### Example 8: Search Threads by Title

```typescript
// Search for threads containing "bug" in the title
const searchResults = await codebolt.thread.getThreadList({
  search: 'bug',
  limit: 20
});

console.log(`Found ${searchResults.total} threads matching "bug":`);
searchResults.threads.forEach(thread => {
  console.log(`- ${thread.title} (${thread.status})`);
});
```

### Common Use Cases

- **Dashboard Views**: Display lists of threads in various states
- **Thread Discovery**: Find threads matching specific criteria
- **Workload Management**: View threads assigned to specific agents
- **Audit Trails**: Retrieve historical thread data
- **Batch Processing**: Process multiple threads in bulk
- **Reporting**: Generate reports on thread activity

### Notes

- Pagination is supported through `limit` and `offset` parameters
- All filters are optional and can be combined
- The `total` field indicates the total number of matching threads
- `hasMore` indicates if there are more threads beyond the current page
- Use metadata filters for custom categorization and retrieval
- Search performs a case-insensitive search on thread titles and descriptions
- Date filters accept ISO 8601 formatted strings
- Empty options object `{}` returns all threads (paginated)