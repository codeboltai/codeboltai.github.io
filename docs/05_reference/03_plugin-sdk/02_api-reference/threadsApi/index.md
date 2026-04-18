---
cbapicategory:
  - name: advancedSearch
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/advancedSearch
    description: "Performs an advanced search for threads based on multiple criteria.

Allows complex queries with filtering, sorting, and pagination to find
threads matching specific conditions. Use this for flexible thread discovery
and management operations."
  - name: autoUpdateName
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/autoUpdateName
    description: "Automatically updates a thread's name based on its content.

Analyzes the thread's execution history, messages, and context to generate
an appropriate name that reflects its purpose and activity. This is useful
for maintaining descriptive thread labels without manual intervention."
  - name: bulkDelete
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/bulkDelete
    description: "Deletes multiple threads in a single operation.

Removes the specified threads from the system in a bulk operation.
This is more efficient than deleting threads individually and ensures
atomic deletion of multiple threads."
  - name: bulkUpdate
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/bulkUpdate
    description: "Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads."
  - name: cancel
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/cancel
    description: "Cancels the execution of a thread.

Terminates the thread's operations and places it in a cancelled state.
Unlike pausing, this action cannot be reversed and the thread will not
continue execution. Use this to stop threads that are no longer needed."
  - name: complete
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/complete
    description: "Marks a thread as completed.

Sets the thread's status to completed, indicating that its execution
has finished successfully. This is typically done automatically by
the thread, but can be called manually when needed."
  - name: create
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/create
    description: "Creates a new thread with the specified configuration.

Initializes a new thread with the provided settings and parameters.
The thread will be created in an initial state and can be executed
when ready. Use this to set up new execution units."
  - name: delete
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/delete
    description: "Deletes a thread from the system.

Permanently removes the specified thread and all its associated data.
This action cannot be undone, so use with caution. Deleting a thread
will also remove its relationships with other threads."
  - name: execute
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/execute
    description: "Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations."
  - name: getById
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getById
    description: "Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID."
  - name: getChildren
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getChildren
    description: "Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads."
  - name: getDependencies
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getDependencies
    description: "Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships."
  - name: getGraph
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getGraph
    description: "Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies."
  - name: getStatistics
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getStatistics
    description: "Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance."
  - name: getThreadInfo
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getThreadInfo
    description: "Retrieves detailed information about a specific thread.

Returns comprehensive metadata and status information for the specified
thread, including its configuration, current state, and related attributes."
  - name: getTimeline
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getTimeline
    description: "Retrieves the timeline of events for a specific thread.

Returns a chronological list of all events associated with the thread,
including status changes, executions, and other significant occurrences.
Use this to track thread activity and audit execution history."
  - name: getTree
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/getTree
    description: "Retrieves the hierarchical tree structure for a thread.

Returns the complete tree representation starting from the specified thread,
including all descendant threads and their relationships. This is useful for
visualizing thread hierarchies and understanding nested thread structures."
  - name: healthCheck
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/healthCheck
    description: "Performs a health check on the thread service.

Verifies that the thread service is operational and responding to requests.
Use this for service monitoring or to check availability before performing
other thread operations."
  - name: list
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/list
    description: "Lists all threads with optional filtering.

Returns threads matching the provided query parameters, allowing you to
filter and paginate through the thread collection. Use this to browse
threads or find specific sets of threads based on criteria."
  - name: pause
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/pause
    description: "Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread."
  - name: resume
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/resume
    description: "Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing."
  - name: searchThread
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/searchThread
    description: "Searches for a specific thread by its ID.

Performs a direct lookup to find a thread using its unique identifier.
This is the most efficient way to retrieve a thread when you know its ID."
  - name: update
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/update
    description: "Updates an existing thread with new information.

Modifies the specified thread's configuration, metadata, or other
attributes. Only the fields provided in the request will be updated.
Use this to make changes to existing threads."
  - name: updateProgress
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/updateProgress
    description: "Updates the progress information for a thread.

Modifies the thread's progress metrics, such as completion percentage,
current step, or other progress indicators. This is useful for tracking
execution progress and providing feedback to users."
  - name: updateStatus
    link: /docs/reference/plugin-sdk/api-reference/threadsApi/updateStatus
    description: "Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution."
---
# ThreadsApi API

The `threadsApi` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`advancedSearch()`](./advancedSearch) — Performs an advanced search for threads based on multiple criteria.

Allows complex queries with filtering, sorting, and pagination to find
threads matching specific conditions. Use this for flexible thread discovery
and management operations.
- [`autoUpdateName()`](./autoUpdateName) — Automatically updates a thread's name based on its content.

Analyzes the thread's execution history, messages, and context to generate
an appropriate name that reflects its purpose and activity. This is useful
for maintaining descriptive thread labels without manual intervention.
- [`bulkDelete()`](./bulkDelete) — Deletes multiple threads in a single operation.

Removes the specified threads from the system in a bulk operation.
This is more efficient than deleting threads individually and ensures
atomic deletion of multiple threads.
- [`bulkUpdate()`](./bulkUpdate) — Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads.
- [`cancel()`](./cancel) — Cancels the execution of a thread.

Terminates the thread's operations and places it in a cancelled state.
Unlike pausing, this action cannot be reversed and the thread will not
continue execution. Use this to stop threads that are no longer needed.
- [`complete()`](./complete) — Marks a thread as completed.

Sets the thread's status to completed, indicating that its execution
has finished successfully. This is typically done automatically by
the thread, but can be called manually when needed.
- [`create()`](./create) — Creates a new thread with the specified configuration.

Initializes a new thread with the provided settings and parameters.
The thread will be created in an initial state and can be executed
when ready. Use this to set up new execution units.
- [`delete()`](./delete) — Deletes a thread from the system.

Permanently removes the specified thread and all its associated data.
This action cannot be undone, so use with caution. Deleting a thread
will also remove its relationships with other threads.
- [`execute()`](./execute) — Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations.
- [`getById()`](./getById) — Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID.
- [`getChildren()`](./getChildren) — Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads.
- [`getDependencies()`](./getDependencies) — Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships.
- [`getGraph()`](./getGraph) — Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies.
- [`getStatistics()`](./getStatistics) — Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance.
- [`getThreadInfo()`](./getThreadInfo) — Retrieves detailed information about a specific thread.

Returns comprehensive metadata and status information for the specified
thread, including its configuration, current state, and related attributes.
- [`getTimeline()`](./getTimeline) — Retrieves the timeline of events for a specific thread.

Returns a chronological list of all events associated with the thread,
including status changes, executions, and other significant occurrences.
Use this to track thread activity and audit execution history.
- [`getTree()`](./getTree) — Retrieves the hierarchical tree structure for a thread.

Returns the complete tree representation starting from the specified thread,
including all descendant threads and their relationships. This is useful for
visualizing thread hierarchies and understanding nested thread structures.
- [`healthCheck()`](./healthCheck) — Performs a health check on the thread service.

Verifies that the thread service is operational and responding to requests.
Use this for service monitoring or to check availability before performing
other thread operations.
- [`list()`](./list) — Lists all threads with optional filtering.

Returns threads matching the provided query parameters, allowing you to
filter and paginate through the thread collection. Use this to browse
threads or find specific sets of threads based on criteria.
- [`pause()`](./pause) — Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread.
- [`resume()`](./resume) — Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing.
- [`searchThread()`](./searchThread) — Searches for a specific thread by its ID.

Performs a direct lookup to find a thread using its unique identifier.
This is the most efficient way to retrieve a thread when you know its ID.
- [`update()`](./update) — Updates an existing thread with new information.

Modifies the specified thread's configuration, metadata, or other
attributes. Only the fields provided in the request will be updated.
Use this to make changes to existing threads.
- [`updateProgress()`](./updateProgress) — Updates the progress information for a thread.

Modifies the thread's progress metrics, such as completion percentage,
current step, or other progress indicators. This is useful for tracking
execution progress and providing feedback to users.
- [`updateStatus()`](./updateStatus) — Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution.
