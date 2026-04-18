---
cbapicategory:
  - name: AddRunningAgent
    link: /docs/api/apiaccess/codeboltEvent/addRunningAgent
    description: Adds a background agent to the tracking system.
  - name: GetRunningAgentCount
    link: /docs/api/apiaccess/codeboltEvent/getRunningAgentCount
    description: Gets the count of currently running background agents.
  - name: CheckForBackgroundAgentCompletion
    link: /docs/api/apiaccess/codeboltEvent/checkForBackgroundAgentCompletion
    description: Checks if any background agent has completed (non-blocking).
  - name: OnBackgroundAgentCompletion
    link: /docs/api/apiaccess/codeboltEvent/onBackgroundAgentCompletion
    description: Waits for a background agent to complete (blocking).
  - name: CheckForBackgroundGroupedAgentCompletion
    link: /docs/api/apiaccess/codeboltEvent/checkForBackgroundGroupedAgentCompletion
    description: Checks if any grouped background agent has completed.
  - name: OnBackgroundGroupedAgentCompletion
    link: /docs/api/apiaccess/codeboltEvent/onBackgroundGroupedAgentCompletion
    description: Waits for a grouped background agent to complete.
  - name: CheckForAgentEventReceived
    link: /docs/api/apiaccess/codeboltEvent/checkForAgentEventReceived
    description: Checks if any agent event has been received.
  - name: OnAgentEventReceived
    link: /docs/api/apiaccess/codeboltEvent/onAgentEventReceived
    description: Waits for an agent event to be received.
  - name: WaitForAnyExternalEvent
    link: /docs/api/apiaccess/codeboltEvent/waitForAnyExternalEvent
    description: Waits for any external event (agent completion, group completion, or agent event).
---

# Codebolt Event

<CBAPICategory />

The Codebolt Event module provides comprehensive functionality for handling external events, managing background agents, and coordinating asynchronous operations within your Codebolt applications. This module is essential for building reactive, event-driven agent systems.

## Quick Start Guide

### Basic Event Handling

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  try {
    // Start a background agent
    const agent = await codebolt.agent.startAgent('my-agent-id', 'Process data', {
      background: true
    });

    // Track the background agent
    codebolt.codeboltEvent.addRunningAgent(agent.threadId, agent);

    // Wait for completion
    const completion = await codebolt.codeboltEvent.onBackgroundAgentCompletion();
    console.log('Agent completed:', completion);

  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Minimal Example

```javascript
// Check for completed agents without blocking
const completed = codebolt.codeboltEvent.checkForBackgroundAgentCompletion();
if (completed) {
  console.log('Agents completed:', completed);
}
```

## Common Workflows

### Workflow 1: Background Agent Orchestration

```javascript
async function orchestrateBackgroundAgents() {
  const tasks = [
    { agentId: 'data-processor', task: 'Process dataset A' },
    { agentId: 'data-processor', task: 'Process dataset B' },
    { agentId: 'data-processor', task: 'Process dataset C' }
  ];

  // Start all agents in background
  for (const { agentId, task } of tasks) {
    const agent = await codebolt.agent.startAgent(agentId, task, {
      background: true
    });
    
    codebolt.codeboltEvent.addRunningAgent(agent.threadId, {
      agentId,
      task,
      startTime: Date.now()
    });
  }

  console.log(`Started ${tasks.length} background agents`);

  // Wait for all to complete
  const results = [];
  while (codebolt.codeboltEvent.getRunningAgentCount() > 0) {
    const completion = await codebolt.codeboltEvent.onBackgroundAgentCompletion();
    results.push(...completion);
    console.log(`Completed: ${results.length}/${tasks.length}`);
  }

  return results;
}
```

### Workflow 2: Event-Driven Processing

```javascript
async function eventDrivenWorkflow() {
  let processing = true;

  while (processing) {
    // Wait for any external event
    const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();

    switch (event.type) {
      case 'backgroundAgentCompletion':
        console.log('Agent completed:', event.data);
        await handleAgentCompletion(event.data);
        break;

      case 'backgroundGroupedAgentCompletion':
        console.log('Group completed:', event.data);
        await handleGroupCompletion(event.data);
        break;

      case 'agentEventReceived':
        console.log('Agent event:', event.data);
        await handleAgentEvent(event.data);
        break;
    }

    // Check if we should continue processing
    processing = shouldContinueProcessing();
  }
}

async function handleAgentCompletion(data) {
  // Process completion data
  console.log('Processing completion:', data.threadId);
}

async function handleGroupCompletion(data) {
  // Process group completion
  console.log('Processing group:', data.groupId);
}

async function handleAgentEvent(data) {
  // Handle custom agent event
  console.log('Processing event:', data.eventType);
}

function shouldContinueProcessing() {
  // Your logic to determine if processing should continue
  return codebolt.codeboltEvent.getRunningAgentCount() > 0;
}
```

### Workflow 3: Grouped Agent Execution

```javascript
async function groupedAgentExecution() {
  const groupId = 'batch-process-' + Date.now();
  
  const agents = [
    { id: 'agent-1', task: 'Task 1' },
    { id: 'agent-2', task: 'Task 2' },
    { id: 'agent-3', task: 'Task 3' }
  ];

  // Start agents in a group
  for (const agent of agents) {
    const result = await codebolt.agent.startAgent(agent.id, agent.task, {
      background: true
    });
    
    codebolt.codeboltEvent.addRunningAgent(
      result.threadId,
      { agentId: agent.id, task: agent.task },
      groupId // Add to group
    );
  }

  // Wait for the entire group to complete
  const groupCompletion = await codebolt.codeboltEvent.onBackgroundGroupedAgentCompletion();
  
  console.log('Group completed:', groupCompletion);
  return groupCompletion;
}
```

### Workflow 4: Polling vs Waiting

```javascript
async function pollingVsWaiting() {
  // Approach 1: Polling (non-blocking checks)
  async function pollingApproach() {
    const interval = setInterval(() => {
      const completed = codebolt.codeboltEvent.checkForBackgroundAgentCompletion();
      
      if (completed) {
        console.log('Agents completed:', completed);
        clearInterval(interval);
      } else {
        console.log('Still running:', codebolt.codeboltEvent.getRunningAgentCount());
      }
    }, 1000);
  }

  // Approach 2: Waiting (blocking until completion)
  async function waitingApproach() {
    console.log('Waiting for completion...');
    const completed = await codebolt.codeboltEvent.onBackgroundAgentCompletion();
    console.log('Agents completed:', completed);
  }

  // Choose based on your needs
  // Use polling if you need to do other work while waiting
  // Use waiting if you want to block until completion
}
```

### Workflow 5: Priority-Based Event Handling

```javascript
async function priorityEventHandling() {
  const eventQueue = {
    high: [],
    medium: [],
    low: []
  };

  // Event collection loop
  const collectEvents = async () => {
    while (true) {
      const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
      
      // Categorize by priority
      const priority = determinePriority(event);
      eventQueue[priority].push(event);
      
      // Process high priority immediately
      if (priority === 'high') {
        await processEvent(event);
      }
    }
  };

  // Event processing loop
  const processEvents = async () => {
    while (true) {
      // Process in priority order
      if (eventQueue.high.length > 0) {
        const event = eventQueue.high.shift();
        await processEvent(event);
      } else if (eventQueue.medium.length > 0) {
        const event = eventQueue.medium.shift();
        await processEvent(event);
      } else if (eventQueue.low.length > 0) {
        const event = eventQueue.low.shift();
        await processEvent(event);
      } else {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  };

  // Run both loops concurrently
  await Promise.all([collectEvents(), processEvents()]);
}

function determinePriority(event) {
  // Your logic to determine event priority
  if (event.type === 'backgroundAgentCompletion') {
    return event.data.priority || 'medium';
  }
  return 'low';
}

async function processEvent(event) {
  console.log(`Processing ${event.type} event`);
  // Your event processing logic
}
```

### Workflow 6: Timeout and Cancellation

```javascript
async function withTimeout(timeoutMs = 30000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
  );

  try {
    const result = await Promise.race([
      codebolt.codeboltEvent.onBackgroundAgentCompletion(),
      timeoutPromise
    ]);

    return result;
  } catch (error) {
    if (error.message === 'Operation timed out') {
      console.error('Agent completion timed out');
      
      // Get list of still-running agents
      const runningCount = codebolt.codeboltEvent.getRunningAgentCount();
      console.log(`${runningCount} agents still running`);
      
      // Optionally cancel or handle timeout
    }
    throw error;
  }
}
```

## Advanced Patterns

### Pattern 1: Event Aggregation

```javascript
class EventAggregator {
  constructor() {
    this.events = [];
    this.listeners = [];
  }

  async start() {
    while (true) {
      const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
      this.events.push({
        ...event,
        timestamp: Date.now()
      });

      // Notify listeners
      this.listeners.forEach(listener => listener(event));

      // Cleanup old events (keep last 1000)
      if (this.events.length > 1000) {
        this.events = this.events.slice(-1000);
      }
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  getEvents(filter = {}) {
    return this.events.filter(event => {
      if (filter.type && event.type !== filter.type) return false;
      if (filter.since && event.timestamp < filter.since) return false;
      return true;
    });
  }

  getStats() {
    const byType = {};
    this.events.forEach(event => {
      byType[event.type] = (byType[event.type] || 0) + 1;
    });

    return {
      total: this.events.length,
      byType,
      oldest: this.events[0]?.timestamp,
      newest: this.events[this.events.length - 1]?.timestamp
    };
  }
}

// Usage
const aggregator = new EventAggregator();
aggregator.start();

const unsubscribe = aggregator.subscribe(event => {
  console.log('New event:', event.type);
});

// Later
const stats = aggregator.getStats();
console.log('Event stats:', stats);
```

### Pattern 2: Event Replay

```javascript
class EventRecorder {
  constructor() {
    this.recording = false;
    this.recordedEvents = [];
  }

  startRecording() {
    this.recording = true;
    this.recordedEvents = [];
    this.recordLoop();
  }

  async recordLoop() {
    while (this.recording) {
      const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
      this.recordedEvents.push({
        ...event,
        timestamp: Date.now()
      });
    }
  }

  stopRecording() {
    this.recording = false;
    return this.recordedEvents;
  }

  async replay(events, speedMultiplier = 1) {
    if (events.length === 0) return;

    const startTime = events[0].timestamp;

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      
      // Calculate delay
      if (i > 0) {
        const delay = (event.timestamp - events[i - 1].timestamp) / speedMultiplier;
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      // Replay event
      console.log('Replaying event:', event.type);
      await this.handleReplayedEvent(event);
    }
  }

  async handleReplayedEvent(event) {
    // Your logic to handle replayed events
    console.log('Event replayed:', event);
  }
}

// Usage
const recorder = new EventRecorder();
recorder.startRecording();

// ... do some work ...

const events = recorder.stopRecording();
console.log(`Recorded ${events.length} events`);

// Replay at 2x speed
await recorder.replay(events, 2);
```

### Pattern 3: Event Filtering and Routing

```javascript
class EventRouter {
  constructor() {
    this.routes = new Map();
  }

  addRoute(eventType, handler) {
    if (!this.routes.has(eventType)) {
      this.routes.set(eventType, []);
    }
    this.routes.get(eventType).push(handler);
  }

  async start() {
    while (true) {
      const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
      await this.routeEvent(event);
    }
  }

  async routeEvent(event) {
    const handlers = this.routes.get(event.type) || [];
    
    // Execute all handlers for this event type
    await Promise.all(
      handlers.map(handler => 
        handler(event).catch(error => 
          console.error(`Handler error for ${event.type}:`, error)
        )
      )
    );
  }
}

// Usage
const router = new EventRouter();

router.addRoute('backgroundAgentCompletion', async (event) => {
  console.log('Agent completed:', event.data.threadId);
  await processAgentCompletion(event.data);
});

router.addRoute('backgroundGroupedAgentCompletion', async (event) => {
  console.log('Group completed:', event.data.groupId);
  await processGroupCompletion(event.data);
});

router.addRoute('agentEventReceived', async (event) => {
  console.log('Custom event:', event.data.eventType);
  await processCustomEvent(event.data);
});

router.start();
```

## Best Practices

### 1. Always Track Background Agents

```javascript
// Good: Track all background agents
const agent = await codebolt.agent.startAgent('agent-id', 'task', {
  background: true
});
codebolt.codeboltEvent.addRunningAgent(agent.threadId, agent);

// Bad: Starting background agent without tracking
const agent = await codebolt.agent.startAgent('agent-id', 'task', {
  background: true
});
// No tracking - you won't know when it completes!
```

### 2. Handle All Event Types

```javascript
// Good: Handle all possible event types
const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();

switch (event.type) {
  case 'backgroundAgentCompletion':
    await handleAgentCompletion(event.data);
    break;
  case 'backgroundGroupedAgentCompletion':
    await handleGroupCompletion(event.data);
    break;
  case 'agentEventReceived':
    await handleAgentEvent(event.data);
    break;
  default:
    console.warn('Unknown event type:', event.type);
}

// Bad: Only handling one type
const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
await handleAgentCompletion(event.data); // Assumes it's always agent completion!
```

### 3. Implement Timeouts

```javascript
// Good: Always use timeouts for waiting operations
async function waitWithTimeout(timeoutMs = 30000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeoutMs)
  );

  try {
    return await Promise.race([
      codebolt.codeboltEvent.onBackgroundAgentCompletion(),
      timeout
    ]);
  } catch (error) {
    if (error.message === 'Timeout') {
      console.error('Operation timed out');
      // Handle timeout
    }
    throw error;
  }
}

// Bad: Waiting indefinitely
const result = await codebolt.codeboltEvent.onBackgroundAgentCompletion();
// Could hang forever if agent never completes!
```

### 4. Monitor Running Agent Count

```javascript
// Good: Regularly check running agent count
setInterval(() => {
  const count = codebolt.codeboltEvent.getRunningAgentCount();
  console.log(`Running agents: ${count}`);
  
  if (count > 10) {
    console.warn('High number of background agents running');
  }
}, 5000);

// Bad: Never checking agent count
// Could lead to resource exhaustion
```

### 5. Clean Up Completed Agents

```javascript
// Good: Process and clean up completed agents
const completed = await codebolt.codeboltEvent.onBackgroundAgentCompletion();

for (const agent of completed) {
  try {
    await processAgentResult(agent);
    await cleanupAgentResources(agent);
  } catch (error) {
    console.error(`Error processing agent ${agent.threadId}:`, error);
  }
}

// Bad: Not processing completed agents
await codebolt.codeboltEvent.onBackgroundAgentCompletion();
// Agents completed but results not processed!
```

## Performance Considerations

1. **Event Loop**: Use `waitForAnyExternalEvent` for efficient event handling instead of polling
2. **Batch Processing**: Process multiple completed agents together when possible
3. **Memory Management**: Regularly clean up completed agent data to prevent memory leaks
4. **Concurrency**: Limit the number of concurrent background agents based on system resources
5. **Event Queuing**: Implement event queues for high-throughput scenarios

## Security Considerations

1. **Event Validation**: Validate all event data before processing
2. **Access Control**: Ensure proper authorization for agent operations
3. **Resource Limits**: Implement limits on background agent count
4. **Error Handling**: Don't expose sensitive information in error messages
5. **Audit Logging**: Log all agent starts and completions for security auditing

## Common Pitfalls

### Pitfall 1: Not Handling Empty Completions

```javascript
// Problem: Assuming completion data always exists
const completed = codebolt.codeboltEvent.checkForBackgroundAgentCompletion();
console.log(completed[0].threadId); // Error if null!

// Solution: Check for null/empty
const completed = codebolt.codeboltEvent.checkForBackgroundAgentCompletion();
if (completed && completed.length > 0) {
  console.log(completed[0].threadId);
}
```

### Pitfall 2: Blocking the Event Loop

```javascript
// Problem: Synchronous processing blocks event loop
while (true) {
  const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
  processEventSync(event); // Blocks!
}

// Solution: Use async processing
while (true) {
  const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
  await processEventAsync(event); // Non-blocking
}
```

### Pitfall 3: Not Handling Errors in Event Handlers

```javascript
// Problem: Unhandled errors crash the event loop
while (true) {
  const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
  await processEvent(event); // If this throws, loop stops!
}

// Solution: Wrap in try-catch
while (true) {
  try {
    const event = await codebolt.codeboltEvent.waitForAnyExternalEvent();
    await processEvent(event);
  } catch (error) {
    console.error('Event processing error:', error);
    // Continue processing other events
  }
}
```

## Integration Examples

### With Agent Module

```javascript
async function agentWithEventHandling() {
  // Start multiple agents
  const agents = ['agent-1', 'agent-2', 'agent-3'];
  
  for (const agentId of agents) {
    const result = await codebolt.agent.startAgent(agentId, 'Process data', {
      background: true
    });
    
    codebolt.codeboltEvent.addRunningAgent(result.threadId, {
      agentId,
      startTime: Date.now()
    });
  }

  // Wait for all to complete
  const results = [];
  while (codebolt.codeboltEvent.getRunningAgentCount() > 0) {
    const completed = await codebolt.codeboltEvent.onBackgroundAgentCompletion();
    results.push(...completed);
  }

  return results;
}
```

### With Action Plan Module

```javascript
async function actionPlanWithEvents() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Event-Driven Plan'
  });

  // Add tasks
  await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
    name: 'Background Task',
    description: 'Run in background'
  });

  // Execute with event monitoring
  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  
  for (const task of details.tasks) {
    const result = await codebolt.actionPlan.startTaskStep(plan.planId, task.id);
    
    if (result.background) {
      codebolt.codeboltEvent.addRunningAgent(result.threadId, {
        planId: plan.planId,
        taskId: task.id
      });
    }
  }

  // Wait for background tasks
  while (codebolt.codeboltEvent.getRunningAgentCount() > 0) {
    await codebolt.codeboltEvent.onBackgroundAgentCompletion();
  }
}
```
