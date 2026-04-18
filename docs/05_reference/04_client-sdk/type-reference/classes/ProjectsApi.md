---
title: ProjectsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ProjectsApi

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:30

Provides API methods for managing projects, their configuration, file trees, and task groups.

This is a comprehensive API covering project lifecycle operations (create, configure, reset),
project history (chat, debug, threads), file tree navigation, and task group management for
organizing conversation threads. It serves as the primary interface for workspace and project
management within CodeBolt.

## Constructors

### Constructor

```ts
new ProjectsApi(http: HttpClient): ProjectsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ProjectsApi`

## Methods

### assignThreadToGroup()

```ts
assignThreadToGroup(data: AssignThreadToGroupRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:422

Assigns a conversation thread to a task group.

Links a thread to a task group for organizational purposes. A thread can belong
to at most one group at a time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AssignThreadToGroupRequest` | The assignment request |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the assignment has been saved

#### Example

```typescript
await client.projects.assignThreadToGroup({
  threadId: 'thread-123',
  groupId: 'group-bugs',
});
```

***

### checkEnvironment()

```ts
checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:256

Checks the availability and configuration of an environment variable or dependency.

Validates that required environment variables, tools, or runtime dependencies are
properly configured for the project.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckEnvironmentRequest` | The environment check request |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the check result

***

### checkProjectName()

```ts
checkProjectName(data: CheckProjectNameRequest): Promise<{
  available: boolean;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:278

Checks whether a project name is available for use.

Validates that the proposed project name does not conflict with existing projects
in the workspace. Use this before creating a new project.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckProjectNameRequest` | The name check request |

#### Returns

`Promise`\<\{
  `available`: `boolean`;
\}\>

A promise that resolves to an object indicating availability

#### Example

```typescript
const { available } = await client.projects.checkProjectName({ name: 'my-project' });
if (available) {
  await client.projects.create({ name: 'my-project' });
}
```

***

### create()

```ts
create(data: Record<string, unknown>): Promise<Project>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:191

Creates a new project in a specified workspace.

Initializes a new project with the given configuration. The project will be created
in the specified workspace directory with its own configuration and history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> | The project creation payload including name and workspace details |

#### Returns

`Promise`\<`Project`\>

A promise that resolves to the newly created project

#### Example

```typescript
const project = await client.projects.create({
  name: 'my-new-project',
  workspaceId: 'ws-1',
});
```

***

### createInDefault()

```ts
createInDefault(data: Record<string, unknown>): Promise<Project>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:204

Creates a new project in the default workspace.

Convenience method that creates a project without needing to specify a workspace.
The project is placed in the system's default workspace directory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> | The project creation payload |

#### Returns

`Promise`\<`Project`\>

A promise that resolves to the newly created project

***

### createTaskGroup()

```ts
createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:373

Creates a new task group for organizing conversation threads.

Defines a new group that threads can be assigned to for organizational purposes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTaskGroupRequest` | The task group creation payload |

#### Returns

`Promise`\<`TaskGroup`\>

A promise that resolves to the newly created task group

#### Example

```typescript
const group = await client.projects.createTaskGroup({ name: 'Bug Fixes' });
```

***

### deleteTaskGroup()

```ts
deleteTaskGroup(groupId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:399

Permanently deletes a task group.

Removes the task group. Threads previously assigned to this group will become
unassigned but are not deleted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `groupId` | `string` | The unique identifier of the task group to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the task group has been deleted

***

### getAllWithUniqueId()

```ts
getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:113

Retrieves all projects with their unique identifiers.

Returns the complete list of projects matching the request criteria, each with a
guaranteed unique ID for cross-referencing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GetAllProjectsRequest` | The request specifying which projects to retrieve |

#### Returns

`Promise`\<`Project`[]\>

A promise that resolves to an array of projects with unique IDs

#### Example

```typescript
const projects = await client.projects.getAllWithUniqueId({ workspaceId: 'ws-1' });
```

***

### getByWorkspace()

```ts
getByWorkspace(workspaceId: string): Promise<Project[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:477

Retrieves all projects belonging to a specific workspace.

Returns the list of projects within the specified workspace, useful for workspace
navigation and project switching.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The unique identifier of the workspace |

#### Returns

`Promise`\<`Project`[]\>

A promise that resolves to an array of projects in the workspace

#### Example

```typescript
const projects = await client.projects.getByWorkspace('ws-default');
```

***

### getChatHistory()

```ts
getChatHistory(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:59

Retrieves the chat history for the current project.

Returns an array of past chat sessions and their messages, providing a record of
all conversations that have occurred within the project context.

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of chat history entries

***

### getConfigs()

```ts
getConfigs(): Promise<ProjectConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:131

Retrieves the configuration settings for the current project.

Returns project-level settings including build commands, environment variables,
agent preferences, and other configurable options.

#### Returns

`Promise`\<`ProjectConfig`\>

A promise that resolves to the project configuration

#### Example

```typescript
const config = await client.projects.getConfigs();
console.log(`Default agent: ${config.defaultAgent}`);
```

***

### getDebugHistory()

```ts
getDebugHistory(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:83

Retrieves the debug session history for the current project.

Returns records of past debugging sessions including breakpoints hit, variable
states, and step-through sequences.

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of debug history entries

***

### getDebugIndex()

```ts
getDebugIndex(): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:95

Retrieves the debug index for the current project.

Returns the indexed debug information that enables fast lookup of debug sessions,
breakpoint locations, and diagnostic data.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the debug index data

***

### getRoot()

```ts
getRoot(): Promise<Project>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:47

Retrieves the root project information for the current workspace.

Returns the top-level project metadata including name, path, status, and configuration
references. This is typically the entry point for inspecting the active project.

#### Returns

`Promise`\<`Project`\>

A promise that resolves to the root project details

#### Example

```typescript
const project = await client.projects.getRoot();
console.log(`Project: ${project.name} at ${project.path}`);
```

***

### getTaskGroups()

```ts
getTaskGroups(): Promise<TaskGroup[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:355

Retrieves all task groups defined for the current project.

Task groups organize conversation threads into logical categories for better
workflow management and navigation.

#### Returns

`Promise`\<`TaskGroup`[]\>

A promise that resolves to an array of task groups

#### Example

```typescript
const groups = await client.projects.getTaskGroups();
groups.forEach(g => console.log(`${g.name}: ${g.threadCount} threads`));
```

***

### getThreadGroup()

```ts
getThreadGroup(threadId: string): Promise<TaskGroup | null>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:447

Retrieves the task group that a specific thread is assigned to.

Returns the group assignment for a thread, or null if the thread is not assigned
to any group.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The identifier of the thread to look up |

#### Returns

`Promise`\<`TaskGroup` \| `null`\>

A promise that resolves to the assigned task group, or null if unassigned

***

### getThreadGroupMappings()

```ts
getThreadGroupMappings(): Promise<ThreadGroupMapping[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:434

Retrieves all thread-to-group assignment mappings.

Returns the complete mapping of which threads are assigned to which task groups,
useful for building navigation or overview UIs.

#### Returns

`Promise`\<`ThreadGroupMapping`[]\>

A promise that resolves to an array of thread-group mapping entries

***

### getThreads()

```ts
getThreads(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:71

Retrieves all conversation threads associated with the current project.

Returns the list of active and archived threads, which represent individual
conversation streams within the project.

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of project threads

***

### getThreadsForGroup()

```ts
getThreadsForGroup(groupId: string): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:459

Retrieves all thread identifiers assigned to a specific task group.

Returns the list of thread IDs that belong to the specified group.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `groupId` | `string` | The unique identifier of the task group |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of thread identifier strings

***

### getTreeBatch()

```ts
getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:337

Retrieves multiple tree items in a single batch request.

Fetches details for several tree items at once, reducing round trips compared to
individual [getTreeItem](#gettreeitem) calls. Useful when loading multiple files or directories.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BatchTreeItemsRequest` | The batch request containing the item IDs to fetch |

#### Returns

`Promise`\<`TreeItem`[]\>

A promise that resolves to an array of tree items

***

### getTreeChildren()

```ts
getTreeChildren(parentId: string): Promise<TreeItem[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:323

Retrieves the child items of a specific node in the project file tree.

Returns the immediate children (files and subdirectories) of the specified parent
directory in the project tree. Use this for lazy-loading tree navigation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parentId` | `string` | The unique identifier of the parent tree node |

#### Returns

`Promise`\<`TreeItem`[]\>

A promise that resolves to an array of child tree items

#### Example

```typescript
const children = await client.projects.getTreeChildren('root');
children.forEach(item => console.log(`${item.type}: ${item.name}`));
```

***

### getTreeItem()

```ts
getTreeItem(itemId: string): Promise<TreeItem>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:304

Retrieves a specific item from the project's file tree by its identifier.

Returns metadata about a file or directory in the project tree, including its name,
path, type, and any associated metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `itemId` | `string` | The unique identifier of the tree item to retrieve |

#### Returns

`Promise`\<`TreeItem`\>

A promise that resolves to the tree item details

***

### resetProject()

```ts
resetProject(data: ResetProjectRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:291

Resets a project to its initial state.

Clears the project's chat history, debug sessions, and configuration changes,
restoring it to a clean state. This is a destructive operation that cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ResetProjectRequest` | The reset request identifying the project and reset scope |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the project has been reset

***

### runCommand()

```ts
runCommand(data: RunCommandRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:242

Executes a shell command within the project's working directory.

Runs a command (e.g., build, test, lint) in the context of the project, with access
to the project's environment variables and path configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `RunCommandRequest` | The command execution request |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the command execution result

#### Example

```typescript
const result = await client.projects.runCommand({ command: 'npm test' });
```

***

### setActive()

```ts
setActive(data: SetActiveProjectRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:223

Sets a project as the currently active project in the workspace.

Switches the active project context, which affects which project's files, configuration,
and history are used for subsequent operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetActiveProjectRequest` | The request identifying which project to activate |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the active project has been switched

#### Example

```typescript
await client.projects.setActive({ projectId: 'proj-123' });
```

***

### updateCodeboltYaml()

```ts
updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:157

Updates the codebolt.yaml configuration file for the project.

Modifies the project's codebolt.yaml, which defines agent configurations, tool
permissions, and workflow settings specific to the CodeBolt platform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateCodeboltYamlRequest` | The YAML configuration updates to apply |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the YAML has been updated

***

### updateConfig()

```ts
updateConfig(data: UpdateProjectConfigRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:170

Updates the project configuration via an alternative endpoint.

Applies configuration changes to the project settings. Functions similarly to
[updateProjectConfigs](#updateprojectconfigs) but uses a different server route.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateProjectConfigRequest` | The configuration fields to update |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the configuration has been saved

***

### updateProjectConfigs()

```ts
updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:144

Updates the project configuration settings.

Applies changes to the project-level configuration. This is the primary way to modify
project settings like build commands, environment variables, and agent defaults.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateProjectConfigRequest` | The configuration fields to update |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the configuration has been saved

***

### updateTaskGroup()

```ts
updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/projects.api.ts:386

Updates an existing task group's properties.

Modifies the task group's name, description, or other metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `groupId` | `string` | The unique identifier of the task group to update |
| `data` | `UpdateTaskGroupRequest` | The fields to update on the task group |

#### Returns

`Promise`\<`TaskGroup`\>

A promise that resolves to the updated task group
