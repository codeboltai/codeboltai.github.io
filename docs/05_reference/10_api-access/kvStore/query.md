---
name: query
cbbaseinfo:
  description: Queries the KV store using a flexible DSL to filter, sort, and paginate records.
cbparameters:
  parameters:
    - name: query
      type: KVQueryDSL
      required: true
      description: A query DSL object defining the query parameters including from, where, select, orderBy, limit, and offset.
  returns:
    signatureTypeName: "Promise<KVQueryResponse>"
    description: A promise that resolves with matching records and pagination metadata.
data:
  name: query
  category: kvStore
  link: query.md
---
# query

```typescript
codebolt.kvStore.query(query: undefined): Promise<KVQueryResponse>
```

Queries the KV store using a flexible DSL to filter, sort, and paginate records.
### Parameters

- **`query`** (unknown): A query DSL object defining the query parameters including from, where, select, orderBy, limit, and offset.

### Returns

- **`Promise<[KVQueryResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVQueryResponse)>`**: A promise that resolves with matching records and pagination metadata.

### Response Structure

The method returns a Promise that resolves to a [`KVQueryResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVQueryResponse) object:

```typescript
{
  type: 'kvStore.query',
  success: boolean,
  data?: {
    result: {
      records: Array<{
        id: string;
        instanceId: string;
        namespace: string;
        key: string;
        value: any;
        createdAt: string;
        updatedAt: string;
      }>;
      total: number;           // Total matching records
      limit?: number;          // Applied limit
      offset?: number;         // Applied offset
    }
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Query DSL Structure

```typescript
{
  from: {
    instance: string;         // Required: instance ID
    namespace?: string;       // Optional: filter by namespace
  };
  where?: Array<{             // Optional: filter conditions
    field: string;            // Field to query (key, value.field, createdAt, etc.)
    operator: string;         // Comparison operator
    value: any;               // Value to compare
  }>;
  select?: string[];          // Optional: fields to return
  orderBy?: {                 // Optional: sort order
    field: string;
    direction: 'asc' | 'desc';
  };
  limit?: number;             // Optional: max records
  offset?: number;            // Optional: records to skip
}
```

### Examples

#### Example 1: Simple Query - Get All Records in Namespace

Retrieve all records from a namespace:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'users'
  }
});

if (result.success) {
  console.log(`Found ${result.data.result.total} users`);
  result.data.result.records.forEach(record => {
    console.log(`- ${record.key}: ${record.value.name}`);
  });
}
```

#### Example 2: Filter by Value Field

Query records where a value field matches a condition:

```javascript
const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'users'
  },
  where: [
    { field: 'value.status', operator: 'eq', value: 'active' }
  ]
});

console.log('Active users:', result.data.result.records);
```

#### Example 3: Multiple Conditions with AND Logic

Find users who are active and have logged in recently:

```javascript
const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);

const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'users'
  },
  where: [
    { field: 'value.status', operator: 'eq', value: 'active' },
    { field: 'value.lastLogin', operator: 'gte', value: oneDayAgo }
  ],
  orderBy: {
    field: 'value.lastLogin',
    direction: 'desc'
  }
});

console.log('Recently active users:', result.data.result.records);
```

#### Example 4: Pagination with Limit and Offset

Implement pagination for large result sets:

```javascript
async function getPaginatedResults(instanceId, namespace, page = 1, pageSize = 10) {
  const offset = (page - 1) * pageSize;

  const result = await codebolt.kvStore.query({
    from: { instance: instanceId, namespace },
    limit: pageSize,
    offset: offset,
    orderBy: {
      field: 'createdAt',
      direction: 'desc'
    }
  });

  if (!result.success) {
    return { records: [], total: 0, page, pageSize, totalPages: 0 };
  }

  const { records, total } = result.data.result;
  const totalPages = Math.ceil(total / pageSize);

  return {
    records,
    total,
    page,
    pageSize,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}

// Usage
const page1 = await getPaginatedResults('kv-instance-id', 'users', 1, 20);
console.log(`Page 1 of ${page1.totalPages}: ${page1.records.length} records`);
```

#### Example 5: Search by Key Pattern

Find keys containing a specific string:

```javascript
const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'cache'
  },
  where: [
    { field: 'key', operator: 'contains', value: 'user-' }
  ]
});

console.log(`Found ${result.data.result.total} keys matching 'user-'`);
```

#### Example 6: Complex Query with Multiple Operators

Find high-priority tasks that are not completed:

```javascript
const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'tasks'
  },
  where: [
    { field: 'value.priority', operator: 'gte', value: 8 },
    { field: 'value.status', operator: 'neq', value: 'completed' },
    { field: 'value.dueDate', operator: 'lte', value: Date.now() }
  ],
  orderBy: [
    { field: 'value.priority', direction: 'desc' },
    { field: 'value.createdAt', direction: 'asc' }
  ],
  limit: 50
});

console.log('High-priority overdue tasks:', result.data.result.records);
```

#### Example 7: Date Range Query

Find records created within a date range:

```javascript
const startDate = new Date('2024-01-01').getTime();
const endDate = new Date('2024-01-31').getTime();

const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'logs'
  },
  where: [
    { field: 'createdAt', operator: 'gte', value: startDate },
    { field: 'createdAt', operator: 'lte', value: endDate }
  ],
  orderBy: {
    field: 'createdAt',
    direction: 'asc'
  }
});

console.log(`Logs from January 2024: ${result.data.result.total} records`);
```

#### Example 8: Select Specific Fields

Retrieve only specific fields to reduce payload size:

```javascript
const result = await codebolt.kvStore.query({
  from: {
    instance: 'kv-instance-id',
    namespace: 'users'
  },
  where: [
    { field: 'value.role', operator: 'eq', value: 'admin' }
  ],
  select: ['key', 'value.name', 'value.email'],
  limit: 100
});

result.data.result.records.forEach(record => {
  console.log(`Admin: ${record.value.name} (${record.value.email})`);
});
```

### Common Use Cases

**Data Filtering**: Find records matching specific criteria.

**Search Operations**: Implement search functionality for stored data.

**Reporting**: Generate reports by filtering and aggregating data.

**Pagination**: Implement paginated views of large datasets.

**Sorting**: Order results by specific fields (date, priority, name, etc.).

**Data Export**: Extract specific subsets of data for analysis.

**Monitoring**: Query for error logs, metrics, or status information.

**Cleanup**: Find and delete old or stale data.

### Supported Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `eq` | Equal to | `{ field: 'value.status', operator: 'eq', value: 'active' }` |
| `neq` | Not equal to | `{ field: 'value.status', operator: 'neq', value: 'deleted' }` |
| `gt` | Greater than | `{ field: 'value.count', operator: 'gt', value: 10 }` |
| `gte` | Greater than or equal | `{ field: 'value.score', operator: 'gte', value: 100 }` |
| `lt` | Less than | `{ field: 'value.age', operator: 'lt', value: 18 }` |
| `lte` | Less than or equal | `{ field: 'value.price', operator: 'lte', value: 99.99 }` |
| `contains` | Contains substring | `{ field: 'value.name', operator: 'contains', value: 'test' }` |
| `startsWith` | Starts with | `{ field: 'value.email', operator: 'startsWith', value: 'admin' }` |
| `endsWith` | Ends with | `{ field: 'value.domain', operator: 'endsWith', value: '.com' }` |

### Notes

- Queries are case-sensitive for string comparisons
- Multiple where conditions are combined with AND logic
- Use `limit` to control the maximum number of records returned
- Use `offset` for pagination (skip N records)
- Field paths use dot notation (e.g., `value.user.name`)
- The `total` field represents the total matching records, not just returned records
- For very large result sets, consider using smaller limits with pagination
- Indexes may be automatically created for frequently queried fields
- Complex queries with multiple conditions may have performance implications
- Use `select` to reduce payload size for large values
