---
cbapicategory:
  - name: archiveThread
    link: /docs/reference/client-sdk/api-reference/todos/archiveThread
    description: "Archives a todo thread.

Marks the specified thread as archived, removing it from active view
while preserving all todos within it. Archived threads can still be
accessed but are typically hidden from default views."
  - name: bulkCreate
    link: /docs/reference/client-sdk/api-reference/todos/bulkCreate
    description: "Bulk-creates multiple todos at once.

Creates multiple todo items in a single API call, which is more efficient
than creating them individually. Use this for batch operations, importing
tasks, or initializing a thread with multiple items."
  - name: create
    link: /docs/reference/client-sdk/api-reference/todos/create
    description: "Creates a new todo.

Initializes a new todo item with the provided data. The todo can be
assigned to a thread, given a priority, and include any other relevant
task information."
  - name: createThread
    link: /docs/reference/client-sdk/api-reference/todos/createThread
    description: "Creates a new todo thread.

Initializes a new thread for organizing related todos. Threads
provide structure and context for groups of tasks, making them
easier to manage and track together."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/todos/delete
    description: "Deletes a todo by ID.

Permanently removes the specified todo from the system. This operation
cannot be undone. Use with caution and consider alternatives like
archiving if the todo should be preserved for historical purposes."
  - name: deleteAllCompleted
    link: /docs/reference/client-sdk/api-reference/todos/deleteAllCompleted
    description: "Deletes all completed todos, optionally filtered by thread.

Removes all todos with a completed status. When a threadId is provided,
only completed todos within that specific thread are deleted. This is
useful for cleanup operations to maintain a tidy task list."
  - name: exportTodos
    link: /docs/reference/client-sdk/api-reference/todos/exportTodos
    description: "Exports todos, optionally filtered by thread.

Returns todo data in a format suitable for external systems or backup.
The export can be scoped to a specific thread or include all todos
in the system. The exact format depends on server configuration."
  - name: get
    link: /docs/reference/client-sdk/api-reference/todos/get
    description: "Retrieves a specific todo by ID.

Returns detailed information about a single todo item including
its current status, description, assignee, and all other fields.
Use this to get the full details of a particular task."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/todos/getAll
    description: "Retrieves all todos, optionally filtered by thread.

Returns all todo items in the system. When a threadId is provided,
only todos belonging to that specific thread are returned. This
is useful for displaying task lists scoped to a particular context."
  - name: getStats
    link: /docs/reference/client-sdk/api-reference/todos/getStats
    description: "Retrieves todo statistics, optionally filtered by thread.

Returns aggregated statistics about todos including counts by status,
priority distribution, and completion rates. When a threadId is provided,
statistics are scoped to that specific thread only."
  - name: getThreads
    link: /docs/reference/client-sdk/api-reference/todos/getThreads
    description: "Retrieves all todo threads.

Returns all thread objects that organize todos into logical groups.
Threads can represent projects, features, or any other categorization
scheme. Use this to get an overview of all todo collections."
  - name: importTodos
    link: /docs/reference/client-sdk/api-reference/todos/importTodos
    description: "Imports todos from an external source.

Imports todo items from an external system or file format. This enables
migrating tasks from other todo management tools or bulk loading
tasks from predefined lists."
  - name: unarchiveThread
    link: /docs/reference/client-sdk/api-reference/todos/unarchiveThread
    description: "Unarchives a todo thread.

Removes the archived status from the specified thread, making it
visible in active views again. This restores the thread and all its
todos to normal operational status."
  - name: update
    link: /docs/reference/client-sdk/api-reference/todos/update
    description: "Updates an existing todo.

Modifies the specified todo with the provided field values. Only the
fields included in the request will be updated; all other fields remain
unchanged. Use this to change status, reassign tasks, or update details."
---
# Todos API

Todos API

<CBAPICategory />

## Methods

- [`archiveThread()`](./archiveThread) — Archives a todo thread.

Marks the specified thread as archived, removing it from active view
while preserving all todos within it. Archived threads can still be
accessed but are typically hidden from default views.
- [`bulkCreate()`](./bulkCreate) — Bulk-creates multiple todos at once.

Creates multiple todo items in a single API call, which is more efficient
than creating them individually. Use this for batch operations, importing
tasks, or initializing a thread with multiple items.
- [`create()`](./create) — Creates a new todo.

Initializes a new todo item with the provided data. The todo can be
assigned to a thread, given a priority, and include any other relevant
task information.
- [`createThread()`](./createThread) — Creates a new todo thread.

Initializes a new thread for organizing related todos. Threads
provide structure and context for groups of tasks, making them
easier to manage and track together.
- [`delete()`](./delete) — Deletes a todo by ID.

Permanently removes the specified todo from the system. This operation
cannot be undone. Use with caution and consider alternatives like
archiving if the todo should be preserved for historical purposes.
- [`deleteAllCompleted()`](./deleteAllCompleted) — Deletes all completed todos, optionally filtered by thread.

Removes all todos with a completed status. When a threadId is provided,
only completed todos within that specific thread are deleted. This is
useful for cleanup operations to maintain a tidy task list.
- [`exportTodos()`](./exportTodos) — Exports todos, optionally filtered by thread.

Returns todo data in a format suitable for external systems or backup.
The export can be scoped to a specific thread or include all todos
in the system. The exact format depends on server configuration.
- [`get()`](./get) — Retrieves a specific todo by ID.

Returns detailed information about a single todo item including
its current status, description, assignee, and all other fields.
Use this to get the full details of a particular task.
- [`getAll()`](./getAll) — Retrieves all todos, optionally filtered by thread.

Returns all todo items in the system. When a threadId is provided,
only todos belonging to that specific thread are returned. This
is useful for displaying task lists scoped to a particular context.
- [`getStats()`](./getStats) — Retrieves todo statistics, optionally filtered by thread.

Returns aggregated statistics about todos including counts by status,
priority distribution, and completion rates. When a threadId is provided,
statistics are scoped to that specific thread only.
- [`getThreads()`](./getThreads) — Retrieves all todo threads.

Returns all thread objects that organize todos into logical groups.
Threads can represent projects, features, or any other categorization
scheme. Use this to get an overview of all todo collections.
- [`importTodos()`](./importTodos) — Imports todos from an external source.

Imports todo items from an external system or file format. This enables
migrating tasks from other todo management tools or bulk loading
tasks from predefined lists.
- [`unarchiveThread()`](./unarchiveThread) — Unarchives a todo thread.

Removes the archived status from the specified thread, making it
visible in active views again. This restores the thread and all its
todos to normal operational status.
- [`update()`](./update) — Updates an existing todo.

Modifies the specified todo with the provided field values. Only the
fields included in the request will be updated; all other fields remain
unchanged. Use this to change status, reassign tasks, or update details.
