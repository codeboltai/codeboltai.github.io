---
sidebar_position: 4
title: Level 3 — Raw WebSocket
---

# Level 3 — Raw WebSocket

Speak the Codebolt wire protocol directly. For when you're building an agent in a language where `codeboltjs` doesn't exist — Go, Rust, Python, Elixir, anything.

## When level 3 is the right choice

Exactly one reason: **you need your agent in a non-JS language**. Any of these:

- You want to run a Go agent because it's fast and cheap.
- You want a Rust agent for low-latency workloads.
- You already have Python code that does the work, and you want to wrap it as an agent.
- Your team writes everything in one language that isn't JavaScript.

That's the only justified reason. Everything else — ergonomics, typing, replay, the loop — is easier at [level 2](./level-2-codeboltjs.md) or [level 1](./level-1-framework.md).

## What you need to implement

At level 3 you're writing a client for the Codebolt agent protocol. Your agent process:

1. Reads `CODEBOLT_SERVER_URL` and `RUN_ID` from its environment.
2. Opens a WebSocket connection to the server.
3. Performs the protocol handshake.
4. Receives the run input.
5. Runs its loop, sending messages for LLM calls, tool calls, memory writes, etc., and receiving responses.
6. Sends a final output and disconnects cleanly.

The protocol is documented at [Reference → Protocols → WebSocket](../../../05_reference/01_overview.md). The short version: it's JSON messages over a WebSocket, with a stable envelope format.

## Message envelope

Every message has this shape:

```json
{
  "id": "msg_abc123",
  "type": "llm.chat.request",
  "run_id": "run_xyz",
  "correlation_id": "msg_def456",
  "payload": { ... }
}
```

Types are namespaced: `llm.*`, `tools.*`, `memory.*`, `context.*`, `events.*`, `input.*`, `output.*`.

Requests get responses with the same `correlation_id`:

```json
{
  "id": "msg_ghi789",
  "type": "llm.chat.response",
  "run_id": "run_xyz",
  "correlation_id": "msg_abc123",
  "payload": { ... }
}
```

See [Reference → Protocols → WebSocket → message envelope](../../../05_reference/01_overview.md) for the full spec.

## Minimal loop (pseudocode in any language)

```
connect to ws://$CODEBOLT_SERVER_URL/agent
send: { type: "handshake", run_id: $RUN_ID }
receive: { type: "handshake.ack" }

send: { type: "input.get", run_id }
receive: { type: "input.response", payload: { task } }

history = []
while true:
    send: { type: "events.emit", payload: { event: "phase.started", phase: "deliberate" } }

    send: { type: "context.assemble", payload: { task, history, budget: { tokens: 60000 } } }
    receive: { type: "context.response", payload: { messages, tools } }

    send: { type: "llm.chat.request", payload: { messages, tools } }
    receive: { type: "llm.chat.response", payload: { content, tool_calls } }

    history.append({ role: "assistant", ... })

    if tool_calls is empty:
        send: { type: "output.set", payload: { result: content } }
        send: { type: "events.emit", payload: { event: "run.completed" } }
        break

    for each call in tool_calls:
        send: { type: "tools.call", payload: { tool, args } }
        receive: { type: "tools.response", payload: { ok, content } }
        history.append({ role: "tool", ... })

    send: { type: "events.emit", payload: { event: "phase.heartbeat" } }

close connection
```

The pattern is identical to [level 2](./level-2-codeboltjs.md); you're just writing the client by hand.

## Manifest

```yaml
name: my-go-agent
version: 0.1.0
framework: false
entrypoint: bin/agent
runtime: binary          # tells the server not to try to spawn with node
default_model: claude-sonnet-4-6
```

The `runtime: binary` entry means the server just executes the entrypoint as a subprocess with the environment variables set.

## Reference clients

Rather than hand-rolling everything, look at the existing clients for scaffolding:

- `packages/cli` — TypeScript client, same protocol
- `packages/gotuijspackage` / `packages/gotui` — Go client scaffolding
- The `codeboltjs` source — the canonical implementation

If a reference client exists in your target language, start there. Don't reimplement the protocol from scratch.

## What you lose (all of it)

At level 3 you're responsible for:

- Everything level 2 makes you responsible for, plus:
- The connection handshake and reconnect logic.
- The message correlation layer.
- Serializing and deserializing messages.
- Handling protocol version mismatches.
- Heartbeating at the WebSocket level (on top of the agent-loop level).
- Graceful shutdown and cleanup.

**If your language has a working level-3 client library, use it.** Don't write your own protocol parser unless you're prepared to maintain it across Codebolt server upgrades.

## What you gain

- Your agent runs in your preferred language.
- It integrates with your existing non-JS codebase naturally.
- You can optimize for size, latency, or memory in ways a JS agent can't.

## Testing

No built-in test framework at this level. Recommendations:

- **Record a real run** and replay its messages against your agent in unit tests.
- **Mock the server** with a small WebSocket responder — there are language-specific helpers for this pattern.
- **End-to-end test** against a real server in a CI environment. Slower but catches protocol drift.

## See also

- [Level 2 — codeboltjs](./level-2-codeboltjs.md) — same thing but in JS with a real SDK
- [WebSocket protocol reference](../../../05_reference/01_overview.md)
- [Communication Subsystem internals](../../08_internals/03_subsystems/11_communication.md) — the server side of the protocol
