---
sidebar_position: 2
title: Cloud Portal
description: The portal at portal.codebolt.ai is the browser UI for Codebolt Cloud. It's organised into three top-level tabs, each focused on one kind of task.
---

# The Cloud Portal

The portal at [portal.codebolt.ai](https://portal.codebolt.ai) is the browser UI for Codebolt Cloud. It's organised into **three top-level tabs**, each focused on one kind of task.

## Sign in

First visit opens a sign-in screen. Use the same account you use for the desktop app — email + password or OAuth (Google / GitHub / Microsoft). On self-hosted deployments, OIDC / SAML / LDAP show up here as configured by your admin.

See [Authentication & Authorization](../09_account/01_authentication-and-authorization.md) for the full auth story across app, CLI, and remote agents.

## Registry — browse and discover

The Registry tab is where you browse everything publishable. Each entity type has an **All** view (public marketplace) and a **My** view (what you've published).

| Section | All view (discover) | My view (publish) |
|---|---|---|
| **Agents** | Browse public agents with ratings, filters, ZIP upload | Edit, update, deprecate your own agents |
| **MCPs** | Browse MCP servers, search by capability | Manage MCPs you've published |
| **Providers** | Browse LLM provider integrations | Manage your published providers |
| **Skills** | Slash-command skills from the marketplace | Manage your skills |
| **Action Blocks** | Side-execution code units | Manage your blocks |
| **Capabilities** | Versioned capability bundles | Manage your capabilities |
| **Plugins** | Plugin marketplace | Manage your plugins |
| **Executors** | Runtime executors (Node, Python, shell) | Manage your executors |
| **Templates** | Project templates | Manage your templates |
| **Apps** | Packaged apps | Manage your apps |

See [Marketplace Publishing](./05_marketplace-publishing.md) for the publishing flow.

## Agents — run and iterate

The Agents tab is where you actually *use* the cloud runtime.

| Page | Purpose |
|---|---|
| **Remote Chat** | Start or join a chat against an agent running in a cloud sandbox. Pick a runtime, select an agent, optionally clone a GitHub repo into the sandbox before chatting. See [Remote Chat](./03_remote-chat.md). |
| **Runtimes** | List of your runtime instances — live status (online / offline / starting), type (local / E2B / Docker / custom), project path, number of active threads, and a delete button. See [Runtimes & Providers](./04_runtimes-and-providers.md). |
| **Issues** | Ticket-style view of issues assigned to your agents or raised by them. All Issues / My Issues split. |

## Settings — account and config

The Settings tab collects everything configuration-related.

### General Settings
Profile info, display preferences, theme, and account-wide defaults.

### Subscription
- **Plans** — browse and upgrade / downgrade your subscription. Pulls from `/users/plan` on the API.
- **Usage** — token, request, and cost charts broken down by model and project.
- **Billing** — payment methods, invoices, add credit, transaction history.

### Agent Settings
- **Login Tokens** — personal access tokens you can paste into the CLI or HTTP API. Create with a name and expiry (30 d / 90 d / 1 year / no expiry) at `/settings/loginTokens`.
- **Runtime Providers** — bring-your-own-key for [E2B](https://e2b.dev) or [Daytona](https://daytona.io). Stored in your browser's local storage, never transmitted to the portal backend. See [Runtimes & Providers](./04_runtimes-and-providers.md#runtime-providers).
- **LLM Provider Settings** — configure which LLM providers and models are available to your cloud agents. Same format as the desktop app's provider settings — the portal writes them into the sandbox's `settings.json` when a runtime starts.

## What the portal talks to

| Surface | Endpoint |
|---|---|
| REST API | `https://api.codebolt.ai/api` |
| Live updates (runtimes, chats) | `wss://codebolt-wrangler-ws.arrowai.workers.dev` (Cloudflare Workers) |
| CodeBolt server inside a sandbox | `https://<sandbox-host>:3100` (auto-assigned per runtime) |

You rarely touch these directly — the portal handles all of it — but the URLs are useful when debugging a stuck connection or scripting against the API.

## Related

- [Cloud Overview](./01_overview.md)
- [Authentication & Authorization](../09_account/01_authentication-and-authorization.md)
