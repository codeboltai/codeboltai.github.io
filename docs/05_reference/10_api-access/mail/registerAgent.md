---
name: registerAgent
cbbaseinfo:
  description: Registers an agent with the mail system to enable sending and receiving messages.
cbparameters:
  parameters:
    - name: params
      typeName: IRegisterAgentParams
      description: Agent registration parameters including agentId, name, capabilities, and metadata.
  returns:
    signatureTypeName: "Promise<IRegisterAgentResponse>"
    description: A promise that resolves with the registration result and agent details.
data:
  name: registerAgent
  category: mail
  link: registerAgent.md
---
# registerAgent

```typescript
codebolt.mail.registerAgent(params: IRegisterAgentParams): Promise<IRegisterAgentResponse>
```

Registers an agent with the mail system to enable sending and receiving messages.
### Parameters

- **`params`** (IRegisterAgentParams): Agent registration parameters including agentId, name, capabilities, and metadata.

### Returns

- **`Promise<IRegisterAgentResponse>`**: A promise that resolves with the registration result and agent details.

### Response Structure

```typescript
interface IRegisterAgentResponse {
  success: boolean;
  agent?: {
    agentId: string;
    name: string;
    capabilities: string[];
    registeredAt: string;
    metadata?: Record<string, any>;
  };
  error?: string;
}
```

### Examples

#### Example 1: Register a Basic Agent

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.registerAgent({
  agentId: 'developer-agent-001',
  name: 'Developer Agent',
  capabilities: ['coding', 'debugging', 'code-review']
});

if (result.success) {
  console.log('Agent registered:', result.agent.name);
  console.log('Capabilities:', result.agent.capabilities);
}
```

#### Example 2: Register Agent with Metadata

```typescript
const result = await codebolt.mail.registerAgent({
  agentId: 'reviewer-agent',
  name: 'Code Reviewer',
  capabilities: ['review', 'static-analysis', 'security-scan'],
  metadata: {
    version: '1.0.0',
    specialization: 'security',
    maxConcurrentReviews: 5
  }
});

console.log('Agent registered with metadata');
```

#### Example 3: Register Multiple Agents

```typescript
const agents = [
  {
    agentId: 'frontend-agent',
    name: 'Frontend Developer',
    capabilities: ['react', 'typescript', 'css']
  },
  {
    agentId: 'backend-agent',
    name: 'Backend Developer',
    capabilities: ['nodejs', 'database', 'api']
  },
  {
    agentId: 'devops-agent',
    name: 'DevOps Engineer',
    capabilities: ['docker', 'kubernetes', 'ci-cd']
  }
];

const results = await Promise.all(
  agents.map(agent => codebolt.mail.registerAgent(agent))
);

console.log(`Registered ${results.filter(r => r.success).length} agents`);
```

### Common Use Cases

- **Agent Initialization**: Register agents when starting a session
- **Capability Declaration**: Define agent skills and abilities
- **Multi-Agent Systems**: Set up multiple specialized agents
- **Agent Discovery**: Make agents available for communication

### Notes

- Each agent must have a unique agentId
- Capabilities help match agents to appropriate tasks
- Metadata can store additional agent information
- Registration is required before an agent can send/receive messages