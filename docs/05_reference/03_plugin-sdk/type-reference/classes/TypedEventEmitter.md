---
title: TypedEventEmitter
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: TypedEventEmitter\<T\>

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:21

A strongly-typed event emitter.

## Example

```ts
interface MyEvents {
  data: (payload: Buffer) => void;
  error: (err: Error) => void;
}

class MyEmitter extends TypedEventEmitter<MyEvents> {}

const e = new MyEmitter();
e.on('data', (buf) => { ... });
```

## Extended by

- [`ShellSocket`](ShellSocket)
- [`ChatSocket`](ChatSocket)
- [`DebugSocket`](DebugSocket)
- [`CodeboltSocket`](CodeboltSocket)
- [`BrowserSocket`](BrowserSocket)
- [`TasksSocket`](TasksSocket)
- [`JobsSocket`](JobsSocket)
- [`AiTerminalSocket`](AiTerminalSocket)
- [`EditorSocket`](EditorSocket)
- [`MainSocket`](MainSocket)
- [`LspSocket`](LspSocket)
- [`CapabilitySocket`](CapabilitySocket)
- [`SwarmSocket`](SwarmSocket)
- [`ReviewMergeSocket`](ReviewMergeSocket)
- [`AgentPortfolioSocket`](AgentPortfolioSocket)
- [`CalendarSocket`](CalendarSocket)
- [`EpisodicMemorySocket`](EpisodicMemorySocket)
- [`RoadmapSocket`](RoadmapSocket)
- [`ProjectStructureSocket`](ProjectStructureSocket)
- [`UpdateRequestSocket`](UpdateRequestSocket)
- [`BackgroundAgentSocket`](BackgroundAgentSocket)
- [`KnowledgeSocket`](KnowledgeSocket)
- [`FileUpdateIntentSocket`](FileUpdateIntentSocket)
- [`PersistentMemorySocket`](PersistentMemorySocket)
- [`ContextAssemblySocket`](ContextAssemblySocket)
- [`KvStoreSocket`](KvStoreSocket)
- [`EventLogSocket`](EventLogSocket)
- [`IconViewSocket`](IconViewSocket)
- [`LocalModelSocket`](LocalModelSocket)
- [`SystemAlertSocket`](SystemAlertSocket)
- [`OrchestratorSocket`](OrchestratorSocket)
- [`AgentDebugSocket`](AgentDebugSocket)
- [`EnvironmentDebugSocket`](EnvironmentDebugSocket)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\<`string`, (...`args`: `any`[]) => `void`\> | An interface mapping event names to listener signatures. |

## Constructors

### Constructor

```ts
new TypedEventEmitter<T>(): TypedEventEmitter<T>;
```

#### Returns

`TypedEventEmitter`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<T[K]>): boolean;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:54

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | `Parameters`\<`T`\[`K`\]\> |

#### Returns

`boolean`

***

### listenerCount()

```ts
listenerCount(event: string & keyof T): number;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` & keyof `T` |

#### Returns

`number`

***

### off()

```ts
off<K>(event: K, listener: T[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `T`\[`K`\] |

#### Returns

`this`

***

### on()

```ts
on<K>(event: K, listener: T[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:27

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `T`\[`K`\] |

#### Returns

`this`

***

### once()

```ts
once<K>(event: K, listener: T[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:46

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `T`\[`K`\] |

#### Returns

`this`

***

### removeAllListeners()

```ts
removeAllListeners(event?: string & keyof T): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `string` & keyof `T` |

#### Returns

`this`
