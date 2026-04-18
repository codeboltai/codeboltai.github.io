---
title: ReviewMergeApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ReviewMergeApi

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:11

Provides methods for managing review-merge requests in the CodeBolt platform.

Review-merge requests represent code review workflows that gate merging of changes.
This API supports the full lifecycle including creation, review, locking, proposed jobs,
pheromone tagging, and the final merge operation.

## Constructors

### Constructor

```ts
new ReviewMergeApi(http: HttpClient): ReviewMergeApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ReviewMergeApi`

## Methods

### addLinkedJob()

```ts
addLinkedJob(id: string, data: AddLinkedJobRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:418

Links an existing job to a review-merge request.

Associates a job with this review so that changes from the job are tracked as part
of the review workflow.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddLinkedJobRequest` | The linked job details including the job ID to associate |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the job has been linked

***

### addPheromone()

```ts
addPheromone(id: string, data: AddPheromoneRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:224

Adds a pheromone tag to a review-merge request.

Pheromones are metadata signals used for inter-agent communication. Adding a pheromone
allows agents to tag reviews with contextual information that other agents can detect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddPheromoneRequest` | The pheromone data to attach |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pheromone has been added

***

### addProposedJob()

```ts
addProposedJob(id: string, data: AddProposedJobRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:320

Adds a proposed job to a review-merge request.

Proposed jobs are suggested work items that arise from the review process. They must
be approved before being converted into actual jobs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddProposedJobRequest` | The proposed job details |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the proposed job has been added

***

### addReview()

```ts
addReview(id: string, data: AddReviewFeedbackRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:385

Adds a review or feedback to a review-merge request.

Submits review feedback (approval, rejection, or comments) from a reviewer.
Multiple reviews can be added from different reviewers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddReviewFeedbackRequest` | The review feedback payload containing the reviewer's assessment |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the review has been added

#### Example

```typescript
await client.reviewMerge.addReview('review-789', {
  status: 'approved',
  comment: 'LGTM, well structured changes',
});
```

***

### approveProposedJob()

```ts
approveProposedJob(
   id: string, 
   proposedJobId: string, 
data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:334

Approves a proposed job on a review-merge request.

Marks the proposed job as approved, making it eligible for conversion into an actual job.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the proposed job to approve |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional data for the approval |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the proposed job has been approved

***

### approveUnlockRequest()

```ts
approveUnlockRequest(
   id: string, 
   unlockRequestId: string, 
data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:292

Approves an unlock request, releasing the lock on a review-merge request.

The lock holder calls this to grant an unlock request from another agent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `unlockRequestId` | `string` | The unique identifier of the unlock request to approve |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional data for the approval |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the unlock request has been approved

***

### convertProposedJob()

```ts
convertProposedJob(
   id: string, 
   proposedJobId: string, 
data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:363

Converts an approved proposed job into an actual job.

Takes a previously approved proposed job and creates a real job from it. The proposed
job must have been approved before conversion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the approved proposed job to convert |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional data for the conversion |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the proposed job has been converted

***

### create()

```ts
create(data: CreateReviewMergeRequest): Promise<ReviewMergeRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:149

Creates a new review-merge request.

Initiates a review workflow for a set of changes. The request will enter the pending
state and can be reviewed, locked, and eventually merged.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateReviewMergeRequest` | The review-merge request creation payload |

#### Returns

`Promise`\<`ReviewMergeRequest`\>

A promise that resolves to the newly created ReviewMergeRequest

#### Example

```typescript
const review = await client.reviewMerge.create({
  title: 'Refactor authentication module',
  description: 'Simplifies the auth flow and adds OAuth2 support',
  agentId: 'agent-123',
});
```

***

### createUnlockRequest()

```ts
createUnlockRequest(id: string, data: CreateUnlockRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:278

Creates an unlock request for a locked review-merge request.

When a review is locked by another agent, this creates a formal request to unlock it.
The lock holder can then approve or reject the unlock request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the locked review-merge request |
| `data` | `CreateUnlockRequest` | The unlock request payload with reason and requester information |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the unlock request has been created

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:189

Deletes a review-merge request.

Permanently removes a review-merge request and all associated data. This action
cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the deletion is complete

***

### get()

```ts
get(id: string): Promise<ReviewMergeRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:162

Retrieves a specific review-merge request by its ID.

Fetches the full details of a single review-merge request including its current
status, reviews, pheromones, and linked jobs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |

#### Returns

`Promise`\<`ReviewMergeRequest`\>

A promise that resolves to the ReviewMergeRequest object

***

### getAll()

```ts
getAll(params?: Record<string, unknown>): Promise<ReviewMergeRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:127

Retrieves all review-merge requests, optionally filtered by query parameters.

Returns the complete list of review-merge requests. Use the optional params to filter
by status, date range, or other criteria supported by the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering the results |

#### Returns

`Promise`\<`ReviewMergeRequest`[]\>

A promise that resolves to an array of ReviewMergeRequest objects

#### Example

```typescript
const all = await client.reviewMerge.getAll({ status: 'approved' });
```

***

### getByAgent()

```ts
getByAgent(agentId: string): Promise<ReviewMergeRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:84

Retrieves all review-merge requests associated with a specific agent.

Filters requests by the agent that created or is assigned to them. Useful for
building agent-specific review dashboards or tracking an agent's review workload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent to filter by |

#### Returns

`Promise`\<`ReviewMergeRequest`[]\>

A promise that resolves to an array of ReviewMergeRequest objects for the agent

#### Example

```typescript
const agentReviews = await client.reviewMerge.getByAgent('agent-123');
```

***

### getBySwarm()

```ts
getBySwarm(swarmId: string): Promise<ReviewMergeRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:97

Retrieves all review-merge requests associated with a specific swarm.

Filters requests by the swarm that generated them. Useful for monitoring review
activity within a particular swarm context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm to filter by |

#### Returns

`Promise`\<`ReviewMergeRequest`[]\>

A promise that resolves to an array of ReviewMergeRequest objects for the swarm

***

### getPending()

```ts
getPending(): Promise<ReviewMergeRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:28

Retrieves all pending review-merge requests.

Returns requests that are awaiting review and have not yet been approved or rejected.
Use this to build a review queue or dashboard showing outstanding work.

#### Returns

`Promise`\<`ReviewMergeRequest`[]\>

A promise that resolves to an array of pending ReviewMergeRequest objects

#### Example

```typescript
const pending = await client.reviewMerge.getPending();
console.log(`${pending.length} reviews awaiting action`);
```

***

### getPheromoneTypes()

```ts
getPheromoneTypes(): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:109

Retrieves the list of available pheromone types.

Pheromones are tags or signals that can be attached to review requests to communicate
metadata to other agents. This returns the set of recognized pheromone type strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of pheromone type name strings

***

### getReadyToMerge()

```ts
getReadyToMerge(): Promise<ReviewMergeRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:48

Retrieves all review-merge requests that are approved and ready to merge.

Filters for requests that have passed all review criteria and can be merged immediately.
Useful for automated merge pipelines or merge-ready dashboards.

#### Returns

`Promise`\<`ReviewMergeRequest`[]\>

A promise that resolves to an array of merge-ready ReviewMergeRequest objects

#### Example

```typescript
const ready = await client.reviewMerge.getReadyToMerge();
for (const request of ready) {
  await client.reviewMerge.merge(request.id);
}
```

***

### getStatistics()

```ts
getStatistics(): Promise<ReviewMergeStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:66

Retrieves aggregate statistics about review-merge requests.

Returns counts and metrics across all review states, useful for monitoring review
throughput and identifying bottlenecks in the review process.

#### Returns

`Promise`\<`ReviewMergeStatistics`\>

A promise that resolves to a ReviewMergeStatistics object with aggregate data

#### Example

```typescript
const stats = await client.reviewMerge.getStatistics();
console.log(`Total: ${stats.total}, Pending: ${stats.pending}`);
```

***

### lock()

```ts
lock(id: string, data?: LockReviewRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:251

Locks a review-merge request to prevent concurrent modifications.

Acquiring a lock ensures exclusive access while performing operations on the request.
Other agents attempting to modify a locked request will be blocked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request to lock |
| `data?` | `LockReviewRequest` | Optional lock configuration parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the lock has been acquired

***

### merge()

```ts
merge(id: string, data?: MergeReviewRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:404

Merges an approved review-merge request.

Executes the final merge operation on a review that has been approved and is ready
to merge. This applies the associated changes to the target branch or codebase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request to merge |
| `data?` | `MergeReviewRequest` | Optional merge configuration parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the merge is complete

#### Example

```typescript
await client.reviewMerge.merge('review-789');
```

***

### rejectProposedJob()

```ts
rejectProposedJob(
   id: string, 
   proposedJobId: string, 
data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:348

Rejects a proposed job on a review-merge request.

Marks the proposed job as rejected, preventing it from being converted into an actual job.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the proposed job to reject |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional data such as rejection reason |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the proposed job has been rejected

***

### rejectUnlockRequest()

```ts
rejectUnlockRequest(
   id: string, 
   unlockRequestId: string, 
data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:306

Rejects an unlock request, keeping the review-merge request locked.

The lock holder calls this to deny an unlock request from another agent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `unlockRequestId` | `string` | The unique identifier of the unlock request to reject |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional data such as rejection reason |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the unlock request has been rejected

***

### removeLinkedJob()

```ts
removeLinkedJob(id: string, jobId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:431

Removes a linked job from a review-merge request.

Disassociates a previously linked job from the review request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `jobId` | `string` | The unique identifier of the job to unlink |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the job has been unlinked

***

### removePheromone()

```ts
removePheromone(id: string, type: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:237

Removes a pheromone tag from a review-merge request.

Detaches a previously added pheromone by its type string from the review request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `type` | `string` | The pheromone type string to remove |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pheromone has been removed

***

### unlock()

```ts
unlock(id: string, data?: UnlockReviewRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:264

Unlocks a previously locked review-merge request.

Releases the lock on a review request, allowing other agents to modify it again.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request to unlock |
| `data?` | `UnlockReviewRequest` | Optional unlock parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the lock has been released

***

### update()

```ts
update(id: string, data: UpdateReviewMergeRequest): Promise<ReviewMergeRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:176

Updates an existing review-merge request.

Modifies the mutable fields of a review-merge request such as title, description,
or other metadata. Does not change the review status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request to update |
| `data` | `UpdateReviewMergeRequest` | The fields to update |

#### Returns

`Promise`\<`ReviewMergeRequest`\>

A promise that resolves to the updated ReviewMergeRequest

***

### updateStatus()

```ts
updateStatus(id: string, data: UpdateReviewStatusRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/review-merge.api.ts:210

Updates the status of a review-merge request.

Transitions the request to a new review status (e.g., approved, rejected, needs-changes).
This is the primary mechanism for progressing a request through the review workflow.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `UpdateReviewStatusRequest` | The status update payload containing the new status |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the status has been updated

#### Example

```typescript
await client.reviewMerge.updateStatus('review-789', {
  status: 'approved',
});
```
