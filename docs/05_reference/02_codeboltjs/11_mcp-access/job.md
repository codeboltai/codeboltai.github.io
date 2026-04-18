---
title: Job MCP
sidebar_label: codebolt.job
sidebar_position: 29
---

# codebolt.job

Job management tools for creating, tracking, and managing work items with dependencies, priorities, and agent assignments.

## Available Tools

- `job_create` - Creates a new job in a specified job group with name, type, priority, and optional details
- `job_get` - Retrieves a job by its ID with full details including dependencies and metadata
- `job_update` - Updates an existing job with new values (only provided fields are updated)
- `job_delete` - Permanently deletes a job by its ID
- `job_list` - Lists jobs with optional filters for status, priority, assignee, labels, and type
- `job_group_create` - Creates a new job group (container for organizing related jobs)
- `job_add_dependency` - Adds a dependency between two jobs
- `job_get_ready` - Gets jobs ready to be worked on (no blocking dependencies)
- `job_get_blocked` - Gets jobs that are blocked by uncompleted dependencies
- `job_lock` - Acquires a lock on a job for an agent to prevent conflicts
- `job_unlock` - Releases a lock on a job when work is complete or paused
- `job_bid_add` - Adds a bid from an agent to work on a job

## Tool Parameters

### `job_create`

Creates a new job in a specified job group. Jobs are work items that can be tracked, assigned, and organized with dependencies, labels, and priorities.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| group_id | string | Yes | The ID of the job group to create the job in |
| name | string | Yes | The name/title of the job |
| type | string | Yes | The type of job: 'bug', 'feature', 'task', 'epic', 'chore' |
| priority | number | Yes | The priority of the job (1-4, with 4 being urgent) |
| description | string | No | Description of the job |
| status | string | No | Status of the job: 'open', 'working', 'hold', 'closed' |
| assignees | array | No | List of assignees |
| labels | array | No | List of labels |
| parent_job_id | string | No | Parent job ID for sub-jobs |
| notes | string | No | Notes for the job |
| due_date | string | No | Due date for the job |

### `job_get`

Retrieves a job by its ID. Returns the full job details including name, description, status, priority, assignees, labels, dependencies, and other metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to retrieve (e.g., "COD2-5") |

### `job_update`

Updates an existing job with new values. Only the fields provided will be updated; other fields remain unchanged.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to update (e.g., "COD2-5") |
| name | string | No | New name/title for the job |
| type | string | No | New type for the job: 'bug', 'feature', 'task', 'epic', 'chore' |
| priority | number | No | New priority for the job (1-4, with 4 being urgent) |
| description | string | No | New description for the job |
| status | string | No | New status for the job: 'open', 'working', 'hold', 'closed' |
| assignees | array | No | New list of assignees |
| labels | array | No | New list of labels |
| parent_job_id | string | No | New parent job ID |
| notes | string | No | New notes |
| due_date | string | No | New due date |

### `job_delete`

Deletes a job by its ID. This action is permanent and cannot be undone.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to delete (e.g., "COD2-5") |

### `job_list`

Lists jobs with optional filters. Can filter by status, priority, assignee, labels, type, and more. Supports pagination and sorting.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | array | No | Filter by status: 'open', 'working', 'hold', 'closed' |
| priority | array | No | Filter by priority: 1, 2, 3, 4 |
| assignee | array | No | Filter by assignee |
| labels | array | No | Filter by labels (AND - all labels must match) |
| type | array | No | Filter by job type: 'bug', 'feature', 'task', 'epic', 'chore' |
| group_id | string | No | Filter by job group ID |
| title_contains | string | No | Filter by title containing text |
| limit | number | No | Limit on number of results |
| offset | number | No | Offset for pagination |
| sort_by | string | No | Sort by field: 'priority', 'createdAt', 'updatedAt', 'status', 'importance' |
| sort_order | string | No | Sort order: 'asc', 'desc' |

### `job_group_create`

Creates a new job group. Job groups are containers for organizing related jobs. Each group has a unique shortname used in job IDs (e.g., jobs in group "COD2" have IDs like "COD2-1", "COD2-2", etc.).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | No | Display name for the job group |
| short_name | string | No | 3-4 letter unique shortname (e.g., "COD2"). If not provided, one will be generated |
| parent_id | string | No | Parent group ID for hierarchical organization |

### `job_add_dependency`

Adds a dependency between two jobs. The first job (job_id) will depend on the second job (depends_on_job_id). Dependencies can be of different types: 'blocks', 'related', 'parent-child', or 'discovered-from'.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job that will depend on another job |
| depends_on_job_id | string | Yes | The ID of the job that the first job depends on |
| type | string | No | Type of dependency: 'blocks', 'related', 'parent-child', 'discovered-from' |

### `job_get_ready`

Gets jobs that are ready to be worked on. Ready jobs have no blocking dependencies - all their dependent jobs have been completed. Use this to find actionable work items.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | array | No | Filter by status: 'open', 'working', 'hold', 'closed' |
| priority | array | No | Filter by priority: 1, 2, 3, 4 |
| assignee | array | No | Filter by assignee |
| labels | array | No | Filter by labels |
| type | array | No | Filter by job type: 'bug', 'feature', 'task', 'epic', 'chore' |
| group_id | string | No | Filter by job group ID |
| limit | number | No | Limit on number of results |

### `job_get_blocked`

Gets jobs that are blocked by dependencies. Blocked jobs have one or more dependencies that have not yet been completed. Use this to understand work item bottlenecks and dependency chains.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | array | No | Filter by status: 'open', 'working', 'hold', 'closed' |
| priority | array | No | Filter by priority: 1, 2, 3, 4 |
| assignee | array | No | Filter by assignee |
| labels | array | No | Filter by labels |
| type | array | No | Filter by job type: 'bug', 'feature', 'task', 'epic', 'chore' |
| group_id | string | No | Filter by job group ID |
| limit | number | No | Limit on number of results |

### `job_lock`

Acquires a lock on a job for an agent. Locking a job indicates that an agent is actively working on it and prevents other agents from making conflicting changes. The lock should be released when work is complete.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to lock (e.g., "COD2-5") |
| agent_id | string | Yes | The ID of the agent acquiring the lock |
| agent_name | string | No | Display name of the agent |

### `job_unlock`

Releases a lock on a job. The agent releasing the lock must be the same agent that acquired it. Use this when work on a job is complete or paused.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to unlock (e.g., "COD2-5") |
| agent_id | string | Yes | The ID of the agent releasing the lock (must match the agent that acquired it) |

### `job_bid_add`

Adds a bid from an agent to work on a job. Bidding allows agents to express interest in working on a job, with a reason and priority. Bids can be reviewed and accepted to assign the job to the winning bidder.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string | Yes | The ID of the job to bid on (e.g., "COD2-5") |
| agent_id | string | Yes | The ID of the agent placing the bid |
| agent_name | string | No | Display name of the agent |
| reason | string | Yes | The reason or justification for the bid (e.g., expertise, availability) |
| priority | number | Yes | The priority/urgency of the bid (higher number = more urgent) |

## Sample Usage

```javascript
// Create a job group
const groupResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_group_create",
  {
    name: "Backend Development",
    short_name: "BE"
  }
);

// Create a new job
const jobResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_create",
  {
    group_id: "group-123",
    name: "Implement user authentication",
    type: "feature",
    priority: 3,
    description: "Add login and registration functionality",
    status: "open",
    assignees: ["agent-001"],
    labels: ["backend", "security"],
    due_date: "2024-12-31"
  }
);

// Get job details
const jobDetail = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_get",
  { job_id: "BE-1" }
);

// Update a job
const updateResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_update",
  {
    job_id: "BE-1",
    status: "working",
    priority: 4,
    notes: "In progress, 50% complete"
  }
);

// List jobs with filters
const jobs = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_list",
  {
    status: ["open", "working"],
    priority: [3, 4],
    type: ["feature", "bug"],
    sort_by: "priority",
    sort_order: "desc",
    limit: 10
  }
);

// Add a dependency between jobs
const dependencyResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_add_dependency",
  {
    job_id: "BE-2",
    depends_on_job_id: "BE-1",
    type: "blocks"
  }
);

// Get ready jobs (no blocking dependencies)
const readyJobs = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_get_ready",
  {
    status: ["open"],
    priority: [3, 4],
    limit: 5
  }
);

// Get blocked jobs
const blockedJobs = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_get_blocked",
  { group_id: "group-123" }
);

// Lock a job for an agent
const lockResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_lock",
  {
    job_id: "BE-1",
    agent_id: "agent-001",
    agent_name: "Code Assistant"
  }
);

// Unlock a job
const unlockResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_unlock",
  {
    job_id: "BE-1",
    agent_id: "agent-001"
  }
);

// Add a bid to work on a job
const bidResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_bid_add",
  {
    job_id: "BE-3",
    agent_id: "agent-002",
    agent_name: "Backend Specialist",
    reason: "I have expertise in authentication systems",
    priority: 5
  }
);

// Delete a job
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.job",
  "job_delete",
  { job_id: "BE-99" }
);
```

:::info
Job tools provide comprehensive work item management with support for job types (bug, feature, task, epic, chore), priorities (1-4, with 4 being urgent), statuses (open, working, hold, closed), and dependency types (blocks, related, parent-child, discovered-from). Job groups organize related jobs and provide unique shortname prefixes for job IDs (e.g., "BE-1", "FE-2").
:::
