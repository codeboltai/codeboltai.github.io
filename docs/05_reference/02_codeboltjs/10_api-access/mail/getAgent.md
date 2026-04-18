---
name: getAgent
cbbaseinfo:
  description: Retrieves details about a specific registered agent.
cbparameters:
  parameters:
    - name: params
      typeName: IGetAgentParams
      description: Object containing the agentId to retrieve.
  returns:
    signatureTypeName: "Promise<IGetAgentResponse>"
    description: A promise that resolves with the agent details.
data:
  name: getAgent
  category: mail
  link: getAgent.md
---
# getAgent

```typescript
codebolt.mail.getAgent(params: IGetAgentParams): Promise<IGetAgentResponse>
```

Retrieves details about a specific registered agent.
### Parameters

- **`params`** (IGetAgentParams): Object containing the agentId to retrieve.

### Returns

- **`Promise<IGetAgentResponse>`**: A promise that resolves with the agent details.

### Response Structure

```typescript
interface IGetAgentResponse {
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

#### Example 1: Get Agent Details

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.getAgent({
  agentId: 'developer-agent-001'
});

if (result.success) {
  console.log('Agent:', result.agent.name);
  console.log('Capabilities:', result.agent.capabilities);
  console.log('Registered:', result.agent.registeredAt);
}
```

### Common Use Cases

- **Agent Lookup**: Retrieve specific agent information
- **Capability Check**: Verify an agent's capabilities before assignment
- **Agent Validation**: Confirm agent exists before messaging

### Notes

- Returns error if agentId doesn't exist
- Includes all agent metadata and capabilities
