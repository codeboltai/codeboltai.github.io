---
cbapicategory:
  - name: createInstance
    link: /docs/api/apiaccess/kvstore/createInstance
    description: "Creates a new KV store instance for storing key-value data."
  - name: getInstance
    link: /docs/api/apiaccess/kvstore/getInstance
    description: Gets details of a specific KV store instance.
  - name: listInstances
    link: /docs/api/apiaccess/kvstore/listInstances
    description: Lists all available KV store instances.
  - name: updateInstance
    link: /docs/api/apiaccess/kvstore/updateInstance
    description: Updates the name or description of a KV store instance.
  - name: deleteInstance
    link: /docs/api/apiaccess/kvstore/deleteInstance
    description: Deletes a KV store instance and all its data.
  - name: get
    link: /docs/api/apiaccess/kvstore/get
    description: Retrieves a value from the KV store by key.
  - name: set
    link: /docs/api/apiaccess/kvstore/set
    description: Stores a value in the KV store with a specified key.
  - name: delete
    link: /docs/api/apiaccess/kvstore/delete
    description: "Deletes a specific key-value pair from the KV store."
  - name: deleteNamespace
    link: /docs/api/apiaccess/kvstore/deleteNamespace
    description: "Deletes all key-value pairs in a namespace."
  - name: query
    link: /docs/api/apiaccess/kvstore/query
    description: Queries the KV store using a flexible DSL.
  - name: getNamespaces
    link: /docs/api/apiaccess/kvstore/getNamespaces
    description: Lists all namespaces in a KV store instance.
  - name: getRecordCount
    link: /docs/api/apiaccess/kvstore/getRecordCount
    description: Gets the total number of records in an instance or namespace.

---
# KV Store API

The KV Store API provides a persistent key-value storage solution for agent state management. It allows you to store, retrieve, and query structured data with support for namespaces and advanced querying capabilities.

## Overview

The KV Store module enables you to:
- **Store Data**: Persist arbitrary JSON-serializable values
- **Organize**: Use namespaces to group related data
- **Query**: Search and filter records using a powerful DSL
- **Manage**: Create, update, and delete storage instances

## Key Concepts

### Instances
A KV store instance is an isolated storage container with its own set of namespaces and records. Each instance has a unique ID and can be configured independently.

### Namespaces
Namespaces provide a way to group related key-value pairs within an instance. For example, you might use different namespaces for different users, sessions, or data types.

### Records
Each record in the KV store consists of:
- **instanceId**: The ID of the storage instance
- **namespace**: The namespace grouping
- **key**: The unique key within the namespace
- **value**: Any JSON-serializable value
- **timestamps**: Creation and update timestamps

## Quick Start Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a new KV store instance
const instance = await codebolt.kvStore.createInstance(
  'user-sessions',
  'Stores active user session data'
);
console.log('Created instance:', instance.data.instance.id);

// Store a value
await codebolt.kvStore.set(
  instance.data.instance.id,
  'sessions',
  'user-123',
  { loggedIn: true, lastActive: Date.now() }
);

// Retrieve the value
const result = await codebolt.kvStore.get(
  instance.data.instance.id,
  'sessions',
  'user-123'
);
console.log('User session:', result.data.value);

// Query for all records in a namespace
const queryResult = await codebolt.kvStore.query({
  from: { instance: instance.data.instance.id, namespace: 'sessions' }
});
console.log('All sessions:', queryResult.data.result.records);
```

## Response Structure

All KV Store API functions return responses with a consistent structure:

```javascript
{
  type: 'kvStore.operationName',
  success: true,
  data: {
    // Operation-specific data
  },
  message: 'Optional message',
  error: 'Error details if failed',
  timestamp: '2024-01-19T10:00:00Z',
  requestId: 'unique-request-id'
}
```

## Common Use Cases

### Agent State Persistence
Store agent state between executions:
```javascript
// Save agent state
await codebolt.kvStore.set(
  instanceId,
  'agent-state',
  'agent-1',
  { step: 5, context: { userId: '123' } }
);

// Load agent state
const state = await codebolt.kvStore.get(instanceId, 'agent-state', 'agent-1');
```

### Configuration Storage
Store configuration settings:
```javascript
await codebolt.kvStore.set(
  instanceId,
  'config',
  'app-settings',
  { theme: 'dark', language: 'en' }
);
```

### Caching
Cache expensive computation results:
```javascript
const cacheKey = `calc-${inputs.hash}`;
const cached = await codebolt.kvStore.get(instanceId, 'cache', cacheKey);

if (cached.data.exists) {
  return cached.data.value;
}

const result = await expensiveCalculation();
await codebolt.kvStore.set(instanceId, 'cache', cacheKey, result);
```

### Session Management
Manage user sessions:
```javascript
// Create session
await codebolt.kvStore.set(
  instanceId,
  'sessions',
  sessionId,
  { userId, createdAt: Date.now() }
);

// Get active sessions
const active = await codebolt.kvStore.query({
  from: { instance: instanceId, namespace: 'sessions' },
  where: [{ field: 'value.createdAt', operator: 'gte', value: Date.now() - 3600000 }]
});
```

## Query DSL Reference

The query DSL provides powerful filtering and sorting capabilities:

```javascript
const query = {
  from: {
    instance: 'instance-id',      // Required: instance ID
    namespace: 'optional-namespace' // Optional: filter by namespace
  },
  where: [                          // Optional: filter conditions
    {
      field: 'value.someField',     // Field to filter on
      operator: 'eq',               // Comparison operator
      value: 'expected-value'       // Value to compare against
    }
  ],
  select: ['key', 'value'],         // Optional: fields to return
  orderBy: {                        // Optional: sort order
    field: 'createdAt',
    direction: 'desc'
  },
  limit: 10,                        // Optional: max records to return
  offset: 0                         // Optional: records to skip
};
```

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

## Notes and Best Practices

### Instance Management
- Use descriptive instance names to organize data by purpose
- Create separate instances for different environments (dev, staging, prod)
- Delete instances that are no longer needed to free up storage

### Namespace Organization
- Use meaningful namespace names that reflect your data structure
- Consider using user IDs, session IDs, or feature names as namespaces
- Keep related data in the same namespace for easier querying

### Key Design
- Use unique, descriptive keys within namespaces
- Consider using composite keys for complex data (e.g., `user:123:profile`)
- Avoid using special characters that might need escaping

### Performance Considerations
- Use queries instead of multiple get operations when fetching multiple records
- Use `select` to limit returned fields for large values
- Set appropriate `limit` values on queries to avoid fetching too much data

### Error Handling
- Always check the `success` field of responses
- Handle cases where keys don't exist (`exists: false` in get responses)
- Use try-catch blocks when performing critical operations

<CBAPICategory />
