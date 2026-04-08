---
name: createAndStartThread
cbbaseinfo:
  description: Creates and immediately starts a new thread in one operation, combining thread creation and initialization.
cbparameters:
  parameters:
    - name: options
      typeName: CreateAndStartThreadOptions
      description: Thread configuration including title, description, agentId, initial messages, and metadata.
  returns:
    signatureTypeName: "Promise<StartThreadResponse>"
    description: A promise that resolves with the started thread details including threadId, status, and initial state.
data:
  name: createAndStartThread
  category: thread
  link: createAndStartThread.md
---
# createAndStartThread

```typescript
codebolt.thread.createAndStartThread(options: CreateAndStartThreadOptions): Promise<StartThreadResponse>
```

Creates and immediately starts a new thread in one operation, combining thread creation and initialization.
### Parameters

- **`options`** (CreateAndStartThreadOptions): Thread configuration including title, description, agentId, initial messages, and metadata.

### Returns

- **`Promise<StartThreadResponse>`**: A promise that resolves with the started thread details including threadId, status, and initial state.

### Response Structure

```typescript
interface StartThreadResponse {
  threadId: string;
  title: string;
  description?: string;
  status: string;
  startedAt: string;
  initialMessages?: Array<{
    role: string;
    content: string;
    timestamp: string;
  }>;
  metadata?: Record<string, any>;
}
```

### Examples

#### Example 1: Create and Start a Simple Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const thread = await codebolt.thread.createAndStartThread({
  title: 'Quick Code Review',
  description: 'Review the authentication module changes',
  agentId: 'reviewer-agent'
});

console.log('Thread started:', thread.threadId);
console.log('Status:', thread.status);
// Output: Thread started: thread_xyz789
// Output: Status: running
```

#### Example 2: Create and Start with Initial Message

```typescript
const thread = await codebolt.thread.createAndStartThread({
  title: 'Debug Session',
  description: 'Debug the payment processing error',
  agentId: 'debugger-agent',
  initialMessage: 'I need help debugging a timeout issue in the payment service',
  metadata: {
    priority: 'high',
    component: 'payment-service',
    errorLog: '/var/log/payment/error.log'
  }
});

console.log('Debug session started');
console.log('Initial message sent');
```

#### Example 3: Create and Start for Automated Task

```typescript
const thread = await codebolt.thread.createAndStartThread({
  title: 'Automated Testing',
  description: 'Run automated test suite for the new feature',
  agentId: 'test-agent',
  metadata: {
    testSuite: 'integration-tests',
    branch: 'feature/user-auth',
    environment: 'staging'
  }
});

console.log(`Test thread ${thread.threadId} is now running`);
// Thread immediately begins executing the automated tests
```

#### Example 4: Create and Start with Context

```typescript
const thread = await codebolt.thread.createAndStartThread({
  title: 'Refactoring Task',
  description: 'Refactor the user service to improve performance',
  agentId: 'refactor-agent',
  initialMessage: 'Please refactor the user service following SOLID principles. Focus on the database query optimization.',
  metadata: {
    targetFiles: ['src/services/userService.ts', 'src/repositories/userRepository.ts'],
    complexity: 'medium',
    estimatedTime: '2 hours'
  }
});

console.log('Refactoring task initiated');
console.log('Target files:', thread.metadata.targetFiles);
```

#### Example 5: Create and Start with Error Handling

```typescript
try {
  const thread = await codebolt.thread.createAndStartThread({
    title: 'Emergency Fix',
    description: 'Fix critical bug in production',
    agentId: 'emergency-agent',
    metadata: {
      severity: 'critical',
      environment: 'production',
      ticketId: 'INCIDENT-001'
    }
  });

  if (thread.status === 'running') {
    console.log('Emergency fix thread is running');
    console.log('Thread ID:', thread.threadId);
    console.log('Started at:', thread.startedAt);

    // Monitor the thread
    setInterval(async () => {
      const messages = await codebolt.thread.getThreadMessages({
        threadId: thread.threadId,
        limit: 5
      });
      console.log('Latest updates:', messages.messages);
    }, 30000);
  }
} catch (error) {
  console.error('Failed to start emergency thread:', error.message);
  // Implement fallback procedure
}
```

#### Example 6: Create and Start Multiple Parallel Threads

```typescript
const tasks = [
  {
    title: 'Frontend Testing',
    agentId: 'frontend-tester',
    description: 'Run React component tests'
  },
  {
    title: 'Backend Testing',
    agentId: 'backend-tester',
    description: 'Run API integration tests'
  },
  {
    title: 'Performance Testing',
    agentId: 'perf-tester',
    description: 'Run load testing suite'
  }
];

// Start all threads in parallel
const threads = await Promise.all(
  tasks.map(task =>
    codebolt.thread.createAndStartThread({
      ...task,
      metadata: {
        project: 'E-Commerce',
        sprint: 'Sprint-42',
        startTime: new Date().toISOString()
      }
    })
  )
);

console.log(`Started ${threads.length} parallel testing threads`);
threads.forEach(thread => {
  console.log(`- ${thread.title}: ${thread.threadId} (${thread.status})`);
});

// All threads begin execution immediately
```

### Common Use Cases

- **Quick Start Tasks**: Initialize and begin tasks in a single operation
- **Automated Workflows**: Start automated processes immediately upon creation
- **Parallel Execution**: Launch multiple concurrent threads simultaneously
- **Urgent Fixes**: Immediately start working on critical issues
- **Interactive Sessions**: Begin conversations with agents instantly

### Notes

- Combines `createThread` and `startThread` into a single atomic operation
- The thread begins execution immediately after creation
- Use `initialMessage` to provide context or instructions to the agent
- Status is typically set to 'running' immediately
- Useful for workflows where thread creation and execution should not be separated
- More efficient than calling `createThread` followed by `startThread`