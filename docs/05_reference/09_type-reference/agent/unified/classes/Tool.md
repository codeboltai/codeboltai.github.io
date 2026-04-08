---
title: Tool
---

[**@codebolt/agent**](../../index)

***

# Class: Tool

Defined in: packages/agent/src/unified/agent/tools.ts:9

## Implements

- `ToolInterface`

## Constructors

### Constructor

```ts
new Tool(config: ToolConfig): Tool;
```

Defined in: packages/agent/src/unified/agent/tools.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `ToolConfig` |

#### Returns

`Tool`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description` | `string` | [packages/agent/src/unified/agent/tools.ts:11](packages/agent/src/unified/agent/tools.ts#L11) |
| <a id="executionfunction"></a> `executionFunction` | (`context`: `unknown`) => `unknown` | [packages/agent/src/unified/agent/tools.ts:14](packages/agent/src/unified/agent/tools.ts#L14) |
| <a id="id"></a> `id` | `string` | [packages/agent/src/unified/agent/tools.ts:10](packages/agent/src/unified/agent/tools.ts#L10) |
| <a id="inputschema"></a> `inputSchema` | `ZodType` | [packages/agent/src/unified/agent/tools.ts:12](packages/agent/src/unified/agent/tools.ts#L12) |
| <a id="outputschema"></a> `outputSchema?` | `ZodType`\<`any`, `ZodTypeDef`, `any`\> | [packages/agent/src/unified/agent/tools.ts:13](packages/agent/src/unified/agent/tools.ts#L13) |

## Methods

### execute()

```ts
execute(input: unknown, context: unknown): Promise<{
  error?: string;
  result?: unknown;
  success: boolean;
}>;
```

Defined in: packages/agent/src/unified/agent/tools.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |
| `context` | `unknown` |

#### Returns

`Promise`\<\{
  `error?`: `string`;
  `result?`: `unknown`;
  `success`: `boolean`;
\}\>

#### Implementation of

```ts
ToolInterface.execute
```

***

### getToolDescription()

```ts
getToolDescription(): string;
```

Defined in: packages/agent/src/unified/agent/tools.ts:54

#### Returns

`string`

#### Implementation of

```ts
ToolInterface.getToolDescription
```

***

### getToolSchema()

```ts
getToolSchema(): ZodType<any, ZodTypeDef, any>;
```

Defined in: packages/agent/src/unified/agent/tools.ts:57

#### Returns

`ZodType`\<`any`, `ZodTypeDef`, `any`\>

#### Implementation of

```ts
ToolInterface.getToolSchema
```

***

### toOpenAITool()

```ts
toOpenAITool(): OpenAITool;
```

Defined in: packages/agent/src/unified/agent/tools.ts:116

Converts the tool to OpenAI function format

#### Returns

[`OpenAITool`](../interfaces/OpenAITool)

OpenAI function specification
