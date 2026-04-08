---
name: FindAgent
cbbaseinfo:
  description: Finds an agent suitable for the specified task using AI and/or vector database filtering.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: "The task description for which an agent is needed (e.g., \"Write a function to sum of Two number\", \"create node js app\")."
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
    signatureTypeName: "Promise<FindAgentByTaskResponse>"
    description: A promise that resolves with a `FindAgentByTaskResponse` object containing an array of found agents.
data:
  name: findAgent
  category: agent
  link: findAgent.md
---
# FindAgent

```typescript
codebolt.agent.findAgent(task: string, maxResult: number, agents: array, agentLocation: string, getFrom: string): Promise<FindAgentByTaskResponse>
```

Finds an agent suitable for the specified task using AI and/or vector database filtering.
### Parameters

- **`task`** (string): The task description for which an agent is needed (e.g., "Write a function to sum of Two number", "create node js app").
- **`maxResult`** (number): Optional: Maximum number of agents to return. Defaults to 1.
- **`agents`** (array): Optional: List of specific agent names or IDs to filter from the vector database. Defaults to an empty array (no filtering).
- **`agentLocation`** (string): Optional: Location preference for agents. Defaults to 'all'. Possible values are 'all', 'local_only', 'remote_only'.
- **`getFrom`** (string): Optional: The filtering method to use. Defaults to 'use_vector_db'. Possible values are 'use_ai', 'use_vector_db', 'use_both'.

### Returns

- **`Promise<FindAgentByTaskResponse>`**: A promise that resolves with a [`FindAgentByTaskResponse`](/docs/api/11_doc-type-ref/types/interfaces/FindAgentByTaskResponse) object containing an array of found agents.

### Response Structure

The method returns a Promise that resolves to a [`FindAgentByTaskResponse`](/docs/api/11_doc-type-ref/types/interfaces/FindAgentByTaskResponse) object with the following properties:

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

### Advanced Examples

#### Example 5: Intelligent Task Analysis

```javascript
async function findAgentWithAnalysis(task) {
  // Use LLM to analyze the task first
  const analysis = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'Analyze the task and extract key requirements, technologies, and complexity level.'
      },
      {
        role: 'user',
        content: `Analyze this task: "${task}"`
      }
    ],
    llmrole: 'assistant',
    max_tokens: 300
  });

  console.log('Task Analysis:', analysis.content);

  // Use the analysis to find a better matching agent
  const enhancedTask = `${task}. Context: ${analysis.content}`;
  const agents = await codebolt.agent.findAgent(
    enhancedTask,
    3,
    [],
    'all',
    'use_ai'
  );

  return agents;
}

// Usage
const result = await findAgentWithAnalysis('Build a microservices architecture');
```

#### Example 6: Progressive Agent Discovery

```javascript
async function findAgentProgressively(task) {
  // Start with local agents only (faster)
  console.log('Searching local agents...');
  let agents = await codebolt.agent.findAgent(task, 1, [], 'local_only', 'use_vector_db');

  if (!agents?.agents || agents.agents.length === 0) {
    console.log('No local agents found, searching remote...');
    agents = await codebolt.agent.findAgent(task, 1, [], 'remote_only', 'use_vector_db');
  }

  if (!agents?.agents || agents.agents.length === 0) {
    console.log('No remote agents found with vector DB, trying AI...');
    agents = await codebolt.agent.findAgent(task, 3, [], 'all', 'use_ai');
  }

  if (!agents?.agents || agents.agents.length === 0) {
    console.log('No agents found with AI, trying both methods...');
    agents = await codebolt.agent.findAgent(task, 5, [], 'all', 'use_both');
  }

  return agents;
}
```

#### Example 7: Agent Ranking and Selection

```javascript
async function findAndRankAgents(task, maxResults = 5) {
  const agents = await codebolt.agent.findAgent(
    task,
    maxResults,
    [],
    'all',
    'use_both'
  );

  if (!agents?.agents || agents.agents.length === 0) {
    throw new Error('No agents found for the task');
  }

  // Get detailed information for each agent
  const agentIds = agents.agents.map(a => a.function.name);
  const details = await codebolt.agent.getAgentsDetail(agentIds);

  // Rank agents by multiple criteria
  const rankedAgents = agents.agents.map(agent => {
    const detail = details.payload.agents.find(a => a.id === agent.function.name);
    return {
      ...agent,
      details: detail,
      score: calculateAgentScore(detail, task)
    };
  }).sort((a, b) => b.score - a.score);

  console.log('Ranked Agents:');
  rankedAgents.forEach((agent, index) => {
    console.log(`${index + 1}. ${agent.details?.name} (Score: ${agent.score})`);
  });

  return rankedAgents;
}

function calculateAgentScore(agentDetails, task) {
  let score = 0;

  // Prefer enabled agents
  if (agentDetails?.status === 'enabled') score += 10;

  // Prefer local agents (faster)
  if (agentDetails?.isLocal) score += 5;

  // Check if capabilities match task keywords
  const taskLower = task.toLowerCase();
  if (agentDetails?.capabilities) {
    agentDetails.capabilities.forEach(cap => {
      if (taskLower.includes(cap.toLowerCase())) {
        score += 3;
      }
    });
  }

  return score;
}
```

#### Example 8: Context-Aware Agent Discovery

```javascript
async function findAgentWithContext(task, context = {}) {
  const {
    projectType = 'generic',
    techStack = [],
    complexity = 'medium',
    priority = 'local'
  } = context;

  // Build enhanced task description
  const enhancedTask = `
    Task: ${task}
    Project Type: ${projectType}
    Tech Stack: ${techStack.join(', ')}
    Complexity: ${complexity}
  `.trim();

  // Determine search strategy based on context
  const agentLocation = priority === 'speed' ? 'local_only' : 'all';
  const getFrom = complexity === 'high' ? 'use_ai' : 'use_vector_db';

  console.log(`Searching for agent with context: ${JSON.stringify(context)}`);

  const agents = await codebolt.agent.findAgent(
    enhancedTask,
    3,
    techStack.length > 0 ? techStack : [],
    agentLocation,
    getFrom
  );

  return agents;
}

// Usage
const agents = await findAgentWithContext(
  'Create authentication system',
  {
    projectType: 'web-app',
    techStack: ['react', 'nodejs', 'jwt'],
    complexity: 'high',
    priority: 'quality'
  }
);
```

### Integration Examples

#### Example 9: Integration with Task Queue

```javascript
class AgentTaskQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  async enqueue(task) {
    this.queue.push(task);
    console.log(`Task queued: ${task.substring(0, 50)}...`);

    if (!this.processing) {
      this.processQueue();
    }
  }

  async processQueue() {
    this.processing = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();

      try {
        // Find agent for the task
        const agents = await codebolt.agent.findAgent(task, 1, [], 'all', 'use_vector_db');

        if (agents?.agents?.[0]) {
          const agentId = agents.agents[0].function.name;
          console.log(`Found agent ${agentId} for task`);

          // Execute the task
          const result = await codebolt.agent.startAgent(agentId, task);
          console.log(`Task completed: ${result.success ? 'SUCCESS' : 'FAILED'}`);
        } else {
          console.error('No agent found for task');
        }
      } catch (error) {
        console.error('Error processing task:', error.message);
      }
    }

    this.processing = false;
  }
}

// Usage
const queue = new AgentTaskQueue();
queue.enqueue('Write unit tests for user service');
queue.enqueue('Generate API documentation');
queue.enqueue('Create database migration script');
```

#### Example 10: Multi-Stage Agent Pipeline

```javascript
async function executeAgentPipeline(task, stages) {
  const results = [];
  let currentTask = task;

  for (const stage of stages) {
    console.log(`Executing stage: ${stage.name}`);

    try {
      // Find agent for this stage
      const agents = await codebolt.agent.findAgent(
        `${stage.task}: ${currentTask}`,
        1,
        stage.preferredAgents || [],
        'all',
        'use_ai'
      );

      if (!agents?.agents?.[0]) {
        throw new Error(`No agent found for stage: ${stage.name}`);
      }

      const agentId = agents.agents[0].function.name;

      // Execute the stage
      const result = await codebolt.agent.startAgent(agentId, currentTask);

      results.push({
        stage: stage.name,
        success: result.success,
        result: result.result
      });

      if (!result.success) {
        console.error(`Stage ${stage.name} failed, stopping pipeline`);
        break;
      }

      // Update task for next stage
      currentTask = result.result || currentTask;

    } catch (error) {
      console.error(`Error in stage ${stage.name}:`, error.message);
      results.push({
        stage: stage.name,
        success: false,
        error: error.message
      });
      break;
    }
  }

  return results;
}

// Usage
const pipelineResults = await executeAgentPipeline(
  'Build a REST API for user management',
  [
    { name: 'design', task: 'Design API structure', preferredAgents: ['api-designer'] },
    { name: 'implementation', task: 'Implement API endpoints' },
    { name: 'testing', task: 'Write comprehensive tests' },
    { name: 'documentation', task: 'Generate API documentation' }
  ]
);
```

### Error Handling Examples

#### Example 11: Comprehensive Error Handling

```javascript
async function findAgentSafely(task, options = {}) {
  const {
    maxResult = 1,
    agents = [],
    agentLocation = 'all',
    getFrom = 'use_vector_db',
    timeout = 30000
  } = options;

  try {
    // Set up timeout
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Agent discovery timeout')), timeout)
    );

    // Find agent with timeout
    const result = await Promise.race([
      codebolt.agent.findAgent(task, maxResult, agents, agentLocation, getFrom),
      timeoutPromise
    ]);

    // Validate response
    if (!result) {
      throw new Error('No response from agent discovery');
    }

    if (!result.agents || result.agents.length === 0) {
      console.warn('No agents found for task:', task);

      // Return empty result instead of throwing
      return {
        success: false,
        agents: [],
        message: 'No agents found matching the criteria',
        searchedWith: { task, maxResult, agents, agentLocation, getFrom }
      };
    }

    console.log(`Found ${result.agents.length} agent(s) for task`);
    return result;

  } catch (error) {
    console.error('Error finding agent:', error.message);

    // Log error details
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      task,
      options
    };

    // Return error in consistent format
    return {
      success: false,
      error: error.message,
      agents: [],
      errorLog
    };
  }
}

// Usage
const result = await findAgentSafely('Create a dashboard component', {
  maxResult: 3,
  agentLocation: 'local_only',
  timeout: 15000
});

if (result.success && result.agents.length > 0) {
  console.log('Agent found:', result.agents[0].function.name);
} else {
  console.error('Failed to find agent:', result.error);
}
```

#### Example 12: Fallback Strategy

```javascript
async function findAgentWithFallback(task) {
  const strategies = [
    { location: 'local_only', method: 'use_vector_db', name: 'Local Vector DB' },
    { location: 'local_only', method: 'use_ai', name: 'Local AI' },
    { location: 'all', method: 'use_vector_db', name: 'All Vector DB' },
    { location: 'all', method: 'use_ai', name: 'All AI' },
    { location: 'all', method: 'use_both', name: 'All Both Methods' }
  ];

  for (const strategy of strategies) {
    console.log(`Trying strategy: ${strategy.name}`);

    try {
      const result = await codebolt.agent.findAgent(
        task,
        1,
        [],
        strategy.location,
        strategy.method
      );

      if (result?.agents?.[0]) {
        console.log(`✅ Success with strategy: ${strategy.name}`);
        return {
          ...result,
          strategy: strategy.name
        };
      }
    } catch (error) {
      console.warn(`Strategy ${strategy.name} failed:`, error.message);
    }
  }

  throw new Error('All agent discovery strategies failed');
}
```

### Performance Optimization

#### Example 13: Caching Agent Discoveries

```javascript
class AgentDiscoveryCache {
  constructor(ttl = 10 * 60 * 1000) { // 10 minutes TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  generateKey(task, options) {
    return JSON.stringify({
      task: task.toLowerCase().trim(),
      ...options
    });
  }

  async findAgent(task, options = {}) {
    const key = this.generateKey(task, options);

    // Check cache
    if (this.cache.has(key)) {
      const cached = this.cache.get(key);
      if (Date.now() - cached.timestamp < this.ttl) {
        console.log('Returning cached agent discovery result');
        return cached.result;
      }
      this.cache.delete(key);
    }

    // Fetch fresh result
    console.log('Fetching fresh agent discovery');
    const result = await codebolt.agent.findAgent(
      task,
      options.maxResult || 1,
      options.agents || [],
      options.agentLocation || 'all',
      options.getFrom || 'use_vector_db'
    );

    // Cache the result
    this.cache.set(key, {
      timestamp: Date.now(),
      result
    });

    return result;
  }

  clear() {
    this.cache.clear();
    console.log('Agent discovery cache cleared');
  }

  getStats() {
    return {
      size: this.cache.size,
      ttl: this.ttl,
      entries: Array.from(this.cache.keys())
    };
  }
}

// Usage
const cache = new AgentDiscoveryCache();
const agents = await cache.findAgent('Create React component', {
  maxResult: 3,
  agentLocation: 'local_only'
});
```

### Best Practices

#### Example 14: Task Description Enhancement

```javascript
async function enhanceTaskDescription(basicTask) {
  // Use LLM to enhance the task description
  const enhancement = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are an expert at creating detailed, actionable task descriptions for AI agents. Enhance the given task with specific requirements, constraints, and expected outcomes.'
      },
      {
        role: 'user',
        content: `Enhance this task description: "${basicTask}"`
      }
    ],
    llmrole: 'assistant',
    max_tokens: 500,
    temperature: 0.3
  });

  const enhancedTask = enhancement.content.trim();
  console.log('Original task:', basicTask);
  console.log('Enhanced task:', enhancedTask);

  return enhancedTask;
}

async function findAgentWithEnhancedTask(basicTask) {
  const enhancedTask = await enhanceTaskDescription(basicTask);

  // Find agent using enhanced description
  const agents = await codebolt.agent.findAgent(
    enhancedTask,
    1,
    [],
    'all',
    'use_ai'
  );

  return agents;
}
```

#### Example 15: Agent Discovery Metrics

```javascript
class AgentDiscoveryMetrics {
  constructor() {
    this.metrics = {
      total: 0,
      successful: 0,
      failed: 0,
      byLocation: {},
      byMethod: {},
      byTaskType: {},
      averageTime: 0
    };
    this.timings = [];
  }

  async measureDiscovery(task, options = {}) {
    const startTime = Date.now();
    const taskType = this.categorizeTask(task);

    try {
      const result = await codebolt.agent.findAgent(
        task,
        options.maxResult || 1,
        options.agents || [],
        options.agentLocation || 'all',
        options.getFrom || 'use_vector_db'
      );

      const duration = Date.now() - startTime;
      this.recordMetrics(taskType, options, duration, result.success);

      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordMetrics(taskType, options, duration, false);
      throw error;
    }
  }

  categorizeTask(task) {
    const lower = task.toLowerCase();
    if (lower.includes('test')) return 'testing';
    if (lower.includes('api') || lower.includes('server')) return 'backend';
    if (lower.includes('component') || lower.includes('ui')) return 'frontend';
    if (lower.includes('debug') || lower.includes('fix')) return 'debugging';
    return 'general';
  }

  recordMetrics(taskType, options, duration, success) {
    this.metrics.total++;
    if (success) this.metrics.successful++;
    else this.metrics.failed++;

    this.timings.push(duration);
    this.metrics.averageTime = this.timings.reduce((a, b) => a + b, 0) / this.timings.length;

    // Track by location
    const location = options.agentLocation || 'all';
    this.metrics.byLocation[location] = (this.metrics.byLocation[location] || 0) + 1;

    // Track by method
    const method = options.getFrom || 'use_vector_db';
    this.metrics.byMethod[method] = (this.metrics.byMethod[method] || 0) + 1;

    // Track by task type
    this.metrics.byTaskType[taskType] = (this.metrics.byTaskType[taskType] || 0) + 1;
  }

  getReport() {
    return {
      ...this.metrics,
      successRate: ((this.metrics.successful / this.metrics.total) * 100).toFixed(2) + '%'
    };
  }
}

// Usage
const metrics = new AgentDiscoveryMetrics();
const result = await metrics.measureDiscovery('Create unit tests for API', {
  agentLocation: 'local_only'
});
console.log('Metrics report:', metrics.getReport());
```

### Common Pitfalls and Solutions

#### Pitfall 1: Over-Specific Tasks

```javascript
// Problem: Task too specific, limiting agent options
const agent = await codebolt.agent.findAgent(
  'Create a React functional component with TypeScript, hooks, and material-ui that fetches data from a REST API'
);

// Solution: Start broader, then refine
const agents = await codebolt.agent.findAgent(
  'Create a React component with data fetching',
  5,
  [],
  'all',
  'use_vector_db'
);
// Then select the best match and provide specifics in the task
```

#### Pitfall 2: Ignoring Search Strategy

```javascript
// Problem: Using default strategy for all cases
const agent = await codebolt.agent.findAgent(complexTask);

// Solution: Choose strategy based on task complexity
const strategy = taskComplexity === 'high'
  ? { agentLocation: 'all', getFrom: 'use_ai' }
  : { agentLocation: 'local_only', getFrom: 'use_vector_db' };

const agent = await codebolt.agent.findAgent(task, 1, [], strategy.agentLocation, strategy.getFrom);
```

#### Pitfall 3: Not Handling No Results

```javascript
// Problem: Assuming agent is always found
const result = await codebolt.agent.findAgent(task);
const agentId = result.agents[0].function.name; // Will fail if no agents!

// Solution: Always check for results
const result = await codebolt.agent.findAgent(task);
if (!result?.agents || result.agents.length === 0) {
  throw new Error(`No agents found for task: ${task}`);
}
const agentId = result.agents[0].function.name;
```

### Performance Considerations

1. **Search Method Selection**: Use `use_vector_db` for faster searches when you have many agents, `use_ai` for better semantic understanding
2. **Location Preference**: Use `local_only` when speed is critical, `all` when you need the best match regardless of location
3. **Result Limiting**: Set reasonable `maxResult` values to avoid unnecessary processing
4. **Caching**: Cache frequently used agent discoveries to reduce API calls
5. **Parallel Searches**: For independent tasks, search for agents in parallel

### Notes

- The `task` parameter should be a clear and concise description of the desired action.
- `agentLocation` helps you control where to search for agents, which can be useful for security or performance reasons.
- `getFrom` allows you to choose between a faster vector-based search, a more intelligent AI-based search, or a combination of both.
- The response will contain a list of agents that you can then use with `codebolt.agent.startAgent`.
- Consider implementing caching and fallback strategies for production use.
- Task descriptions significantly impact agent discovery quality - invest time in crafting good descriptions.