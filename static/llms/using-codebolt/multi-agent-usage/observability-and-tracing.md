# Observability and Tracing

> Finding out what happened — or what's happening right now — in a multi-agent run. Codebolt's event log plus the trace tools give you complete visibility.

Finding out what happened — or what's happening right now — in a multi-agent run. Codebolt's event log plus the trace tools give you complete visibility.

## The levels of observability

Four levels, from high-level to deepest:

| Level | View | Best for |
|---|---|---|
| **Run tree** | `codebolt agent tree` | "What's the shape?" |
| **Flow view** | UI flow panel | "Which node is running?" |
| **Phase trace** | `codebolt agent trace` | "What did each step do?" |
| **Event log query** | `codebolt events query` | "Show me every X" |

Start high-level; drill down only when needed.

## Run tree

For hierarchies of parent and child runs:

```bash
codebolt agent tree <root-run-id>
```

Output:

```
run_xyz (orchestrator) ▶ running · 2m15s
├── run_aaa (planner) ✓ 12s
├── run_bbb (coder) ✓ 45s
│   └── run_eee (test-runner) ✓ 8s
├── run_ccc (reviewer) ▶ running · 18s
└── (pending)
```

Shows every descendant, their status, and elapsed time.

## Flow view (UI)

For flows specifically. See [Reading a Flow](./03_reading-a-flow.md). Graph-style rendering with click-through to node detail.

## Phase trace

For a specific run:

```bash
codebolt agent trace <run-id>
codebolt agent trace <run-id> --phase 3
codebolt agent trace <run-id> --type llm.chat
codebolt agent trace <run-id> --type tool.call
codebolt agent trace <run-id> --tail 20
```

The phase trace is the first place to look when something looks wrong. It's the ground truth.

## Event log queries

For cross-cutting questions that span many runs:

### "Show me all failing agents today"

```bash
codebolt events query 'type == run.ended and status == "failed"' --since "today"
```

### "Which tool is slowest?"

```bash
codebolt events query 'type == tool.call' --since "1 day ago" --json | \
  jq -r '.tool + " " + (.duration_ms | tostring)' | sort -k2 -n | tail -20
```

### "How much has agent X cost this week?"

```bash
codebolt events query 'type == llm.chat and agent == "my-agent"' --since "7 days ago" --json | \
  jq '[.[] | .cost_usd] | add'
```

### "Every guardrail denial in the last hour"

```bash
codebolt events query 'type == guardrail.verdict and verdict == "deny"' --since "1 hour ago"
```

See [Query the event log](../../03_guides/07_advanced/query-the-event-log.md) for the full query DSL.

## Real-time watching

```bash
codebolt events watch
codebolt events watch --type run.started
codebolt events watch --filter "agent == 'reviewer'"
codebolt events watch --filter "descendent_of <run-id>"
```

Streams events as they happen. Good for "what is this flow doing right now".

## Metrics (for self-hosted)

Prometheus metrics are exposed when enabled. Key dashboards:

- **Run throughput** — runs/minute by agent, status.
- **LLM latency** — p50/p95/p99 by provider, model.
- **Tool latency** — p50/p95/p99 by tool.
- **Queue depth** — backlog of agent runs waiting to start.
- **Event log ingest lag** — how far behind ingestion is.

See [Self-hosting → Scaling](../../04_build-on-codebolt/10_self-hosting/05_scaling-and-workers.md).

## Distributed tracing (OpenTelemetry)

For deep trace analysis, Codebolt emits OpenTelemetry traces:

```yaml
# codebolt-server.yaml
telemetry:
  otlp:
    endpoint: https://otlp.my-observability.com
    protocol: grpc
```

Traces from Codebolt span:
- The initial HTTP/WS request.
- The agent run.
- Each LLM call.
- Each tool call.
- Each guardrail check.

Visualise in Jaeger, Tempo, Honeycomb, or any OTLP-compatible backend.

## Debugging patterns

### "Agent X is suddenly slow"

1. Compare recent trace timings to older ones (`codebolt agent trace` with older run IDs).
2. Is the slowness in LLM calls (provider issue)?
3. In tool calls (tool or plugin issue)?
4. In context assembly (memory/vector growing too big)?

The trace breakdown tells you where the time went.

### "One run is making a burst of tool calls"

```bash
codebolt events query 'type == tool.call and run_id == "<id>"' --json | \
  jq '.[] | .tool' | sort | uniq -c | sort -rn
```

Shows the tool call frequency. If one tool dominates, the agent is stuck on it.

### "Cost is exploding"

```bash
codebolt provider usage --since "1 day ago" --by agent
```

Identifies which agent is burning the most. Drill into its runs from there.

### "Users report intermittent failures"

```bash
codebolt events query 'type == run.ended and status == "failed"' --since "today" --json | \
  jq 'group_by(.error) | map({error: .[0].error, count: length}) | sort_by(.count) | reverse'
```

Groups failures by error message. Often one root cause dominates.

## See also

- [Multi-Agent Usage Overview](./01_overview.md)
- [Agent Debug](../05c_agent-observability/02_agent-debug.md)
- [Query the event log](../../03_guides/07_advanced/query-the-event-log.md)
- [Persistence & Event Log (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/12_persistence-and-eventlog.md)
