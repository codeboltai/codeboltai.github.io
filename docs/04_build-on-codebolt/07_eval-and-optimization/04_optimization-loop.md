---
sidebar_position: 4
title: Optimization Loop
---

# Optimization Loop

The **optimization loop** automates the "try a change, eval it, pick the winner" cycle. Given an agent, an eval set, and a knob you want to tune (prompt text, temperature, tool selection, context rules, capability activation), the loop generates variants, evaluates each, and hands you back the top-scoring ones.

This is a developer-facing tuning system, not a runtime thing. Runs happen offline, against fixtures, on your terms.

## When the loop helps

- **Prompt tuning.** You suspect the system prompt could be sharper. The loop proposes rewrites and measures.
- **Model selection.** Same prompt, five different models — which wins on your fixtures?
- **Context recipe tuning.** Codemap? No codemap? Compressed history vs. full? Measure.
- **Tool choice quality.** You added three new tools. The agent should use them in specific situations. Measure whether it actually does.
- **Capability comparison.** Capability A vs. B for the same task set.

When the loop doesn't help: exploratory work. You need to already know what question you're asking. "Make it better" is not a question the loop can answer.

## The loop shape

```
┌─── eval set ───────────────────┐
│ fixtures + metrics             │
└──────────┬─────────────────────┘
           │
           ▼
   ┌──── proposer ──────┐
   │ generates variants │  ← "change the system prompt", "swap models",
   │ of the agent       │    "vary temperature", "toggle a capability"
   └──────────┬─────────┘
              │
              ▼
   ┌──── evaluator ─────┐
   │ runs each variant  │
   │ against the set    │
   └──────────┬─────────┘
              │
              ▼
   ┌──── selector ──────┐
   │ ranks by metric    │
   │ returns winners    │
   └────────────────────┘
```

Each box is pluggable. You can use built-in proposers (prompt paraphrase, parameter grid, capability toggle) or write custom ones.

## A minimal run

```bash
codebolt optimize my-agent \
  --eval-set ./evals/my-agent/ \
  --propose prompt-paraphrase \
  --n-variants 8 \
  --metric overall_score \
  --budget 100
```

Produces:

- A ranked list of variant agents, top-to-bottom by metric.
- Per-variant eval traces for inspection.
- A diff showing exactly what changed in each variant.
- An aggregate report with confidence intervals (each fixture is run N times for stable comparison).

You pick a winner, promote it:

```bash
codebolt optimize promote <variant_id> --as my-agent@v2
```

## Built-in proposers

| Proposer | Varies | Typical use |
|---|---|---|
| `prompt-paraphrase` | System prompt wording | Sharpen a prompt without changing intent |
| `prompt-expand` | Extends the prompt with additional instructions | Add edge-case handling |
| `parameter-grid` | Temperature, top-p, max tokens | Find the right decoding config |
| `model-sweep` | Model family / size | Cost/quality tradeoff |
| `tool-allowlist` | Which tools are enabled | Simplify agent by removing distractions |
| `capability-toggle` | On/off for each capability | Measure capability contribution |

Chain them: `--propose prompt-paraphrase,parameter-grid`.

## Writing a custom proposer

A proposer is a function: `(base_agent, n) → variants[n]`. Write one when you have a domain-specific axis to explore:

```ts
export const myProposer = {
  name: "refactor-instruction-variants",
  async propose(base, n) {
    const instructions = await this.llm.chat({
      messages: [
        { role: "user", content: `Generate ${n} different ways to instruct an agent to refactor code...` },
      ],
    });
    return instructions.map(text => base.with({ systemPromptAppend: text }));
  },
};
```

Register it in `.codebolt/optimizers/` and reference by name.

## Budget and safety

Optimization runs LLM inference at scale. Guardrails:

- **`--budget` caps total LLM spend** in tokens or dollars.
- **`--max-concurrent` caps parallel inference.**
- **`--stop-on-regression`** aborts if a variant scores materially worse than baseline.
- **The loop always evaluates baseline** (your current agent) so comparisons are fair.

## Interpreting results

- **Variance matters.** A variant scoring 0.82 vs. baseline 0.80 over 10 fixtures isn't a win; the confidence intervals overlap. The report shows this — trust the interval, not the mean.
- **Costs matter.** A variant that wins by 2% but costs 3x isn't a win for most use cases. Optimize by a composite metric (see [Metrics & Scoring](./05_metrics-and-scoring.md)).
- **Gains concentrate.** Usually one or two variants dominate the rest. If the top 5 are all close to baseline, you're in a plateau — no amount of paraphrasing will help. Try a different axis.

## See also

- [Writing Evals](./03_writing-evals.md) — you need these before optimizing
- [Metrics & Scoring](./05_metrics-and-scoring.md) — what to optimize on
- [Replay and Traces](./02_replay-and-traces.md) — every variant produces replayable traces
