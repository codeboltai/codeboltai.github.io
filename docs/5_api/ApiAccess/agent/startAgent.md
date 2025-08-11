---
name: StartAgent
cbbaseinfo:
  description: Starts an agent with a specific task.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent to start.
    - name: task
      typeName: string
      description: The task description for the agent to execute.
  returns:
    signatureTypeName: Promise<TaskCompletionResponse>
    description: A promise that resolves with a `TaskCompletionResponse` object upon agent completion.
data:
  name: startAgent
  category: agent
  link: startAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `TaskCompletionResponse` object with the following properties:

- **`type`** (string): Always "taskCompletionResponse".
- **`from`** (string, optional): The source of the response.
- **`agentId`** (string, optional): The ID of the agent that was started.
- **`task`** (string, optional): The task that was assigned to the agent.
- **`result`** (any, optional): Any result data from the agent's execution.
- **`success`** (boolean, optional): Indicates if the agent started and completed the task successfully.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Find an agent and then start it
async function findAndStartAgent() {
  try {
    // Find an agent for a specific task
    const findResult = await codebolt.agent.findAgent("Create a REST API with Express");
    
    if (findResult?.agents && findResult.agents.length > 0) {
      const agentId = findResult.agents[0].function.name;
      const task = "Create a new Express.js project with a single endpoint '/hello' that returns 'Hello, World!'";
      
      console.log(`Starting agent '${agentId}' with task: ${task}`);
      
      // Start the agent with the found ID and a specific task
      const startResult = await codebolt.agent.startAgent(agentId, task);
      
      console.log("Agent execution finished:", startResult);
      if (startResult.success) {
        console.log("Result:", startResult.result);
      } else {
        console.error("Error:", startResult.error);
      }
    } else {
      console.log("No suitable agent found for the task.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

findAndStartAgent();

// Example 2: Start an agent directly with a known agent ID
async function startKnownAgent() {
  try {
    const agentId = "code-generator-agent"; // A known agent ID
    const task = "Generate a Python function to find prime numbers up to n.";
    
    console.log(`Starting known agent '${agentId}'`);
    
    const response = await codebolt.agent.startAgent(agentId, task);
    
    console.log("Agent response:", response);
  } catch (error) {
    console.error("Failed to start agent:", error);
  }
}

startKnownAgent();
```

### Notes
- Before starting an agent, you typically need to know its `agentId`. You can get this ID by using `findAgent` or `getAgentsList`.
- The `task` should be a specific instruction for the agent to perform.
- The `TaskCompletionResponse` provides detailed information about the outcome of the agent's execution.
