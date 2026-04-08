---
title: createCodeboltAgent
---

[**@codebolt/agent**](../../index)

***

# Function: createCodeboltAgent()

```ts
function createCodeboltAgent(options: {
  enableLogging?: boolean;
  messageModifiers?: MessageModifier[];
  postInferenceProcessors?: PostInferenceProcessor[];
  postToolCallProcessors?: PostToolCallProcessor[];
  preInferenceProcessors?: PreInferenceProcessor[];
  preToolCallProcessors?: PreToolCallProcessor[];
  systemPrompt: string;
}): CodeboltAgent;
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:253

Factory function to create a CodeboltAgent with common defaults

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `enableLogging?`: `boolean`; `messageModifiers?`: `MessageModifier`[]; `postInferenceProcessors?`: `PostInferenceProcessor`[]; `postToolCallProcessors?`: `PostToolCallProcessor`[]; `preInferenceProcessors?`: `PreInferenceProcessor`[]; `preToolCallProcessors?`: `PreToolCallProcessor`[]; `systemPrompt`: `string`; \} |
| `options.enableLogging?` | `boolean` |
| `options.messageModifiers?` | `MessageModifier`[] |
| `options.postInferenceProcessors?` | `PostInferenceProcessor`[] |
| `options.postToolCallProcessors?` | `PostToolCallProcessor`[] |
| `options.preInferenceProcessors?` | `PreInferenceProcessor`[] |
| `options.preToolCallProcessors?` | `PreToolCallProcessor`[] |
| `options.systemPrompt` | `string` |

## Returns

[`CodeboltAgent`](../classes/CodeboltAgent)
