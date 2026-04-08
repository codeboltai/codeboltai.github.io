---
title: CodeboltAgentConfig
---

[**@codebolt/agent**](../../index)

***

# Interface: CodeboltAgentConfig

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:28

Configuration options for CodeboltAgent

## Extends

- `AgentConfig`

## Properties

| Property | Type | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="defaultprocessors"></a> `defaultProcessors?` | `boolean` | - | - | `AgentConfig.defaultProcessors` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:15 |
| <a id="enablelogging"></a> `enableLogging?` | `boolean` | Enable logging for debugging purposes. Defaults to true. | `AgentConfig.enableLogging` | - | [packages/agent/src/unified/agent/codeboltAgent.ts:33](packages/agent/src/unified/agent/codeboltAgent.ts#L33) |
| <a id="instructions"></a> `instructions?` | `string` | - | - | `AgentConfig.instructions` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:6 |
| <a id="llmconfig"></a> `llmConfig?` | `LLMConfig` | LLM configuration | - | `AgentConfig.llmConfig` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:21 |
| <a id="maxconversationlength"></a> `maxConversationLength?` | `number` | Maximum conversation length before summarization | - | `AgentConfig.maxConversationLength` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:19 |
| <a id="maxiterations"></a> `maxIterations?` | `number` | Maximum iterations for agent loops | - | `AgentConfig.maxIterations` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:17 |
| <a id="name"></a> `name?` | `string` | - | - | `AgentConfig.name` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:5 |
| <a id="processors"></a> `processors?` | \{ `messageModifiers?`: `MessageModifier`[]; `postInferenceProcessors?`: `PostInferenceProcessor`[]; `postToolCallProcessors?`: `PostToolCallProcessor`[]; `preInferenceProcessors?`: `PreInferenceProcessor`[]; `preToolCallProcessors?`: `PreToolCallProcessor`[]; \} | - | - | `AgentConfig.processors` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:8 |
| `processors.messageModifiers?` | `MessageModifier`[] | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:9 |
| `processors.postInferenceProcessors?` | `PostInferenceProcessor`[] | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:11 |
| `processors.postToolCallProcessors?` | `PostToolCallProcessor`[] | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:13 |
| `processors.preInferenceProcessors?` | `PreInferenceProcessor`[] | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:10 |
| `processors.preToolCallProcessors?` | `PreToolCallProcessor`[] | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:12 |
| <a id="retryconfig"></a> `retryConfig?` | \{ `maxRetries?`: `number`; `retryDelay?`: `number`; \} | Retry configuration | - | `AgentConfig.retryConfig` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:25 |
| `retryConfig.maxRetries?` | `number` | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:26 |
| `retryConfig.retryDelay?` | `number` | - | - | - | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:27 |
| <a id="tools"></a> `tools?` | `Tool`[] | - | - | `AgentConfig.tools` | common/types/dist/agent/highLevelAgentTypes/agentTypes.d.ts:7 |
