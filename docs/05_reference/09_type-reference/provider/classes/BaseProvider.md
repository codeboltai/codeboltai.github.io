---
title: BaseProvider
---

[**@codebolt/provider**](../index)

***

# Abstract Class: BaseProvider

Defined in: BaseProvider.ts:26

BaseProvider encapsulates shared functionality for environment providers.
Concrete providers can extend this class and override protected methods
to customize setup logic or communication transport.

## Implements

- [`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers)
- [`ProviderTransport`](../interfaces/ProviderTransport)

## Constructors

### Constructor

```ts
new BaseProvider(config?: Partial<BaseProviderConfig>): BaseProvider;
```

Defined in: BaseProvider.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `Partial`\<[`BaseProviderConfig`](../interfaces/BaseProviderConfig)\> |

#### Returns

`BaseProvider`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentserver"></a> `agentServer` | `protected` | [`AgentServerConnection`](../interfaces/AgentServerConnection) | [BaseProvider.ts:35](packages/provider/src/lib/BaseProvider.ts#L35) |
| <a id="config"></a> `config` | `readonly` | [`BaseProviderConfig`](../interfaces/BaseProviderConfig) | [BaseProvider.ts:28](packages/provider/src/lib/BaseProvider.ts#L28) |
| <a id="state"></a> `state` | `protected` | [`ProviderState`](../interfaces/ProviderState) & \{ `connectedEnvironments?`: `string`[]; `environmentId?`: `string`; `providerId?`: `string`; `startTime?`: `number`; \} | [BaseProvider.ts:29](packages/provider/src/lib/BaseProvider.ts#L29) |

## Methods

### afterConnected()

```ts
protected afterConnected(_startResult: ProviderStartResult): Promise<void>;
```

Defined in: BaseProvider.ts:388

Optional hook: execute logic after connection is established.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_startResult` | [`ProviderStartResult`](../interfaces/ProviderStartResult) |

#### Returns

`Promise`\<`void`\>

***

### beforeClose()

```ts
protected beforeClose(): Promise<void>;
```

Defined in: BaseProvider.ts:235

Optional hook: execute custom logic before closing.

#### Returns

`Promise`\<`void`\>

***

### buildAgentServerUrl()

```ts
protected buildAgentServerUrl(): string;
```

Defined in: BaseProvider.ts:428

Construct agent server URL from config.

#### Returns

`string`

***

### buildWebSocketUrl()

```ts
protected buildWebSocketUrl(initVars: ProviderInitVars): string;
```

Defined in: BaseProvider.ts:509

Build the WebSocket URL used to connect to the agent server. Subclasses can
override to adjust query params.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`string`

***

### disconnectTransport()

```ts
protected disconnectTransport(): Promise<void>;
```

Defined in: BaseProvider.ts:196

Transport: disconnect from agent server.

#### Returns

`Promise`\<`void`\>

***

### ensureAgentServer()

```ts
protected ensureAgentServer(): Promise<void>;
```

Defined in: BaseProvider.ts:406

Ensure agent server availability (start or reuse). Subclasses can override.

#### Returns

`Promise`\<`void`\>

***

### ensureTransportConnection()

```ts
ensureTransportConnection(initVars: ProviderInitVars): Promise<void>;
```

Defined in: BaseProvider.ts:187

Transport: establish connection to agent server.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProviderTransport`](../interfaces/ProviderTransport).[`ensureTransportConnection`](../interfaces/ProviderTransport.md#ensuretransportconnection)

***

### getEventHandlers()

```ts
getEventHandlers(): ProviderEventHandlers;
```

Defined in: BaseProvider.ts:173

Returns provider lifecycle event handlers that can be used by the host
application to register callbacks in a consistent way.

#### Returns

[`ProviderEventHandlers`](../interfaces/ProviderEventHandlers)

***

### getProviderHealthStatus()

```ts
protected getProviderHealthStatus(): "healthy" | "degraded" | "error";
```

Defined in: BaseProvider.ts:349

Get the current health status of the provider.
Subclasses can override for custom health determination.

#### Returns

`"healthy"` \| `"degraded"` \| `"error"`

***

### handleTransportMessage()

```ts
protected handleTransportMessage(message: RawMessageForAgent): void;
```

Defined in: BaseProvider.ts:528

Handle incoming transport messages and forward to Codebolt runtime by
default. Subclasses can override for custom routing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `RawMessageForAgent` |

#### Returns

`void`

***

### onCloseSignal()

```ts
onCloseSignal(): Promise<void>;
```

Defined in: BaseProvider.ts:144

Graceful shutdown and cleanup entry point.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onCloseSignal`](../interfaces/ProviderLifecycleHandlers.md#onclosesignal)

***

### onGetDiffFiles()

```ts
abstract onGetDiffFiles(): Promise<any>;
```

Defined in: BaseProvider.ts:139

Get diff files handler - returns diff information for changed files
Must be implemented by subclasses.

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onGetDiffFiles`](../interfaces/ProviderLifecycleHandlers.md#ongetdifffiles)

***

### onProviderAgentStart()

```ts
onProviderAgentStart(agentMessage: AgentStartMessage): Promise<void>;
```

Defined in: BaseProvider.ts:108

Called after [onProviderStart](#onproviderstart) completes to begin the agent loop.
Default implementation forwards the message to the agent server through
[sendToAgentServer](#sendtoagentserver).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentMessage` | `AgentStartMessage` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onProviderAgentStart`](../interfaces/ProviderLifecycleHandlers.md#onprovideragentstart)

***

### onProviderStart()

```ts
onProviderStart(initVars: ProviderInitVars): Promise<ProviderStartResult>;
```

Defined in: BaseProvider.ts:77

Entry point called by the platform when a provider is started.
Subclasses should override [setupEnvironment](#setupenvironment) and
[afterConnected](#afterconnected) for custom logic rather than overriding this method.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<[`ProviderStartResult`](../interfaces/ProviderStartResult)\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onProviderStart`](../interfaces/ProviderLifecycleHandlers.md#onproviderstart)

***

### onProviderStop()

```ts
onProviderStop(initVars: ProviderInitVars): Promise<void>;
```

Defined in: BaseProvider.ts:122

Provider stop handler - stops the provider and cleans up resources

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onProviderStop`](../interfaces/ProviderLifecycleHandlers.md#onproviderstop)

***

### onRawMessage()

```ts
onRawMessage(message: RawMessageForAgent): Promise<void>;
```

Defined in: BaseProvider.ts:158

Handle raw incoming messages from the platform. Default behavior is to
forward the payload to the agent server transport.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `RawMessageForAgent` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProviderLifecycleHandlers`](../interfaces/ProviderLifecycleHandlers).[`onRawMessage`](../interfaces/ProviderLifecycleHandlers.md#onrawmessage)

***

### registerConnectedEnvironment()

```ts
protected registerConnectedEnvironment(environmentId: string): void;
```

Defined in: BaseProvider.ts:362

Register an environment as connected to this provider.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `environmentId` | `string` |

#### Returns

`void`

***

### resetState()

```ts
protected resetState(): void;
```

Defined in: BaseProvider.ts:435

Reset mutable state prior to start.

#### Returns

`void`

***

### resolveProjectContext()

```ts
abstract protected resolveProjectContext(initVars: ProviderInitVars): Promise<void>;
```

Defined in: BaseProvider.ts:423

Resolve project context (project path, metadata, etc.). Must be implemented
by subclasses because repository layout may vary per provider.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

***

### resolveWorkspacePath()

```ts
protected resolveWorkspacePath(initVars: ProviderInitVars): Promise<string>;
```

Defined in: BaseProvider.ts:411

Resolve workspace path based on provider requirements.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`string`\>

***

### sendEnvironmentHeartbeat()

```ts
protected sendEnvironmentHeartbeat(environmentId: string): void;
```

Defined in: BaseProvider.ts:328

Send an environment heartbeat to the main application.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `environmentId` | `string` |

#### Returns

`void`

***

### sendProviderHeartbeat()

```ts
protected sendProviderHeartbeat(): void;
```

Defined in: BaseProvider.ts:280

Send a provider heartbeat to the main application.

#### Returns

`void`

***

### sendToAgentServer()

```ts
sendToAgentServer(message: AgentStartMessage | RawMessageForAgent): Promise<boolean>;
```

Defined in: BaseProvider.ts:212

Helper to send messages to the agent server.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `AgentStartMessage` \| `RawMessageForAgent` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ProviderTransport`](../interfaces/ProviderTransport).[`sendToAgentServer`](../interfaces/ProviderTransport.md#sendtoagentserver)

***

### setupEnvironment()

```ts
abstract protected setupEnvironment(initVars: ProviderInitVars): Promise<void>;
```

Defined in: BaseProvider.ts:394

Set up provider-specific environment (e.g., create worktree).
Must be implemented by subclasses.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

***

### startEnvironmentHeartbeat()

```ts
protected startEnvironmentHeartbeat(environmentId: string): void;
```

Defined in: BaseProvider.ts:311

Start environment-specific heartbeat monitoring.
Subclasses can override to implement custom environment health checks.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `environmentId` | `string` |

#### Returns

`void`

***

### startHeartbeat()

```ts
protected startHeartbeat(): void;
```

Defined in: BaseProvider.ts:243

Start sending provider heartbeats at regular intervals.
Called automatically after connection is established.

#### Returns

`void`

***

### stopHeartbeat()

```ts
protected stopHeartbeat(): void;
```

Defined in: BaseProvider.ts:264

Stop sending provider heartbeats.

#### Returns

`void`

***

### teardownEnvironment()

```ts
protected teardownEnvironment(): Promise<void>;
```

Defined in: BaseProvider.ts:400

Tear down provider-specific environment. Default implementation is a no-op.

#### Returns

`Promise`\<`void`\>

***

### unregisterConnectedEnvironment()

```ts
protected unregisterConnectedEnvironment(environmentId: string): void;
```

Defined in: BaseProvider.ts:374

Unregister an environment from this provider.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `environmentId` | `string` |

#### Returns

`void`
