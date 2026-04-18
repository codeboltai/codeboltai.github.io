---
title: JobsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: JobsApi

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:33

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

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:34

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

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:632

Accepts a split proposal, executing the job decomposition.

Approves the proposal and splits the original job into the proposed
sub-jobs. The original job's status may be updated to reflect the split.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the parent job |
| `proposalId` | `string` | The unique identifier of the split proposal to accept |
| `data?` | `AcceptSplitProposalRequest` | Optional acceptance parameters for additional context |

#### Returns

`Promise`\<`Job`[]\>

A promise that resolves to an array of the newly created sub-[Job](../interfaces/Job) objects

#### Example

```typescript
const subJobs = await client.jobs.acceptSplitProposal('job-123', 'proposal-456');
console.log(`Split into ${subJobs.length} sub-jobs`);
```

***

### addDependency()

```ts
addDependency(id: string, data: AddDependencyRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:422

Adds a dependency between two jobs.

Declares that the specified job depends on another job, meaning it
cannot start until the dependency is resolved. This builds the
job dependency graph used for scheduling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the dependent job |
| `data` | `AddDependencyRequest` | Dependency payload specifying the target job that must complete first |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the dependency has been added

#### Example

```typescript
await client.jobs.addDependency('job-B', { targetId: 'job-A' });
// job-B now depends on job-A completing first
```

***

### addPheromone()

```ts
addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:377

Deposits a pheromone signal on a job.

Attaches a pheromone of the specified type to the job, which other
agents can detect and use for coordination decisions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job |
| `data` | `PheromoneDepositRequest` | Pheromone deposit payload including type and value |

#### Returns

`Promise`\<`Pheromone`\>

A promise that resolves to the created [Pheromone](../interfaces/Pheromone)

#### Example

```typescript
const pheromone = await client.jobs.addPheromone('job-123', {
  type: 'complexity',
  value: 0.8,
});
```

***

### bulkDelete()

```ts
bulkDelete(data: BulkDeleteJobsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:315

Deletes multiple jobs in a single batch operation.

More efficient than deleting jobs one at a time when you need to
remove several jobs simultaneously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BulkDeleteJobsRequest` | Payload containing the array of job IDs to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all specified jobs have been deleted

#### Example

```typescript
await client.jobs.bulkDelete({ ids: ['job-1', 'job-2', 'job-3'] });
```

***

### create()

```ts
create(data: CreateJobRequest): Promise<Job>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:241

Creates a new job.

Registers a work item that can be assigned to agents, tracked through
its lifecycle, and coordinated with other jobs via dependencies.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateJobRequest` | Job creation payload including title, description, and configuration |

#### Returns

`Promise`\<`Job`\>

A promise that resolves to the newly created [Job](../interfaces/Job)

#### Example

```typescript
const job = await client.jobs.create({
  title: 'Implement login page',
  description: 'Build the user authentication UI',
});
```

***

### createGroup()

```ts
createGroup(data: CreateJobGroupRequest): Promise<JobGroup>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:156

Creates a new job group.

Groups provide an organizational layer for jobs, allowing you to
categorize and manage them as a collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateJobGroupRequest` | Group creation payload including name and description |

#### Returns

`Promise`\<`JobGroup`\>

A promise that resolves to the newly created [JobGroup](../interfaces/JobGroup)

#### Example

```typescript
const group = await client.jobs.createGroup({
  name: 'sprint-12',
  description: 'Tasks for sprint 12',
});
```

***

### createLabel()

```ts
createLabel(data: CreateLabelRequest): Promise<JobLabel>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:516

Creates a new job label.

Registers a label that can be attached to jobs for categorization.
Labels are system-wide and reusable across all jobs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateLabelRequest` | Label creation payload including name and optional color |

#### Returns

`Promise`\<`JobLabel`\>

A promise that resolves to the newly created JobLabel

#### Example

```typescript
const label = await client.jobs.createLabel({ name: 'urgent', color: '#ff0000' });
```

***

### createPheromoneType()

```ts
createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:74

Creates a new pheromone type definition.

Registers a new category of pheromone that can subsequently be
deposited on jobs. Pheromone types are system-wide and shared
across all jobs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreatePheromoneTypeRequest` | Pheromone type creation payload including name and configuration |

#### Returns

`Promise`\<`PheromoneType`\>

A promise that resolves to the newly created PheromoneType

#### Example

```typescript
const type = await client.jobs.createPheromoneType({
  name: 'complexity',
  description: 'Indicates task complexity level',
});
```

***

### createSplitProposal()

```ts
createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:586

Creates a split proposal for a job.

Proposes breaking a large job into smaller sub-jobs. The proposal
must be accepted before the split is executed. This enables
collaborative task decomposition.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job to split |
| `data` | `CreateSplitProposalRequest` | Split proposal details including the proposed sub-jobs |

#### Returns

`Promise`\<`JobSplitProposal`\>

A promise that resolves to the created [JobSplitProposal](../interfaces/JobSplitProposal)

#### Example

```typescript
const proposal = await client.jobs.createSplitProposal('job-123', {
  subJobs: [
    { title: 'Part A' },
    { title: 'Part B' },
  ],
});
```

***

### delete()

```ts
delete(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:297

Deletes a job.

Permanently removes a job and its associated data. Dependencies
pointing to this job are also cleaned up.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.jobs.delete('job-123');
```

***

### deleteGroup()

```ts
deleteGroup(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:195

Deletes a job group.

Removes the group. Jobs previously assigned to this group are not
deleted but lose their group association.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the group to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.jobs.deleteGroup('grp-1');
```

***

### deleteLabel()

```ts
deleteLabel(name: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:534

Deletes a job label by its name.

Removes the label definition. Jobs that previously had this label
will lose the association.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the label to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.jobs.deleteLabel('urgent');
```

***

### deletePheromoneType()

```ts
deletePheromoneType(name: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:94

Deletes a pheromone type by its name.

Removes the pheromone type definition from the system. Existing
pheromones of this type on jobs may also be affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the pheromone type to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.jobs.deletePheromoneType('complexity');
```

***

### deleteSplitProposal()

```ts
deleteSplitProposal(id: string, proposalId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:611

Deletes a split proposal.

Removes a pending split proposal without executing the split.
Use this to reject or cancel a proposed job decomposition.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the parent job |
| `proposalId` | `string` | The unique identifier of the split proposal to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the proposal has been deleted

#### Example

```typescript
await client.jobs.deleteSplitProposal('job-123', 'proposal-456');
```

***

### get()

```ts
get(id: string): Promise<Job>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:260

Retrieves a specific job by its ID.

Returns the full details of a single job including its status,
dependencies, labels, and pheromones.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job |

#### Returns

`Promise`\<`Job`\>

A promise that resolves to the [Job](../interfaces/Job)

#### Example

```typescript
const job = await client.jobs.get('job-123');
console.log(job.title, job.status);
```

***

### getAggregatedPheromones()

```ts
getAggregatedPheromones(id: string): Promise<Record<string, unknown>>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:353

Retrieves aggregated pheromone data for a job.

Returns a summary of all pheromone signals on the job, grouped and
aggregated by type. Useful for dashboards and high-level status views.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

A promise that resolves to a record of aggregated pheromone data keyed by type

#### Example

```typescript
const aggregated = await client.jobs.getAggregatedPheromones('job-123');
```

***

### getAll()

```ts
getAll(params?: JobListFilters): Promise<Job[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:215

Lists all jobs, optionally filtered.

Returns every job in the system unless filter parameters are provided
to narrow the results by status, group, label, or other criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `JobListFilters` | Optional filter and pagination parameters |

#### Returns

`Promise`\<`Job`[]\>

A promise that resolves to an array of [Job](../interfaces/Job) objects

#### Example

```typescript
const jobs = await client.jobs.getAll({ status: 'pending' });
```

***

### getBlocked()

```ts
getBlocked(): Promise<Job[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:479

Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph.

#### Returns

`Promise`\<`Job`[]\>

A promise that resolves to an array of blocked [Job](../interfaces/Job) objects

#### Example

```typescript
const blocked = await client.jobs.getBlocked();
blocked.forEach(j => console.log(j.title, 'blocked by', j.dependencies));
```

***

### getGroups()

```ts
getGroups(): Promise<JobGroup[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:131

Lists all job groups.

Job groups organize related jobs into logical collections, making
it easier to manage large numbers of jobs.

#### Returns

`Promise`\<`JobGroup`[]\>

A promise that resolves to an array of [JobGroup](../interfaces/JobGroup) objects

#### Example

```typescript
const groups = await client.jobs.getGroups();
```

***

### getJobsByPheromone()

```ts
getJobsByPheromone(type: string): Promise<Job[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:112

Retrieves all jobs that have a specific pheromone type attached.

Useful for finding jobs that share a common signal, enabling
swarm-style discovery of related work items.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The pheromone type name to filter by |

#### Returns

`Promise`\<`Job`[]\>

A promise that resolves to an array of [Job](../interfaces/Job) objects carrying the specified pheromone

#### Example

```typescript
const complexJobs = await client.jobs.getJobsByPheromone('complexity');
```

***

### getLabels()

```ts
getLabels(): Promise<JobLabel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:498

Lists all available job labels.

Labels are tags that can be attached to jobs for categorization
and filtering purposes.

#### Returns

`Promise`\<`JobLabel`[]\>

A promise that resolves to an array of JobLabel objects

#### Example

```typescript
const labels = await client.jobs.getLabels();
```

***

### getPheromones()

```ts
getPheromones(id: string): Promise<Pheromone[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:335

Retrieves all pheromones attached to a specific job.

Returns the list of pheromone signals that have been deposited on the
job by agents, useful for understanding the job's coordination state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job |

#### Returns

`Promise`\<`Pheromone`[]\>

A promise that resolves to an array of [Pheromone](../interfaces/Pheromone) objects

#### Example

```typescript
const pheromones = await client.jobs.getPheromones('job-123');
```

***

### getPheromoneTypes()

```ts
getPheromoneTypes(): Promise<PheromoneType[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:52

Retrieves all registered pheromone types.

Pheromone types define the categories of signals that can be attached
to jobs for swarm-style coordination between agents.

#### Returns

`Promise`\<`PheromoneType`[]\>

A promise that resolves to an array of PheromoneType definitions

#### Example

```typescript
const types = await client.jobs.getPheromoneTypes();
types.forEach(t => console.log(t.name));
```

***

### getReady()

```ts
getReady(): Promise<Job[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:461

Retrieves all jobs that are ready to execute.

Returns jobs whose dependencies have all been satisfied, meaning
they can be picked up by agents immediately.

#### Returns

`Promise`\<`Job`[]\>

A promise that resolves to an array of ready [Job](../interfaces/Job) objects

#### Example

```typescript
const ready = await client.jobs.getReady();
console.log(`${ready.length} jobs ready for execution`);
```

***

### getStatistics()

```ts
getStatistics(): Promise<JobStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:555

Retrieves aggregate statistics about the job system.

Returns counts and metrics such as total jobs, jobs by status,
average completion time, and other summary data. Useful for
dashboards and progress reporting.

#### Returns

`Promise`\<`JobStatistics`\>

A promise that resolves to a JobStatistics summary

#### Example

```typescript
const stats = await client.jobs.getStatistics();
console.log(`${stats.total} total jobs, ${stats.completed} completed`);
```

***

### removeDependency()

```ts
removeDependency(id: string, targetId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:441

Removes a dependency from a job.

Detaches the dependency link between the job and its target, which
may unblock the job if this was its only remaining dependency.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the dependent job |
| `targetId` | `string` | The unique identifier of the dependency target to remove |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the dependency has been removed

#### Example

```typescript
await client.jobs.removeDependency('job-B', 'job-A');
```

***

### removePheromone()

```ts
removePheromone(id: string, type: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:399

Removes a pheromone of a specific type from a job.

Clears the pheromone signal, which may affect coordination behavior
of agents that rely on its presence.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job |
| `type` | `string` | The pheromone type name to remove |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the pheromone has been removed

#### Example

```typescript
await client.jobs.removePheromone('job-123', 'complexity');
```

***

### update()

```ts
update(id: string, data: UpdateJobRequest): Promise<Job>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:279

Updates an existing job.

Modifies job properties such as title, description, status, or
assignee. Only the fields provided in the request body are updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the job to update |
| `data` | `UpdateJobRequest` | The fields to update |

#### Returns

`Promise`\<`Job`\>

A promise that resolves to the updated [Job](../interfaces/Job)

#### Example

```typescript
const updated = await client.jobs.update('job-123', { status: 'in_progress' });
```

***

### updateGroup()

```ts
updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/jobs.api.ts:174

Updates an existing job group.

Modifies group properties such as name, description, or metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the group to update |
| `data` | `UpdateJobGroupRequest` | The fields to update on the group |

#### Returns

`Promise`\<`JobGroup`\>

A promise that resolves to the updated [JobGroup](../interfaces/JobGroup)

#### Example

```typescript
const updated = await client.jobs.updateGroup('grp-1', { name: 'sprint-13' });
```
