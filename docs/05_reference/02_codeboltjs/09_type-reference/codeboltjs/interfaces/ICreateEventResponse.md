---
title: ICreateEventResponse
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: ICreateEventResponse

Defined in: packages/codeboltjs/src/modules/calendar.ts:180

## Extends

- [`CalendarResponse`](CalendarResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | - | [`CalendarResponse`](CalendarResponse).[`code`](CalendarResponse.md#code) | packages/codeboltjs/src/modules/calendar.ts:170 |
| <a id="data"></a> `data?` | \{ `event`: [`CalendarEvent`](CalendarEvent); \} | [`CalendarResponse`](CalendarResponse).[`data`](CalendarResponse.md#data) | - | packages/codeboltjs/src/modules/calendar.ts:181 |
| `data.event` | [`CalendarEvent`](CalendarEvent) | - | - | packages/codeboltjs/src/modules/calendar.ts:182 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | - | [`CalendarResponse`](CalendarResponse).[`error`](CalendarResponse.md#error) | packages/codeboltjs/src/modules/calendar.ts:173 |
| `error.code` | `string` | - | - | packages/codeboltjs/src/modules/calendar.ts:174 |
| `error.details?` | `any` | - | - | packages/codeboltjs/src/modules/calendar.ts:176 |
| `error.message` | `string` | - | - | packages/codeboltjs/src/modules/calendar.ts:175 |
| <a id="message"></a> `message` | `string` | - | [`CalendarResponse`](CalendarResponse).[`message`](CalendarResponse.md#message) | packages/codeboltjs/src/modules/calendar.ts:171 |
| <a id="success"></a> `success` | `boolean` | - | [`CalendarResponse`](CalendarResponse).[`success`](CalendarResponse.md#success) | packages/codeboltjs/src/modules/calendar.ts:169 |
