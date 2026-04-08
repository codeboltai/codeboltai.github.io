---
title: UnifiedResponseExecutor
---

[**@codebolt/agent**](../../index)

***

# Interface: UnifiedResponseExecutor

Defined in: packages/agent/src/unified/types/types.ts:192

Unified response executor interface

## Methods

### addFollowUpConversationProcessor()

```ts
addFollowUpConversationProcessor(processor: Processor): void;
```

Defined in: packages/agent/src/unified/types/types.ts:208

Add a follow-up conversation processor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor` |

#### Returns

`void`

***

### addPreToolCallProcessor()

```ts
addPreToolCallProcessor(processor: Processor): void;
```

Defined in: packages/agent/src/unified/types/types.ts:216

Add a pre-tool call processor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor` |

#### Returns

`void`

***

### buildFollowUpConversation()

```ts
buildFollowUpConversation(
   conversationHistory: OpenAIMessage[], 
   toolResults: ToolResult[], 
llmResponse: any): Promise<OpenAIMessage[]>;
```

Defined in: packages/agent/src/unified/types/types.ts:198

Build follow-up conversation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] |
| `toolResults` | [`ToolResult`](ToolResult)[] |
| `llmResponse` | `any` |

#### Returns

`Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\>

***

### clearFollowUpConversationProcessors()

```ts
clearFollowUpConversationProcessors(): void;
```

Defined in: packages/agent/src/unified/types/types.ts:214

Clear all follow-up conversation processors

#### Returns

`void`

***

### clearPreToolCallProcessors()

```ts
clearPreToolCallProcessors(): void;
```

Defined in: packages/agent/src/unified/types/types.ts:222

Clear all pre-tool call processors

#### Returns

`void`

***

### executeResponse()

```ts
executeResponse(input: UnifiedResponseInput): Promise<UnifiedResponseOutput>;
```

Defined in: packages/agent/src/unified/types/types.ts:194

Execute response processing including tool execution

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`UnifiedResponseInput`](UnifiedResponseInput) |

#### Returns

`Promise`\<[`UnifiedResponseOutput`](UnifiedResponseOutput)\>

***

### executeTools()

```ts
executeTools(
   llmResponse: any, 
   tools: OpenAITool[], 
context?: Record<string, any>): Promise<ToolResult[]>;
```

Defined in: packages/agent/src/unified/types/types.ts:196

Execute tools from LLM response

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `llmResponse` | `any` |
| `tools` | [`OpenAITool`](OpenAITool)[] |
| `context?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<[`ToolResult`](ToolResult)[]\>

***

### getFollowUpConversationProcessors()

```ts
getFollowUpConversationProcessors(): Processor[];
```

Defined in: packages/agent/src/unified/types/types.ts:212

Get all follow-up conversation processors

#### Returns

`Processor`[]

***

### getPreToolCallProcessors()

```ts
getPreToolCallProcessors(): Processor[];
```

Defined in: packages/agent/src/unified/types/types.ts:220

Get all pre-tool call processors

#### Returns

`Processor`[]

***

### removeFollowUpConversationProcessor()

```ts
removeFollowUpConversationProcessor(processor: Processor): boolean;
```

Defined in: packages/agent/src/unified/types/types.ts:210

Remove a follow-up conversation processor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor` |

#### Returns

`boolean`

***

### removePreToolCallProcessor()

```ts
removePreToolCallProcessor(processor: Processor): boolean;
```

Defined in: packages/agent/src/unified/types/types.ts:218

Remove a pre-tool call processor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor` |

#### Returns

`boolean`

***

### shouldSummarizeConversation()

```ts
shouldSummarizeConversation(conversationHistory: OpenAIMessage[]): boolean;
```

Defined in: packages/agent/src/unified/types/types.ts:204

Check if conversation needs summarization

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] |

#### Returns

`boolean`

***

### summarizeConversation()

```ts
summarizeConversation(conversationHistory: OpenAIMessage[]): Promise<OpenAIMessage[]>;
```

Defined in: packages/agent/src/unified/types/types.ts:206

Summarize conversation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] |

#### Returns

`Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\>
