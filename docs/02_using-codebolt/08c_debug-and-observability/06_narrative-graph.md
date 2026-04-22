---
sidebar_position: 6
title: Narrative Graph
---

# Narrative Graph

The Narrative Graph is a visual replay of an agent run — every decision, branch, tool call, and outcome laid out as a directed graph. Where Agent Debug shows a flat time-ordered log, the Narrative Graph shows *why* the agent took the path it did, with branching and retrying visible as graph structure.

Open via: **Debug Tools dropdown → Narrative Graph**

## What the graph shows

Each node in the graph represents one meaningful event in the agent's execution:

| Node type | Shape | Description |
|---|---|---|
| **User message** | Rectangle | The input that triggered this run |
| **LLM decision** | Diamond | An LLM call that produced a decision |
| **Tool call** | Rounded rect | A tool invocation |
| **Tool result** | Small rect | The output of a tool call |
| **Branch** | Fork | A point where the agent considered multiple paths |
| **Retry** | Loopback | A tool call that failed and was retried |
| **Completion** | Circle | The run's final state (`completed` or `failed`) |

Edges connect nodes in execution order. Width of an edge encodes time (thicker = more time elapsed between events).

## Reading the graph

Start at the **User message** node (top-left). Follow edges downward and to the right to trace the execution path. Branches appear as diverging edges — only one branch was executed; the others are shown in grey as "paths not taken" if the agent explicitly considered alternatives.

Click any node to open a detail panel on the right showing:
- The full content of that event (prompt text, tool input/output, error message)
- Timestamp and duration
- Token count (for LLM decision nodes)
- Link to the corresponding entry in the Agent Debug panel

## Narrative Hierarchy

The **Narrative Hierarchy** view (accessible from the Narrative Graph toolbar) shows the same data as a collapsible tree — useful for very deep graphs that are hard to read as a flat layout.

## File Trace Viewer

The **File Trace Viewer** (accessible from a node's detail panel → "File trace") shows which lines of agent code executed to produce a specific event. This is a deep debugging tool — use it when you need to understand exactly which code path in your agent implementation ran.

## Using Narrative Graph for quality improvement

The Narrative Graph is the most direct way to identify where an agent's reasoning went wrong:

1. **Unnecessary retries** — loopback nodes indicate a tool failed repeatedly. Fix the tool or adjust the agent's retry policy.
2. **Early termination** — the completion node is reached with few preceding nodes. The agent stopped too soon — check the LLM decision nodes leading up to it for the trigger.
3. **Inefficient path** — many sequential tool calls that could be parallelised. Restructure the agent's loop or use a swarm for the parallel work.
4. **Wrong branch taken** — the agent chose a path that led to failure. Examine the LLM decision node at the branch point; the prompt context at that point is usually the clue.

## Sharing a graph

Click **Export** → **PNG** or **SVG** to save the graph as an image. Click **Export → JSON** to export the raw narrative data, which can be imported back into the Narrative Graph for offline analysis or shared with a team member.
