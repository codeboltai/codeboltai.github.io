---
name: GetAgentsDetail
cbbaseinfo:
  description: Retrieves detailed information for a list of specified agents.
cbparameters:
  parameters:
    - name: agentList
      typeName: array
      description: "Optional: An array of agent IDs to get details for. If the array is empty, it retrieves details for all agents. Defaults to an empty array."
  returns:
    signatureTypeName: Promise<AgentsDetailResponse>
    description: A promise that resolves with an `AgentsDetailResponse` object containing the detailed information of the specified agents.
data:
  name: getAgentsDetail
  category: agent
  link: getAgentsDetail.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AgentsDetailResponse` object with the following properties:

- **`type`** (string): Always "agentsDetailResponse".
- **`payload`** (object, optional): An object containing the agent details.
  - **`agents`** (array): An array of agent detail objects.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

Each agent in the `payload.agents` array has the following structure:
- **`id`** (string): The unique identifier of the agent.
- **`name`** (string): The display name of the agent.
- **`description`** (string): A description of the agent's capabilities.
- **`capabilities`** (array, optional): An array of strings describing the agent's capabilities.
- **`isLocal`** (boolean): `true` if the agent is local, `false` otherwise.
- **`version`** (string): The version of the agent.
- **`status`** (string): The current status of the agent (e.g., "enabled", "disabled").
- **`unique_id`** (string): Another unique identifier for the agent.

### Examples

```javascript
// Example 1: Get details for a few specific agents
async function getSpecificAgentDetails() {
  // First, get a list of available agents
  const listResponse = await codebolt.agent.getAgentsList('downloaded');
  
  if (listResponse?.agents && listResponse.agents.length > 0) {
    // Get the IDs of the first two agents
    const agentIds = listResponse.agents.slice(0, 2).map(agent => agent.function.name);
    
    console.log("Requesting details for agent IDs:", agentIds);
    
    // Get the details for the selected agents
    const detailsResponse = await codebolt.agent.getAgentsDetail(agentIds);
    console.log("Agent Details:", detailsResponse);

    if (detailsResponse.success) {
      detailsResponse.payload.agents.forEach(agent => {
        console.log(`- Name: ${agent.name}, Version: ${agent.version}, Status: ${agent.status}`);
      });
    }
  }
}
getSpecificAgentDetails();

// Example 2: Get details for all available agents
async function getAllAgentDetails() {
  // Pass an empty array to get details for all agents
  const allDetails = await codebolt.agent.getAgentsDetail([]);
  console.log("All Agent Details:", allDetails);

  if (allDetails.success) {
    console.log(`Found details for ${allDetails.payload.agents.length} agents.`);
  }
}
getAllAgentDetails();
```

### Usage Notes
- You can obtain agent IDs from the `getAgentsList()` method. The ID is typically found in `agent.function.name`.
- This function is useful for getting a deeper understanding of an agent's capabilities, version, and status before using it.
