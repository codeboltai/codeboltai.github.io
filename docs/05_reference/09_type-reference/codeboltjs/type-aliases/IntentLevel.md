---
title: IntentLevel
---

[**@codebolt/codeboltjs**](../index)

***

# Type Alias: IntentLevel

```ts
type IntentLevel = 1 | 2 | 3 | 4;
```

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/fileUpdateIntent.d.ts:12

Intent Level - determines behavior on overlap
1 = Advisory/Notification - Just informs others; no enforcement. Overlapping agents proceed but log warning.
2 = Soft Reservation - Prefer avoidance: Agents should pick another task or negotiate if overlap.
3 = Priority-Based - Higher-priority intent wins; lower one backs off or escalates.
4 = Hard Lock - Blocks others entirely (fallback to traditional locking).
