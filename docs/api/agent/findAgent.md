---
name: findAgent
cbbaseinfo:
  description: Finds an agent suitable for the specified task.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task for which an agent is needed.
    - name: maxResult
      typeName: number
      description: Maximum number of agents to return (default 1).
    - name: agents
      typeName: array
      description: List of agents to filter in vector database.
    - name: agentLocation
      typeName: AgentLocation
      description: Location preference for agents (ALL, LOCAL_ONLY, REMOTE_ONLY).
    - name: getFrom
      typeName: FilterUsing
      description: Filtering method (USE_AI, USE_VECTOR_DB, USE_BOTH).
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the agent details.
    typeArgs:
      - type: reference
        name: any
data:
  name: findAgent
  category: agent
  link: findAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Examples

```js
// Example 1: Find a single agent for a task
const agent = await codebolt.agent.findAgent("dataProcessing");
console.log("Found Agent:", agent);

// Example 2: Find multiple agents with specific filters
const agents = await codebolt.agent.findAgent(
  "imageProcessing",
  3, // maxResult
  [], // agents
  codebolt.agent.AgentLocation.LOCAL_ONLY,
  codebolt.agent.FilterUsing.USE_VECTOR_DB
);
console.log("Found Agents:", agents);

// Example 3: Find agents using AI filtering
const aiFilteredAgents = await codebolt.agent.findAgent(
  "naturalLanguageProcessing",
  2,
  [],
  codebolt.agent.AgentLocation.ALL,
  codebolt.agent.FilterUsing.USE_AI
);
console.log("AI Filtered Agents:", aiFilteredAgents);
```

