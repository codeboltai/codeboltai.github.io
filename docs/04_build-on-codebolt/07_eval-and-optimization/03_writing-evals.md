---
sidebar_position: 3
title: Writing Evals
---

# Writing Evals

An **eval set** is a collection of task fixtures with either a correct answer or a scoring rubric. You run your agent against the set, score each output, and get a single number (or vector of numbers) that summarises the agent's quality on those tasks.

The goal isn't perfection; the goal is a reliable signal that's better than "this looks fine to me."

## Starting small

Your first eval set should be five fixtures, not fifty. Five covers:

1. The **golden path** — the thing your agent is supposed to do, done well.
2. One **adjacent variation** — same task shape, slightly different inputs.
3. One **boundary case** — ambiguous or tricky input.
4. One **regression** — something that broke once and you don't want to break again.
5. One **negative** — input the agent should refuse or respond differently to.

Once you have five, you have a signal. Grow from there only when you have specific questions the existing set doesn't answer.

## Anatomy of a fixture

```yaml
# .codebolt/evals/my-agent/extract-component.yaml
name: extract-component
description: Extract a child JSX block into its own component
input:
  task: "Extract the <Hero> block from src/pages/home.tsx into src/components/Hero.tsx"
  context:
    files:
      - path: src/pages/home.tsx
        contents: |
          ...
expected:
  kind: assertion          # or: exact_match, reference_answer, rubric
  assertions:
    - type: file_exists
      path: src/components/Hero.tsx
    - type: file_contains
      path: src/components/Hero.tsx
      text: "export default"
    - type: file_does_not_contain
      path: src/pages/home.tsx
      text: "<h1>Welcome"
    - type: tests_pass
      command: "npm test"
metadata:
  tags: ["refactor", "extract"]
  difficulty: moderate
```

### Four `expected` kinds

| Kind | What it is | Best for |
|---|---|---|
| `assertion` | Checks on the filesystem or tool output | Code tasks (file contents, tests pass) |
| `exact_match` | Byte-equal output | Deterministic tasks (formatting, code generation with canonical form) |
| `reference_answer` | Compare output to a known-good answer, with a similarity score | Fuzzy tasks where exact match is too strict |
| `rubric` | LLM-judge against a written rubric | Open-ended tasks (writing, summaries, explanations) |

Start with `assertion` where possible — it's deterministic and fast. Fall back to `rubric` only when the task genuinely has no fixed right answer.

## Running an eval set

```bash
codebolt eval run my-agent --set ./evals/my-agent/            # all fixtures in a dir
codebolt eval run my-agent --fixture ./evals/.../extract.yaml # one fixture
codebolt eval run my-agent --set ... --parallel 4             # parallelise
codebolt eval run my-agent --set ... --replay                 # deterministic replay, no new LLM calls
```

Output:

- Per-fixture pass/fail and scores.
- Aggregate summary.
- A **trace for every fixture run** — debuggable the same way as a production run.

## Rubric scoring (LLM-judge)

For rubric-scored fixtures, the eval runs a *judge* LLM with a prompt like:

```
Task: {task}
Agent output: {output}
Rubric:
  - Does the output correctly address the task? (0-5)
  - Is it concise and well-written? (0-5)
  - Does it avoid making things up? (0-5)
Return a JSON object with { addresses_task, quality, faithfulness }.
```

You configure the rubric per fixture. The judge LLM is configurable — usually a different model from the agent being evaluated (to avoid self-preference).

## Building evals from traces

The cheapest way to grow an eval set is to promote real runs:

```bash
codebolt eval add-from-run <run_id> --set my-agent --expected-kind rubric
```

The input is the original task; the expected output is the trace's actual output (for regression), or a rubric the developer writes. Real runs capture real shape.

## Anti-patterns

- **Don't write an eval set before you have one good run.** You're guessing at what "good" looks like.
- **Don't over-weight one dimension.** Correctness matters, but so does cost and latency. Track all three.
- **Don't let the set rot.** If it hasn't failed in six months, it's not catching anything. Either it's well-calibrated or it's useless — audit periodically.
- **Don't write 50 fixtures in one sitting.** You'll front-load errors. Five good ones beat fifty noisy ones.

## See also

- [Replay and Traces](./02_replay-and-traces.md) — source material for fixtures
- [Optimization Loop](./04_optimization-loop.md) — eval sets drive the loop
- [Metrics & Scoring](./05_metrics-and-scoring.md) — what dimensions to measure
