---
sidebar_position: 1
title: Sign In
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sign In

How you authenticate to Codebolt. Depends on whether you're using the hosted service, a self-hosted team server, or running local. The mechanism varies by surface; the resulting credentials are the same.

<Tabs groupId="surface">
<TabItem value="desktop" label="Desktop" default>

First launch opens a sign-in screen. Create an account or sign in with an existing one — email + password, or OAuth via Google / GitHub / Microsoft. The app stores a refresh token in your OS keychain. Subsequent launches sign you in automatically.

</TabItem>
<TabItem value="cli" label="CLI">

For machines with a browser:

```bash
codebolt auth login
```

Opens your default browser, completes the OAuth flow, writes the refresh token to the OS keychain.

For headless machines (SSH, CI), use a personal access token instead:

```bash
# Generate the token in the desktop app: Settings → Account → Tokens → New token
codebolt config set token <generated-token>
codebolt config set server https://codebolt.my-org.com
codebolt app status     # should show "authenticated"
```

</TabItem>
<TabItem value="tui" label="TUI">

On first launch the TUI prompts for either device-flow OAuth (you visit a URL on another device, enter a code) or a personal access token. Same credentials as the CLI; same keychain storage.

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

## Hosted service

When you download the Codebolt desktop app from codebolt.ai and run it, sign-in uses the hosted Codebolt identity service. Email + password or OAuth (Google / GitHub / Microsoft).

## Self-hosted team server

When your team runs its own Codebolt server, sign-in depends on how the admin configured auth:

- **Local accounts** — email + password, stored in the team's Codebolt DB.
- **OIDC / SSO** — redirects to Google Workspace, Microsoft Entra, Okta, etc.
- **SAML** — legacy SSO.
- **LDAP** — for traditional enterprise directories.

The sign-in screen shows whichever option the admin enabled. For OIDC/SAML, clicking "Sign in with SSO" opens your organisation's identity provider in a browser.

## Local / no account needed

For pure local use (no sync, no marketplace, no team), you can skip sign-in. The app will work with default local features. You'll be missing:

- Marketplace downloads (can still install agents from local files).
- Cross-device sync.
- Team features.

## Signing out

**Settings → Account → Sign out.** Removes your tokens from local storage. Your local data (projects, history, memory) is not deleted — signing back in reconnects you to the same data.

## Multiple accounts

The desktop app supports multiple accounts for users who work across different organisations. **Settings → Account → Add account.** Switch via the account menu in the top-right.

Each account has its own data directory; they don't share projects or memory.

## Token refresh and expiry

Session tokens expire (duration set by your server's auth config, typically 24h-30d). The app refreshes them silently in the background. If the refresh fails — expired refresh token, admin revoked your session, network down — you'll be prompted to sign in again.

## SSO and the headless CLI

For the CLI on a machine without a browser (SSH, CI), use a personal access token instead of browser-based SSO:

```bash
# Generate a token in the UI (Settings → Account → Tokens → New token)
codebolt config set token <generated-token>
codebolt config set server https://codebolt.my-org.com
codebolt app status    # should show "authenticated"
```

Tokens can be scoped: read-only, project-specific, time-limited. Use the narrowest scope that works.

## Two-factor authentication

MFA is handled by your identity provider. If your OIDC/SAML provider enforces MFA, Codebolt will honour it — you'll see the MFA prompt during sign-in. For local accounts, enable TOTP in **Settings → Account → Security → Two-factor**.

## Recovering a lost account

For the hosted service, use the "forgot password" flow on the sign-in screen. For self-hosted, contact your admin.

If you're locked out of a self-hosted admin account, the admin has a CLI recovery tool:

```bash
# On the server, with shell access
codebolt admin reset-password --user admin@my-org.com
```

## See also

- [Account Overview](../01_overview.md)
- [Teams](./02_teams.md)
- [Usage and Billing](./03_usage-and-billing.md)
