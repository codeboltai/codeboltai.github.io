---
name: create
cbbaseinfo:
  description: Creates a new review or merge request with the specified details, including task description, changes, and optional merge configuration.
cbparameters:
  parameters:
    - name: data
      typeName: CreateReviewMergeRequest
      description: Complete request data including type, task info, changes, and merge config
  returns:
    signatureTypeName: "Promise<{ request: ReviewMergeRequest }>"
    description: A promise that resolves to the created request
data:
  name: create
  category: reviewMergeRequest
  link: create.md
---
# create

```typescript
codebolt.reviewMergeRequest.create(data: CreateReviewMergeRequest): Promise<{ request: ReviewMergeRequest }>
```

Creates a new review or merge request with the specified details, including task description, changes, and optional merge configuration.
### Parameters

- **`data`** ([CreateReviewMergeRequest](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateReviewMergeRequest)): Complete request data including type, task info, changes, and merge config

### Returns

- **`Promise<{ request: [ReviewMergeRequest](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ReviewMergeRequest) }>`**: A promise that resolves to the created request

### Parameter Details

The [`CreateReviewMergeRequest`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateReviewMergeRequest) interface includes:

**Required Parameters:**
- **`type`** (ReviewRequestType): 'review' or 'review_merge'
- **`initialTask`** (string): Original task description
- **`title`** (string): Request title
- **`description`** (string): Detailed description of changes
- **`majorFilesChanged`** (string[]): List of main files changed
- **`diffPatch`** (string): Unified diff format patch
- **`agentId`** (string): ID of agent creating the request
- **`agentName`** (string): Name of agent creating the request

**Optional Parameters:**
- **`swarmId`** (string): Associated swarm ID
- **`issuesFaced`** (string[]): Problems encountered during implementation
- **`remainingTasks`** (string[]): Tasks still to be completed
- **`mergeConfig`** (MergeConfig): Merge strategy and details
- **`changesFilePath`** (string): Path to changes summary file
- **`taskDescription`** (string): Extended task description

### Response Structure

```typescript
interface Response {
  request: ReviewMergeRequest;
}

interface ReviewMergeRequest {
  id: string;
  type: ReviewRequestType;
  status: ReviewRequestStatus;
  initialTask: string;
  taskDescription?: string;
  agentId: string;
  agentName: string;
  swarmId?: string;
  title: string;
  description: string;
  majorFilesChanged: string[];
  diffPatch: string;
  changesFilePath?: string;
  issuesFaced?: string[];
  remainingTasks?: string[];
  mergeConfig?: MergeConfig;
  reviews: ReviewFeedback[];
  linkedJobIds: string[];
  mergedBy?: string;
  mergeResult?: MergeResult;
  createdAt: string;
  updatedAt: string;
  mergedAt?: string;
  closedAt?: string;
}
```

### Examples

#### 1. Create Basic Review Request
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a simple review request
const result = await codebolt.reviewMergeRequest.create({
  type: 'review',
  initialTask: 'Fix login bug',
  title: 'fix: Resolve authentication timeout',
  description: 'Fixes the timeout issue when users try to login',
  majorFilesChanged: ['src/auth/login.ts', 'src/auth/service.ts'],
  diffPatch: 'diff --git a/src/auth/login.ts...',
  agentId: 'agent_dev_001',
  agentName: 'Developer Agent'
});

console.log('Review request created:', result.request.id);
console.log('Status:', result.request.status); // 'draft'
```

#### 2. Create Review with Merge Request
```typescript
// Create a review request that includes merge
const result = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Implement user search feature',
  title: 'feat: Add user search with filters',
  description: 'Implements full-text search with advanced filtering capabilities',
  majorFilesChanged: [
    'src/search/user-search.ts',
    'src/search/filters.ts',
    'src/api/search-routes.ts'
  ],
  diffPatch: 'diff --git a/src/search/user-search.ts...',
  agentId: 'agent_dev_002',
  agentName: 'Backend Developer',
  swarmId: 'swarm_backend',
  mergeConfig: {
    strategy: 'patch',
    patchContent: 'diff --git a/...'
  }
});

console.log('Review & merge request created');
```

#### 3. Create with Git Worktree Merge Strategy
```typescript
// Create request with git worktree merge strategy
const result = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Refactor database layer',
  title: 'refactor: Modernize database access layer',
  description: 'Updates database layer to use modern patterns and ORM',
  majorFilesChanged: [
    'src/db/connection.ts',
    'src/db/models.ts',
    'src/db/repositories/'
  ],
  diffPatch: generateDiff(),
  agentId: 'agent_db_001',
  agentName: 'Database Specialist',
  mergeConfig: {
    strategy: 'git_worktree',
    worktreeDetails: {
      worktreePath: '/tmp/worktrees/db-refactor',
      branchName: 'refactor/database-layer',
      baseBranch: 'main',
      commitHash: 'abc123def456'
    }
  }
});
```

#### 4. Create with Issues and Remaining Tasks
```typescript
// Create request documenting implementation details
const result = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Add rate limiting',
  title: 'feat: Implement API rate limiting',
  description: 'Adds configurable rate limiting to all API endpoints',
  majorFilesChanged: ['src/middleware/rate-limit.ts'],
  diffPatch: '...',
  agentId: 'agent_api_001',
  agentName: 'API Developer',
  issuesFaced: [
    'Had to handle distributed counter synchronization',
    'Redis connection pooling required tuning'
  ],
  remainingTasks: [
    'Add rate limiting to admin endpoints',
    'Implement rate limit exceeded response formatting'
  ]
});
```

#### 5. Create for Swarm with Context
```typescript
// Create comprehensive request for a swarm
const result = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Build payment processing feature',
  title: 'feat: Stripe payment integration',
  taskDescription: 'Integrate Stripe for handling credit card payments. Includes webhook handling, refund processing, and subscription management.',
  description: 'Complete payment processing system with Stripe integration',
  majorFilesChanged: [
    'src/payments/stripe.ts',
    'src/payments/webhooks.ts',
    'src/api/payment-routes.ts',
    'src/types/payments.ts'
  ],
  diffPatch: generateFullDiff(),
  agentId: 'agent_lead_001',
  agentName: 'Tech Lead Agent',
  swarmId: 'swarm_payments',
  issuesFaced: [
    'Stripe API rate limiting during testing',
    'Webhook signature verification complexity'
  ],
  remainingTasks: [
    'Add PayPal integration',
    'Implement payment analytics dashboard'
  ],
  changesFilePath: 'docs/payment-changes.md',
  mergeConfig: {
    strategy: 'patch',
    patchContent: generatePatch()
  }
});

console.log('Swarm request created:', result.request.id);
```

#### 6. Create from Automated Workflow
```typescript
// Create request automatically after task completion
async function createReviewAfterTask(taskId: string, agentId: string) {
  // Get task details
  const task = await getTaskDetails(taskId);

  // Generate diff
  const diff = await generateDiffForTask(taskId);

  // Create review request
  const result = await codebolt.reviewMergeRequest.create({
    type: 'review_merge',
    initialTask: task.description,
    title: `feat: ${task.title}`,
    description: `Automated review request for completed task: ${task.title}`,
    majorFilesChanged: task.modifiedFiles,
    diffPatch: diff,
    agentId: agentId,
    agentName: task.agentName,
    swarmId: task.swarmId,
    issuesFaced: task.issues || [],
    remainingTasks: task.followUpTasks || []
  });

  return result.request;
}

// Usage
const request = await createReviewAfterTask('task_123', 'agent_dev');
```

#### 7. Error Handling
```typescript
// Handle creation errors
try {
  const result = await codebolt.reviewMergeRequest.create({
    type: 'review',
    initialTask: 'Invalid task',
    title: '',  // Invalid: empty title
    description: 'Test',
    majorFilesChanged: [],
    diffPatch: '',
    agentId: 'agent_001',
    agentName: 'Test Agent'
  });

  // This would fail validation
} catch (error) {
  console.error('Failed to create request:', error);

  // Handle specific errors
  if (error.message.includes('validation')) {
    console.error('Validation failed. Check required fields.');
  } else if (error.message.includes('permission')) {
    console.error('Permission denied');
  }
}
```

#### 8. Create with Extended Description
```typescript
// Create request with rich description
const result = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Implement caching layer',
  title: 'feat: Add Redis caching',
  taskDescription: `
## Task Overview
Implement a Redis-based caching layer for frequently accessed data.

## Technical Approach
- Use Redis as cache store
- Implement cache-aside pattern
- Add cache invalidation logic
- Handle cache failures gracefully

## Implementation Details
- Cache TTL: 5 minutes default
- Cache key format: resource:id
- Fallback to DB on cache miss
  `.trim(),
  description: 'Adds Redis caching with automatic invalidation',
  majorFilesChanged: [
    'src/cache/redis.ts',
    'src/cache/middleware.ts',
    'src/config/cache.ts'
  ],
  diffPatch: '...',
  agentId: 'agent_perf_001',
  agentName: 'Performance Specialist'
});
```

### Common Use Cases

**Automated Review Creation:**
```typescript
// Automatically create review after code generation
async function autoReviewAfterCodegen(codegenResult: any, agentId: string) {
  return await codebolt.reviewMergeRequest.create({
    type: 'review_merge',
    initialTask: codegenResult.task,
    title: `feat: ${codegenResult.feature}`,
    description: codegenResult.description,
    majorFilesChanged: codegenResult.files,
    diffPatch: codegenResult.diff,
    agentId: agentId,
    agentName: 'Code Generator Agent'
  });
}
```

**Batch Request Creation:**
```typescript
// Create multiple requests for a feature
async function createRequestsForFeature(feature: Feature) {
  const requests = [];

  for (const component of feature.components) {
    const request = await codebolt.reviewMergeRequest.create({
      type: 'review_merge',
      initialTask: component.task,
      title: component.title,
      description: component.description,
      majorFilesChanged: component.files,
      diffPatch: component.diff,
      agentId: component.agentId,
      agentName: component.agentName
    });

    requests.push(request);
  }

  return requests;
}
```

### Notes

- Request ID is auto-generated
- Initial status is 'draft'
- Both 'review' and 'review_merge' types are supported
- Merge config is required for 'review_merge' type
- Diff should be in unified diff format
- All timestamps are automatically set
- Reviews array is initialized empty
- Linked jobs array is initialized empty
- Agent information is required
- Swarm ID is optional but recommended for team coordination
- Issues faced and remaining tasks provide context for reviewers
- Changes file path can reference additional documentation