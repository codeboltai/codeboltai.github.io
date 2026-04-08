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
    signatureTypeName: "Promise<TaskCompletionResponse>"
    description: A promise that resolves with a `TaskCompletionResponse` object upon agent completion.
data:
  name: startAgent
  category: agent
  link: startAgent.md
---
# StartAgent

```typescript
codebolt.agent.startAgent(agentId: string, task: string): Promise<TaskCompletionResponse>
```

Starts an agent with a specific task.
### Parameters

- **`agentId`** (string): The unique identifier of the agent to start.
- **`task`** (string): The task description for the agent to execute.

### Returns

- **`Promise<TaskCompletionResponse>`**: A promise that resolves with a [`TaskCompletionResponse`](/docs/api/11_doc-type-ref/types/interfaces/TaskCompletionResponse) object upon agent completion.

### Response Structure

The method returns a Promise that resolves to a [`TaskCompletionResponse`](/docs/api/11_doc-type-ref/types/interfaces/TaskCompletionResponse) object with the following properties:

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

### Advanced Examples

#### Example 3: Agent Execution with Progress Tracking

```javascript
async function startAgentWithProgress(agentId, task) {
  const startTime = Date.now();
  const executionId = `exec_${Date.now()}`;

  console.log(`[${executionId}] Starting agent: ${agentId}`);
  console.log(`[${executionId}] Task: ${task.substring(0, 100)}...`);

  try {
    const result = await codebolt.agent.startAgent(agentId, task);

    const duration = Date.now() - startTime;

    console.log(`[${executionId}] Execution completed in ${duration}ms`);
    console.log(`[${executionId}] Status: ${result.success ? 'SUCCESS' : 'FAILED'}`);

    if (result.success) {
      console.log(`[${executionId}] Result received`);
    } else {
      console.error(`[${executionId}] Error: ${result.error}`);
    }

    return {
      ...result,
      executionId,
      duration,
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[${executionId}] Exception after ${duration}ms:`, error.message);

    return {
      success: false,
      error: error.message,
      executionId,
      duration,
      timestamp: new Date().toISOString()
    };
  }
}
```

#### Example 4: Batch Agent Execution

```javascript
async function executeAgentBatch(agentTasks) {
  const results = [];
  const startTime = Date.now();

  console.log(`Starting batch execution of ${agentTasks.length} tasks`);

  // Execute all agents in parallel
  const promises = agentTasks.map(async ({ agentId, task, id }) => {
    try {
      const result = await codebolt.agent.startAgent(agentId, task);
      return {
        id,
        agentId,
        success: result.success,
        result: result.result,
        error: result.error
      };
    } catch (error) {
      return {
        id,
        agentId,
        success: false,
        error: error.message
      };
    }
  });

  const batchResults = await Promise.all(promises);
  const duration = Date.now() - startTime;

  // Calculate statistics
  const stats = {
    total: agentTasks.length,
    successful: batchResults.filter(r => r.success).length,
    failed: batchResults.filter(r => !r.success).length,
    duration,
    results: batchResults
  };

  console.log(`Batch execution completed in ${duration}ms`);
  console.log(`Successful: ${stats.successful}/${stats.total}`);
  console.log(`Failed: ${stats.failed}/${stats.total}`);

  return stats;
}

// Usage
const batchResults = await executeAgentBatch([
  { id: 'task1', agentId: 'code-generator', task: 'Write a function to validate email' },
  { id: 'task2', agentId: 'test-writer', task: 'Create unit tests for email validator' },
  { id: 'task3', agentId: 'documentation', task: 'Document the email validation function' }
]);
```

#### Example 5: Chained Agent Execution

```javascript
async function executeAgentChain(chain) {
  let currentContext = {};
  const results = [];

  for (const [index, step] of chain.entries()) {
    console.log(`Executing step ${index + 1}/${chain.length}: ${step.name}`);

    try {
      // Prepare task with context from previous steps
      const task = step.prepareTask
        ? step.prepareTask(currentContext)
        : step.task;

      // Find agent if not provided
      let agentId = step.agentId;
      if (!agentId) {
        const agents = await codebolt.agent.findAgent(task, 1, [], 'all', 'use_vector_db');
        if (!agents?.agents?.[0]) {
          throw new Error(`No agent found for step: ${step.name}`);
        }
        agentId = agents.agents[0].function.name;
      }

      // Execute agent
      const result = await codebolt.agent.startAgent(agentId, task);

      const stepResult = {
        step: step.name,
        success: result.success,
        result: result.result,
        error: result.error
      };

      results.push(stepResult);

      if (!result.success) {
        console.error(`Step ${step.name} failed, stopping chain`);
        break;
      }

      // Update context for next step
      if (step.updateContext) {
        currentContext = step.updateContext(currentContext, result.result);
      }

    } catch (error) {
      console.error(`Error in step ${step.name}:`, error.message);
      results.push({
        step: step.name,
        success: false,
        error: error.message
      });
      break;
    }
  }

  return {
    totalSteps: chain.length,
    completedSteps: results.length,
    results,
    context: currentContext
  };
}

// Usage
const chainResults = await executeAgentChain([
  {
    name: 'design',
    task: 'Design a user authentication system with JWT',
    updateContext: (ctx, result) => ({ ...ctx, design: result })
  },
  {
    name: 'implement',
    prepareTask: (ctx) => `Implement the authentication system based on: ${ctx.design}`,
    updateContext: (ctx, result) => ({ ...ctx, implementation: result })
  },
  {
    name: 'test',
    prepareTask: (ctx) => `Write comprehensive tests for: ${ctx.implementation}`,
    updateContext: (ctx, result) => ({ ...ctx, tests: result })
  }
]);
```

#### Example 6: Conditional Agent Execution

```javascript
async function executeAgentConditionally(task, conditions = {}) {
  const {
    maxRetries = 3,
    timeout = 60000,
    fallbackAgentId = null,
    validateResult = null
  } = conditions;

  let lastError = null;
  let attempt = 0;

  // Find agent for the task
  const agents = await codebolt.agent.findAgent(task, 1, [], 'all', 'use_vector_db');

  if (!agents?.agents?.[0]) {
    throw new Error('No agent found for the task');
  }

  const agentId = agents.agents[0].function.name;

  while (attempt < maxRetries) {
    attempt++;
    console.log(`Attempt ${attempt}/${maxRetries} for agent ${agentId}`);

    try {
      // Set up timeout
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Agent execution timeout')), timeout)
      );

      // Execute with timeout
      const result = await Promise.race([
        codebolt.agent.startAgent(agentId, task),
        timeoutPromise
      ]);

      // Validate result if validator provided
      if (validateResult && !validateResult(result)) {
        throw new Error('Result validation failed');
      }

      if (result.success) {
        console.log(`✅ Agent execution successful on attempt ${attempt}`);
        return {
          ...result,
          attempt,
          duration: Date.now()
        };
      }

      lastError = result.error || 'Unknown error';

    } catch (error) {
      lastError = error.message;
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed, try fallback agent
  if (fallbackAgentId) {
    console.log('Trying fallback agent...');
    try {
      const fallbackResult = await codebolt.agent.startAgent(fallbackAgentId, task);
      if (fallbackResult.success) {
        return {
          ...fallbackResult,
          fallback: true,
          attempt
        };
      }
    } catch (error) {
      console.error('Fallback agent also failed:', error.message);
    }
  }

  throw new Error(`Agent execution failed after ${maxRetries} attempts. Last error: ${lastError}`);
}
```

### Error Handling Examples

#### Example 7: Comprehensive Error Handling

```javascript
async function startAgentWithErrorHandling(agentId, task) {
  // Validate inputs
  if (!agentId || typeof agentId !== 'string') {
    throw new Error('Invalid agent ID');
  }

  if (!task || typeof task !== 'string' || task.trim().length === 0) {
    throw new Error('Invalid task description');
  }

  // Verify agent exists
  const agentDetails = await codebolt.agent.getAgentsDetail([agentId]);
  if (!agentDetails.success || !agentDetails.payload.agents[0]) {
    throw new Error(`Agent ${agentId} not found`);
  }

  const agent = agentDetails.payload.agents[0];

  // Check agent status
  if (agent.status !== 'enabled') {
    throw new Error(`Agent ${agentId} is not enabled (status: ${agent.status})`);
  }

  console.log(`Starting agent: ${agent.name} (${agentId})`);
  console.log(`Capabilities: ${agent.capabilities?.join(', ') || 'N/A'}`);

  try {
    const startTime = Date.now();
    const result = await codebolt.agent.startAgent(agentId, task);
    const duration = Date.now() - startTime;

    // Handle different response scenarios
    if (!result) {
      throw new Error('No response from agent');
    }

    if (result.success) {
      console.log(`✅ Agent completed successfully in ${duration}ms`);

      // Validate result structure
      if (result.result === undefined) {
        console.warn('Agent succeeded but returned no result data');
      }

      return {
        success: true,
        result: result.result,
        agentId,
        task,
        duration,
        timestamp: new Date().toISOString()
      };

    } else {
      // Agent reported failure
      const errorDetails = {
        agentId,
        task,
        error: result.error || 'Unknown error',
        message: result.message,
        duration,
        timestamp: new Date().toISOString()
      };

      // Log error for debugging
      console.error('Agent execution failed:', errorDetails);

      // Optionally save error log
      await codebolt.fs.writeFile(
        `./logs/agent-error-${Date.now()}.json`,
        JSON.stringify(errorDetails, null, 2)
      ).catch(() => {});

      return {
        success: false,
        error: result.error,
        ...errorDetails
      };
    }

  } catch (error) {
    // System-level error (network, timeout, etc.)
    const systemError = {
      agentId,
      task,
      error: `System error: ${error.message}`,
      stack: error.stack,
      timestamp: new Date().toISOString()
    };

    console.error('System error during agent execution:', systemError);

    return {
      success: false,
      ...systemError
    };
  }
}
```

#### Example 8: Retry with Circuit Breaker Pattern

```javascript
class AgentCircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.threshold = threshold;
    this.timeout = timeout;
  }

  async execute(agentId, task) {
    // Check if circuit is open
    if (this.state === 'OPEN') {
      const timeSinceLastFailure = Date.now() - this.lastFailureTime;

      if (timeSinceLastFailure < this.timeout) {
        throw new Error(`Circuit breaker is OPEN. Try again after ${this.timeout - timeSinceLastFailure}ms`);
      }

      // Transition to half-open
      console.log('Circuit breaker transitioning to HALF_OPEN');
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await codebolt.agent.startAgent(agentId, task);

      if (result.success) {
        this.onSuccess();
        return result;
      }

      this.onFailure();
      throw new Error(result.error || 'Agent execution failed');

    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    if (this.state === 'HALF_OPEN') {
      console.log('Circuit breaker closing');
      this.state = 'CLOSED';
    }
  }

  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();

    if (this.failureCount >= this.threshold) {
      console.error(`Circuit breaker opened after ${this.failureCount} failures`);
      this.state = 'OPEN';
    }
  }

  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      lastFailureTime: this.lastFailureTime
    };
  }
}

// Usage
const circuitBreaker = new AgentCircuitBreaker(3, 30000);

try {
  const result = await circuitBreaker.execute('code-generator', 'Write a function');
  console.log('Execution successful');
} catch (error) {
  console.error('Execution failed:', error.message);
  console.log('Circuit breaker state:', circuitBreaker.getState());
}
```

### Integration Examples

#### Example 9: Integration with File System

```javascript
async function executeAgentWithFileOperations(agentId, task, outputFile = null) {
  const startTime = Date.now();

  console.log(`Executing agent: ${agentId}`);
  console.log(`Task: ${task.substring(0, 100)}...`);

  try {
    // Execute agent
    const result = await codebolt.agent.startAgent(agentId, task);

    if (!result.success) {
      throw new Error(result.error || 'Agent execution failed');
    }

    console.log('Agent execution successful');

    // Save result to file if specified
    if (outputFile && result.result) {
      const content = typeof result.result === 'string'
        ? result.result
        : JSON.stringify(result.result, null, 2);

      await codebolt.fs.writeFile(outputFile, content);
      console.log(`Result saved to: ${outputFile}`);
    }

    // Create execution summary
    const summary = {
      agentId,
      task,
      success: true,
      outputFile,
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      resultSize: JSON.stringify(result.result).length
    };

    // Save summary
    await codebolt.fs.writeFile(
      `./logs/execution-${Date.now()}.json`,
      JSON.stringify(summary, null, 2)
    ).catch(() => {});

    return {
      success: true,
      result: result.result,
      outputFile,
      summary
    };

  } catch (error) {
    console.error('Agent execution failed:', error.message);

    // Save error log
    const errorLog = {
      agentId,
      task,
      success: false,
      error: error.message,
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString()
    };

    await codebolt.fs.writeFile(
      `./logs/error-${Date.now()}.json`,
      JSON.stringify(errorLog, null, 2)
    ).catch(() => {});

    throw error;
  }
}
```

#### Example 10: Integration with VectorDB

```javascript
async function executeAgentWithVectorMemory(agentId, task, rememberResults = true) {
  // Store task in vector database for future reference
  if (rememberResults) {
    await codebolt.vectordb.addVectorItem({
      type: 'agent_task',
      agentId,
      task,
      timestamp: new Date().toISOString()
    });
  }

  // Query for similar past tasks
  const similarTasks = await codebolt.vectordb.queryVectorItem(task);

  if (similarTasks?.item?.[0]?.score > 0.8) {
    console.log('Found similar past task with high similarity');
    console.log('Similar task score:', similarTasks.item[0].score);

    // Optionally use context from similar task
    const similarTask = similarTasks.item[0].item;
    console.log('Similar task:', similarTask.task);
  }

  // Execute agent
  const result = await codebolt.agent.startAgent(agentId, task);

  // Store result if successful
  if (rememberResults && result.success) {
    await codebolt.vectordb.addVectorItem({
      type: 'agent_result',
      agentId,
      task,
      result: result.result,
      timestamp: new Date().toISOString()
    });
  }

  return result;
}
```

### Performance Optimization Examples

#### Example 11: Agent Pool with Load Balancing

```javascript
class AgentPool {
  constructor() {
    this.agents = new Map();
    this.executionCounts = new Map();
  }

  async getLeastUsedAgent(task) {
    // Find agents for the task
    const agents = await codebolt.agent.findAgent(task, 5, [], 'all', 'use_vector_db');

    if (!agents?.agents || agents.agents.length === 0) {
      throw new Error('No agents found for task');
    }

    // Select agent with lowest execution count
    let leastUsedAgent = agents.agents[0];
    let minCount = Infinity;

    for (const agent of agents.agents) {
      const agentId = agent.function.name;
      const count = this.executionCounts.get(agentId) || 0;

      if (count < minCount) {
        minCount = count;
        leastUsedAgent = agent;
      }
    }

    return leastUsedAgent;
  }

  async execute(task) {
    const agent = await this.getLeastUsedAgent(task);
    const agentId = agent.function.name;

    // Increment execution count
    this.executionCounts.set(agentId, (this.executionCounts.get(agentId) || 0) + 1);

    console.log(`Executing task with agent ${agentId} (usage count: ${this.executionCounts.get(agentId)})`);

    const result = await codebolt.agent.startAgent(agentId, task);

    if (!result.success) {
      // Decrement count on failure
      this.executionCounts.set(agentId, this.executionCounts.get(agentId) - 1);
    }

    return result;
  }

  getStats() {
    return {
      totalAgents: this.agents.size,
      executionCounts: Object.fromEntries(this.executionCounts)
    };
  }
}
```

#### Example 12: Result Caching

```javascript
class AgentResultCache {
  constructor(ttl = 30 * 60 * 1000) { // 30 minutes TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  generateKey(agentId, task) {
    return `${agentId}:${task.toLowerCase().trim()}`;
  }

  async execute(agentId, task, forceRefresh = false) {
    const key = this.generateKey(agentId, task);

    // Check cache
    if (!forceRefresh && this.cache.has(key)) {
      const cached = this.cache.get(key);

      if (Date.now() - cached.timestamp < this.ttl) {
        console.log('Returning cached result');
        return cached.result;
      }

      // Cache expired
      this.cache.delete(key);
    }

    // Execute agent
    console.log('Executing agent (cache miss)');
    const result = await codebolt.agent.startAgent(agentId, task);

    // Cache successful results
    if (result.success) {
      this.cache.set(key, {
        result,
        timestamp: Date.now()
      });
    }

    return result;
  }

  clear() {
    this.cache.clear();
    console.log('Agent result cache cleared');
  }

  getStats() {
    return {
      size: this.cache.size,
      ttl: this.ttl
    };
  }
}
```

### Common Pitfalls and Solutions

#### Pitfall 1: Not Validating Agent Before Execution

```javascript
// Problem: Starting agent without validation
const result = await codebolt.agent.startAgent(agentId, task);

// Solution: Validate agent first
const details = await codebolt.agent.getAgentsDetail([agentId]);
if (!details.success || details.payload.agents[0]?.status !== 'enabled') {
  throw new Error('Agent is not available');
}
const result = await codebolt.agent.startAgent(agentId, task);
```

#### Pitfall 2: Ignoring Timeout Issues

```javascript
// Problem: No timeout handling
const result = await codebolt.agent.startAgent(agentId, complexTask);

// Solution: Implement timeout
const timeoutPromise = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('Timeout')), 60000)
);

const result = await Promise.race([
  codebolt.agent.startAgent(agentId, complexTask),
  timeoutPromise
]);
```

#### Pitfall 3: Not Handling Partial Results

```javascript
// Problem: Assuming complete results
const result = await codebolt.agent.startAgent(agentId, task);
processResult(result.result); // May fail if result is partial

// Solution: Validate result completeness
const result = await codebolt.agent.startAgent(agentId, task);
if (result.success && result.result) {
  if (isCompleteResult(result.result)) {
    processResult(result.result);
  } else {
    console.warn('Received partial result');
  }
}
```

### Best Practices

1. **Always validate agent existence and status before execution**
2. **Implement timeout handling for long-running tasks**
3. **Use retry logic for transient failures**
4. **Cache results when appropriate**
5. **Log all executions for debugging and monitoring**
6. **Handle both business logic errors and system errors separately**
7. **Use circuit breakers for frequently failing agents**
8. **Monitor agent performance and usage patterns**

### Notes

- Before starting an agent, you typically need to know its `agentId`. You can get this ID by using `findAgent` or `getAgentsList`.
- The `task` should be a specific instruction for the agent to perform.
- The [`TaskCompletionResponse`](/docs/api/11_doc-type-ref/types/interfaces/TaskCompletionResponse) provides detailed information about the outcome of the agent's execution.
- Always implement proper error handling and timeout mechanisms.
- Consider implementing caching, retries, and circuit breakers for production use.
- Monitor agent execution times and success rates for performance optimization.