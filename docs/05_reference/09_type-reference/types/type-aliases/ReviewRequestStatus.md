---
title: ReviewRequestStatus
---

[**@codebolt/types**](../index)

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

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:9

Request status types representing the lifecycle of a review request
