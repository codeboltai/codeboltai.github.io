---
title: Hook
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: Hook

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:42

## Extends

- [`HookConfig`](HookConfig)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | - | [`HookConfig`](HookConfig).[`action`](HookConfig.md#action) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:25 |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | - | [`HookConfig`](HookConfig).[`actionConfig`](HookConfig.md#actionconfig) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:26 |
| `actionConfig.agentId?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:30 |
| `actionConfig.command?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:28 |
| `actionConfig.message?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:27 |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:31 |
| `actionConfig.url?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:29 |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | - | [`HookConfig`](HookConfig).[`conditions`](HookConfig.md#conditions) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:35 |
| <a id="createdat"></a> `createdAt` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:45 |
| <a id="description"></a> `description?` | `string` | - | [`HookConfig`](HookConfig).[`description`](HookConfig.md#description) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:17 |
| <a id="enabled"></a> `enabled` | `boolean` | [`HookConfig`](HookConfig).[`enabled`](HookConfig.md#enabled) | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:44 |
| <a id="id"></a> `id` | `string` | [`HookConfig`](HookConfig).[`id`](HookConfig.md#id) | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:43 |
| <a id="lasttriggeredat"></a> `lastTriggeredAt?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:47 |
| <a id="name"></a> `name` | `string` | - | [`HookConfig`](HookConfig).[`name`](HookConfig.md#name) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:16 |
| <a id="priority"></a> `priority?` | `number` | - | [`HookConfig`](HookConfig).[`priority`](HookConfig.md#priority) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:34 |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | - | [`HookConfig`](HookConfig).[`trigger`](HookConfig.md#trigger) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:18 |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | - | [`HookConfig`](HookConfig).[`triggerConfig`](HookConfig.md#triggerconfig) | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:19 |
| `triggerConfig.command?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:22 |
| `triggerConfig.eventType?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:23 |
| `triggerConfig.path?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:21 |
| `triggerConfig.pattern?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:20 |
| <a id="triggercount"></a> `triggerCount` | `number` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:48 |
| <a id="updatedat"></a> `updatedAt` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/hook.d.ts:46 |
