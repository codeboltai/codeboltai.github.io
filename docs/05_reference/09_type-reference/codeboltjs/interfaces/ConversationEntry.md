---
title: ConversationEntry
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: ConversationEntry

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:199

Conversation history entry for agent interactions

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="content"></a> `content` | \| `string` \| \{ `text`: `string`; `type`: `string`; \}[] | [packages/codeboltjs/src/types/libFunctionTypes.ts:201](packages/codeboltjs/src/types/libFunctionTypes.ts#L201) |
| <a id="role"></a> `role` | `"user"` \| `"assistant"` \| `"tool"` \| `"system"` | [packages/codeboltjs/src/types/libFunctionTypes.ts:200](packages/codeboltjs/src/types/libFunctionTypes.ts#L200) |
| <a id="tool_call_id"></a> `tool_call_id?` | `string` | [packages/codeboltjs/src/types/libFunctionTypes.ts:202](packages/codeboltjs/src/types/libFunctionTypes.ts#L202) |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | [packages/codeboltjs/src/types/libFunctionTypes.ts:203](packages/codeboltjs/src/types/libFunctionTypes.ts#L203) |
