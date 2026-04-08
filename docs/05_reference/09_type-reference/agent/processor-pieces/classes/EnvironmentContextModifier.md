---
title: EnvironmentContextModifier
---

[**@codebolt/agent**](../../index)

***

# Class: EnvironmentContextModifier

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:16

## Extends

- `BaseMessageModifier`

## Constructors

### Constructor

```ts
new EnvironmentContextModifier(options: EnvironmentContextOptions): EnvironmentContextModifier;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EnvironmentContextOptions`](../interfaces/EnvironmentContextOptions) |

#### Returns

`EnvironmentContextModifier`

#### Overrides

```ts
BaseMessageModifier.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `protected` | `Record`\<`string`, `unknown`\> | `\{\}` | `BaseMessageModifier.context` | [packages/agent/src/processor-pieces/base/baseMessageModifier.ts:16](packages/agent/src/processor-pieces/base/baseMessageModifier.ts#L16) |

## Methods

### disableFullContext()

```ts
disableFullContext(): void;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:248

#### Returns

`void`

***

### enableFullContext()

```ts
enableFullContext(): void;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:244

#### Returns

`void`

***

### isFullContextEnabled()

```ts
isFullContextEnabled(): boolean;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:252

#### Returns

`boolean`

***

### modify()

```ts
modify(_originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<ProcessedMessage>;
```

Defined in: packages/agent/src/processor-pieces/messageModifiers/environmentContextModifier.ts:44

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
