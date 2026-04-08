---
title: reviewMergeRequest
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: reviewMergeRequest

```ts
const reviewMergeRequest: {
  addLinkedJob: (id: string, jobId: string) => Promise<{
     request: ReviewMergeRequest;
  }>;
  addReview: (id: string, feedback: AddReviewFeedback) => Promise<{
     request: ReviewMergeRequest;
  }>;
  byAgent: (agentId: string) => Promise<{
     requests: ReviewMergeRequest[];
     totalCount: number;
  }>;
  bySwarm: (swarmId: string) => Promise<{
     requests: ReviewMergeRequest[];
     totalCount: number;
  }>;
  create: (data: CreateReviewMergeRequest) => Promise<{
     request: ReviewMergeRequest;
  }>;
  delete: (id: string) => Promise<{
     deleted: boolean;
  }>;
  get: (id: string) => Promise<{
     request: ReviewMergeRequest;
  }>;
  list: (filters: ReviewMergeRequestFilters) => Promise<{
     requests: ReviewMergeRequest[];
     totalCount: number;
  }>;
  merge: (id: string, mergedBy: string) => Promise<{
     result: MergeResult;
  }>;
  pending: () => Promise<{
     requests: ReviewMergeRequest[];
     totalCount: number;
  }>;
  readyToMerge: () => Promise<{
     requests: ReviewMergeRequest[];
     totalCount: number;
  }>;
  removeLinkedJob: (id: string, jobId: string) => Promise<{
     request: ReviewMergeRequest;
  }>;
  statistics: () => Promise<{
     statistics: any;
  }>;
  update: (id: string, data: UpdateReviewMergeRequest) => Promise<{
     request: ReviewMergeRequest;
  }>;
  updateStatus: (id: string, status: ReviewRequestStatus) => Promise<{
     request: ReviewMergeRequest;
  }>;
};
```

Defined in: packages/codeboltjs/src/modules/reviewMergeRequest.ts:16

Review Merge Request service client for codeboltjs.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addlinkedjob"></a> `addLinkedJob()` | (`id`: `string`, `jobId`: `string`) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Add linked job | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:149](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L149) |
| <a id="addreview"></a> `addReview()` | (`id`: `string`, `feedback`: [`AddReviewFeedback`](../interfaces/AddReviewFeedback)) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Add review feedback | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:101](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L101) |
| <a id="byagent"></a> `byAgent()` | (`agentId`: `string`) => `Promise`\<\{ `requests`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest)[]; `totalCount`: `number`; \}\> | Get requests by agent | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:213](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L213) |
| <a id="byswarm"></a> `bySwarm()` | (`swarmId`: `string`) => `Promise`\<\{ `requests`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest)[]; `totalCount`: `number`; \}\> | Get requests by swarm | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:229](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L229) |
| <a id="create"></a> `create()` | (`data`: [`CreateReviewMergeRequest`](../interfaces/CreateReviewMergeRequest)) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Create a new review merge request | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:53](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L53) |
| <a id="delete"></a> `delete()` | (`id`: `string`) => `Promise`\<\{ `deleted`: `boolean`; \}\> | Delete a review merge request | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:85](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L85) |
| <a id="get"></a> `get()` | (`id`: `string`) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Get a single review merge request | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:37](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L37) |
| <a id="list"></a> `list()` | (`filters`: [`ReviewMergeRequestFilters`](../interfaces/ReviewMergeRequestFilters)) => `Promise`\<\{ `requests`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest)[]; `totalCount`: `number`; \}\> | List review merge requests | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:21](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L21) |
| <a id="merge"></a> `merge()` | (`id`: `string`, `mergedBy`: `string`) => `Promise`\<\{ `result`: [`MergeResult`](../interfaces/MergeResult); \}\> | Merge request | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:133](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L133) |
| <a id="pending"></a> `pending()` | () => `Promise`\<\{ `requests`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest)[]; `totalCount`: `number`; \}\> | Get pending reviews | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:181](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L181) |
| <a id="readytomerge"></a> `readyToMerge()` | () => `Promise`\<\{ `requests`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest)[]; `totalCount`: `number`; \}\> | Get ready to merge requests | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:197](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L197) |
| <a id="removelinkedjob"></a> `removeLinkedJob()` | (`id`: `string`, `jobId`: `string`) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Remove linked job | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:165](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L165) |
| <a id="statistics"></a> `statistics()` | () => `Promise`\<\{ `statistics`: `any`; \}\> | Get statistics | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:245](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L245) |
| <a id="update"></a> `update()` | (`id`: `string`, `data`: [`UpdateReviewMergeRequest`](../interfaces/UpdateReviewMergeRequest)) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Update an existing review merge request | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:69](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L69) |
| <a id="updatestatus"></a> `updateStatus()` | (`id`: `string`, `status`: [`ReviewRequestStatus`](../type-aliases/ReviewRequestStatus)) => `Promise`\<\{ `request`: [`ReviewMergeRequest`](../interfaces/ReviewMergeRequest); \}\> | Update status | [packages/codeboltjs/src/modules/reviewMergeRequest.ts:117](packages/codeboltjs/src/modules/reviewMergeRequest.ts#L117) |
