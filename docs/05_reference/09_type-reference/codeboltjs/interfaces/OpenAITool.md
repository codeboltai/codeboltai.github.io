---
title: OpenAITool
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: OpenAITool

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:178

OpenAI-compatible tool format

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description`: `string`; `name`: `string`; `parameters`: \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, \{ `description`: `string`; `type`: `string`; \}\>; `required?`: `string`[]; `type`: `"object"`; \}; `strict?`: `boolean`; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:180](packages/codeboltjs/src/types/libFunctionTypes.ts#L180) |
| `function.description` | `string` | [packages/codeboltjs/src/types/libFunctionTypes.ts:182](packages/codeboltjs/src/types/libFunctionTypes.ts#L182) |
| `function.name` | `string` | [packages/codeboltjs/src/types/libFunctionTypes.ts:181](packages/codeboltjs/src/types/libFunctionTypes.ts#L181) |
| `function.parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, \{ `description`: `string`; `type`: `string`; \}\>; `required?`: `string`[]; `type`: `"object"`; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:183](packages/codeboltjs/src/types/libFunctionTypes.ts#L183) |
| `function.parameters.additionalProperties?` | `boolean` | [packages/codeboltjs/src/types/libFunctionTypes.ts:190](packages/codeboltjs/src/types/libFunctionTypes.ts#L190) |
| `function.parameters.properties` | `Record`\<`string`, \{ `description`: `string`; `type`: `string`; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:185](packages/codeboltjs/src/types/libFunctionTypes.ts#L185) |
| `function.parameters.required?` | `string`[] | [packages/codeboltjs/src/types/libFunctionTypes.ts:189](packages/codeboltjs/src/types/libFunctionTypes.ts#L189) |
| `function.parameters.type` | `"object"` | [packages/codeboltjs/src/types/libFunctionTypes.ts:184](packages/codeboltjs/src/types/libFunctionTypes.ts#L184) |
| `function.strict?` | `boolean` | [packages/codeboltjs/src/types/libFunctionTypes.ts:192](packages/codeboltjs/src/types/libFunctionTypes.ts#L192) |
| <a id="type"></a> `type` | `"function"` | [packages/codeboltjs/src/types/libFunctionTypes.ts:179](packages/codeboltjs/src/types/libFunctionTypes.ts#L179) |
