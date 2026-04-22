---
sidebar_position: 1
title: Overview
---

# Memory Management & Optimization

Codebolt exposes the full memory stack as a **programmable API surface**. Agents, action blocks, and hooks can read and rewrite every part of the memory system at runtime — the ingestion pipelines that write data, the persistent memory definitions that retrieve it, the context rules that govern what reaches the LLM, and the raw storage in the vector store, knowledge graph, and KV store.

This section is for builders who need to go beyond the default behaviour — tuning how their agents learn, what they remember, and how efficiently context is assembled.

## What you can do at runtime

| Operation | API surface |
|---|---|
| Create or reconfigure an ingestion pipeline | `codebolt.memoryIngestion` |
| Add, update, or remove entries in any storage layer | `codebolt.kvStore` · `codebolt.vectordb` · `codebolt.knowledgeGraph` · `codebolt.memory` |
| Modify persistent memory retrieval pipelines | `codebolt.persistentMemory` |
| Update context rules dynamically | `codebolt.contextRuleEngine` |
| Assemble context on demand for any query | `codebolt.contextAssembly` |
| Record structured events to episodic memory | `codebolt.episodicMemory` |
| Trigger memory processing via lifecycle hooks | Hook system (`.codebolt/hooks/`) |
| Run arbitrary code in the ingestion pipeline | Custom processors / action blocks |
| Measure and improve memory quality | Eval & optimization system |

## Why agents modify their own memory

Static memory configurations work for predictable workflows. For agents that operate in varied or evolving environments, **self-modifying memory** is a better fit:

- An agent learns a user's naming conventions mid-conversation and writes them to KV so future runs respect them without prompting.
- An orchestrator discovers a sub-agent repeatedly failing on a class of task and writes a corrective heuristic to a persistent memory pipeline.
- A long-running agent compresses its episodic history into vector embeddings after each session so context stays lean.
- A quality-monitoring agent evaluates its own retrieval results and adjusts the `topK` and `minScore` of its vector search steps.

All of this is done through the same SDK that external code uses — agents are not privileged. The boundary is the storage layer, not the caller.

## In this section

- [Runtime memory APIs](./02_runtime-memory-apis.md) — complete SDK reference for all memory modules
- [Hooks and action blocks](./03_hooks-and-action-blocks.md) — event-driven memory automation
- [Custom processors](./04_custom-processors.md) — inline code and action blocks in ingestion pipelines
- [Memory evaluation](./05_memory-evaluation.md) — measuring retrieval quality and running optimization loops
- [Optimization patterns](./06_optimization-patterns.md) — pruning, compaction, summarization, and self-tuning
