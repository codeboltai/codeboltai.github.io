---
cbapicategory:
  - name: createTask
    link: /docs/reference/client-sdk/api-reference/planner/createTask
    description: "Creates a new task in the planner.

Adds a task with a title, description, and optional agent assignment. Tasks can have
dependencies, priorities, and labels to organize complex project work."
  - name: createTasksFromMarkdown
    link: /docs/reference/client-sdk/api-reference/planner/createTasksFromMarkdown
    description: "Bulk-creates tasks by parsing a markdown document.

Parses a markdown-formatted task list (using checkboxes, headings, and lists) and
creates individual planner tasks from it. This enables rapid task creation from
planning documents or specifications."
  - name: deleteTask
    link: /docs/reference/client-sdk/api-reference/planner/deleteTask
    description: "Deletes a planner task permanently.

Removes a task from the planner. This action cannot be undone. Consider updating the
task status to \"cancelled\" instead if you want to preserve a record of the work."
  - name: exportMarkdown
    link: /docs/reference/client-sdk/api-reference/planner/exportMarkdown
    description: "Exports the current planner tasks as a markdown document.

Generates a markdown-formatted representation of all tasks, organized by agent or
status. Useful for creating reports, sharing progress externally, or backing up
the current plan."
  - name: get
    link: /docs/reference/client-sdk/api-reference/planner/get
    description: "Retrieves the planner overview with aggregated status information.

Returns a high-level summary of the planner state including total tasks, completion
statistics, and agent utilization. Use this for dashboard views and progress monitoring."
  - name: getAgents
    link: /docs/reference/client-sdk/api-reference/planner/getAgents
    description: "Retrieves all agents registered in the planner.

Returns the list of agents that have been assigned tasks or are available for task
assignment. Each agent includes its current workload and assignment information."
  - name: getAgentTasks
    link: /docs/reference/client-sdk/api-reference/planner/getAgentTasks
    description: "Retrieves all tasks assigned to a specific agent.

Returns the task list for a given agent, allowing you to see what work is queued,
in progress, or completed for that agent."
  - name: updateTask
    link: /docs/reference/client-sdk/api-reference/planner/updateTask
    description: "Updates an existing planner task.

Modifies task properties such as status, assignment, priority, or description.
Use this to transition tasks through their lifecycle (e.g., pending to in-progress
to completed)."
---
# Planner API

Planner API

<CBAPICategory />

## Methods

- [`createTask()`](./createTask) — Creates a new task in the planner.

Adds a task with a title, description, and optional agent assignment. Tasks can have
dependencies, priorities, and labels to organize complex project work.
- [`createTasksFromMarkdown()`](./createTasksFromMarkdown) — Bulk-creates tasks by parsing a markdown document.

Parses a markdown-formatted task list (using checkboxes, headings, and lists) and
creates individual planner tasks from it. This enables rapid task creation from
planning documents or specifications.
- [`deleteTask()`](./deleteTask) — Deletes a planner task permanently.

Removes a task from the planner. This action cannot be undone. Consider updating the
task status to "cancelled" instead if you want to preserve a record of the work.
- [`exportMarkdown()`](./exportMarkdown) — Exports the current planner tasks as a markdown document.

Generates a markdown-formatted representation of all tasks, organized by agent or
status. Useful for creating reports, sharing progress externally, or backing up
the current plan.
- [`get()`](./get) — Retrieves the planner overview with aggregated status information.

Returns a high-level summary of the planner state including total tasks, completion
statistics, and agent utilization. Use this for dashboard views and progress monitoring.
- [`getAgents()`](./getAgents) — Retrieves all agents registered in the planner.

Returns the list of agents that have been assigned tasks or are available for task
assignment. Each agent includes its current workload and assignment information.
- [`getAgentTasks()`](./getAgentTasks) — Retrieves all tasks assigned to a specific agent.

Returns the task list for a given agent, allowing you to see what work is queued,
in progress, or completed for that agent.
- [`updateTask()`](./updateTask) — Updates an existing planner task.

Modifies task properties such as status, assignment, priority, or description.
Use this to transition tasks through their lifecycle (e.g., pending to in-progress
to completed).
