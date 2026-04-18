---
title: OpenAIFunctionCall
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: OpenAIFunctionCall

Defined in: packages/codeboltjs/src/tools/types.ts:25

OpenAI function call format

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description` | `string` | packages/codeboltjs/src/tools/types.ts:27 |
| <a id="name"></a> `name` | `string` | packages/codeboltjs/src/tools/types.ts:26 |
| <a id="parameters"></a> `parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `any`\>; `required?`: `string`[]; `type`: `"object"`; \} | packages/codeboltjs/src/tools/types.ts:28 |
| `parameters.additionalProperties?` | `boolean` | packages/codeboltjs/src/tools/types.ts:32 |
| `parameters.properties` | `Record`\<`string`, `any`\> | packages/codeboltjs/src/tools/types.ts:30 |
| `parameters.required?` | `string`[] | packages/codeboltjs/src/tools/types.ts:31 |
| `parameters.type` | `"object"` | packages/codeboltjs/src/tools/types.ts:29 |
