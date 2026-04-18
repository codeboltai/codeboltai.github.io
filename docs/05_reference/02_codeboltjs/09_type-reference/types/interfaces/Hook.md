---
title: Hook
---

[**@codebolt/types**](../index.md)

***

# Interface: Hook

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:64

## Extends

- [`HookConfig`](HookConfig)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | - | [`HookConfig`](HookConfig).[`action`](HookConfig.md#action) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:45 |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | - | [`HookConfig`](HookConfig).[`actionConfig`](HookConfig.md#actionconfig) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:46 |
| `actionConfig.agentId?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:50 |
| `actionConfig.command?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:48 |
| `actionConfig.message?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:47 |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:51 |
| `actionConfig.url?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:49 |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | - | [`HookConfig`](HookConfig).[`conditions`](HookConfig.md#conditions) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:55 |
| <a id="createdat"></a> `createdAt` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:67 |
| <a id="description"></a> `description?` | `string` | - | [`HookConfig`](HookConfig).[`description`](HookConfig.md#description) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:37 |
| <a id="enabled"></a> `enabled` | `boolean` | [`HookConfig`](HookConfig).[`enabled`](HookConfig.md#enabled) | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:66 |
| <a id="id"></a> `id` | `string` | [`HookConfig`](HookConfig).[`id`](HookConfig.md#id) | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:65 |
| <a id="lasttriggeredat"></a> `lastTriggeredAt?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:69 |
| <a id="name"></a> `name` | `string` | - | [`HookConfig`](HookConfig).[`name`](HookConfig.md#name) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:36 |
| <a id="priority"></a> `priority?` | `number` | - | [`HookConfig`](HookConfig).[`priority`](HookConfig.md#priority) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:54 |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | - | [`HookConfig`](HookConfig).[`trigger`](HookConfig.md#trigger) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:38 |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | - | [`HookConfig`](HookConfig).[`triggerConfig`](HookConfig.md#triggerconfig) | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:39 |
| `triggerConfig.command?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:42 |
| `triggerConfig.eventType?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:43 |
| `triggerConfig.path?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:41 |
| `triggerConfig.pattern?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:40 |
| <a id="triggercount"></a> `triggerCount` | `number` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:70 |
| <a id="updatedat"></a> `updatedAt` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:68 |
