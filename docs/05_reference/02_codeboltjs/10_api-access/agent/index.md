---
cbapicategory:
  - name: StartAgent
    link: /docs/api/apiaccess/agent/startAgent
    description: Starts an agent for the specified task with a given agent ID .
  - name: FindAgent
    link: /docs/api/apiaccess/agent/findAgent
    description: Finds agents for a specified task with filtering options by location, source and maximum results.
  - name: GetAgentsList
    link: /docs/api/apiaccess/agent/getAgentsList
    description: "Lists available agents of a specific type (downloaded, local, or all)."
  - name: GetAgentsDetail
    link: /docs/api/apiaccess/agent/getAgentsDetail
    description: Retrieves detailed information for a list of specified agents .
---
# Agent

<CBAPICategory />

The Agent module provides comprehensive functionality for managing and executing AI agents within your Codebolt applications. Agents are specialized AI workers designed to handle specific tasks such as code generation, debugging, testing, and more.

## Quick Start Guide

### Basic Agent Workflow

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  try {
    // Step 1: List available agents
    const agentsList = await codebolt.agent.getAgentsList('downloaded');
    console.log('Available agents:', agentsList.agents.length);

    // Step 2: Find an agent for your task
    const agent = await codebolt.agent.findAgent(
      'Create a REST API with Express.js',
      1, // maxResult
      [], // no specific agent filter
      'all', // search both local and remote
      'use_vector_db' // use vector database search
    );

    if (agent?.agents && agent.agents.length > 0) {
      // Step 3: Start the agent with your task
      const agentId = agent.agents[0].function.name;
      const result = await codebolt.agent.startAgent(
        agentId,
        'Create an Express.js API with user authentication endpoints'
      );

      if (result.success) {
        console.log('Task completed:', result.result);
      } else {
        console.error('Task failed:', result.error);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Minimal Example

```javascript
// Find and execute an agent in one go
const agent = await codebolt.agent.findAgent('Write a React component');
if (agent?.agents?.[0]) {
  const result = await codebolt.agent.startAgent(
    agent.agents[0].function.name,
    'Create a responsive navigation bar component'
  );
  console.log(result);
}
```

## Common Workflows

### Workflow 1: Discover and Execute

```javascript
async function discoverAndExecute() {
  // Get all available agents
  const allAgents = await codebolt.agent.getAgentsList('all');

  // Filter agents by capability
  const codeAgents = allAgents.agents.filter(agent =>
    agent.function.description.toLowerCase().includes('code')
  );

  console.log('Found code-related agents:', codeAgents.length);

  // Get detailed information about each agent
  const agentIds = codeAgents.map(a => a.function.name);
  const details = await codebolt.agent.getAgentsDetail(agentIds);

  // Select the best agent based on capabilities
  const bestAgent = details.payload.agents.find(a =>
    a.capabilities?.includes('javascript')
  );

  if (bestAgent) {
    const result = await codebolt.agent.startAgent(
      bestAgent.id,
      'Refactor this JavaScript code to use async/await'
    );
    return result;
  }
}
```

### Workflow 2: Task-Based Agent Selection

```javascript
async function taskBasedSelection(taskDescription) {
  // Define task categories and their keywords
  const taskCategories = {
    'code-generation': ['create', 'generate', 'write', 'build'],
    'debugging': ['debug', 'fix', 'error', 'issue'],
    'testing': ['test', 'spec', 'coverage', 'mock'],
    'documentation': ['document', 'readme', 'explain', 'comment']
  };

  // Determine task category
  const category = Object.keys(taskCategories).find(cat =>
    taskCategories[cat].some(keyword =>
      taskDescription.toLowerCase().includes(keyword)
    )
  );

  // Find agent for the specific category
  const agents = await codebolt.agent.findAgent(
    taskDescription,
    3, // Get top 3 candidates
    [], // No specific agent filter
    'local_only', // Prefer local agents for speed
    'use_ai' // Use AI for better matching
  );

  return agents;
}
```

### Workflow 3: Fallback Pattern

```javascript
async function executeWithFallback(task, maxRetries = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Try to find and execute an agent
      const agent = await codebolt.agent.findAgent(task, 1, [], 'all', 'use_both');

      if (agent?.agents?.[0]) {
        const result = await codebolt.agent.startAgent(
          agent.agents[0].function.name,
          task
        );

        if (result.success) {
          return result;
        }

        lastError = result.error;
      } else {
        lastError = 'No suitable agent found';
      }

      // If failed, try with a different search strategy
      if (attempt < maxRetries) {
        console.log(`Attempt ${attempt} failed, trying alternative agent...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      lastError = error.message;
    }
  }

  throw new Error(`All ${maxRetries} attempts failed. Last error: ${lastError}`);
}
```

### Workflow 4: Parallel Agent Execution

```javascript
async function parallelAgentExecution(tasks) {
  // Find agents for all tasks in parallel
  const agentPromises = tasks.map(task =>
    codebolt.agent.findAgent(task, 1, [], 'all', 'use_vector_db')
  );

  const agents = await Promise.all(agentPromises);

  // Execute all agents in parallel
  const executionPromises = agents.map((agent, index) => {
    if (agent?.agents?.[0]) {
      return codebolt.agent.startAgent(
        agent.agents[0].function.name,
        tasks[index]
      );
    }
    return Promise.resolve({ success: false, error: 'No agent found' });
  });

  const results = await Promise.all(executionPromises);

  // Summarize results
  const summary = {
    total: tasks.length,
    successful: results.filter(r => r.success).length,
    failed: results.filter(r => !r.success).length,
    results: results
  };

  return summary;
}

// Usage
const tasks = [
  'Write unit tests for auth module',
  'Create API documentation',
  'Generate database migration script'
];

const summary = await parallelAgentExecution(tasks);
console.log(`Completed ${summary.successful}/${summary.total} tasks`);
```

### Workflow 5: Agent Pool Management

```javascript
class AgentPool {
  constructor() {
    this.agents = new Map();
    this.lastRefresh = null;
    this.refreshInterval = 5 * 60 * 1000; // 5 minutes
  }

  async refresh() {
    const now = Date.now();

    if (!this.lastRefresh || (now - this.lastRefresh) > this.refreshInterval) {
      const agentsList = await codebolt.agent.getAgentsList('all');

      for (const agent of agentsList.agents) {
        this.agents.set(agent.function.name, agent);
      }

      this.lastRefresh = now;
      console.log(`Agent pool refreshed: ${this.agents.size} agents loaded`);
    }
  }

  async getAgentForTask(task) {
    await this.refresh();

    // Find matching agent from pool
    const agent = await codebolt.agent.findAgent(
      task,
      1,
      Array.from(this.agents.keys()),
      'all',
      'use_vector_db'
    );

    return agent?.agents?.[0] || null;
  }

  async executeTask(task) {
    const agent = await this.getAgentForTask(task);

    if (!agent) {
      throw new Error('No suitable agent found for task');
    }

    return await codebolt.agent.startAgent(agent.function.name, task);
  }
}

// Usage
const pool = new AgentPool();
const result = await pool.executeTask('Create a login form component');
```

## Module Integration Examples

### Integration with VectorDB

```javascript
async function searchAndExecute() {
  // Add task to vector database for future reference
  await codebolt.vectordb.addVectorItem({
    task: 'Create user authentication system',
    category: 'security',
    complexity: 'high'
  });

  // Query similar past tasks
  const similarTasks = await codebolt.vectordb.queryVectorItem('authentication');

  // Use context from similar tasks to find appropriate agent
  const context = similarTasks.item?.[0]?.item || {};
  const agent = await codebolt.agent.findAgent(
    `Create ${context.category || 'security'} system`,
    1,
    [],
    'all',
    'use_ai'
  );

  if (agent?.agents?.[0]) {
    const result = await codebolt.agent.startAgent(
      agent.agents[0].function.name,
      context.task || 'Create authentication system'
    );

    return result;
  }
}
```

### Integration with LLM

```javascript
async function llmAssistedAgentSelection(task) {
  // Use LLM to analyze and refine the task
  const analysis = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are an expert at analyzing tasks and identifying agent requirements.'
      },
      {
        role: 'user',
        content: `Analyze this task and identify what type of agent would be best: "${task}"`
      }
    ],
    llmrole: 'assistant',
    max_tokens: 200
  });

  // Use LLM analysis to find appropriate agent
  const refinedTask = analysis.content;
  const agent = await codebolt.agent.findAgent(refinedTask, 1, [], 'all', 'use_ai');

  if (agent?.agents?.[0]) {
    return await codebolt.agent.startAgent(
      agent.agents[0].function.name,
      task
    );
  }
}
```

### Integration with File System

```javascript
async function fileBasedAgentWorkflow(projectPath) {
  // Analyze project structure
  const structure = await codebolt.fs.listFiles(projectPath);

  // Identify project type and find appropriate agent
  const projectType = structure.some(f => f.name === 'package.json')
    ? 'nodejs'
    : 'generic';

  const agent = await codebolt.agent.findAgent(
    `Generate tests for ${projectType} project`,
    1,
    [],
    'local_only',
    'use_vector_db'
  );

  if (agent?.agents?.[0]) {
    const result = await codebolt.agent.startAgent(
      agent.agents[0].function.name,
      `Generate comprehensive test suite for project at ${projectPath}`
    );

    // Save generated tests
    if (result.success && result.result) {
      await codebolt.fs.writeFile(
        `${projectPath}/test-suite.generated.js`,
        result.result
      );
    }

    return result;
  }
}
```

## Best Practices

### 1. Agent Selection Strategy

```javascript
// Good: Use specific task descriptions
const agent = await codebolt.agent.findAgent(
  'Create a RESTful API with Express.js including JWT authentication',
  1,
  [],
  'all',
  'use_both'
);

// Bad: Vague task descriptions
const agent = await codebolt.agent.findAgent('Write code');
```

### 2. Error Handling

```javascript
async function robustAgentExecution(agentId, task) {
  try {
    const result = await codebolt.agent.startAgent(agentId, task);

    if (!result.success) {
      // Handle business logic errors
      console.error('Agent execution failed:', result.error);

      // Log for debugging
      await codebolt.fs.writeFile(
        `./logs/agent-error-${Date.now()}.json`,
        JSON.stringify(result, null, 2)
      );

      return { success: false, error: result.error };
    }

    return result;
  } catch (error) {
    // Handle system-level errors
    console.error('System error during agent execution:', error);

    return {
      success: false,
      error: 'System error: ' + error.message
    };
  }
}
```

### 3. Performance Optimization

```javascript
// Cache agent lookups
const agentCache = new Map();

async function getCachedAgent(task) {
  const cacheKey = task.toLowerCase().trim();

  if (agentCache.has(cacheKey)) {
    return agentCache.get(cacheKey);
  }

  const agent = await codebolt.agent.findAgent(task, 1, [], 'all', 'use_vector_db');

  if (agent?.agents?.[0]) {
    agentCache.set(cacheKey, agent.agents[0]);
    // Clear cache after 5 minutes
    setTimeout(() => agentCache.delete(cacheKey), 5 * 60 * 1000);
  }

  return agent?.agents?.[0] || null;
}
```

### 4. Task Description Best Practices

```javascript
// Good: Clear, specific, actionable
const goodTask = `
Create a React component for a user profile card with:
- Avatar image
- User name and title
- Email and phone number
- Social media links
- Responsive design for mobile and desktop
`;

// Bad: Vague and incomplete
const badTask = 'Make a profile thing';
```

### 5. Resource Management

```javascript
// Monitor agent execution time
async function monitoredAgentExecution(agentId, task, timeout = 60000) {
  const startTime = Date.now();

  try {
    // Set up timeout
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Agent execution timeout')), timeout)
    );

    // Execute agent with timeout
    const result = await Promise.race([
      codebolt.agent.startAgent(agentId, task),
      timeoutPromise
    ]);

    const duration = Date.now() - startTime;
    console.log(`Agent completed in ${duration}ms`);

    return { ...result, executionTime: duration };
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`Agent failed after ${duration}ms:`, error);

    return {
      success: false,
      error: error.message,
      executionTime: duration
    };
  }
}
```

### 6. Validation Before Execution

```javascript
async function validatedAgentExecution(agentId, task) {
  // Validate agent exists
  const agentDetails = await codebolt.agent.getAgentsDetail([agentId]);

  if (!agentDetails.success || !agentDetails.payload.agents[0]) {
    throw new Error(`Agent ${agentId} not found`);
  }

  const agent = agentDetails.payload.agents[0];

  // Check agent status
  if (agent.status !== 'enabled') {
    throw new Error(`Agent ${agentId} is not enabled`);
  }

  // Validate task is not empty
  if (!task || task.trim().length === 0) {
    throw new Error('Task description cannot be empty');
  }

  // Execute with validated inputs
  return await codebolt.agent.startAgent(agentId, task);
}
```

### 7. Logging and Monitoring

```javascript
class AgentMonitor {
  constructor() {
    this.executions = [];
  }

  async monitorExecution(agentId, task) {
    const executionId = `exec_${Date.now()}`;
    const startTime = Date.now();

    console.log(`[${executionId}] Starting agent: ${agentId}`);
    console.log(`[${executionId}] Task: ${task.substring(0, 100)}...`);

    try {
      const result = await codebolt.agent.startAgent(agentId, task);

      const duration = Date.now() - startTime;
      const logEntry = {
        executionId,
        agentId,
        task,
        success: result.success,
        duration,
        timestamp: new Date().toISOString()
      };

      this.executions.push(logEntry);

      console.log(`[${executionId}] Completed in ${duration}ms`);
      console.log(`[${executionId}] Success: ${result.success}`);

      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`[${executionId}] Failed after ${duration}ms:`, error);

      this.executions.push({
        executionId,
        agentId,
        task,
        success: false,
        error: error.message,
        duration,
        timestamp: new Date().toISOString()
      });

      throw error;
    }
  }

  getStats() {
    const total = this.executions.length;
    const successful = this.executions.filter(e => e.success).length;
    const failed = total - successful;
    const avgDuration = total > 0
      ? this.executions.reduce((sum, e) => sum + e.duration, 0) / total
      : 0;

    return { total, successful, failed, avgDuration };
  }
}
```

## Common Pitfalls and Solutions

### Pitfall 1: Not Handling Agent Availability

```javascript
// Problem: Assuming agent always exists
const agent = await codebolt.agent.findAgent('some task');
const result = await codebolt.agent.startAgent(agent.agents[0].function.name, task);

// Solution: Check if agent was found
const agent = await codebolt.agent.findAgent('some task');
if (!agent?.agents?.[0]) {
  throw new Error('No suitable agent found');
}
const result = await codebolt.agent.startAgent(agent.agents[0].function.name, task);
```

### Pitfall 2: Ignoring Agent Capabilities

```javascript
// Problem: Using agent without checking capabilities
const result = await codebolt.agent.startAgent(agentId, task);

// Solution: Verify agent capabilities first
const details = await codebolt.agent.getAgentsDetail([agentId]);
const agent = details.payload.agents[0];

if (!agent.capabilities?.includes('typescript')) {
  console.warn('Agent may not support TypeScript tasks');
}

const result = await codebolt.agent.startAgent(agentId, task);
```

### Pitfall 3: No Retry Logic

```javascript
// Problem: Single attempt, no recovery
const result = await codebolt.agent.startAgent(agentId, task);

// Solution: Implement retry with exponential backoff
async function retryWithBackoff(agentId, task, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await codebolt.agent.startAgent(agentId, task);
      if (result.success) return result;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
    }
  }
}
```

### Pitfall 4: Not Cleaning Up Resources

```javascript
// Problem: Long-running agents without cleanup
const result = await codebolt.agent.startAgent(agentId, complexTask);

// Solution: Implement timeout and cleanup
async function executionWithTimeout(agentId, task, timeout = 30000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const result = await codebolt.agent.startAgent(agentId, task);
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Agent execution timed out');
    }
    throw error;
  }
}
```

## Performance Considerations

1. **Agent Discovery**: Use `use_vector_db` for faster agent discovery when you have many agents
2. **Local vs Remote**: Prefer `local_only` agents for faster execution when available
3. **Caching**: Cache agent lookups to avoid repeated discovery calls
4. **Parallel Execution**: Execute multiple independent agents in parallel when possible
5. **Timeout Management**: Always implement timeouts for agent execution to prevent hanging

## Security Considerations

1. **Input Validation**: Always validate task descriptions before execution
2. **Agent Isolation**: Be aware of what resources agents can access
3. **Error Messages**: Don't expose sensitive information in error messages
4. **Rate Limiting**: Implement rate limiting for agent execution in production
5. **Audit Logging**: Log all agent executions for security auditing
