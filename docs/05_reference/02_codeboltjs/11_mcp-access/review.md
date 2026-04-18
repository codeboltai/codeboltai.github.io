---
title: Review MCP
sidebar_label: codebolt.review
sidebar_position: 32
---

# codebolt.review

Code review operations tools for creating, managing, and processing merge request reviews.

## Available Tools

- `review_create` - Creates a new merge request review for code changes
- `review_get` - Gets a single merge request review by its ID with full details
- `review_list` - Lists merge request reviews with optional filtering and pagination
- `review_update` - Updates an existing merge request review properties
- `review_submit` - Submits a review, changing status from draft to pending_review
- `review_approve` - Approves a merge request review with optional comment
- `review_request_changes` - Requests changes on a merge request with required comment
- `review_add_comment` - Adds a comment to a merge request review without approving or rejecting

## Tool Parameters

### `review_create`

Creates a new merge request review. Use this to submit code changes for review by other agents or users. Specify the type as 'review' for review only or 'review_merge' for review with merge capability.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | string | Yes | Type of request: 'review' for review only, 'review_merge' for review with merge capability. |
| initial_task | string | Yes | The original task description that led to these changes. |
| title | string | Yes | A concise title for the review request. |
| description | string | Yes | Detailed description of the changes made. |
| major_files_changed | array | Yes | Array of main file paths that were changed. |
| diff_patch | string | Yes | The unified diff/patch content of the changes. |
| agent_id | string | Yes | ID of the agent creating this review request. |
| agent_name | string | Yes | Name of the agent creating this review request. |
| swarm_id | string | No | Optional swarm ID if this is part of a swarm operation. |
| issues_faced | array | No | Optional array of issues encountered during implementation. |
| remaining_tasks | array | No | Optional array of tasks still to be completed. |
| merge_strategy | string | No | Optional merge strategy: 'patch' or 'git_worktree'. |
| changes_file_path | string | No | Optional path to a file containing changes summary. |
| task_description | string | No | Optional extended description of the task. |

### `review_get`

Gets a single merge request review by its ID. Returns the full review details including status, description, files changed, reviews received, and merge information.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to retrieve. |

### `review_list`

Lists merge request reviews with optional filtering. Can filter by status, type, agent, swarm, date ranges, and title. Supports pagination with limit and offset, and sorting by various fields.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | array | No | Optional array of statuses to filter by: 'draft', 'pending_review', 'in_review', 'changes_requested', 'approved', 'review_completed', 'merged', 'rejected', 'closed'. |
| type | array | No | Optional array of types to filter by: 'review' or 'review_merge'. |
| agent_id | string | No | Optional agent ID to filter reviews by creator. |
| swarm_id | string | No | Optional swarm ID to filter reviews by swarm. |
| created_after | string | No | Optional ISO date string to filter reviews created after this date. |
| created_before | string | No | Optional ISO date string to filter reviews created before this date. |
| updated_after | string | No | Optional ISO date string to filter reviews updated after this date. |
| updated_before | string | No | Optional ISO date string to filter reviews updated before this date. |
| title_contains | string | No | Optional string to filter reviews whose title contains this text. |
| limit | number | No | Optional maximum number of results to return. |
| offset | number | No | Optional number of results to skip for pagination. |
| sort_by | string | No | Optional field to sort results by: 'createdAt', 'updatedAt', or 'status'. |
| sort_order | string | No | Optional sort order: 'asc' or 'desc'. |

### `review_update`

Updates an existing merge request review. Can modify the title, description, status, files changed, diff patch, and other properties. Only provide the fields you want to update.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to update. |
| type | string | No | Optional new type: 'review' or 'review_merge'. |
| status | string | No | Optional new status: 'draft', 'pending_review', 'in_review', 'changes_requested', 'approved', 'review_completed', 'merged', 'rejected', 'closed'. |
| title | string | No | Optional new title for the review. |
| description | string | No | Optional new description of the changes. |
| major_files_changed | array | No | Optional new array of main file paths that were changed. |
| diff_patch | string | No | Optional new unified diff/patch content. |
| issues_faced | array | No | Optional new array of issues encountered. |
| remaining_tasks | array | No | Optional new array of remaining tasks. |
| merge_strategy | string | No | Optional new merge strategy: 'patch' or 'git_worktree'. |
| changes_file_path | string | No | Optional new path to changes summary file. |
| task_description | string | No | Optional new extended task description. |

### `review_submit`

Submits a merge request review for review. This changes the review status from 'draft' to 'pending_review', making it visible to reviewers.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to submit. |

### `review_approve`

Approves a merge request review. Adds an approval feedback from the specified agent with an optional comment. This indicates that the changes are acceptable and ready for merge.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to approve. |
| agent_id | string | Yes | The ID of the agent approving the review. |
| agent_name | string | Yes | The name of the agent approving the review. |
| comment | string | No | Optional comment to accompany the approval. |

### `review_request_changes`

Requests changes on a merge request review. Adds a request_changes feedback from the specified agent with a comment describing what needs to be changed. The submitter will need to address these changes before the review can be approved.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to request changes on. |
| agent_id | string | Yes | The ID of the agent requesting changes. |
| agent_name | string | Yes | The name of the agent requesting changes. |
| comment | string | Yes | Detailed comment describing what changes are needed. |

### `review_add_comment`

Adds a comment to a merge request review. This adds general feedback without approving or requesting changes. Use this for questions, suggestions, or observations about the code changes.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| review_id | string | Yes | The unique identifier of the review to comment on. |
| agent_id | string | Yes | The ID of the agent adding the comment. |
| agent_name | string | Yes | The name of the agent adding the comment. |
| comment | string | Yes | The comment text to add to the review. |

## Sample Usage

### Create a Review

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_create",
  {
    type: "review_merge",
    initial_task: "Implement user authentication feature",
    title: "Add JWT authentication",
    description: "Implemented JWT-based authentication with refresh tokens",
    major_files_changed: ["src/auth/jwt.ts", "src/middleware/auth.ts"],
    diff_patch: "--- a/src/auth/jwt.ts\n+++ b/src/auth/jwt.ts\n...",
    agent_id: "agent-001",
    agent_name: "CodeBot",
    merge_strategy: "patch"
  }
);
```

### List Reviews with Filters

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_list",
  {
    status: ["pending_review", "in_review"],
    agent_id: "agent-001",
    sort_by: "createdAt",
    sort_order: "desc",
    limit: 10
  }
);
```

### Submit and Approve a Review

```javascript
// Submit a draft review
const submitResult = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_submit",
  { review_id: "review-123" }
);

// Approve the review
const approveResult = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_approve",
  {
    review_id: "review-123",
    agent_id: "reviewer-001",
    agent_name: "ReviewBot",
    comment: "LGTM! Code quality is good."
  }
);
```

### Request Changes

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_request_changes",
  {
    review_id: "review-123",
    agent_id: "reviewer-001",
    agent_name: "ReviewBot",
    comment: "Please add error handling for the edge cases in jwt.ts"
  }
);
```

### Add a Comment

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_add_comment",
  {
    review_id: "review-123",
    agent_id: "reviewer-001",
    agent_name: "ReviewBot",
    comment: "Consider using a more descriptive variable name on line 45"
  }
);
```

### Update Review Details

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.review",
  "review_update",
  {
    review_id: "review-123",
    title: "Updated: Add JWT authentication with MFA",
    description: "Added multi-factor authentication support",
    remaining_tasks: ["Add unit tests for MFA flow"]
  }
);
```

:::info
Review types include 'review' for review only and 'review_merge' for review with merge capability. Status values include: draft, pending_review, in_review, changes_requested, approved, review_completed, merged, rejected, and closed.
:::
