---
title: MessageObject
---

[**@codebolt/types**](../index)

***

# Interface: MessageObject

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:13

Represents a message in the conversation with roles and content.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | \| `string` \| \{ `image_url?`: \{ `url`: `string`; \}; `text?`: `string`; `type`: `string`; \}[] | The content of the message, can be an array of content blocks or a string | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:17](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L17) |
| <a id="name"></a> `name?` | `string` | Optional name for the message | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:29](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L29) |
| <a id="role"></a> `role` | `"user"` \| `"assistant"` \| `"tool"` \| `"system"` | The role of the message sender: user, assistant, tool, or system | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:15](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L15) |
| <a id="tool_call_id"></a> `tool_call_id?` | `string` | Optional ID for tool calls | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:25](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L25) |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | Optional tool calls for assistant messages | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:27](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L27) |
