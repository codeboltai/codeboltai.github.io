---
sidebar_position: 1
title: Action Blocks
---

# Action Blocks

An **action block** is a reusable, parameterized sequence of steps an agent can invoke by name.

Use action blocks for deterministic procedures. If the sequence needs open-ended reasoning, use a skill or subagent instead.

## In This Section

- [Block schema](./02_block-schema.md)
- [Authoring locally](./03_authoring.md)
- [Publishing](./04_publishing.md)

## When action blocks are the right shape

- Procedural work with a fixed shape and varying parameters.
- Team-standardized operations that should execute identically.
- Compliance-bearing sequences where the order matters.
- Common operational routines currently living in shell scripts or CI jobs.

## Consuming from an agent

```ts
async run(ctx, input) {
  return ctx.blocks.run("deploy-to-staging", { branch: input.branch });
}
```

## Action block vs. skill vs. flow

| Concern | Action Block | Skill | Flow |
|---|---|---|---|
| **Branching** | Static conditions | Arbitrary logic | Arbitrary |
| **LLM involvement** | None by default | Maybe | Often |
| **Scope** | Inside one agent run | Inside one agent run | Top-level orchestration |

If the sequence is deterministic, use an action block. If it needs reasoning, use a skill. If it is orchestration across multiple agents or nodes, use a flow.

## See also

- [Skills](../03_skills/01_overview.md)
- [Subagents](../08_subagents.md)
- [Orchestration Design](../../08_orchestration-design/01_overview.md)
