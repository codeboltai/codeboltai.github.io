---
title: UnifiedStepOutput
---

[**@codebolt/agent**](../../index)

***

# Interface: UnifiedStepOutput

Defined in: packages/agent/src/unified/types/types.ts:92

Output from unified agent step processing

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `Record`\<`string`, `any`\> | Updated context | [packages/agent/src/unified/types/types.ts:100](packages/agent/src/unified/types/types.ts#L100) |
| <a id="finished"></a> `finished` | `boolean` | Whether processing is complete | [packages/agent/src/unified/types/types.ts:96](packages/agent/src/unified/types/types.ts#L96) |
| <a id="llmresponse"></a> `llmResponse` | `any` | LLM response | [packages/agent/src/unified/types/types.ts:94](packages/agent/src/unified/types/types.ts#L94) |
| <a id="toolcalls"></a> `toolCalls?` | \{ `parameters`: `any`; `tool`: `string`; \}[] | Tool calls detected | [packages/agent/src/unified/types/types.ts:98](packages/agent/src/unified/types/types.ts#L98) |
