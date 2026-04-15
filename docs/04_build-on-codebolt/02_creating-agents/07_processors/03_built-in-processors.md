---
sidebar_position: 3
title: Built-in Processors
---

# Built-in Processors

The processors that ship with Codebolt. Most agents use a standard set of these automatically via [Unified Agent](../06_patterns/unified-agent.md). This page explains what each does so you know what to keep and what to drop when customising.

For the auto-generated class reference (fields, options, methods), see [Reference → Processor classes](../../../../05_reference/01_overview.md).

## Message modifiers (the default pipeline)

When Unified Agent runs with defaults, these message modifiers fire in order:

### 1. `CoreSystemPromptModifier`
Injects the agent's configured system prompt as the first message. Runs first so everything else can reference it.

### 2. `EnvironmentContextModifier`
Adds cwd, git branch, OS info, time. Small but high-value — grounds the LLM in "where am I working right now".

### 3. `IdeContextModifier`
Adds current open file, selected text, cursor position (from the editor). Only fires when the agent is running from a chat tab with an open editor.

### 4. `DirectoryContextModifier`
Adds a listing of the project directory (top-level + relevant subtrees). Complements the codemap for spatial awareness.

### 5. `MemoryImportModifier`
Resolves `@memory:` references in the user message to memory content. Also proactively pulls in relevant persistent memory entries based on the task.

### 6. `AtFileProcessorModifier`
Resolves `@file`, `@#symbol`, `@:dir` mentions. Runs after context assembly so mentions can override auto-selected files.

### 7. `ArgumentProcessorModifier`
Substitutes CLI-style `{arg}` placeholders in message templates. Used when agents are invoked from flow nodes with typed inputs.

### 8. `ShellProcessorModifier`
Resolves `$(command)` inline substitutions in the user message. Runs the command and substitutes the output.

### 9. `ChatHistoryMessageModifier`
Manages the history window — decides how much of prior turns to include. Sliding window by default.

### 10. `ChatCompressionModifier`
Fires only if the total prompt is over budget. Compresses older turns via summarisation.

### 11. `ConversationCompactorModifier`
More aggressive compaction for very long conversations. Usually only one of this or `ChatCompressionModifier` fires on a given turn.

### 12. `LoopDetectionModifier`
Scans recent phases for repetitive patterns (same tool call repeatedly with same args, same LLM response shape). If detected, injects a "you're looping, try something different" hint.

### 13. `ChatRecordingModifier`
Writes the final assembled message list to the event log for replay. Runs last.

## Tool modifiers

### `ToolInjectionModifier`
Contextually expands the tool allowlist. Used when a base agent has a small default allowlist but specific tasks need more tools — the injector can add them based on the task content.

### `ToolParameterModifier`
Rewrites arguments before execution. Used for:
- Normalizing paths (absolute → relative)
- Expanding shortcuts
- Enforcing defaults

### `ToolValidationModifier`
Extra validation beyond the tool's own schema. Used for project-wide rules (e.g. "writes to `.git/` are never allowed regardless of which tool is calling").

## Dropping or replacing defaults

Unified Agent lets you:

- **Replace the whole set:**
  ```ts
  processors: {
    messageModifiers: [new MyCustom1(), new MyCustom2()],
  }
  ```
- **Append to the defaults:**
  ```ts
  processors: {
    additionalMessageModifiers: [new MyRedactor()],
  }
  ```
- **Drop specific defaults:**
  ```ts
  processors: {
    dropDefaults: ["DirectoryContextModifier", "IdeContextModifier"],
  }
  ```

Prefer appending over replacing. You lose a lot by skipping the default set.

## Which defaults to keep / drop

Rough guide for custom agents:

| Default | Usually keep? | When to drop |
|---|---|---|
| `CoreSystemPromptModifier` | Always | Never |
| `EnvironmentContextModifier` | Yes | Pure data-processing agents |
| `IdeContextModifier` | Yes | Background agents (no IDE) |
| `DirectoryContextModifier` | Yes | Non-filesystem agents |
| `MemoryImportModifier` | Yes | Ephemeral agents without memory |
| `AtFileProcessorModifier` | Yes | Never drop unless you replace it |
| `ChatHistoryMessageModifier` | Yes | Single-shot agents |
| `ChatCompressionModifier` | Yes | Never drop without a replacement |
| `LoopDetectionModifier` | Yes | Never drop |
| `ChatRecordingModifier` | Yes | Never drop (breaks replay) |

Defaults that should almost never be dropped: the system prompt injector, the `@`-file resolver, compression, loop detection, recording. These are the ones that make agents work reliably.

## See also

- [What are processors](./01_what-are-processors.md)
- [Processor types](./02_processor-types.md)
- [Writing a custom processor](./04_writing-a-custom-processor.md)
- [Reference → Processor classes](../../../../05_reference/01_overview.md)
