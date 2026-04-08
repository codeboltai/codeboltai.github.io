---
title: BaseToolInvocation
---

[**@codebolt/codeboltjs**](../index)

***

# Abstract Class: BaseToolInvocation\<TParams, TResult\>

Defined in: packages/codeboltjs/src/tools/base-tool.ts:33

A convenience base class for ToolInvocation

## Type Parameters

| Type Parameter |
| ------ |
| `TParams` *extends* `object` |
| `TResult` *extends* [`ToolFrameworkResult`](../interfaces/ToolFrameworkResult) |

## Implements

- [`ToolInvocation`](../interfaces/ToolInvocation)\<`TParams`, `TResult`\>

## Constructors

### Constructor

```ts
new BaseToolInvocation<TParams, TResult>(params: TParams): BaseToolInvocation<TParams, TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `TParams` |

#### Returns

`BaseToolInvocation`\<`TParams`, `TResult`\>

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="params"></a> `params` | `readonly` | `TParams` | The validated parameters for this specific invocation | [packages/codeboltjs/src/tools/base-tool.ts:37](packages/codeboltjs/src/tools/base-tool.ts#L37) |

## Methods

### execute()

```ts
abstract execute(signal: AbortSignal, updateOutput?: (output: string) => void): Promise<TResult>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:49

Executes the tool with the validated parameters

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `signal` | `AbortSignal` |
| `updateOutput?` | (`output`: `string`) => `void` |

#### Returns

`Promise`\<`TResult`\>

#### Implementation of

[`ToolInvocation`](../interfaces/ToolInvocation).[`execute`](../interfaces/ToolInvocation.md#execute)

***

### shouldConfirmExecute()

```ts
shouldConfirmExecute(_abortSignal: AbortSignal): Promise<
  | false
| ToolCallConfirmationDetails>;
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:43

Determines if the tool should prompt for confirmation before execution

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_abortSignal` | `AbortSignal` |

#### Returns

`Promise`\<
  \| `false`
  \| [`ToolCallConfirmationDetails`](../type-aliases/ToolCallConfirmationDetails)\>

#### Implementation of

[`ToolInvocation`](../interfaces/ToolInvocation).[`shouldConfirmExecute`](../interfaces/ToolInvocation.md#shouldconfirmexecute)

***

### toolLocations()

```ts
toolLocations(): ToolLocation[];
```

Defined in: packages/codeboltjs/src/tools/base-tool.ts:39

Determines what file system paths the tool will affect

#### Returns

[`ToolLocation`](../interfaces/ToolLocation)[]

#### Implementation of

[`ToolInvocation`](../interfaces/ToolInvocation).[`toolLocations`](../interfaces/ToolInvocation.md#toollocations)
