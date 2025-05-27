---
name: startAgent
cbbaseinfo:
  description: Starts an agent for the specified task.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The ID of the agent to start.
    - name: task
      typeName: string
      description: The task for which the agent should be started.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the agent has been successfully started.
    typeArgs:
      - type: reference
        name: any
data:
  name: startAgent
  category: agent
  link: startAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Starting an agent for a task
const startResponse = await codebolt.agent.startAgent("agent-123", "dataProcessing");
console.log("Agent Start Response:", startResponse);

```