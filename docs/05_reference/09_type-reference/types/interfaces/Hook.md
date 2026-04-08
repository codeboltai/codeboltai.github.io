---
title: Hook
---

[**@codebolt/types**](../index)

***

# Interface: Hook

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:64

## Extends

- [`HookConfig`](HookConfig)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | [`HookAction`](../type-aliases/HookAction) | - | [`HookConfig`](HookConfig).[`action`](HookConfig.md#action) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L45) |
| <a id="actionconfig"></a> `actionConfig?` | \{ `agentId?`: `string`; `command?`: `string`; `message?`: `string`; `payload?`: `Record`\<`string`, `any`\>; `url?`: `string`; \} | - | [`HookConfig`](HookConfig).[`actionConfig`](HookConfig.md#actionconfig) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:46](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L46) |
| `actionConfig.agentId?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L50) |
| `actionConfig.command?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L48) |
| `actionConfig.message?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L47) |
| `actionConfig.payload?` | `Record`\<`string`, `any`\> | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L51) |
| `actionConfig.url?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L49) |
| <a id="conditions"></a> `conditions?` | [`HookCondition`](HookCondition)[] | - | [`HookConfig`](HookConfig).[`conditions`](HookConfig.md#conditions) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L55) |
| <a id="createdat"></a> `createdAt` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L67) |
| <a id="description"></a> `description?` | `string` | - | [`HookConfig`](HookConfig).[`description`](HookConfig.md#description) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L37) |
| <a id="enabled"></a> `enabled` | `boolean` | [`HookConfig`](HookConfig).[`enabled`](HookConfig.md#enabled) | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L66) |
| <a id="id"></a> `id` | `string` | [`HookConfig`](HookConfig).[`id`](HookConfig.md#id) | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L65) |
| <a id="lasttriggeredat"></a> `lastTriggeredAt?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L69) |
| <a id="name"></a> `name` | `string` | - | [`HookConfig`](HookConfig).[`name`](HookConfig.md#name) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:36](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L36) |
| <a id="priority"></a> `priority?` | `number` | - | [`HookConfig`](HookConfig).[`priority`](HookConfig.md#priority) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L54) |
| <a id="trigger"></a> `trigger` | [`HookTrigger`](../type-aliases/HookTrigger) | - | [`HookConfig`](HookConfig).[`trigger`](HookConfig.md#trigger) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L38) |
| <a id="triggerconfig"></a> `triggerConfig?` | \{ `command?`: `string`; `eventType?`: `string`; `path?`: `string`; `pattern?`: `string`; \} | - | [`HookConfig`](HookConfig).[`triggerConfig`](HookConfig.md#triggerconfig) | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:39](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L39) |
| `triggerConfig.command?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:42](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L42) |
| `triggerConfig.eventType?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:43](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L43) |
| `triggerConfig.path?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L41) |
| `triggerConfig.pattern?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:40](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L40) |
| <a id="triggercount"></a> `triggerCount` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L70) |
| <a id="updatedat"></a> `updatedAt` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/hook.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/hook.ts#L68) |
