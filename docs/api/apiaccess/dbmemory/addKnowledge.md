---
name: addKnowledge
cbbaseinfo:
  description: Adds a key-value pair to the in-memory database. Supports storing various data types including strings, numbers, objects, and arrays.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The unique key under which to store the value. Supports namespaced keys (e.g., 'user:123', 'config:theme').
    - name: value
      typeName: any
      description: The value to be stored. Can be string, number, boolean, object, array, null, or undefined.
  returns:
    signatureTypeName: Promise<MemorySetResponse>
    description: A promise that resolves with a `MemorySetResponse` object containing the response type and operation metadata.
data:
  name: addKnowledge
  category: dbmemory
  link: addKnowledge.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `MemorySetResponse` object with the following properties:

- **`type`** (string): Always "memorySetResponse".
- **`key`** (string, optional): The key that was used to store the value.
- **`value`** (any, optional): The value that was stored.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Store user information
const result = await codebolt.dbmemory.addKnowledge('user:123', { 
  name: 'John Doe', 
  age: 30,
  role: 'developer'
});
console.log("Response type:", result.type); // "memorySetResponse"
console.log("Key stored:", result.key); // "user:123"
console.log("Success:", result.success); // true (if successful)

// Example 2: Store configuration setting
const configResult = await codebolt.dbmemory.addKnowledge('config:theme', 'dark');
console.log("Theme stored:", configResult.type); // "memorySetResponse"

// Example 3: Store array data
const tagsResult = await codebolt.dbmemory.addKnowledge('tags:project', ['javascript', 'nodejs', 'codebolt']);
console.log("Tags stored:", tagsResult.type); // "memorySetResponse"

// Example 4: Store complex object with error handling
try {
  const sessionResult = await codebolt.dbmemory.addKnowledge('session:current', {
    sessionId: 'sess_' + Date.now(),
    userId: 'user:123',
    startTime: new Date().toISOString(),
    preferences: {
      theme: 'dark',
      language: 'en'
    }
  });
  
  if (sessionResult.success) {
    console.log("Session data stored successfully");
  } else {
    console.error("Failed to store session data:", sessionResult.error);
  }
} catch (error) {
  console.error("Error storing session data:", error);
}
```

### Notes

- The function stores data in an in-memory database using a key-value structure.
- All JavaScript data types are supported (strings, numbers, booleans, objects, arrays, null, undefined).
- Use namespaced keys for better organization (e.g., 'user:123', 'config:theme').
- The response includes the stored key and value for verification.
- If the operation fails, check the `error` property for details.
- The function can be used for caching user data, configuration settings, session information, and project state.

## Description

The `addKnowledge` function stores data in an in-memory database using a key-value structure. It supports all JavaScript data types and can be used for caching user data, configuration settings, session information, and project state.

## Usage

```javascript
const result = await codebolt.dbmemory.addKnowledge(key, value);
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="basic" label="Basic Usage">

```javascript
// Store user information
const setResult = await codebolt.dbmemory.addKnowledge('user:123', { 
  name: 'John Doe', 
  age: 30,
  role: 'developer'
});

console.log('Response type:', setResult?.type);
console.log('Success:', !!setResult?.success);
console.log('Key stored: user:123');
```

</TabItem>
<TabItem value="datatypes" label="Different Data Types">

```javascript
// String value
await codebolt.dbmemory.addKnowledge('config:theme', 'dark');

// Number value
await codebolt.dbmemory.addKnowledge('counter:visits', 42);

// Array value
await codebolt.dbmemory.addKnowledge('tags:project', ['javascript', 'nodejs', 'codebolt']);

// Complex object
await codebolt.dbmemory.addKnowledge('settings:app', {
  theme: 'dark',
  language: 'en',
  notifications: true,
  features: {
    autoSave: true,
    darkMode: true
  }
});

console.log('✅ Different data types stored successfully');
```

</TabItem>
<TabItem value="session" label="Session Data">

```javascript
// Store session data
const sessionData = {
  sessionId: 'sess_' + Date.now(),
  userId: 'user:123',
  startTime: new Date().toISOString(),
  preferences: {
    theme: 'dark',
    language: 'en'
  },
  activity: []
};

await codebolt.dbmemory.addKnowledge('session:current', sessionData);
console.log('✅ Session data stored successfully');
```

</TabItem>
<TabItem value="project" label="Project Configuration">

```javascript
// Store project configuration
const projectConfig = {
  name: 'codebolt-test-project',
  version: '1.0.0',
  dependencies: ['@codebolt/codeboltjs'],
  scripts: {
    test: 'node tests/dbmemory-test.js',
    start: 'node index.js'
  },
  settings: {
    autoSave: true,
    linting: true,
    formatting: 'prettier'
  }
};

await codebolt.dbmemory.addKnowledge('project:config', projectConfig);
console.log('✅ Project configuration stored successfully');
```

</TabItem>
</Tabs>

## Updating Existing Data

You can update existing keys by calling `addKnowledge` again with the same key:

```javascript
// Initial data
await codebolt.dbmemory.addKnowledge('user:123', {
  name: 'John Doe',
  age: 30,
  role: 'developer'
});

// Update the data
const updatedUser = {
  name: 'John Doe',
  age: 31, // Updated age
  role: 'senior developer', // Updated role
  lastLogin: new Date().toISOString()
};

await codebolt.dbmemory.addKnowledge('user:123', updatedUser);
console.log('✅ Knowledge updated successfully');
```

## Key Naming Conventions

Use namespaced keys for better organization:

- **User data**: `user:123`, `user:profile:456`
- **Configuration**: `config:theme`, `config:language`
- **Session data**: `session:current`, `session:123`
- **Project data**: `project:config`, `project:state`
- **Counters**: `counter:visits`, `counter:errors`
- **Tags/Categories**: `tags:project`, `categories:blog`

## Supported Data Types

- **Strings**: `'hello world'`, `'dark'`
- **Numbers**: `42`, `3.14`
- **Booleans**: `true`, `false`
- **Objects**: `{ key: 'value' }`
- **Arrays**: `[1, 2, 3]`, `['a', 'b', 'c']`
- **Null**: `null`
- **Undefined**: `undefined`

## Error Handling

The function handles various data types gracefully:

```javascript
// These operations are all valid
await codebolt.dbmemory.addKnowledge('test:undefined', undefined);
await codebolt.dbmemory.addKnowledge('test:null', null);
await codebolt.dbmemory.addKnowledge('test:empty', '');
```

## Performance

The function is optimized for performance:

```javascript
// Performance test - storing 10 items
const startTime = Date.now();
for (let i = 0; i < 10; i++) {
  await codebolt.dbmemory.addKnowledge(`perf:item:${i}`, {
    id: i,
    value: `test value ${i}`,
    timestamp: Date.now()
  });
}
const storeTime = Date.now() - startTime;
console.log(`10 store operations: ${storeTime}ms`);
console.log(`Average store time: ${(storeTime / 10).toFixed(2)}ms`);
```

## Use Cases

- **User Session Management**: Store user preferences and session data
- **Configuration Storage**: Cache application settings and configurations
- **Temporary Data**: Store intermediate processing results
- **State Management**: Maintain application state across operations
- **Caching**: Cache frequently accessed data for performance
- **Project Context**: Store project-specific information and metadata