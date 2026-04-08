---
title: ToolParameterModifier
---

[**@codebolt/agent**](../../index)

***

# Class: ToolParameterModifier

Defined in: packages/agent/src/processor-pieces/pretoolCallProcessors/toolParameterModifier.ts:25

## Extends

- `BasePreToolCallProcessor`

## Constructors

### Constructor

```ts
new ToolParameterModifier(_options: ToolParameterModifierOptions): ToolParameterModifier;
```

Defined in: packages/agent/src/processor-pieces/pretoolCallProcessors/toolParameterModifier.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_options` | [`ToolParameterModifierOptions`](../interfaces/ToolParameterModifierOptions) |

#### Returns

`ToolParameterModifier`

#### Overrides

```ts
BasePreToolCallProcessor.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `protected` | `Record`\<`string`, `unknown`\> | `\{\}` | `BasePreToolCallProcessor.context` | [packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:19](packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts#L19) |

## Methods

### clearContext()

```ts
clearContext(): void;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:40

#### Returns

`void`

#### Inherited from

```ts
BasePreToolCallProcessor.clearContext
```

***

### createInterceptedTool()

```ts
protected createInterceptedTool(
   toolName: string, 
   originalInput: unknown, 
   result?: unknown, 
   reason?: string): InterceptedTool;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolName` | `string` |
| `originalInput` | `unknown` |
| `result?` | `unknown` |
| `reason?` | `string` |

#### Returns

`InterceptedTool`

#### Inherited from

```ts
BasePreToolCallProcessor.createInterceptedTool
```

***

### getContext()

```ts
getContext(key: string): unknown;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`unknown`

#### Inherited from

```ts
BasePreToolCallProcessor.getContext
```

***

### interceptTool()?

```ts
optional interceptTool(_toolName: string, _toolInput: unknown): Promise<boolean>;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_toolName` | `string` |
| `_toolInput` | `unknown` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

```ts
BasePreToolCallProcessor.interceptTool
```

***

### modify()

```ts
modify(input: PreToolCallProcessorInput): Promise<PreToolCallProcessorOutput>;
```

Defined in: packages/agent/src/processor-pieces/pretoolCallProcessors/toolParameterModifier.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `PreToolCallProcessorInput` |

#### Returns

`Promise`\<`PreToolCallProcessorOutput`\>

#### Overrides

```ts
BasePreToolCallProcessor.modify
```

***

### setContext()

```ts
setContext(key: string, value: unknown): void;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Inherited from

```ts
BasePreToolCallProcessor.setContext
```

***

### validateToolCall()

```ts
protected validateToolCall(toolCall: ToolCall, validationRules: ToolValidationRule[]): ToolValidationResult;
```

Defined in: packages/agent/src/processor-pieces/base/basePreToolCallProcessor.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCall` | `ToolCall` |
| `validationRules` | `ToolValidationRule`[] |

#### Returns

`ToolValidationResult`

#### Inherited from

```ts
BasePreToolCallProcessor.validateToolCall
```
