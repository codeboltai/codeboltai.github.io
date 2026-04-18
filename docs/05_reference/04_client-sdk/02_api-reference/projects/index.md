---
cbapicategory:
  - name: assignThreadToGroup
    link: /docs/reference/client-sdk/api-reference/projects/assignThreadToGroup
    description: "Assigns a conversation thread to a task group.

Links a thread to a task group for organizational purposes. A thread can belong
to at most one group at a time."
  - name: checkEnvironment
    link: /docs/reference/client-sdk/api-reference/projects/checkEnvironment
    description: "Checks the availability and configuration of an environment variable or dependency.

Validates that required environment variables, tools, or runtime dependencies are
properly configured for the project."
  - name: checkProjectName
    link: /docs/reference/client-sdk/api-reference/projects/checkProjectName
    description: "Checks whether a project name is available for use.

Validates that the proposed project name does not conflict with existing projects
in the workspace. Use this before creating a new project."
  - name: create
    link: /docs/reference/client-sdk/api-reference/projects/create
    description: "Creates a new project in a specified workspace.

Initializes a new project with the given configuration. The project will be created
in the specified workspace directory with its own configuration and history."
  - name: createInDefault
    link: /docs/reference/client-sdk/api-reference/projects/createInDefault
    description: "Creates a new project in the default workspace.

Convenience method that creates a project without needing to specify a workspace.
The project is placed in the system's default workspace directory."
  - name: createTaskGroup
    link: /docs/reference/client-sdk/api-reference/projects/createTaskGroup
    description: "Creates a new task group for organizing conversation threads.

Defines a new group that threads can be assigned to for organizational purposes."
  - name: deleteTaskGroup
    link: /docs/reference/client-sdk/api-reference/projects/deleteTaskGroup
    description: "Permanently deletes a task group.

Removes the task group. Threads previously assigned to this group will become
unassigned but are not deleted."
  - name: getAllWithUniqueId
    link: /docs/reference/client-sdk/api-reference/projects/getAllWithUniqueId
    description: "Retrieves all projects with their unique identifiers.

Returns the complete list of projects matching the request criteria, each with a
guaranteed unique ID for cross-referencing."
  - name: getByWorkspace
    link: /docs/reference/client-sdk/api-reference/projects/getByWorkspace
    description: "Retrieves all projects belonging to a specific workspace.

Returns the list of projects within the specified workspace, useful for workspace
navigation and project switching."
  - name: getChatHistory
    link: /docs/reference/client-sdk/api-reference/projects/getChatHistory
    description: "Retrieves the chat history for the current project.

Returns an array of past chat sessions and their messages, providing a record of
all conversations that have occurred within the project context."
  - name: getConfigs
    link: /docs/reference/client-sdk/api-reference/projects/getConfigs
    description: "Retrieves the configuration settings for the current project.

Returns project-level settings including build commands, environment variables,
agent preferences, and other configurable options."
  - name: getDebugHistory
    link: /docs/reference/client-sdk/api-reference/projects/getDebugHistory
    description: "Retrieves the debug session history for the current project.

Returns records of past debugging sessions including breakpoints hit, variable
states, and step-through sequences."
  - name: getDebugIndex
    link: /docs/reference/client-sdk/api-reference/projects/getDebugIndex
    description: "Retrieves the debug index for the current project.

Returns the indexed debug information that enables fast lookup of debug sessions,
breakpoint locations, and diagnostic data."
  - name: getRoot
    link: /docs/reference/client-sdk/api-reference/projects/getRoot
    description: "Retrieves the root project information for the current workspace.

Returns the top-level project metadata including name, path, status, and configuration
references. This is typically the entry point for inspecting the active project."
  - name: getTaskGroups
    link: /docs/reference/client-sdk/api-reference/projects/getTaskGroups
    description: "Retrieves all task groups defined for the current project.

Task groups organize conversation threads into logical categories for better
workflow management and navigation."
  - name: getThreadGroup
    link: /docs/reference/client-sdk/api-reference/projects/getThreadGroup
    description: "Retrieves the task group that a specific thread is assigned to.

Returns the group assignment for a thread, or null if the thread is not assigned
to any group."
  - name: getThreadGroupMappings
    link: /docs/reference/client-sdk/api-reference/projects/getThreadGroupMappings
    description: "Retrieves all thread-to-group assignment mappings.

Returns the complete mapping of which threads are assigned to which task groups,
useful for building navigation or overview UIs."
  - name: getThreads
    link: /docs/reference/client-sdk/api-reference/projects/getThreads
    description: "Retrieves all conversation threads associated with the current project.

Returns the list of active and archived threads, which represent individual
conversation streams within the project."
  - name: getThreadsForGroup
    link: /docs/reference/client-sdk/api-reference/projects/getThreadsForGroup
    description: "Retrieves all thread identifiers assigned to a specific task group.

Returns the list of thread IDs that belong to the specified group."
  - name: getTreeBatch
    link: /docs/reference/client-sdk/api-reference/projects/getTreeBatch
    description: "Retrieves multiple tree items in a single batch request.

Fetches details for several tree items at once, reducing round trips compared to
individual  calls. Useful when loading multiple files or directories."
  - name: getTreeChildren
    link: /docs/reference/client-sdk/api-reference/projects/getTreeChildren
    description: "Retrieves the child items of a specific node in the project file tree.

Returns the immediate children (files and subdirectories) of the specified parent
directory in the project tree. Use this for lazy-loading tree navigation."
  - name: getTreeItem
    link: /docs/reference/client-sdk/api-reference/projects/getTreeItem
    description: "Retrieves a specific item from the project's file tree by its identifier.

Returns metadata about a file or directory in the project tree, including its name,
path, type, and any associated metadata."
  - name: resetProject
    link: /docs/reference/client-sdk/api-reference/projects/resetProject
    description: "Resets a project to its initial state.

Clears the project's chat history, debug sessions, and configuration changes,
restoring it to a clean state. This is a destructive operation that cannot be undone."
  - name: runCommand
    link: /docs/reference/client-sdk/api-reference/projects/runCommand
    description: "Executes a shell command within the project's working directory.

Runs a command (e.g., build, test, lint) in the context of the project, with access
to the project's environment variables and path configuration."
  - name: setActive
    link: /docs/reference/client-sdk/api-reference/projects/setActive
    description: "Sets a project as the currently active project in the workspace.

Switches the active project context, which affects which project's files, configuration,
and history are used for subsequent operations."
  - name: updateCodeboltYaml
    link: /docs/reference/client-sdk/api-reference/projects/updateCodeboltYaml
    description: "Updates the codebolt.yaml configuration file for the project.

Modifies the project's codebolt.yaml, which defines agent configurations, tool
permissions, and workflow settings specific to the CodeBolt platform."
  - name: updateConfig
    link: /docs/reference/client-sdk/api-reference/projects/updateConfig
    description: "Updates the project configuration via an alternative endpoint.

Applies configuration changes to the project settings. Functions similarly to
 but uses a different server route."
  - name: updateProjectConfigs
    link: /docs/reference/client-sdk/api-reference/projects/updateProjectConfigs
    description: "Updates the project configuration settings.

Applies changes to the project-level configuration. This is the primary way to modify
project settings like build commands, environment variables, and agent defaults."
  - name: updateTaskGroup
    link: /docs/reference/client-sdk/api-reference/projects/updateTaskGroup
    description: "Updates an existing task group's properties.

Modifies the task group's name, description, or other metadata."
---
# Projects API

Projects API - project management

<CBAPICategory />

## Methods

- [`assignThreadToGroup()`](./assignThreadToGroup) — Assigns a conversation thread to a task group.

Links a thread to a task group for organizational purposes. A thread can belong
to at most one group at a time.
- [`checkEnvironment()`](./checkEnvironment) — Checks the availability and configuration of an environment variable or dependency.

Validates that required environment variables, tools, or runtime dependencies are
properly configured for the project.
- [`checkProjectName()`](./checkProjectName) — Checks whether a project name is available for use.

Validates that the proposed project name does not conflict with existing projects
in the workspace. Use this before creating a new project.
- [`create()`](./create) — Creates a new project in a specified workspace.

Initializes a new project with the given configuration. The project will be created
in the specified workspace directory with its own configuration and history.
- [`createInDefault()`](./createInDefault) — Creates a new project in the default workspace.

Convenience method that creates a project without needing to specify a workspace.
The project is placed in the system's default workspace directory.
- [`createTaskGroup()`](./createTaskGroup) — Creates a new task group for organizing conversation threads.

Defines a new group that threads can be assigned to for organizational purposes.
- [`deleteTaskGroup()`](./deleteTaskGroup) — Permanently deletes a task group.

Removes the task group. Threads previously assigned to this group will become
unassigned but are not deleted.
- [`getAllWithUniqueId()`](./getAllWithUniqueId) — Retrieves all projects with their unique identifiers.

Returns the complete list of projects matching the request criteria, each with a
guaranteed unique ID for cross-referencing.
- [`getByWorkspace()`](./getByWorkspace) — Retrieves all projects belonging to a specific workspace.

Returns the list of projects within the specified workspace, useful for workspace
navigation and project switching.
- [`getChatHistory()`](./getChatHistory) — Retrieves the chat history for the current project.

Returns an array of past chat sessions and their messages, providing a record of
all conversations that have occurred within the project context.
- [`getConfigs()`](./getConfigs) — Retrieves the configuration settings for the current project.

Returns project-level settings including build commands, environment variables,
agent preferences, and other configurable options.
- [`getDebugHistory()`](./getDebugHistory) — Retrieves the debug session history for the current project.

Returns records of past debugging sessions including breakpoints hit, variable
states, and step-through sequences.
- [`getDebugIndex()`](./getDebugIndex) — Retrieves the debug index for the current project.

Returns the indexed debug information that enables fast lookup of debug sessions,
breakpoint locations, and diagnostic data.
- [`getRoot()`](./getRoot) — Retrieves the root project information for the current workspace.

Returns the top-level project metadata including name, path, status, and configuration
references. This is typically the entry point for inspecting the active project.
- [`getTaskGroups()`](./getTaskGroups) — Retrieves all task groups defined for the current project.

Task groups organize conversation threads into logical categories for better
workflow management and navigation.
- [`getThreadGroup()`](./getThreadGroup) — Retrieves the task group that a specific thread is assigned to.

Returns the group assignment for a thread, or null if the thread is not assigned
to any group.
- [`getThreadGroupMappings()`](./getThreadGroupMappings) — Retrieves all thread-to-group assignment mappings.

Returns the complete mapping of which threads are assigned to which task groups,
useful for building navigation or overview UIs.
- [`getThreads()`](./getThreads) — Retrieves all conversation threads associated with the current project.

Returns the list of active and archived threads, which represent individual
conversation streams within the project.
- [`getThreadsForGroup()`](./getThreadsForGroup) — Retrieves all thread identifiers assigned to a specific task group.

Returns the list of thread IDs that belong to the specified group.
- [`getTreeBatch()`](./getTreeBatch) — Retrieves multiple tree items in a single batch request.

Fetches details for several tree items at once, reducing round trips compared to
individual  calls. Useful when loading multiple files or directories.
- [`getTreeChildren()`](./getTreeChildren) — Retrieves the child items of a specific node in the project file tree.

Returns the immediate children (files and subdirectories) of the specified parent
directory in the project tree. Use this for lazy-loading tree navigation.
- [`getTreeItem()`](./getTreeItem) — Retrieves a specific item from the project's file tree by its identifier.

Returns metadata about a file or directory in the project tree, including its name,
path, type, and any associated metadata.
- [`resetProject()`](./resetProject) — Resets a project to its initial state.

Clears the project's chat history, debug sessions, and configuration changes,
restoring it to a clean state. This is a destructive operation that cannot be undone.
- [`runCommand()`](./runCommand) — Executes a shell command within the project's working directory.

Runs a command (e.g., build, test, lint) in the context of the project, with access
to the project's environment variables and path configuration.
- [`setActive()`](./setActive) — Sets a project as the currently active project in the workspace.

Switches the active project context, which affects which project's files, configuration,
and history are used for subsequent operations.
- [`updateCodeboltYaml()`](./updateCodeboltYaml) — Updates the codebolt.yaml configuration file for the project.

Modifies the project's codebolt.yaml, which defines agent configurations, tool
permissions, and workflow settings specific to the CodeBolt platform.
- [`updateConfig()`](./updateConfig) — Updates the project configuration via an alternative endpoint.

Applies configuration changes to the project settings. Functions similarly to
 but uses a different server route.
- [`updateProjectConfigs()`](./updateProjectConfigs) — Updates the project configuration settings.

Applies changes to the project-level configuration. This is the primary way to modify
project settings like build commands, environment variables, and agent defaults.
- [`updateTaskGroup()`](./updateTaskGroup) — Updates an existing task group's properties.

Modifies the task group's name, description, or other metadata.
