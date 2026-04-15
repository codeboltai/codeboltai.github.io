---
sidebar_position: 4
title: Third-Party Agents
---

# Third-Party Agents

Run existing agents from outside the Codebolt ecosystem — Claude Code, OpenAI Codex, Cursor Agent, and similar — as first-class Codebolt agents. You don't rewrite them; you wrap them.

## When third-party wrapping makes sense

- You already use an external agent and don't want to port it.
- The external agent has behaviour or prompts you want preserved exactly.
- You want to put several third-party agents side-by-side with your own and compare outputs.
- You're evaluating agents from multiple vendors inside the same chat thread, flow, or swarm.

When it doesn't: if your target behaviour is 80% the same as a built-in Codebolt agent with a different prompt, **remix is cheaper**. Third-party wrapping is for preserving a distinct runtime, not for configuration differences.

## How it works

A third-party agent runs as a separate process (the vendor's own binary or Node package), and a small **adapter** translates between Codebolt's agent protocol and the vendor's CLI or SDK. The adapter lives in [`codeboltjs/packages/thirdpartyagents`](https://github.com/codebolt-ai/codeboltjs) and handles:

- **Lifecycle.** Start / stop / heartbeat the vendor process.
- **Message translation.** Convert Codebolt chat events ↔ vendor-native prompts.
- **Tool bridging.** Expose Codebolt tools to the vendor agent (via MCP where the vendor supports it), or route the vendor's tool calls to Codebolt's tool service.
- **Event-log integration.** Every vendor-side action is recorded in the Codebolt event log so replay and trace work normally.

See [`codeboltjs/agents/claude-thirdpartywithmcp`](https://github.com/codebolt-ai/codeboltjs) for a reference implementation wrapping Claude Code with MCP tool-bridging.

## Using a third-party agent

Install the adapter package and declare it in your project:

```yaml
# .codebolt/agents/claude-wrapper/codeboltagent.yaml
name: claude-wrapper
version: 0.1.0
description: Claude Code, exposed as a Codebolt agent.
third_party:
  adapter: "@codebolt/claude-thirdpartywithmcp"
  binary: claude
  mcp_bridge: true
```

Start it like any other agent:

```bash
codebolt agent start claude-wrapper --task "..."
```

From the Codebolt UI, the agent appears in the picker alongside native agents. Chat messages, tool calls, and outputs flow through the standard panels. You can use it as a node in a flow, delegate to it from another agent, or run several in parallel.

## Building a new adapter

If your target vendor isn't covered, write an adapter. The shape:

1. Extend the base class from `@codebolt/thirdpartyagents`.
2. Implement `start()`, `sendMessage()`, `stop()`, and the event-translation hooks.
3. Decide how tools are bridged: MCP (if the vendor speaks MCP), shell-out, or HTTP proxy.
4. Register the adapter with a descriptor (name, supported models, required env vars).
5. Publish the package.

Full walkthrough: see [`codeboltjs/packages/thirdpartyagents/README.md`](https://github.com/codebolt-ai/codeboltjs).

## Trade-offs

- **Pro:** preserves exact vendor behaviour; zero rewrite cost.
- **Pro:** vendor updates flow through automatically.
- **Con:** you inherit the vendor's limitations (model choice, context window, custom tool story).
- **Con:** debugging is split across two runtimes — the Codebolt event log captures boundary events but not the vendor's internal reasoning.

For most workflows the boundary trace is enough. For deep debugging, run the vendor agent directly outside Codebolt first, then wrap it once you know its behaviour is what you want.

## See also

- [Level 0 — Remix](./03_creation-levels/level-0-remix.md) — the cheaper option when behaviour overlap is high
- [Level 1 — Framework](./03_creation-levels/level-1-framework.md) — when you want to build natively instead
- [`codeboltjs/packages/thirdpartyagents`](https://github.com/codebolt-ai/codeboltjs) — adapter package
- [`codeboltjs/agents/claude-thirdpartywithmcp`](https://github.com/codebolt-ai/codeboltjs) — reference wrapper
