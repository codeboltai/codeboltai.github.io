---
title: BaseDeclarativeTool
---

[**@codebolt/codeboltjs**](../index)

***

# Abstract Class: BaseDeclarativeTool\<TParams, TResult\>

Defined in: packages/codeboltjs/src/tools/base-tool.ts:211

Base class for declarative tools with built-in validation

## Extends

- [`DeclarativeTool`](DeclarativeTool)\<`TParams`, `TResult`\>

## Extended by

- [`ReadFileTool`](ReadFileTool)
- [`WriteFileTool`](WriteFileTool)
- [`EditTool`](EditTool)
- [`ListDirectoryTool`](ListDirectoryTool)
- [`ReadManyFilesTool`](ReadManyFilesTool)
- [`GlobTool`](GlobTool)
- [`GrepTool`](GrepTool)
- [`SearchFilesTool`](SearchFilesTool)
- [`CodebaseSearchTool`](CodebaseSearchTool)
- [`SearchMcpToolTool`](SearchMcpToolTool)
- [`ListCodeDefinitionNamesTool`](ListCodeDefinitionNamesTool)
- [`ExecuteCommandTool`](ExecuteCommandTool)
- [`GitInitTool`](GitInitTool)
- [`GitStatusTool`](GitStatusTool)
- [`GitAddTool`](GitAddTool)
- [`GitCommitTool`](GitCommitTool)
- [`GitPushTool`](GitPushTool)
- [`GitPullTool`](GitPullTool)
- [`GitCheckoutTool`](GitCheckoutTool)
- [`GitBranchTool`](GitBranchTool)
- [`GitLogsTool`](GitLogsTool)
- [`GitDiffTool`](GitDiffTool)
- [`GitCloneTool`](GitCloneTool)
- [`BrowserNavigateTool`](BrowserNavigateTool)
- [`BrowserScreenshotTool`](BrowserScreenshotTool)
- [`BrowserClickTool`](BrowserClickTool)
- [`BrowserTypeTool`](BrowserTypeTool)
- [`BrowserScrollTool`](BrowserScrollTool)
- [`BrowserGetContentTool`](BrowserGetContentTool)
- [`BrowserGetHtmlTool`](BrowserGetHtmlTool)
- [`BrowserGetMarkdownTool`](BrowserGetMarkdownTool)
- [`BrowserGetUrlTool`](BrowserGetUrlTool)
- [`BrowserCloseTool`](BrowserCloseTool)
- [`BrowserEnterTool`](BrowserEnterTool)
- [`BrowserSearchTool`](BrowserSearchTool)
- [`TaskCreateTool`](TaskCreateTool)
- [`TaskUpdateTool`](TaskUpdateTool)
- [`TaskDeleteTool`](TaskDeleteTool)
- [`TaskListTool`](TaskListTool)
- [`TaskGetTool`](TaskGetTool)
- [`TaskAssignTool`](TaskAssignTool)
- [`TaskExecuteTool`](TaskExecuteTool)
- [`AgentFindTool`](AgentFindTool)
- [`AgentStartTool`](AgentStartTool)
- [`AgentListTool`](AgentListTool)
- [`AgentDetailsTool`](AgentDetailsTool)
- [`ThreadCreateTool`](ThreadCreateTool)
- [`ThreadCreateStartTool`](ThreadCreateStartTool)
- [`ThreadCreateBackgroundTool`](ThreadCreateBackgroundTool)
- [`ThreadListTool`](ThreadListTool)
- [`ThreadGetTool`](ThreadGetTool)
- [`ThreadStartTool`](ThreadStartTool)
- [`ThreadUpdateTool`](ThreadUpdateTool)
- [`ThreadDeleteTool`](ThreadDeleteTool)
- [`ThreadGetMessagesTool`](ThreadGetMessagesTool)
- [`ThreadUpdateStatusTool`](ThreadUpdateStatusTool)
- [`OrchestratorListTool`](OrchestratorListTool)
- [`OrchestratorGetTool`](OrchestratorGetTool)
- [`OrchestratorGetSettingsTool`](OrchestratorGetSettingsTool)
- [`OrchestratorCreateTool`](OrchestratorCreateTool)
- [`OrchestratorUpdateTool`](OrchestratorUpdateTool)
- [`OrchestratorUpdateSettingsTool`](OrchestratorUpdateSettingsTool)
- [`OrchestratorDeleteTool`](OrchestratorDeleteTool)
- [`OrchestratorUpdateStatusTool`](OrchestratorUpdateStatusTool)

## Type Parameters

| Type Parameter |
| ------ |
| `TParams` *extends* `object` |
| `TResult` *extends* [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult) |

## Constructors

### Constructor

```ts
new BaseDeclarativeTool<TParams, TResult>(
   name: string, 
   displayName: string, 
   description: string, 
   kind: Kind, 
   parameterSchema: unknown, 
   isOutputMarkdown: boolean, 
canUpdateOutput: boolean): BaseDeclarativeTool<TParams, TResult>;
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

`BaseDeclarativeTool`\<`TParams`, `TResult`\>

#### Inherited from

[`DeclarativeTool`](DeclarativeTool).[`constructor`](DeclarativeTool.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="canupdateoutput"></a> `canUpdateOutput` | `readonly` | `boolean` | `false` | Whether the tool supports live (streaming) output | [`DeclarativeTool`](DeclarativeTool).[`canUpdateOutput`](DeclarativeTool.md#canupdateoutput) | [packages/codeboltjs/src/tools/base-tool.ts:69](packages/codeboltjs/src/tools/base-tool.ts#L69) |
| <a id="description"></a> `description` | `readonly` | `string` | `undefined` | Description of what the tool does | [`DeclarativeTool`](DeclarativeTool).[`description`](DeclarativeTool.md#description) | [packages/codeboltjs/src/tools/base-tool.ts:65](packages/codeboltjs/src/tools/base-tool.ts#L65) |
| <a id="displayname"></a> `displayName` | `readonly` | `string` | `undefined` | The user-friendly display name of the tool | [`DeclarativeTool`](DeclarativeTool).[`displayName`](DeclarativeTool.md#displayname) | [packages/codeboltjs/src/tools/base-tool.ts:64](packages/codeboltjs/src/tools/base-tool.ts#L64) |
| <a id="isoutputmarkdown"></a> `isOutputMarkdown` | `readonly` | `boolean` | `true` | Whether the tool's output should be rendered as markdown | [`DeclarativeTool`](DeclarativeTool).[`isOutputMarkdown`](DeclarativeTool.md#isoutputmarkdown) | [packages/codeboltjs/src/tools/base-tool.ts:68](packages/codeboltjs/src/tools/base-tool.ts#L68) |
| <a id="kind"></a> `kind` | `readonly` | [`Kind`](../enumerations/Kind) | `undefined` | The kind of tool for categorization and permissions | [`DeclarativeTool`](DeclarativeTool).[`kind`](DeclarativeTool.md#kind) | [packages/codeboltjs/src/tools/base-tool.ts:66](packages/codeboltjs/src/tools/base-tool.ts#L66) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The internal name of the tool (used for API calls) | [`DeclarativeTool`](DeclarativeTool).[`name`](DeclarativeTool.md#name) | [packages/codeboltjs/src/tools/base-tool.ts:63](packages/codeboltjs/src/tools/base-tool.ts#L63) |
| <a id="parameterschema"></a> `parameterSchema` | `readonly` | `unknown` | `undefined` | - | [`DeclarativeTool`](DeclarativeTool).[`parameterSchema`](DeclarativeTool.md#parameterschema) | [packages/codeboltjs/src/tools/base-tool.ts:67](packages/codeboltjs/src/tools/base-tool.ts#L67) |

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

[`DeclarativeTool`](DeclarativeTool).[`explanation`](DeclarativeTool.md#explanation)

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

[`DeclarativeTool`](DeclarativeTool).[`genAISchema`](DeclarativeTool.md#genaischema)

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

[`DeclarativeTool`](DeclarativeTool).[`openAIFunctionCall`](DeclarativeTool.md#openaifunctioncall)

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

[`DeclarativeTool`](DeclarativeTool).[`schema`](DeclarativeTool.md#schema)

## Methods

### build()

```ts
build(params: TParams): ToolInvocation<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:215

The core of the pattern. It validates parameters and, if successful,
returns a `ToolInvocation` object that encapsulates the logic for the
specific, validated call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

[`ToolInvocation`](../interfaces/ToolInvocation)\<`TParams`, `TResult`\>

#### Overrides

[`DeclarativeTool`](DeclarativeTool).[`build`](DeclarativeTool.md#build)

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

#### Inherited from

[`DeclarativeTool`](DeclarativeTool).[`buildAndExecute`](DeclarativeTool.md#buildandexecute)

***

### createInvocation()

```ts
abstract protected createInvocation(params: TParams): ToolInvocation<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:239

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

[`ToolInvocation`](../interfaces/ToolInvocation)\<`TParams`, `TResult`\>

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

#### Inherited from

[`DeclarativeTool`](DeclarativeTool).[`validateBuildAndExecute`](DeclarativeTool.md#validatebuildandexecute)

***

### validateToolParams()

```ts
validateToolParams(params: TParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:223

Validates the raw tool parameters.
Subclasses should override this to add custom validation logic
beyond the JSON schema check.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

`string` \| `null`

#### Overrides

[`DeclarativeTool`](DeclarativeTool).[`validateToolParams`](DeclarativeTool.md#validatetoolparams)

***

### validateToolParamValues()

```ts
protected validateToolParamValues(_params: TParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:235

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_params` | `TParams` |

#### Returns

`string` \| `null`
