---
name: registerAgent
cbbaseinfo:
  description: Registers a new agent to a swarm, making it available for task assignment and coordination.
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The ID of the swarm to register the agent to.
    - name: data
      typeName: AgentRegistration
      description: Agent registration configuration.
      nested:
        - name: agentId
          typeName: "string | undefined"
          description: Optional custom agent ID. If not provided, one will be generated.
        - name: name
          typeName: string
          description: "The display name of the agent (required)."
        - name: capabilities
          typeName: "string[] | undefined"
          description: Array of capabilities/skills the agent possesses.
        - name: agentType
          typeName: "'internal' | 'external' | undefined"
          description: Whether the agent is internal or external.
        - name: connectionInfo
          typeName: "{ endpoint: string, protocol: 'websocket' | 'http' } | undefined"
          description: Connection details for external agents.
        - name: metadata
          typeName: "Record<string, any> | undefined"
          description: Additional metadata about the agent.
  returns:
    signatureTypeName: "Promise<RegisterAgentResponse>"
    description: A promise that resolves with the agent registration details.
    typeArgs: []
data:
  name: registerAgent
  category: swarm
  link: registerAgent.md
---
# registerAgent

```typescript
codebolt.swarm.registerAgent(swarmId: string, data: AgentRegistration): Promise<RegisterAgentResponse>
```

Registers a new agent to a swarm, making it available for task assignment and coordination.
### Parameters

- **`swarmId`** (string): The ID of the swarm to register the agent to.
- **`data`** ([AgentRegistration](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/AgentRegistration)): Agent registration configuration.

### Returns

- **`Promise<[RegisterAgentResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/RegisterAgentResponse)>`**: A promise that resolves with the agent registration details.

### Examples

#### Register Basic Internal Agent

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Register a simple internal agent
const result = await codebolt.swarm.registerAgent('swarm-123', {
    name: 'Code Assistant',
    capabilities: ['code_generation', 'debugging'],
    agentType: 'internal'
});

if (result.success) {
    console.log('✅ Agent registered:', result.data.agentId);
    console.log('Swarm ID:', result.data.swarmId);
} else {
    console.error('❌ Registration failed:', result.error);
}
```

#### Register External Agent with Connection Info

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Register an external agent with connection details
const result = await codebolt.swarm.registerAgent('swarm-123', {
    name: 'External Analyzer',
    capabilities: ['data_analysis', 'reporting'],
    agentType: 'external',
    connectionInfo: {
        endpoint: 'wss://external-service.example.com/agent',
        protocol: 'websocket'
    },
    metadata: {
        version: '2.0.0',
        provider: 'External Service Inc',
        region: 'us-east-1'
    }
});

console.log('External agent registered:', result.data.agentId);
```

#### Register Agent with Custom ID

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Register agent with a specific ID
const result = await codebolt.swarm.registerAgent('swarm-123', {
    agentId: 'custom-agent-456',
    name: 'Specialized Agent',
    capabilities: ['specialized_task'],
    agentType: 'internal'
});

console.log('Agent registered with custom ID:', result.data.agentId);
```

#### Register Multiple Agents

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Define multiple agents to register
const agents = [
    {
        name: 'Frontend Developer',
        capabilities: ['react', 'typescript', 'css'],
        agentType: 'internal'
    },
    {
        name: 'Backend Developer',
        capabilities: ['nodejs', 'python', 'database'],
        agentType: 'internal'
    },
    {
        name: 'DevOps Engineer',
        capabilities: ['docker', 'kubernetes', 'ci-cd'],
        agentType: 'internal'
    }
];

// Register all agents
const swarmId = 'swarm-123';
const results = [];

for (const agentConfig of agents) {
    const result = await codebolt.swarm.registerAgent(swarmId, agentConfig);
    results.push(result);
    console.log(`✅ Registered ${agentConfig.name}:`, result.data.agentId);
}

console.log(`Successfully registered ${results.length} agents`);
```

#### Comprehensive Agent Registration

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Register a fully configured agent
const result = await codebolt.swarm.registerAgent('swarm-123', {
    agentId: 'agent-full-config-001',
    name: 'Full Stack Developer',
    capabilities: [
        'frontend',
        'backend',
        'database',
        'testing',
        'deployment'
    ],
    agentType: 'internal',
    metadata: {
        experience: 'senior',
        languages: ['JavaScript', 'Python', 'Go'],
        certifications: ['AWS', 'Kubernetes'],
        maxConcurrentTasks: 5,
        responseTime: 'fast',
        availability: '24/7'
    }
});

if (result.success) {
    console.log('Agent Configuration:');
    console.log('- ID:', result.data.agentId);
    console.log('- Name:', result.data.swarmId);
    console.log('- Status: Registered and Ready');
}
```

#### Error Handling and Validation

```js
import codebolt from '@codebolt/codeboltjs';

async function registerAgentWithErrorHandling(swarmId, agentConfig) {
    await codebolt.waitForReady();

    try {
        // Validate inputs
        if (!agentConfig.name) {
            throw new Error('Agent name is required');
        }

        if (agentConfig.agentType === 'external' && !agentConfig.connectionInfo) {
            throw new Error('External agents require connectionInfo');
        }

        const result = await codebolt.swarm.registerAgent(swarmId, agentConfig);

        if (!result.success) {
            // Handle specific error cases
            switch (result.error.code) {
                case 'SWARM_NOT_FOUND':
                    console.error('Swarm does not exist:', swarmId);
                    break;
                case 'AGENT_LIMIT_EXCEEDED':
                    console.error('Swarm has reached maximum agent capacity');
                    break;
                case 'DUPLICATE_AGENT':
                    console.error('Agent with this ID already exists');
                    break;
                default:
                    console.error('Registration failed:', result.error.message);
            }
            return null;
        }

        return result.data;

    } catch (error) {
        console.error('Unexpected error:', error);
        return null;
    }
}

// Usage
const agentData = await registerAgentWithErrorHandling('swarm-123', {
    name: 'Test Agent',
    capabilities: ['testing']
});
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        agentId: string,
        swarmId: string
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Team Building**
Register multiple agents with complementary capabilities to form a complete team.

**2. Service Integration**
Add external agents to connect with third-party AI services.

**3. Specialization**
Create agents with specific capability sets for focused tasks.

**4. Scaling**
Add more agents to a swarm as workload increases.

**5. Testing**
Register test agents during development and testing phases.

### Notes

- Agent names must be unique within a swarm
- External agents require valid connection information
- Capabilities are used for task matching and routing
- Custom agent IDs must be unique across the entire system
- There may be a limit on the number of agents per swarm (configurable)
- Registered agents start with 'idle' status
- Metadata can be used for filtering and agent selection
- The `agentId` in the response may differ from the input if auto-generated
- External agents must be reachable at the specified endpoint
