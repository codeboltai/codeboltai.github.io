---
title: ThreadStepsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ThreadStepsApi

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:18

## Constructors

### Constructor

```ts
new ThreadStepsApi(http: HttpClient): ThreadStepsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ThreadStepsApi`

## Methods

### bulkDelete()

```ts
bulkDelete(data: BulkDeleteStepsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:67

Bulk delete steps

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BulkDeleteStepsRequest` |

#### Returns

`Promise`\<`void`\>

***

### bulkUpdate()

```ts
bulkUpdate(data: BulkUpdateStepsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:62

Bulk update steps

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BulkUpdateStepsRequest` |

#### Returns

`Promise`\<`void`\>

***

### complete()

```ts
complete(stepId: string, data?: CompleteStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:82

Complete a step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data?` | `CompleteStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### create()

```ts
create(data: CreateStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:27

Create a new step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### delete()

```ts
delete(stepId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:57

Delete a step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### execute()

```ts
execute(stepId: string, data?: ExecuteStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:77

Execute a step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data?` | `ExecuteStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### fail()

```ts
fail(stepId: string, data?: FailStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:87

Mark a step as failed

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data?` | `FailStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### getActiveSteps()

```ts
getActiveSteps(threadId: string): Promise<ThreadStep[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:102

Get active steps for a thread

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`ThreadStep`[]\>

***

### getById()

```ts
getById(id: string): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:37

Get a step by internal ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### getByThreadId()

```ts
getByThreadId(threadId: string): Promise<ThreadStep[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:47

Get steps by thread ID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`ThreadStep`[]\>

***

### getNextExecutable()

```ts
getNextExecutable(threadId: string): Promise<ThreadStep | null>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:97

Get next executable step for a thread

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`ThreadStep` \| `null`\>

***

### getStatistics()

```ts
getStatistics(threadId: string): Promise<StepStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:107

Get step statistics for a thread

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`StepStatistics`\>

***

### healthCheck()

```ts
healthCheck(): Promise<HealthCheckResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:22

Health check for thread step service

#### Returns

`Promise`\<`HealthCheckResponse`\>

***

### list()

```ts
list(params?: StepListParams): Promise<ThreadStep[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:42

List all steps

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `StepListParams` |

#### Returns

`Promise`\<`ThreadStep`[]\>

***

### search()

```ts
search(stepId: string): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:32

Search for a step by stepId

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### skip()

```ts
skip(stepId: string, data?: SkipStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:92

Skip a step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data?` | `SkipStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### update()

```ts
update(stepId: string, data: UpdateStepRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:52

Update a step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data` | `UpdateStepRequest` |

#### Returns

`Promise`\<`ThreadStep`\>

***

### updateStatus()

```ts
updateStatus(stepId: string, data: UpdateStepStatusRequest): Promise<ThreadStep>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/thread-steps.api.ts:72

Update step status

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stepId` | `string` |
| `data` | `UpdateStepStatusRequest` |

#### Returns

`Promise`\<`ThreadStep`\>
