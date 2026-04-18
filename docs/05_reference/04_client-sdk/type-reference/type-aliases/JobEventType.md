---
title: JobEventType
---

[**@codebolt/client-sdk**](../index)

***

# Type Alias: JobEventType

```ts
type JobEventType = 
  | "created"
  | "status_changed"
  | "priority_changed"
  | "type_changed"
  | "assignee_added"
  | "assignee_removed"
  | "label_added"
  | "label_removed"
  | "description_changed"
  | "pheromone_deposited"
  | "pheromone_removed"
  | "locked"
  | "unlocked"
  | "unlock_requested"
  | "bid_added"
  | "bid_withdrawn"
  | "bid_accepted"
  | "blocker_added"
  | "blocker_resolved"
  | "split_proposed"
  | "split_accepted"
  | "split_rejected"
  | "dependency_added"
  | "dependency_removed";
```

Defined in: CodeBolt/packages/clientsdk/src/types/job.ts:157

Job timeline event type
