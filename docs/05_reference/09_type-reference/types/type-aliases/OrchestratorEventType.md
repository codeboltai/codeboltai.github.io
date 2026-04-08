---
title: OrchestratorEventType
---

[**@codebolt/types**](../index)

***

# Type Alias: OrchestratorEventType

```ts
type OrchestratorEventType = 
  | "orchestrator.list"
  | "orchestrator.get"
  | "orchestrator.getSettings"
  | "orchestrator.create"
  | "orchestrator.update"
  | "orchestrator.updateSettings"
  | "orchestrator.delete"
  | "orchestrator.updateStatus"
  | "orchestrator.updateCodeboltJs";
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/orchestrator.ts:31

Orchestrator event types - custom event strings for orchestrator operations.
The server parses `orchestrator.\<action\>` type strings.
