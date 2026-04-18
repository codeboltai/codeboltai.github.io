---
title: EventFilterMatcher
---

[**@codebolt/client-sdk**](../index)

***

# Class: EventFilterMatcher

Defined in: CodeBolt/packages/clientsdk/src/core/event-filter.ts:14

## Constructors

### Constructor

```ts
new EventFilterMatcher(): EventFilterMatcher;
```

#### Returns

`EventFilterMatcher`

## Methods

### matches()

```ts
static matches(filter: EventFilter, event: {
  data?: unknown;
  event: string;
  socket: string;
}): boolean;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-filter.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`EventFilter`](../interfaces/EventFilter) |
| `event` | \{ `data?`: `unknown`; `event`: `string`; `socket`: `string`; \} |
| `event.data?` | `unknown` |
| `event.event` | `string` |
| `event.socket` | `string` |

#### Returns

`boolean`
