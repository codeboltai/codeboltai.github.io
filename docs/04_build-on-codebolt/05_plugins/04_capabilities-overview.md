---
sidebar_position: 4
title: Capabilities Overview
---

# Capabilities Overview

A **capability** is a Codebolt-specific extension bundle. Where an MCP server provides only tools, a capability can bundle tools + prompts + hooks + UI panels + agent presets as one installable unit. Think of it as a "full integration" for a specific domain.

## Capability vs MCP server

| | MCP server | Capability |
|---|---|---|
| Tools | ✓ | ✓ |
| Prompts / agent presets | — | ✓ |
| Hooks | — | ✓ |
| UI panels | — | ✓ |
| Portable to non-Codebolt hosts | ✓ | — |
| Simpler to author | ✓ | — |

**Default choice: MCP server.** If your extension is only tools, ship it as MCP. Go with capability only when you need the extras.

## When a capability fits

- **A full integration** — e.g. "Stripe support" that includes Stripe tools, a Stripe-aware reviewer agent, prompts that know Stripe conventions, and a UI panel showing recent transactions.
- **Domain-specific workflow** — e.g. "incident response" bundling tools, an incident commander agent, hooks that log to PagerDuty, and a runbook panel.
- **Vendor product integration** — a SaaS vendor wants to ship one thing users install for "everything Codebolt + $PRODUCT".

## Anatomy of a capability bundle

```
my-capability/
├── capability.yaml       ← bundle manifest
├── README.md
├── tools/
│   └── my-mcp-server/    ← MCP server (same format as standalone)
├── agents/
│   ├── my-agent-1/       ← Codebolt agent(s)
│   └── my-agent-2/
├── hooks/
│   ├── hook-1.yaml
│   └── hook-2.ts
├── panels/
│   └── my-panel/         ← UI panel code
├── prompts/
│   └── prompt-library.md
└── assets/
    ├── icon.png
    └── screenshots/
```

Everything a standalone extension would ship, bundled under one manifest.

## The capability manifest

```yaml
# capability.yaml
name: stripe-support
version: 0.1.0
description: Everything you need to work with Stripe in Codebolt.
author: acme
license: MIT

provides:
  tools:
    - ./tools/stripe-mcp
  agents:
    - ./agents/stripe-reviewer
    - ./agents/stripe-implementer
  hooks:
    - ./hooks/log-stripe-calls.yaml
    - ./hooks/require-idempotency.ts
  panels:
    - ./panels/recent-charges
  prompts:
    - ./prompts/stripe-conventions.md

requires:
  codebolt_version: ">=2.0"
  env:
    - STRIPE_API_KEY

metadata:
  categories: [payments, saas]
  marketplace:
    icon: ./assets/icon.png
    screenshots:
      - ./assets/screenshots/main.png
```

The server reads this, registers each piece in the right subsystem, and the capability is now available as one unit in the user's workspace.

## Installation — how it looks to users

```bash
codebolt capability install marketplace/stripe-support
```

Under the hood, this installs every piece declared in the manifest:

1. The MCP server is added to `mcp-servers.yaml`.
2. The agents are copied to `.codebolt/agents/` and registered.
3. The hooks are copied to `.codebolt/hooks/`.
4. The panels are registered with `dynamicPanelService`.
5. The prompt library is added to the memory store.

The user can then use any piece independently — the bundle is not monolithic, the pieces are just co-installed.

## Uninstalling

```bash
codebolt capability uninstall stripe-support
```

Removes everything the capability provided. Individual pieces (e.g. the MCP server) can't be kept separately — it's all or nothing for the bundled install.

## Versioning

Standard semver. A capability update can:

- Add new pieces (minor bump).
- Modify existing pieces (patch or minor depending on impact).
- Remove or breakingly-change pieces (major bump, requires explicit opt-in).

Users on an older major are not auto-upgraded.

## When NOT to use a capability

- **Only tools** — ship as an MCP server. Portable and simpler.
- **Only an agent** — ship as a custom agent. No bundling needed.
- **Only hooks** — hooks are tiny. Ship them as YAML/code in your project.
- **Anything that should work outside Codebolt** — MCP is the cross-host standard.

Capability is for when the user should think of several pieces as one unit.

## See also

- [Hooks Overview](./01_hooks-overview.md)
- [Custom Tools & MCP Overview](../04_custom-tools-and-mcp/01_overview.md)
- [Capability Download Flow](./05_capability-download-flow.md)
- [MCP & Tools (internals)](../08_internals/03_subsystems/02_mcp-and-tools.md)
