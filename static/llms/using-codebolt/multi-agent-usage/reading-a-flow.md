# Reading a Flow

> Understanding what an agent flow is doing while it runs, or after it's finished. Essential for debugging multi-agent work.

Understanding what an agent flow is doing while it runs, or after it's finished. Essential for debugging multi-agent work.

## Viewing a flow run

## The flow view

Inside the desktop:

```
┌────────────────────────────────────────────────────┐
│ flow: plan-execute-review · run abc123             │
├────────────────────────────────────────────────────┤
│                                                    │
│    ┌──plan──┐      ┌─execute─┐    ┌─review─┐       │
│    │   ✓    │─────▶│    ▶    │───▶│        │       │
│    └────────┘      └─────────┘    └────────┘       │
│        12s             45s           ---           │
│                                                    │
│    current: execute                                │
│    elapsed: 57s                                    │
└────────────────────────────────────────────────────┘
```

Each node shows:
- **Status icon** — ✓ done, ▶ running, ⏸ waiting, ✗ failed.
- **Timing** — how long this node took (or has been running).
- **Connecting edges** — arrows showing data flow.

Click a node for its full detail.

## Node detail

Clicking a node opens:

- **Agent** — which agent is running this stage.
- **Input** — the data this stage received (JSON).
- **Output** — the data this stage produced (JSON), once complete.
- **Trace** — link to the full phase trace for this stage's run.
- **Duration** — start and end times.
- **Child runs** — if this stage spawned sub-agents, their tree.

## Understanding flow structure

The flow definition lives in YAML (see [Agent Flows](../../04_build-on-codebolt/08_multi-agent-orchestration/04_agent-flows.md)). Use `codebolt flow show <flow-name>` (CLI) or **Flows panel → Definition** (desktop) to see the YAML — useful for understanding "why did the flow route to node X?" by checking the edge conditions.

## Common "why is my flow doing X" questions

### "Why is it stuck at this node?"

The node is waiting on something. Check:
- Is its agent's run actually running? (It could be queued if concurrency limits are hit.)
- Is it waiting on a child agent that's hung?
- Is it waiting on a human approval (`human` node type)?

The trace of the current node shows its last activity. If the last activity is old, something's stuck.

### "Why did it take the reject path?"

Conditional edges fire when their `when` condition is true. Check:
- The output of the previous node. Is it what you expected?
- The edge's condition in the flow YAML. Does it match the output shape?

### "Why are there so many iterations?"

Flows with feedback loops (review → execute → review) can iterate. Check:
- `max_iterations` on the back-edge. Is it too high?
- The reviewer is rejecting more than expected — investigate why.

### "Why did a node use a different model than I expected?"

Node-level model override > agent default > flow default > project default. Check the flow YAML for a `model:` override on the node.

## Replay

Any flow run can be replayed:

```bash
codebolt flow replay <run_id>
```

Re-runs the flow with the same inputs. Useful for:
- Testing a change to the flow definition against a known input.
- Reproducing a failure deterministically (within the limits of LLM non-determinism).

## Exporting a flow run

```bash
codebolt flow export <run_id> --format json > flow-run.json
codebolt flow export <run_id> --format dot | dot -Tpng > flow-run.png
```

JSON for programmatic analysis; DOT for rendering the graph with Graphviz.

## See also

- [Multi-Agent Usage Overview](./01_overview.md)
- [Running a Swarm](./02_running-a-swarm.md)
- [Agent Flows](../../04_build-on-codebolt/08_multi-agent-orchestration/04_agent-flows.md)
- [Build a plan-execute-review flow](../../03_guides/05_multi-agent/build-a-plan-execute-review-flow.md)
