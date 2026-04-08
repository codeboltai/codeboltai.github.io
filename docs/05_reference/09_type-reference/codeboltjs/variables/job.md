---
title: job
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: job

```ts
const job: {
  acceptBid: (jobId: string, bidId: string) => Promise<JobBidAcceptResponse>;
  acceptSplitProposal: (jobId: string, proposalId: string) => Promise<JobSplitAcceptResponse>;
  addBid: (jobId: string, bid: AddBidData) => Promise<JobBidAddResponse>;
  addBlocker: (jobId: string, blocker: AddBlockerData) => Promise<JobBlockerAddResponse>;
  addDependency: (jobId: string, targetId: string, type?: DependencyType) => Promise<JobDependencyResponse>;
  addLabel: (label: string) => Promise<JobLabelsResponse>;
  addPheromoneType: (data: AddPheromoneTypeData) => Promise<JobPheromoneTypeResponse>;
  addSplitProposal: (jobId: string, proposal: AddSplitProposalData) => Promise<JobSplitProposeResponse>;
  addUnlockRequest: (jobId: string, request: AddUnlockRequestData) => Promise<JobUnlockRequestAddResponse>;
  approveUnlockRequest: (jobId: string, unlockRequestId: string, respondedBy: string) => Promise<JobUnlockRequestApproveResponse>;
  createJob: (groupId: string, data: CreateJobData) => Promise<JobCreateResponse>;
  createJobGroup: (data: CreateJobGroupData) => Promise<JobGroupCreateResponse>;
  deleteJob: (jobId: string) => Promise<JobDeleteResponse>;
  deleteJobs: (jobIds: string[]) => Promise<JobDeleteBulkResponse>;
  deleteSplitProposal: (jobId: string, proposalId: string) => Promise<JobSplitDeleteResponse>;
  deleteUnlockRequest: (jobId: string, unlockRequestId: string) => Promise<JobUnlockRequestDeleteResponse>;
  depositPheromone: (jobId: string, deposit: DepositPheromoneData) => Promise<JobPheromoneDepositResponse>;
  getBlockedJobs: (filters: JobListFilters) => Promise<JobReadyBlockedResponse>;
  getJob: (jobId: string) => Promise<JobShowResponse>;
  getPheromones: (jobId: string) => Promise<JobPheromoneListResponse>;
  getPheromonesAggregated: (jobId: string) => Promise<JobPheromoneAggregatedResponse>;
  getPheromonesAggregatedWithDecay: (jobId: string) => Promise<JobPheromoneAggregatedResponse>;
  getPheromonesWithDecay: (jobId: string) => Promise<JobPheromoneListResponse>;
  getPheromoneTypes: () => Promise<JobPheromoneTypesResponse>;
  getReadyJobs: (filters: JobListFilters) => Promise<JobReadyBlockedResponse>;
  isJobLocked: (jobId: string) => Promise<JobLockCheckResponse>;
  listBids: (jobId: string) => Promise<JobBidListResponse>;
  listJobs: (filters: JobListFilters) => Promise<JobListResponse>;
  listJobsByPheromone: (type: string, minIntensity?: number) => Promise<JobPheromoneSearchResponse>;
  listLabels: () => Promise<JobLabelsResponse>;
  lockJob: (jobId: string, agentId: string, agentName?: string) => Promise<JobLockAcquireResponse>;
  rejectUnlockRequest: (jobId: string, unlockRequestId: string, respondedBy: string) => Promise<JobUnlockRequestRejectResponse>;
  removeBlocker: (jobId: string, blockerId: string) => Promise<JobBlockerRemoveResponse>;
  removeDependency: (jobId: string, targetId: string) => Promise<JobDependencyResponse>;
  removeLabel: (label: string) => Promise<JobLabelsResponse>;
  removePheromone: (jobId: string, type: string, depositedBy?: string) => Promise<JobPheromoneRemoveResponse>;
  removePheromoneType: (name: string) => Promise<JobPheromoneTypeResponse>;
  resolveBlocker: (jobId: string, blockerId: string, resolvedBy: string) => Promise<JobBlockerResolveResponse>;
  unlockJob: (jobId: string, agentId: string) => Promise<JobLockReleaseResponse>;
  updateJob: (jobId: string, data: UpdateJobData) => Promise<JobUpdateResponse>;
  withdrawBid: (jobId: string, bidId: string) => Promise<JobBidWithdrawResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/job.ts:57

Job service client for codeboltjs.
Mirrors backend CLI job operations exposed via WebSocket (jobEvent).
Follows the same pattern as task.ts and todo.ts modules.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="acceptbid"></a> `acceptBid()` | (`jobId`: `string`, `bidId`: `string`) => `Promise`\<[`JobBidAcceptResponse`](../interfaces/JobBidAcceptResponse)\> | [packages/codeboltjs/src/modules/job.ts:570](packages/codeboltjs/src/modules/job.ts#L570) |
| <a id="acceptsplitproposal"></a> `acceptSplitProposal()` | (`jobId`: `string`, `proposalId`: `string`) => `Promise`\<[`JobSplitAcceptResponse`](../interfaces/JobSplitAcceptResponse)\> | [packages/codeboltjs/src/modules/job.ts:428](packages/codeboltjs/src/modules/job.ts#L428) |
| <a id="addbid"></a> `addBid()` | (`jobId`: `string`, `bid`: [`AddBidData`](../interfaces/AddBidData)) => `Promise`\<[`JobBidAddResponse`](../interfaces/JobBidAddResponse)\> | [packages/codeboltjs/src/modules/job.ts:544](packages/codeboltjs/src/modules/job.ts#L544) |
| <a id="addblocker"></a> `addBlocker()` | (`jobId`: `string`, `blocker`: [`AddBlockerData`](../interfaces/AddBlockerData)) => `Promise`\<[`JobBlockerAddResponse`](../interfaces/JobBlockerAddResponse)\> | [packages/codeboltjs/src/modules/job.ts:600](packages/codeboltjs/src/modules/job.ts#L600) |
| <a id="adddependency"></a> `addDependency()` | (`jobId`: `string`, `targetId`: `string`, `type?`: [`DependencyType`](../type-aliases/DependencyType)) => `Promise`\<[`JobDependencyResponse`](../interfaces/JobDependencyResponse)\> | [packages/codeboltjs/src/modules/job.ts:161](packages/codeboltjs/src/modules/job.ts#L161) |
| <a id="addlabel"></a> `addLabel()` | (`label`: `string`) => `Promise`\<[`JobLabelsResponse`](../interfaces/JobLabelsResponse)\> | [packages/codeboltjs/src/modules/job.ts:221](packages/codeboltjs/src/modules/job.ts#L221) |
| <a id="addpheromonetype"></a> `addPheromoneType()` | (`data`: [`AddPheromoneTypeData`](../interfaces/AddPheromoneTypeData)) => `Promise`\<[`JobPheromoneTypeResponse`](../interfaces/JobPheromoneTypeResponse)\> | [packages/codeboltjs/src/modules/job.ts:277](packages/codeboltjs/src/modules/job.ts#L277) |
| <a id="addsplitproposal"></a> `addSplitProposal()` | (`jobId`: `string`, `proposal`: [`AddSplitProposalData`](../interfaces/AddSplitProposalData)) => `Promise`\<[`JobSplitProposeResponse`](../interfaces/JobSplitProposeResponse)\> | [packages/codeboltjs/src/modules/job.ts:402](packages/codeboltjs/src/modules/job.ts#L402) |
| <a id="addunlockrequest"></a> `addUnlockRequest()` | (`jobId`: `string`, `request`: [`AddUnlockRequestData`](../interfaces/AddUnlockRequestData)) => `Promise`\<[`JobUnlockRequestAddResponse`](../interfaces/JobUnlockRequestAddResponse)\> | [packages/codeboltjs/src/modules/job.ts:488](packages/codeboltjs/src/modules/job.ts#L488) |
| <a id="approveunlockrequest"></a> `approveUnlockRequest()` | (`jobId`: `string`, `unlockRequestId`: `string`, `respondedBy`: `string`) => `Promise`\<[`JobUnlockRequestApproveResponse`](../interfaces/JobUnlockRequestApproveResponse)\> | [packages/codeboltjs/src/modules/job.ts:501](packages/codeboltjs/src/modules/job.ts#L501) |
| <a id="createjob"></a> `createJob()` | (`groupId`: `string`, `data`: [`CreateJobData`](../interfaces/CreateJobData)) => `Promise`\<[`JobCreateResponse`](../interfaces/JobCreateResponse)\> | [packages/codeboltjs/src/modules/job.ts:62](packages/codeboltjs/src/modules/job.ts#L62) |
| <a id="createjobgroup"></a> `createJobGroup()` | (`data`: [`CreateJobGroupData`](../interfaces/CreateJobGroupData)) => `Promise`\<[`JobGroupCreateResponse`](../interfaces/JobGroupCreateResponse)\> | [packages/codeboltjs/src/modules/job.ts:144](packages/codeboltjs/src/modules/job.ts#L144) |
| <a id="deletejob"></a> `deleteJob()` | (`jobId`: `string`) => `Promise`\<[`JobDeleteResponse`](../interfaces/JobDeleteResponse)\> | [packages/codeboltjs/src/modules/job.ts:101](packages/codeboltjs/src/modules/job.ts#L101) |
| <a id="deletejobs"></a> `deleteJobs()` | (`jobIds`: `string`[]) => `Promise`\<[`JobDeleteBulkResponse`](../interfaces/JobDeleteBulkResponse)\> | [packages/codeboltjs/src/modules/job.ts:114](packages/codeboltjs/src/modules/job.ts#L114) |
| <a id="deletesplitproposal"></a> `deleteSplitProposal()` | (`jobId`: `string`, `proposalId`: `string`) => `Promise`\<[`JobSplitDeleteResponse`](../interfaces/JobSplitDeleteResponse)\> | [packages/codeboltjs/src/modules/job.ts:415](packages/codeboltjs/src/modules/job.ts#L415) |
| <a id="deleteunlockrequest"></a> `deleteUnlockRequest()` | (`jobId`: `string`, `unlockRequestId`: `string`) => `Promise`\<[`JobUnlockRequestDeleteResponse`](../interfaces/JobUnlockRequestDeleteResponse)\> | [packages/codeboltjs/src/modules/job.ts:527](packages/codeboltjs/src/modules/job.ts#L527) |
| <a id="depositpheromone"></a> `depositPheromone()` | (`jobId`: `string`, `deposit`: [`DepositPheromoneData`](../interfaces/DepositPheromoneData)) => `Promise`\<[`JobPheromoneDepositResponse`](../interfaces/JobPheromoneDepositResponse)\> | [packages/codeboltjs/src/modules/job.ts:307](packages/codeboltjs/src/modules/job.ts#L307) |
| <a id="getblockedjobs"></a> `getBlockedJobs()` | (`filters`: [`JobListFilters`](../interfaces/JobListFilters)) => `Promise`\<[`JobReadyBlockedResponse`](../interfaces/JobReadyBlockedResponse)\> | [packages/codeboltjs/src/modules/job.ts:204](packages/codeboltjs/src/modules/job.ts#L204) |
| <a id="getjob"></a> `getJob()` | (`jobId`: `string`) => `Promise`\<[`JobShowResponse`](../interfaces/JobShowResponse)\> | [packages/codeboltjs/src/modules/job.ts:75](packages/codeboltjs/src/modules/job.ts#L75) |
| <a id="getpheromones"></a> `getPheromones()` | (`jobId`: `string`) => `Promise`\<[`JobPheromoneListResponse`](../interfaces/JobPheromoneListResponse)\> | [packages/codeboltjs/src/modules/job.ts:333](packages/codeboltjs/src/modules/job.ts#L333) |
| <a id="getpheromonesaggregated"></a> `getPheromonesAggregated()` | (`jobId`: `string`) => `Promise`\<[`JobPheromoneAggregatedResponse`](../interfaces/JobPheromoneAggregatedResponse)\> | [packages/codeboltjs/src/modules/job.ts:346](packages/codeboltjs/src/modules/job.ts#L346) |
| <a id="getpheromonesaggregatedwithdecay"></a> `getPheromonesAggregatedWithDecay()` | (`jobId`: `string`) => `Promise`\<[`JobPheromoneAggregatedResponse`](../interfaces/JobPheromoneAggregatedResponse)\> | [packages/codeboltjs/src/modules/job.ts:385](packages/codeboltjs/src/modules/job.ts#L385) |
| <a id="getpheromoneswithdecay"></a> `getPheromonesWithDecay()` | (`jobId`: `string`) => `Promise`\<[`JobPheromoneListResponse`](../interfaces/JobPheromoneListResponse)\> | [packages/codeboltjs/src/modules/job.ts:372](packages/codeboltjs/src/modules/job.ts#L372) |
| <a id="getpheromonetypes"></a> `getPheromoneTypes()` | () => `Promise`\<[`JobPheromoneTypesResponse`](../interfaces/JobPheromoneTypesResponse)\> | [packages/codeboltjs/src/modules/job.ts:264](packages/codeboltjs/src/modules/job.ts#L264) |
| <a id="getreadyjobs"></a> `getReadyJobs()` | (`filters`: [`JobListFilters`](../interfaces/JobListFilters)) => `Promise`\<[`JobReadyBlockedResponse`](../interfaces/JobReadyBlockedResponse)\> | [packages/codeboltjs/src/modules/job.ts:191](packages/codeboltjs/src/modules/job.ts#L191) |
| <a id="isjoblocked"></a> `isJobLocked()` | (`jobId`: `string`) => `Promise`\<[`JobLockCheckResponse`](../interfaces/JobLockCheckResponse)\> | [packages/codeboltjs/src/modules/job.ts:471](packages/codeboltjs/src/modules/job.ts#L471) |
| <a id="listbids"></a> `listBids()` | (`jobId`: `string`) => `Promise`\<[`JobBidListResponse`](../interfaces/JobBidListResponse)\> | [packages/codeboltjs/src/modules/job.ts:583](packages/codeboltjs/src/modules/job.ts#L583) |
| <a id="listjobs"></a> `listJobs()` | (`filters`: [`JobListFilters`](../interfaces/JobListFilters)) => `Promise`\<[`JobListResponse`](../interfaces/JobListResponse)\> | [packages/codeboltjs/src/modules/job.ts:127](packages/codeboltjs/src/modules/job.ts#L127) |
| <a id="listjobsbypheromone"></a> `listJobsByPheromone()` | (`type`: `string`, `minIntensity?`: `number`) => `Promise`\<[`JobPheromoneSearchResponse`](../interfaces/JobPheromoneSearchResponse)\> | [packages/codeboltjs/src/modules/job.ts:359](packages/codeboltjs/src/modules/job.ts#L359) |
| <a id="listlabels"></a> `listLabels()` | () => `Promise`\<[`JobLabelsResponse`](../interfaces/JobLabelsResponse)\> | [packages/codeboltjs/src/modules/job.ts:247](packages/codeboltjs/src/modules/job.ts#L247) |
| <a id="lockjob"></a> `lockJob()` | (`jobId`: `string`, `agentId`: `string`, `agentName?`: `string`) => `Promise`\<[`JobLockAcquireResponse`](../interfaces/JobLockAcquireResponse)\> | [packages/codeboltjs/src/modules/job.ts:445](packages/codeboltjs/src/modules/job.ts#L445) |
| <a id="rejectunlockrequest"></a> `rejectUnlockRequest()` | (`jobId`: `string`, `unlockRequestId`: `string`, `respondedBy`: `string`) => `Promise`\<[`JobUnlockRequestRejectResponse`](../interfaces/JobUnlockRequestRejectResponse)\> | [packages/codeboltjs/src/modules/job.ts:514](packages/codeboltjs/src/modules/job.ts#L514) |
| <a id="removeblocker"></a> `removeBlocker()` | (`jobId`: `string`, `blockerId`: `string`) => `Promise`\<[`JobBlockerRemoveResponse`](../interfaces/JobBlockerRemoveResponse)\> | [packages/codeboltjs/src/modules/job.ts:613](packages/codeboltjs/src/modules/job.ts#L613) |
| <a id="removedependency"></a> `removeDependency()` | (`jobId`: `string`, `targetId`: `string`) => `Promise`\<[`JobDependencyResponse`](../interfaces/JobDependencyResponse)\> | [packages/codeboltjs/src/modules/job.ts:174](packages/codeboltjs/src/modules/job.ts#L174) |
| <a id="removelabel"></a> `removeLabel()` | (`label`: `string`) => `Promise`\<[`JobLabelsResponse`](../interfaces/JobLabelsResponse)\> | [packages/codeboltjs/src/modules/job.ts:234](packages/codeboltjs/src/modules/job.ts#L234) |
| <a id="removepheromone"></a> `removePheromone()` | (`jobId`: `string`, `type`: `string`, `depositedBy?`: `string`) => `Promise`\<[`JobPheromoneRemoveResponse`](../interfaces/JobPheromoneRemoveResponse)\> | [packages/codeboltjs/src/modules/job.ts:320](packages/codeboltjs/src/modules/job.ts#L320) |
| <a id="removepheromonetype"></a> `removePheromoneType()` | (`name`: `string`) => `Promise`\<[`JobPheromoneTypeResponse`](../interfaces/JobPheromoneTypeResponse)\> | [packages/codeboltjs/src/modules/job.ts:290](packages/codeboltjs/src/modules/job.ts#L290) |
| <a id="resolveblocker"></a> `resolveBlocker()` | (`jobId`: `string`, `blockerId`: `string`, `resolvedBy`: `string`) => `Promise`\<[`JobBlockerResolveResponse`](../interfaces/JobBlockerResolveResponse)\> | [packages/codeboltjs/src/modules/job.ts:626](packages/codeboltjs/src/modules/job.ts#L626) |
| <a id="unlockjob"></a> `unlockJob()` | (`jobId`: `string`, `agentId`: `string`) => `Promise`\<[`JobLockReleaseResponse`](../interfaces/JobLockReleaseResponse)\> | [packages/codeboltjs/src/modules/job.ts:458](packages/codeboltjs/src/modules/job.ts#L458) |
| <a id="updatejob"></a> `updateJob()` | (`jobId`: `string`, `data`: [`UpdateJobData`](../interfaces/UpdateJobData)) => `Promise`\<[`JobUpdateResponse`](../interfaces/JobUpdateResponse)\> | [packages/codeboltjs/src/modules/job.ts:88](packages/codeboltjs/src/modules/job.ts#L88) |
| <a id="withdrawbid"></a> `withdrawBid()` | (`jobId`: `string`, `bidId`: `string`) => `Promise`\<[`JobBidWithdrawResponse`](../interfaces/JobBidWithdrawResponse)\> | [packages/codeboltjs/src/modules/job.ts:557](packages/codeboltjs/src/modules/job.ts#L557) |
