---
title: OpenAIMessage
---

[**@codebolt/agent**](../../index)

***

# Interface: OpenAIMessage

Defined in: packages/agent/src/unified/types/libTypes.ts:67

OpenAI-compatible message format for conversations

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | \| `string` \| \{ `text`: `string`; `type`: `string`; \}[] | Content of the message | [packages/agent/src/unified/types/libTypes.ts:71](packages/agent/src/unified/types/libTypes.ts#L71) |
| <a id="name"></a> `name?` | `string` | Name for tool messages | [packages/agent/src/unified/types/libTypes.ts:84](packages/agent/src/unified/types/libTypes.ts#L84) |
| <a id="role"></a> `role` | `"assistant"` \| `"user"` \| `"tool"` \| `"system"` | Role of the message sender | [packages/agent/src/unified/types/libTypes.ts:69](packages/agent/src/unified/types/libTypes.ts#L69) |
| <a id="tool_call_id"></a> `tool_call_id?` | `string` | Tool call ID for tool messages | [packages/agent/src/unified/types/libTypes.ts:73](packages/agent/src/unified/types/libTypes.ts#L73) |
| <a id="tool_calls"></a> `tool_calls?` | \{ `function`: \{ `arguments`: `string`; `name`: `string`; \}; `id`: `string`; `type`: `"function"`; \}[] | Tool calls for assistant messages | [packages/agent/src/unified/types/libTypes.ts:75](packages/agent/src/unified/types/libTypes.ts#L75) |
