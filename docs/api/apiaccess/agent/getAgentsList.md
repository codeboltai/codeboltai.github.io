---
name: GetAgentsList
cbbaseinfo:
  description: Retrieves a list of agents based on the specified type.
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: The type of agents to list ('downloaded', 'all', 'local'). Default is 'downloaded'.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of agents
    typeArgs:
      - type: reference
        name: AgentsListResponse
data:
  name: getAgentsList
  category: agent
  link: getAgentsList.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AgentsListResponse` object with:
- `type`: Response type identifier
- `agents`: Array of agent objects containing agent information

### Examples

```js
// Example 1: Getting list of downloaded agents (default)
const downloadedAgents = await codebolt.agent.getAgentsList('downloaded');
console.log('✅ Agents list result:', downloadedAgents);
console.log('   - Type:', downloadedAgents?.type);
console.log('   - Agents count:', downloadedAgents?.agents?.length || 0);
if (downloadedAgents?.agents?.length > 0) {
    console.log('   - First agent:', downloadedAgents.agents[0]);
    // Agent IDs can be extracted using agent.function?.name
    const agentId = downloadedAgents.agents[0].function?.name;
    console.log('   - First agent ID:', agentId);
}

// Example 2: Getting list of all agents
const allAgents = await codebolt.agent.getAgentsList('all');
console.log('✅ All agents result:', allAgents);
console.log('   - Type:', allAgents?.type);
console.log('   - Total agents count:', allAgents?.agents?.length || 0);

// Example 3: Getting list of local agents
const localAgents = await codebolt.agent.getAgentsList('local');
console.log('✅ Local agents result:', localAgents);
console.log('   - Type:', localAgents?.type);
console.log('   - Local agents count:', localAgents?.agents?.length || 0);
```

