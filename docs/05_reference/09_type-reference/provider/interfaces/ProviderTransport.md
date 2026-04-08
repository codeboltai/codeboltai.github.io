---
title: ProviderTransport
---

[**@codebolt/provider**](../index)

***

# Interface: ProviderTransport

Defined in: ProviderTypes.ts:60

## Methods

### ensureTransportConnection()

```ts
ensureTransportConnection(initVars: ProviderInitVars): Promise<void>;
```

Defined in: ProviderTypes.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initVars` | `ProviderInitVars` |

#### Returns

`Promise`\<`void`\>

***

### sendToAgentServer()

```ts
sendToAgentServer(message: AgentStartMessage | RawMessageForAgent): Promise<boolean>;
```

Defined in: ProviderTypes.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `AgentStartMessage` \| `RawMessageForAgent` |

#### Returns

`Promise`\<`boolean`\>
