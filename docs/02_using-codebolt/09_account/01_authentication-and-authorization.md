---
sidebar_position: 1
title: Authentication & Authorization
description: "Two questions every request has to answer: who is making it (authentication) and what are they allowed to do (authorization)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication & Authorization

Two questions every request has to answer: **who is making it** (authentication) and **what are they allowed to do** (authorization). Codebolt handles both consistently across the desktop app, CLI, TUI, HTTP API, and remote agents that connect back to a running server.

## Authentication

How you prove who you are. The mechanism varies by surface; the resulting session is the same.

<Tabs groupId="surface">
<TabItem value="desktop" label="Desktop" default>

First launch opens a sign-in screen. Create an account or sign in with an existing one — email + password, or OAuth via Google / GitHub / Microsoft. The app stores a refresh token in your OS keychain (macOS Keychain, Windows Credential Manager, libsecret on Linux). Subsequent launches sign you in automatically.

</TabItem>
<TabItem value="cli" label="CLI">

For machines with a browser:

```bash
codebolt auth login
```

Opens your default browser, completes the OAuth flow, writes the refresh token to the OS keychain.

For headless machines (SSH, CI, containers) use a personal access token instead:

```bash
# Generate the token in the desktop app: Settings → Account → Tokens → New token
codebolt config set token <generated-token>
codebolt config set server https://codebolt.my-org.com
codebolt app status     # should print "authenticated"
```

Tokens can be scoped — see [Authorization](#authorization) below.

</TabItem>
<TabItem value="tui" label="TUI">

On first launch the TUI prompts for either device-flow OAuth (you visit a URL on another device, enter a code) or a personal access token. Same credentials as the CLI; same keychain storage.

</TabItem>
<TabItem value="remote" label="Remote agent">

A **self-executed remote agent** runs outside Codebolt — your terminal, CI job, container, or another machine — and connects *back* to a running Codebolt server over WebSocket. Authentication for that connection is a short-lived pair of env vars the server issues per thread:

```bash
# macOS / Linux
export threadToken=<token-from-the-UI>
export agentId=<agent-id-from-the-UI>

# Windows (cmd)
set threadToken=<token>
set agentId=<agent-id>
```

Then start your agent process. The process uses these values to open the `/codebolt` WebSocket and identify itself to the server.

Where the token comes from:

- **Desktop** — selecting a self-executed remote agent in the model selector shows a help icon; the popover displays the active thread token and a copy button. If no thread exists yet, it shows `Start a chat to generate a token`.
- **CLI** — `codebolt application getThreadToken` prints the token for the current thread. Sessions that do not have a thread yet must open one first.

The token is **scoped to a single thread** and revoked when the thread ends. It is not a long-lived credential — do not commit it anywhere. For the broader story on remote agents see [Creating Agents → Quickstart](../../04_build-on-codebolt/02_creating-agents/02_quickstart.md#option-b--self-executed) and [Remote Execution](../../04_build-on-codebolt/11_agent-infrastructure/09_remote-execution.md).

**For *CodeBolt-executed* remote agents** (the other remote mode, where Codebolt itself launches your process), no env vars are required — the server is the parent process and passes the identifiers in directly.

**For remote execution providers** (Docker / Kubernetes / SSH / Cloud VMs — the sandbox a CodeBolt-executed agent runs *inside*), authentication is configured once per provider in `Settings → Execution → Remote providers`. Those credentials (kubeconfig, SSH key, cloud API key) are stored in the OS keychain alongside your user session, never transmitted to the Codebolt identity service.

</TabItem>
<TabItem value="api" label="HTTP API">

Authenticate every request with a bearer token:

```http
GET /api/whoami
Authorization: Bearer <personal-access-token>
```

For OAuth applications, use the standard authorization-code flow with the `/oauth/authorize` and `/oauth/token` endpoints — see the [API access reference](../../05_reference/10_api-access/1-index.md).

</TabItem>
</Tabs>

### Hosted service

When you download the Codebolt desktop app from codebolt.ai and run it, authentication uses the hosted Codebolt identity service. Email + password or OAuth (Google / GitHub / Microsoft).

### Self-hosted team server

When your team runs its own Codebolt server, sign-in depends on how the admin configured auth:

- **Local accounts** — email + password, stored in the team's Codebolt DB.
- **OIDC / SSO** — redirects to Google Workspace, Microsoft Entra, Okta, etc.
- **SAML** — legacy SSO.
- **LDAP** — for traditional enterprise directories.

The sign-in screen shows whichever option the admin enabled. For OIDC / SAML, clicking "Sign in with SSO" opens your organisation's identity provider in a browser.

### Local / no account needed

For pure local use (no sync, no marketplace, no team), you can skip sign-in. The app will work with default local features. You'll be missing:

- Marketplace downloads (can still install agents from local files).
- Cross-device sync.
- Team features.

### Signing out

**Settings → Account → Sign out.** Removes your tokens from local storage. Your local data (projects, history, memory) is not deleted — signing back in reconnects you to the same data.

### Multiple accounts

The desktop app supports multiple accounts for users who work across different organisations. **Settings → Account → Add account.** Switch via the account menu in the top-right.

Each account has its own data directory; they don't share projects or memory.

### Token refresh and expiry

Session tokens expire (duration set by your server's auth config, typically 24 h – 30 d). The app refreshes them silently in the background. If the refresh fails — expired refresh token, admin revoked your session, network down — you'll be prompted to sign in again.

Thread tokens (remote agent) expire when the thread ends; there is no refresh — open a new thread to get a new token.

### Two-factor authentication

MFA is handled by your identity provider. If your OIDC / SAML provider enforces MFA, Codebolt will honour it — you'll see the MFA prompt during sign-in. For local accounts, enable TOTP in **Settings → Account → Security → Two-factor**.

### Recovering a lost account

For the hosted service, use the "forgot password" flow on the sign-in screen. For self-hosted, contact your admin.

If you're locked out of a self-hosted admin account, the admin has a CLI recovery tool:

```bash
# On the server, with shell access
codebolt admin reset-password --user admin@my-org.com
```

## Authorization

Once you're authenticated, what you can *do* is controlled by three overlapping layers: team roles, token scopes, and guardrails.

### Team roles

A user in a team has one of three default roles:

| Role | Can do |
|---|---|
| **Owner** | Change team settings, manage billing, delete the team |
| **Admin** | Invite members, manage agent portfolios, configure guardrails |
| **Member** | Create projects, run agents; cannot change team-level settings |

Self-hosted deployments can define **custom roles** with finer-grained permissions. See [Teams → Roles](./02_teams.md#roles).

### Token scopes

A personal access token inherits your user's permissions *at most*, but can be **scoped down** when you mint it:

| Scope dimension | Options |
|---|---|
| **Access** | read-only, read-write, admin |
| **Project** | all projects, or a specific project ID |
| **Lifetime** | expires in 1 h / 1 d / 30 d / 90 d / no expiry |

Pick the narrowest scope that works. A CI job that only needs to publish a build doesn't need admin or project-wide access. Mint a token at **Settings → Account → Tokens → New token** and pick the scopes on the create form.

Thread tokens for self-executed remote agents are automatically the narrowest possible scope — one thread, read-write on that thread only, expires with the thread.

### Guardrails

Even an authorised user has limits on what *agents* acting on their behalf can do. Guardrails gate tool calls, file writes, network access, and cost — orthogonal to who is signed in, applied uniformly to every agent run.

See [Guardrails & Settings → Guardrails](../05b_guardrails-and-settings/01_guardrails.md) for the full rule set.

## See also

- [Account Overview](../01_overview.md)
- [Teams](./02_teams.md)
- [Usage and Billing](./03_usage-and-billing.md)
- [Guardrails](../05b_guardrails-and-settings/01_guardrails.md) — agent-level authorization
- [Remote Execution](../../04_build-on-codebolt/11_agent-infrastructure/09_remote-execution.md) — provider credentials for sandboxes
