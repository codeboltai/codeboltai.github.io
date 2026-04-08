---
title: IGetStatusResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IGetStatusResponse

Defined in: packages/codeboltjs/src/modules/calendar.ts:254

## Extends

- [`CalendarResponse`](CalendarResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | - | [`CalendarResponse`](CalendarResponse).[`code`](CalendarResponse.md#code) | [packages/codeboltjs/src/modules/calendar.ts:170](packages/codeboltjs/src/modules/calendar.ts#L170) |
| <a id="data"></a> `data?` | \{ `isRunning`: `boolean`; `lastCheck`: `string`; `nextCheck`: `string`; `scheduledEvents`: `number`; \} | [`CalendarResponse`](CalendarResponse).[`data`](CalendarResponse.md#data) | - | [packages/codeboltjs/src/modules/calendar.ts:255](packages/codeboltjs/src/modules/calendar.ts#L255) |
| `data.isRunning` | `boolean` | - | - | [packages/codeboltjs/src/modules/calendar.ts:256](packages/codeboltjs/src/modules/calendar.ts#L256) |
| `data.lastCheck` | `string` | - | - | [packages/codeboltjs/src/modules/calendar.ts:257](packages/codeboltjs/src/modules/calendar.ts#L257) |
| `data.nextCheck` | `string` | - | - | [packages/codeboltjs/src/modules/calendar.ts:258](packages/codeboltjs/src/modules/calendar.ts#L258) |
| `data.scheduledEvents` | `number` | - | - | [packages/codeboltjs/src/modules/calendar.ts:259](packages/codeboltjs/src/modules/calendar.ts#L259) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | - | [`CalendarResponse`](CalendarResponse).[`error`](CalendarResponse.md#error) | [packages/codeboltjs/src/modules/calendar.ts:173](packages/codeboltjs/src/modules/calendar.ts#L173) |
| `error.code` | `string` | - | - | [packages/codeboltjs/src/modules/calendar.ts:174](packages/codeboltjs/src/modules/calendar.ts#L174) |
| `error.details?` | `any` | - | - | [packages/codeboltjs/src/modules/calendar.ts:176](packages/codeboltjs/src/modules/calendar.ts#L176) |
| `error.message` | `string` | - | - | [packages/codeboltjs/src/modules/calendar.ts:175](packages/codeboltjs/src/modules/calendar.ts#L175) |
| <a id="message"></a> `message` | `string` | - | [`CalendarResponse`](CalendarResponse).[`message`](CalendarResponse.md#message) | [packages/codeboltjs/src/modules/calendar.ts:171](packages/codeboltjs/src/modules/calendar.ts#L171) |
| <a id="success"></a> `success` | `boolean` | - | [`CalendarResponse`](CalendarResponse).[`success`](CalendarResponse.md#success) | [packages/codeboltjs/src/modules/calendar.ts:169](packages/codeboltjs/src/modules/calendar.ts#L169) |
