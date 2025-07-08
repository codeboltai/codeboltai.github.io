---
name: GetAgentsDetail
cbbaseinfo:
  description: Retrieves detailed information for a list of specified agents.
cbparameters:
  parameters:
    - name: agentList
      typeName: array
      description: List of agent IDs to get details for (empty array for all agents).
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the detailed information of the specified agents.
    typeArgs:
      - type: reference
        name: AgentsDetailResponse
data:
  name: getAgentsDetail
  category: agent
  link: getAgentsDetail.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AgentsDetailResponse` object with the following properties:

**Response Properties:**
- `type`: Always "agentsDetailResponse"
- `payload`: Optional object containing the actual agent details data
  - `agents`: Array of agent detail objects with detailed agent information
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

**Agent Detail Structure:**
Each agent in the `payload.agents` array has the following structure:
- `id`: Unique agent identifier
- `name`: Agent display name
- `description`: Agent description text
- `capabilities`: Optional array of agent capabilities
- `isLocal`: Boolean indicating if the agent is local
- `version`: Version string of the agent
- `status`: String status of the agent
- `unique_id`: Unique identifier string for the agent

### Examples

```js
// Example 1: Get details for specific agents
// First, get the list of available agents
const agentsList = await codebolt.agent.getAgentsList('downloaded');

if (agentsList?.agents && agentsList.agents.length > 0) {
    // Extract agent IDs from the first few agents
    const agentIds = agentsList.agents.slice(0, 3).map(agent => agent.function?.name);
    console.log('Agent IDs to get details for:', agentIds);
    
    // Get detailed information for the selected agents
    const agentsDetailResult = await codebolt.agent.getAgentsDetail(agentIds);
    console.log('Agent details result type:', agentsDetailResult?.type); // "agentsDetailResponse"
    console.log('Success:', agentsDetailResult?.success);
    console.log('Message ID:', agentsDetailResult?.messageId);
    console.log('Thread ID:', agentsDetailResult?.threadId);
    console.log('Details count:', agentsDetailResult?.payload?.agents?.length || 0);
    console.log('Agent details:', agentsDetailResult);
    
    // Access individual agent details
    if (agentsDetailResult?.payload?.agents?.length > 0) {
        const firstAgent = agentsDetailResult.payload.agents[0];
        console.log('First agent ID:', firstAgent.id);
        console.log('First agent name:', firstAgent.name);
        console.log('First agent description:', firstAgent.description);
        console.log('First agent version:', firstAgent.version);
        console.log('First agent is local:', firstAgent.isLocal);
        console.log('First agent status:', firstAgent.status);
        console.log('First agent unique_id:', firstAgent.unique_id);
        console.log('First agent capabilities:', firstAgent.capabilities);
    }
}

// Example 2: Get details for all agents (using empty array)
const allAgentDetails = await codebolt.agent.getAgentsDetail([]);
console.log('All agent details:', allAgentDetails);
console.log('Success:', allAgentDetails?.success);
console.log('Type:', allAgentDetails?.type);
console.log('Total agents:', allAgentDetails?.payload?.agents?.length || 0);

// Display each agent's key information
if (allAgentDetails?.payload?.agents) {
    allAgentDetails.payload.agents.forEach((agent, index) => {
        console.log(`Agent ${index + 1}:`);
        console.log(`  - ID: ${agent.id}`);
        console.log(`  - Name: ${agent.name}`);
        console.log(`  - Description: ${agent.description}`);
        console.log(`  - Version: ${agent.version}`);
        console.log(`  - Status: ${agent.status}`);
        console.log(`  - Is Local: ${agent.isLocal}`);
        console.log(`  - Unique ID: ${agent.unique_id}`);
        console.log(`  - Capabilities: ${agent.capabilities || 'None'}`);
    });
}
```

### Usage Notes

- Agent IDs can be obtained from the `getAgentsList()` method using `agent.function?.name`
- Pass an empty array `[]` to get details for all available agents
- The response includes both basic WebSocket response properties and detailed agent information in the `payload` field