---
title: BaseProviderConfig
---

[**@codebolt/provider**](../index.md)

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
| <a id="agentserverargs"></a> `agentServerArgs?` | `string`[] | ProviderTypes.ts:42 |
| <a id="agentserverhost"></a> `agentServerHost` | `string` | ProviderTypes.ts:36 |
| <a id="agentserverpath"></a> `agentServerPath?` | `string` | ProviderTypes.ts:41 |
| <a id="agentserverport"></a> `agentServerPort` | `number` | ProviderTypes.ts:35 |
| <a id="reconnectattempts"></a> `reconnectAttempts` | `number` | ProviderTypes.ts:37 |
| <a id="reconnectdelay"></a> `reconnectDelay` | `number` | ProviderTypes.ts:38 |
| <a id="timeouts"></a> `timeouts?` | \{ `agentServerStartup?`: `number`; `cleanup?`: `number`; `connection?`: `number`; \} | ProviderTypes.ts:43 |
| `timeouts.agentServerStartup?` | `number` | ProviderTypes.ts:44 |
| `timeouts.cleanup?` | `number` | ProviderTypes.ts:46 |
| `timeouts.connection?` | `number` | ProviderTypes.ts:45 |
| <a id="transport"></a> `transport` | [`ProviderTransportType`](../type-aliases/ProviderTransportType) | ProviderTypes.ts:40 |
| <a id="wsregistrationtimeout"></a> `wsRegistrationTimeout` | `number` | ProviderTypes.ts:39 |
