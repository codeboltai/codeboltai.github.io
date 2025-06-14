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
      description: Maximum number of agents to return (default 1, commonly used values are 3-10).
    - name: agents
      typeName: array
      description: List of specific agent names/IDs to filter in vector database (empty array for no filtering).
    - name: agentLocation
      typeName: string
      description: Location preference for agents. Valid values are 'remote_only', 'local_only', 'all'. Default is 'all'.
    - name: getFrom
      typeName: string
      description: Filtering method. Valid values are 'use_ai', 'use_vector_db', 'use_both'. Default is 'use_vector_db'.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with a findAgentByTaskResponse object containing an array of found agents.
    typeArgs:
      - type: object
        properties:
          type:
            type: string
            description: The response type, always "findAgentByTaskResponse"
          agents:
            type: array
            description: Array of found agents
            items:
              type: object
              properties:
                type:
                  type: string
                  description: The agent type, typically "function"
                function:
                  type: object
                  properties:
                    name:
                      type: string
                      description: The name/identifier of the agent
                    description:
                      type: string
                      description: Detailed description of the agent's capabilities
                    parameters:
                      type: object
                      properties:
                        type:
                          type: string
                          description: Parameter type, typically "object"
                        properties:
                          type: object
                          properties:
                            task:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: Parameter type, typically "string"
                                description:
                                  type: string
                                  description: Description of the task parameter
                        required:
                          type: array
                          items:
                            type: string
                          description: Array of required parameter names
                        additionalProperties:
                          type: boolean
                          description: Whether additional properties are allowed
                    strict:
                      type: boolean
                      description: Whether the agent enforces strict parameter validation
data:
  name: findAgent
  category: agent
  link: findAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Examples

```js
// Example 1: Find agents for a specific task with default parameters
const agent = await codebolt.agent.findAgent("Write a function to sum of Two number");
console.log("Found Agent:", agent);

// Example 2: Find multiple agents with remote-only preference
const agents = await codebolt.agent.findAgent(
  "create node js app",
  10, // maxResult
  [], // agents filter
  'remote_only', // agentLocation
  'use_both' // getFrom
);
console.log("Found Agents:", agents);

// Example 3: Find agents using AI filtering with local-only preference
const aiFilteredAgents = await codebolt.agent.findAgent(
  "Analyze data and provide insights",
  1,
  [],
  'local_only',
  'use_ai'
);
console.log("AI Filtered Agents:", aiFilteredAgents);

// Example 4: Find agents with specific agent filtering
const filteredAgents = await codebolt.agent.findAgent(
  "Code generation task",
  2,
  ['agent1', 'agent2'], // specific agents to filter
  'all',
  'use_both'
);
console.log("Filtered Agents:", filteredAgents);
```

### Response example:
```js 
{
  "type": "findAgentByTaskResponse",
  "agents": [
    {
      "type": "function",
      "function": {
        "name": "documentaionagent",
        "description": "A basic agent designed for the Codebolt platform...",
        "parameters": {
          "type": "object",
          "properties": {
            "task": {
              "type": "string",
              "description": "The specific task to execute."
            }
          },
          "required": ["task"],
          "additionalProperties": false
        },
        "strict": true
      }
    }
  ]
}

### Notes
- The `task` parameter should be a clear description of what you want the agent to do
- When using `remote_only` or `local_only`, make sure you have agents available in those locations
- Using `use_both` for filtering provides the most comprehensive results but may be slower
- The returned agents array contains detailed information about each agent including their capabilities and metadata
- Each agent in the response includes its function signature and parameter requirements

