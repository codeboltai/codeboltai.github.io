---
sidebar_position: 1
title: Cloud Overview
description: Everything you do in the desktop app — run agents, edit code, install from the marketplace, manage providers — you can also do from a browser against.
---

# Codebolt Cloud

Everything you do in the desktop app — run agents, edit code, install from the marketplace, manage providers — you can also do from a browser against cloud-managed runtimes. That is **Codebolt Cloud**: a hosted portal at [portal.codebolt.ai](https://portal.codebolt.ai) plus a runtime fabric that spins up sandboxed CodeBolt server instances on demand.

Nothing you already learned about CodeBolt changes. The agent runtime, the plugin system, the CLI, the settings format — all identical. Cloud is just where the CodeBolt server process runs (a managed sandbox) and how you interact with it (a browser, not a desktop window).

## What Cloud gives you

- **No install.** Sign in at [portal.codebolt.ai](https://portal.codebolt.ai) and you have a working CodeBolt environment — no Docker, no Node, no CLI bootstrap on your laptop.
- **Scale on demand.** Spawn one runtime per task, or many in parallel. Sandboxes are short-lived by default and clean up automatically.
- **Own your sandbox provider.** Use the hosted E2B tier, or bring your own API key for [E2B](https://e2b.dev) or [Daytona](https://daytona.io). Credentials live in your browser, not on our servers.
- **Publish once, reach everyone.** The marketplace — agents, MCPs, skills, capabilities, providers, action blocks, executors, templates, apps, plugins — is served from the same portal.
- **Manage from anywhere.** Your runtimes, login tokens, LLM providers, plans, and usage are all portal-native.

## When to reach for Cloud

- **You don't want to install the desktop app.** Travel laptops, chromebooks, shared dev boxes — the portal works in any modern browser.
- **You're running many agents at once.** Scaling on a laptop hits CPU, memory, and network limits fast. Cloud sandboxes isolate each run.
- **You need repeatable environments.** A cloud runtime starts from a known template every time. No "works on my machine."
- **You're publishing.** Agents, MCPs, skills, providers, and apps are published through the cloud portal — that's the only way to reach the marketplace.
- **Your team needs shared runtimes.** Each runtime is identifiable by user ID and shows up across devices when you sign in.

## When local is enough

- **Single-machine development** where a local CodeBolt server on your laptop is faster and free.
- **Offline work** — Cloud sandboxes need a live connection back to the portal's WebSocket bridge.
- **Strict data residency** — if your code can't leave your network, run self-hosted or local.

## What you'll find in this section

| Page | Covers |
|---|---|
| [Cloud Portal](./02_cloud-portal.md) | The browser UI — three tabs (Registry, Agents, Settings) and what lives under each |
| [Remote Chat](./03_remote-chat.md) | Chat against an agent running in a cloud sandbox; pick an existing runtime or create a new one; clone a GitHub repo into the sandbox |
| [Runtimes & Providers](./04_runtimes-and-providers.md) | Manage runtime instances (E2B, Daytona, Docker, custom); bring your own sandbox API key |
| [Marketplace Publishing](./05_marketplace-publishing.md) | Publishing agents, MCPs, skills, capabilities, providers, action blocks, executors, templates, apps, and plugins from the portal |

## How it connects to the rest of CodeBolt

- **Desktop / CLI / TUI** all sign in with the same account and can consume the cloud marketplace. Cloud is *additional*, not a replacement — your local setup keeps working.
- **Authentication** uses the same identity service as the desktop app. See [Authentication & Authorization](../09_account/01_authentication-and-authorization.md).
- **Environments** covers *where the agent runs* (local, Docker, E2B, Daytona, custom). The Cloud portal is one particular surface for starting and managing remote environments. See [Environments](../08a_environments/01_overview.md) for the concept and [Runtimes & Providers](./04_runtimes-and-providers.md) for portal-specific management.
- **Self-executed remote agents** can connect back to your cloud runtime using the same thread-token flow as a local server — see [Authentication → Remote agent](../09_account/01_authentication-and-authorization.md#authentication).
