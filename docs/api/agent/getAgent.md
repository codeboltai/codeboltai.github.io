---
name: getAgent
cbbaseinfo:
  description: Retrieves an agent based on the specified task.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task for which an agent is needed.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the agent details.
    typeArgs:
      - type: reference
        name: any
data:
  name: getAgent
  category: agent
  link: getAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Retrieving an agent for a task
const agentDetails = await codebolt.agent.getAgent("dataProcessing");
console.log("Agent Details:", agentDetails);
```