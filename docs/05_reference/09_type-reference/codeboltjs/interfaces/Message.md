---
title: Message
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: Message

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:55

Represents a message in the conversation with roles and content.

## Indexable

```ts
[key: string]: unknown
```

Additional properties that might be present

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` \| `MessageContentBlock`[] | The content of the message, can be an array of content blocks or a string | [packages/codeboltjs/src/types/libFunctionTypes.ts:59](packages/codeboltjs/src/types/libFunctionTypes.ts#L59) |
| <a id="role"></a> `role` | `"user"` \| `"assistant"` \| `"tool"` \| `"system"` | The role of the message sender: user, assistant, tool, or system | [packages/codeboltjs/src/types/libFunctionTypes.ts:57](packages/codeboltjs/src/types/libFunctionTypes.ts#L57) |
| <a id="tool_call_id"></a> `tool_call_id?` | `string` | Optional ID for tool calls | [packages/codeboltjs/src/types/libFunctionTypes.ts:61](packages/codeboltjs/src/types/libFunctionTypes.ts#L61) |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | Optional tool calls for assistant messages | [packages/codeboltjs/src/types/libFunctionTypes.ts:63](packages/codeboltjs/src/types/libFunctionTypes.ts#L63) |
