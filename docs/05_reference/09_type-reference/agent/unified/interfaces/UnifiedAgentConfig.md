---
title: UnifiedAgentConfig
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedAgentConfig

Defined in: packages/agent/src/unified/types/types.ts:17

Configuration for the unified agent

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="codebolt"></a> `codebolt?` | [`CodeboltAPI`](CodeboltAPI) | Codebolt API instance | packages/agent/src/unified/types/types.ts:25 |
| <a id="enablelogging"></a> `enableLogging?` | `boolean` | Enable logging | packages/agent/src/unified/types/types.ts:27 |
| <a id="llmconfig"></a> `llmConfig?` | `LLMConfig` | LLM configuration | packages/agent/src/unified/types/types.ts:23 |
| <a id="maxconversationlength"></a> `maxConversationLength?` | `number` | Maximum conversation length before summarization | packages/agent/src/unified/types/types.ts:21 |
| <a id="maxiterations"></a> `maxIterations?` | `number` | Maximum iterations for agent loops | packages/agent/src/unified/types/types.ts:19 |
| <a id="retryconfig"></a> `retryConfig?` | \{ `maxRetries?`: `number`; `retryDelay?`: `number`; \} | Retry configuration | packages/agent/src/unified/types/types.ts:29 |
| `retryConfig.maxRetries?` | `number` | - | packages/agent/src/unified/types/types.ts:30 |
| `retryConfig.retryDelay?` | `number` | - | packages/agent/src/unified/types/types.ts:31 |
