---
title: ToolBuilder
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: ToolBuilder\<TParams, TResult\>

Defined in: packages/codeboltjs/src/tools/types.ts:303

Interface for a tool builder that validates parameters and creates invocations

## Type Parameters

| Type Parameter |
| ------ |
| `TParams` *extends* `object` |
| `TResult` *extends* [`ToolFrameworkResult`](ToolFrameworkResult) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="canupdateoutput"></a> `canUpdateOutput` | `boolean` | Whether the tool supports live (streaming) output | [packages/codeboltjs/src/tools/types.ts:332](packages/codeboltjs/src/tools/types.ts#L332) |
| <a id="description"></a> `description` | `string` | Description of what the tool does | [packages/codeboltjs/src/tools/types.ts:314](packages/codeboltjs/src/tools/types.ts#L314) |
| <a id="displayname"></a> `displayName` | `string` | The user-friendly display name of the tool | [packages/codeboltjs/src/tools/types.ts:311](packages/codeboltjs/src/tools/types.ts#L311) |
| <a id="explanation"></a> `explanation` | `string` | One sentence explanation as to why this tool is being used, and how it contributes to the goal. | [packages/codeboltjs/src/tools/types.ts:317](packages/codeboltjs/src/tools/types.ts#L317) |
| <a id="genaischema"></a> `genAISchema` | `FunctionDeclaration` | Function declaration schema for Google GenAI (for backward compatibility) | [packages/codeboltjs/src/tools/types.ts:326](packages/codeboltjs/src/tools/types.ts#L326) |
| <a id="isoutputmarkdown"></a> `isOutputMarkdown` | `boolean` | Whether the tool's output should be rendered as markdown | [packages/codeboltjs/src/tools/types.ts:329](packages/codeboltjs/src/tools/types.ts#L329) |
| <a id="kind"></a> `kind` | [`Kind`](../enumerations/Kind) | The kind of tool for categorization and permissions | [packages/codeboltjs/src/tools/types.ts:320](packages/codeboltjs/src/tools/types.ts#L320) |
| <a id="name"></a> `name` | `string` | The internal name of the tool (used for API calls) | [packages/codeboltjs/src/tools/types.ts:308](packages/codeboltjs/src/tools/types.ts#L308) |
| <a id="schema"></a> `schema` | [`OpenAIToolSchema`](OpenAIToolSchema) | Primary schema format (OpenAI tool schema) | [packages/codeboltjs/src/tools/types.ts:323](packages/codeboltjs/src/tools/types.ts#L323) |

## Methods

### build()

```ts
build(params: TParams): ToolInvocation<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/types.ts:335

Validates raw parameters and builds a ready-to-execute invocation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

[`ToolInvocation`](ToolInvocation)\<`TParams`, `TResult`\>

***

### buildAndExecute()

```ts
buildAndExecute(
   params: TParams, 
   signal: AbortSignal, 
updateOutput?: (output: string) => void): Promise<TResult>;
```

Defined in: packages/codeboltjs/src/tools/types.ts:341

Builds and executes tool in one step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |
| `signal` | `AbortSignal` |
| `updateOutput?` | (`output`: `string`) => `void` |

#### Returns

`Promise`\<`TResult`\>

***

### validateBuildAndExecute()

```ts
validateBuildAndExecute(params: TParams, abortSignal: AbortSignal): Promise<ToolFrameworkResult>;
```

Defined in: packages/codeboltjs/src/tools/types.ts:348

Validates, builds, and executes tool in one step. Never throws.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |
| `abortSignal` | `AbortSignal` |

#### Returns

`Promise`\<[`ToolFrameworkResult`](ToolFrameworkResult)\>

***

### validateToolParams()

```ts
validateToolParams(params: TParams): string | null;
```

Defined in: packages/codeboltjs/src/tools/types.ts:338

Validates tool parameters

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

`string` \| `null`
