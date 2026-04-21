---
sidebar_position: 3
title: Evaluators
---

# Evaluators

Evaluators score the subject's output after a task runs. Each task can have multiple evaluators, combined by **weighted average** to produce the final score (0-100).

## Evaluator Types

### Expected Output

Compares the subject's output against an expected string.

| Match mode | How it works |
|---|---|
| `exact` | Output must match expected string exactly (trimmed) |
| `contains` | Output must contain the expected string |
| `regex` | Output must match the regular expression |
| `semantic` | Case-insensitive comparison |

Scores 100 if matched, 0 if not.

**When to use:** Tasks with a known correct answer — function output, command result, specific text.

### Script

Runs a custom JavaScript function against the output.

The script receives:
- `output` — the subject's output string
- `task` — the task definition
- `evaluator` — the evaluator configuration

Must return a score from 0 to 100.

**When to use:** Custom scoring logic — checking for specific patterns, counting occurrences, validating structure.

### Agent Judge

A judge agent evaluates the output using a custom rubric prompt.

The judge agent receives:
- The task description and instruction
- The subject's output
- Your custom rubric/prompt describing what to look for

The judge returns a score and reasoning.

**When to use:** Subjective quality assessment — code style, explanation clarity, completeness, adherence to requirements.

### Deliberation

Multiple agents independently evaluate the output, then a judge agent synthesizes their assessments.

Configuration:
- `deliberationAgentIds` — the agents that evaluate
- `deliberationRounds` — number of rounds

**When to use:** High-stakes evaluations where you want multiple perspectives — complex code review, nuanced quality assessment.

## Weighted Scoring

Each evaluator has a `weight` field. The final task score is:

```
finalScore = sum(evaluator.score * evaluator.weight) / sum(weights)
```

Example with two evaluators:

| Evaluator | Weight | Score | Contribution |
|---|---|---|---|
| Expected output | 0.6 | 100 | 60 |
| Agent judge | 0.4 | 75 | 30 |
| **Final score** | | | **90** |

## Evaluator Results

Each evaluator produces:
- `score` — 0 to 100
- `passed` — whether the evaluator considers the output acceptable
- `reasoning` — explanation of the score (especially useful for agent-judge)
- `details` — additional metadata

These are stored per-result and visible in the run detail view.

## See Also

- [Creating Experiments](./02_creating-experiments.md) — add evaluators to tasks
- [Optimization Loop](./04_optimization-loop.md) — evaluator scores drive optimization
- [Running Evals and Results](./05_running-evals-and-results.md) — view evaluator output
