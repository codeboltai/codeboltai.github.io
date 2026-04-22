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

The primary surfaces you interact with day-to-day — where you write, run commands, and talk to agents.

<DocCardGrid columns={2} items={[
  { label: 'Chat', title: 'Chat', description: 'Conversations with agents, @-mentions, checkpoints, and inline editing.', href: './03_chat/01_overview' },
  { label: 'Code', title: 'Code & Terminal', description: 'Code editor, terminal, git panel, and preview browser.', href: './03b_code-and-terminal/01_overview' },
]} />

<p class="uc-section-label">Agents & Tools</p>

Everything to do with running AI agents — what they are, where they run, what tools they use, how they plan, what they remember, and how to coordinate many of them at once.

<DocCardGrid columns={3} items={[
  { label: 'Agents', title: 'Agents', description: 'Install, run, debug, and manage AI agents and portfolios.', href: './04_agents/01_what-is-an-agent' },
  { label: 'Env', title: 'Environments', description: 'Run agents locally, in Docker, E2B, Daytona, or on a remote server.', href: './08a_environments/01_overview' },
  { label: 'Tools', title: 'Tools & MCP', description: 'Built-in tools, MCP servers, and capability bundles.', href: './05_tools-and-mcp/01_overview' },
  { label: 'Plan', title: 'Planning', description: 'Roadmap, specs, tasks, action plans — all committed to your repo.', href: './06_planning/01_overview' },
  { label: 'Mem', title: 'Memory & Context', description: 'How agents remember and retrieve information across sessions.', href: './07_memory/01_overview' },
  { label: 'Multi', title: 'Multi-Agent', description: 'Run swarms and flows, review outputs, trace execution.', href: './07_multi-agent-usage/01_overview' },
]} />

<p class="uc-section-label">Configuration</p>

Connect external services, set guardrails, and manage your account. Usually a one-time setup per project or workspace.

<DocCardGrid columns={3} items={[
  { label: 'Int', title: 'Integrations', description: 'LLM providers, local models, git, browser control, and more.', href: './08_integrations/01_llm-providers' },
  { label: 'Guard', title: 'Guardrails & Settings', description: 'Safety rules, routing gateway, app and project config.', href: './09a_guardrails-and-settings/01_guardrails' },
  { label: 'Acct', title: 'Account', description: 'Sign-in, teams, usage, and billing.', href: './09_account/01_sign-in' },
]} />

<p class="uc-section-label">Operations</p>

Tools for monitoring what's happening — track running jobs, debug agent behaviour, and diagnose errors.

<DocCardGrid columns={3} items={[
  { label: 'Exec', title: 'Execution & Tracking', description: 'Jobs queue and chat canvas for multi-agent coordination.', href: './08b_execution-and-tracking/01_overview' },
  { label: 'Debug', title: 'Debug & Observability', description: 'AI debug, console, environment debug, codemap, problems panel.', href: './08c_debug-and-observability/01_overview' },
  { label: 'Help', title: 'Troubleshooting', description: 'Common issues, diagnostics, and bug reporting.', href: './10_troubleshooting/01_common-issues' },
]} />
