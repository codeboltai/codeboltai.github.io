---
title: ProviderEventHandlers
---

[**@codebolt/provider**](../index)

***

# Interface: ProviderEventHandlers

Defined in: ProviderTypes.ts:65

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="onclosesignal"></a> `onCloseSignal` | () => `Promise`\<`void`\> | [ProviderTypes.ts:70](packages/provider/src/lib/ProviderTypes.ts#L70) |
| <a id="ongetdifffiles"></a> `onGetDiffFiles` | () => `Promise`\<`any`\> | [ProviderTypes.ts:69](packages/provider/src/lib/ProviderTypes.ts#L69) |
| <a id="onprovideragentstart"></a> `onProviderAgentStart` | (`message`: `AgentStartMessage`) => `Promise`\<`void`\> | [ProviderTypes.ts:67](packages/provider/src/lib/ProviderTypes.ts#L67) |
| <a id="onproviderstart"></a> `onProviderStart` | (`vars`: `ProviderInitVars`) => `Promise`\<[`ProviderStartResult`](ProviderStartResult)\> | [ProviderTypes.ts:66](packages/provider/src/lib/ProviderTypes.ts#L66) |
| <a id="onproviderstop"></a> `onProviderStop` | (`vars`: `ProviderInitVars`) => `Promise`\<`void`\> | [ProviderTypes.ts:68](packages/provider/src/lib/ProviderTypes.ts#L68) |
| <a id="onrawmessage"></a> `onRawMessage` | (`message`: `RawMessageForAgent`) => `Promise`\<`void`\> | [ProviderTypes.ts:71](packages/provider/src/lib/ProviderTypes.ts#L71) |
