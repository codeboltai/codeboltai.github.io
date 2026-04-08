---
title: HookConfig
---

[**@codebolt/types**](../index.md)

***

# Interface: HookConfig

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:34

## Extended by

- [`Hook`](Hook)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:45 |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:46 |
| `actionConfig.agentId?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:50 |
| `actionConfig.command?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:48 |
| `actionConfig.message?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:47 |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:51 |
| `actionConfig.url?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:49 |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:55 |
| <a id="description"></a> `description?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:37 |
| <a id="enabled"></a> `enabled?` | `boolean` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:53 |
| <a id="id"></a> `id?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:35 |
| <a id="name"></a> `name` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:36 |
| <a id="priority"></a> `priority?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:54 |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:38 |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:39 |
| `triggerConfig.command?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:42 |
| `triggerConfig.eventType?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:43 |
| `triggerConfig.path?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:41 |
| `triggerConfig.pattern?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:40 |
