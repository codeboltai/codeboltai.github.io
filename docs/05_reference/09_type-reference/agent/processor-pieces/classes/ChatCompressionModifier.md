---
title: ChatCompressionModifier
---

[**@codebolt/agent**](../../index)

***

# Class: ChatCompressionModifier

Defined in: packages/agent/src/processor-pieces/preInferenceProcessors/chatCompressionModifier.ts:93

## Extends

- `BasePreInferenceProcessor`

## Constructors

### Constructor

```ts
new ChatCompressionModifier(options: ChatCompressionOptions): ChatCompressionModifier;
```

Defined in: packages/agent/src/processor-pieces/preInferenceProcessors/chatCompressionModifier.ts:97

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ChatCompressionOptions`](../interfaces/ChatCompressionOptions) |

#### Returns

`ChatCompressionModifier`

#### Overrides

```ts
BasePreInferenceProcessor.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `protected` | `Record`\<`string`, `unknown`\> | `\{\}` | `BasePreInferenceProcessor.context` | [packages/agent/src/processor-pieces/base/basePreInferenceProcessor.ts:15](packages/agent/src/processor-pieces/base/basePreInferenceProcessor.ts#L15) |

## Methods

### modify()

```ts
modify(_originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<ProcessedMessage>;
```

Defined in: packages/agent/src/processor-pieces/preInferenceProcessors/chatCompressionModifier.ts:106

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_originalRequest` | `FlatUserMessage` |
| `createdMessage` | `ProcessedMessage` |

#### Returns

`Promise`\<`ProcessedMessage`\>

#### Overrides

```ts
BasePreInferenceProcessor.modify
```

***

### resetCompressionState()

```ts
resetCompressionState(): void;
```

Defined in: packages/agent/src/processor-pieces/preInferenceProcessors/chatCompressionModifier.ts:310

#### Returns

`void`

***

### tryCompressChat()

```ts
tryCompressChat(messages: MessageObject[], force: boolean): Promise<ChatCompressionInfo & {
  compressedMessages?: MessageObject[];
}>;
```

Defined in: packages/agent/src/processor-pieces/preInferenceProcessors/chatCompressionModifier.ts:145

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `messages` | `MessageObject`[] | `undefined` |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`ChatCompressionInfo` & \{
  `compressedMessages?`: `MessageObject`[];
\}\>
