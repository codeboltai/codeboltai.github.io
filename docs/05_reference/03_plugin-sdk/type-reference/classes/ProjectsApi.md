---
title: ProjectsApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: ProjectsApi

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:30

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

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:31

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

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `AssignThreadToGroupRequest` |

#### Returns

`Promise`\<`void`\>

***

### checkEnvironment()

```ts
checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:89

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CheckEnvironmentRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### checkProjectName()

```ts
checkProjectName(data: CheckProjectNameRequest): Promise<{
  available: boolean;
}>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:93

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CheckProjectNameRequest` |

#### Returns

`Promise`\<\{
  `available`: `boolean`;
\}\>

***

### create()

```ts
create(data: Record<string, unknown>): Promise<Project>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:73

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`Project`\>

***

### createInDefault()

```ts
createInDefault(data: Record<string, unknown>): Promise<Project>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`Project`\>

***

### createTaskGroup()

```ts
createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:117

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateTaskGroupRequest` |

#### Returns

`Promise`\<`TaskGroup`\>

***

### deleteTaskGroup()

```ts
deleteTaskGroup(groupId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getAllWithUniqueId()

```ts
getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:53

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GetAllProjectsRequest` |

#### Returns

`Promise`\<`Project`[]\>

***

### getByWorkspace()

```ts
getByWorkspace(workspaceId: string): Promise<Project[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:145

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |

#### Returns

`Promise`\<`Project`[]\>

***

### getChatHistory()

```ts
getChatHistory(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:37

#### Returns

`Promise`\<`unknown`[]\>

***

### getConfigs()

```ts
getConfigs(): Promise<ProjectConfig>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:57

#### Returns

`Promise`\<`ProjectConfig`\>

***

### getDebugHistory()

```ts
getDebugHistory(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:45

#### Returns

`Promise`\<`unknown`[]\>

***

### getDebugIndex()

```ts
getDebugIndex(): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:49

#### Returns

`Promise`\<`unknown`\>

***

### getRoot()

```ts
getRoot(): Promise<Project>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:33

#### Returns

`Promise`\<`Project`\>

***

### getTaskGroups()

```ts
getTaskGroups(): Promise<TaskGroup[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:113

#### Returns

`Promise`\<`TaskGroup`[]\>

***

### getThreadGroup()

```ts
getThreadGroup(threadId: string): Promise<TaskGroup | null>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:137

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`TaskGroup` \| `null`\>

***

### getThreadGroupMappings()

```ts
getThreadGroupMappings(): Promise<ThreadGroupMapping[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:133

#### Returns

`Promise`\<`ThreadGroupMapping`[]\>

***

### getThreads()

```ts
getThreads(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:41

#### Returns

`Promise`\<`unknown`[]\>

***

### getThreadsForGroup()

```ts
getThreadsForGroup(groupId: string): Promise<string[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` |

#### Returns

`Promise`\<`string`[]\>

***

### getTreeBatch()

```ts
getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:109

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BatchTreeItemsRequest` |

#### Returns

`Promise`\<`TreeItem`[]\>

***

### getTreeChildren()

```ts
getTreeChildren(parentId: string): Promise<TreeItem[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parentId` | `string` |

#### Returns

`Promise`\<`TreeItem`[]\>

***

### getTreeItem()

```ts
getTreeItem(itemId: string): Promise<TreeItem>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:101

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemId` | `string` |

#### Returns

`Promise`\<`TreeItem`\>

***

### resetProject()

```ts
resetProject(data: ResetProjectRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:97

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ResetProjectRequest` |

#### Returns

`Promise`\<`void`\>

***

### runCommand()

```ts
runCommand(data: RunCommandRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `RunCommandRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### setActive()

```ts
setActive(data: SetActiveProjectRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:81

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `SetActiveProjectRequest` |

#### Returns

`Promise`\<`void`\>

***

### updateCodeboltYaml()

```ts
updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `UpdateCodeboltYamlRequest` |

#### Returns

`Promise`\<`void`\>

***

### updateConfig()

```ts
updateConfig(data: UpdateProjectConfigRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `UpdateProjectConfigRequest` |

#### Returns

`Promise`\<`void`\>

***

### updateProjectConfigs()

```ts
updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `UpdateProjectConfigRequest` |

#### Returns

`Promise`\<`void`\>

***

### updateTaskGroup()

```ts
updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/projects.api.ts:121

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` |
| `data` | `UpdateTaskGroupRequest` |

#### Returns

`Promise`\<`TaskGroup`\>
