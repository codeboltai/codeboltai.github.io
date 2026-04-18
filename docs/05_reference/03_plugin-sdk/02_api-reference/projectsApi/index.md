---
title: ProjectsApi API
---

# ProjectsApi API

The `projectsApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`assignThreadToGroup`](./assignThreadToGroup) |  |
| [`checkEnvironment`](./checkEnvironment) |  |
| [`checkProjectName`](./checkProjectName) |  |
| [`create`](./create) |  |
| [`createInDefault`](./createInDefault) |  |
| [`createTaskGroup`](./createTaskGroup) |  |
| [`deleteTaskGroup`](./deleteTaskGroup) |  |
| [`getAllWithUniqueId`](./getAllWithUniqueId) |  |
| [`getByWorkspace`](./getByWorkspace) |  |
| [`getChatHistory`](./getChatHistory) |  |
| [`getConfigs`](./getConfigs) |  |
| [`getDebugHistory`](./getDebugHistory) |  |
| [`getDebugIndex`](./getDebugIndex) |  |
| [`getRoot`](./getRoot) |  |
| [`getTaskGroups`](./getTaskGroups) |  |
| [`getThreadGroup`](./getThreadGroup) |  |
| [`getThreadGroupMappings`](./getThreadGroupMappings) |  |
| [`getThreads`](./getThreads) |  |
| [`getThreadsForGroup`](./getThreadsForGroup) |  |
| [`getTreeBatch`](./getTreeBatch) |  |
| [`getTreeChildren`](./getTreeChildren) |  |
| [`getTreeItem`](./getTreeItem) |  |
| [`resetProject`](./resetProject) |  |
| [`runCommand`](./runCommand) |  |
| [`setActive`](./setActive) |  |
| [`updateCodeboltYaml`](./updateCodeboltYaml) |  |
| [`updateConfig`](./updateConfig) |  |
| [`updateProjectConfigs`](./updateProjectConfigs) |  |
| [`updateTaskGroup`](./updateTaskGroup) |  |

## Methods

---

### `assignThreadToGroup`

```typescript
plugin.projectsApi.assignThreadToGroup(data: AssignThreadToGroupRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AssignThreadToGroupRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./assignThreadToGroup)

---

### `checkEnvironment`

```typescript
plugin.projectsApi.checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckEnvironmentRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./checkEnvironment)

---

### `checkProjectName`

```typescript
plugin.projectsApi.checkProjectName(data: CheckProjectNameRequest): Promise<object>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckProjectNameRequest` | Yes |  |

**Returns:** `Promise<object>`

[Full reference →](./checkProjectName)

---

### `create`

```typescript
plugin.projectsApi.create(data: Record<string, unknown>): Promise<Project>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `Record<string, unknown>` | Yes |  |

**Returns:** `Promise<Project>`

[Full reference →](./create)

---

### `createInDefault`

```typescript
plugin.projectsApi.createInDefault(data: Record<string, unknown>): Promise<Project>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `Record<string, unknown>` | Yes |  |

**Returns:** `Promise<Project>`

[Full reference →](./createInDefault)

---

### `createTaskGroup`

```typescript
plugin.projectsApi.createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTaskGroupRequest` | Yes |  |

**Returns:** `Promise<TaskGroup>`

[Full reference →](./createTaskGroup)

---

### `deleteTaskGroup`

```typescript
plugin.projectsApi.deleteTaskGroup(groupId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteTaskGroup)

---

### `getAllWithUniqueId`

```typescript
plugin.projectsApi.getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GetAllProjectsRequest` | Yes |  |

**Returns:** `Promise<Project[]>`

[Full reference →](./getAllWithUniqueId)

---

### `getByWorkspace`

```typescript
plugin.projectsApi.getByWorkspace(workspaceId: string): Promise<Project[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspaceId` | `string` | Yes |  |

**Returns:** `Promise<Project[]>`

[Full reference →](./getByWorkspace)

---

### `getChatHistory`

```typescript
plugin.projectsApi.getChatHistory(): Promise<unknown[]>
```



_No parameters._

**Returns:** `Promise<unknown[]>`

[Full reference →](./getChatHistory)

---

### `getConfigs`

```typescript
plugin.projectsApi.getConfigs(): Promise<ProjectConfig>
```



_No parameters._

**Returns:** `Promise<ProjectConfig>`

[Full reference →](./getConfigs)

---

### `getDebugHistory`

```typescript
plugin.projectsApi.getDebugHistory(): Promise<unknown[]>
```



_No parameters._

**Returns:** `Promise<unknown[]>`

[Full reference →](./getDebugHistory)

---

### `getDebugIndex`

```typescript
plugin.projectsApi.getDebugIndex(): Promise<unknown>
```



_No parameters._

**Returns:** `Promise<unknown>`

[Full reference →](./getDebugIndex)

---

### `getRoot`

```typescript
plugin.projectsApi.getRoot(): Promise<Project>
```



_No parameters._

**Returns:** `Promise<Project>`

[Full reference →](./getRoot)

---

### `getTaskGroups`

```typescript
plugin.projectsApi.getTaskGroups(): Promise<TaskGroup[]>
```



_No parameters._

**Returns:** `Promise<TaskGroup[]>`

[Full reference →](./getTaskGroups)

---

### `getThreadGroup`

```typescript
plugin.projectsApi.getThreadGroup(threadId: string): Promise<TaskGroup | null>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<TaskGroup | null>`

[Full reference →](./getThreadGroup)

---

### `getThreadGroupMappings`

```typescript
plugin.projectsApi.getThreadGroupMappings(): Promise<ThreadGroupMapping[]>
```



_No parameters._

**Returns:** `Promise<ThreadGroupMapping[]>`

[Full reference →](./getThreadGroupMappings)

---

### `getThreads`

```typescript
plugin.projectsApi.getThreads(): Promise<unknown[]>
```



_No parameters._

**Returns:** `Promise<unknown[]>`

[Full reference →](./getThreads)

---

### `getThreadsForGroup`

```typescript
plugin.projectsApi.getThreadsForGroup(groupId: string): Promise<string[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |

**Returns:** `Promise<string[]>`

[Full reference →](./getThreadsForGroup)

---

### `getTreeBatch`

```typescript
plugin.projectsApi.getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BatchTreeItemsRequest` | Yes |  |

**Returns:** `Promise<TreeItem[]>`

[Full reference →](./getTreeBatch)

---

### `getTreeChildren`

```typescript
plugin.projectsApi.getTreeChildren(parentId: string): Promise<TreeItem[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `parentId` | `string` | Yes |  |

**Returns:** `Promise<TreeItem[]>`

[Full reference →](./getTreeChildren)

---

### `getTreeItem`

```typescript
plugin.projectsApi.getTreeItem(itemId: string): Promise<TreeItem>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `itemId` | `string` | Yes |  |

**Returns:** `Promise<TreeItem>`

[Full reference →](./getTreeItem)

---

### `resetProject`

```typescript
plugin.projectsApi.resetProject(data: ResetProjectRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ResetProjectRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./resetProject)

---

### `runCommand`

```typescript
plugin.projectsApi.runCommand(data: RunCommandRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `RunCommandRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./runCommand)

---

### `setActive`

```typescript
plugin.projectsApi.setActive(data: SetActiveProjectRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SetActiveProjectRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./setActive)

---

### `updateCodeboltYaml`

```typescript
plugin.projectsApi.updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateCodeboltYamlRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./updateCodeboltYaml)

---

### `updateConfig`

```typescript
plugin.projectsApi.updateConfig(data: UpdateProjectConfigRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateProjectConfigRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./updateConfig)

---

### `updateProjectConfigs`

```typescript
plugin.projectsApi.updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateProjectConfigRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./updateProjectConfigs)

---

### `updateTaskGroup`

```typescript
plugin.projectsApi.updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |
| `data` | `UpdateTaskGroupRequest` | Yes |  |

**Returns:** `Promise<TaskGroup>`

[Full reference →](./updateTaskGroup)

