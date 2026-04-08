---
title: MemoryImportModifier
---

[**@codebolt/agent**](../../index)

***

# Class: MemoryImportModifier

Defined in: packages/agent/src/processor-pieces/messageModifiers/memoryImportModifier.ts:15

## Extends

- `BaseMessageModifier`

## Constructors

### Constructor

```ts
new MemoryImportModifier(options: MemoryImportOptions): MemoryImportModifier;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/memoryImportModifier.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MemoryImportOptions`](../interfaces/MemoryImportOptions) |

#### Returns

`MemoryImportModifier`

#### Overrides

```ts
BaseMessageModifier.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `protected` | `Record`\<`string`, `unknown`\> | `\{\}` | `BaseMessageModifier.context` | [packages/agent/src/processor-pieces/base/baseMessageModifier.ts:16](packages/agent/src/processor-pieces/base/baseMessageModifier.ts#L16) |

## Methods

### modify()

```ts
modify(_originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<ProcessedMessage>;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/memoryImportModifier.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_originalRequest` | `FlatUserMessage` |
| `createdMessage` | `ProcessedMessage` |

#### Returns

`Promise`\<`ProcessedMessage`\>

#### Overrides

```ts
BaseMessageModifier.modify
```
