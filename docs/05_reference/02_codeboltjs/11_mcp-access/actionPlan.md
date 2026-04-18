---
title: ActionPlan MCP
sidebar_label: codebolt.actionPlan
sidebar_position: 53
---

# codebolt.actionPlan

ActionPlan management tools for creating and managing action plans. ActionPlans are structured collections of tasks that can be executed sequentially or in parallel.

## Available Tools

- `actionPlan_getAll` - Retrieves all action plans with their status and details
- `actionPlan_create` - Creates a new action plan with tasks and metadata
- `actionPlan_add_task` - Adds a new task to an existing action plan

## Tool Parameters

### `actionPlan_getAll`

Retrieves a list of all action plans currently in the system, including their IDs, names, and current status.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

### `actionPlan_create`

Creates a new action plan with specified properties. Action plans serve as containers for organizing and tracking related tasks.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the action plan. This is a required field and should be descriptive of what the plan accomplishes. |
| description | string | No | Optional detailed description of the action plan's purpose and objectives. Provides context about what the plan is designed to achieve. |
| agentId | string | No | Optional unique identifier of the agent associated with this action plan. Links the plan to a specific agent for ownership and tracking. |
| agentName | string | No | Optional human-readable name of the agent associated with this action plan. Used for display purposes and easier identification. |
| status | string | No | Optional initial status of the action plan. Common values include 'pending', 'in-progress', 'completed', 'failed'. Defaults based on system configuration if not provided. |
| planId | string | No | Optional custom identifier for the action plan. If not provided, the system will generate a unique ID automatically. |
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

### `actionPlan_add_task`

Adds a new task to an existing action plan. Tasks can include various properties to manage execution, priority, and dependencies.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| planId | string | Yes | The unique identifier of the action plan to which the task will be added. Must reference an existing action plan. |
| task | object | Yes | The task object containing all task properties. At minimum, must include a task name. See task properties below. |
| task.name | string | Yes | The name of the task. This is required and should clearly describe what the task accomplishes. |
| task.description | string | No | Optional detailed description of the task's purpose and what it should accomplish. |
| task.priority | string | No | Optional priority level for the task. Common values include 'high', 'medium', 'low', 'critical'. Used for task scheduling and execution order. |
| task.taskType | string | No | Optional type or category of the task. Used for grouping and filtering tasks. Examples include 'development', 'testing', 'documentation', 'deployment'. |
| task.status | string | No | Optional initial status of the task. Common values include 'pending', 'in-progress', 'completed', 'failed', 'blocked'. |
| task.assignedTo | string | No | Optional identifier of the agent or user to whom this task is assigned. Used for task ownership and responsibility tracking. |
| task.estimatedTime | number | No | Optional estimated time to complete the task, typically in minutes or hours. Used for planning and resource allocation. |
| task.dependencies | string[] | No | Optional array of task IDs that this task depends on. These tasks must complete before this task can begin execution. Supports complex task dependencies and sequencing. |
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

## Sample Usage

```javascript
// Get all action plans
const allPlans = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_getAll",
  {}
);

// Create a new action plan with minimal information
const createResult = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_create",
  {
    name: "Website Redesign",
    description: "Complete overhaul of the company website"
  }
);

// Create an action plan with full details
const createDetailedResult = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_create",
  {
    name: "API Migration",
    description: "Migrate legacy API endpoints to new architecture",
    agentId: "agent-12345",
    agentName: "Backend Developer",
    status: "pending",
    planId: "custom-plan-001"
  }
);

// Add a simple task to an action plan
const addSimpleTask = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_add_task",
  {
    planId: "plan-12345",
    task: {
      name: "Design database schema"
    }
  }
);

// Add a comprehensive task with all properties
const addDetailedTask = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_add_task",
  {
    planId: "plan-12345",
    task: {
      name: "Implement authentication endpoints",
      description: "Create secure login and registration API endpoints",
      priority: "high",
      taskType: "development",
      status: "pending",
      assignedTo: "agent-67890",
      estimatedTime: 120,
      dependencies: ["task-001", "task-002"]
    }
  }
);

// Add multiple tasks with dependencies
const task1 = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_add_task",
  {
    planId: "plan-12345",
    task: { name: "Setup project structure" }
  }
);

const task2 = await codebolt.tools.executeTool(
  "codebolt.actionPlan",
  "actionPlan_add_task",
  {
    planId: "plan-12345",
    task: {
      name: "Configure build system",
      dependencies: ["setup-project-structure-id"]
    }
  }
);
```

:::info
Action Plan Status Values:
- **pending**: Plan has been created but not yet started
- **in-progress**: Plan is currently being executed
- **completed**: Plan has finished successfully
- **failed**: Plan execution failed

Task Status Values:
- **pending**: Task is waiting to be executed
- **in-progress**: Task is currently being executed
- **completed**: Task finished successfully
- **failed**: Task execution failed
- **blocked**: Task is waiting for dependencies to complete

Task Priority Levels:
- **critical**: Must be executed immediately
- **high**: Should be executed as soon as possible
- **medium**: Standard execution priority
- **low**: Can be deferred if needed
:::
