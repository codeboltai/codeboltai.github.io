---
name: updateAgentStatus
cbbaseinfo:
  description: "Updates an agent's status within a swarm to indicate their current activity and availability."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The ID of the swarm containing the agent.
    - name: agentId
      typeName: string
      description: The ID of the agent to update.
    - name: data
      typeName: AgentStatusUpdate
      description: Status update information.
      nested:
        - name: status
          typeName: "'active' | 'idle' | 'busy' | 'offline'"
          description: "The new status of the agent (required)."
        - name: currentTask
          typeName: "string | undefined"
          description: Optional description of the current task.
        - name: metadata
          typeName: "Record<string, any> | undefined"
          description: Additional metadata about the status.
  returns:
    signatureTypeName: "Promise<UpdateStatusResponse>"
    description: A promise that resolves when the status is updated.
    typeArgs: []
data:
  name: updateAgentStatus
  category: swarm
  link: updateAgentStatus.md
---
# updateAgentStatus

```typescript
codebolt.swarm.updateAgentStatus(swarmId: string, agentId: string, data: AgentStatusUpdate): Promise<UpdateStatusResponse>
```

Updates an agent's status within a swarm to indicate their current activity and availability.
### Parameters

- **`swarmId`** (string): The ID of the swarm containing the agent.
- **`agentId`** (string): The ID of the agent to update.
- **`data`** ([AgentStatusUpdate](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AgentStatusUpdate)): Status update information.

### Returns

- **`Promise<[UpdateStatusResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/UpdateStatusResponse)>`**: A promise that resolves when the status is updated.

### Examples

#### Basic Status Update

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Update agent status to active
const result = await codebolt.swarm.updateAgentStatus(
    'swarm-123',
    'agent-789',
    { status: 'active' }
);

if (result.success) {
    console.log('✅ Agent status updated to active');
} else {
    console.error('❌ Status update failed:', result.error);
}
```

#### Status Update with Task Description

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Update status with current task information
const result = await codebolt.swarm.updateAgentStatus(
    'swarm-123',
    'agent-789',
    {
        status: 'busy',
        currentTask: 'Code review for PR #1234'
    }
);

if (result.success) {
    console.log('✅ Agent is now busy with:', result.data.message);
}
```

#### Complete Status Lifecycle

```js
import codebolt from '@codebolt/codeboltjs';

async function agentTaskLifecycle(swarmId, agentId) {
    await codebolt.waitForReady();

    // 1. Start task - set to busy
    await codebolt.swarm.updateAgentStatus(swarmId, agentId, {
        status: 'busy',
        currentTask: 'Processing user request',
        metadata: { startTime: new Date().toISOString() }
    });
    console.log('🔄 Agent started working');

    // Simulate work
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 2. Complete task - set to idle
    await codebolt.swarm.updateAgentStatus(swarmId, agentId, {
        status: 'idle',
        currentTask: undefined,
        metadata: {
            lastCompleted: new Date().toISOString(),
            tasksCompleted: 10
        }
    });
    console.log('✅ Agent completed task and is now idle');
}

// Usage
agentTaskLifecycle('swarm-123', 'agent-789');
```

#### Status Update with Progress Tracking

```js
import codebolt from '@codebolt/codeboltjs';

async function updateStatusWithProgress(swarmId, agentId, task, progress) {
    await codebolt.waitForReady();

    const result = await codebolt.swarm.updateAgentStatus(swarmId, agentId, {
        status: 'busy',
        currentTask: `${task} (${progress}%)`,
        metadata: {
            task,
            progress,
            timestamp: new Date().toISOString()
        }
    });

    return result.success;
}

// Usage in a long-running task
async function processLongTask(swarmId, agentId) {
    const task = 'Data Processing';

    for (let i = 0; i <= 100; i += 10) {
        await updateStatusWithProgress(swarmId, agentId, task, i);
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Mark as idle when done
    await codebolt.swarm.updateAgentStatus(swarmId, agentId, {
        status: 'idle',
        currentTask: undefined
    });
}
```

#### Handle Agent Going Offline

```js
import codebolt from '@codebolt/codeboltjs';

async function handleAgentShutdown(swarmId, agentId) {
    await codebolt.waitForReady();

    // Update status before shutdown
    const result = await codebolt.swarm.updateAgentStatus(swarmId, agentId, {
        status: 'offline',
        currentTask: 'Shutting down',
        metadata: {
            shutdownTime: new Date().toISOString(),
            reason: 'scheduled_maintenance'
        }
    });

    if (result.success) {
        console.log('✅ Agent marked as offline');
        // Proceed with shutdown logic...
    }
}

// Usage
handleAgentShutdown('swarm-123', 'agent-789');
```

#### Batch Status Updates

```js
import codebolt from '@codebolt/codeboltjs';

async function updateMultipleAgentStatus(swarmId, updates) {
    await codebolt.waitForReady();

    const results = [];

    for (const update of updates) {
        const result = await codebolt.swarm.updateAgentStatus(
            swarmId,
            update.agentId,
            update.status
        );

        results.push({
            agentId: update.agentId,
            success: result.success,
            status: update.status.status
        });

        if (result.success) {
            console.log(`✅ Updated ${update.agentId} to ${update.status.status}`);
        } else {
            console.error(`❌ Failed to update ${update.agentId}`);
        }
    }

    return results;
}

// Usage
const updates = [
    { agentId: 'agent-001', status: { status: 'active' } },
    { agentId: 'agent-002', status: { status: 'busy', currentTask: 'Task A' } },
    { agentId: 'agent-003', status: { status: 'idle' } }
];

const results = await updateMultipleAgentStatus('swarm-123', updates);
```

#### Error Handling and Validation

```js
import codebolt from '@codebolt/codeboltjs';

async function updateStatusWithErrorHandling(swarmId, agentId, statusData) {
    await codebolt.waitForReady();

    try {
        // Validate status
        const validStatuses = ['active', 'idle', 'busy', 'offline'];
        if (!validStatuses.includes(statusData.status)) {
            throw new Error(`Invalid status: ${statusData.status}`);
        }

        const result = await codebolt.swarm.updateAgentStatus(
            swarmId,
            agentId,
            statusData
        );

        if (!result.success) {
            switch (result.error.code) {
                case 'SWARM_NOT_FOUND':
                    console.error('Swarm does not exist');
                    break;
                case 'AGENT_NOT_FOUND':
                    console.error('Agent not found in swarm');
                    break;
                case 'INVALID_STATUS':
                    console.error('Invalid status value');
                    break;
                default:
                    console.error('Status update failed:', result.error.message);
            }
            return false;
        }

        console.log(`✅ Agent ${agentId} status updated to ${statusData.status}`);
        return true;

    } catch (error) {
        console.error('Error updating status:', error.message);
        return false;
    }
}

// Usage
await updateStatusWithErrorHandling('swarm-123', 'agent-789', {
    status: 'active',
    currentTask: 'Starting up'
});
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        message: string
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Task Management**
Update status when starting/completing tasks.

**2. Availability Tracking**
Indicate when agents are available for new assignments.

**3. Progress Reporting**
Use currentTask to communicate current work.

**4. Resource Management**
Track which agents are busy vs idle for load balancing.

**5. Health Monitoring**
Monitor agent status for system health and alerts.

### Notes

- Status values: `active` (working), `idle` (available), `busy` (unavailable), `offline` (disconnected)
- Status updates are propagated immediately to all swarm members
- The `currentTask` field provides context about what the agent is doing
- Metadata can store additional information like progress, start time, etc.
- Other agents/systems can query status to make routing decisions
- Status changes are logged for audit purposes
- Consider updating status when significant state changes occur
- Offline status typically indicates the agent is disconnected or shut down
- Use status updates to enable intelligent task routing