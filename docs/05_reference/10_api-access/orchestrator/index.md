---
cbapicategory:
  - name: ListOrchestrators
    link: /docs/api/apiaccess/orchestrator/listOrchestrators
    description: Lists all orchestrator instances in the system.
  - name: GetOrchestrator
    link: /docs/api/apiaccess/orchestrator/getOrchestrator
    description: Gets detailed information about a specific orchestrator.
  - name: GetOrchestratorSettings
    link: /docs/api/apiaccess/orchestrator/getOrchestratorSettings
    description: Retrieves the settings for an orchestrator instance.
  - name: CreateOrchestrator
    link: /docs/api/apiaccess/orchestrator/createOrchestrator
    description: Creates a new orchestrator instance.
  - name: UpdateOrchestrator
    link: /docs/api/apiaccess/orchestrator/updateOrchestrator
    description: Updates an existing orchestrator instance.
  - name: UpdateOrchestratorSettings
    link: /docs/api/apiaccess/orchestrator/updateOrchestratorSettings
    description: Updates the settings of an orchestrator.
  - name: DeleteOrchestrator
    link: /docs/api/apiaccess/orchestrator/deleteOrchestrator
    description: Deletes an orchestrator instance.
  - name: UpdateOrchestratorStatus
    link: /docs/api/apiaccess/orchestrator/updateOrchestratorStatus
    description: Updates the status of an orchestrator (idle, running, paused).
  - name: UpdateCodeboltJs
    link: /docs/api/apiaccess/orchestrator/updateCodeboltJs
    description: Initiates a Codebolt JS update operation.
---

# Orchestrator

<CBAPICategory />

The Orchestrator module provides functionality for managing orchestrator instances that coordinate and manage multiple agents and workflows. Orchestrators enable complex multi-agent systems with centralized control and monitoring.

## Quick Start Guide

### Basic Orchestrator Operations

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  // Create an orchestrator
  const orchestrator = await codebolt.orchestrator.createOrchestrator({
    name: 'Main Orchestrator',
    description: 'Coordinates all development agents',
    agentId: 'orchestrator-agent-id',
    defaultWorkerAgentId: 'worker-agent-id'
  });

  console.log('Created orchestrator:', orchestrator.data.id);

  // Update status to running
  await codebolt.orchestrator.updateOrchestratorStatus(
    orchestrator.data.id,
    'running'
  );

  // Get orchestrator details
  const details = await codebolt.orchestrator.getOrchestrator(
    orchestrator.data.id
  );
  console.log('Orchestrator status:', details.data.status);
}
```

## Core Operations

### Create Orchestrator

```javascript
const result = await codebolt.orchestrator.createOrchestrator({
  name: 'Development Orchestrator',
  description: 'Manages development workflow',
  agentId: 'main-orchestrator-agent',
  defaultWorkerAgentId: 'default-worker',
  metadata: {
    environment: 'production',
    version: '1.0.0',
    team: 'backend'
  }
});

if (result.success) {
  console.log('Orchestrator ID:', result.data.id);
  console.log('Thread ID:', result.data.threadId);
}
```

### List Orchestrators

```javascript
const result = await codebolt.orchestrator.listOrchestrators();

if (result.success) {
  console.log(`Found ${result.data.length} orchestrators`);
  
  result.data.forEach(orch => {
    console.log(`- ${orch.name} (${orch.status})`);
  });
}
```

### Get Orchestrator Details

```javascript
const result = await codebolt.orchestrator.getOrchestrator(orchestratorId);

if (result.success) {
  const orch = result.data;
  console.log('Name:', orch.name);
  console.log('Status:', orch.status);
  console.log('Agent ID:', orch.agentId);
  console.log('Created:', orch.createdAt);
}
```

### Update Orchestrator

```javascript
await codebolt.orchestrator.updateOrchestrator(orchestratorId, {
  name: 'Updated Orchestrator Name',
  description: 'New description',
  defaultWorkerAgentId: 'new-worker-agent',
  metadata: {
    version: '2.0.0',
    lastModified: new Date().toISOString()
  }
});
```

### Update Orchestrator Settings

```javascript
await codebolt.orchestrator.updateOrchestratorSettings(orchestratorId, {
  defaultWorkerAgentId: 'specialized-worker',
  metadata: {
    maxConcurrentTasks: 10,
    timeout: 300000,
    retryAttempts: 3
  }
});
```

### Update Orchestrator Status

```javascript
// Start orchestrator
await codebolt.orchestrator.updateOrchestratorStatus(
  orchestratorId,
  'running'
);

// Pause orchestrator
await codebolt.orchestrator.updateOrchestratorStatus(
  orchestratorId,
  'paused'
);

// Set to idle
await codebolt.orchestrator.updateOrchestratorStatus(
  orchestratorId,
  'idle'
);
```

### Delete Orchestrator

```javascript
const result = await codebolt.orchestrator.deleteOrchestrator(orchestratorId);

if (result.success) {
  console.log('Orchestrator deleted successfully');
}
```

## Common Workflows

### Workflow 1: Multi-Agent Coordination

```javascript
async function coordinateAgents() {
  // Create orchestrator
  const orch = await codebolt.orchestrator.createOrchestrator({
    name: 'Multi-Agent Coordinator',
    description: 'Coordinates multiple specialized agents',
    agentId: 'coordinator-agent',
    defaultWorkerAgentId: 'general-worker'
  });

  const orchestratorId = orch.data.id;

  // Start orchestrator
  await codebolt.orchestrator.updateOrchestratorStatus(
    orchestratorId,
    'running'
  );

  // Assign tasks to different workers
  const tasks = [
    { type: 'frontend', agentId: 'frontend-agent' },
    { type: 'backend', agentId: 'backend-agent' },
    { type: 'database', agentId: 'db-agent' }
  ];

  for (const task of tasks) {
    // Update settings to use specific worker
    await codebolt.orchestrator.updateOrchestratorSettings(orchestratorId, {
      defaultWorkerAgentId: task.agentId
    });

    // Execute task through orchestrator
    // (Implementation depends on your orchestrator agent logic)
  }

  // Pause when done
  await codebolt.orchestrator.updateOrchestratorStatus(
    orchestratorId,
    'paused'
  );
}
```

### Workflow 2: Dynamic Orchestrator Management

```javascript
class OrchestratorManager {
  constructor() {
    this.orchestrators = new Map();
  }

  async createOrchestrator(name, config) {
    const result = await codebolt.orchestrator.createOrchestrator({
      name,
      description: config.description,
      agentId: config.agentId,
      defaultWorkerAgentId: config.defaultWorkerAgentId,
      metadata: config.metadata
    });

    if (result.success) {
      this.orchestrators.set(result.data.id, result.data);
      return result.data.id;
    }

    throw new Error('Failed to create orchestrator');
  }

  async startOrchestrator(orchestratorId) {
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'running'
    );
    
    const orch = this.orchestrators.get(orchestratorId);
    if (orch) {
      orch.status = 'running';
    }
  }

  async pauseOrchestrator(orchestratorId) {
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'paused'
    );
    
    const orch = this.orchestrators.get(orchestratorId);
    if (orch) {
      orch.status = 'paused';
    }
  }

  async getActiveOrchestrators() {
    const result = await codebolt.orchestrator.listOrchestrators();
    return result.data.filter(orch => orch.status === 'running');
  }

  async cleanupIdleOrchestrators() {
    const result = await codebolt.orchestrator.listOrchestrators();
    const idle = result.data.filter(orch => orch.status === 'idle');

    for (const orch of idle) {
      await codebolt.orchestrator.deleteOrchestrator(orch.id);
      this.orchestrators.delete(orch.id);
    }

    return idle.length;
  }
}

// Usage
const manager = new OrchestratorManager();
const orchId = await manager.createOrchestrator('Task Orchestrator', {
  description: 'Manages task execution',
  agentId: 'task-agent',
  defaultWorkerAgentId: 'worker-agent'
});

await manager.startOrchestrator(orchId);
```

### Workflow 3: Orchestrator Health Monitoring

```javascript
async function monitorOrchestrators() {
  const result = await codebolt.orchestrator.listOrchestrators();
  
  const health = {
    total: result.data.length,
    running: 0,
    paused: 0,
    idle: 0,
    issues: []
  };

  for (const orch of result.data) {
    health[orch.status]++;

    // Check for potential issues
    const details = await codebolt.orchestrator.getOrchestrator(orch.id);
    
    if (details.data.status === 'running') {
      const uptime = Date.now() - new Date(details.data.updatedAt).getTime();
      
      if (uptime > 24 * 60 * 60 * 1000) { // Running for more than 24 hours
        health.issues.push({
          orchestratorId: orch.id,
          issue: 'Long running time',
          uptime: uptime
        });
      }
    }
  }

  return health;
}

// Usage
const health = await monitorOrchestrators();
console.log('Orchestrator Health:', health);

if (health.issues.length > 0) {
  console.warn('Issues detected:', health.issues);
}
```

### Workflow 4: Orchestrator Lifecycle Management

```javascript
async function orchestratorLifecycle() {
  // 1. Create
  const orch = await codebolt.orchestrator.createOrchestrator({
    name: 'Lifecycle Demo',
    description: 'Demonstrates full lifecycle',
    agentId: 'demo-agent',
    defaultWorkerAgentId: 'demo-worker'
  });

  const orchestratorId = orch.data.id;

  try {
    // 2. Configure
    await codebolt.orchestrator.updateOrchestratorSettings(orchestratorId, {
      metadata: {
        maxTasks: 100,
        timeout: 600000
      }
    });

    // 3. Start
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'running'
    );

    // 4. Monitor and work
    console.log('Orchestrator running...');
    await performWork(orchestratorId);

    // 5. Pause for maintenance
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'paused'
    );

    // 6. Update configuration
    await codebolt.orchestrator.updateOrchestrator(orchestratorId, {
      description: 'Updated after maintenance',
      metadata: {
        version: '2.0'
      }
    });

    // 7. Resume
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'running'
    );

    // 8. Complete work
    await performWork(orchestratorId);

  } finally {
    // 9. Cleanup
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'idle'
    );
    
    await codebolt.orchestrator.deleteOrchestrator(orchestratorId);
  }
}

async function performWork(orchestratorId) {
  // Your orchestrator work logic here
  console.log(`Performing work with orchestrator ${orchestratorId}`);
}
```

## Best Practices

### 1. Proper Status Management

```javascript
// Good: Update status appropriately
await codebolt.orchestrator.updateOrchestratorStatus(id, 'running');
// ... do work ...
await codebolt.orchestrator.updateOrchestratorStatus(id, 'idle');

// Bad: Leaving orchestrator in running state
await codebolt.orchestrator.updateOrchestratorStatus(id, 'running');
// ... work completes but status never updated ...
```

### 2. Use Metadata Effectively

```javascript
// Good: Rich metadata for tracking
await codebolt.orchestrator.createOrchestrator({
  name: 'Production Orchestrator',
  description: 'Handles production workloads',
  agentId: 'prod-agent',
  metadata: {
    environment: 'production',
    region: 'us-east-1',
    version: '1.0.0',
    owner: 'platform-team',
    maxConcurrentTasks: 50
  }
});

// Bad: No metadata
await codebolt.orchestrator.createOrchestrator({
  name: 'Orchestrator',
  agentId: 'agent'
});
```

### 3. Error Handling

```javascript
// Good: Comprehensive error handling
try {
  const result = await codebolt.orchestrator.createOrchestrator(config);
  
  if (!result.success) {
    console.error('Creation failed:', result.error);
    return null;
  }
  
  return result.data.id;
} catch (error) {
  console.error('System error:', error);
  throw error;
}

// Bad: No error handling
const result = await codebolt.orchestrator.createOrchestrator(config);
return result.data.id; // Could be undefined!
```

### 4. Cleanup Resources

```javascript
// Good: Clean up when done
async function withOrchestrator(config, work) {
  const orch = await codebolt.orchestrator.createOrchestrator(config);
  const orchestratorId = orch.data.id;
  
  try {
    await codebolt.orchestrator.updateOrchestratorStatus(
      orchestratorId,
      'running'
    );
    
    return await work(orchestratorId);
  } finally {
    await codebolt.orchestrator.deleteOrchestrator(orchestratorId);
  }
}

// Bad: Creating without cleanup
const orch = await codebolt.orchestrator.createOrchestrator(config);
// ... work ...
// Orchestrator never deleted!
```

### 5. Monitor Orchestrator Health

```javascript
// Good: Regular health checks
setInterval(async () => {
  const health = await monitorOrchestrators();
  
  if (health.issues.length > 0) {
    console.warn('Orchestrator issues detected');
    await handleIssues(health.issues);
  }
}, 60000); // Check every minute

// Bad: No monitoring
// Orchestrators could be stuck or failing silently
```

## Performance Considerations

1. **Resource Limits**: Set appropriate limits in metadata
2. **Status Updates**: Minimize unnecessary status updates
3. **Cleanup**: Regularly delete unused orchestrators
4. **Monitoring**: Implement health checks to detect issues early
5. **Concurrency**: Limit concurrent orchestrators based on system capacity

## Security Considerations

1. **Access Control**: Implement proper authorization for orchestrator operations
2. **Agent Validation**: Validate agent IDs before creating orchestrators
3. **Metadata Sanitization**: Sanitize metadata to prevent injection attacks
4. **Audit Logging**: Log all orchestrator operations
5. **Resource Limits**: Enforce limits to prevent resource exhaustion

## Common Pitfalls

### Pitfall 1: Not Checking Success

```javascript
// Problem: Assuming operation succeeded
const result = await codebolt.orchestrator.createOrchestrator(config);
const id = result.data.id; // Could be undefined!

// Solution: Check success
const result = await codebolt.orchestrator.createOrchestrator(config);
if (result.success) {
  const id = result.data.id;
} else {
  console.error('Failed:', result.error);
}
```

### Pitfall 2: Forgetting to Update Status

```javascript
// Problem: Status never updated
await codebolt.orchestrator.createOrchestrator(config);
// ... work happens but status stays 'idle' ...

// Solution: Update status appropriately
const orch = await codebolt.orchestrator.createOrchestrator(config);
await codebolt.orchestrator.updateOrchestratorStatus(orch.data.id, 'running');
// ... work ...
await codebolt.orchestrator.updateOrchestratorStatus(orch.data.id, 'idle');
```

### Pitfall 3: Not Cleaning Up

```javascript
// Problem: Orchestrators accumulate
for (let i = 0; i < 100; i++) {
  await codebolt.orchestrator.createOrchestrator(config);
}
// 100 orchestrators created, none deleted!

// Solution: Clean up when done
for (let i = 0; i < 100; i++) {
  const orch = await codebolt.orchestrator.createOrchestrator(config);
  try {
    await doWork(orch.data.id);
  } finally {
    await codebolt.orchestrator.deleteOrchestrator(orch.data.id);
  }
}
```

## Integration Examples

### With Agent Module

```javascript
async function orchestratorWithAgents() {
  // Create orchestrator
  const orch = await codebolt.orchestrator.createOrchestrator({
    name: 'Agent Coordinator',
    description: 'Coordinates multiple agents',
    agentId: 'coordinator-agent',
    defaultWorkerAgentId: 'worker-agent'
  });

  // Start orchestrator
  await codebolt.orchestrator.updateOrchestratorStatus(
    orch.data.id,
    'running'
  );

  // Execute agents through orchestrator
  const tasks = ['Task 1', 'Task 2', 'Task 3'];
  
  for (const task of tasks) {
    await codebolt.agent.startAgent(
      orch.data.defaultWorkerAgentId,
      task
    );
  }

  // Cleanup
  await codebolt.orchestrator.deleteOrchestrator(orch.data.id);
}
```

### With Action Plan Module

```javascript
async function orchestratorWithActionPlan() {
  // Create orchestrator
  const orch = await codebolt.orchestrator.createOrchestrator({
    name: 'Plan Orchestrator',
    description: 'Executes action plans',
    agentId: 'plan-agent',
    defaultWorkerAgentId: 'worker-agent'
  });

  // Create action plan
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Orchestrated Plan',
    description: 'Plan managed by orchestrator',
    agentId: orch.data.agentId
  });

  // Add tasks
  await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
    name: 'Task 1',
    description: 'First task'
  });

  // Execute plan through orchestrator
  await codebolt.orchestrator.updateOrchestratorStatus(
    orch.data.id,
    'running'
  );

  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  for (const task of details.tasks) {
    await codebolt.actionPlan.startTaskStep(plan.planId, task.id);
  }

  // Cleanup
  await codebolt.orchestrator.deleteOrchestrator(orch.data.id);
}
```

## System Maintenance

### Update Codebolt JS

```javascript
// Initiate Codebolt JS update
const result = await codebolt.orchestrator.updateCodeboltJs();

if (result.success) {
  console.log('Codebolt JS update initiated');
} else {
  console.error('Update failed:', result.error);
}
```
