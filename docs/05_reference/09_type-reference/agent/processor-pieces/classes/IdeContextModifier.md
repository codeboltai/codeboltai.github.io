---
title: IdeContextModifier
---

[**@codebolt/agent**](../../index)

***

# Class: IdeContextModifier

Defined in: packages/agent/src/processor-pieces/messageModifiers/ideContextModifier.ts:29

## Extends

- `BaseMessageModifier`

## Constructors

### Constructor

```ts
new IdeContextModifier(options: IdeContextOptions): IdeContextModifier;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/ideContextModifier.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`IdeContextOptions`](../interfaces/IdeContextOptions) |

#### Returns

`IdeContextModifier`

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

Defined in: packages/agent/src/processor-pieces/messageModifiers/ideContextModifier.ts:45

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

### setForceFullContext()

```ts
setForceFullContext(force: boolean): void;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/ideContextModifier.ts:219

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force` | `boolean` |

#### Returns

`void`
