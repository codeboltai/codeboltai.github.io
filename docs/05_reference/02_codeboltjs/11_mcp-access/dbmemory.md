---
title: DB Memory MCP
sidebar_label: codebolt.dbmemory
sidebar_position: 58
---

# codebolt.dbmemory

Database memory tools for storing and retrieving structured knowledge in a database format. Provides persistent key-value storage with JSON support for complex data structures.

## Available Tools

- `dbmemory_add_knowledge` - Adds a knowledge entry to the database with key and value
- `dbmemory_get_knowledge` - Retrieves a knowledge entry from the database by key

## Tool Parameters

### dbmemory_add_knowledge

Adds a knowledge entry to the database with key and value.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | Unique identifier for the knowledge entry. Used to retrieve the value later. |
| value | any | Yes | The data to store in the database. Can be a primitive value, object, array, or any JSON-serializable data structure. |
| explanation | string | No | Additional context or description about the knowledge entry. Useful for documentation purposes. |

### dbmemory_get_knowledge

Retrieves a knowledge entry from the database by key.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | The unique identifier of the knowledge entry to retrieve. |
| explanation | string | No | Additional context about the retrieval operation. |

## Sample Usage

```javascript
// Store a simple string value
await codebolt.dbmemory.addKnowledge({
  key: "project_name",
  value: "My Awesome Project"
});

// Store a complex object with project configuration
await codebolt.dbmemory.addKnowledge({
  key: "project_config",
  value: {
    name: "My Project",
    version: "1.0.0",
    dependencies: {
      react: "^18.0.0",
      typescript: "^5.0.0"
    },
    settings: {
      debug: true,
      maxRetries: 3
    }
  }
});

// Store an array of user data
await codebolt.dbmemory.addKnowledge({
  key: "users",
  value: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "developer" },
    { id: 3, name: "Charlie", role: "designer" }
  ]
});

// Retrieve stored knowledge
const projectName = await codebolt.dbmemory.getKnowledge({
  key: "project_name"
});
console.log(projectName); // "My Awesome Project"

const projectConfig = await codebolt.dbmemory.getKnowledge({
  key: "project_config"
});
console.log(projectConfig);
// {
//   name: "My Project",
//   version: "1.0.0",
//   dependencies: { react: "^18.0.0", typescript: "^5.0.0" },
//   settings: { debug: true, maxRetries: 3 }
// }
```

:::info
- **Data Persistence**: All data stored using dbmemory is persisted to a database and remains available across sessions.
- **JSON Support**: The value parameter accepts any JSON-serializable data, including nested objects, arrays, and primitive types.
- **Key Uniqueness**: Each key in the database must be unique. Adding a value with an existing key will overwrite the previous value.
- **Type Preservation**: Objects and arrays are automatically JSON-parsed when retrieved, maintaining their original structure.
:::
