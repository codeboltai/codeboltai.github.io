---
name: getAgentsList
cbbaseinfo:
  description: Retrieves a list of agents based on the specified type.
cbparameters:
  parameters:
    - name: type
      typeName: Agents
      description: The type of agents to list (default is Agents.DOWNLOADED)
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of agents
    typeArgs:
      - type: reference
        name: any
data:
  name: getAgentsList
  category: agent
  link: getAgentsList.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example 1: Getting list of downloaded agents (default)
const downloadedAgents = await codebolt.agent.getAgentsList();
console.log("Downloaded Agents:", downloadedAgents);

// Example 2: Getting list of local agents
const localAgents = await codebolt.agent.getAgentsList(Agents.LOCAL);
console.log("LOCAL Agents:", localAgents);

// Example 3: Getting list of cloud agents
const cloudAgents = await codebolt.agent.getAgentsList(Agents.CLOUD);
console.log("CLOUD Agents:", cloudAgents);

// Example 4: Getting list of all agents
const allAgents = await codebolt.agent.getAgentsList(Agents.ALL);
console.log("ALL Agents:", allAgents);
```

