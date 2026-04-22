---
sidebar_position: 5
title: Memory Evaluation
---

# Memory Evaluation

Evaluating memory means measuring whether agents are retrieving the right information at the right time and whether the pipeline that writes to storage is producing quality embeddings and knowledge graph entries. Codebolt's eval system can evaluate both — and then run an optimizer to improve the configuration automatically.

## The eval model

The eval system has four composable primitives:

| Primitive | What it represents |
|---|---|
| **Subject** | The thing being evaluated — an agent, an action block |
| **Task** | A test case: input instructions + one or more evaluators |
| **Suite** | A collection of subjects × tasks |
| **Run** | An execution of a suite; produces scored results |

Memory-focused evals treat **retrieval quality** and **context relevance** as the metrics. You design tasks that probe specific retrieval scenarios, run them against the subject agent, and score the output.

---

## Evaluator types

### `expected-output`

Compare the agent's response against a reference answer. Match modes:

| Mode | Matches when… |
|---|---|
| `exact` | Response equals expected exactly |
| `contains` | Response includes the expected substring |
| `regex` | Response matches a regular expression |
| `semantic` | Response is semantically equivalent (embedding similarity) |

```typescript
await codebolt.eval.createEvalTask({
  subjectType: 'agent',
  instructions: 'What database do we use for the knowledge graph?',
  evaluators: [{
    id: 'ev-kg-answer',
    name: 'KG answer check',
    type: 'expected-output',
    weight: 1,
    expectedOutput: 'Kuzu',
    matchMode: 'contains'
  }]
});
```

Use `semantic` mode to test memory recall without requiring word-for-word matches:

```typescript
{
  type: 'expected-output',
  expectedOutput: 'The knowledge graph uses an embedded Kuzu database.',
  matchMode: 'semantic'
}
```

### `agent-judge`

A separate judge agent evaluates the output against a rubric. Best for nuanced memory quality questions.

```typescript
{
  type: 'agent-judge',
  judgeAgentId: 'quality-judge',
  judgePrompt: `Score 0-100: Did the agent's answer correctly use recalled memory rather than hallucinating? 
  Agent answer: {{output}}
  Provide a score and one-sentence reasoning.`
}
```

### `script`

Run a shell script that exits 0 (pass) or non-zero (fail) and writes a score to stdout.

```typescript
{
  type: 'script',
  script: `
    RESPONSE="{{output}}"
    if echo "$RESPONSE" | grep -q "Kuzu"; then echo "100"; exit 0; fi
    echo "0"; exit 1
  `
}
```

### `deliberation`

Multiple judge agents discuss the output and vote on a score. Use when a single judge may be biased.

```typescript
{
  type: 'deliberation',
  deliberationAgentIds: ['judge-a', 'judge-b', 'judge-c'],
  deliberationRounds: 2
}
```

---

## Designing memory eval tasks

The key is to write tasks that exercise specific retrieval paths, then check whether the agent's answer shows evidence of using recalled memory (not just LLM knowledge).

### Test vector recall

```typescript
await codebolt.eval.createEvalTask({
  subjectType: 'agent',
  instructions: 'Summarise the decisions we made about the payment module in the last sprint.',
  evaluators: [{
    type: 'agent-judge',
    judgeAgentId: 'memory-judge',
    judgePrompt: 'Did the answer reference specific decisions from memory? Score 0-100.'
  }]
});
```

### Test knowledge graph recall

```typescript
await codebolt.eval.createEvalTask({
  subjectType: 'agent',
  instructions: 'Which functions call processPayment?',
  evaluators: [{
    type: 'expected-output',
    expectedOutput: 'chargeStripe',
    matchMode: 'contains'
  }]
});
```

### Test context rule injection

```typescript
await codebolt.eval.createEvalTask({
  subjectType: 'agent',
  instructions: 'Create a PR for the auth changes following our coding standards.',
  evaluators: [{
    type: 'agent-judge',
    judgeAgentId: 'style-judge',
    judgePrompt: 'Did the PR description follow the style guide? Score 0-100.'
  }]
});
```

---

## Running an eval suite

```typescript
// Define subjects (agents to evaluate)
const subject = await codebolt.eval.createEvalSubject({
  type: 'agent',
  name: 'memory-agent-v2',
  config: { agentId: 'memory-agent', version: 'v2' }
});

// Create a suite
const suite = await codebolt.eval.createEvalSuite({
  subjectIds: [subject.id],
  taskIds: ['recall-task-1', 'kg-task-2', 'rule-task-3']
});

// Run it
const run = await codebolt.eval.createEvalRun({ suiteId: suite.id });

// Poll until complete
let status = run.status;
while (status === 'running') {
  await new Promise(r => setTimeout(r, 5000));
  const updated = await codebolt.eval.getEvalRun(run.id);
  status = updated.status;
}

// Retrieve results
const results = await codebolt.eval.getRunResults(run.id);
for (const result of results) {
  console.log(`Task ${result.taskId}: ${result.evaluatorResults.map(e => e.score).join(', ')}`);
}
```

---

## Optimization loop

Once you have eval tasks, the optimizer can automatically improve the agent's memory configuration by adjusting its instructions, context rules, or ingestion pipeline parameters.

```typescript
// Configure optimization on a task
await codebolt.eval.updateEvalTask('recall-task-1', {
  optimization: {
    enabled: true,
    optimizerType: 'agent',
    optimizerAgentId: 'memory-optimizer',
    targets: ['instructions', 'config'],
    maxIterations: 10,
    targetScore: 85,
    improvementThreshold: 2,
    strategy: 'greedy'
  }
});
```

### Optimization strategies

| Strategy | How it works | Best for |
|---|---|---|
| `greedy` | Accept any improvement, continue from best | Fast convergence on a clear optimum |
| `best-of-n` | Try N variations in parallel, keep the best | Avoiding local optima |
| `annealing` | Accept some regressions early, tighten later | Complex parameter spaces |

### Optimization targets

| Target | What the optimizer modifies |
|---|---|
| `instructions` | Agent system prompt / instructions |
| `prompts` | LLM prompts used inside retrievers |
| `tools` | Which tools the agent is allowed to use |
| `config` | Agent configuration parameters |
| `code` | Agent source code (advanced) |

For memory optimization, `config` is the most useful target — the optimizer adjusts parameters like `topK`, `minScore`, and `chunkSize` based on which values produce better eval scores.

### Reading optimization history

```typescript
const runs = await codebolt.eval.listOptimizationRuns();
const run = runs[0];

for (const iteration of run.iterations) {
  console.log(`Iteration ${iteration.step}: score=${iteration.score}`);
  console.log('Params:', iteration.params);
}
console.log('Best configuration:', run.currentBest);
```

---

## Evaluating action blocks directly

The eval system also supports `action-block` as a subject type:

```typescript
const abSubject = await codebolt.eval.createEvalSubject({
  type: 'action-block',
  name: 'memory-summarizer-v1',
  config: { actionBlockId: 'memory-summarizer' }
});

await codebolt.eval.createEvalTask({
  subjectType: 'action-block',
  instructions: JSON.stringify({ memoryId: 'test-run-001' }),
  evaluators: [{
    type: 'script',
    script: `RESULT="{{output}}"; if [ -n "$RESULT" ]; then echo "100"; else echo "0"; fi`
  }]
});
```

---

## Viewing results in the UI

The **Eval** panel in the Codebolt desktop app shows:

- Pass/fail and score per task per run
- Per-evaluator breakdown with reasoning
- Score trend across optimization iterations
- Diff of what the optimizer changed between iterations

Use the evaluator reasoning column to understand *why* a retrieval failed — whether the vector search returned irrelevant results, the context rule suppressed the right source, or the knowledge graph had stale data.

## See also

- [Optimization patterns](./06_optimization-patterns.md) — practical recipes for improving memory quality
- [Hooks and action blocks](./03_hooks-and-action-blocks.md) — action blocks as eval subjects
