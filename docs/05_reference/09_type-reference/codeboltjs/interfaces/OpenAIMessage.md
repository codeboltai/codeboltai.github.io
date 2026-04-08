---
title: OpenAIMessage
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: OpenAIMessage

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:157

OpenAI-compatible message format for conversations

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | \| `string` \| \{ `text`: `string`; `type`: `string`; \}[] | Content of the message | [packages/codeboltjs/src/types/libFunctionTypes.ts:161](packages/codeboltjs/src/types/libFunctionTypes.ts#L161) |
| <a id="role"></a> `role` | `"user"` \| `"assistant"` \| `"tool"` \| `"system"` | Role of the message sender | [packages/codeboltjs/src/types/libFunctionTypes.ts:159](packages/codeboltjs/src/types/libFunctionTypes.ts#L159) |
| <a id="tool_call_id"></a> `tool_call_id?` | `string` | Tool call ID for tool messages | [packages/codeboltjs/src/types/libFunctionTypes.ts:163](packages/codeboltjs/src/types/libFunctionTypes.ts#L163) |
| <a id="tool_calls"></a> `tool_calls?` | \{ `function`: \{ `arguments`: `string`; `name`: `string`; \}; `id`: `string`; `type`: `"function"`; \}[] | Tool calls for assistant messages | [packages/codeboltjs/src/types/libFunctionTypes.ts:165](packages/codeboltjs/src/types/libFunctionTypes.ts#L165) |
