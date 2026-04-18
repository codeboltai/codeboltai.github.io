---
title: AgentPortfolioSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentPortfolioSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:10

Agent Portfolio WebSocket - Manage agent portfolios, testimonials, karma, talents.
Action-based protocol with subscribe/unsubscribe for live updates.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`AgentPortfolioSocketEvents`\>

## Constructors

### Constructor

```ts
new AgentPortfolioSocket(connectionManager: SocketConnectionManager): AgentPortfolioSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) |

#### Returns

`AgentPortfolioSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### addAppreciation()

```ts
addAppreciation(appreciation: SendAppreciationRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `appreciation` | `SendAppreciationRequest` |

#### Returns

`void`

***

### addKarma()

```ts
addKarma(karma: AwardKarmaRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `karma` | `AwardKarmaRequest` |

#### Returns

`void`

***

### addTalent()

```ts
addTalent(talent: AddTalentRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `talent` | `AddTalentRequest` |

#### Returns

`void`

***

### addTestimonial()

```ts
addTestimonial(testimonial: CreateTestimonialRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `testimonial` | `CreateTestimonialRequest` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<AgentPortfolioSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`AgentPortfolioSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### endorseTalent()

```ts
endorseTalent(endorsement: EndorseTalentRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `endorsement` | `EndorseTalentRequest` |

#### Returns

`void`

***

### getConversations()

```ts
getConversations(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### getPortfolio()

```ts
getPortfolio(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### getRanking()

```ts
getRanking(filter?: AgentRankingParams): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:49

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `AgentRankingParams` |

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

### off()

```ts
off<K>(event: K, listener: AgentPortfolioSocketEvents[K]): this;
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
| `listener` | `AgentPortfolioSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: AgentPortfolioSocketEvents[K]): this;
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
| `listener` | `AgentPortfolioSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: AgentPortfolioSocketEvents[K]): this;
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
| `listener` | `AgentPortfolioSocketEvents`\[`K`\] |

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

### subscribe()

```ts
subscribe(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### unsubscribe()

```ts
unsubscribe(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-portfolio.socket.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`
