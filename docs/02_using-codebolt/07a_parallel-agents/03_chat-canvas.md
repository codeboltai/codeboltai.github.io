---
sidebar_position: 3
title: Chat Canvas
---

# Chat Canvas

The Chat Canvas is a freeform visual workspace for coordinating multi-agent work. Where the standard Chat panel is linear (message → reply → message), the Canvas lets you arrange agent conversations as nodes on a 2D surface, draw connections between them, and see the full picture of a complex agent workflow at a glance.

Open via: **Agents dropdown → Chat Canvas**

## When to use the Canvas

Use Chat Canvas when:

- You are orchestrating multiple agents and want to see how their outputs feed into each other
- You want to compare the outputs of several agents running in parallel on the same task
- You are designing a workflow and want a visual scratch space before committing to a formal Action Plan

For single-agent conversations, the standard Chat panel is simpler and faster.

## Canvas nodes

Each agent conversation on the canvas is a **node**. Nodes show:

- The agent name and avatar
- The most recent message exchange (truncated)
- The thread status badge (`running`, `completed`, `paused`)
- A **expand** icon to open the full conversation thread

Drag nodes to reposition them on the canvas. Zoom in/out with the mouse wheel.

## Connections

Draw a connection from one node's output handle to another node's input handle to represent a dependency — "Agent A's output should feed into Agent B." Connections are visual annotations; they do not automatically wire data between agents in the runtime (use [Action Plans](../06_planning/06_action-plan.md) for live orchestration). They are useful for documenting intent and navigating a complex canvas.

## Starting new conversations from the canvas

Click **+ Add Agent** (toolbar or right-click canvas) to add a new agent node. Select an agent from the picker and type an initial message to start the conversation. The new thread appears as a node on the canvas.

## Monitoring concurrent runs

When multiple agents are running simultaneously, the Canvas shows all of them updating in real time. Status badges refresh without polling — the Canvas receives WebSocket push events from the server. Use this view during a swarm run to monitor which agents are working and which are waiting.

## Saving a canvas layout

Canvas layouts are saved automatically to the project. The next time you open Chat Canvas, your node positions and connections are restored. Different projects have independent canvas layouts.
