---
sidebar_position: 5
title: Metrics and Scoring
---

# Metrics and Scoring

What you measure determines what you optimize. Pick the wrong metric, optimize for it, and you'll get an agent that scores well but feels worse. This page surveys the built-in metrics and how to combine them.

## The three axes that matter

Almost every real metric lives on one of three axes:

| Axis | Questions it answers |
|---|---|
| **Correctness** | Does the agent actually do the task? |
| **Efficiency** | How many tokens, tools, seconds did it spend? |
| **Behaviour** | *How* did it do the task — right tools, right sequence, no drift? |

Any single metric answers one of these. A real assessment uses a composite across all three.

## Built-in metrics

### Correctness

| Metric | What it measures | Produced by |
|---|---|---|
| `assertion_pass_rate` | % of assertions that passed | `assertion`-kind fixtures |
| `exact_match_rate` | % of outputs matching the reference byte-equal | `exact_match`-kind fixtures |
| `reference_similarity` | Similarity score vs. reference answer | `reference_answer`-kind fixtures |
| `rubric_score` | LLM-judge score on a written rubric | `rubric`-kind fixtures |

### Efficiency

| Metric | What it measures |
|---|---|
| `total_tokens` | Sum of input + output tokens across LLM calls |
| `total_cost_usd` | Token-based cost at the current provider pricing |
| `wall_time_seconds` | Real time from start to end |
| `llm_calls` | Number of distinct LLM invocations |
| `tool_calls` | Number of tool invocations |
| `turns_to_completion` | Loop iterations before termination |

### Behaviour

| Metric | What it measures |
|---|---|
| `tool_choice_accuracy` | Was the right tool chosen for each subtask? (rubric- or pattern-based) |
| `tool_sequence_validity` | Did the agent call tools in a sensible order? |
| `drift_rate` | How often did the agent go off-task? (rubric or heuristic) |
| `retry_rate` | How often was a tool call retried after failure? |
| `premature_termination_rate` | How often did the agent stop before the task was actually done? |
| `hallucination_rate` | Fraction of claims not supported by context (rubric-based) |

## Composite scoring

In practice you optimize on a **weighted composite**:

```yaml
# .codebolt/optimize/my-agent/composite.yaml
name: quality_per_dollar
components:
  - metric: rubric_score
    weight: 1.0
  - metric: total_cost_usd
    weight: -0.5          # negative — cost is bad
    normalize: per_fixture
  - metric: wall_time_seconds
    weight: -0.1
    normalize: per_fixture
```

The composite is what the optimization loop ranks by when you pass `--metric quality_per_dollar`.

Compositing is where most teams get the most value — the built-in metrics are fine, but what you *combine and weight* is what matches your product's actual priorities.

## When to use rubric-based metrics

Rubric metrics use an LLM judge to score open-ended outputs. They work well when:

- The task has no fixed right answer.
- Assertion-based checks can't capture what "good" means.
- You're willing to pay the judge LLM cost per eval fixture.

They struggle when:

- Subtle correctness differences matter — judges are fuzzy.
- The judge model has the same biases as the agent being evaluated. Use a *different* model family.
- Consistency across runs matters — rubric scores have variance. Run each fixture multiple times and use the mean.

## Writing a custom metric

A metric is a function `(trace, fixture) → number | object`. Register it:

```ts
export const toolDiversityMetric = {
  name: "tool_diversity",
  compute(trace, fixture) {
    const used = new Set(trace.events.filter(e => e.type === "tool_call").map(e => e.tool));
    return used.size;
  },
};
```

Then reference in composite configs or optimization runs.

## Metric anti-patterns

- **Optimizing purely on cost.** You'll get agents that refuse tasks to save tokens.
- **Optimizing purely on correctness.** You'll get agents that burn through budgets.
- **Optimizing on a single rubric score.** Rubric judges have blind spots. Triangulate.
- **Ignoring variance.** A 2% improvement within noise is not an improvement. Report confidence intervals.
- **Optimizing for eval set performance.** The set isn't reality. Periodically refresh it from real traces.

## See also

- [Writing Evals](./03_writing-evals.md) — where fixtures come from
- [Optimization Loop](./04_optimization-loop.md) — consumes these metrics
- [Replay and Traces](./02_replay-and-traces.md) — the data metrics are computed on
