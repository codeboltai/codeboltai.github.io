---
title: ProjectStructureSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: ProjectStructureSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:10

Project Structure WebSocket - Manage project metadata, packages, routes, tables,
dependencies, commands, UI routes, deployments, git, design guidelines, frontend framework.
Type-based protocol with ~25 message types.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`ProjectStructureSocketEvents`\>

## Constructors

### Constructor

```ts
new ProjectStructureSocket(connectionManager: SocketConnectionManager, socketName: string): ProjectStructureSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:13

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'projectStructure'` |

#### Returns

`ProjectStructureSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<ProjectStructureSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`ProjectStructureSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getCommands()

```ts
getCommands(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getDependencies()

```ts
getDependencies(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getDeployments()

```ts
getDeployments(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getDesignGuidelines()

```ts
getDesignGuidelines(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:146

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getFrontendFramework()

```ts
getFrontendFramework(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:162

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getGit()

```ts
getGit(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:138

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getMetadata()

```ts
getMetadata(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getPackages()

```ts
getPackages(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getRoutes()

```ts
getRoutes(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getTables()

```ts
getTables(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `projectPath` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### getUiRoutes()

```ts
getUiRoutes(projectPath: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:110

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

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:75

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
off<K>(event: K, listener: ProjectStructureSocketEvents[K]): this;
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
| `listener` | `ProjectStructureSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: ProjectStructureSocketEvents[K]): this;
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
| `listener` | `ProjectStructureSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: ProjectStructureSocketEvents[K]): this;
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
| `listener` | `ProjectStructureSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### removeAllListeners()

```ts
removeAllListeners(event?: string): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `string` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`removeAllListeners`](TypedEventEmitter.md#removealllisteners)

***

### updateCommands()

```ts
updateCommands(commands: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commands` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateDependencies()

```ts
updateDependencies(deps: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:97

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deps` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateDeployments()

```ts
updateDeployments(deployments: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deployments` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateDesignGuidelines()

```ts
updateDesignGuidelines(guidelines: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:153

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `guidelines` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateFrontendFramework()

```ts
updateFrontendFramework(framework: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `framework` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateGit()

```ts
updateGit(git: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `git` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateMetadata()

```ts
updateMetadata(metadata: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updatePackages()

```ts
updatePackages(packages: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `packages` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateRoutes()

```ts
updateRoutes(routes: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `routes` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateSection()

```ts
updateSection(
   section: string, 
   data: unknown, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:178

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `section` | `string` |
| `data` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateTables()

```ts
updateTables(tables: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tables` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### updateUiRoutes()

```ts
updateUiRoutes(uiRoutes: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/project-structure.socket.ts:117

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uiRoutes` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`
