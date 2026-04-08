---
title: DeclarativeTool
---

[**@codebolt/codeboltjs**](../index)

***

# Abstract Class: DeclarativeTool\<TParams, TResult\>

Defined in: packages/codeboltjs/src/tools/base-tool.ts:58

Base class for tools that separates validation from execution

## Extended by

- [`BaseDeclarativeTool`](BaseDeclarativeTool)

## Type Parameters

| Type Parameter |
| ------ |
| `TParams` *extends* `object` |
| `TResult` *extends* [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult) |

## Implements

- [`ToolBuilder`](../interfaces/ToolBuilder)\<`TParams`, `TResult`\>

## Constructors

### Constructor

```ts
new DeclarativeTool<TParams, TResult>(
   name: string, 
   displayName: string, 
   description: string, 
   kind: Kind, 
   parameterSchema: unknown, 
   isOutputMarkdown: boolean, 
canUpdateOutput: boolean): DeclarativeTool<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:62

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `displayName` | `string` | `undefined` |
| `description` | `string` | `undefined` |
| `kind` | [`Kind`](../enumerations/Kind) | `undefined` |
| `parameterSchema` | `unknown` | `undefined` |
| `isOutputMarkdown` | `boolean` | `true` |
| `canUpdateOutput` | `boolean` | `false` |

#### Returns

`DeclarativeTool`\<`TParams`, `TResult`\>

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="canupdateoutput"></a> `canUpdateOutput` | `readonly` | `boolean` | `false` | Whether the tool supports live (streaming) output | [packages/codeboltjs/src/tools/base-tool.ts:69](packages/codeboltjs/src/tools/base-tool.ts#L69) |
| <a id="description"></a> `description` | `readonly` | `string` | `undefined` | Description of what the tool does | [packages/codeboltjs/src/tools/base-tool.ts:65](packages/codeboltjs/src/tools/base-tool.ts#L65) |
| <a id="displayname"></a> `displayName` | `readonly` | `string` | `undefined` | The user-friendly display name of the tool | [packages/codeboltjs/src/tools/base-tool.ts:64](packages/codeboltjs/src/tools/base-tool.ts#L64) |
| <a id="isoutputmarkdown"></a> `isOutputMarkdown` | `readonly` | `boolean` | `true` | Whether the tool's output should be rendered as markdown | [packages/codeboltjs/src/tools/base-tool.ts:68](packages/codeboltjs/src/tools/base-tool.ts#L68) |
| <a id="kind"></a> `kind` | `readonly` | [`Kind`](../enumerations/Kind) | `undefined` | The kind of tool for categorization and permissions | [packages/codeboltjs/src/tools/base-tool.ts:66](packages/codeboltjs/src/tools/base-tool.ts#L66) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The internal name of the tool (used for API calls) | [packages/codeboltjs/src/tools/base-tool.ts:63](packages/codeboltjs/src/tools/base-tool.ts#L63) |
| <a id="parameterschema"></a> `parameterSchema` | `readonly` | `unknown` | `undefined` | - | [packages/codeboltjs/src/tools/base-tool.ts:67](packages/codeboltjs/src/tools/base-tool.ts#L67) |

## Accessors

### explanation

#### Get Signature

```ts
get explanation(): string;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:76

One sentence explanation as to why this tool is being used, and how it contributes to the goal.
Defaults to description if not implemented by subclass.

##### Returns

`string`

One sentence explanation as to why this tool is being used, and how it contributes to the goal.

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`explanation`](../interfaces/ToolBuilder.md#explanation)

***

### genAISchema

#### Get Signature

```ts
get genAISchema(): FunctionDeclaration;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:118

Get Google GenAI schema format (for backward compatibility)

##### Returns

`FunctionDeclaration`

Function declaration schema for Google GenAI (for backward compatibility)

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`genAISchema`](../interfaces/ToolBuilder.md#genaischema)

***

### openAIFunctionCall

#### Get Signature

```ts
get openAIFunctionCall(): OpenAIFunctionCall;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:102

Get OpenAI function call format

##### Returns

[`OpenAIFunctionCall`](../interfaces/OpenAIFunctionCall)

***

### schema

#### Get Signature

```ts
get schema(): OpenAIToolSchema;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:83

Primary schema format (OpenAI tool schema)

##### Returns

[`OpenAIToolSchema`](../interfaces/OpenAIToolSchema)

Primary schema format (OpenAI tool schema)

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`schema`](../interfaces/ToolBuilder.md#schema)

## Methods

### build()

```ts
abstract build(params: TParams): ToolInvocation<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:140

The core of the pattern. It validates parameters and, if successful,
returns a `ToolInvocation` object that encapsulates the logic for the
specific, validated call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

[`ToolInvocation`](../interfaces/ToolInvocation)\<`TParams`, `TResult`\>

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`build`](../interfaces/ToolBuilder.md#build)

***

### buildAndExecute()

```ts
buildAndExecute(
   params: TParams, 
   signal: AbortSignal, 
updateOutput?: (output: string) => void): Promise<TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:145

A convenience method that builds and executes the tool in one step.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |
| `signal` | `AbortSignal` |
| `updateOutput?` | (`output`: `string`) => `void` |

#### Returns

`Promise`\<`TResult`\>

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`buildAndExecute`](../interfaces/ToolBuilder.md#buildandexecute)

***

### validateBuildAndExecute()

```ts
validateBuildAndExecute(params: TParams, abortSignal: AbortSignal): Promise<ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:174

A convenience method that builds and executes the tool in one step.
Never throws.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |
| `abortSignal` | `AbortSignal` |

#### Returns

`Promise`\<[`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`validateBuildAndExecute`](../interfaces/ToolBuilder.md#validatebuildandexecute)

***

### validateToolParams()

```ts
validateToolParams(_params: TParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:131

Validates the raw tool parameters.
Subclasses should override this to add custom validation logic
beyond the JSON schema check.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | `TParams` |

#### Returns

`string` \| `null`

#### Implementation of

[`ToolBuilder`](../interfaces/ToolBuilder).[`validateToolParams`](../interfaces/ToolBuilder.md#validatetoolparams)
