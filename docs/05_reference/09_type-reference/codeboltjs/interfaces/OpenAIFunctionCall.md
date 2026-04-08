---
title: OpenAIFunctionCall
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: OpenAIFunctionCall

Defined in: packages/codeboltjs/src/tools/types.ts:25

OpenAI function call format

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description` | `string` | [packages/codeboltjs/src/tools/types.ts:27](packages/codeboltjs/src/tools/types.ts#L27) |
| <a id="name"></a> `name` | `string` | [packages/codeboltjs/src/tools/types.ts:26](packages/codeboltjs/src/tools/types.ts#L26) |
| <a id="parameters"></a> `parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `any`\>; `required?`: `string`[]; `type`: `"object"`; \} | [packages/codeboltjs/src/tools/types.ts:28](packages/codeboltjs/src/tools/types.ts#L28) |
| `parameters.additionalProperties?` | `boolean` | [packages/codeboltjs/src/tools/types.ts:32](packages/codeboltjs/src/tools/types.ts#L32) |
| `parameters.properties` | `Record`\<`string`, `any`\> | [packages/codeboltjs/src/tools/types.ts:30](packages/codeboltjs/src/tools/types.ts#L30) |
| `parameters.required?` | `string`[] | [packages/codeboltjs/src/tools/types.ts:31](packages/codeboltjs/src/tools/types.ts#L31) |
| `parameters.type` | `"object"` | [packages/codeboltjs/src/tools/types.ts:29](packages/codeboltjs/src/tools/types.ts#L29) |
