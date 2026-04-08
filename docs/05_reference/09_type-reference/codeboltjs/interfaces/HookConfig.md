---
title: HookConfig
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: HookConfig

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:14

## Extended by

- [`Hook`](Hook)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:25 |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:26 |
| `actionConfig.agentId?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:30 |
| `actionConfig.command?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:28 |
| `actionConfig.message?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:27 |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:31 |
| `actionConfig.url?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:29 |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:35 |
| <a id="description"></a> `description?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:17 |
| <a id="enabled"></a> `enabled?` | `boolean` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:33 |
| <a id="id"></a> `id?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:15 |
| <a id="name"></a> `name` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:16 |
| <a id="priority"></a> `priority?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:34 |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:18 |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:19 |
| `triggerConfig.command?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:22 |
| `triggerConfig.eventType?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:23 |
| `triggerConfig.path?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:21 |
| `triggerConfig.pattern?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:20 |
