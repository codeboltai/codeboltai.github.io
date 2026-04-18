---
title: WorkspaceApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: WorkspaceApi

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:15

Manages workspaces and their associated projects in the CodeBolt platform.

Workspaces provide isolated environments for development projects, allowing
users to organize their work and switch between different project contexts.
This API handles workspace discovery, selection, and management.

## Constructors

### Constructor

```ts
new WorkspaceApi(http: HttpClient): WorkspaceApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`WorkspaceApi`

## Methods

### change()

```ts
change(workspaceId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:111

Changes the active workspace to the specified one.

Updates the active workspace context directly without requiring
a separate selection object. This is a simplified version of the
select operation for quick workspace switching.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The unique identifier of the workspace to activate |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the workspace has been changed

#### Example

```typescript
await client.workspace.change('ws-456');
console.log('Active workspace updated');
```

***

### getById()

```ts
getById(workspaceId: string): Promise<Workspace>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:91

Retrieves a specific workspace by its unique identifier.

Returns detailed information about a single workspace including
its settings, members, projects, and configuration metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The unique identifier of the workspace to retrieve |

#### Returns

`Promise`\<`Workspace`\>

A promise that resolves to the requested Workspace object

#### Example

```typescript
const workspace = await client.workspace.getById('ws-123');
console.log('Workspace name:', workspace.name);
```

***

### list()

```ts
list(): Promise<Workspace[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:72

Lists all available workspaces for the current user.

Returns every workspace the user has access to, including their
personal workspaces and any shared workspaces. Useful for workspace
browsing and selection UIs.

#### Returns

`Promise`\<`Workspace`[]\>

A promise that resolves to an array of Workspace objects

#### Example

```typescript
const workspaces = await client.workspace.list();
workspaces.forEach(w => console.log(w.name));
```

***

### listProjects()

```ts
listProjects(): Promise<WorkspaceProject[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:32

Lists all projects in the current workspace.

Returns an array of workspace projects with their metadata and status.
Use this to display available projects or navigate between them.

#### Returns

`Promise`\<`WorkspaceProject`[]\>

A promise that resolves to an array of WorkspaceProject objects

#### Example

```typescript
const projects = await client.workspace.listProjects();
projects.forEach(p => console.log(p.name, p.status));
```

***

### select()

```ts
select(data: SelectWorkspaceRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/workspace.api.ts:53

Selects a workspace as the active context.

Switches the active workspace to the specified one, updating all
subsequent API calls to operate within that workspace context.
This affects project selection, file access, and other operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SelectWorkspaceRequest` | Request containing workspace selection details |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the workspace has been selected

#### Example

```typescript
await client.workspace.select({ workspaceId: 'ws-123' });
console.log('Workspace changed');
```
