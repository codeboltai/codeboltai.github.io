---
sidebar_position: 3
title: Handler Types
---

# Handler Types

Three common skill handler shapes:

| Handler kind | What it is | When to use |
|---|---|---|
| **Inline function** | Local handler code | Logic-heavy skills with validation or tool orchestration |
| **Sub-agent** | Delegate to another agent | When the skill needs a separate reasoning loop |
| **Prompt template** | Prompt-only transformation | Cheap, stateless competencies |

Pick by cost:

- prompt template: cheapest
- inline function: moderate
- subagent: most expensive

Start with the cheapest shape that gives the behavior you need.
