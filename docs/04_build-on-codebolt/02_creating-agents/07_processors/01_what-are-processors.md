---
sidebar_position: 1
title: What are Processors
---

# What are Processors

Processors are reusable pieces that plug into the agent loop at well-defined points. They let you modify how the prompt is assembled, how tool calls are validated, how responses are handled, how history is compressed — without rewriting the loop itself.

If a custom agent is a whole program, a processor is a function you drop into an existing program at a specific slot.

## When to use a processor

- **You want to tweak one thing** about how agents behave, and you want it to apply to every agent (or a class of agents) without forking each one.
- **You want to reuse behaviour across agents** — e.g. "always redact customer emails from LLM prompts" should apply everywhere, not be re-implemented per agent.
- **You want the behaviour to compose cleanly** — multiple processors can stack in a well-defined order.

If you need to change how an agent *thinks*, write a custom agent. If you need to change what an agent *sees* or *emits* at one point in its loop, write a processor.

## The slots

Processors plug into the loop at specific phases. The main families:

### Message modifiers
Run before the LLM call. Can add, remove, or rewrite messages. Examples (all built-in and covered in [Reference → Processor Reference](../../../../05_reference/01_overview.md)):

| Modifier | What it does |
|---|---|
| `CoreSystemPromptModifier` | Injects the core system prompt |
| `ChatHistoryMessageModifier` | Manages the chat history window |
| `ChatCompressionModifier` | Compresses old turns when budget is tight |
| `ConversationCompactorModifier` | Aggressive compaction for long conversations |
| `AtFileProcessorModifier` | Resolves `@file` references into file contents |
| `ArgumentProcessorModifier` | Substitutes CLI-style arguments |
| `DirectoryContextModifier` | Adds directory listing context |
| `EnvironmentContextModifier` | Injects env info (cwd, git branch, etc.) |
| `IdeContextModifier` | Injects IDE state (open file, selection) |
| `MemoryImportModifier` | Imports memory references into the prompt |
| `ShellProcessorModifier` | Handles shell-command-style prompts |
| `ChatRecordingModifier` | Records the final message list for replay |
| `LoopDetectionModifier` | Detects and breaks repetitive loops |

### Tool modifiers
Run around tool calls. Can inject tools, validate parameters, or transform arguments:

| Modifier | What it does |
|---|---|
| `ToolInjectionModifier` | Adds tools to the agent's allowlist contextually |
| `ToolParameterModifier` | Rewrites tool arguments before execution |
| `ToolValidationModifier` | Validates tool calls against extra rules |

### Response modifiers
Run after the LLM returns, before the agent acts on it. Useful for redaction, format normalisation, or safety checks.

## How they compose

A processor is a function of the loop state at its phase. Multiple processors at the same phase run in sequence, each seeing the output of the previous one.

```
before LLM call:
  assembled messages
    → CoreSystemPromptModifier
    → DirectoryContextModifier
    → AtFileProcessorModifier
    → ChatCompressionModifier      (if over budget)
    → LoopDetectionModifier
    → final messages to llmService
```

Order matters. The framework picks a default order for built-in processors; custom processors are inserted at declared positions.

## Writing your own

You write a processor by implementing a typed interface for the slot you're targeting. See [Writing a custom processor](./04_writing-a-custom-processor.md) for the full walkthrough.

A minimal message modifier (pseudo-code):

```ts
export class RedactEmailsModifier implements MessageModifier {
  async modify(messages: Message[]): Promise<Message[]> {
    return messages.map(m => ({
      ...m,
      content: m.content.replace(/[\w.]+@[\w.]+/g, "[redacted]"),
    }));
  }
}
```

Drop it into your agent config:

```yaml
processors:
  message_modifiers:
    - RedactEmailsModifier
```

Now every LLM call from that agent goes through it.

## Processors vs hooks vs tools

Three similar-looking extension points, used for different things:

| Mechanism | Runs at | Scope | Good for |
|---|---|---|---|
| **Processors** | Fixed slots in the agent loop | The loop state (messages, tool calls, responses) | Modifying what the agent sees/emits |
| **[Hooks](../../../05_plugins/01_hooks-overview.md)** | Events on the application bus | Events (not tied to a specific agent loop) | Cross-cutting concerns: logging, auditing, policy enforcement |
| **[Tools](../../../03_agent-extensions/04_mcp-tools/01_overview.md)** | When the LLM calls them | A named capability | New things the agent can do |

Rule of thumb: if you want the agent to *see* something different, use a processor. If you want to *react* to something happening, use a hook. If you want to give the agent a *new capability*, build a tool.

## See also

- [Processor types](./02_processor-types.md) — the full list
- [Built-in processors](./03_built-in-processors.md)
- [Writing a custom processor](./04_writing-a-custom-processor.md)
- [Processor Reference](../../../../05_reference/01_overview.md) — auto-generated class docs
- [Context Assembly internals](../../../09_internals/03_subsystems/07_context-assembly.md) — where many processors run
