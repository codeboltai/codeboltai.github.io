# Authentication & Authorization

> Two questions every request has to answer: who is making it (authentication) and what are they allowed to do (authorization)

Two questions every request has to answer: **who is making it** (authentication) and **what are they allowed to do** (authorization). Codebolt handles both consistently across the desktop app, CLI, TUI, HTTP API, and remote agents that connect back to a running server.

## Authentication

How you prove who you are. The mechanism varies by surface; the resulting session is the same.

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
