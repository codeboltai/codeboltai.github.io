---
name: GetAgentsDetail
cbbaseinfo:
  description: Retrieves detailed information for a list of specified agents.
cbparameters:
  parameters:
    - name: agentList
      typeName: array
      description: "Optional: An array of agent IDs to get details for. If the array is empty, it retrieves details for all agents. Defaults to an empty array."
  returns:
    signatureTypeName: "Promise<AgentsDetailResponse>"
    description: A promise that resolves with an `AgentsDetailResponse` object containing the detailed information of the specified agents.
data:
  name: getAgentsDetail
  category: agent
  link: getAgentsDetail.md
---
# GetAgentsDetail

```typescript
codebolt.agent.getAgentsDetail(agentList: array): Promise<AgentsDetailResponse>
```

Retrieves detailed information for a list of specified agents.
### Parameters

- **`agentList`** (array): Optional: An array of agent IDs to get details for. If the array is empty, it retrieves details for all agents. Defaults to an empty array.

### Returns

- **`Promise<AgentsDetailResponse>`**: A promise that resolves with an [`AgentsDetailResponse`](/docs/api/11_doc-type-ref/types/interfaces/AgentsDetailResponse) object containing the detailed information of the specified agents.

### Response Structure

The method returns a Promise that resolves to an [`AgentsDetailResponse`](/docs/api/11_doc-type-ref/types/interfaces/AgentsDetailResponse) object with the following properties:

- **`type`** (string): Always "agentsDetailResponse".
- **`payload`** (object, optional): An object containing the agent details.
  - **`agents`** (array): An array of agent detail objects.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

Each agent in the `payload.agents` array has the following structure:
- **`id`** (string): The unique identifier of the agent.
- **`name`** (string): The display name of the agent.
- **`description`** (string): A description of the agent's capabilities.
- **`capabilities`** (array, optional): An array of strings describing the agent's capabilities.
- **`isLocal`** (boolean): `true` if the agent is local, `false` otherwise.
- **`version`** (string): The version of the agent.
- **`status`** (string): The current status of the agent (e.g., "enabled", "disabled").
- **`unique_id`** (string): Another unique identifier for the agent.

### Examples

```javascript
// Example 1: Get details for a few specific agents
async function getSpecificAgentDetails() {
  // First, get a list of available agents
  const listResponse = await codebolt.agent.getAgentsList('downloaded');

  if (listResponse?.agents && listResponse.agents.length > 0) {
    // Get the IDs of the first two agents
    const agentIds = listResponse.agents.slice(0, 2).map(agent => agent.function.name);

    console.log("Requesting details for agent IDs:", agentIds);

    // Get the details for the selected agents
    const detailsResponse = await codebolt.agent.getAgentsDetail(agentIds);
    console.log("Agent Details:", detailsResponse);

    if (detailsResponse.success) {
      detailsResponse.payload.agents.forEach(agent => {
        console.log(`- Name: ${agent.name}, Version: ${agent.version}, Status: ${agent.status}`);
      });
    }
  }
}
getSpecificAgentDetails();

// Example 2: Get details for all available agents
async function getAllAgentDetails() {
  // Pass an empty array to get details for all agents
  const allDetails = await codebolt.agent.getAgentsDetail([]);
  console.log("All Agent Details:", allDetails);

  if (allDetails.success) {
    console.log(`Found details for ${allDetails.payload.agents.length} agents.`);
  }
}
getAllAgentDetails();
```

### Advanced Examples

#### Example 3: Filter Agents by Capability

```javascript
async function findAgentsByCapability(requiredCapability) {
  const allDetails = await codebolt.agent.getAgentsDetail([]);

  if (!allDetails.success) {
    throw new Error('Failed to retrieve agent details');
  }

  const matchingAgents = allDetails.payload.agents.filter(agent =>
    agent.capabilities?.includes(requiredCapability)
  );

  console.log(`Found ${matchingAgents.length} agents with capability "${requiredCapability}":`);
  matchingAgents.forEach(agent => {
    console.log(`  - ${agent.name} (${agent.id}) - Version: ${agent.version}`);
  });

  return matchingAgents;
}

// Usage
const jsAgents = await findAgentsByCapability('javascript');
const pythonAgents = await findAgentsByCapability('python');
```

#### Example 4: Compare Agent Versions

```javascript
async function getLatestAgentVersion(agentBaseName) {
  const allDetails = await codebolt.agent.getAgentsDetail([]);

  if (!allDetails.success) {
    throw new Error('Failed to retrieve agent details');
  }

  const agentVersions = allDetails.payload.agents
    .filter(agent => agent.name.includes(agentBaseName))
    .map(agent => ({
      id: agent.id,
      name: agent.name,
      version: agent.version,
      isLocal: agent.isLocal
    }))
    .sort((a, b) => {
      // Simple version comparison (for complex versions, use semver library)
      const partsA = a.version.split('.').map(Number);
      const partsB = b.version.split('.').map(Number);
      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        const partA = partsA[i] || 0;
        const partB = partsB[i] || 0;
        if (partA !== partB) return partB - partA;
      }
      return 0;
    });

  if (agentVersions.length === 0) {
    console.log(`No agents found matching "${agentBaseName}"`);
    return null;
  }

  console.log(`Available versions for "${agentBaseName}":`);
  agentVersions.forEach(agent => {
    console.log(`  - ${agent.version} (${agent.isLocal ? 'Local' : 'Remote'})`);
  });

  const latest = agentVersions[0];
  console.log(`\nLatest version: ${latest.version} (${latest.id})`);

  return latest;
}

// Usage
const latestCodeGenerator = await getLatestAgentVersion('code-generator');
```

#### Example 5: Agent Health Check

```javascript
async function performAgentHealthCheck() {
  const allDetails = await codebolt.agent.getAgentsDetail([]);

  if (!allDetails.success) {
    return { status: 'error', message: 'Failed to retrieve agent details' };
  }

  const healthReport = {
    total: allDetails.payload.agents.length,
    enabled: 0,
    disabled: 0,
    local: 0,
    remote: 0,
    agents: []
  };

  allDetails.payload.agents.forEach(agent => {
    const status = agent.status === 'enabled' ? 'enabled' : 'disabled';
    healthReport[status]++;
    healthReport[agent.isLocal ? 'local' : 'remote']++;

    healthReport.agents.push({
      id: agent.id,
      name: agent.name,
      status: agent.status,
      isLocal: agent.isLocal,
      version: agent.version,
      capabilities: agent.capabilities || []
    });
  });

  console.log('Agent Health Check Report:');
  console.log(`  Total Agents: ${healthReport.total}`);
  console.log(`  Enabled: ${healthReport.enabled}`);
  console.log(`  Disabled: ${healthReport.disabled}`);
  console.log(`  Local: ${healthReport.local}`);
  console.log(`  Remote: ${healthReport.remote}`);

  return healthReport;
}

// Usage
const healthReport = await performAgentHealthCheck();
```

#### Example 6: Batch Agent Validation

```javascript
async function validateAgentIds(agentIds) {
  const detailsResponse = await codebolt.agent.getAgentsDetail(agentIds);

  if (!detailsResponse.success) {
    return {
      valid: false,
      message: detailsResponse.message || 'Failed to validate agents'
    };
  }

  const foundIds = new Set(detailsResponse.payload.agents.map(a => a.id));
  const validationResults = {
    total: agentIds.length,
    valid: 0,
    invalid: 0,
    missing: [],
    found: []
  };

  agentIds.forEach(id => {
    if (foundIds.has(id)) {
      validationResults.valid++;
      validationResults.found.push(id);
    } else {
      validationResults.invalid++;
      validationResults.missing.push(id);
    }
  });

  console.log('Validation Results:');
  console.log(`  Valid: ${validationResults.valid}/${validationResults.total}`);
  console.log(`  Invalid: ${validationResults.invalid}/${validationResults.total}`);

  if (validationResults.missing.length > 0) {
    console.log('  Missing IDs:', validationResults.missing);
  }

  return validationResults;
}

// Usage
const validation = await validateAgentIds([
  'code-generator-agent',
  'test-writer-agent',
  'non-existent-agent'
]);
```

### Error Handling Examples

#### Example 7: Robust Error Handling

```javascript
async function getAgentDetailsSafely(agentIds = []) {
  try {
    const detailsResponse = await codebolt.agent.getAgentsDetail(agentIds);

    // Check if the operation was successful
    if (!detailsResponse.success) {
      throw new Error(detailsResponse.message || 'Failed to get agent details');
    }

    // Verify payload exists
    if (!detailsResponse.payload || !Array.isArray(detailsResponse.payload.agents)) {
      throw new Error('Invalid response format: missing agents array');
    }

    // Check if any agents were returned
    if (agentIds.length > 0 && detailsResponse.payload.agents.length === 0) {
      console.warn('No agent details found for the provided IDs');
    }

    return {
      success: true,
      agents: detailsResponse.payload.agents,
      count: detailsResponse.payload.agents.length
    };

  } catch (error) {
    console.error('Error fetching agent details:', error.message);

    // Log error for debugging
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      requestedIds: agentIds,
      stack: error.stack
    };

    // In production, you might want to send this to a logging service
    console.error('Error details:', JSON.stringify(errorLog, null, 2));

    return {
      success: false,
      error: error.message,
      agents: []
    };
  }
}

// Usage
const result = await getAgentDetailsSafely(['agent-1', 'agent-2']);
if (result.success) {
  console.log(`Retrieved ${result.count} agents`);
} else {
  console.error('Failed to retrieve agents:', result.error);
}
```

#### Example 8: Retry with Backoff

```javascript
async function getAgentDetailsWithRetry(agentIds = [], maxRetries = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const detailsResponse = await codebolt.agent.getAgentsDetail(agentIds);

      if (detailsResponse.success) {
        if (attempt > 1) {
          console.log(`Successfully retrieved agent details after ${attempt} attempts`);
        }
        return detailsResponse;
      }

      lastError = new Error(detailsResponse.message || 'Unknown error');

    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt} failed:`, error.message);

      // Don't wait after the last attempt
      if (attempt < maxRetries) {
        const backoffDelay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Waiting ${backoffDelay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
      }
    }
  }

  // All retries failed
  console.error(`All ${maxRetries} attempts failed`);
  throw lastError;
}

// Usage
try {
  const details = await getAgentDetailsWithRetry(['agent-1', 'agent-2'], 3);
  console.log('Agent details retrieved successfully');
} catch (error) {
  console.error('Failed to retrieve agent details after retries:', error.message);
}
```

### Integration Examples

#### Example 9: Integrate with Agent Selection

```javascript
async function selectBestAgent(task, maxCandidates = 5) {
  // Get all agent details
  const allDetails = await codebolt.agent.getAgentsDetail([]);

  if (!allDetails.success) {
    throw new Error('Failed to retrieve agent details');
  }

  // Filter enabled agents
  const enabledAgents = allDetails.payload.agents.filter(
    agent => agent.status === 'enabled'
  );

  console.log(`Found ${enabledAgents.length} enabled agents`);

  // Use LLM to analyze task and rank agents
  const agentDescriptions = enabledAgents.map(agent =>
    `- ${agent.name}: ${agent.description}\n  Capabilities: ${agent.capabilities?.join(', ') || 'N/A'}`
  ).join('\n');

  const analysis = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are an expert at matching tasks to AI agents. Return the agent ID that is best suited for the given task.'
      },
      {
        role: 'user',
        content: `Task: "${task}"\n\nAvailable Agents:\n${agentDescriptions}\n\nReturn only the agent ID of the best match.`
      }
    ],
    llmrole: 'assistant',
    max_tokens: 100,
    temperature: 0.3
  });

  // Extract agent ID from LLM response
  const recommendedId = analysis.content.trim().match(/[\w-]+/)?.[0];

  if (!recommendedId) {
    throw new Error('Failed to get recommendation from LLM');
  }

  // Verify the recommended agent exists
  const recommendedAgent = enabledAgents.find(a => a.id === recommendedId);

  if (!recommendedAgent) {
    throw new Error(`Recommended agent ${recommendedId} not found`);
  }

  console.log(`Recommended agent: ${recommendedAgent.name} (${recommendedAgent.id})`);

  return recommendedAgent;
}

// Usage
const bestAgent = await selectBestAgent('Create a REST API with user authentication');
```

#### Example 10: Cache Agent Details

```javascript
class AgentDetailsCache {
  constructor(ttl = 5 * 60 * 1000) { // 5 minutes default TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  async getDetails(agentIds = []) {
    const cacheKey = JSON.stringify(agentIds.sort());

    // Check cache
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.ttl) {
        console.log('Returning cached agent details');
        return cached.data;
      }
      // Cache expired, remove it
      this.cache.delete(cacheKey);
    }

    // Fetch fresh data
    console.log('Fetching fresh agent details');
    const details = await codebolt.agent.getAgentsDetail(agentIds);

    // Store in cache
    this.cache.set(cacheKey, {
      timestamp: Date.now(),
      data: details
    });

    return details;
  }

  clear() {
    this.cache.clear();
    console.log('Agent details cache cleared');
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
const cache = new AgentDetailsCache(10 * 60 * 1000); // 10 minutes TTL
const details = await cache.getDetails(['agent-1', 'agent-2']);
console.log('Cache stats:', cache.getStats());
```

### Performance Considerations

1. **Batch Requests**: Request details for multiple agents in a single call rather than making multiple individual calls
2. **Caching**: Implement caching for frequently accessed agent details to reduce API calls
3. **Selective Loading**: Only request details for agents you actually need instead of loading all agents
4. **Background Refresh**: Refresh agent details periodically in the background for better user experience

### Common Pitfalls and Solutions

#### Pitfall 1: Assuming All Agents Exist

```javascript
// Problem: Assuming all requested agents exist
const details = await codebolt.agent.getAgentsDetail(['agent-1', 'agent-2', 'agent-3']);
// agent-3 might not exist!

// Solution: Validate the response
const details = await codebolt.agent.getAgentsDetail(['agent-1', 'agent-2', 'agent-3']);
const foundIds = details.payload.agents.map(a => a.id);
const requestedIds = ['agent-1', 'agent-2', 'agent-3'];
const missingIds = requestedIds.filter(id => !foundIds.includes(id));

if (missingIds.length > 0) {
  console.warn('Some agents were not found:', missingIds);
}
```

#### Pitfall 2: Ignoring Agent Status

```javascript
// Problem: Using disabled agents
const details = await codebolt.agent.getAgentsDetail([]);
const agent = details.payload.agents[0];
await codebolt.agent.startAgent(agent.id, task); // Might be disabled!

// Solution: Check agent status before use
const enabledAgents = details.payload.agents.filter(a => a.status === 'enabled');
if (enabledAgents.length === 0) {
  throw new Error('No enabled agents available');
}
```

#### Pitfall 3: Not Handling Empty Results

```javascript
// Problem: Not handling empty results
const details = await codebolt.agent.getAgentsDetail(['non-existent-agent']);
details.payload.agents.forEach(agent => { ... }); // Will fail if empty!

// Solution: Always check for empty arrays
const details = await codebolt.agent.getAgentsDetail(['non-existent-agent']);
if (details.success && details.payload?.agents?.length > 0) {
  details.payload.agents.forEach(agent => { ... });
} else {
  console.log('No agents found');
}
```

### Usage Notes

- You can obtain agent IDs from the `getAgentsList()` method. The ID is typically found in `agent.function.name`.
- This function is useful for getting a deeper understanding of an agent's capabilities, version, and status before using it.
- The capabilities array can be used to filter agents for specific tasks.
- Always check the `success` property before accessing the `payload`.
- Consider implementing caching for frequently accessed agent details.
- Be aware of the difference between `id` and `unique_id` - they serve different purposes.