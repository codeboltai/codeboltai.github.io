---
name: StartAgent
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
        name: TaskCompletionResponse
data:
  name: startAgent
  category: agent
  link: startAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `TaskCompletionResponse` object with the following properties:

**Response Properties:**
- `type`: Always "taskCompletionResponse"
- `from`: Optional string indicating the source of the response
- `agentId`: Optional string containing the ID of the agent that was started
- `task`: Optional string containing the task that was assigned to the agent
- `result`: Optional field containing any result data from the agent start operation
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

```js
// Example 1: Complete workflow - Find and start an agent
try {
    // First, find an appropriate agent for the task
    const findResult = await codebolt.agent.findAgent(
        'create node js app',
        10, // maxResult
        [], // agents filter
        'remote_only', // agentLocation
        'use_both' // getFrom
    );
    
    console.log('✅ Find result:', findResult);
    
    if (findResult?.agents && findResult.agents.length > 0) {
        // Extract agent ID from the found agent
        const agentId = findResult.agents[0].function?.name || 
                       findResult.agents[0].id || 
                       findResult.agents[0].name;
        
        const startTask = 'Hi how are you';
        console.log('✅ Starting agent:', agentId, 'with task:', startTask);
        
        // Start the agent with the task
        const startAgentResult = await codebolt.agent.startAgent("act", startTask);
        
        console.log('✅ Start agent result:', startAgentResult);
        console.log('   - Agent ID:', startAgentResult?.agentId);
        console.log('   - Task:', startAgentResult?.task);
        console.log('   - Success:', startAgentResult?.success);
        console.log('   - Result:', startAgentResult?.result);
        console.log('   - Response type:', startAgentResult?.type);
    } else {
        console.log('⚠️ No agents found to start');
    }
} catch (error) {
    console.log('⚠️ Agent starting failed:', error.message);
}

// Example 2: Direct agent start (if you know the agent ID)
try {
    const startResponse = await codebolt.agent.startAgent("act", "Help me with data analysis");
    console.log('Agent started successfully:', startResponse);
    console.log('Agent ID:', startResponse?.agentId);
    console.log('Task:', startResponse?.task);
    console.log('Success:', startResponse?.success);
    console.log('Result:', startResponse?.result);
    console.log('Type:', startResponse?.type);
} catch (error) {
    console.error('Failed to start agent:', error.message);
}

```