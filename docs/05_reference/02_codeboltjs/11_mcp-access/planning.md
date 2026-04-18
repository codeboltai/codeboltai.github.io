---
title: Planning MCP
sidebar_label: codebolt.planning
sidebar_position: 28
---

# codebolt.planning

Planning and roadmap management tools for action plans, phases, features, and ideas.

## Available Tools

### Plan Tools
- `plan_create` - Creates a new action plan with the specified name and optional details
- `plan_get_detail` - Retrieves detailed information about a specific action plan by its ID
- `plan_get_all` - Retrieves all action plans with optional filtering by status or agent ID
- `plan_update` - Updates an existing action plan with new values
- `plan_add_task` - Adds a new task to an existing action plan
- `plan_start_task` - Starts or executes a specific task step within an action plan

### Roadmap Tools
- `roadmap_get` - Retrieves the complete roadmap for a project including all phases, features, and ideas
- `roadmap_get_phases` - Retrieves all phases in the roadmap
- `roadmap_create_phase` - Creates a new phase in the roadmap (a major milestone or stage)
- `roadmap_update_phase` - Updates an existing phase in the roadmap
- `roadmap_delete_phase` - Deletes a phase from the roadmap (also removes associated features)
- `roadmap_get_features` - Retrieves all features in a specific phase of the roadmap
- `roadmap_create_feature` - Creates a new feature in a specific phase
- `roadmap_update_feature` - Updates an existing feature in the roadmap
- `roadmap_get_ideas` - Retrieves all ideas (pre-roadmap suggestions) for the project
- `roadmap_create_idea` - Creates a new idea (pre-roadmap suggestion)

## Tool Parameters

### `plan_create`

Creates a new action plan with the specified name and optional details. Returns the created plan with its assigned ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name/title of the action plan |
| description | string | No | A description of the action plan and its purpose |
| agentId | string | No | The ID of the agent associated with this plan |
| agentName | string | No | The name of the agent associated with this plan |
| status | string | No | Initial status of the plan (e.g., 'active', 'pending') |
| planId | string | No | Custom plan ID. If not provided, one will be generated |

### `plan_get_detail`

Retrieves detailed information about a specific action plan by its ID. Returns the full plan details including all tasks, status, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| planId | string | Yes | The unique identifier of the action plan to retrieve details for |

### `plan_get_all`

Retrieves all action plans. Can optionally filter by status or agent ID. Returns a list of all action plans with their basic information.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | string | No | Filter plans by status (e.g., 'active', 'completed', 'pending') |
| agentId | string | No | Filter plans by agent ID |

### `plan_update`

Updates an existing action plan with the specified changes. Can update name, description, status, and other plan properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| planId | string | Yes | The unique identifier of the action plan to update |
| updates | object | Yes | An object containing the fields to update |
| updates.name | string | No | New name for the plan |
| updates.description | string | No | New description for the plan |
| updates.status | string | No | New status for the plan |
| updates.agentId | string | No | New agent ID |
| updates.agentName | string | No | New agent name |

### `plan_add_task`

Adds a new task to an existing action plan. The task must have a name and can optionally include description, priority, and task type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| planId | string | Yes | The unique identifier of the action plan to add the task to |
| task | object | Yes | The task object to add to the plan |
| task.name | string | Yes | The name/title of the task |
| task.description | string | No | A description of the task |
| task.priority | string | No | Priority level of the task (e.g., 'high', 'medium', 'low') |
| task.taskType | string | No | The type/category of the task |

### `plan_start_task`

Starts or executes a specific task step within an action plan. This triggers the execution of the task and returns the execution status.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| planId | string | Yes | The unique identifier of the action plan containing the task |
| taskId | string | Yes | The unique identifier of the task to start/execute |

### `roadmap_get`

Retrieves the complete roadmap for a project, including all phases, features, and ideas. Returns the full roadmap data structure.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_get_phases`

Retrieves all phases in the roadmap. Returns a list of phases with their details and feature counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_create_phase`

Creates a new phase in the roadmap. A phase is a major milestone or stage in the project roadmap that contains features.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the phase (e.g., 'Phase 1: Foundation', 'MVP Release') |
| description | string | No | Description of the phase explaining its goals and scope |
| order | number | No | Order/position of the phase in the roadmap sequence |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_update_phase`

Updates an existing phase in the roadmap. Can modify the phase name, description, or order.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| phase_id | string | Yes | The unique identifier of the phase to update |
| name | string | No | New name for the phase |
| description | string | No | New description for the phase |
| order | number | No | New order/position for the phase in the roadmap sequence |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_delete_phase`

Deletes a phase from the roadmap. Warning: This will also remove all features associated with the phase.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| phase_id | string | Yes | The unique identifier of the phase to delete |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_get_features`

Retrieves all features in a specific phase of the roadmap. Returns a list of features with their details, status, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| phase_id | string | Yes | The unique identifier of the phase to get features for |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_create_feature`

Creates a new feature in a specific phase of the roadmap. Features represent individual work items or capabilities to be implemented.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| phase_id | string | Yes | The unique identifier of the phase to add the feature to |
| title | string | Yes | The title of the feature |
| description | string | No | Detailed description of the feature |
| impact | string | No | Impact level: 'low', 'medium', 'high', or 'critical' |
| difficulty | string | No | Difficulty level: 'easy', 'medium', 'hard', or 'very-hard' |
| priority | number | No | Priority number (higher number = higher priority) |
| tags | array | No | Array of tags for categorization |
| category | string | No | Category for the feature |
| status | string | No | Initial status: 'pending', 'in-progress', 'completed', or 'cancelled'. Defaults to 'pending' |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_update_feature`

Updates an existing feature in the roadmap. Can modify the feature's title, description, impact, difficulty, priority, tags, category, or status.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feature_id | string | Yes | The unique identifier of the feature to update |
| title | string | No | New title for the feature |
| description | string | No | New description for the feature |
| impact | string | No | New impact level: 'low', 'medium', 'high', or 'critical' |
| difficulty | string | No | New difficulty level: 'easy', 'medium', 'hard', or 'very-hard' |
| priority | number | No | New priority number |
| tags | array | No | New array of tags for categorization |
| category | string | No | New category for the feature |
| status | string | No | New status: 'pending', 'in-progress', 'completed', or 'cancelled' |
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_get_ideas`

Retrieves all ideas (pre-roadmap suggestions) for the project. Ideas are suggestions that haven't been approved and added to the roadmap yet.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| project_path | string | No | Project path. If not provided, uses the active project |

### `roadmap_create_idea`

Creates a new idea (pre-roadmap suggestion). Ideas are suggestions that can later be reviewed and moved to the roadmap as features.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title of the idea |
| description | string | No | Detailed description of the idea |
| category | string | No | Category for the idea |
| suggested_impact | string | No | Suggested impact level: 'low', 'medium', 'high', or 'critical' |
| suggested_difficulty | string | No | Suggested difficulty level: 'easy', 'medium', 'hard', or 'very-hard' |
| tags | array | No | Array of tags for categorization |
| project_path | string | No | Project path. If not provided, uses the active project |

## Sample Usage

```javascript
// Create a new action plan
const planResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_create",
  {
    name: "Sprint 1 Development Plan",
    description: "Development plan for the first sprint",
    status: "active"
  }
);

// Get all action plans
const allPlans = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_get_all",
  { status: "active" }
);

// Get plan details
const planDetail = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_get_detail",
  { planId: "plan-123" }
);

// Update an action plan
const updateResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_update",
  {
    planId: "plan-123",
    updates: {
      status: "completed",
      description: "Updated description"
    }
  }
);

// Add a task to a plan
const taskResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_add_task",
  {
    planId: "plan-123",
    task: {
      name: "Implement user authentication",
      description: "Add login and registration functionality",
      priority: "high",
      taskType: "feature"
    }
  }
);

// Start a task
const startResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "plan_start_task",
  {
    planId: "plan-123",
    taskId: "task-456"
  }
);

// Get complete roadmap
const roadmap = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_get",
  {}
);

// Get all phases
const phases = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_get_phases",
  {}
);

// Create a new phase
const phaseResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_create_phase",
  {
    name: "Phase 1: Foundation",
    description: "Core infrastructure and basic features",
    order: 1
  }
);

// Update a phase
const updatePhase = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_update_phase",
  {
    phase_id: "phase-123",
    name: "Phase 1: MVP",
    order: 1
  }
);

// Delete a phase
const deletePhase = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_delete_phase",
  { phase_id: "phase-123" }
);

// Get features in a phase
const features = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_get_features",
  { phase_id: "phase-123" }
);

// Create a feature
const featureResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_create_feature",
  {
    phase_id: "phase-123",
    title: "User Dashboard",
    description: "Main user dashboard with analytics",
    impact: "high",
    difficulty: "medium",
    priority: 1,
    status: "pending",
    tags: ["frontend", "dashboard"]
  }
);

// Update a feature
const updateFeature = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_update_feature",
  {
    feature_id: "feature-456",
    status: "in-progress",
    priority: 2
  }
);

// Get all ideas
const ideas = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_get_ideas",
  {}
);

// Create a new idea
const ideaResult = await codebolt.tools.executeTool(
  "codebolt.planning",
  "roadmap_create_idea",
  {
    title: "Mobile App Integration",
    description: "Add support for mobile applications",
    category: "enhancement",
    suggested_impact: "high",
    suggested_difficulty: "hard",
    tags: ["mobile", "integration"]
  }
);
```

:::info
Planning tools help manage project roadmaps with phases, features, and ideas. Action plans provide task-level tracking for sprint or iteration planning. Features support impact/difficulty levels (low, medium, high, critical / easy, medium, hard, very-hard) and status tracking (pending, in-progress, completed, cancelled).
:::
