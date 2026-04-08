---
sidebar_position: 2
title: Processor Types
---

# Processor Types

Processors fit into four slot families. Each family runs at a different point in the agent loop and has a different interface.

## Family 1 — Message Modifiers

Run **before the LLM call**. Receive the assembled message list, return a modified list. Used for prompt assembly, context injection, compression, redaction.

```ts
interface MessageModifier {
  modify(messages: Message[], ctx: Context): Promise<Message[]>;
}
```

Built-ins (see [Built-in Processors](./03_built-in-processors.md)):

- `CoreSystemPromptModifier` — injects the core system prompt
- `EnvironmentContextModifier` — adds cwd, git branch, time
- `IdeContextModifier` — adds open file, selection, cursor
- `DirectoryContextModifier` — adds directory listing
- `AtFileProcessorModifier` — resolves `@file` references to contents
- `ArgumentProcessorModifier` — substitutes `{arg}`-style placeholders
- `MemoryImportModifier` — pulls in `@memory:` references
- `ChatHistoryMessageModifier` — manages the history window
- `ChatCompressionModifier` — compresses older turns when over budget
- `ConversationCompactorModifier` — aggressive compaction
- `ShellProcessorModifier` — handles `$(cmd)` shell substitution
- `LoopDetectionModifier` — detects and breaks repetitive loops
- `ChatRecordingModifier` — records final messages for replay

## Family 2 — Tool Modifiers

Run **around tool calls**. Can inject available tools, rewrite arguments, or validate calls against extra rules.

```ts
interface ToolInjectionModifier {
  inject(availableTools: Tool[], ctx: Context): Promise<Tool[]>;
}

interface ToolParameterModifier {
  modify(call: ToolCall, ctx: Context): Promise<ToolCall>;
}

interface ToolValidationModifier {
  validate(call: ToolCall, ctx: Context): Promise<ValidationResult>;
}
```

Built-ins:

- `ToolInjectionModifier` — contextually expands the tool allowlist
- `ToolParameterModifier` — rewrites arguments before execution
- `ToolValidationModifier` — checks calls against custom rules

## Family 3 — LLM Step Processors

Wrap **the LLM call itself**. Run before, after, or both.

```ts
interface LLMAgentStep {
  before?(request: LLMRequest, ctx: Context): Promise<LLMRequest>;
  after?(response: LLMResponse, ctx: Context): Promise<LLMResponse>;
}
```

Used for: streaming transforms, response validation, model fallback, usage logging.

## Family 4 — Response Modifiers

Run **after the LLM responds**, before the agent acts on it. Used for redaction, normalization, safety checks.

```ts
interface ResponseModifier {
  modify(response: LLMResponse, ctx: Context): Promise<LLMResponse>;
}
```

## Ordering within a family

Within a family, processors run in a declared order. The framework picks defaults for built-ins; custom processors are inserted at a declared position:

```yaml
processors:
  message_modifiers:
    - CoreSystemPromptModifier                    # position 1
    - DirectoryContextModifier                    # position 2
    - { name: MyRedactor, after: AtFileProcessorModifier }  # explicit
    - ChatCompressionModifier                     # position 3
```

Order matters: a redactor that runs before `AtFileProcessorModifier` won't see resolved file contents.

## Reading vs modifying

Some processors observe without modifying:

```ts
class MetricsModifier implements MessageModifier {
  async modify(messages, ctx) {
    ctx.metrics.incr("messages.assembled", messages.length);
    return messages;  // unchanged
  }
}
```

These are fine — the framework runs them for side effects. But if you're only observing, consider using a [hook](../06_hooks-and-capabilities/01_hooks-overview.md) instead — hooks are cheaper and don't sit on the critical path.

## Control flow

A processor can return more than just the modified value. For message modifiers:

```ts
return { messages: newMessages, halt: true, reason: "budget exceeded" };
```

Returning `halt: true` stops the pipeline. Useful for emergency stops (budget exceeded, guardrail failure).

For tool modifiers:

```ts
return { call, deny: true, reason: "path outside workspace" };
```

Denying a tool call surfaces a structured denial to the agent.

## See also

- [What are processors](./01_what-are-processors.md)
- [Built-in processors](./03_built-in-processors.md)
- [Writing a custom processor](./04_writing-a-custom-processor.md)
- [Reference → Processor classes](../../05_reference/01_overview.md)
