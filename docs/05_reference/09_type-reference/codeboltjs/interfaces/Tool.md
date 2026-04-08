---
title: Tool
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: Tool

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:116

Represents a tool definition in OpenAI format

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description?`: `string`; `name`: `string`; `parameters?`: `JSONSchema`; \} | Function definition | [packages/codeboltjs/src/types/libFunctionTypes.ts:120](packages/codeboltjs/src/types/libFunctionTypes.ts#L120) |
| `function.description?` | `string` | Description of what the function does | [packages/codeboltjs/src/types/libFunctionTypes.ts:124](packages/codeboltjs/src/types/libFunctionTypes.ts#L124) |
| `function.name` | `string` | Name of the function | [packages/codeboltjs/src/types/libFunctionTypes.ts:122](packages/codeboltjs/src/types/libFunctionTypes.ts#L122) |
| `function.parameters?` | `JSONSchema` | JSON schema for the function parameters | [packages/codeboltjs/src/types/libFunctionTypes.ts:126](packages/codeboltjs/src/types/libFunctionTypes.ts#L126) |
| <a id="type"></a> `type` | `"function"` | The type of tool | [packages/codeboltjs/src/types/libFunctionTypes.ts:118](packages/codeboltjs/src/types/libFunctionTypes.ts#L118) |
