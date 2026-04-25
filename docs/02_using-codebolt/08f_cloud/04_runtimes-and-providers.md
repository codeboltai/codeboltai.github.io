---
sidebar_position: 4
title: Runtimes & Providers
description: A runtime in the cloud portal is a running instance of the CodeBolt server inside a sandbox
---

# Runtimes & Providers

A **runtime** in the cloud portal is a running instance of the CodeBolt server inside a sandbox. The sandbox itself is provisioned by a **runtime provider** — E2B, Daytona, Docker, or a custom provider. Runtimes are the core of how you scale work in Cloud: one per task, many in parallel, clean up when done.

## The Runtimes page

**Agents → Runtimes** lists every runtime tied to your account. For each, you see:

| Field | Meaning |
|---|---|
| **Status dot** | `online` (green), `starting` (amber, pulsing), `offline` / `stopped` (grey) |
| **Name** | Whatever you named it, or auto-derived from the bound repo |
| **Project path** | Absolute path inside the sandbox, usually `/home/user/<repo-name>` |
| **Type** | `local`, `e2b`, `docker`, `custom` — which provider spawned it |
| **Active threads** | How many chat threads are currently attached |
| **Runtime ID** | UUID used by the API and CLI |

Status is merged from two sources: the persisted record (from the API) and live WebSocket events. A runtime that existed but has no live connection shows `offline` with 0 active threads.

Delete a runtime with the trash icon — this terminates the sandbox immediately. You cannot recover in-sandbox state once deleted, but threads and conversation history are persisted on the portal backend and survive.

## The four runtime types

| Type | Where it runs | Use when |
|---|---|---|
| **`local`** | Your own machine, registered with the portal via the CodeBolt CLI | You want portal features (marketplace, remote chat, published agents) while keeping execution on your laptop |
| **`e2b`** | E2B's cloud sandboxes | Default cloud path. Fast start, strong isolation, pay-per-second via E2B |
| **`docker`** | A Docker host accessible to the portal (self-hosted or BYO) | Running on your own infra or a private cluster |
| **`custom`** | A provider you implemented against the Codebolt provider SDK | Any sandbox backend E2B / Daytona / Docker don't cover |

All four types share the same runtime surface — chat, threads, agent lifecycle — regardless of where the sandbox lives.

## Runtime lifecycle

```
create  →  start  →  online  →  (optional) delete  →  terminated
                       │
                       └── auto-terminates after 1 hour idle
```

- **Create**: happens implicitly when Remote Chat picks **New** as the mode, or explicitly via the CLI.
- **Start**: the portal installs the CodeBolt CLI into the sandbox (if needed), copies your settings, and runs `codebolt --server --port 3100 --project <path>`.
- **Online**: the WebSocket is connected and chats can attach.
- **Idle timeout**: 1 hour with no active WebSocket triggers automatic cleanup.
- **Delete**: explicit, immediate termination from the Runtimes page.

## What gets installed into a runtime

When the portal starts a new sandbox it executes, in order:

1. **Create sandbox** from an E2B (or Daytona) template.
2. **Clone the repository** if you selected one in Remote Chat.
3. **Install the CodeBolt CLI** — `npm install -g codebolt@<version>` with memory-constrained flags. If the template already has the pinned version, installation is skipped.
4. **Copy your settings** — the portal serialises your selected LLM provider, model, default agent, and user profile into `/home/user/.codebolt/settings.json`.
5. **Start the server** — `codebolt --server --port 3100 --project <path>` with env vars `APP_TOKEN`, `CODEBOLT_APP_TOKEN`, and `CLOUD_URL` set so the server registers itself with the portal's WebSocket bridge.
6. **Wait for port** — the portal polls until port 3100 answers; the runtime is marked `online` once it does.

Every step is streamed to the sandbox log panel so you can see exactly where things are.

## Runtime Providers (bring-your-own-key)

The portal supports bringing your own cloud-sandbox credentials so you control where code runs and who pays. Configure at **Settings → Agent Settings → Runtime Providers**.

Supported providers:

| Provider | Fields | Stored |
|---|---|---|
| **E2B** | `e2bSandboxToken` (API key) | Browser local storage only — never sent to the portal backend |
| **Daytona** | `daytonaSandboxApiKey` + `daytonaSandboxServerUrl` | Browser local storage only |

These credentials are read *client-side* when you start a new runtime. The portal backend never sees them. Signing out clears them alongside your session.

### When to bring your own key

- **Billing separation** — your E2B account, your bill.
- **Data residency** — pin sandboxes to a specific region in your provider's console.
- **Private templates** — reference a template you've published privately to your own E2B org.
- **Self-hosted Daytona** — point to your own Daytona server's URL.

If you don't provide a key, the portal falls back to a shared tier for evaluation. Shared-tier runtimes have stricter timeouts and lower resource limits — configure your own key for serious use.

## Scaling patterns

### One runtime per task (fan-out)

Spawn a fresh runtime for each parallel task. Good when tasks are independent and you don't want cross-contamination. The portal cleans each up on idle.

### One long-lived runtime per repo

Keep one runtime bound to a repo; all your chats on that repo reuse it. Faster because the sandbox is already warm, CLI installed, and repo cloned. Less isolation between threads.

### Hybrid

A long-lived "scratch" runtime for quick one-offs, plus ephemeral runtimes for larger parallel swarms.

### From the CLI

Programmatic runtime management is available via the API:

```http
GET    /runtimes/list             # your runtimes
DELETE /runtimes/:id              # terminate
```

Authenticate with a personal access token (see [Authentication → Authorization → Token scopes](../09_account/01_authentication-and-authorization.md#token-scopes)).

## When a runtime won't start

Common failures and what they mean:

- **"Primary install failed (exit 137)"** — the sandbox ran out of memory during `npm install`. The portal automatically retries with a lighter strategy (download tarball + install deps with limited memory). If even that fails, try a larger E2B template or a custom provider with more RAM.
- **"git clone failed"** — the GitHub token is expired or the repo is private and your GitHub app permissions don't cover it. Re-connect GitHub in the Remote Chat repo picker.
- **"CodeBolt did not open port 3100 in time"** — server startup took longer than 30 s. Usually a slow package install; check the log panel for stderr lines.
- **"codebolt binary not found after install"** — the template is broken or a `PATH` issue. Delete the runtime and retry; if it persists, file a bug with the sandbox log.

## Related

- [Cloud Overview](./01_overview.md)
- [Cloud Portal](./02_cloud-portal.md)
- [Remote Chat](./03_remote-chat.md) — the main way you spawn runtimes interactively
- [Environments](../08a_environments/01_overview.md) — the broader environment concept that runtimes implement
