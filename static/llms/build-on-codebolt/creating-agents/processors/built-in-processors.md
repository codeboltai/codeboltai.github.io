# Built-in Processors

> These are the processor pieces currently exported from @codebolt/agent/processor-pieces.

These are the processor pieces currently exported from `@codebolt/agent/processor-pieces`.

The most important distinction is:

- `CodeboltAgent` has a **default message-modifier pipeline**
- all other processor families are **opt-in**

## Default `CodeboltAgent` message pipeline

When you construct `new CodeboltAgent(...)` without `processors.messageModifiers`, it creates this default pipeline in this exact order:

| Order | Class | What it does |
|---|---|---|
| 1 | `ChatHistoryMessageModifier` | Prepends prior thread history using `threadId`. If the previous conversation ended with unresolved tool calls, it injects synthetic tool-response messages so the new turn can continue safely. |
| 2 | `EnvironmentContextModifier` | Adds date, platform, workspace path, and a directory listing. In the default agent it is created with `enableFullContext: true`, so it can also inline contents from many workspace files. |
| 3 | `DirectoryContextModifier` | Adds a workspace tree for the current project, honoring `.gitignore` and common ignored folders. |
| 4 | `IdeContextModifier` | Adds editor context such as active file and open files. First send is full JSON context; later sends can be incremental. |
| 5 | `CoreSystemPromptModifier` | Sets the system prompt. If you do not provide `customSystemPrompt`, it falls back to the package's large built-in coding-agent prompt. |
| 6 | `ToolInjectionModifier` | Fetches Codebolt tools plus any tools from mentioned MCP servers and injects them into `message.tools` by default. |
| 7 | `AtFileProcessorModifier` | Reads `mentionedFiles` and `mentionedFolders`, then appends their contents and folder structures to the last user message. |

If you set `processors.messageModifiers` yourself, you replace this whole list.

## Other shipped message modifiers

These are exported, but they are **not** part of the default `CodeboltAgent` pipeline.

| Class | What it does | Notes |
|---|---|---|
| `MemoryImportModifier` | Replaces `@path`-style file references inside the user message with file contents from a configured base path. | This is simple file import logic, not context-assembly memory lookup. |
| `ArgumentProcessorModifier` | Appends invocation data from `createdMessage.metadata.invocation` to the user message. | Useful when an agent is invoked with external command metadata. |
| `ChatRecordingModifier` | Writes prompt messages to `.chat-recordings` in `jsonl` or markdown format. | Disabled unless `enableRecording: true`. |
| `ContextAssemblyModifier` | Calls `codebolt.contextAssembly.getContext(...)` and injects assembled memory context as a system or user message. | Supports scope variables, explicit memory, rule engines, validation, and custom formatting. |
| `RuleBasedContextModifier` | Evaluates context rules first, then fetches only the included/forced memories. | Writes rule-evaluation metadata onto the prompt. |
| `MemoryTypeContextModifier` | Fetches specific memory types by name and injects the resulting context. | Can auto-resolve required variables from message metadata. |

## Pre-inference processors

| Class | Default? | What it does |
|---|---|---|
| `ChatCompressionModifier` | No | Estimates prompt size and summarizes older history when the prompt crosses a configured fraction of the model token limit. It writes compression metadata onto the prompt. |

Notes:

- This is an opt-in processor.
- `CodeboltAgent` also has framework-level compaction via `CompactionOrchestrator`, which is separate from this processor.

## Post-inference processors

| Class | Default? | What it does |
|---|---|---|
| `LoopDetectionModifier` | No | Tracks recent user and assistant message similarity. When it detects repetition, it appends a system warning to the next prompt. |

## Pre-tool-call processors

| Class | Default? | What it does |
|---|---|---|
| `ToolValidationModifier` | No | Currently a pass-through processor. It records validation metadata but does not yet enforce tool validation rules. |
| `ToolParameterModifier` | No | Currently a pass-through processor. It records metadata but does not yet rewrite tool parameters. |

Those two classes exist in the package surface, but their core mutation/validation logic is still marked `TODO` in the current source.

## Post-tool-call processors

| Class | Default? | What it does |
|---|---|---|
| `ShellProcessorModifier` | No | Replaces `{{args}}` placeholders and optionally executes `!{...}` shell injections found in tool results or prompt messages. |
| `ConversationCompactorModifier` | No | Counts tokens, truncates oversized tool output, deduplicates repeated file reads, and can compress older conversation history using `simple`, `smart`, or `summarize` strategies. |

Important details:

- `ShellProcessorModifier` is disabled by default for security. You must opt in with `enableShellExecution: true`.
- `ConversationCompactorModifier` can use the LLM to generate a structured continuation summary and injects hints telling the agent which files to re-read after compaction.

## A realistic opt-in example

```ts

  ChatCompressionModifier,
  ConversationCompactorModifier,
  LoopDetectionModifier,
} from "@codebolt/agent/processor-pieces";

const agent = new CodeboltAgent({
  instructions: "Work carefully through larger coding tasks.",
  processors: {
    preInferenceProcessors: [
      new ChatCompressionModifier({ contextPercentageThreshold: 0.7 }),
    ],
    postInferenceProcessors: [
      new LoopDetectionModifier({ maxSimilarMessages: 3 }),
    ],
    postToolCallProcessors: [
      new ConversationCompactorModifier({ compactStrategy: "smart" }),
    ],
  },
});
```

## Choosing which ones to use

- Use the default message pipeline unless you have a concrete reason to replace it.
- Reach for `ContextAssemblyModifier` or its variants when you want memory/context service integration.
- Reach for `ConversationCompactorModifier` when you want explicit post-tool transcript compaction behavior.
- Treat `ToolValidationModifier` and `ToolParameterModifier` as placeholders until their TODO logic is implemented.

## See also

- [What are processors](./01_what-are-processors.md)
- [Processor types](./02_processor-types.md)
- [Writing a custom processor](./04_writing-a-custom-processor.md)
