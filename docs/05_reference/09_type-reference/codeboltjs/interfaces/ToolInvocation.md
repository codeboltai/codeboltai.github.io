---
title: ToolInvocation
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: ToolInvocation\<TParams, TResult\>

Defined in: packages/codeboltjs/src/tools/types.ts:278

Represents a validated and ready-to-execute tool call

## Type Parameters

| Type Parameter |
| ------ |
| `TParams` *extends* `object` |
| `TResult` *extends* [`ToolFrameworkResult`](ToolFrameworkResult) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="params"></a> `params` | `TParams` | The validated parameters for this specific invocation | [packages/codeboltjs/src/tools/types.ts:283](packages/codeboltjs/src/tools/types.ts#L283) |

## Methods

### execute()

```ts
execute(signal: AbortSignal, updateOutput?: (output: string) => void): Promise<TResult>;
```

Defined in: packages/codeboltjs/src/tools/types.ts:294

Executes the tool with the validated parameters

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `signal` | `AbortSignal` |
| `updateOutput?` | (`output`: `string`) => `void` |

#### Returns

`Promise`\<`TResult`\>

***

### shouldConfirmExecute()

```ts
shouldConfirmExecute(abortSignal: AbortSignal): Promise<
  | false
| ToolCallConfirmationDetails>;
```

Defined in: packages/codeboltjs/src/tools/types.ts:289

Determines if the tool should prompt for confirmation before execution

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `abortSignal` | `AbortSignal` |

#### Returns

`Promise`\<
  \| `false`
  \| [`ToolCallConfirmationDetails`](../type-aliases/ToolCallConfirmationDetails)\>

***

### toolLocations()

```ts
toolLocations(): ToolLocation[];
```

Defined in: packages/codeboltjs/src/tools/types.ts:286

Determines what file system paths the tool will affect

#### Returns

[`ToolLocation`](ToolLocation)[]
