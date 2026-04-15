---
sidebar_position: 7
title: Context and Memory
---

import MemoryLayers from '@site/src/components/diagrams/MemoryLayers';
import ContextAssembly from '@site/src/components/diagrams/ContextAssembly';

# Context and Memory

The single most important question for an agent: **what does it know right now?** That answer is built from many sources, every turn, by the **context assembly** pipeline.

<MemoryLayers />

## Context vs memory

- **Context** is the bag of stuff passed to the LLM for *this turn*. Bounded, ephemeral.
- **Memory** is the persistent substrate the agent draws from. Unbounded, durable.

Context is assembled fresh each turn from memory + the current task + recent history.

## The memory layers

Codebolt has several memory layers, each with a different access pattern and lifetime:

| Layer | Lifetime | Use |
|---|---|---|
| **Working** | Single turn | Scratchpad for the current LLM call |
| **Episodic** | Single agent run | "What I did and what happened" — turn history |
| **Persistent KV** | Forever, cheap | Small key→value (user prefs, flags) |
| **Persistent JSON** | Forever, structured | Bigger structured records |
| **Markdown notes** | Forever, human-editable | Long-form notes the human and agent share |
| **Knowledge graph (Kuzu)** | Forever, queryable | Entities and relationships |
| **Vector store** | Forever, semantic | Embeddings for similarity search |

Different memories suit different jobs. A user preference goes in KV. A code symbol graph goes in the KG. A recallable past conversation goes in vector + episodic.

## Context assembly

<ContextAssembly />

Each turn, the assembly pipeline:

1. Loads the system prompt (and any capability fragments).
2. Pulls relevant memory based on the current task and **context rules**.
3. Adds recent turns from episodic memory.
4. Runs **processors** — compaction, redaction, reranking, loop-detection.
5. Hands the result to the LLM.

Context rules let you express things like *"when the task mentions a file, include that file's symbols from the KG"* or *"never include test files when refactoring production code"*.

## Why this matters

Bad context = bad answers. A confused agent is almost always a context problem (too much, too little, or the wrong stuff). The fix is rarely the prompt; it's usually the context rules.

## See also

- [Context Assembly subsystem](../../04_build-on-codebolt/09_internals/03_subsystems/07_context-assembly.md)
- [Memory subsystems](../../04_build-on-codebolt/09_internals/03_subsystems/04_memory.md)
- [Chat: context and @-mentions](../../02_using-codebolt/03_chat/03_context-and-at-mentions.md)
