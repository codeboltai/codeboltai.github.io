---
title: Tool
---

[**@codebolt/types**](../index)

***

# Interface: Tool

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:52

Represents a tool definition in OpenAI format

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description?`: `string`; `name`: `string`; `parameters?`: \{ `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \}; \} | Function definition | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:56](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L56) |
| `function.description?` | `string` | Description of what the function does | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:60](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L60) |
| `function.name` | `string` | Name of the function | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:58](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L58) |
| `function.parameters?` | \{ `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \} | JSON schema for the function parameters | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:62](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L62) |
| `function.parameters.properties` | `Record`\<`string`, `unknown`\> | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:64](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L64) |
| `function.parameters.required?` | `string`[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L65) |
| `function.parameters.type` | `"object"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:63](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L63) |
| <a id="type"></a> `type` | `"function"` | The type of tool | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L54) |
