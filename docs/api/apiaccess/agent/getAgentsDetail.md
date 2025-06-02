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
        name: any
data:
  name: getAgentsDetail
  category: agent
  link: getAgentsDetail.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example 1: Get details for specific agents
const agentDetails = await codebolt.agent.getAgentsDetail(["agent-id-1", "agent-id-2"]);
console.log("Agent Details:", agentDetails);

// Example 2: Get details for all agents
const allAgentDetails = await codebolt.agent.getAgentsDetail([]);
console.log("All Agent Details:", allAgentDetails);
``` 