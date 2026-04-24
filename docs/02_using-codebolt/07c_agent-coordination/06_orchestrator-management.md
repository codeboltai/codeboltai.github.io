---
sidebar_position: 6
title: Orchestrator Management
---

# Orchestrator Management

![Orchestrator Management](/productImages/multiagentusage/orchestratormanagement.png)

An **orchestrator** is a coordinating agent that routes tasks to worker agents. Where a swarm defines a group of agents, an orchestrator actively delegates — it receives a high-level task, breaks it down, and assigns sub-tasks to the right workers.

Open via: **Agents dropdown → Orchestrator Management**

## What an orchestrator does

An orchestrator sits above worker agents in a hierarchy:

```
User / System
     │  high-level task
     ▼
Orchestrator  ──▶  assigns jobs  ──▶  Worker agents
```

The orchestrator decides which agent handles which part of a task, monitors progress, and consolidates results. It can also handle re-assignment when an agent fails or a job stalls.

## Creating an orchestrator

1. Click **+ New Orchestrator**
2. Enter a name and description
3. Optionally assign default worker agent IDs
4. Save

## Orchestrator status

| Status | Meaning |
|---|---|
| **Idle** | Running but not currently delegating any task |
| **Running** | Actively routing tasks to workers |
| **Paused** | Suspended; will not assign new work until resumed |

## Orchestrator detail

Click an orchestrator to open its detail view:

| Tab | Description |
|---|---|
| **Agents** | Worker agents assigned to this orchestrator |
| **Chat** | Direct chat interface with the orchestrator agent |
| **Settings** | Configuration and default worker assignments |

## Assigning worker agents

From the Agents tab in the orchestrator detail, add worker agents by selecting from the available agent list. The orchestrator will route tasks only to its assigned workers unless overridden.

## Chatting with an orchestrator

The **Combined Chat View** lets you talk directly to the orchestrator. Use this to give it a high-level goal, ask for a status update, or redirect its current task. The orchestrator responds and shows its delegation decisions in the chat.

## Filtering and search

Filter orchestrators by status (idle / running / paused) and search by name or description. Timestamps show when each orchestrator was created and last updated.

## Difference between orchestrators and swarms

| | Swarm | Orchestrator |
|---|---|---|
| **What it is** | A group configuration | An active delegation agent |
| **Work assignment** | Agents bid on jobs in the swarm's job group | Orchestrator assigns jobs directly |
| **User interaction** | Via Jobs and Swarm panels | Via Orchestrator chat and settings |
| **Best for** | Emergent, self-organising work | Directed, hierarchical task delegation |
