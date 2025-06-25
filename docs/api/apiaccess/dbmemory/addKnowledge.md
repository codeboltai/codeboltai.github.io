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
    description: A promise that resolves with the response from the memory set operation including success status and type.
    typeArgs:
      - type: reference
        name: MemorySetResponse
data:
  name: addKnowledge
  category: dbmemory
  link: addKnowledge.md
---
<CBBaseInfo/> 
<CBParameters/>

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

## Response Format

```javascript
{
  type: 'string',        // Response type identifier
  success: boolean       // Indicates if the operation was successful
}
```

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