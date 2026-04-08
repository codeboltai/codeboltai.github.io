---
title: OpenAITool
---

[**@codebolt/agent**](../../index)

***

# Interface: OpenAITool

Defined in: packages/agent/src/unified/types/libTypes.ts:90

OpenAI-compatible tool format

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description`: `string`; `name`: `string`; `parameters`: \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \}; \} | [packages/agent/src/unified/types/libTypes.ts:92](packages/agent/src/unified/types/libTypes.ts#L92) |
| `function.description` | `string` | [packages/agent/src/unified/types/libTypes.ts:94](packages/agent/src/unified/types/libTypes.ts#L94) |
| `function.name` | `string` | [packages/agent/src/unified/types/libTypes.ts:93](packages/agent/src/unified/types/libTypes.ts#L93) |
| `function.parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \} | [packages/agent/src/unified/types/libTypes.ts:95](packages/agent/src/unified/types/libTypes.ts#L95) |
| `function.parameters.additionalProperties?` | `boolean` | [packages/agent/src/unified/types/libTypes.ts:99](packages/agent/src/unified/types/libTypes.ts#L99) |
| `function.parameters.properties` | `Record`\<`string`, `unknown`\> | [packages/agent/src/unified/types/libTypes.ts:97](packages/agent/src/unified/types/libTypes.ts#L97) |
| `function.parameters.required?` | `string`[] | [packages/agent/src/unified/types/libTypes.ts:98](packages/agent/src/unified/types/libTypes.ts#L98) |
| `function.parameters.type` | `"object"` | [packages/agent/src/unified/types/libTypes.ts:96](packages/agent/src/unified/types/libTypes.ts#L96) |
| <a id="type"></a> `type` | `"function"` | [packages/agent/src/unified/types/libTypes.ts:91](packages/agent/src/unified/types/libTypes.ts#L91) |
