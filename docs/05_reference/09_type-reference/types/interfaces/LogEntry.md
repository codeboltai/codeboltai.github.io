---
title: LogEntry
---

[**@codebolt/types**](../index.md)

***

# Interface: LogEntry

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:326

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="error"></a> `error?` | \{ `message`: `string`; `name`: `string`; `stack?`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:333 |
| `error.message` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:335 |
| `error.name` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:334 |
| `error.stack?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:336 |
| <a id="level"></a> `level` | `"error"` \| `"info"` \| `"debug"` \| `"warn"` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:327 |
| <a id="message"></a> `message` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:328 |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:332 |
| <a id="module"></a> `module?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:330 |
| <a id="requestid"></a> `requestId?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:331 |
| <a id="timestamp"></a> `timestamp` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:329 |
