---
title: ToolCall
---

[**@codebolt/types**](../index.md)

***

# Interface: ToolCall

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:35

Represents a tool call in OpenAI format

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `arguments`: `string`; `name`: `string`; \} | Function call details | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:41 |
| `function.arguments` | `string` | Arguments for the function call as JSON string | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:45 |
| `function.name` | `string` | Name of the function to call | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:43 |
| <a id="id"></a> `id` | `string` | Unique identifier for this tool call | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:37 |
| <a id="type"></a> `type` | `"function"` | The type of tool call | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:39 |
