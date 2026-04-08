---
name: GetAgentsList
cbbaseinfo:
  description: Retrieves a list of agents based on the specified type.
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: "Optional: The type of agents to list. Defaults to 'downloaded'. Possible values are 'downloaded', 'all', 'local'."
  returns:
    signatureTypeName: "Promise<ListAgentsResponse>"
    description: A promise that resolves with a `ListAgentsResponse` object containing the list of agents.
data:
  name: getAgentsList
  category: agent
  link: getAgentsList.md
---
# GetAgentsList

```typescript
codebolt.agent.getAgentsList(type: string): Promise<ListAgentsResponse>
```

Retrieves a list of agents based on the specified type.
### Parameters

- **`type`** (string): Optional: The type of agents to list. Defaults to 'downloaded'. Possible values are 'downloaded', 'all', 'local'.

### Returns

- **`Promise<ListAgentsResponse>`**: A promise that resolves with a [`ListAgentsResponse`](/docs/api/11_doc-type-ref/types/interfaces/ListAgentsResponse) object containing the list of agents.

### Response Structure

The method returns a Promise that resolves to a [`ListAgentsResponse`](/docs/api/11_doc-type-ref/types/interfaces/ListAgentsResponse) object with the following properties:

- **`type`** (string): Always "listAgentsResponse".
- **`agents`** (array, optional): An array of agent objects.
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
// Example 1: Get the list of downloaded agents (default behavior)
async function getDownloadedAgents() {
  const downloadedAgents = await codebolt.agent.getAgentsList(); // 'downloaded' is the default
  console.log("Downloaded Agents:", downloadedAgents);
  if (downloadedAgents.success && downloadedAgents.agents.length > 0) {
    console.log(`Found ${downloadedAgents.agents.length} downloaded agents.`);
    const firstAgent = downloadedAgents.agents[0];
    console.log(`First agent name: ${firstAgent.function.name}`);
  }
}
getDownloadedAgents();

// Example 2: Get the list of all available agents
async function getAllAgents() {
  const allAgents = await codebolt.agent.getAgentsList('all');
  console.log("All Agents:", allAgents);
  if (allAgents.success) {
    console.log(`Total number of agents: ${allAgents.agents.length}`);
  }
}
getAllAgents();

// Example 3: Get the list of only local agents
async function getLocalAgents() {
  const localAgents = await codebolt.agent.getAgentsList('local');
  console.log("Local Agents:", localAgents);
  if (localAgents.success) {
    console.log(`Found ${localAgents.agents.length} local agents.`);
  }
}
getLocalAgents();
```

### Advanced Examples

#### Example 4: Filter Agents by Keyword

```javascript
async function filterAgentsByKeyword(keyword, type = 'all') {
  const agentsList = await codebolt.agent.getAgentsList(type);

  if (!agentsList.success) {
    throw new Error('Failed to retrieve agents list');
  }

  const filtered = agentsList.agents.filter(agent => {
    const name = agent.function.name.toLowerCase();
    const description = agent.function.description.toLowerCase();
    return name.includes(keyword.toLowerCase()) ||
           description.includes(keyword.toLowerCase());
  });

  console.log(`Found ${filtered.length} agents matching "${keyword}":`);
  filtered.forEach(agent => {
    console.log(`  - ${agent.function.name}: ${agent.function.description}`);
  });

  return filtered;
}

// Usage
const codeAgents = await filterAgentsByKeyword('code');
const testAgents = await filterAgentsByKeyword('test');
```

#### Example 5: Agent Discovery and Selection

```javascript
async function discoverAndSelectAgents(task) {
  // Get all available agents
  const allAgents = await codebolt.agent.getAgentsList('all');

  if (!allAgents.success) {
    throw new Error('Failed to retrieve agents');
  }

  // Analyze task to identify requirements
  const taskLower = task.toLowerCase();
  const keywords = taskLower.split(/\s+/).filter(w => w.length > 3);

  // Score agents based on keyword matches
  const scoredAgents = allAgents.agents.map(agent => {
    const description = agent.function.description.toLowerCase();
    const name = agent.function.name.toLowerCase();

    let score = 0;
    keywords.forEach(keyword => {
      if (name.includes(keyword)) score += 3;
      if (description.includes(keyword)) score += 1;
    });

    return {
      agent,
      score,
      name: agent.function.name,
      description: agent.function.description
    };
  }).filter(a => a.score > 0)
   .sort((a, b) => b.score - a.score)
   .slice(0, 5); // Top 5 matches

  console.log('Top matched agents for task:');
  scoredAgents.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} (score: ${item.score})`);
    console.log(`   ${item.description}`);
  });

  return scoredAgents;
}

// Usage
const matches = await discoverAndSelectAgents('Create unit tests for authentication module');
```

#### Example 6: Comparative Agent Analysis

```javascript
async function compareAgentTypes() {
  // Get agents by type
  const [downloaded, local, all] = await Promise.all([
    codebolt.agent.getAgentsList('downloaded'),
    codebolt.agent.getAgentsList('local'),
    codebolt.agent.getAgentsList('all')
  ]);

  const analysis = {
    downloaded: downloaded.success ? downloaded.agents.length : 0,
    local: local.success ? local.agents.length : 0,
    all: all.success ? all.agents.length : 0,
    remote: 0
  };

  // Calculate remote agents
  if (all.success && local.success) {
    const localIds = new Set(local.agents.map(a => a.function.name));
    const remoteAgents = all.agents.filter(a => !localIds.has(a.function.name));
    analysis.remote = remoteAgents.length;
  }

  console.log('Agent Type Distribution:');
  console.log(`  Downloaded: ${analysis.downloaded}`);
  console.log(`  Local: ${analysis.local}`);
  console.log(`  Remote: ${analysis.remote}`);
  console.log(`  Total Available: ${analysis.all}`);

  return analysis;
}

// Usage
const distribution = await compareAgentTypes();
```

### Integration Examples

#### Example 7: Build Agent Catalog

```javascript
async function buildAgentCatalog() {
  const allAgents = await codebolt.agent.getAgentsList('all');

  if (!allAgents.success) {
    throw new Error('Failed to retrieve agents');
  }

  const catalog = {
    total: allAgents.agents.length,
    byCategory: {},
    byCapability: {},
    agents: []
  };

  // Categorize agents
  for (const agent of allAgents.agents) {
    const info = {
      id: agent.function.name,
      name: agent.function.name,
      description: agent.function.description,
      parameters: agent.function.parameters
    };

    catalog.agents.push(info);

    // Extract category from description
    const desc = agent.function.description.toLowerCase();
    if (desc.includes('code') || desc.includes('generate')) {
      (catalog.byCategory.codeGeneration = catalog.byCategory.codeGeneration || []).push(info.id);
    }
    if (desc.includes('test') || desc.includes('spec')) {
      (catalog.byCategory.testing = catalog.byCategory.testing || []).push(info.id);
    }
    if (desc.includes('debug') || desc.includes('fix')) {
      (catalog.byCategory.debugging = catalog.byCategory.debugging || []).push(info.id);
    }
    if (desc.includes('document')) {
      (catalog.byCategory.documentation = catalog.byCategory.documentation || []).push(info.id);
    }
  }

  console.log('Agent Catalog:', JSON.stringify(catalog, null, 2));

  // Save catalog to file
  await codebolt.fs.writeFile(
    './agent-catalog.json',
    JSON.stringify(catalog, null, 2)
  );

  return catalog;
}

// Usage
const catalog = await buildAgentCatalog();
```

#### Example 8: Agent Availability Monitor

```javascript
class AgentMonitor {
  constructor() {
    this.lastCheck = null;
    this.previousCounts = {};
  }

  async checkAvailability() {
    const [downloaded, local, all] = await Promise.all([
      codebolt.agent.getAgentsList('downloaded').catch(() => ({ success: false, agents: [] })),
      codebolt.agent.getAgentsList('local').catch(() => ({ success: false, agents: [] })),
      codebolt.agent.getAgentsList('all').catch(() => ({ success: false, agents: [] }))
    ]);

    const currentCounts = {
      downloaded: downloaded.success ? downloaded.agents.length : 0,
      local: local.success ? local.agents.length : 0,
      all: all.success ? all.agents.length : 0,
      timestamp: new Date().toISOString()
    };

    const changes = this.detectChanges(currentCounts);

    this.lastCheck = currentCounts;

    return {
      current: currentCounts,
      changes,
      previous: this.previousCounts
    };
  }

  detectChanges(current) {
    const changes = [];

    if (this.previousCounts.downloaded !== undefined) {
      if (current.downloaded !== this.previousCounts.downloaded) {
        changes.push({
          type: 'downloaded',
          from: this.previousCounts.downloaded,
          to: current.downloaded
        });
      }
      if (current.local !== this.previousCounts.local) {
        changes.push({
          type: 'local',
          from: this.previousCounts.local,
          to: current.local
        });
      }
    }

    this.previousCounts = { ...current };

    return changes;
  }
}

// Usage
const monitor = new AgentMonitor();
const status = await monitor.checkAvailability();
console.log('Agent Status:', status);
if (status.changes.length > 0) {
  console.log('Changes detected:', status.changes);
}
```

### Best Practices

#### Example 9: Cached Agent List

```javascript
class AgentListCache {
  constructor(ttl = 5 * 60 * 1000) { // 5 minutes TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  async getList(type = 'all') {
    const now = Date.now();

    if (this.cache.has(type)) {
      const cached = this.cache.get(type);
      if (now - cached.timestamp < this.ttl) {
        console.log(`Returning cached ${type} agent list`);
        return cached.data;
      }
      this.cache.delete(type);
    }

    console.log(`Fetching fresh ${type} agent list`);
    const data = await codebolt.agent.getAgentsList(type);

    this.cache.set(type, {
      timestamp: now,
      data
    });

    return data;
  }

  clear() {
    this.cache.clear();
    console.log('Agent list cache cleared');
  }
}
```

#### Example 10: Agent Discovery with Fallback

```javascript
async function getAgentsWithFallback() {
  const strategies = [
    { type: 'local', priority: 1 },
    { type: 'downloaded', priority: 2 },
    { type: 'all', priority: 3 }
  ];

  for (const strategy of strategies) {
    try {
      console.log(`Trying ${strategy.type} agents...`);
      const result = await codebolt.agent.getAgentsList(strategy.type);

      if (result.success && result.agents.length > 0) {
        console.log(`✅ Found ${result.agents.length} ${strategy.type} agents`);
        return {
          ...result,
          strategy: strategy.type
        };
      }
    } catch (error) {
      console.warn(`Failed to get ${strategy.type} agents:`, error.message);
    }
  }

  throw new Error('All agent list strategies failed');
}
```

### Common Pitfalls and Solutions

#### Pitfall 1: Not Checking Success Status

```javascript
// Problem: Assuming success
const agents = await codebolt.agent.getAgentsList('all');
agents.agents.forEach(agent => console.log(agent)); // May fail

// Solution: Always check success
const agents = await codebolt.agent.getAgentsList('all');
if (agents.success && agents.agents) {
  agents.agents.forEach(agent => console.log(agent));
}
```

#### Pitfall 2: Ignoring Empty Results

```javascript
// Problem: Not handling empty lists
const agents = await codebolt.agent.getAgentsList('local');
const firstAgent = agents.agents[0]; // May be undefined

// Solution: Check for empty arrays
const agents = await codebolt.agent.getAgentsList('local');
if (agents.success && agents.agents?.length > 0) {
  const firstAgent = agents.agents[0];
} else {
  console.log('No agents found');
}
```

### Performance Considerations

1. **Caching**: Cache agent lists to avoid repeated API calls
2. **Parallel Requests**: Request multiple agent types in parallel when needed
3. **Selective Loading**: Only load the agent type you need
4. **Background Refresh**: Refresh agent lists periodically in the background

### Notes

- This function is useful for discovering available agents before using `findAgent` or `startAgent`.
- The `agents` array in the response provides the necessary information, like the `name`, to interact with specific agents.
- Always check the `success` property before accessing the `agents` array.
- Different agent types may have different availability depending on your configuration.
- Consider implementing caching for frequently accessed agent lists.