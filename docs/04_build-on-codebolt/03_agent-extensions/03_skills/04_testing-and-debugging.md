---
sidebar_position: 4
title: Testing And Debugging
---

# Testing And Debugging

There is no dedicated `codebolt action skill test` command in the CLI files here, so the normal loop is:

1. register the skill in a local project
2. call it from a small test agent or remix
3. inspect the result and trace
4. tighten the schema if the agent calls it incorrectly

Validate:

- the name makes the intent obvious
- the description differentiates it from neighboring skills
- required inputs are actually required
- outputs are structured enough for downstream composition
- failure messages are descriptive and recoverable

Use [Testing and debugging](../../02_creating-agents/09_testing-and-debugging.md) when you need full trace/replay.
