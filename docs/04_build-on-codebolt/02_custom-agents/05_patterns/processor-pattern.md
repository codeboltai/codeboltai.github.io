---
sidebar_position: 4
title: Processor Pattern
---

# Processor Pattern

> **Note:** The `@codebolt/agent/processor` package and processor classes (`ProcessorAgent`,
> `MessageModifier`, `LLMAgentStep`, `ToolExecutor`, `ResponseHandler`) described below represent planned
> functionality. They do not exist in the current codebase. For building agents
> infrastructure today, use Markdown agents definitions or `.codebolt/agents/remix/` or the `@codebolt/codeboltjs` SDK.

The lowest-level pattern. Decompose the agent loop into individual

## When to pick Processor

- **You're generating agents from config**, not writing them by hand — the Processor shape is dataflow-friendly.
- **You need fine-grained swapping** of individual slots (message assembly, LLM call, tool execution, response handling).
- **You're building tooling around agents** rather than building an agent itself.

For handwritten custom agents, [Unified Agent](./unified-agent.md) or [Builder](./builder-pattern.md) is almost always a better fit. Processor is verbose.

## The main slots

```ts
import {
  ProcessorAgent,
  MessageModifier,
  LLMAgentStep,
  ToolExecutor,
  ResponseHandler,
} from "@codebolt/agent/processor";
```

| Slot | Runs when | Multiple allowed |
|---|---|---|
| **MessageModifier** | Before LLM call, to shape the prompt | Yes — chained in order |
| **LLMAgentStep** | The LLM call itself | Exactly one |
| **ToolExecutor** | When the LLM returns tool calls | Yes — per tool family |
| **ResponseHandler** | After LLM / tool results | Yes — chained in order |

## A minimal processor agent

```ts
export default new ProcessorAgent({
  name: "summariser",
  steps: [
    new MessageModifier({
      phase: "before_llm",
      modify: async (messages, ctx) => [
        { role: "system", content: "Summarise in 3 sentences." },
        ...messages,
      ],
    }),
    new LLMAgentStep({
      model: "claude-sonnet-4-6",
      maxTokens: 500,
    }),
    new ResponseHandler({
      handle: async (response) => ({ summary: response.content }),
    }),
  ],
});
```

Three slots, three objects. The agent runs them in order.

## Chaining message modifiers

Multiple modifiers run in sequence:

```ts
new ProcessorAgent({
  steps: [
    new MessageModifier({ modify: addSystemPrompt }),
    new MessageModifier({ modify: injectCodemap }),
    new MessageModifier({ modify: compressHistory }),
    new MessageModifier({ modify: redactSecrets }),   // last — after everything else
    new LLMAgentStep({ /* ... */ }),
    // ...
  ],
});
```

Each modifier sees the output of the previous one. Ordering matters.

## Relationship to the Processors system

The modifiers used here are the same ones in [Processors](../../03_processors/01_what-are-processors.md). A processor pattern agent is essentially a hand-assembled loop of those modifiers.

If you only need to add a processor to an existing agent, use Unified Agent's `processors.messageModifiers` field — don't switch to the Processor pattern just to add one modifier.

## Custom slots

For behaviour that doesn't fit the standard slots, implement a custom step:

```ts
class GuardCheck extends AgentStep {
  async run(ctx, state) {
    if (state.toolCalls.some(c => c.tool.startsWith("dangerous_"))) {
      return { halt: true, reason: "dangerous tool call detected" };
    }
    return { continue: true };
  }
}

new ProcessorAgent({
  steps: [
    new MessageModifier({ /* ... */ }),
    new LLMAgentStep({ /* ... */ }),
    new GuardCheck(),                // inserted between LLM and tool execution
    new ToolExecutor({ /* ... */ }),
  ],
});
```

Each step returns a control signal (`continue`, `halt`, `retry`) that the agent honours.

## Building agents from config

The main use case — generate agents programmatically:

```ts
function buildAgentFromConfig(cfg) {
  const steps = [];

  if (cfg.useRedaction) {
    steps.push(new MessageModifier({ modify: redactByRules(cfg.redactionRules) }));
  }
  if (cfg.includeCodemap) {
    steps.push(new MessageModifier({ modify: injectCodemap }));
  }

  steps.push(new LLMAgentStep({ model: cfg.model }));

  if (cfg.toolFamilies) {
    steps.push(new ToolExecutor({ families: cfg.toolFamilies }));
  }

  return new ProcessorAgent({ name: cfg.name, steps });
}
```

Not something you'd write by hand per agent, but perfect for a config-driven agent factory.

## Testing

Each step is an object with a single method. Test them independently:

```ts
test("redactor removes emails", async () => {
  const mod = new MessageModifier({ modify: redactEmails });
  const result = await mod.modify([{ role: "user", content: "alice@example.com" }], mockCtx);
  expect(result[0].content).toBe("[redacted]");
});
```

## When you're writing too much Processor code

If you're hand-writing many steps per agent, you've picked the wrong pattern — use Unified or Builder. Processor shines when agents are generated or assembled mechanically.

## See also

- [Patterns Overview](./overview.md)
- [Unified Agent](./unified-agent.md)
- [Builder Pattern](./builder-pattern.md)
- [Processors subsystem](../../03_processors/01_what-are-processors.md)
