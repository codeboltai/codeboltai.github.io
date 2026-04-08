---
title: KV Store MCP
sidebar_label: codebolt.kvStore
sidebar_position: 57
---

# codebolt.kvStore

Key-value store management tools for creating, reading, and writing to isolated key-value storage instances. Useful for persisting state, configuration, or caching data.

## Available Tools

- `kvStore_createInstance` - Creates a new KV store instance with name and optional description
- `kvStore_get` - Retrieves a value from a KV store by key
- `kvStore_set` - Sets a key-value pair in a KV store instance

## Tool Parameters

### kvStore_createInstance

Creates a new isolated key-value store instance for storing and managing data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The unique name identifier for the KV store instance. This name will be used to reference the instance in all subsequent operations. |
| `description` | string | No | An optional human-readable description of what this KV store instance is used for (e.g., "User session data", "Configuration cache"). |
| `explanation` | string | No | Optional explanation or context about why this instance is being created, useful for logging and debugging purposes. |

### kvStore_get

Retrieves a stored value from a specific KV store instance using a namespace and key.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instanceId` | string | Yes | The unique identifier of the KV store instance to retrieve from. This is typically the name provided when creating the instance. |
| `namespace` | string | Yes | The namespace within the instance where the key is stored. Namespaces help organize keys within an instance (e.g., "user", "config", "cache"). |
| `key` | string | Yes | The specific key whose value you want to retrieve. The key must exist in the specified namespace and instance. |
| `explanation` | string | No | Optional explanation or context for this retrieval operation, useful for logging and debugging purposes. |

### kvStore_set

Stores or updates a key-value pair in a specific KV store instance within a namespace.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instanceId` | string | Yes | The unique identifier of the KV store instance to store data in. This is typically the name provided when creating the instance. |
| `namespace` | string | Yes | The namespace within the instance where the key-value pair should be stored. Namespaces help organize keys within an instance (e.g., "user", "config", "cache"). |
| `key` | string | Yes | The key under which to store the value. Keys are unique within a namespace; setting a key that already exists will overwrite its value. |
| `value` | any | Yes | The value to store. Can be any JSON-serializable data type including strings, numbers, booleans, objects, or arrays. |
| `autoCreateInstance` | boolean | No | If set to true, automatically creates the KV store instance if it doesn't exist. Default is false. When false, attempting to set a value in a non-existent instance will fail. |
| `explanation` | string | No | Optional explanation or context for this storage operation, useful for logging and debugging purposes. |

## Sample Usage

### Creating a KV Store Instance

```javascript
// Create a new KV store instance for user session data
const result = await codebolt.kvStore.createInstance({
    name: 'user_sessions',
    description: 'Stores active user session information'
});
```

### Setting Values with Namespaces

```javascript
// Store user preferences in the 'user_sessions' instance
await codebolt.kvStore.set({
    instanceId: 'user_sessions',
    namespace: 'preferences',
    key: 'theme',
    value: 'dark'
});

// Store configuration data with auto-create enabled
await codebolt.kvStore.set({
    instanceId: 'app_config',
    namespace: 'ui',
    key: 'language',
    value: 'en-US',
    autoCreateInstance: true
});

// Store complex objects
await codebolt.kvStore.set({
    instanceId: 'user_sessions',
    namespace: 'profile',
    key: 'user123',
    value: {
        name: 'John Doe',
        email: 'john@example.com',
        lastLogin: new Date().toISOString()
    }
});
```

### Retrieving Values

```javascript
// Retrieve the theme preference
const themeResult = await codebolt.kvStore.get({
    instanceId: 'user_sessions',
    namespace: 'preferences',
    key: 'theme'
});

console.log(themeResult.value); // Output: 'dark'

// Retrieve complex user profile data
const profileResult = await codebolt.kvStore.get({
    instanceId: 'user_sessions',
    namespace: 'profile',
    key: 'user123'
});

console.log(profileResult.value);
// Output: { name: 'John Doe', email: 'john@example.com', lastLogin: '...' }
```

### Complete Workflow Example

```javascript
// 1. Create instance
await codebolt.kvStore.createInstance({
    name: 'analytics_cache',
    description: 'Caches analytics data to reduce API calls'
});

// 2. Store cached analytics data
await codebolt.kvStore.set({
    instanceId: 'analytics_cache',
    namespace: 'daily',
    key: '2024-01-24',
    value: {
        pageViews: 12500,
        uniqueVisitors: 8300,
        bounceRate: 0.42
    }
});

// 3. Retrieve cached data
const cachedData = await codebolt.kvStore.get({
    instanceId: 'analytics_cache',
    namespace: 'daily',
    key: '2024-01-24'
});

console.log('Cached analytics:', cachedData.value);
```

:::info
**Important Notes:**

- **Instance Isolation**: Each KV store instance is completely isolated from others. Data stored in one instance cannot be accessed from another instance.

- **Namespace Organization**: Namespaces provide an additional level of organization within instances, allowing you to group related keys together (e.g., separating user data, configuration, and cache).

- **Key Uniqueness**: Keys are unique within a namespace. Setting a value for a key that already exists will overwrite the previous value.

- **Value Serialization**: All values are stored as JSON. When retrieving values, they are returned as parsed JSON objects/arrays/strings.

- **Auto-Create Behavior**: The `autoCreateInstance` parameter in `kvStore_set` can be used to automatically create instances if they don't exist, eliminating the need to explicitly call `kvStore_createInstance` in some scenarios.

- **Error Handling**: All operations return structured responses with success/error information. Failed operations include detailed error messages to help diagnose issues.
:::