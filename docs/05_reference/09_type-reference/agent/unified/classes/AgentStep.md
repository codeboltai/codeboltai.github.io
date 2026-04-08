---
title: AgentStep
---

[**@codebolt/agent**](../../index)

***

# Class: AgentStep

Defined in: packages/agent/src/unified/base/agentStep.ts:13

Unified agent step that handles LLM interaction and tool call analysis

## Implements

- `AgentStepInterface`

## Constructors

### Constructor

```ts
new AgentStep(options: {
  llmRole?: string;
  postInferenceProcessors?: PostInferenceProcessor[];
  preInferenceProcessors?: PreInferenceProcessor[];
}): AgentStep;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `llmRole?`: `string`; `postInferenceProcessors?`: `PostInferenceProcessor`[]; `preInferenceProcessors?`: `PreInferenceProcessor`[]; \} |
| `options.llmRole?` | `string` |
| `options.postInferenceProcessors?` | `PostInferenceProcessor`[] |
| `options.preInferenceProcessors?` | `PreInferenceProcessor`[] |

#### Returns

`AgentStep`

## Methods

### executeStep()

```ts
executeStep(originalRequest: FlatUserMessage, createdMessage: ProcessedMessage): Promise<AgentStepOutput>;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:34

Execute a single agent step

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalRequest` | `FlatUserMessage` |
| `createdMessage` | `ProcessedMessage` |

#### Returns

`Promise`\<`AgentStepOutput`\>

#### Implementation of

```ts
AgentStepInterface.executeStep
```

***

### getLLMConfig()

```ts
getLLMConfig(): string;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:103

Get current LLM configuration

#### Returns

`string`

***

### getPostInferenceProcessors()

```ts
getPostInferenceProcessors(): PostInferenceProcessor[];
```

Defined in: packages/agent/src/unified/base/agentStep.ts:120

#### Returns

`PostInferenceProcessor`[]

***

### getPreInferenceProcessors()

```ts
getPreInferenceProcessors(): PreInferenceProcessor[];
```

Defined in: packages/agent/src/unified/base/agentStep.ts:111

#### Returns

`PreInferenceProcessor`[]

***

### setLLMConfig()

```ts
setLLMConfig(config: string): void;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:96

Update LLM configuration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `string` |

#### Returns

`void`

***

### updatePostInferenceProcessors()

```ts
updatePostInferenceProcessors(processors: PostInferenceProcessor[]): void;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:116

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processors` | `PostInferenceProcessor`[] |

#### Returns

`void`

***

### updatePreInferenceProcessors()

```ts
updatePreInferenceProcessors(processors: PreInferenceProcessor[]): void;
```

Defined in: packages/agent/src/unified/base/agentStep.ts:107

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processors` | `PreInferenceProcessor`[] |

#### Returns

`void`
