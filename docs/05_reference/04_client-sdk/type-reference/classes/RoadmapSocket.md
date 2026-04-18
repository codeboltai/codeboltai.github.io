---
title: RoadmapSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: RoadmapSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:10

Roadmap WebSocket - Manage roadmap phases, features, and ideas.
Type-based protocol: send \{ type, data, requestId \}, receive \{ type:response, ... \}.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`RoadmapSocketEvents`\>

## Constructors

### Constructor

```ts
new RoadmapSocket(connectionManager: SocketConnectionManager, socketName: string): RoadmapSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:13

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'roadmap'` |

#### Returns

`RoadmapSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### createFeature()

```ts
createFeature(feature: CreateFeatureRequest & {
  phaseId: string;
}, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `feature` | `CreateFeatureRequest` & \{ `phaseId`: `string`; \} |
| `requestId?` | `string` |

#### Returns

`void`

***

### createIdea()

```ts
createIdea(idea: CreateIdeaRequest, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idea` | `CreateIdeaRequest` |
| `requestId?` | `string` |

#### Returns

`void`

***

### createPhase()

```ts
createPhase(phase: CreatePhaseRequest, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `phase` | `CreatePhaseRequest` |
| `requestId?` | `string` |

#### Returns

`void`

***

### deleteFeature()

```ts
deleteFeature(featureId: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:80

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `featureId` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### deleteIdea()

```ts
deleteIdea(ideaId: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ideaId` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### deletePhase()

```ts
deletePhase(phaseId: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `phaseId` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<RoadmapSocketEvents[K]>): boolean;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:54

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | `Parameters`\<`RoadmapSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getIdeas()

```ts
getIdeas(filter?: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getRoadmap()

```ts
getRoadmap(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### listenerCount()

```ts
listenerCount(event: string): number;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |

#### Returns

`number`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`listenerCount`](TypedEventEmitter.md#listenercount)

***

### moveFeature()

```ts
moveFeature(
   featureId: string, 
   targetPhaseId: string, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `featureId` | `string` |
| `targetPhaseId` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### moveIdeaToRoadmap()

```ts
moveIdeaToRoadmap(
   ideaId: string, 
   phaseId: string, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:111

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ideaId` | `string` |
| `phaseId` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: RoadmapSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `RoadmapSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: RoadmapSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:27

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `RoadmapSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: RoadmapSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:46

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `RoadmapSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### removeAllListeners()

```ts
removeAllListeners(event?: string): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `string` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`removeAllListeners`](TypedEventEmitter.md#removealllisteners)

***

### reviewIdea()

```ts
reviewIdea(
   ideaId: string, 
   review: ReviewIdeaRequest, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:108

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ideaId` | `string` |
| `review` | `ReviewIdeaRequest` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateFeature()

```ts
updateFeature(feature: UpdateFeatureRequest & {
  featureId: string;
}, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `feature` | `UpdateFeatureRequest` & \{ `featureId`: `string`; \} |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateIdea()

```ts
updateIdea(idea: UpdateIdeaRequest & {
  ideaId: string;
}, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idea` | `UpdateIdeaRequest` & \{ `ideaId`: `string`; \} |
| `requestId?` | `string` |

#### Returns

`void`

***

### updatePhase()

```ts
updatePhase(phase: UpdatePhaseRequest & {
  phaseId: string;
}, requestId?: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/roadmap.socket.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `phase` | `UpdatePhaseRequest` & \{ `phaseId`: `string`; \} |
| `requestId?` | `string` |

#### Returns

`void`
