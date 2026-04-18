---
cbapicategory:
  - name: addChild
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/addChild
    description: "Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task."
  - name: addMessage
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/addMessage
    description: "Adds a message to a task's message thread.

Appends a new message to the task's communication thread. Messages
can be used for notes, comments, status updates, or other
communication related to the task. Returns the created message."
  - name: create
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/create
    description: "Creates a new task in the system.

Creates a new task with the provided configuration. The task can be
a standalone unit of work or can later have child tasks added to create
a task hierarchy. Returns the created task with its generated ID."
  - name: delete
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/delete
    description: "Permanently deletes a task from the system.

Removes the specified task and all its associated data. If the task
has child tasks, they may be affected depending on system configuration.
This operation cannot be undone."
  - name: deleteCompletedTasks
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/deleteCompletedTasks
    description: "Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone."
  - name: deleteProjectCompletedTasks
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/deleteProjectCompletedTasks
    description: "Deletes all completed tasks for a specific project.

Removes all tasks with 'completed' status that belong to the specified
project. Use this for cleanup operations to maintain a lean task
history. This operation cannot be undone."
  - name: get
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/get
    description: "Retrieves a specific task by its unique identifier.

Returns the complete task object including all properties, metadata,
and relationships. Use this to get full task details after a search or
when you need the complete task representation."
  - name: getChildren
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getChildren
    description: "Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy."
  - name: getForCurrentProject
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getForCurrentProject
    description: "Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project."
  - name: getForProject
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getForProject
    description: "Retrieves all tasks for a specific project path.

Returns tasks that belong to the project identified by its filesystem
path. This allows accessing tasks from any project regardless of the
current working directory context."
  - name: getHierarchy
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getHierarchy
    description: "Retrieves the complete hierarchy for a task.

Returns a hierarchical tree representation starting from the specified
task, including all descendants and their relationships. This provides
a complete view of the task's entire subtree for visualization or
comprehensive analysis."
  - name: getProjectStatistics
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getProjectStatistics
    description: "Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards."
  - name: getStatistics
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/getStatistics
    description: "Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform."
  - name: healthCheck
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/healthCheck
    description: "Performs a health check on the task service.

Verifies that the task management service is operational and responding.
Use this to monitor service availability or for health monitoring in
production environments."
  - name: markCompleted
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/markCompleted
    description: "Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object."
  - name: markFailed
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/markFailed
    description: "Marks a task as failed.

Updates the task's status to indicate that the task could not be
completed successfully. This is typically called when errors occur or
when task objectives cannot be achieved. Returns the updated task object."
  - name: markInProgress
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/markInProgress
    description: "Marks a task as in-progress.

Updates the task's status to indicate that work has begun on it.
This is typically called when a task is being actively worked on.
Returns the updated task object."
  - name: search
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/search
    description: "Searches for tasks using optional query parameters.

Returns tasks that match the specified search criteria. Use this method
to find tasks by various attributes including status, priority, date
ranges, or custom filters. Returns an empty array if no tasks match."
  - name: update
    link: /docs/reference/plugin-sdk/api-reference/tasksApi/update
    description: "Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object."
---
# TasksApi API

The `tasksApi` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`addChild()`](./addChild) — Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task.
- [`addMessage()`](./addMessage) — Adds a message to a task's message thread.

Appends a new message to the task's communication thread. Messages
can be used for notes, comments, status updates, or other
communication related to the task. Returns the created message.
- [`create()`](./create) — Creates a new task in the system.

Creates a new task with the provided configuration. The task can be
a standalone unit of work or can later have child tasks added to create
a task hierarchy. Returns the created task with its generated ID.
- [`delete()`](./delete) — Permanently deletes a task from the system.

Removes the specified task and all its associated data. If the task
has child tasks, they may be affected depending on system configuration.
This operation cannot be undone.
- [`deleteCompletedTasks()`](./deleteCompletedTasks) — Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone.
- [`deleteProjectCompletedTasks()`](./deleteProjectCompletedTasks) — Deletes all completed tasks for a specific project.

Removes all tasks with 'completed' status that belong to the specified
project. Use this for cleanup operations to maintain a lean task
history. This operation cannot be undone.
- [`get()`](./get) — Retrieves a specific task by its unique identifier.

Returns the complete task object including all properties, metadata,
and relationships. Use this to get full task details after a search or
when you need the complete task representation.
- [`getChildren()`](./getChildren) — Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy.
- [`getForCurrentProject()`](./getForCurrentProject) — Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project.
- [`getForProject()`](./getForProject) — Retrieves all tasks for a specific project path.

Returns tasks that belong to the project identified by its filesystem
path. This allows accessing tasks from any project regardless of the
current working directory context.
- [`getHierarchy()`](./getHierarchy) — Retrieves the complete hierarchy for a task.

Returns a hierarchical tree representation starting from the specified
task, including all descendants and their relationships. This provides
a complete view of the task's entire subtree for visualization or
comprehensive analysis.
- [`getProjectStatistics()`](./getProjectStatistics) — Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards.
- [`getStatistics()`](./getStatistics) — Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform.
- [`healthCheck()`](./healthCheck) — Performs a health check on the task service.

Verifies that the task management service is operational and responding.
Use this to monitor service availability or for health monitoring in
production environments.
- [`markCompleted()`](./markCompleted) — Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object.
- [`markFailed()`](./markFailed) — Marks a task as failed.

Updates the task's status to indicate that the task could not be
completed successfully. This is typically called when errors occur or
when task objectives cannot be achieved. Returns the updated task object.
- [`markInProgress()`](./markInProgress) — Marks a task as in-progress.

Updates the task's status to indicate that work has begun on it.
This is typically called when a task is being actively worked on.
Returns the updated task object.
- [`search()`](./search) — Searches for tasks using optional query parameters.

Returns tasks that match the specified search criteria. Use this method
to find tasks by various attributes including status, priority, date
ranges, or custom filters. Returns an empty array if no tasks match.
- [`update()`](./update) — Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object.
