---
sidebar_position: 4
title: Custom Processors
---

# Custom Processors

The `custom` processor type lets you insert arbitrary logic into an ingestion pipeline — between the built-in processors, after chunking, after extraction, or as a post-processing step before routing. You have three ways to supply that logic: an action block, inline code, or a named handler function.

## The three execution modes

### Mode 1 — Action block

Point to an action block by path. The block receives the current processor input and must return a transformed output.

```json
{
  "id": "custom-enrich",
  "type": "custom",
  "input": "normalized_chunks",
  "output": "enriched_chunks",
  "actionBlockPath": ".codebolt/actionblocks/chunk-enricher"
}
```

The action block receives a message with `{ input: [...chunks], pipelineContext: {...} }` and must respond with `{ output: [...enrichedChunks] }`.

**When to use:** The logic is complex enough to warrant its own file and tests, or it's reused across multiple pipelines.

### Mode 2 — Inline code

Write JavaScript directly in the pipeline definition. The function receives `input` (the previous step's output) and `context` (pipeline metadata).

```json
{
  "id": "deduplicate",
  "type": "custom",
  "input": "raw_chunks",
  "output": "deduped_chunks",
  "inlineCode": "return input.filter((chunk, i, arr) => arr.findIndex(c => c.text === chunk.text) === i);"
}
```

The code is wrapped in an `async function(input, context)` and executed in a sandboxed environment. You can `await` calls to `context.sdk` to access any Codebolt SDK module:

```json
{
  "id": "kv-tag-lookup",
  "type": "custom",
  "input": "chunks",
  "output": "tagged_chunks",
  "inlineCode": "const { value: tags } = await context.sdk.kvStore.get(context.instanceId, 'meta', 'entity-tags'); return input.map(c => ({ ...c, tags }));"
}
```

**When to use:** Simple transformations that don't justify a separate file.

### Mode 3 — Named handler

Register a handler function in your agent or server plugin, then reference it by name.

```typescript
// Register the handler
codebolt.memoryIngestion.registerProcessor('score-relevance', async (input, context) => {
  return input.map(chunk => ({
    ...chunk,
    score: computeRelevanceScore(chunk.text, context.triggerPayload.taskText)
  }));
});
```

```json
{
  "id": "score",
  "type": "custom",
  "input": "chunks",
  "output": "scored_chunks",
  "handler": "score-relevance"
}
```

**When to use:** The logic depends on in-process state or a library that can't run in a sandbox.

---

## Custom processor in pipeline context

A custom processor fits naturally between built-in steps. Here is a complete pipeline that chunks → normalizes → custom-enriches → embeds:

```json
{
  "id": "enriched-embed-pipeline",
  "label": "Enriched task embedding",
  "triggers": ["onTaskCompleted"],
  "processors": [
    {
      "id": "chunk",
      "type": "chunker",
      "input": "payload.transcript",
      "output": "chunks",
      "chunk_size": 400,
      "overlap": 50,
      "separator": "paragraph"
    },
    {
      "id": "norm",
      "type": "normalizer",
      "input": "chunks",
      "output": "normalized",
      "trim": true,
      "remove_nulls": true
    },
    {
      "id": "enrich",
      "type": "custom",
      "input": "normalized",
      "output": "enriched",
      "inlineCode": "return input.map(c => ({ ...c, metadata: { ...c.metadata, agentId: context.agentId, projectId: context.projectId } }));"
    },
    {
      "id": "embed",
      "type": "vector_embed",
      "input": "enriched",
      "output": "embedded",
      "model": "default"
    }
  ],
  "routes": [
    { "foreach": "chunk", "write_to": "vector://task-history" }
  ]
}
```

---

## The `context` object available in inline code and handlers

| Field | Type | Contents |
|---|---|---|
| `context.pipelineId` | `string` | ID of the running pipeline |
| `context.triggerId` | `string` | The trigger event type that fired |
| `context.triggerPayload` | `object` | Raw event payload that triggered the pipeline |
| `context.projectId` | `string` | Current project identifier |
| `context.agentId` | `string` | ID of the agent that triggered the event (if applicable) |
| `context.instanceId` | `string` | KV store instance ID for this project |
| `context.sdk` | `CbSDK` | Full SDK access — same as `codebolt` in agent code |
| `context.stepOutputs` | `Record<string, any>` | All previous step outputs by step ID |

---

## Using the SDK inside inline code

The `context.sdk` reference exposes the full `codeboltjs` API:

```json
{
  "id": "lookup-user-prefs",
  "type": "custom",
  "input": "chunks",
  "output": "chunks_with_prefs",
  "inlineCode": "const { value: lang } = await context.sdk.kvStore.get(context.instanceId, 'user', 'preferred_language'); return input.map(c => ({ ...c, metadata: { ...c.metadata, language: lang } }));"
}
```

You can also write to memory inside a custom processor — effectively making the processor a side-effect step:

```json
{
  "id": "log-chunk-count",
  "type": "custom",
  "input": "chunks",
  "output": "chunks",
  "inlineCode": "await context.sdk.kvStore.set(context.instanceId, 'stats', 'last_chunk_count', input.length, true); return input;"
}
```

---

## Error handling in custom processors

If a custom processor throws, the pipeline execution halts at that step and the error is logged to the ingestion history. Processors should be defensive:

```javascript
// In an action block processor
codebolt.app.onMessage(async (message) => {
  const { input, pipelineContext } = message;

  try {
    const enriched = await enrich(input);
    codebolt.app.sendMessage({ output: enriched });
  } catch (err) {
    // Send back the original input unchanged so the pipeline can continue
    codebolt.app.sendMessage({ output: input, warning: err.message });
  }
});
```

---

## Testing a custom processor in isolation

Use `memoryIngestion.execute()` with a manual trigger to run a single pipeline with test data, then inspect the ingestion log:

```typescript
await codebolt.memoryIngestion.execute({
  pipelineId: 'enriched-embed-pipeline',
  payload: { transcript: 'Test conversation text for validation.' }
});

// Check the ingestion log in the Codebolt UI under Memory → Ingestion history
// or query it via the API:
const history = await codebolt.memoryIngestion.getExecutionHistory('enriched-embed-pipeline', { limit: 1 });
```

## See also

- [Hooks and action blocks](./03_hooks-and-action-blocks.md) — how action blocks are defined and called
- [Runtime memory APIs](./02_runtime-memory-apis.md) — SDK reference used inside processors
