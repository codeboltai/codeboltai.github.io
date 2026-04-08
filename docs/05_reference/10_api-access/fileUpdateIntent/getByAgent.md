---
name: getByAgent
cbbaseinfo:
  description: Gets all intents claimed by a specific agent.
cbparameters:
  parameters:
    - name: agentId
      type: string
      required: true
      description: The agent ID to get intents for.
  returns:
    signatureTypeName: "Promise<FileUpdateIntent[]>"
    description: "A promise that resolves with an array of the agent's intents."
data:
  name: getByAgent
  category: fileUpdateIntent
  link: getByAgent.md
---
# getByAgent

```typescript
codebolt.fileUpdateIntent.getByAgent(agentId: undefined): Promise<FileUpdateIntent[]>
```

Gets all intents claimed by a specific agent.
### Parameters

- **`agentId`** (unknown): The agent ID to get intents for.

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)[]>`**: A promise that resolves with an array of the agent's intents.

### Examples

#### Example 1: Get Agent's Active Intents
```javascript
const intents = await codebolt.fileUpdateIntent.getByAgent('agent-456');

const active = intents.filter(i => i.status === 'active');

console.log(`Agent has ${active.length} active intents`);
```

#### Example 2: Display Agent Workload
```javascript
async function showAgentWorkload(agentId) {
  const intents = await codebolt.fileUpdateIntent.getByAgent(agentId);

  console.log(`\nAgent: ${agentId}`);
  console.log('Total intents:', intents.length);
  console.log('Active:', intents.filter(i => i.status === 'active').length);
  console.log('Completed:', intents.filter(i => i.status === 'completed').length);

  intents.forEach(intent => {
    console.log(`  - ${intent.description} (${intent.status})`);
  });
}
```

### Common Use Cases
**Agent Monitoring**: Track what an agent is working on.
**Workload Management**: See all of an agent's current and past intents.
**Cleanup**: Find and clean up old intents.

### Notes
- Returns all intents regardless of status
- Filter by status as needed