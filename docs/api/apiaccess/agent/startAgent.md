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
        name: StartAgentResponse
data:
  name: startAgent
  category: agent
  link: startAgent.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `StartAgentResponse` object with:
- `status`: Status of the agent start operation
- `type`: Response type identifier
- Additional agent-specific response data

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
        console.log('   - Agent ID:', agentId);
        console.log('   - Task:', startTask);
        console.log('   - Status:', startAgentResult?.status);
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
    console.log('Status:', startResponse?.status);
    console.log('Type:', startResponse?.type);
} catch (error) {
    console.error('Failed to start agent:', error.message);
}

```