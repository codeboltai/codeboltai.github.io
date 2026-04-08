---
title: ProviderLifecycleHandlers
---

[**@codebolt/provider**](../index)

***

# Interface: ProviderLifecycleHandlers

Defined in: ProviderTypes.ts:51

## Methods

### onCloseSignal()

```ts
onCloseSignal(): Promise<void>;
```

Defined in: ProviderTypes.ts:56

#### Returns

`Promise`\<`void`\>

***

### onGetDiffFiles()

```ts
onGetDiffFiles(): Promise<any>;
```

Defined in: ProviderTypes.ts:55

#### Returns

`Promise`\<`any`\>

***

### onProviderAgentStart()

```ts
onProviderAgentStart(message: AgentStartMessage): Promise<void>;
```

Defined in: ProviderTypes.ts:53

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `AgentStartMessage` |

#### Returns

`Promise`\<`void`\>

***

### onProviderStart()

```ts
onProviderStart(initVars: ProviderInitVars): Promise<ProviderStartResult>;
```

Defined in: ProviderTypes.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<[`ProviderStartResult`](ProviderStartResult)\>

***

### onProviderStop()

```ts
onProviderStop(initVars: ProviderInitVars): Promise<void>;
```

Defined in: ProviderTypes.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

***

### onRawMessage()

```ts
onRawMessage(message: RawMessageForAgent): Promise<void>;
```

Defined in: ProviderTypes.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `RawMessageForAgent` |

#### Returns

`Promise`\<`void`\>
