---
sidebar_position: 3
title: Builder Pattern
---

# Builder Pattern

> **Note:** The `@codebolt/agent/builder` package referenced below does not exist yet.
> The pattern classes (`AgentBuilder`, `InitialPromptBuilder`, `LLMOutputHandler`, `FollowupPromptBuilder`)
> represent planned functionality. For building agents today, use Markdown agents or `@codebolt/codeboltjs`.

Explicit builder objects for each phase of the agent loop: initial prompt, LLM output handling, follow-up prompt. Use when you need fine control over one phase without writing the whole loop yourself.

## When to pick Builder

- **You need custom logic in one specific phase** and Unified Agent's defaults don't cut it for that phase.
- **You're experimenting with different prompt-construction strategies** and want them swappable.
- **You need explicit control over when and how the LLM is called**.

For most agents, [Unified Agent](./unified-agent.md) is simpler and does the right thing. Use Builder when you've outgrown it.

## The three builders

```ts
import {
  AgentBuilder,
  InitialPromptBuilder,
  LLMOutputHandler,
  FollowupPromptBuilder,
} from "@codebolt/agent/builder";
```

| Builder | Runs at | You control |
|---|---|---|
| **InitialPromptBuilder** | Start of run | What goes into the first LLM call |
| **LLMOutputHandler** | After each LLM response | What to do with text, tool calls, or failures |
| **FollowupPromptBuilder** | Between iterations | How the next prompt is built from prior results |

Each is a plain object you compose into an `AgentBuilder`.

## Minimal example

```ts
export default new AgentBuilder({
  name: "summariser",

  initialPrompt: new InitialPromptBuilder({
    system: "You summarise code files in 3 sentences.",
    includeFileContent: true,      // auto-inject the file if mentioned
    includeCodemap: false,
  }),

  llmOutputHandler: new LLMOutputHandler({
    onText: "return",               // if the LLM returns text, we're done
    onToolCall: "execute",          // if it calls a tool, run it
    onFailure: "retry",             // on provider error, retry once
  }),

  followupPrompt: new FollowupPromptBuilder({
    includeLastToolResult: true,
    maxHistoryTurns: 5,
  }),

  limits: { maxIterations: 5 },
});
```

Each phase is configurable independently. Swap any of them for a custom implementation.

## Custom initial prompt builder

```ts
class MyInitialPromptBuilder extends InitialPromptBuilder {
  async build(ctx, input) {
    const fileContent = await ctx.files.read(input.file);
    const gitBlame = await ctx.git.blame(input.file);

    return {
      messages: [
        { role: "system", content: "Analyse this file with attribution context." },
        { role: "user", content: `File: ${input.file}\n\n${fileContent}\n\nBlame:\n${gitBlame}` },
      ],
      tools: ctx.tools.available(),
    };
  }
}
```

You now control exactly what the first LLM call sees.

## Custom LLM output handler

```ts
class MyLLMOutputHandler extends LLMOutputHandler {
  async handle(ctx, response) {
    // Custom: if the response contains "TODO", that's a failure
    if (response.content.includes("TODO")) {
      return { type: "retry", reason: "incomplete" };
    }

    if (response.tool_calls?.length) {
      return { type: "execute_tools", calls: response.tool_calls };
    }

    return { type: "done", output: response.content };
  }
}
```

The handler returns one of:

- `{ type: "done", output }` — stop the loop, return output.
- `{ type: "execute_tools", calls }` — run these tool calls, continue.
- `{ type: "retry", reason }` — call the LLM again with updated context.
- `{ type: "fail", reason }` — stop with a failure.

## Custom follow-up prompt builder

```ts
class MyFollowupPromptBuilder extends FollowupPromptBuilder {
  async build(ctx, history, toolResults) {
    return {
      messages: [
        ...history.slice(-3),                 // keep last 3 turns only
        { role: "system", content: "Focus: resolve the last tool failure before anything else." },
        { role: "tool", content: JSON.stringify(toolResults) },
      ],
    };
  }
}
```

You control how context compresses and what the LLM focuses on for the next iteration.

## Composing with Unified Agent

If you only need a custom `InitialPromptBuilder` and the rest can stay default, you don't need the full Builder pattern — use Unified Agent and pass a custom processor instead. Builder is for when you want explicit control over multiple phases.

## Testing builders

Each builder is a class with a single method. Test it as a function:

```ts
test("initial prompt includes file content", async () => {
  const builder = new MyInitialPromptBuilder();
  const result = await builder.build(mockCtx, { file: "test.ts" });
  expect(result.messages[1].content).toContain("hello world");
});
```

No agent runtime needed.

## When to graduate to Processor

If you find yourself needing to inject behaviour at *many* points in the loop — not just the three phases the Builder exposes — move to [Processor](./processor-pattern.md). Processors have more slots and finer granularity.

## See also

- [Patterns Overview](./overview.md)
- [Unified Agent](./unified-agent.md)
- [Composable Pattern](./composable-pattern.md)
- [Processor Pattern](./processor-pattern.md)
- [Reference → Builder classes](../../../../05_reference/01_overview.md)
