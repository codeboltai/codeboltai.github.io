---
sidebar_position: 1
title: Overview
---

import { DocCardGrid } from '@site/src/components/DocCard';

# Using Codebolt

Reference documentation for every feature. Jump to what you need — this isn't meant to be read cover-to-cover.

For step-by-step walkthroughs see [Guides & Tutorials](../03_guides/01_overview.md). For writing code against Codebolt see [Build on Codebolt](../04_build-on-codebolt/01_overview.md).

---

<p class="uc-section-label">Workspace</p>

The interfaces you interact with day-to-day — where you write, run commands, and talk to agents.

<DocCardGrid columns={3} items={[
  { label: 'Chat', title: 'Chat', description: 'Conversations with agents, @-mentions, checkpoints, and inline editing.', href: './03_chat/01_overview' },
  { label: 'Code', title: 'Code Editor Features', description: 'Code editor, terminal, git panel, and preview browser.', href: './03b_code-and-terminal/01_overview' },
  { label: 'App', title: 'Application Features', description: 'Sign-in, teams, usage, and billing.', href: './09_account/01_sign-in' },
]} />

<p class="uc-section-label">Agents & Tools</p>

Everything to do with running AI agents — what they are, where they run, what tools they use, what they remember, and how to coordinate many of them at once.

<DocCardGrid columns={3} items={[
  { label: 'Agents', title: 'Agents', description: 'Install, run, debug, and manage AI agents and portfolios.', href: './04_agents/01_what-is-an-agent' },
  { label: 'Env', title: 'Environments', description: 'Run agents locally, in Docker, E2B, Daytona, or on a remote server.', href: './08a_environments/01_overview' },
  { label: 'Tools', title: 'Tools & MCP', description: 'Built-in tools, MCP servers, and capability bundles.', href: './05_tools-and-mcp/01_overview' },
  { label: 'Mem', title: 'Memory & Context', description: 'How agents remember and retrieve information across sessions.', href: './07_memory/01_overview' },
  { label: 'Multi', title: 'Multi-Agent Usage', description: 'Run swarms and flows, review outputs, trace execution.', href: './07_multi-agent-usage/01_overview' },
]} />

<p class="uc-section-label">Agent Extensions</p>

Modular units that extend what agents can do — reusable capabilities, slash-command skills, parallel action blocks, event-driven hooks, and the runtimes that execute them.

<DocCardGrid columns={3} items={[
  { label: 'Cap', title: 'Capabilities', description: 'Versioned, reusable bundles of agent behaviour with typed inputs and outputs.', href: './04b_agent-extensions/02_capabilities' },
  { label: 'Skill', title: 'Skills', description: 'Slash-command invocable capabilities installable from the marketplace.', href: './04b_agent-extensions/03_skills' },
  { label: 'AB', title: 'Action Blocks', description: 'Lightweight code units that run as side executions parallel to an agent.', href: './04b_agent-extensions/04_action-blocks' },
  { label: 'Exec', title: 'Executors', description: 'Language runtimes (Node, Python, shell) that run capabilities.', href: './04b_agent-extensions/05_executors' },
]} />

<p class="uc-section-label">Multi-Agent Coordination</p>

Tools for coordinating work across multiple agents — distributing tasks, messaging, reaching consensus, and managing swarms and orchestrators.

<DocCardGrid columns={3} items={[
  { label: 'Jobs', title: 'Jobs', description: 'Work queue agents bid on, lock, split, and deposit pheromones to coordinate around.', href: './07c_agent-coordination/02_jobs' },
  { label: 'Mail', title: 'Mail & Inbox', description: 'Threaded asynchronous messaging between agents and users.', href: './07c_agent-coordination/03_mail-inbox' },
  { label: 'Delib', title: 'Agent Deliberation', description: 'Voting, feedback, and consensus mechanisms for shared decisions.', href: './07c_agent-coordination/04_agent-deliberation' },
  { label: 'Swarm', title: 'Swarm Management', description: 'Create and manage named groups of agents working toward a shared goal.', href: './07c_agent-coordination/05_swarm-management' },
  { label: 'Orch', title: 'Orchestrator Management', description: 'Route tasks across agents via an active orchestrator layer.', href: './07c_agent-coordination/06_orchestrator-management' },
]} />

<p class="uc-section-label">Planning</p>

Structured tools for managing work from high-level strategy down to individual tasks. All planning data lives inside your project as plain files you can commit and diff.

<DocCardGrid columns={3} items={[
  { label: 'Roadmap', title: 'Roadmap', description: 'Features and phases, with an Ideation tab for reviewing suggestions.', href: './06_planning/02_roadmap' },
  { label: 'Specs', title: 'Specs', description: 'Technical specification documents with rich Markdown and inline comments.', href: './06_planning/03_specs' },
  { label: 'Tasks', title: 'Tasks', description: 'Individual work items with kanban view, subtask hierarchy, and agent message log.', href: './06_planning/07_tasks' },
  { label: 'Action', title: 'Action Plan', description: 'Structured execution plans with tasks, dependencies, parallel groups, and conditionals.', href: './06_planning/06_action-plan' },
  { label: 'UI', title: 'UI Flow', description: 'Wireframes and mockups on a freehand canvas.', href: './06_planning/04_ui-flow' },
  { label: 'Req', title: 'Requirement Plan', description: 'Aggregate documents linking Specs, UI Flows, and Action Plans.', href: './06_planning/05_requirement-plan' },
]} />

<p class="uc-section-label">Integrations</p>

Connect agents to external platforms — chat apps, project tools, and any custom service — through the Routing Gateway and a plugin-based channel system.

<DocCardGrid columns={3} items={[
  { label: 'GW', title: 'Routing Gateway', description: 'Central message router — rules, thread strategies, and activity log.', href: './08e_external-integrations/02_routing-gateway' },
  { label: 'Chat', title: 'Chat Platforms', description: 'Connect agents to Telegram, Slack, Discord, Teams, and WhatsApp via plugins.', href: './08e_external-integrations/03_chat-platforms' },
  { label: 'Tools', title: 'Project Tools', description: 'Integrate with Linear, GitHub, Jira, and Notion via MCP servers or webhooks.', href: './08e_external-integrations/04_project-tools' },
  { label: 'Plugin', title: 'Building a Channel Plugin', description: 'Connect any custom platform to the gateway with a WebSocket plugin.', href: './08e_external-integrations/05_building-a-channel-plugin' },
]} />

<p class="uc-section-label">Automation</p>

Mechanisms that trigger agents automatically — without a user typing a message. Route incoming HTTP requests, schedule timed events, react to file and git changes, and trace everything through the event log.

<DocCardGrid columns={3} items={[
  { label: 'WH', title: 'Webhooks', description: 'Incoming HTTP endpoints that route external requests to agents.', href: './08d_auto-interactivity/02_webhooks' },
  { label: 'Cal', title: 'Calendar Events', description: 'Schedule one-off and recurring events that notify agents at a set time.', href: './08d_auto-interactivity/03_calendar-events' },
  { label: 'Hook', title: 'Hooks', description: 'React to file saves, git commits, and agent lifecycle events automatically.', href: './08d_auto-interactivity/04_hooks' },
  { label: 'Log', title: 'Event Log', description: 'Real-time audit trail of every event flowing through the system.', href: './08d_auto-interactivity/05_event-log' },
]} />

<p class="uc-section-label">Configuration</p>

Connect external services, set guardrails, and manage your account. Usually a one-time setup per project or workspace.

<DocCardGrid columns={2} items={[
  { label: 'Int', title: 'Integrations', description: 'LLM providers, local models, git, browser control, and more.', href: './08_integrations/01_llm-providers' },
  { label: 'Guard', title: 'Guardrails & Settings', description: 'Safety rules, routing gateway, app and project config.', href: './09a_guardrails-and-settings/01_guardrails' },
]} />

<p class="uc-section-label">Operations</p>

Tools for monitoring what's happening — track running jobs, debug agent behaviour, and diagnose errors.

<DocCardGrid columns={3} items={[
  { label: 'Debug', title: 'Debug & Observability', description: 'AI debug, console, environment debug, codemap, problems panel, and chat canvas.', href: './08c_debug-and-observability/01_overview' },
  { label: 'Canvas', title: 'Chat Canvas', description: 'Freeform visual workspace for monitoring multi-agent runs in real time.', href: './08c_debug-and-observability/06_chat-canvas' },
  { label: 'Help', title: 'Troubleshooting', description: 'Common issues, diagnostics, and bug reporting.', href: './10_troubleshooting/01_common-issues' },
]} />
