---
title: CodeboltAgent
---

[**@codebolt/agent**](../../index)

***

# Class: CodeboltAgent

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:86

CodeboltAgent is a high-level agent class that:
- Uses InitialPromptGenerator with configurable processors/modifiers
- Runs an agent loop with AgentStep and ResponseExecutor
- Handles tool execution and conversation flow automatically
- Is triggered via processMessage (not via onMessage listener)

## Example

```typescript
import { CodeboltAgent } from '@codebolt/agent/unified';
import { 
    EnvironmentContextModifier,
    CoreSystemPromptModifier,
    DirectoryContextModifier,
    IdeContextModifier,
    AtFileProcessorModifier,
    ToolInjectionModifier,
    ChatHistoryMessageModifier
} from '@codebolt/agent/processor-pieces';

const systemPrompt = `You are an AI coding assistant...`;

const agent = new CodeboltAgent({
    instructions: systemPrompt,
    processors: {
        messageModifiers: [
            new ChatHistoryMessageModifier({ enableChatHistory: true }),
            new EnvironmentContextModifier({ enableFullContext: true }),
            new DirectoryContextModifier(),
            new IdeContextModifier({
                includeActiveFile: true,
                includeOpenFiles: true,
                includeCursorPosition: true,
                includeSelectedText: true
            }),
            new CoreSystemPromptModifier({ customSystemPrompt: systemPrompt }),
            new ToolInjectionModifier({ includeToolDescriptions: true }),
            new AtFileProcessorModifier({ enableRecursiveSearch: true })
        ],
        preInferenceProcessors: [],
        postInferenceProcessors: [],
        preToolCallProcessors: [],
        postToolCallProcessors: []
    }
});

// Process a message (triggered from graph node)
const result = await agent.processMessage(userMessage);
```

## Constructors

### Constructor

```ts
new CodeboltAgent(config: CodeboltAgentConfig): CodeboltAgent;
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CodeboltAgentConfig`](../interfaces/CodeboltAgentConfig) |

#### Returns

`CodeboltAgent`

## Methods

### getConfig()

```ts
getConfig(): CodeboltAgentConfig;
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:210

Get the current configuration

#### Returns

[`CodeboltAgentConfig`](../interfaces/CodeboltAgentConfig)

***

### getMessageModifiers()

```ts
getMessageModifiers(): MessageModifier[];
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:217

Get all message modifiers

#### Returns

`MessageModifier`[]

***

### getPostInferenceProcessors()

```ts
getPostInferenceProcessors(): PostInferenceProcessor[];
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:231

Get all post-inference processors

#### Returns

`PostInferenceProcessor`[]

***

### getPostToolCallProcessors()

```ts
getPostToolCallProcessors(): PostToolCallProcessor[];
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:245

Get all post-tool-call processors

#### Returns

`PostToolCallProcessor`[]

***

### getPreInferenceProcessors()

```ts
getPreInferenceProcessors(): PreInferenceProcessor[];
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:224

Get all pre-inference processors

#### Returns

`PreInferenceProcessor`[]

***

### getPreToolCallProcessors()

```ts
getPreToolCallProcessors(): PreToolCallProcessor[];
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:238

Get all pre-tool-call processors

#### Returns

`PreToolCallProcessor`[]

***

### processMessage()

```ts
processMessage(reqMessage: FlatUserMessage): Promise<{
  error?: string;
  result: any;
  success: boolean;
}>;
```

Defined in: packages/agent/src/unified/agent/codeboltAgent.ts:143

Process a message through the agent pipeline.
This is the main entry point - triggered from graph nodes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reqMessage` | `FlatUserMessage` |

#### Returns

`Promise`\<\{
  `error?`: `string`;
  `result`: `any`;
  `success`: `boolean`;
\}\>
