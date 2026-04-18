---
title: TaskActivityApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: TaskActivityApi

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:13

## Constructors

### Constructor

```ts
new TaskActivityApi(http: HttpClient): TaskActivityApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`TaskActivityApi`

## Methods

### bulkCreate()

```ts
bulkCreate(data: CreateTaskActivityRequest[]): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:77

Bulk create activities

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateTaskActivityRequest`[] |

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### create()

```ts
create(data: CreateTaskActivityRequest): Promise<TaskActivity>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:17

Create a new task activity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateTaskActivityRequest` |

#### Returns

`Promise`\<`TaskActivity`\>

***

### createPrestart()

```ts
createPrestart(data: CreatePrestartActivityRequest): Promise<TaskActivity>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:22

Create a prestart activity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreatePrestartActivityRequest` |

#### Returns

`Promise`\<`TaskActivity`\>

***

### delete()

```ts
delete(taskId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:47

Delete a task activity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deleteOlder()

```ts
deleteOlder(params?: TaskActivityCleanupParams): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:82

Delete older activities (cleanup)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TaskActivityCleanupParams` |

#### Returns

`Promise`\<`void`\>

***

### get()

```ts
get(taskId: string): Promise<TaskActivity>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:37

Get a specific task activity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

#### Returns

`Promise`\<`TaskActivity`\>

***

### getByStatus()

```ts
getByStatus(status: string): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:62

Get activities by status

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `string` |

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### getByThread()

```ts
getByThread(threadId: string): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:57

Get activities by thread ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### getByType()

```ts
getByType(type: string): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:52

Get activities by type

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### getDetailsWithActivities()

```ts
getDetailsWithActivities(taskId: string): Promise<TaskDetailsWithActivities>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:32

Get task details with activities

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

#### Returns

`Promise`\<`TaskDetailsWithActivities`\>

***

### getRecent()

```ts
getRecent(): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:67

Get recent activities

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### getStatistics()

```ts
getStatistics(): Promise<TaskActivityStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:72

Get activity statistics overview

#### Returns

`Promise`\<`TaskActivityStatistics`\>

***

### list()

```ts
list(params?: TaskActivityListParams): Promise<TaskActivity[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:27

List all task activities

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TaskActivityListParams` |

#### Returns

`Promise`\<`TaskActivity`[]\>

***

### update()

```ts
update(taskId: string, data: UpdateTaskActivityRequest): Promise<TaskActivity>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/task-activity.api.ts:42

Update a task activity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `data` | `UpdateTaskActivityRequest` |

#### Returns

`Promise`\<`TaskActivity`\>
