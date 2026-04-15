---
sidebar_position: 1
title: Skills
---

# Skills

A **skill** is a named, reusable competency an agent can call for a narrow task. A tool does one mechanical thing. A skill does one cognitive thing.

Skills are the right unit when you want a reusable agent behavior without creating a whole new agent.

## In This Section

- [Creating a skill](./02_creating-a-skill.md)
- [Handler types](./03_handler-types.md)
- [Testing and debugging](./04_testing-and-debugging.md)
- [Publishing](./05_publishing.md)

## When to reach for a skill

- You keep repeating the same prompt pattern across agents.
- One task recurs across projects and needs consistent behavior.
- You want agents composed from named competencies instead of one large prompt.
- You want something lighter than a subagent, but richer than a tool.

## Consuming from an agent

```ts
async run(ctx, input) {
  return ctx.skills.call("refactor-to-pattern", {
    file: input.file,
    pattern: "adapter",
  });
}
```

## Skill vs. tool vs. subagent

| Axis | Tool | Skill | Subagent |
|---|---|---|---|
| **Granularity** | Atomic operation | Cognitive task | Full task |
| **LLM involved** | No | Maybe | Yes |
| **Own reasoning loop** | No | No unless implemented that way | Yes |
| **Cost** | Low | Low-moderate | High |

When in doubt, start with a skill. Promote to a subagent only when separate reasoning state is worth the cost.

## See also

- [Capabilities](../02_capabilities/01_overview.md)
- [Agent Blocks](../06_agent-blocks.md)
- [Subagents](../08_subagents.md)
