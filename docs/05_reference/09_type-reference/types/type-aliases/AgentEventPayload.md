---
title: AgentEventPayload
---

[**@codebolt/types**](../index)

***

# Type Alias: AgentEventPayload

```ts
type AgentEventPayload = 
  | AgentMessagePayload
  | CalendarUpdatePayload
  | SystemNotificationPayload
  | TaskUpdatePayload
  | CustomEventPayload;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:142

Union type for all event payloads
