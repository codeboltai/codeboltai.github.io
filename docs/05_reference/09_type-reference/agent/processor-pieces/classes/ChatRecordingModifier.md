---
title: ChatRecordingModifier
---

[**@codebolt/agent**](../../index)

***

# Class: ChatRecordingModifier

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:24

## Extends

- `BaseMessageModifier`

## Constructors

### Constructor

```ts
new ChatRecordingModifier(options: ChatRecordingOptions): ChatRecordingModifier;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ChatRecordingOptions`](../interfaces/ChatRecordingOptions) |

#### Returns

`ChatRecordingModifier`

#### Overrides

```ts
BaseMessageModifier.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `protected` | `Record`\<`string`, `unknown`\> | `\{\}` | `BaseMessageModifier.context` | [packages/agent/src/processor-pieces/base/baseMessageModifier.ts:16](packages/agent/src/processor-pieces/base/baseMessageModifier.ts#L16) |

## Methods

### getRecordingFile()

```ts
getRecordingFile(): string | undefined;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:163

#### Returns

`string` \| `undefined`

***

### isRecording()

```ts
isRecording(): boolean;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:167

#### Returns

`boolean`

***

### modify()

```ts
modify(originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<ProcessedMessage>;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalRequest` | `FlatUserMessage` |
| `createdMessage` | `ProcessedMessage` |

#### Returns

`Promise`\<`ProcessedMessage`\>

#### Overrides

```ts
BaseMessageModifier.modify
```

***

### startRecording()

```ts
startRecording(customPath?: string): void;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:147

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `customPath?` | `string` |

#### Returns

`void`

***

### stopRecording()

```ts
stopRecording(): void;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/chatRecordingModifier.ts:155

#### Returns

`void`
