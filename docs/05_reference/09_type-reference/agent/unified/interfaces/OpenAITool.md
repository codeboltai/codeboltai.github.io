---
title: OpenAITool
---

[**@codebolt/agent**](../index.md)

***

# Interface: OpenAITool

Defined in: packages/agent/src/unified/types/libTypes.ts:90

OpenAI-compatible tool format

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="function"></a> `function` | \{ `description`: `string`; `name`: `string`; `parameters`: \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \}; \} | packages/agent/src/unified/types/libTypes.ts:92 |
| `function.description` | `string` | packages/agent/src/unified/types/libTypes.ts:94 |
| `function.name` | `string` | packages/agent/src/unified/types/libTypes.ts:93 |
| `function.parameters` | \{ `additionalProperties?`: `boolean`; `properties`: `Record`\<`string`, `unknown`\>; `required?`: `string`[]; `type`: `"object"`; \} | packages/agent/src/unified/types/libTypes.ts:95 |
| `function.parameters.additionalProperties?` | `boolean` | packages/agent/src/unified/types/libTypes.ts:99 |
| `function.parameters.properties` | `Record`\<`string`, `unknown`\> | packages/agent/src/unified/types/libTypes.ts:97 |
| `function.parameters.required?` | `string`[] | packages/agent/src/unified/types/libTypes.ts:98 |
| `function.parameters.type` | `"object"` | packages/agent/src/unified/types/libTypes.ts:96 |
| <a id="type"></a> `type` | `"function"` | packages/agent/src/unified/types/libTypes.ts:91 |
