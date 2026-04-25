# Sub Agent

> A sub-agent is a child run started by another agent to handle a smaller, focused part of a task

A sub-agent is a child run started by another agent to handle a smaller, focused part of a task. The parent agent stays responsible for the overall goal and uses the child run to offload a specific piece of work.

## What sub-agents are good for

Sub-agents are useful when a parent agent needs to:

- Delegate a focused task to a specialist agent
- Split a large task into parallel pieces
- Compare two approaches before deciding what to do next
- Keep the parent focused on orchestration instead of implementation details

## How they appear in Codebolt

From the product's current implementation, standard sub-agent execution is tracked as a parent/child relationship on agent executions. The child run is linked back to the parent by `parentAgentInstanceId`, which is what powers the hierarchy views.

In practice, you will usually see sub-agents in one or more of these places:

- The **Running Agent** hierarchy while they are active
- Execution-tree style views that show parent and child runs together
- The [Chat Canvas](./03_chat-canvas.md) when you want a visual view of related conversations

Some delegated work can also be started in a separate child thread through the thread APIs, but that is a different mechanism from the basic sub-agent call path.

## When sub-agents help most

Sub-agents work best when the task can be decomposed cleanly. Common examples:

- One agent writes tests while another updates docs
- A reviewer agent checks output from an implementation agent
- An orchestrator sends separate modules to separate specialists

If the task is short and tightly coupled, a single agent is usually simpler.

## Monitoring delegated work

When a parent agent spawns sub-agents, watch:

- The parent run for delegation events and final synthesis
- The Running Agent hierarchy for child status and nesting
- The execution history for the final merged result once the children complete

For a broader view of multiple delegated runs at once, use [Running Parallel Agents](./02_running-parallel-agents.md).

## If you are building agents

This page is about using sub-agents from the product. If you need the implementation APIs for spawning them from agent code, including same-thread calls and separate child-thread APIs, see [Build on Codebolt → Subagents](../../04_build-on-codebolt/03_agent-extensions/08_subagents.md).

## See also

- [Running Parallel Agents](./02_running-parallel-agents.md)
- [Background Agent](./04_background-agent.md)
- [Chat Canvas](./03_chat-canvas.md)
