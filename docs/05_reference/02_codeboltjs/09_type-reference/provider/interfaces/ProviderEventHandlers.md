---
title: ProviderEventHandlers
---

[**@codebolt/provider**](../index.md)

***

# Interface: ProviderEventHandlers

Defined in: ProviderTypes.ts:65

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="onclosesignal"></a> `onCloseSignal` | () => `Promise`\<`void`\> | ProviderTypes.ts:70 |
| <a id="ongetdifffiles"></a> `onGetDiffFiles` | () => `Promise`\<`any`\> | ProviderTypes.ts:69 |
| <a id="onprovideragentstart"></a> `onProviderAgentStart` | (`message`: `AgentStartMessage`) => `Promise`\<`void`\> | ProviderTypes.ts:67 |
| <a id="onproviderstart"></a> `onProviderStart` | (`vars`: `ProviderInitVars`) => `Promise`\<[`ProviderStartResult`](ProviderStartResult)\> | ProviderTypes.ts:66 |
| <a id="onproviderstop"></a> `onProviderStop` | (`vars`: `ProviderInitVars`) => `Promise`\<`void`\> | ProviderTypes.ts:68 |
| <a id="onrawmessage"></a> `onRawMessage` | (`message`: `RawMessageForAgent`) => `Promise`\<`void`\> | ProviderTypes.ts:71 |
