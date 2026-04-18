---
title: OpenAIToolSchema
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: OpenAIToolSchema

Defined in: packages/codeboltjs/src/tools/types.ts:8

OpenAI tool schema format - primary format for LLM tool calls

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description`: `string`; `name`: `string`; `parameters`: \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `any`\>; `required?`: `string`[]; `type`: `"object"`; \}; \} | packages/codeboltjs/src/tools/types.ts:10 |
| `function.description` | `string` | packages/codeboltjs/src/tools/types.ts:12 |
| `function.name` | `string` | packages/codeboltjs/src/tools/types.ts:11 |
| `function.parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `any`\>; `required?`: `string`[]; `type`: `"object"`; \} | packages/codeboltjs/src/tools/types.ts:13 |
| `function.parameters.additionalProperties?` | `boolean` | packages/codeboltjs/src/tools/types.ts:17 |
| `function.parameters.properties` | `Record`\<`string`, `any`\> | packages/codeboltjs/src/tools/types.ts:15 |
| `function.parameters.required?` | `string`[] | packages/codeboltjs/src/tools/types.ts:16 |
| `function.parameters.type` | `"object"` | packages/codeboltjs/src/tools/types.ts:14 |
| <a id="type"></a> `type` | `"function"` | packages/codeboltjs/src/tools/types.ts:9 |
