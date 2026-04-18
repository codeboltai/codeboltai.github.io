---
title: JobsApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: JobsApi

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:33

Manages the job system including CRUD operations, dependencies, labels,
pheromones, groups, statistics, and split proposals.

Jobs represent units of work that can be assigned to agents. They support
dependency graphs, pheromone-based signaling for swarm coordination,
grouping for organization, and split proposals for breaking large jobs
into smaller pieces.

## Constructors

### Constructor

```ts
new JobsApi(http: HttpClient): JobsApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`JobsApi`

## Methods

### acceptSplitProposal()

```ts
acceptSplitProposal(
   id: string, 
   proposalId: string, 
data?: AcceptSplitProposalRequest): Promise<Job[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:195

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `proposalId` | `string` |
| `data?` | `AcceptSplitProposalRequest` |

#### Returns

`Promise`\<`Job`[]\>

***

### addDependency()

```ts
addDependency(id: string, data: AddDependencyRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:137

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddDependencyRequest` |

#### Returns

`Promise`\<`void`\>

***

### addPheromone()

```ts
addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `PheromoneDepositRequest` |

#### Returns

`Promise`\<`Pheromone`\>

***

### bulkDelete()

```ts
bulkDelete(data: BulkDeleteJobsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:108

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BulkDeleteJobsRequest` |

#### Returns

`Promise`\<`void`\>

***

### create()

```ts
create(data: CreateJobRequest): Promise<Job>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:92

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateJobRequest` |

#### Returns

`Promise`\<`Job`\>

***

### createGroup()

```ts
createGroup(data: CreateJobGroupRequest): Promise<JobGroup>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateJobGroupRequest` |

#### Returns

`Promise`\<`JobGroup`\>

***

### createLabel()

```ts
createLabel(data: CreateLabelRequest): Promise<JobLabel>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:161

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateLabelRequest` |

#### Returns

`Promise`\<`JobLabel`\>

***

### createPheromoneType()

```ts
createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreatePheromoneTypeRequest` |

#### Returns

`Promise`\<`PheromoneType`\>

***

### createSplitProposal()

```ts
createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:181

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `CreateSplitProposalRequest` |

#### Returns

`Promise`\<`JobSplitProposal`\>

***

### delete()

```ts
delete(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:104

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deleteGroup()

```ts
deleteGroup(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deleteLabel()

```ts
deleteLabel(name: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:165

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deletePheromoneType()

```ts
deletePheromoneType(name: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deleteSplitProposal()

```ts
deleteSplitProposal(id: string, proposalId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:191

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `proposalId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### get()

```ts
get(id: string): Promise<Job>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`Job`\>

***

### getAggregatedPheromones()

```ts
getAggregatedPheromones(id: string): Promise<Record<string, unknown>>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:118

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### getAll()

```ts
getAll(params?: JobListFilters): Promise<Job[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `JobListFilters` |

#### Returns

`Promise`\<`Job`[]\>

***

### getBlocked()

```ts
getBlocked(): Promise<Job[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:151

#### Returns

`Promise`\<`Job`[]\>

***

### getGroups()

```ts
getGroups(): Promise<JobGroup[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:58

#### Returns

`Promise`\<`JobGroup`[]\>

***

### getJobsByPheromone()

```ts
getJobsByPheromone(type: string): Promise<Job[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |

#### Returns

`Promise`\<`Job`[]\>

***

### getLabels()

```ts
getLabels(): Promise<JobLabel[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:157

#### Returns

`Promise`\<`JobLabel`[]\>

***

### getPheromones()

```ts
getPheromones(id: string): Promise<Pheromone[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:114

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`Pheromone`[]\>

***

### getPheromoneTypes()

```ts
getPheromoneTypes(): Promise<PheromoneType[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:38

#### Returns

`Promise`\<`PheromoneType`[]\>

***

### getReady()

```ts
getReady(): Promise<Job[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:147

#### Returns

`Promise`\<`Job`[]\>

***

### getStatistics()

```ts
getStatistics(): Promise<JobStatistics>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:171

#### Returns

`Promise`\<`JobStatistics`\>

***

### removeDependency()

```ts
removeDependency(id: string, targetId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `targetId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### removePheromone()

```ts
removePheromone(id: string, type: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:131

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `type` | `string` |

#### Returns

`Promise`\<`void`\>

***

### update()

```ts
update(id: string, data: UpdateJobRequest): Promise<Job>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:100

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateJobRequest` |

#### Returns

`Promise`\<`Job`\>

***

### updateGroup()

```ts
updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/jobs.api.ts:70

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateJobGroupRequest` |

#### Returns

`Promise`\<`JobGroup`\>
