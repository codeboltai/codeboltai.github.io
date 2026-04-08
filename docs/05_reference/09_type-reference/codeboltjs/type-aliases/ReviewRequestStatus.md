---
title: ReviewRequestStatus
---

[**@codebolt/codeboltjs**](../index)

***

# Type Alias: ReviewRequestStatus

```ts
type ReviewRequestStatus = 
  | "draft"
  | "pending_review"
  | "in_review"
  | "changes_requested"
  | "approved"
  | "review_completed"
  | "merged"
  | "rejected"
  | "closed";
```

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:8

Request status types representing the lifecycle of a review request
