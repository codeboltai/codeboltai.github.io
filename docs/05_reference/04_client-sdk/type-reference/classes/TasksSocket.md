---
title: TasksSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: TasksSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:14

Tasks WebSocket - Manage tasks and subtasks.
Action-based protocol: send \{ action, payload \}, receive typed responses.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`TasksSocketEvents`\>

## Constructors

### Constructor

```ts
new TasksSocket(connectionManager: SocketConnectionManager): TasksSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) |

#### Returns

`TasksSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### addSubTask()

```ts
addSubTask(subtask: SubTask & {
  taskId: string;
}): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subtask` | `SubTask` & \{ `taskId`: `string`; \} |

#### Returns

`void`

***

### addTask()

```ts
addTask(task: CreateTaskRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `CreateTaskRequest` |

#### Returns

`void`

***

### createTasksFromMarkdown()

```ts
createTasksFromMarkdown(markdown: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `markdown` | `string` |

#### Returns

`void`

***

### deleteSubTask()

```ts
deleteSubTask(taskId: string, subtaskId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |
| `subtaskId` | `string` |

#### Returns

`void`

***

### deleteTask()

```ts
deleteTask(taskId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `taskId` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<TasksSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`TasksSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### exportTasksToMarkdown()

```ts
exportTasksToMarkdown(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:89

#### Returns

`void`

***

### getAllAgents()

```ts
getAllAgents(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:83

#### Returns

`void`

***

### getTasks()

```ts
getTasks(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:74

#### Returns

`void`

***

### getTasksByAgent()

```ts
getTasksByAgent(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### getTasksByCategory()

```ts
getTasksByCategory(category: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:80

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `category` | `string` |

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
off<K>(event: K, listener: TasksSocketEvents[K]): this;
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
| `listener` | `TasksSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: TasksSocketEvents[K]): this;
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
| `listener` | `TasksSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: TasksSocketEvents[K]): this;
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
| `listener` | `TasksSocketEvents`\[`K`\] |

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

### updateSubTask()

```ts
updateSubTask(subtask: SubTask & {
  taskId: string;
}): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subtask` | `SubTask` & \{ `taskId`: `string`; \} |

#### Returns

`void`

***

### updateTask()

```ts
updateTask(task: UpdateTaskRequest & {
  id: string;
}): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/tasks.socket.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `UpdateTaskRequest` & \{ `id`: `string`; \} |

#### Returns

`void`
