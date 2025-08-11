---
name: GetAgentsList
cbbaseinfo:
  description: Retrieves a list of agents based on the specified type.
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: "Optional: The type of agents to list. Defaults to 'downloaded'. Possible values are 'downloaded', 'all', 'local'."
  returns:
    signatureTypeName: Promise<ListAgentsResponse>
    description: A promise that resolves with a `ListAgentsResponse` object containing the list of agents.
data:
  name: getAgentsList
  category: agent
  link: getAgentsList.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `ListAgentsResponse` object with the following properties:

- **`type`** (string): Always "listAgentsResponse".
- **`agents`** (array, optional): An array of agent objects.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

Each agent in the `agents` array has the following structure:
- **`type`** (string): Always "function".
- **`function`** (object): Details of the agent function, including:
  - **`name`** (string): The name or identifier of the agent.
  - **`description`** (string): A detailed description of the agent's capabilities.
  - **`parameters`** (object): An object specifying the parameters the agent accepts.
  - **`strict`** (boolean, optional): Indicates if the agent enforces strict parameter validation.

### Examples

```javascript
// Example 1: Get the list of downloaded agents (default behavior)
async function getDownloadedAgents() {
  const downloadedAgents = await codebolt.agent.getAgentsList(); // 'downloaded' is the default
  console.log("Downloaded Agents:", downloadedAgents);
  if (downloadedAgents.success && downloadedAgents.agents.length > 0) {
    console.log(`Found ${downloadedAgents.agents.length} downloaded agents.`);
    const firstAgent = downloadedAgents.agents[0];
    console.log(`First agent name: ${firstAgent.function.name}`);
  }
}
getDownloadedAgents();

// Example 2: Get the list of all available agents
async function getAllAgents() {
  const allAgents = await codebolt.agent.getAgentsList('all');
  console.log("All Agents:", allAgents);
  if (allAgents.success) {
    console.log(`Total number of agents: ${allAgents.agents.length}`);
  }
}
getAllAgents();

// Example 3: Get the list of only local agents
async function getLocalAgents() {
  const localAgents = await codebolt.agent.getAgentsList('local');
  console.log("Local Agents:", localAgents);
  if (localAgents.success) {
    console.log(`Found ${localAgents.agents.length} local agents.`);
  }
}
getLocalAgents();
```

### Notes
- This function is useful for discovering available agents before using `findAgent` or `startAgent`.
- The `agents` array in the response provides the necessary information, like the `name`, to interact with specific agents.

