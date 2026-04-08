---
title: CodebaseSearchTool
---

[**@codebolt/codeboltjs**](../index)

***

# Class: CodebaseSearchTool

Defined in: packages/codeboltjs/src/tools/search/codebase-search.ts:112

Implementation of the CodebaseSearch tool logic

## Extends

- [`BaseDeclarativeTool`](BaseDeclarativeTool)\<`CodebaseSearchToolParams`, [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

## Constructors

### Constructor

```ts
new CodebaseSearchTool(): CodebaseSearchTool;
```

Defined in: packages/codeboltjs/src/tools/search/codebase-search.ts:118

#### Returns

`CodebaseSearchTool`

#### Overrides

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`constructor`](BaseDeclarativeTool.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="canupdateoutput"></a> `canUpdateOutput` | `readonly` | `boolean` | `false` | Whether the tool supports live (streaming) output | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`canUpdateOutput`](BaseDeclarativeTool.md#canupdateoutput) | [packages/codeboltjs/src/tools/base-tool.ts:69](packages/codeboltjs/src/tools/base-tool.ts#L69) |
| <a id="description"></a> `description` | `readonly` | `string` | `undefined` | Description of what the tool does | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`description`](BaseDeclarativeTool.md#description) | [packages/codeboltjs/src/tools/base-tool.ts:65](packages/codeboltjs/src/tools/base-tool.ts#L65) |
| <a id="displayname"></a> `displayName` | `readonly` | `string` | `undefined` | The user-friendly display name of the tool | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`displayName`](BaseDeclarativeTool.md#displayname) | [packages/codeboltjs/src/tools/base-tool.ts:64](packages/codeboltjs/src/tools/base-tool.ts#L64) |
| <a id="isoutputmarkdown"></a> `isOutputMarkdown` | `readonly` | `boolean` | `true` | Whether the tool's output should be rendered as markdown | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`isOutputMarkdown`](BaseDeclarativeTool.md#isoutputmarkdown) | [packages/codeboltjs/src/tools/base-tool.ts:68](packages/codeboltjs/src/tools/base-tool.ts#L68) |
| <a id="kind"></a> `kind` | `readonly` | [`Kind`](../enumerations/Kind) | `undefined` | The kind of tool for categorization and permissions | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`kind`](BaseDeclarativeTool.md#kind) | [packages/codeboltjs/src/tools/base-tool.ts:66](packages/codeboltjs/src/tools/base-tool.ts#L66) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The internal name of the tool (used for API calls) | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`name`](BaseDeclarativeTool.md#name) | [packages/codeboltjs/src/tools/base-tool.ts:63](packages/codeboltjs/src/tools/base-tool.ts#L63) |
| <a id="name-1"></a> `Name` | `readonly` | `string` | `'codebase_search'` | - | - | [packages/codeboltjs/src/tools/search/codebase-search.ts:116](packages/codeboltjs/src/tools/search/codebase-search.ts#L116) |
| <a id="parameterschema"></a> `parameterSchema` | `readonly` | `unknown` | `undefined` | - | [`BaseDeclarativeTool`](BaseDeclarativeTool).[`parameterSchema`](BaseDeclarativeTool.md#parameterschema) | [packages/codeboltjs/src/tools/base-tool.ts:67](packages/codeboltjs/src/tools/base-tool.ts#L67) |

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

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`explanation`](BaseDeclarativeTool.md#explanation)

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

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`genAISchema`](BaseDeclarativeTool.md#genaischema)

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

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`openAIFunctionCall`](BaseDeclarativeTool.md#openaifunctioncall)

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

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`schema`](BaseDeclarativeTool.md#schema)

## Methods

### build()

```ts
build(params: CodebaseSearchToolParams): ToolInvocation<CodebaseSearchToolParams, ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:215

The core of the pattern. It validates parameters and, if successful,
returns a `ToolInvocation` object that encapsulates the logic for the
specific, validated call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |

#### Returns

[`ToolInvocation`](../interfaces/ToolInvocation)\<`CodebaseSearchToolParams`, [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`build`](BaseDeclarativeTool.md#build)

***

### buildAndExecute()

```ts
buildAndExecute(
   params: CodebaseSearchToolParams, 
   signal: AbortSignal, 
updateOutput?: (output: string) => void): Promise<ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:145

A convenience method that builds and executes the tool in one step.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |
| `signal` | `AbortSignal` |
| `updateOutput?` | (`output`: `string`) => `void` |

#### Returns

`Promise`\<[`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`buildAndExecute`](BaseDeclarativeTool.md#buildandexecute)

***

### createInvocation()

```ts
protected createInvocation(params: CodebaseSearchToolParams): ToolInvocation<CodebaseSearchToolParams, ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/search/codebase-search.ts:159

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |

#### Returns

[`ToolInvocation`](../interfaces/ToolInvocation)\<`CodebaseSearchToolParams`, [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

#### Overrides

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`createInvocation`](BaseDeclarativeTool.md#createinvocation)

***

### validateBuildAndExecute()

```ts
validateBuildAndExecute(params: CodebaseSearchToolParams, abortSignal: AbortSignal): Promise<ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:174

A convenience method that builds and executes the tool in one step.
Never throws.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |
| `abortSignal` | `AbortSignal` |

#### Returns

`Promise`\<[`ToolFrameworkResult`](../interfaces/ToolFrameworkResult)\>

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`validateBuildAndExecute`](BaseDeclarativeTool.md#validatebuildandexecute)

***

### validateToolParams()

```ts
validateToolParams(params: CodebaseSearchToolParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:223

Validates the raw tool parameters.
Subclasses should override this to add custom validation logic
beyond the JSON schema check.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |

#### Returns

`string` \| `null`

#### Inherited from

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`validateToolParams`](BaseDeclarativeTool.md#validatetoolparams)

***

### validateToolParamValues()

```ts
protected validateToolParamValues(params: CodebaseSearchToolParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/search/codebase-search.ts:149

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `CodebaseSearchToolParams` |

#### Returns

`string` \| `null`

#### Overrides

[`BaseDeclarativeTool`](BaseDeclarativeTool).[`validateToolParamValues`](BaseDeclarativeTool.md#validatetoolparamvalues)
