---
sidebar_position: 2
title: Level 1 — Framework
---

# Level 1 — Framework

Write a code-based agent on top of `@codebolt/agent`. In practice, level 1 today means the unified API in `@codebolt/agent/unified` plus reusable modifiers and processors from `@codebolt/agent/processor-pieces`.

This is the default choice for real custom agents. You write TypeScript and customize the prompt and processor pipeline, while the framework handles the prompt -> LLM -> tool execution -> follow-up loop.

## When level 1 is the right choice

- You need custom code, not just a prompt remix.
- You want to add, remove, or reorder context modifiers and processors.
- You need loop detection, compaction, or tool-call hooks.
- You want a normal Codebolt agent loop without hand-writing the whole thing.
- [Level 0](./level-0-remix.md) is too limited, but [level 2](./level-2-codeboltjs.md) would be unnecessary control.

If you need complete ownership of the loop and runtime wiring, skip to [level 2](./level-2-codeboltjs.md).

## What the framework actually gives you

At the high level, `CodeboltAgent.processMessage()` does four things:

1. Builds the initial prompt with `InitialPromptGenerator`.
2. Runs an LLM step with `AgentStep`.
3. Executes tool calls and builds the next prompt with `ResponseExecutor`.
4. Repeats until the run completes or `maxTurns` is hit.

Optional runtime features in the current implementation:

- Default message modifiers if you do not provide your own.
- Tool refresh before each turn.
- Loop detection via `LoopDetectionService`.
- Conversation compaction and recovery via `compaction`.

This is a concrete runtime API, not a planned one. You do not `export default createCodeboltAgent(...)` as the agent contract. The normal pattern is to register a `codebolt.onMessage(...)` handler and call `processMessage(...)` inside it.

## The normal entry point

A level-1 agent usually registers `codebolt.onMessage(...)` and delegates to `CodeboltAgent`. That is the pattern used by real agents such as `act-updated`.

```ts
import codebolt from '@codebolt/codeboltjs';
import { CodeboltAgent } from '@codebolt/agent/unified';
import { FlatUserMessage } from '@codebolt/types/sdk';

const agent = new CodeboltAgent({
  instructions: 'You are a helpful coding assistant.',
  enableLogging: true,
});

codebolt.onMessage(async (reqMessage: FlatUserMessage) => {
  const result = await agent.processMessage(reqMessage);

  if (!result.success) {
    throw new Error(result.error ?? 'Agent failed');
  }

  return result.finalMessage;
});
```

The package also exports `createCodeboltAgent(...)`, but it is only a thin convenience wrapper around `new CodeboltAgent(...)`. For anything non-trivial, the class is the clearer surface.

If you do not supply custom `messageModifiers`, `CodeboltAgent` installs a default stack:

- `ChatHistoryMessageModifier`
- `EnvironmentContextModifier`
- `DirectoryContextModifier`
- `IdeContextModifier`
- `CoreSystemPromptModifier`
- `ToolInjectionModifier`
- `AtFileProcessorModifier`

## Customizing the pipeline

`CodeboltAgent` configuration is centered on `instructions` plus optional `context`, `allowedTools`, `enableLogging`, `maxTurns`, `compaction`, `loopDetectionService`, and `processors`.

The real extension points live in `processors`:

- `messageModifiers`
- `preInferenceProcessors`
- `postInferenceProcessors`
- `preToolCallProcessors`
- `postToolCallProcessors`

A trimmed version of the `act-updated` agent looks like this:

```ts
import {
  CodeboltAgent,
  LoopDetectionService,
} from '@codebolt/agent/unified';
import {
  EnvironmentContextModifier,
  CoreSystemPromptModifier,
  DirectoryContextModifier,
  IdeContextModifier,
  AtFileProcessorModifier,
  ToolInjectionModifier,
  ChatHistoryMessageModifier,
} from '@codebolt/agent/processor-pieces';

const loopDetectionService = new LoopDetectionService({ debug: true });

const agent = new CodeboltAgent({
  instructions: systemPrompt,
  enableLogging: true,
  loopDetectionService,
  maxTurns: 30,
  compaction: {
    enableLogging: true,
    autoCompactEnabled: true,
    contextCollapseEnabled: false,
  },
  processors: {
    messageModifiers: [
      new ChatHistoryMessageModifier({ enableChatHistory: true }),
      new EnvironmentContextModifier({ enableFullContext: false }),
      new DirectoryContextModifier(),
      new IdeContextModifier({
        includeActiveFile: true,
        includeOpenFiles: true,
        includeCursorPosition: true,
        includeSelectedText: true,
      }),
      new CoreSystemPromptModifier({ customSystemPrompt: systemPrompt }),
      new ToolInjectionModifier({ includeToolDescriptions: true }),
      new AtFileProcessorModifier({ enableRecursiveSearch: true }),
      externalEventProcessor,
    ],
    postToolCallProcessors: [externalEventPostToolProcessor],
  },
});
```

This is the core level-1 pattern: keep the framework loop, but swap in your own prompt assembly and processing hooks. In `act-updated`, custom processors inject external steering and queued events between turns.

## When `CodeboltAgent` is not enough

You can drop one layer lower without leaving level 1. The framework exposes its building blocks directly:

- `InitialPromptGenerator`
- `AgentStep`
- `ResponseExecutor`

Use them when you need to change the turn logic but still want framework components instead of raw `@codebolt/codeboltjs`.

```ts
const prompt = await promptGenerator.processMessage(reqMessage);
const stepResult = await agentStep.executeStep(reqMessage, prompt);
const execution = await responseExecutor.executeResponse({
  initialUserMessage: reqMessage,
  actualMessageSentToLLM: stepResult.actualMessageSentToLLM,
  rawLLMOutput: stepResult.rawLLMResponse,
  nextMessage: stepResult.nextMessage,
});
```

If you need to own the entire loop, event wiring, or low-level SDK interaction yourself, move to [level 2](./level-2-codeboltjs.md).

## Carrying context across calls

`processMessage()` returns the processed conversation context, so you can continue a run in a later call:

```ts
const firstResult = await agent.processMessage(reqMessage);

const followUpAgent = new CodeboltAgent({
  instructions: systemPrompt,
  context: firstResult.context ?? undefined,
});

const secondResult = await followUpAgent.processMessage(
  'Continue from the previous result.'
);
```

## Processing external events

While an agent is running, external events can arrive — steering instructions from the user, inter-agent messages, or background agent completions. Use `codebolt.agentEventQueue` to poll for these and inject them into the prompt so the LLM sees them on the next turn.

### The event queue

```ts
const eventQueue = codebolt.agentEventQueue;

// Returns pending events and clears them from the queue
const events = eventQueue.getPendingExternalEvents();
```

### Event types

| Event type | Source | What it means |
|---|---|---|
| `agentQueueEvent` with `payload.type === 'steering'` | User sent a message while the agent is working | Redirect the agent's current approach |
| `agentQueueEvent` (other) | Another agent sent a message | Inter-agent communication |
| `backgroundAgentCompletion` | A background agent finished | Notify the LLM about completed background work |

### Injecting events as a message modifier

Create a custom processor that polls the queue and pushes events into the prompt's message array:

```ts
import { ProcessedMessage } from '@codebolt/types/agent';
import { FlatUserMessage } from '@codebolt/types/sdk';

const eventQueue = codebolt.agentEventQueue;

function processExternalEvent(event: any, prompt: ProcessedMessage): ProcessedMessage {
  if (!event || !prompt?.message?.messages) return prompt;

  const eventType = event.type || event.eventType;
  const eventData = event.data || event;

  if (eventType === 'agentQueueEvent') {
    const payload = eventData?.payload || {};

    // Steering: user sent a follow-up while the agent is working
    if (payload.type === 'steering') {
      const instruction = payload.instruction || payload.content || JSON.stringify(payload);
      prompt.message.messages.push({
        role: 'user' as const,
        content: `<steering_message>
<instruction>${instruction}</instruction>
<context>The user has sent a steering message while you are working. Adjust your approach accordingly.</context>
</steering_message>`,
      });
      return prompt;
    }

    // Inter-agent message
    const content = payload.content || JSON.stringify(payload);
    prompt.message.messages.push({
      role: 'user' as const,
      content: `<agent_event>
<source>${eventData.sourceAgentId || 'system'}</source>
<content>${content}</content>
</agent_event>`,
    });
    return prompt;
  }

  if (eventType === 'backgroundAgentCompletion') {
    prompt.message.messages.push({
      role: 'assistant' as const,
      content: `Background agent completed:\n${JSON.stringify(eventData, null, 2)}`,
    });
    return prompt;
  }

  return prompt;
}
```

### Wiring into CodeboltAgent

Register the processor in two slots so events are picked up both during initial prompt assembly and after tool calls:

```ts
// As a message modifier — runs during prompt assembly
const externalEventProcessor = {
  async modify(_originalRequest: FlatUserMessage, createdMessage: ProcessedMessage) {
    let prompt = createdMessage;
    for (const event of eventQueue.getPendingExternalEvents()) {
      prompt = processExternalEvent(event, prompt);
    }
    return prompt;
  },
};

// As a post-tool-call processor — runs after each tool execution
const externalEventPostToolProcessor = {
  async modify({ nextPrompt }: { nextPrompt: ProcessedMessage }) {
    let prompt = nextPrompt;
    for (const event of eventQueue.getPendingExternalEvents()) {
      prompt = processExternalEvent(event, prompt);
    }
    return { nextPrompt: prompt, shouldExit: false };
  },
};

const agent = new CodeboltAgent({
  instructions: systemPrompt,
  processors: {
    messageModifiers: [
      // ... your other modifiers ...
      externalEventProcessor,       // Add at the end of message modifiers
    ],
    postToolCallProcessors: [
      externalEventPostToolProcessor, // Check for events after every tool call
    ],
  },
});
```

This gives the agent two chances to see external events per turn: once when the prompt is assembled and once after each tool call completes.

## Project layout

A typical level-1 agent looks like this:

```text
my-agent/
├── codeboltagent.yaml
├── package.json
├── src/
│   └── index.ts
├── webpack.config.js
└── dist/
    └── index.js
```

Notes:

- `codeboltagent.yaml` describes the agent in the UI and routing layer.
- `src/index.ts` usually registers `codebolt.onMessage(...)`.
- Many agents bundle to `dist/index.js`; `act-updated` also copies `codeboltagent.yaml` into `dist/` as part of its webpack build.

## Build

Level-1 agents are regular Node and TypeScript packages. A common workflow is:

```bash
npm install
npm run build
```

In development, many agents also provide a `dev` script such as:

```bash
npx tsx src/index.ts
```

The exact build tool is up to the agent. The framework contract lives in your imports and `codebolt.onMessage(...)` handler, not in a special manifest flag.

## When to graduate to level 2

Move to [level 2](./level-2-codeboltjs.md) when:

- You need a fully custom agent loop.
- You need raw `@codebolt/codeboltjs` APIs the framework does not wrap.
- You are building infrastructure or orchestration primitives rather than a normal chat agent.

For most code-based agents, level 1 is the right level.

## See also

- [Level 0 — Remix](./level-0-remix.md)
- [Level 2 — codeboltjs](./level-2-codeboltjs.md)
- [Patterns overview](../06_patterns/overview.md)
- [Processors](../07_processors/01_what-are-processors.md)
- [Custom Agents Quickstart](../02_quickstart.md)
