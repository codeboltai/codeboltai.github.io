---
sidebar_position: 3
title: Level 2 — codeboltjs
---

# Level 2 — codeboltjs

Build an agent directly on the `@codebolt/codeboltjs` SDK, without the framework wrapper. You write the loop yourself. You get total control and no assistance.

## When level 2 is the right choice

Very rarely. Signs you actually need it:

- **You're building infrastructure**, not an agent. A test runner, a debugger, a custom IDE adapter, a batch migration tool.
- **Your loop shape doesn't match any pattern** and can't be expressed as a composition of framework primitives.
- **You need low-level APIs** the framework intentionally doesn't expose — raw event stream subscriptions, direct channel access, custom IPC.
- **Performance matters more than ergonomics** — you're running thousands of agents and the framework's per-call overhead is measurable.

If none of these apply, [level 1](./level-1-framework.md) is the right choice. 99% of custom agents should live at level 1.

## What you lose by going to level 2

The framework was doing work for you. At level 2, you inherit responsibility for:

| Responsibility | You now own |
|---|---|
| Agent loop | Writing the deliberate/execute/reflect cycle yourself |
| Heartbeats | Emitting them so `HeartbeatManager` doesn't kill you |
| Phase tracking | Telling the server what phase you're in |
| Event log writes | Emitting events with causal parents |
| Memory wiring | Deciding what goes into episodic / persistent / etc. |
| Context assembly | Calling `contextAssemblyService` yourself |
| Error recovery | Structured error emission with run context |
| Replay support | Ensuring your agent is deterministic given the same event log |

It's possible to get these wrong, and the failures are subtle. If you're not sure you need level 2, you don't.

## What `@codebolt/codeboltjs` gives you

`@codebolt/codeboltjs` is the client SDK for the server. It exports a singleton `codebolt` (the default export). Level-2 agents use it directly. The main surfaces:

```ts
const codebolt = require('@codebolt/codeboltjs').default;

// LLM access
const response = await codebolt.llm.chat({ messages, tools });

// File system
const content = await codebolt.fs.readFile(path);

// Git operations
const status = await codebolt.git.git_status();

// MCP / tool access
const result = await codebolt.mcp.call({ tool, args });

// Chat operations
await codebolt.chat.send(message);

// State management
await codebolt.cbstate.set(key, value);
const val = await codebolt.cbstate.get(key);
```

See [Reference → SDKs → codeboltjs](../../../05_reference/01_overview.md) for the full API.

## A minimal level-2 agent

```ts
// index.ts
const codebolt = require('@codebolt/codeboltjs').default;

async function main() {
  await codebolt.connect();

  const input = { task: process.env.TASK || "default task" };
  const history: any[] = [];

  while (true) {
    const response = await codebolt.llm.chat({
      messages: [
        { role: "system", content: "You are a helpful coding assistant." },
        ...history,
        { role: "user", content: input.task },
      ],
    });

    history.push({ role: "assistant", content: response.content, tool_calls: response.tool_calls });

    if (!response.tool_calls || response.tool_calls.length === 0) {
      console.log(response.content);
      break;
    }

    for (const call of response.tool_calls) {
      try {
        const result = await codebolt.mcp.call(call);
        history.push({ role: "tool", tool_call_id: call.id, content: result.content });
      } catch (err) {
        history.push({ role: "tool", tool_call_id: call.id, content: `Error: ${err.message}` });
      }
    }
  }

  await codebolt.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

Notice what's missing: guardrail checks (those are enforced server-side, so they still happen, but you don't see them directly). What's present: explicit loop structure, direct SDK calls.

## Manifest

```yaml
# codeboltagent.yaml
name: my-raw-agent
version: 0.1.0
framework: false          # key difference
entrypoint: dist/index.js
runtime: node
default_model: claude-sonnet-4-6
```

`framework: false` tells the server not to wrap your handler — it just spawns your entrypoint as a process with environment variables (including `RUN_ID`), and waits for it to connect via the client SDK.

## Dependencies

You need `@codebolt/codeboltjs` and nothing else (from the SDK side):

```json
{
  "dependencies": {
    "@codebolt/codeboltjs": "^1.0.0"
  }
}
```

You still run `npm install` before the first run.

## Build step

Unlike level 1, the server won't auto-transpile your code. You need to build it yourself:

```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

And point the manifest's `entrypoint` at the compiled output.

## Testing

Standard Node testing. Use your normal test framework with mocks.

> **Note:** `MockTransport` and a `codeboltjs/testing` subpath export do **not** exist in
> `@codebolt/codeboltjs`. For unit testing, mock the `codebolt` singleton's methods directly
> using your test framework's mocking capabilities:

```ts
// Example: mocking with jest
jest.mock('@codebolt/codeboltjs', () => ({
  default: {
    llm: { chat: jest.fn().mockResolvedValue({ content: 'fake response' }) },
    mcp: { call: jest.fn().mockResolvedValue({ content: 'fake tool result' }) },
    fs: { readFile: jest.fn().mockResolvedValue({ content: 'file contents' }) },
    connect: jest.fn().mockResolvedValue(undefined),
    disconnect: jest.fn().mockResolvedValue(undefined),
  },
}));
```

## When to go to level 3

If you need to write your agent in Go, Rust, Python, or anything that isn't JavaScript. Level 2 is JS-only. [Level 3](./level-3-raw-websocket.md) speaks the wire protocol directly and works in any language.

## See also

- [Level 1 — Framework](./level-1-framework.md) — the level most agents should live at
- [Level 3 — Raw WebSocket](./level-3-raw-websocket.md) — non-JS agents
- [codeboltjs reference](../../../05_reference/01_overview.md)
- [Agent Subsystem internals](../../08_internals/03_subsystems/01_agent-subsystem.md)
