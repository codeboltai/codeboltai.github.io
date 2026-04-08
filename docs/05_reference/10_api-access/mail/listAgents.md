---
name: listAgents
cbbaseinfo:
  description: Lists all registered agents in the mail system.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<IListAgentsResponse>"
    description: A promise that resolves with an array of registered agents.
data:
  name: listAgents
  category: mail
  link: listAgents.md
---
# listAgents

```typescript
codebolt.mail.listAgents(): Promise<IListAgentsResponse>
```

Lists all registered agents in the mail system.
### Returns

- **`Promise<IListAgentsResponse>`**: A promise that resolves with an array of registered agents.

### Response Structure

```typescript
interface IListAgentsResponse {
  success: boolean;
  agents?: Array<{
    agentId: string;
    name: string;
    capabilities: string[];
    registeredAt: string;
  }>;
  error?: string;
}
```

### Examples

#### Example 1: List All Agents

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.listAgents();

console.log('Registered agents:');
result.agents.forEach(agent => {
  console.log(`- ${agent.name} (${agent.agentId})`);
  console.log(`  Capabilities: ${agent.capabilities.join(', ')}`);
});
```

#### Example 2: Find Agents by Capability

```typescript
const result = await codebolt.mail.listAgents();

const coders = result.agents.filter(agent =>
  agent.capabilities.includes('coding')
);

console.log('Agents that can code:');
coders.forEach(agent => {
  console.log(`- ${agent.name}`);
});
```

### Common Use Cases

- **Agent Discovery**: Find available agents for tasks
- **Capability Matching**: Match tasks to agent skills
- **System Overview**: View all registered agents

### Notes

- Returns all registered agents regardless of status
- Useful for agent selection and task assignment