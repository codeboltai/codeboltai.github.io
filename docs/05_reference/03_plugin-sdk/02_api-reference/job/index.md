---
title: Job API
---

# Job API

The `job` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`acceptBid`](./acceptBid) |  |
| [`acceptSplitProposal`](./acceptSplitProposal) |  |
| [`addBid`](./addBid) |  |
| [`addBlocker`](./addBlocker) |  |
| [`addDependency`](./addDependency) |  |
| [`addLabel`](./addLabel) |  |
| [`addPheromoneType`](./addPheromoneType) |  |
| [`addSplitProposal`](./addSplitProposal) |  |
| [`addUnlockRequest`](./addUnlockRequest) |  |
| [`approveUnlockRequest`](./approveUnlockRequest) |  |
| [`createJob`](./createJob) |  |
| [`createJobGroup`](./createJobGroup) |  |
| [`deleteJob`](./deleteJob) |  |
| [`deleteJobs`](./deleteJobs) |  |
| [`deleteSplitProposal`](./deleteSplitProposal) |  |
| [`deleteUnlockRequest`](./deleteUnlockRequest) |  |
| [`depositPheromone`](./depositPheromone) |  |
| [`getBlockedJobs`](./getBlockedJobs) |  |
| [`getJob`](./getJob) |  |
| [`getPheromones`](./getPheromones) |  |
| [`getPheromonesAggregated`](./getPheromonesAggregated) |  |
| [`getPheromonesAggregatedWithDecay`](./getPheromonesAggregatedWithDecay) |  |
| [`getPheromonesWithDecay`](./getPheromonesWithDecay) |  |
| [`getPheromoneTypes`](./getPheromoneTypes) |  |
| [`getReadyJobs`](./getReadyJobs) |  |
| [`isJobLocked`](./isJobLocked) |  |
| [`listBids`](./listBids) |  |
| [`listJobs`](./listJobs) |  |
| [`listJobsByPheromone`](./listJobsByPheromone) |  |
| [`listLabels`](./listLabels) |  |
| [`lockJob`](./lockJob) |  |
| [`rejectUnlockRequest`](./rejectUnlockRequest) |  |
| [`removeBlocker`](./removeBlocker) |  |
| [`removeDependency`](./removeDependency) |  |
| [`removeLabel`](./removeLabel) |  |
| [`removePheromone`](./removePheromone) |  |
| [`removePheromoneType`](./removePheromoneType) |  |
| [`resolveBlocker`](./resolveBlocker) |  |
| [`unlockJob`](./unlockJob) |  |
| [`updateJob`](./updateJob) |  |
| [`withdrawBid`](./withdrawBid) |  |

## Methods

---

### `acceptBid`

```typescript
plugin.job.acceptBid(jobId: string, bidId: string): Promise<JobBidAcceptResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bidId` | `string` | Yes |  |

**Returns:** `Promise<JobBidAcceptResponse>`

[Full reference →](./acceptBid)

---

### `acceptSplitProposal`

```typescript
plugin.job.acceptSplitProposal(jobId: string, proposalId: string): Promise<JobSplitAcceptResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

**Returns:** `Promise<JobSplitAcceptResponse>`

[Full reference →](./acceptSplitProposal)

---

### `addBid`

```typescript
plugin.job.addBid(jobId: string, bid: AddBidData): Promise<JobBidAddResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bid` | `AddBidData` | Yes |  |

**Returns:** `Promise<JobBidAddResponse>`

[Full reference →](./addBid)

---

### `addBlocker`

```typescript
plugin.job.addBlocker(jobId: string, blocker: AddBlockerData): Promise<JobBlockerAddResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blocker` | `AddBlockerData` | Yes |  |

**Returns:** `Promise<JobBlockerAddResponse>`

[Full reference →](./addBlocker)

---

### `addDependency`

```typescript
plugin.job.addDependency(jobId: string, targetId: string, type?: DependencyType): Promise<JobDependencyResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |
| `type` | `DependencyType` | No |  |

**Returns:** `Promise<JobDependencyResponse>`

[Full reference →](./addDependency)

---

### `addLabel`

```typescript
plugin.job.addLabel(label: string): Promise<JobLabelsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | Yes |  |

**Returns:** `Promise<JobLabelsResponse>`

[Full reference →](./addLabel)

---

### `addPheromoneType`

```typescript
plugin.job.addPheromoneType(data: AddPheromoneTypeData): Promise<JobPheromoneTypeResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddPheromoneTypeData` | Yes |  |

**Returns:** `Promise<JobPheromoneTypeResponse>`

[Full reference →](./addPheromoneType)

---

### `addSplitProposal`

```typescript
plugin.job.addSplitProposal(jobId: string, proposal: AddSplitProposalData): Promise<JobSplitProposeResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposal` | `AddSplitProposalData` | Yes |  |

**Returns:** `Promise<JobSplitProposeResponse>`

[Full reference →](./addSplitProposal)

---

### `addUnlockRequest`

```typescript
plugin.job.addUnlockRequest(jobId: string, request: AddUnlockRequestData): Promise<JobUnlockRequestAddResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `request` | `AddUnlockRequestData` | Yes |  |

**Returns:** `Promise<JobUnlockRequestAddResponse>`

[Full reference →](./addUnlockRequest)

---

### `approveUnlockRequest`

```typescript
plugin.job.approveUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestApproveResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |
| `respondedBy` | `string` | Yes |  |

**Returns:** `Promise<JobUnlockRequestApproveResponse>`

[Full reference →](./approveUnlockRequest)

---

### `createJob`

```typescript
plugin.job.createJob(groupId: string, data: CreateJobData): Promise<JobCreateResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |
| `data` | `CreateJobData` | Yes |  |

**Returns:** `Promise<JobCreateResponse>`

[Full reference →](./createJob)

---

### `createJobGroup`

```typescript
plugin.job.createJobGroup(data: CreateJobGroupData): Promise<JobGroupCreateResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobGroupData` | Yes |  |

**Returns:** `Promise<JobGroupCreateResponse>`

[Full reference →](./createJobGroup)

---

### `deleteJob`

```typescript
plugin.job.deleteJob(jobId: string): Promise<JobDeleteResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobDeleteResponse>`

[Full reference →](./deleteJob)

---

### `deleteJobs`

```typescript
plugin.job.deleteJobs(jobIds: string[]): Promise<JobDeleteBulkResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobIds` | `string[]` | Yes |  |

**Returns:** `Promise<JobDeleteBulkResponse>`

[Full reference →](./deleteJobs)

---

### `deleteSplitProposal`

```typescript
plugin.job.deleteSplitProposal(jobId: string, proposalId: string): Promise<JobSplitDeleteResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

**Returns:** `Promise<JobSplitDeleteResponse>`

[Full reference →](./deleteSplitProposal)

---

### `deleteUnlockRequest`

```typescript
plugin.job.deleteUnlockRequest(jobId: string, unlockRequestId: string): Promise<JobUnlockRequestDeleteResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |

**Returns:** `Promise<JobUnlockRequestDeleteResponse>`

[Full reference →](./deleteUnlockRequest)

---

### `depositPheromone`

```typescript
plugin.job.depositPheromone(jobId: string, deposit: DepositPheromoneData): Promise<JobPheromoneDepositResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `deposit` | `DepositPheromoneData` | Yes |  |

**Returns:** `Promise<JobPheromoneDepositResponse>`

[Full reference →](./depositPheromone)

---

### `getBlockedJobs`

```typescript
plugin.job.getBlockedJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | `JobListFilters` | Yes |  _(default: `{}`)_ |

**Returns:** `Promise<JobReadyBlockedResponse>`

[Full reference →](./getBlockedJobs)

---

### `getJob`

```typescript
plugin.job.getJob(jobId: string): Promise<JobShowResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobShowResponse>`

[Full reference →](./getJob)

---

### `getPheromones`

```typescript
plugin.job.getPheromones(jobId: string): Promise<JobPheromoneListResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobPheromoneListResponse>`

[Full reference →](./getPheromones)

---

### `getPheromonesAggregated`

```typescript
plugin.job.getPheromonesAggregated(jobId: string): Promise<JobPheromoneAggregatedResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobPheromoneAggregatedResponse>`

[Full reference →](./getPheromonesAggregated)

---

### `getPheromonesAggregatedWithDecay`

```typescript
plugin.job.getPheromonesAggregatedWithDecay(jobId: string): Promise<JobPheromoneAggregatedResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobPheromoneAggregatedResponse>`

[Full reference →](./getPheromonesAggregatedWithDecay)

---

### `getPheromonesWithDecay`

```typescript
plugin.job.getPheromonesWithDecay(jobId: string): Promise<JobPheromoneListResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobPheromoneListResponse>`

[Full reference →](./getPheromonesWithDecay)

---

### `getPheromoneTypes`

```typescript
plugin.job.getPheromoneTypes(): Promise<JobPheromoneTypesResponse>
```



_No parameters._

**Returns:** `Promise<JobPheromoneTypesResponse>`

[Full reference →](./getPheromoneTypes)

---

### `getReadyJobs`

```typescript
plugin.job.getReadyJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | `JobListFilters` | Yes |  _(default: `{}`)_ |

**Returns:** `Promise<JobReadyBlockedResponse>`

[Full reference →](./getReadyJobs)

---

### `isJobLocked`

```typescript
plugin.job.isJobLocked(jobId: string): Promise<JobLockCheckResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobLockCheckResponse>`

[Full reference →](./isJobLocked)

---

### `listBids`

```typescript
plugin.job.listBids(jobId: string): Promise<JobBidListResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

**Returns:** `Promise<JobBidListResponse>`

[Full reference →](./listBids)

---

### `listJobs`

```typescript
plugin.job.listJobs(filters: JobListFilters): Promise<JobListResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | `JobListFilters` | Yes |  _(default: `{}`)_ |

**Returns:** `Promise<JobListResponse>`

[Full reference →](./listJobs)

---

### `listJobsByPheromone`

```typescript
plugin.job.listJobsByPheromone(type: string, minIntensity?: number): Promise<JobPheromoneSearchResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes |  |
| `minIntensity` | `number` | No |  |

**Returns:** `Promise<JobPheromoneSearchResponse>`

[Full reference →](./listJobsByPheromone)

---

### `listLabels`

```typescript
plugin.job.listLabels(): Promise<JobLabelsResponse>
```



_No parameters._

**Returns:** `Promise<JobLabelsResponse>`

[Full reference →](./listLabels)

---

### `lockJob`

```typescript
plugin.job.lockJob(jobId: string, agentId: string, agentName?: string): Promise<JobLockAcquireResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `agentId` | `string` | Yes |  |
| `agentName` | `string` | No |  |

**Returns:** `Promise<JobLockAcquireResponse>`

[Full reference →](./lockJob)

---

### `rejectUnlockRequest`

```typescript
plugin.job.rejectUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestRejectResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |
| `respondedBy` | `string` | Yes |  |

**Returns:** `Promise<JobUnlockRequestRejectResponse>`

[Full reference →](./rejectUnlockRequest)

---

### `removeBlocker`

```typescript
plugin.job.removeBlocker(jobId: string, blockerId: string): Promise<JobBlockerRemoveResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blockerId` | `string` | Yes |  |

**Returns:** `Promise<JobBlockerRemoveResponse>`

[Full reference →](./removeBlocker)

---

### `removeDependency`

```typescript
plugin.job.removeDependency(jobId: string, targetId: string): Promise<JobDependencyResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |

**Returns:** `Promise<JobDependencyResponse>`

[Full reference →](./removeDependency)

---

### `removeLabel`

```typescript
plugin.job.removeLabel(label: string): Promise<JobLabelsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | Yes |  |

**Returns:** `Promise<JobLabelsResponse>`

[Full reference →](./removeLabel)

---

### `removePheromone`

```typescript
plugin.job.removePheromone(jobId: string, type: string, depositedBy?: string): Promise<JobPheromoneRemoveResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `depositedBy` | `string` | No |  |

**Returns:** `Promise<JobPheromoneRemoveResponse>`

[Full reference →](./removePheromone)

---

### `removePheromoneType`

```typescript
plugin.job.removePheromoneType(name: string): Promise<JobPheromoneTypeResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

**Returns:** `Promise<JobPheromoneTypeResponse>`

[Full reference →](./removePheromoneType)

---

### `resolveBlocker`

```typescript
plugin.job.resolveBlocker(jobId: string, blockerId: string, resolvedBy: string): Promise<JobBlockerResolveResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blockerId` | `string` | Yes |  |
| `resolvedBy` | `string` | Yes |  |

**Returns:** `Promise<JobBlockerResolveResponse>`

[Full reference →](./resolveBlocker)

---

### `unlockJob`

```typescript
plugin.job.unlockJob(jobId: string, agentId: string): Promise<JobLockReleaseResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `agentId` | `string` | Yes |  |

**Returns:** `Promise<JobLockReleaseResponse>`

[Full reference →](./unlockJob)

---

### `updateJob`

```typescript
plugin.job.updateJob(jobId: string, data: UpdateJobData): Promise<JobUpdateResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `data` | `UpdateJobData` | Yes |  |

**Returns:** `Promise<JobUpdateResponse>`

[Full reference →](./updateJob)

---

### `withdrawBid`

```typescript
plugin.job.withdrawBid(jobId: string, bidId: string): Promise<JobBidWithdrawResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bidId` | `string` | Yes |  |

**Returns:** `Promise<JobBidWithdrawResponse>`

[Full reference →](./withdrawBid)

