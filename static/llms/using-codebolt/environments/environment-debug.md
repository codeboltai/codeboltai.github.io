# Environment Debug

> The Environment Debug panel shows the fully resolved set of environment variables for the currently active environment — after inheritance, overrides, and.

The **Environment Debug** panel shows the fully resolved set of environment variables for the currently active environment — after inheritance, overrides, and system-level values are merged.

Open via: **Debug Tools dropdown → Environment Debug**

## Why this is useful

An agent may fail because a variable is missing, has an unexpected value, or has been overridden by a system variable. Environment Debug lets you see the final merged result without guessing — particularly valuable when coordinating across multiple environments (local, Docker, E2B, remote SSH), where a value that works in one may silently shadow in another.

## What it shows

A searchable table with three columns:

| Column | Description |
|---|---|
| **Key** | Variable name |
| **Value** | Resolved value (secrets are masked — click the eye icon to reveal) |
| **Source** | Where this value came from (`project`, `system`, `override`, `default`) |

Values shown with `●●●●●●` are masked. Click the **reveal** button to show the raw value temporarily (it is hidden again when you switch panels).

## Source priority

Variables are resolved in this order (highest priority first):

1. Task-level override (set on an individual task in the Tasks panel)
2. Project environment (configured in Environments panel)
3. System environment (your OS environment variables)
4. Default (built-in Codebolt defaults)

The **Source** column shows which level supplied each value.

## Comparing environments

Use the **Environment** dropdown at the top of the panel to switch between your configured environments without leaving the debug view. Useful for verifying that `dev` and `staging` have the expected differences, or that a remote Docker env resolves the same secrets as your local env before you hand work off to an agent running there.

## Related

- [Configuring Environments](./02_configuring-environments.md) — where the variables are set
- [Environment Providers](./03_environment-providers.md) — how providers inject their own values
- [Plugin Debug](../08_integrations/07_plugin-debug.md) — for plugin WebSocket traffic (separate panel)
