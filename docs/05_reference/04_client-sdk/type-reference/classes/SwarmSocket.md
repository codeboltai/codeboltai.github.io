---
title: SwarmSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: SwarmSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:16

Swarm WebSocket - Socket.IO based swarm management.
Supports rooms, agent registration, team management, roles, spawn/termination requests.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`SwarmSocketEvents`\>

## Constructors

### Constructor

```ts
new SwarmSocket(baseUrl: string, options?: SocketIOClientOptions): SwarmSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseUrl` | `string` |
| `options?` | [`SocketIOClientOptions`](../interfaces/SocketIOClientOptions) |

#### Returns

`SwarmSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### approveSpawnRequest()

```ts
approveSpawnRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### approveTerminationRequest()

```ts
approveTerminationRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:180

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### assignRole()

```ts
assignRole(assignment: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `assignment` | `unknown` |

#### Returns

`void`

***

### connect()

```ts
connect(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:27

#### Returns

`Promise`\<`void`\>

***

### createSpawnRequest()

```ts
createSpawnRequest(request: CreateSpawnRequestBody): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:166

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `CreateSpawnRequestBody` |

#### Returns

`void`

***

### createTerminationRequest()

```ts
createTerminationRequest(request: CreateTerminationRequestBody): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:177

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `CreateTerminationRequestBody` |

#### Returns

`void`

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:108

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<SwarmSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`SwarmSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getSwarmConfig()

```ts
getSwarmConfig(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:149

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### getSwarmStatus()

```ts
getSwarmStatus(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:161

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### joinSwarm()

```ts
joinSwarm(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:114

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### joinTeam()

```ts
joinTeam(teamId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `teamId` | `string` |

#### Returns

`void`

***

### leaveSwarm()

```ts
leaveSwarm(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:117

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### leaveTeam()

```ts
leaveTeam(teamId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `teamId` | `string` |

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
off<K>(event: K, listener: SwarmSocketEvents[K]): this;
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
| `listener` | `SwarmSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: SwarmSocketEvents[K]): this;
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
| `listener` | `SwarmSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: SwarmSocketEvents[K]): this;
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
| `listener` | `SwarmSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### registerAgent()

```ts
registerAgent(agent: AgentRegistration): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agent` | `AgentRegistration` |

#### Returns

`void`

***

### rejectSpawnRequest()

```ts
rejectSpawnRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:172

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### rejectTerminationRequest()

```ts
rejectTerminationRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:183

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

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

### startSwarm()

```ts
startSwarm(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:155

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### stopSwarm()

```ts
stopSwarm(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:158

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### unassignRole()

```ts
unassignRole(assignment: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:144

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `assignment` | `unknown` |

#### Returns

`void`

***

### unregisterAgent()

```ts
unregisterAgent(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### updateAgentStatus()

```ts
updateAgentStatus(agentId: string, status: AgentStatusUpdateRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:128

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |
| `status` | `AgentStatusUpdateRequest` |

#### Returns

`void`

***

### updateSwarmConfig()

```ts
updateSwarmConfig(swarmId: string, config: Partial<SwarmConfig>): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/swarm.socket.ts:152

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |
| `config` | `Partial`\<`SwarmConfig`\> |

#### Returns

`void`
