---
title: HookConfig
---

[**@codebolt/types**](../index)

***

# Interface: HookConfig

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:34

## Extended by

- [`Hook`](Hook)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L45) |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:46](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L46) |
| `actionConfig.agentId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L50) |
| `actionConfig.command?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L48) |
| `actionConfig.message?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L47) |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L51) |
| `actionConfig.url?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L49) |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L55) |
| <a id="description"></a> `description?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L37) |
| <a id="enabled"></a> `enabled?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L53) |
| <a id="id"></a> `id?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:35](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L35) |
| <a id="name"></a> `name` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:36](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L36) |
| <a id="priority"></a> `priority?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L54) |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L38) |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:39](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L39) |
| `triggerConfig.command?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:42](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L42) |
| `triggerConfig.eventType?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:43](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L43) |
| `triggerConfig.path?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L41) |
| `triggerConfig.pattern?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:40](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L40) |
