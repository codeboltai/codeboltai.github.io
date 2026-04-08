---
title: StreamChunk
---

[**@codebolt/agent**](../../index)

***

# Interface: StreamChunk

Defined in: packages/agent/src/unified/types/libTypes.ts:385

Stream chunk for real-time responses

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | Chunk content | [packages/agent/src/unified/types/libTypes.ts:389](packages/agent/src/unified/types/libTypes.ts#L389) |
| <a id="error"></a> `error?` | `string` | Error information if applicable | [packages/agent/src/unified/types/libTypes.ts:395](packages/agent/src/unified/types/libTypes.ts#L395) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Additional metadata | [packages/agent/src/unified/types/libTypes.ts:397](packages/agent/src/unified/types/libTypes.ts#L397) |
| <a id="toolcall"></a> `toolCall?` | `ToolCall` | Tool call information if applicable | [packages/agent/src/unified/types/libTypes.ts:391](packages/agent/src/unified/types/libTypes.ts#L391) |
| <a id="toolresult"></a> `toolResult?` | [`ToolResult`](ToolResult) | Tool result if applicable | [packages/agent/src/unified/types/libTypes.ts:393](packages/agent/src/unified/types/libTypes.ts#L393) |
| <a id="type"></a> `type` | `"text"` \| `"error"` \| `"tool_call"` \| `"tool_result"` \| `"done"` | Type of chunk | [packages/agent/src/unified/types/libTypes.ts:387](packages/agent/src/unified/types/libTypes.ts#L387) |
