---
title: Review Merge Request MCP
sidebar_label: codebolt.reviewMergeRequest
sidebar_position: 55
---

# codebolt.reviewMergeRequest

Review merge request tools for creating, listing, and merging code review requests. Note: This is different from review.md which covers code review workflow tools.

## Available Tools

- `reviewMergeRequest_create` - Creates a new review merge request with branches and description
- `reviewMergeRequest_list` - Lists all review merge requests with optional filtering
- `reviewMergeRequest_merge` - Merges a review merge request after approval

## Tool Parameters

### reviewMergeRequest_create

Creates a new review merge request for code review workflow.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the review merge request |
| `description` | string | Yes | Detailed description of the changes being proposed |
| `sourceBranch` | string | Yes | The name of the source branch containing the changes |
| `targetBranch` | string | Yes | The name of the target branch to merge into (e.g., main, develop) |
| `authorId` | string | Yes | The ID of the author creating the merge request |
| `swarmId` | string | No | Optional swarm ID for grouping related requests |
| `explanation` | string | No | Optional explanation or context for the merge request |

### reviewMergeRequest_list

Lists all review merge requests with optional filtering capabilities.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter requests by status (e.g., pending, approved, merged, rejected) |
| `authorId` | string | No | Filter requests by author ID |
| `swarmId` | string | No | Filter requests by swarm ID |
| `limit` | number | No | Maximum number of requests to return |
| `explanation` | string | No | Optional explanation for the list request |

### reviewMergeRequest_merge

Merges an existing review merge request after it has been approved.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the review merge request to merge |
| `mergedBy` | string | Yes | The ID of the user performing the merge operation |
| `explanation` | string | No | Optional explanation or notes about the merge |

## Sample Usage

```javascript
// Create a new review merge request
await codebolt.reviewMergeRequest_create({
  title: "Add user authentication feature",
  description: "Implement OAuth2 login with Google and GitHub providers",
  sourceBranch: "feature/user-auth",
  targetBranch: "main",
  authorId: "user-123"
});

// Create with optional swarm ID
await codebolt.reviewMergeRequest_create({
  title: "Fix memory leak in data processor",
  description: "Resolved issue where large datasets caused memory overflow",
  sourceBranch: "bugfix/memory-leak",
  targetBranch: "develop",
  authorId: "user-456",
  swarmId: "swarm-789"
});

// List all pending review merge requests
await codebolt.reviewMergeRequest_list({
  status: "pending",
  limit: 10
});

// List requests by author
await codebolt.reviewMergeRequest_list({
  authorId: "user-123",
  status: "approved"
});

// Merge an approved review request
await codebolt.reviewMergeRequest_merge({
  id: "rmr-abc-123",
  mergedBy: "user-789"
});
```

:::info
**Important Notes:**
- Review merge requests follow a lifecycle: pending → approved → merged (or rejected)
- The `sourceBranch` and `targetBranch` parameters must match existing branch names in your repository
- Only approved review merge requests can be merged successfully
- Merge requests with `swarmId` are typically grouped for batch processing or related features
- The `authorId` and `mergedBy` fields are used for audit trail and permission checking
:::
