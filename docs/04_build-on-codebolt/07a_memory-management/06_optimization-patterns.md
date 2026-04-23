---
sidebar_position: 6
title: Optimization Patterns
---

# Optimization Patterns

Practical recipes for keeping memory lean, relevant, and fast. These patterns combine the hook system, action blocks, ingestion pipelines, and direct SDK calls.

---

## Pattern 1 — Session summarization

**Problem:** Episodic memory grows without bound across sessions. Older turns dilute context quality and slow retrieval.

**Solution:** At the end of each thread, an action block summarizes the session's key decisions into a compact markdown note and embeddings, then archives the raw episodic record.

**Hook:**

```json
{
  "name": "session-summarize",
  "enabled": true,
  "when": { "type": "threadCompleted", "agentTypeFilter": "main" },
  "then": { "type": "runActionBlock", "actionBlockId": "session-summarizer" }
}
```

**Action block (`session-summarizer/index.js`):**

```javascript
import codebolt from '@codebolt/codeboltjs';

codebolt.app.onMessage(async ({ threadId }) => {
  // Pull the last hour of episodic events
  const memories = await codebolt.episodicMemory.listMemories();
  const memory = memories.items.find(m => m.threadId === threadId);
  if (!memory) return codebolt.app.sendMessage({ done: true });

  const { events } = await codebolt.episodicMemory.queryEvents({
    memoryId: memory.id,
    filters: { lastMinutes: 120 }
  });

  // Summarize
  const summary = await codebolt.llm.complete({
    messages: [{
      role: 'user',
      content: `Summarise the key decisions and outcomes from these agent events into concise bullet points:\n${JSON.stringify(events, null, 2)}`
    }]
  });

  // Write to markdown memory
  await codebolt.memory.markdown.save(summary, { threadId, type: 'session-summary' });

  // Embed the summary for future semantic recall
  await codebolt.memoryIngestion.execute({
    pipelineId: 'summary-embed',
    payload: { text: summary, metadata: { threadId, type: 'session-summary' } }
  });

  // Archive the raw episodic record
  await codebolt.episodicMemory.archiveMemory({ memoryId: memory.id });

  codebolt.app.sendMessage({ done: true });
});
```

---

## Pattern 2 — Vector store pruning

**Problem:** The vector store accumulates duplicate or outdated embeddings over time, degrading search precision.

**Solution:** A scheduled action block (triggered by a `gitPush` hook or `manual` ingestion trigger) prunes low-quality chunks.

**Action block (`vector-pruner/index.js`):**

```javascript
import codebolt from '@codebolt/codeboltjs';

codebolt.app.onMessage(async ({ collectionId = 'task-history', maxAgeDays = 30 }) => {
  const { documents } = await codebolt.vectordb.listDocuments(collectionId);
  const cutoff = Date.now() - maxAgeDays * 24 * 60 * 60 * 1000;

  let pruned = 0;
  for (const doc of documents) {
    const docDate = new Date(doc.metadata?.date ?? 0).getTime();
    if (docDate < cutoff) {
      await codebolt.vectordb.deleteDocument(collectionId, doc.uri);
      pruned++;
    }
  }

  codebolt.app.sendMessage({ pruned, remaining: documents.length - pruned });
});
```

**Hook:**

```json
{
  "name": "prune-vectors-on-push",
  "enabled": true,
  "when": { "type": "gitPush", "branches": ["main"] },
  "then": {
    "type": "runActionBlock",
    "actionBlockId": "vector-pruner"
  }
}
```

---

## Pattern 3 — Knowledge graph deduplication

**Problem:** Multiple ingestion runs create duplicate entity records in the knowledge graph (e.g., the same function extracted twice with slightly different names).

**Solution:** An action block queries for near-duplicate nodes and merges them.

```javascript
import codebolt from '@codebolt/codeboltjs';

codebolt.app.onMessage(async ({ instanceId }) => {
  // Find all Function nodes
  const { records } = await codebolt.knowledgeGraph.listMemoryRecords(instanceId, { kind: 'Function' });

  // Group by normalized name
  const groups = {};
  for (const record of records) {
    const key = record.data.name?.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!groups[key]) groups[key] = [];
    groups[key].push(record);
  }

  let merged = 0;
  for (const [, group] of Object.entries(groups)) {
    if (group.length < 2) continue;

    // Keep the most recent; delete duplicates
    group.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    for (const duplicate of group.slice(1)) {
      await codebolt.knowledgeGraph.deleteMemoryRecord(instanceId, duplicate.id);
      merged++;
    }
  }

  codebolt.app.sendMessage({ merged });
});
```

---

## Pattern 4 — Adaptive context rules

**Problem:** A static context rule that always includes the architecture notes wastes tokens when the task is a simple bug fix.

**Solution:** An agent monitors its own context quality (via the assembly trace) and updates rules dynamically.

```typescript
// Inside an agent's reasoning loop

// Retrieve the last assembly trace
const trace = await codebolt.contextAssembly.getLastTrace();

// If knowledge section is being truncated more than 50% of turns,
// cap a low-value source to free up budget
if (trace.knowledgeTruncatedRatio > 0.5) {
  const rules = await codebolt.contextRuleEngine.list();
  const noisyRule = rules.items.find(r => r.name === 'always-include-full-history');
  if (noisyRule) {
    await codebolt.contextRuleEngine.update(noisyRule.id, {
      actions: [{ type: 'cap', section: 'history', tokens: 800 }]
    });
  }
}
```

---

## Pattern 5 — KV store cache invalidation

**Problem:** An agent caches expensive computations in KV, but the cache becomes stale when the underlying data changes.

**Solution:** A file-change hook invalidates the relevant KV namespace.

**Hook:**

```json
{
  "name": "invalidate-schema-cache",
  "enabled": true,
  "when": {
    "type": "fileUpdated",
    "patterns": ["prisma/schema.prisma", "src/models/**/*.ts"]
  },
  "then": {
    "type": "runActionBlock",
    "actionBlockId": "cache-invalidator"
  }
}
```

**Action block:**

```javascript
import codebolt from '@codebolt/codeboltjs';

codebolt.app.onMessage(async ({ instanceId }) => {
  await codebolt.kvStore.deleteNamespace(instanceId, 'schema-cache');
  codebolt.app.sendMessage({ invalidated: 'schema-cache' });
});
```

---

## Pattern 6 — Self-tuning retrieval pipeline

**Problem:** The `topK` and `minScore` for a vector search were set at pipeline creation time and haven't been validated against real usage.

**Solution:** Run an eval suite that measures retrieval quality, then let the optimizer adjust those parameters.

```typescript
// 1. Create eval tasks that test specific recall scenarios
const tasks = await Promise.all([
  codebolt.eval.createEvalTask({
    subjectType: 'agent',
    instructions: 'How did we handle authentication token refresh?',
    evaluators: [{ type: 'agent-judge', judgeAgentId: 'recall-judge', weight: 1,
      judgePrompt: 'Did the answer show evidence of memory recall? Score 0-100.' }]
  }),
  // ... more tasks
]);

// 2. Create suite and run it as baseline
const suite = await codebolt.eval.createEvalSuite({ subjectIds: ['agent-id'], taskIds: tasks.map(t => t.id) });
const baselineRun = await codebolt.eval.createEvalRun({ suiteId: suite.id });

// 3. Enable optimization targeting config parameters
await codebolt.eval.updateEvalTask(tasks[0].id, {
  optimization: {
    enabled: true,
    optimizerType: 'agent',
    optimizerAgentId: 'memory-optimizer',
    targets: ['config'],
    maxIterations: 8,
    targetScore: 80,
    strategy: 'greedy'
  }
});

// The optimizer will adjust topK, minScore, and chunkSize
// across iterations and report which values produced the best recall.
```

---

## Pattern 7 — Post-commit knowledge graph refresh

**Problem:** The knowledge graph is built from snapshots and goes stale as code evolves.

**Solution:** On every commit, an action block runs the TypeScript entity extractor over changed files only.

**Hook:**

```json
{
  "name": "kg-refresh-on-commit",
  "enabled": true,
  "when": { "type": "gitCommit", "creatorFilter": "any" },
  "then": { "type": "runActionBlock", "actionBlockId": "ts-entity-extractor" }
}
```

**Ingestion pipeline (used by the action block):**

```json
{
  "id": "kg-refresh-pipeline",
  "label": "Knowledge graph refresh from diff",
  "triggers": ["manual"],
  "processors": [
    { "id": "parse", "type": "parser", "input": "payload.code", "output": "ast", "format": "code", "language": "typescript" },
    { "id": "extract", "type": "llm_extract_kb", "input": "ast", "output": "entities",
      "prompt": "Extract function names, class names, and their relationships from this TypeScript AST.",
      "output_format": "graph", "kg_template_id": "code-entities-template" }
  ],
  "routes": [
    { "foreach": "entity", "write_to": "graph://" },
    { "foreach": "relationship", "write_to": "graph://" }
  ]
}
```

The action block reads the git diff, loops over changed `.ts` files, and calls `memoryIngestion.execute()` for each:

```javascript
import codebolt from '@codebolt/codeboltjs';
import { execSync } from 'child_process';

codebolt.app.onMessage(async () => {
  const diff = execSync('git diff --name-only HEAD~1 HEAD').toString().trim().split('\n');
  const tsFiles = diff.filter(f => f.endsWith('.ts'));

  for (const file of tsFiles) {
    const code = require('fs').readFileSync(file, 'utf-8');
    await codebolt.memoryIngestion.execute({
      pipelineId: 'kg-refresh-pipeline',
      payload: { code, filePath: file }
    });
  }

  codebolt.app.sendMessage({ refreshed: tsFiles.length });
});
```

---

## Choosing the right pattern

| Goal | Pattern |
|---|---|
| Keep context window lean over long sessions | Session summarization (#1) |
| Prevent vector search degradation | Vector pruning (#2) |
| Fix duplicate graph nodes | KG deduplication (#3) |
| Reduce token waste from noisy rules | Adaptive context rules (#4) |
| Invalidate stale cached data | KV cache invalidation (#5) |
| Improve retrieval quality automatically | Self-tuning pipeline (#6) |
| Keep knowledge graph current | Post-commit KG refresh (#7) |

## See also

- [Hooks and action blocks](./03_hooks-and-action-blocks.md) — event-driven automation
- [Memory Ingestion](./02f_memory-ingestion.md) — ingestion pipelines and processor types
- [Memory evaluation](./05_memory-evaluation.md) — measuring and optimizing retrieval quality
