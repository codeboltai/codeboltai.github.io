---
sidebar_position: 1
title: Review Merge Request Module
---

# Review Merge Request Module

The Review Merge Request module provides comprehensive functionality for managing code reviews and merge requests. It enables agents to create review requests, gather feedback, manage approvals, and handle merge workflows with various strategies.

## Overview

The review merge request module supports:
- **Request Lifecycle** - Draft, pending review, in review, changes requested, approved, merged, rejected, closed
- **Request Types** - Review-only or review with merge
- **Merge Strategies** - Patch-based or git worktree
- **Review Feedback** - Approvals, change requests, and comments
- **Status Tracking** - Track requests by agent, swarm, or status
- **Linked Jobs** - Create and track jobs from review feedback

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a new review request
const request = await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Implement user authentication',
  title: 'feat: Add OAuth2 login',
  description: 'Adds OAuth2 authentication with Google and GitHub providers',
  majorFilesChanged: ['src/auth/oauth.ts', 'src/auth/login.ts'],
  diffPatch: 'diff --git a/src/auth/oauth.ts...',
  agentId: 'agent_dev_001',
  agentName: 'Developer Agent',
  swarmId: 'swarm_frontend'
});

// Add review feedback
await codebolt.reviewMergeRequest.addReview(request.request.id, {
  agentId: 'agent_reviewer_001',
  agentName: 'Code Reviewer',
  type: 'approve',
  comment: 'LGTM! Great implementation.'
});

// Update status to approved
await codebolt.reviewMergeRequest.updateStatus(request.request.id, 'approved');

// Merge the request
await codebolt.reviewMergeRequest.merge(request.request.id, 'agent_dev_001');
```

## Request Lifecycle

```
draft → pending_review → in_review → approved → review_completed → merged
                              ↓
                        changes_requested → in_review
                              ↓
                         rejected / closed
```

## Available Methods

### CRUD Operations
| Method | Description |
|--------|-------------|
| `list(filters)` | List review requests with filters |
| `get(id)` | Get a single review request |
| `create(data)` | Create a new review request |
| `update(id, data)` | Update an existing request |
| `delete(id)` | Delete a review request |

### Review Operations
| Method | Description |
|--------|-------------|
| `addReview(id, feedback)` | Add review feedback to a request |
| `updateStatus(id, status)` | Update the request status |

### Merge Operations
| Method | Description |
|--------|-------------|
| `merge(id, mergedBy)` | Merge a request |
| `addLinkedJob(id, jobId)` | Link a job to the request |
| `removeLinkedJob(id, jobId)` | Unlink a job from the request |

### Query Operations
| Method | Description |
|--------|-------------|
| `pending()` | Get all pending review requests |
| `readyToMerge()` | Get requests ready to merge |
| `byAgent(agentId)` | Get requests by agent |
| `bySwarm(swarmId)` | Get requests by swarm |
| `statistics()` | Get review statistics |

## Request Types

### Review Only
```typescript
await codebolt.reviewMergeRequest.create({
  type: 'review',
  initialTask: 'Code review for PR #123',
  title: 'Review: User profile updates',
  description: 'Please review the user profile update changes',
  majorFilesChanged: ['src/user/profile.ts'],
  diffPatch: '...',
  agentId: 'agent_dev',
  agentName: 'Developer'
});
```

### Review with Merge
```typescript
await codebolt.reviewMergeRequest.create({
  type: 'review_merge',
  initialTask: 'Implement search feature',
  title: 'feat: Add full-text search',
  description: 'Implements Elasticsearch-based search',
  majorFilesChanged: ['src/search/index.ts', 'src/search/query.ts'],
  diffPatch: '...',
  agentId: 'agent_dev',
  agentName: 'Developer',
  mergeConfig: {
    strategy: 'git_worktree',
    worktreeDetails: {
      worktreePath: '/tmp/worktree',
      branchName: 'feature/search',
      baseBranch: 'main'
    }
  }
});
```

## Common Use Cases

### 1. Create Code Review Request
```typescript
const request = await codebolt.reviewMergeRequest.create({
  type: 'review',
  initialTask: 'Review authentication changes',
  title: 'Review: OAuth implementation',
  description: 'Please review the OAuth2 authentication implementation',
  majorFilesChanged: [
    'src/auth/oauth.ts',
    'src/auth/providers.ts',
    'src/middleware/auth.ts'
  ],
  diffPatch: generateDiff(),
  agentId: 'agent_dev_001',
  agentName: 'Developer Agent',
  swarmId: 'swarm_backend',
  issuesFaced: ['Had to work around CORS issues'],
  remainingTasks: ['Add refresh token support']
});
```

### 2. Add Multiple Reviews
```typescript
// First reviewer approves
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_reviewer_1',
  agentName: 'Senior Reviewer',
  type: 'approve',
  comment: 'Code looks good. Approved!'
});

// Second reviewer requests changes
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_reviewer_2',
  agentName: 'Security Reviewer',
  type: 'request_changes',
  comment: 'Please add rate limiting to the login endpoint.'
});

// Third reviewer leaves comment
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_reviewer_3',
  agentName: 'UI Reviewer',
  type: 'comment',
  comment: 'Consider adding loading states.'
});
```

### 3. Query and Filter Requests
```typescript
// Get pending requests
const pending = await codebolt.reviewMergeRequest.pending();
console.log(`Pending reviews: ${pending.totalCount}`);

// Get requests ready to merge
const ready = await codebolt.reviewMergeRequest.readyToMerge();
console.log(`Ready to merge: ${ready.totalCount}`);

// Filter by status
const filtered = await codebolt.reviewMergeRequest.list({
  status: ['in_review', 'pending_review'],
  agentId: 'agent_dev_001',
  limit: 10
});

// Get requests by swarm
const swarmRequests = await codebolt.reviewMergeRequest.bySwarm('swarm_frontend');
```

### 4. Process Review Workflow
```typescript
async function processReview(requestId: string) {
  // Get request details
  const request = await codebolt.reviewMergeRequest.get(requestId);

  // Update status to in review
  await codebolt.reviewMergeRequest.updateStatus(requestId, 'in_review');

  // Perform automated checks
  const checksPassed = await runAutomatedChecks(request.request);

  if (checksPassed) {
    // Approve
    await codebolt.reviewMergeRequest.addReview(requestId, {
      agentId: 'agent_bot',
      agentName: 'Automated Reviewer',
      type: 'approve',
      comment: 'All automated checks passed'
    });

    // Update status
    await codebolt.reviewMergeRequest.updateStatus(requestId, 'approved');
  } else {
    // Request changes
    await codebolt.reviewMergeRequest.addReview(requestId, {
      agentId: 'agent_bot',
      agentName: 'Automated Reviewer',
      type: 'request_changes',
      comment: 'Automated checks failed. Please fix linting errors.'
    });

    await codebolt.reviewMergeRequest.updateStatus(requestId, 'changes_requested');
  }
}
```

### 5. Merge with Different Strategies
```typescript
// Patch-based merge
await codebolt.reviewMergeRequest.merge(requestId, 'agent_merger', {
  strategy: 'patch',
  patchContent: 'diff --git a/file.ts...'
});

// Git worktree merge
await codebolt.reviewMergeRequest.merge(requestId, 'agent_merger', {
  strategy: 'git_worktree',
  worktreeDetails: {
    worktreePath: '/tmp/worktrees/feature-branch',
    branchName: 'feature/new-feature',
    baseBranch: 'main',
    commitHash: 'abc123'
  }
});
```

### 6. Link Jobs from Reviews
```typescript
// Create a job from review feedback
const job = await createJob({
  title: 'Add rate limiting to login',
  type: 'bugfix'
});

// Link job to review request
await codebolt.reviewMergeRequest.addLinkedJob(requestId, job.id);
```

### 7. Track Review Statistics
```typescript
const stats = await codebolt.reviewMergeRequest.statistics();
console.log('Review Statistics:', stats.statistics);
```

## Request Status Values

| Status | Description |
|--------|-------------|
| `draft` | Initial state, not yet submitted |
| `pending_review` | Submitted, waiting for reviewer |
| `in_review` | Currently being reviewed |
| `changes_requested` | Reviewer requested changes |
| `approved` | Approved by reviewer(s) |
| `review_completed` | Review finished, ready for merge |
| `merged` | Successfully merged |
| `rejected` | Rejected by reviewer |
| `closed` | Closed without merge |

## Merge Strategies

### Patch Strategy
```typescript
mergeConfig: {
  strategy: 'patch',
  patchContent: 'unified diff format...'
}
```

### Git Worktree Strategy
```typescript
mergeConfig: {
  strategy: 'git_worktree',
  worktreeDetails: {
    worktreePath: '/path/to/worktree',
    branchName: 'feature-branch',
    baseBranch: 'main',
    commitHash: 'commit-sha'
  }
}
```

## Error Handling

```typescript
try {
  const request = await codebolt.reviewMergeRequest.create(data);

  if (request.request) {
    console.log('Request created:', request.request.id);
  }
} catch (error) {
  console.error('Failed to create request:', error);
}
```

## Notes

- Request IDs are auto-generated
- All timestamps in ISO 8601 format
- Multiple reviews can be added per request
- Status transitions follow the lifecycle flow
- Merge can only occur after approval
- Linked jobs track work created from reviews
- Statistics provide aggregate metrics
- Filtering supports complex queries
- Requests can be filtered by agent, swarm, status, or date range
- Review feedback includes approvals, change requests, and comments
