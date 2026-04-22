---
sidebar_position: 1
title: The Planning System
---

# The Multi-Faceted Planning System

Most tools treat planning as a single thing — a list, a board, a document. Codebolt treats it as a **stack of complementary artifacts**, each optimised for a different horizon, format, and audience. The result is a planning system that humans can navigate intuitively and agents can read, update, and reason over programmatically.

import PlanningOverview from '@site/src/components/diagrams/PlanningOverview';

<PlanningOverview />

## Why multiple artifacts?

A piece of software needs to be understood at several levels simultaneously:

- **What should we build?** — product intent, prioritisation, tradeoffs
- **How should it behave?** — precise specification of interfaces, logic, constraints
- **What should it look like?** — screens, flows, component structure
- **How are we going to build it?** — the execution sequence, dependencies, who does what
- **What is being done right now?** — live task status, blockers, progress

No single format serves all five. A kanban board is terrible for recording design rationale. A written spec is terrible for tracking what's half-done. A roadmap is terrible for expressing conditional execution logic. Codebolt uses a distinct artifact for each concern and connects them explicitly rather than blending them into one overloaded format.

## The six artifacts and their roles

### Roadmap — strategic intent

The Roadmap answers *what* and *why*. It is the product-level view: phases representing milestones, features representing commitments, and an Ideation tab for suggestions that haven't been accepted yet.

The Roadmap is primarily **human-authored and human-reviewed**. Agents can submit ideas to Ideation, but the decision to promote a feature to a phase is a human judgement.

### Specs — behavioral specification

A Spec answers *how it should behave*. It is a rich Markdown/MDX document that captures interface contracts, edge cases, constraints, data models, and design decisions.

Specs are the **source of truth that agents read before acting**. When an agent is asked to implement a feature, referencing the spec gives it the same mental model the author had. Specs also support inline comments — both humans and agents can annotate specific sections, leaving reasoning traces that survive long after the original conversation.

### UI Flow — visual design intent

A UI Flow answers *what it should look like*. It is a freehand canvas (Excalidraw) containing wireframes, screen flows, and interaction sketches.

UI Flows exist alongside Specs rather than replacing them. A Spec says "the form must validate on submit"; a UI Flow shows where the error state appears. Together they eliminate the ambiguity that written specs alone leave open.

### Requirement Plan — the aggregating document

A Requirement Plan doesn't have its own content — it **pulls the other artifacts together**. It is a structured document with sections that can be free-form Markdown, or links that embed a Spec, a UI Flow, or an Action Plan inline.

The key insight is that the artifacts remain independent (editable in their native tools) but can be read as a unified document. A stakeholder or an agent wanting the full picture of a feature opens the Requirement Plan and gets everything in one place without anything being duplicated.

### Action Plan — execution graph

An Action Plan answers *how we will build it* at the level of executable steps. It is a structured graph of tasks, with explicit dependencies, parallel groups (workstreams that run concurrently), loops (iterate over a list), and conditionals (if/else branches).

Action Plans are primarily **agent-authored and agent-updated**. When an agent starts a non-trivial piece of work, it typically creates an Action Plan first, then executes against it — updating task statuses as it goes. This makes the agent's reasoning transparent and interruptible: you can see exactly what it planned, what it's done, and what remains.

### Tasks — operational tracking

Tasks are the live operational layer. They are individual work items with status, priority, assignment, sub-task hierarchy, and a message log. Unlike Action Plan tasks (which live inside a structured plan), standalone Tasks form a flexible backlog — closer to a kanban board.

Tasks are the most mutable artifact. They change state constantly as work happens. They are the answer to "what is happening right now?"

## Three dimensions of the system

The six artifacts span three design dimensions:

| Dimension | Spectrum |
|---|---|
| **Time horizon** | Strategic (Roadmap) → Tactical (Spec, Action Plan) → Operational (Tasks) |
| **Format** | Document (Spec, Req Plan) · Visual (UI Flow) · Graph (Action Plan) · List (Tasks) |
| **Primary author** | Human (Roadmap, Spec, UI Flow) ↔ Agent (Action Plan, Tasks) |

The system is designed so that no artifact is redundant — each occupies a distinct position on all three dimensions.

## How artifacts connect

The connections are explicit, not inferred:

- A **Roadmap feature** can be converted into a **Task** or sent to a chat thread for an agent to start working on
- A **Requirement Plan** embeds links to specific **Specs**, **UI Flows**, and **Action Plans** — the link is live; the embedded content is always current
- An **Action Plan** is often created in response to a Roadmap feature or a chat message referencing a Requirement Plan
- **Tasks** can be created from Roadmap features, from Action Plan steps, or standalone

## Agent readability as a first-class property

Every artifact in the planning system is stored as a plain file inside the project:

| Artifact | Format |
|---|---|
| Roadmap | `.codebolt/roadmap/roadmap.json` |
| Specs | `specs/*.specs` (Markdown) |
| UI Flows | `.codebolt/uiflows/*.json` (Excalidraw JSON) |
| Requirement Plans | `plans/*.plan` (JSON with section list) |
| Action Plans | `.codebolt/.action-plans/*.json` |

This is deliberate. Files in the project are automatically available as context to agents. An agent that reads a spec before writing code is doing the same thing a human engineer does: consulting the spec before touching the keyboard.

The `codeboltjs` SDK exposes every artifact via a typed API, so agents can also **write** planning artifacts — creating tasks, updating action plan statuses, and submitting roadmap ideas — not just read them.

## Composing a planning stack

The artifacts are independent. You can use just a Task list, or just Specs, without any of the others. But they compose into a coherent stack when you need the full picture:

```
Roadmap feature             ← human decides what to build
  └─ Requirement Plan       ← aggregates the full specification
       ├─ Spec              ← what it should do
       ├─ UI Flow           ← what it should look like
       └─ Action Plan       ← how the agent will build it
            └─ Tasks        ← live execution status
```

The stack is as shallow or as deep as the work requires. A small bug fix needs only a Task. A major feature might need the full stack. The system doesn't impose structure — it makes structure available when it's useful.

## See also

- [Roadmap](../../02_using-codebolt/06_planning/02_roadmap.md) — usage guide
- [Specs](../../02_using-codebolt/06_planning/03_specs.md) — usage guide
- [UI Flow](../../02_using-codebolt/06_planning/04_ui-flow.md) — usage guide
- [Requirement Plan](../../02_using-codebolt/06_planning/05_requirement-plan.md) — usage guide
- [Action Plan](../../02_using-codebolt/06_planning/06_action-plan.md) — usage guide
- [Tasks](../../02_using-codebolt/06_planning/07_tasks.md) — usage guide
