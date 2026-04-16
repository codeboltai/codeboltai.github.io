---
name: createSwarm
cbbaseinfo:
  description: "Creates a new swarm for multi-agent coordination and task management."
cbparameters:
  parameters:
    - name: data
      typeName: CreateSwarmRequest
      description: Configuration object for the new swarm.
      nested:
        - name: name
          typeName: string
          description: "The name of the swarm (required)."
        - name: description
          typeName: "string | undefined"
          description: "Optional description of the swarm's purpose."
        - name: allowExternalAgents
          typeName: "boolean | undefined"
          description: Whether to allow external agents to join this swarm.
        - name: maxAgents
          typeName: "number | undefined"
          description: Maximum number of agents allowed in the swarm.
  returns:
    signatureTypeName: "Promise<CreateSwarmResponse>"
    description: A promise that resolves to the created swarm details.
    typeArgs: []
data:
  name: createSwarm
  category: swarm
  link: createSwarm.md
---
# createSwarm

```typescript
codebolt.swarm.createSwarm(data: CreateSwarmRequest): Promise<CreateSwarmResponse>
```

Creates a new swarm for multi-agent coordination and task management.
### Parameters

- **`data`** ([CreateSwarmRequest](/docs/reference/type-reference/codeboltjs/interfaces/CreateSwarmRequest)): Configuration object for the new swarm.

### Returns

- **`Promise<[CreateSwarmResponse](/docs/reference/type-reference/codeboltjs/interfaces/CreateSwarmResponse)>`**: A promise that resolves to the created swarm details.

### Examples

#### Basic Swarm Creation

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a simple swarm
const swarm = await codebolt.swarm.createSwarm({
    name: 'Task Force Alpha'
});

if (swarm.success) {
    console.log('✅ Swarm created:', swarm.data.swarm);
    console.log('Swarm ID:', swarm.data.swarm.id);
} else {
    console.error('❌ Failed to create swarm:', swarm.error);
}
```

#### Swarm with Full Configuration

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create a fully configured swarm
const swarm = await codebolt.swarm.createSwarm({
    name: 'Development Team',
    description: 'A swarm for coordinating software development tasks',
    allowExternalAgents: false,
    maxAgents: 20
});

console.log('Swarm Configuration:');
console.log('- ID:', swarm.data.swarm.id);
console.log('- Name:', swarm.data.swarm.name);
console.log('- Description:', swarm.data.swarm.description);
console.log('- Created At:', swarm.data.swarm.createdAt);
```

#### Creating Multiple Specialized Swarms

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create multiple swarms for different purposes
const swarms = [
    {
        name: 'Research Team',
        description: 'Handles research and analysis tasks',
        allowExternalAgents: true,
        maxAgents: 15
    },
    {
        name: 'Development Team',
        description: 'Manages development and deployment',
        allowExternalAgents: false,
        maxAgents: 25
    },
    {
        name: 'QA Team',
        description: 'Quality assurance and testing',
        allowExternalAgents: false,
        maxAgents: 10
    }
];

for (const config of swarms) {
    const swarm = await codebolt.swarm.createSwarm(config);
    console.log(`✅ Created ${config.name}:`, swarm.data.swarm.id);
}
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

try {
    const swarm = await codebolt.swarm.createSwarm({
        name: 'Test Swarm',
        maxAgents: -1 // Invalid configuration
    });

    if (!swarm.success) {
        console.error('Creation failed:', swarm.error.message);
        // Handle specific error cases
        if (swarm.error.code === 'INVALID_CONFIG') {
            console.log('Please check your configuration parameters');
        }
    }
} catch (error) {
    console.error('Unexpected error:', error);
}
```

#### Creating Swarm with Metadata

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const swarm = await codebolt.swarm.createSwarm({
    name: 'Project Phoenix',
    description: 'Swarm for Phoenix project development',
    allowExternalAgents: true,
    maxAgents: 50,
    metadata: {
        project: 'Phoenix',
        department: 'Engineering',
        budget: '100000',
        priority: 'high',
        startDate: '2024-01-01'
    }
});

console.log('Swarm created with metadata:', swarm.data.swarm.metadata);
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        swarm: {
            id: string,
            name: string,
            description?: string,
            createdAt: string,
            metadata?: Record<string, any>
        }
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Project Organization**
Create separate swarms for different projects or departments to maintain clear boundaries and organization.

**2. Team Collaboration**
Set up swarms with specific configurations to support collaborative work between multiple AI agents.

**3. Resource Management**
Use `maxAgents` to control resource allocation and prevent overload on any single swarm.

**4. External Integration**
Enable `allowExternalAgents` when you need to integrate with external AI services or systems.

**5. Specialized Task Groups**
Create focused swarms for specific types of tasks (e.g., research, development, testing).

### Notes

- Swarm names must be unique within your workspace
- The `maxAgents` parameter helps prevent overloading but may be exceeded in emergency situations
- External agents require proper authentication and connection configuration
- Swarm metadata can be used for filtering and organization in list operations
- Once created, a swarm cannot be deleted through the API (contact support if needed)
- All timestamps are in ISO 8601 format
