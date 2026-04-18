---
title: UnifiedEventEmitter
---

[**@codebolt/client-sdk**](../index)

***

# Class: UnifiedEventEmitter

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:19

## Constructors

### Constructor

```ts
new UnifiedEventEmitter(): UnifiedEventEmitter;
```

#### Returns

`UnifiedEventEmitter`

## Methods

### clear()

```ts
clear(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:85

#### Returns

`void`

***

### emitEvent()

```ts
emitEvent(event: SocketEvent): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`SocketEvent`](../interfaces/SocketEvent) |

#### Returns

`void`

***

### getAllEventListenersCount()

```ts
getAllEventListenersCount(): number;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:94

#### Returns

`number`

***

### getSubscriptionCount()

```ts
getSubscriptionCount(): number;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:90

#### Returns

`number`

***

### onAllEvents()

```ts
onAllEvents(callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)

***

### onEvents()

```ts
onEvents(filter: EventFilter, callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/core/unified-event-emitter.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`EventFilter`](../interfaces/EventFilter) |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)
