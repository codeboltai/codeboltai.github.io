---
name: FindAgent
cbbaseinfo:
  description: Finds an agent suitable for the specified task using AI and/or vector database filtering.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task description for which an agent is needed (e.g., "Write a function to sum of Two number", "create node js app").
    - name: maxResult
      typeName: number
      description: "Optional: Maximum number of agents to return. Defaults to 1."
    - name: agents
      typeName: array
      description: "Optional: List of specific agent names or IDs to filter from the vector database. Defaults to an empty array (no filtering)."
    - name: agentLocation
      typeName: string
      description: "Optional: Location preference for agents. Defaults to 'all'. Possible values are 'all', 'local_only', 'remote_only'."
    - name: getFrom
      typeName: string
      description: "Optional: The filtering method to use. Defaults to 'use_vector_db'. Possible values are 'use_ai', 'use_vector_db', 'use_both'."
  returns:
    signatureTypeName: Promise<FindAgentByTaskResponse>
    description: A promise that resolves with a `FindAgentByTaskResponse` object containing an array of found agents.
data:
  name: findAgent
  category: agent
  link: findAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `FindAgentByTaskResponse` object with the following properties:

- **`type`** (string): Always "findAgentByTaskResponse".
- **`agents`** (array, optional): An array of agent objects that match the task.
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
// Example 1: Find the single best agent for a task (default parameters)
const agent = await codebolt.agent.findAgent("Write a function to calculate the factorial of a number");
console.log("Found Agent:", agent);

// Example 2: Find up to 5 agents for a task, searching both local and remote
const agents = await codebolt.agent.findAgent(
  "Create a simple Express.js server",
  5, // maxResult
  [], // agents (no filter)
  'all', // agentLocation
  'use_both' // getFrom
);
console.log("Found Agents:", agents);

// Example 3: Find a local agent using only AI filtering
const aiFilteredAgent = await codebolt.agent.findAgent(
  "Analyze a dataset and create a visualization",
  1,
  [],
  'local_only',
  'use_ai'
);
console.log("AI Filtered Agent:", aiFilteredAgent);

// Example 4: Find specific agents by name/ID from remote agents
const specificAgents = await codebolt.agent.findAgent(
  "Generate a CI/CD pipeline for a Node.js project",
  3,
  ['ci-builder-agent', 'deployment-helper'], // specific agents to filter
  'remote_only',
  'use_vector_db'
);
console.log("Filtered Agents:", specificAgents);
```

### Notes
- The `task` parameter should be a clear and concise description of the desired action.
- `agentLocation` helps you control where to search for agents, which can be useful for security or performance reasons.
- `getFrom` allows you to choose between a faster vector-based search, a more intelligent AI-based search, or a combination of both.
- The response will contain a list of agents that you can then use with `codebolt.agent.startAgent`.

