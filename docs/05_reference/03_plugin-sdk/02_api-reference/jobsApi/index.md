---
title: JobsApi API
---

# JobsApi API

The `jobsApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`acceptSplitProposal`](./acceptSplitProposal) |  |
| [`addDependency`](./addDependency) |  |
| [`addPheromone`](./addPheromone) |  |
| [`bulkDelete`](./bulkDelete) |  |
| [`create`](./create) |  |
| [`createGroup`](./createGroup) |  |
| [`createLabel`](./createLabel) |  |
| [`createPheromoneType`](./createPheromoneType) |  |
| [`createSplitProposal`](./createSplitProposal) |  |
| [`delete`](./delete) |  |
| [`deleteGroup`](./deleteGroup) |  |
| [`deleteLabel`](./deleteLabel) |  |
| [`deletePheromoneType`](./deletePheromoneType) |  |
| [`deleteSplitProposal`](./deleteSplitProposal) |  |
| [`get`](./get) |  |
| [`getAggregatedPheromones`](./getAggregatedPheromones) |  |
| [`getAll`](./getAll) |  |
| [`getBlocked`](./getBlocked) |  |
| [`getGroups`](./getGroups) |  |
| [`getJobsByPheromone`](./getJobsByPheromone) |  |
| [`getLabels`](./getLabels) |  |
| [`getPheromones`](./getPheromones) |  |
| [`getPheromoneTypes`](./getPheromoneTypes) |  |
| [`getReady`](./getReady) |  |
| [`getStatistics`](./getStatistics) |  |
| [`removeDependency`](./removeDependency) |  |
| [`removePheromone`](./removePheromone) |  |
| [`update`](./update) |  |
| [`updateGroup`](./updateGroup) |  |

## Methods

---

### `acceptSplitProposal`

```typescript
plugin.jobsApi.acceptSplitProposal(id: string, proposalId: string, data?: AcceptSplitProposalRequest): Promise<Job[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |
| `data` | `AcceptSplitProposalRequest` | No |  |

**Returns:** `Promise<Job[]>`

[Full reference →](./acceptSplitProposal)

---

### `addDependency`

```typescript
plugin.jobsApi.addDependency(id: string, data: AddDependencyRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddDependencyRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./addDependency)

---

### `addPheromone`

```typescript
plugin.jobsApi.addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `PheromoneDepositRequest` | Yes |  |

**Returns:** `Promise<Pheromone>`

[Full reference →](./addPheromone)

---

### `bulkDelete`

```typescript
plugin.jobsApi.bulkDelete(data: BulkDeleteJobsRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkDeleteJobsRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./bulkDelete)

---

### `create`

```typescript
plugin.jobsApi.create(data: CreateJobRequest): Promise<Job>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobRequest` | Yes |  |

**Returns:** `Promise<Job>`

[Full reference →](./create)

---

### `createGroup`

```typescript
plugin.jobsApi.createGroup(data: CreateJobGroupRequest): Promise<JobGroup>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobGroupRequest` | Yes |  |

**Returns:** `Promise<JobGroup>`

[Full reference →](./createGroup)

---

### `createLabel`

```typescript
plugin.jobsApi.createLabel(data: CreateLabelRequest): Promise<JobLabel>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateLabelRequest` | Yes |  |

**Returns:** `Promise<JobLabel>`

[Full reference →](./createLabel)

---

### `createPheromoneType`

```typescript
plugin.jobsApi.createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreatePheromoneTypeRequest` | Yes |  |

**Returns:** `Promise<PheromoneType>`

[Full reference →](./createPheromoneType)

---

### `createSplitProposal`

```typescript
plugin.jobsApi.createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CreateSplitProposalRequest` | Yes |  |

**Returns:** `Promise<JobSplitProposal>`

[Full reference →](./createSplitProposal)

---

### `delete`

```typescript
plugin.jobsApi.delete(id: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./delete)

---

### `deleteGroup`

```typescript
plugin.jobsApi.deleteGroup(id: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteGroup)

---

### `deleteLabel`

```typescript
plugin.jobsApi.deleteLabel(name: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteLabel)

---

### `deletePheromoneType`

```typescript
plugin.jobsApi.deletePheromoneType(name: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deletePheromoneType)

---

### `deleteSplitProposal`

```typescript
plugin.jobsApi.deleteSplitProposal(id: string, proposalId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteSplitProposal)

---

### `get`

```typescript
plugin.jobsApi.get(id: string): Promise<Job>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<Job>`

[Full reference →](./get)

---

### `getAggregatedPheromones`

```typescript
plugin.jobsApi.getAggregatedPheromones(id: string): Promise<Record<string, unknown>>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<Record<string, unknown>>`

[Full reference →](./getAggregatedPheromones)

---

### `getAll`

```typescript
plugin.jobsApi.getAll(params?: JobListFilters): Promise<Job[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `JobListFilters` | No |  |

**Returns:** `Promise<Job[]>`

[Full reference →](./getAll)

---

### `getBlocked`

```typescript
plugin.jobsApi.getBlocked(): Promise<Job[]>
```



_No parameters._

**Returns:** `Promise<Job[]>`

[Full reference →](./getBlocked)

---

### `getGroups`

```typescript
plugin.jobsApi.getGroups(): Promise<JobGroup[]>
```



_No parameters._

**Returns:** `Promise<JobGroup[]>`

[Full reference →](./getGroups)

---

### `getJobsByPheromone`

```typescript
plugin.jobsApi.getJobsByPheromone(type: string): Promise<Job[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes |  |

**Returns:** `Promise<Job[]>`

[Full reference →](./getJobsByPheromone)

---

### `getLabels`

```typescript
plugin.jobsApi.getLabels(): Promise<JobLabel[]>
```



_No parameters._

**Returns:** `Promise<JobLabel[]>`

[Full reference →](./getLabels)

---

### `getPheromones`

```typescript
plugin.jobsApi.getPheromones(id: string): Promise<Pheromone[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<Pheromone[]>`

[Full reference →](./getPheromones)

---

### `getPheromoneTypes`

```typescript
plugin.jobsApi.getPheromoneTypes(): Promise<PheromoneType[]>
```



_No parameters._

**Returns:** `Promise<PheromoneType[]>`

[Full reference →](./getPheromoneTypes)

---

### `getReady`

```typescript
plugin.jobsApi.getReady(): Promise<Job[]>
```



_No parameters._

**Returns:** `Promise<Job[]>`

[Full reference →](./getReady)

---

### `getStatistics`

```typescript
plugin.jobsApi.getStatistics(): Promise<JobStatistics>
```



_No parameters._

**Returns:** `Promise<JobStatistics>`

[Full reference →](./getStatistics)

---

### `removeDependency`

```typescript
plugin.jobsApi.removeDependency(id: string, targetId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./removeDependency)

---

### `removePheromone`

```typescript
plugin.jobsApi.removePheromone(id: string, type: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `type` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./removePheromone)

---

### `update`

```typescript
plugin.jobsApi.update(id: string, data: UpdateJobRequest): Promise<Job>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateJobRequest` | Yes |  |

**Returns:** `Promise<Job>`

[Full reference →](./update)

---

### `updateGroup`

```typescript
plugin.jobsApi.updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateJobGroupRequest` | Yes |  |

**Returns:** `Promise<JobGroup>`

[Full reference →](./updateGroup)

