---
title: BaseProviderConfig
---

[**@codebolt/provider**](../index)

***

# Interface: BaseProviderConfig

Defined in: ProviderTypes.ts:34

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentserverargs"></a> `agentServerArgs?` | `string`[] | [ProviderTypes.ts:42](packages/provider/src/lib/ProviderTypes.ts#L42) |
| <a id="agentserverhost"></a> `agentServerHost` | `string` | [ProviderTypes.ts:36](packages/provider/src/lib/ProviderTypes.ts#L36) |
| <a id="agentserverpath"></a> `agentServerPath?` | `string` | [ProviderTypes.ts:41](packages/provider/src/lib/ProviderTypes.ts#L41) |
| <a id="agentserverport"></a> `agentServerPort` | `number` | [ProviderTypes.ts:35](packages/provider/src/lib/ProviderTypes.ts#L35) |
| <a id="reconnectattempts"></a> `reconnectAttempts` | `number` | [ProviderTypes.ts:37](packages/provider/src/lib/ProviderTypes.ts#L37) |
| <a id="reconnectdelay"></a> `reconnectDelay` | `number` | [ProviderTypes.ts:38](packages/provider/src/lib/ProviderTypes.ts#L38) |
| <a id="timeouts"></a> `timeouts?` | \{ `agentServerStartup?`: `number`; `cleanup?`: `number`; `connection?`: `number`; \} | [ProviderTypes.ts:43](packages/provider/src/lib/ProviderTypes.ts#L43) |
| `timeouts.agentServerStartup?` | `number` | [ProviderTypes.ts:44](packages/provider/src/lib/ProviderTypes.ts#L44) |
| `timeouts.cleanup?` | `number` | [ProviderTypes.ts:46](packages/provider/src/lib/ProviderTypes.ts#L46) |
| `timeouts.connection?` | `number` | [ProviderTypes.ts:45](packages/provider/src/lib/ProviderTypes.ts#L45) |
| <a id="transport"></a> `transport` | [`ProviderTransportType`](../type-aliases/ProviderTransportType) | [ProviderTypes.ts:40](packages/provider/src/lib/ProviderTypes.ts#L40) |
| <a id="wsregistrationtimeout"></a> `wsRegistrationTimeout` | `number` | [ProviderTypes.ts:39](packages/provider/src/lib/ProviderTypes.ts#L39) |
