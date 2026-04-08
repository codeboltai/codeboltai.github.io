---
title: CommandError
---

[**@codebolt/types**](../index)

***

# Interface: CommandError

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:22

Terminal SDK Function Types
Types for the cbterminal module functions

## Extends

- [`BaseTerminalSDKResponse`](BaseTerminalSDKResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="error"></a> `error` | `string` | [`BaseTerminalSDKResponse`](BaseTerminalSDKResponse).[`error`](BaseTerminalSDKResponse.md#error) | - | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:24](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L24) |
| <a id="exitcode"></a> `exitCode?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:25](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L25) |
| <a id="message"></a> `message?` | `string` | - | [`BaseTerminalSDKResponse`](BaseTerminalSDKResponse).[`message`](BaseTerminalSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L10) |
| <a id="stderr"></a> `stderr?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:26](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L26) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseTerminalSDKResponse`](BaseTerminalSDKResponse).[`success`](BaseTerminalSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L9) |
| <a id="type"></a> `type?` | `"commandError"` | [`BaseTerminalSDKResponse`](BaseTerminalSDKResponse).[`type`](BaseTerminalSDKResponse.md#type) | - | [common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts:23](common/types/src/codeboltjstypes/libFunctionTypes/terminal.ts#L23) |
