---
name: getKnowledge
cbbaseinfo:
  description: Retrieves a value from the in-memory database by key. Returns the stored data along with response metadata.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The unique key of the value to retrieve. Supports namespaced keys (e.g., 'user:123', 'config:theme').
  returns:
    signatureTypeName: Promise<MemoryGetResponse>
    description: A promise that resolves with the response containing the retrieved data, response type, and metadata.
    typeArgs:
      - type: reference
        name: MemoryGetResponse
data:
  name: getKnowledge
  category: dbmemory
  link: getKnowledge.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `getKnowledge` function retrieves data from the in-memory database using a unique key. It returns the stored value along with response metadata, and handles non-existent keys gracefully.

## Usage

```javascript
const result = await codebolt.dbmemory.getKnowledge(key);
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="basic" label="Basic Retrieval">

```javascript
// Retrieve user information
const getResult = await codebolt.dbmemory.getKnowledge('user:123');

console.log('Response type:', getResult?.type);
console.log('Data found:', !!getResult?.data);
console.log('User name:', getResult?.data?.name || 'Not found');
console.log('User age:', getResult?.data?.age || 'Not found');

// Output:
// Response type: memoryGetResponse
// Data found: true
// User name: John Doe
// User age: 30
```

</TabItem>
<TabItem value="datatypes" label="Different Data Types">

```javascript
// Retrieve different data types
const theme = await codebolt.dbmemory.getKnowledge('config:theme');
const visits = await codebolt.dbmemory.getKnowledge('counter:visits');
const tags = await codebolt.dbmemory.getKnowledge('tags:project');
const settings = await codebolt.dbmemory.getKnowledge('settings:app');

console.log('Theme:', theme?.data); // 'dark'
console.log('Visits:', visits?.data); // 42
console.log('Tags count:', tags?.data?.length); // 3
console.log('Settings theme:', settings?.data?.theme); // 'dark'
console.log('Auto save enabled:', settings?.data?.features?.autoSave); // true
```

</TabItem>
<TabItem value="session" label="Session Data">

```javascript
// Retrieve session data
const retrievedSession = await codebolt.dbmemory.getKnowledge('session:current');

console.log('Session ID:', retrievedSession?.data?.sessionId);
console.log('User ID:', retrievedSession?.data?.userId);
console.log('Start time set:', !!retrievedSession?.data?.startTime);
console.log('Theme preference:', retrievedSession?.data?.preferences?.theme);

// Output:
// Session ID: sess_1640995200000
// User ID: user:123
// Start time set: true
// Theme preference: dark
```

</TabItem>
<TabItem value="project" label="Project Configuration">

```javascript
// Retrieve project configuration
const retrievedConfig = await codebolt.dbmemory.getKnowledge('project:config');

console.log('Project name:', retrievedConfig?.data?.name);
console.log('Version:', retrievedConfig?.data?.version);
console.log('Dependencies count:', retrievedConfig?.data?.dependencies?.length);
console.log('Auto save enabled:', retrievedConfig?.data?.settings?.autoSave);

// Output:
// Project name: codebolt-test-project
// Version: 1.0.0
// Dependencies count: 1
// Auto save enabled: true
```

</TabItem>
</Tabs>

## Response Format

### Success Response (Data Found)

```javascript
{
  type: 'memoryGetResponse',    // Response type identifier
  data: any                    // The retrieved data (can be any type)
}
```

### Response for Non-Existent Key

```javascript
{
  type: 'memoryGetResponse',    // Response type identifier
  data: null                   // null when key doesn't exist
}
```

## Handling Non-Existent Keys

The function handles missing keys gracefully:

```javascript
const nonExistent = await codebolt.dbmemory.getKnowledge('non:existent:key');

console.log('Response type:', nonExistent?.type); // 'memoryGetResponse'
console.log('Data found:', !!nonExistent?.data); // false
console.log('Data value:', nonExistent?.data); // null

// Safe access with fallback values
const userName = nonExistent?.data?.name || 'Unknown User';
const userAge = nonExistent?.data?.age || 0;
```

## Retrieving Updated Data

After updating data with `addKnowledge`, retrieve the latest version:

```javascript
// Initial data
await codebolt.dbmemory.addKnowledge('user:123', {
  name: 'John Doe',
  age: 30,
  role: 'developer'
});

// Update the data
await codebolt.dbmemory.addKnowledge('user:123', {
  name: 'John Doe',
  age: 31,
  role: 'senior developer',
  lastLogin: new Date().toISOString()
});

// Retrieve updated data
const retrievedUser = await codebolt.dbmemory.getKnowledge('user:123');

console.log('Updated age:', retrievedUser?.data?.age); // 31
console.log('Updated role:', retrievedUser?.data?.role); // 'senior developer'
console.log('Last login set:', !!retrievedUser?.data?.lastLogin); // true
```

## Performance Testing

The function is optimized for fast retrieval:

```javascript
// Performance test - retrieving 10 items
const retrieveStartTime = Date.now();
for (let i = 0; i < 10; i++) {
  await codebolt.dbmemory.getKnowledge(`perf:item:${i}`);
}
const retrieveTime = Date.now() - retrieveStartTime;

console.log(`10 retrieve operations: ${retrieveTime}ms`);
console.log(`Average retrieve time: ${(retrieveTime / 10).toFixed(2)}ms`);
```

## Data Type Handling

The function preserves data types during retrieval:

```javascript
// String
const theme = await codebolt.dbmemory.getKnowledge('config:theme');
console.log(typeof theme?.data); // 'string'

// Number
const visits = await codebolt.dbmemory.getKnowledge('counter:visits');
console.log(typeof visits?.data); // 'number'

// Array
const tags = await codebolt.dbmemory.getKnowledge('tags:project');
console.log(Array.isArray(tags?.data)); // true

// Object
const settings = await codebolt.dbmemory.getKnowledge('settings:app');
console.log(typeof settings?.data); // 'object'
```

## Common Usage Patterns

### Safe Data Access

```javascript
// Using optional chaining and fallback values
const user = await codebolt.dbmemory.getKnowledge('user:123');
const userName = user?.data?.name || 'Anonymous';
const userPreferences = user?.data?.preferences || {};
```

### Checking Data Existence

```javascript
const result = await codebolt.dbmemory.getKnowledge('some:key');
if (result?.data !== null && result?.data !== undefined) {
  console.log('Data exists:', result.data);
} else {
  console.log('No data found for key');
}
```

## Use Cases

- **User Session Retrieval**: Get current user session and preferences
- **Configuration Access**: Retrieve application settings and configurations
- **State Management**: Access stored application state
- **Cache Retrieval**: Get cached data for performance optimization
- **Project Context**: Retrieve project-specific information
- **Temporary Data Access**: Get intermediate processing results

## Integration with addKnowledge

This function works seamlessly with [`addKnowledge`](./addKnowledge.md):

```javascript
// Store data
await codebolt.dbmemory.addKnowledge('user:profile', { name: 'John', role: 'developer' });

// Retrieve data
const profile = await codebolt.dbmemory.getKnowledge('user:profile');
console.log('User role:', profile?.data?.role); // 'developer'
```
