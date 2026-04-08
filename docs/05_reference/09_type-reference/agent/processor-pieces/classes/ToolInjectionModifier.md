---
title: ToolInjectionModifier
---

[**@codebolt/agent**](../../index)

***

# Class: ToolInjectionModifier

Defined in: packages/agent/src/processor-pieces/messageModifiers/toolInjectionModifier.ts:14

## Extends

- `BaseMessageModifier`

## Constructors

### Constructor

```ts
new ToolInjectionModifier(options: ToolInjectionOptions): ToolInjectionModifier;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/toolInjectionModifier.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ToolInjectionOptions`](../interfaces/ToolInjectionOptions) |

#### Returns

`ToolInjectionModifier`

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
modify(originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<ProcessedMessage>;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/toolInjectionModifier.ts:28

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
