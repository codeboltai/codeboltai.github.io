---
sidebar_position: 3
title: Environment & Plugin Debug
---

# Environment & Plugin Debug

## Environment Debug {#environment-debug}

The Environment Debug panel shows the fully resolved set of environment variables for the currently active environment — after inheritance, overrides, and system-level values are merged.

Open via: **Debug Tools dropdown → Environment Debug**

### Why this is useful

An agent may fail because a variable is missing, has an unexpected value, or has been overridden by a system variable. Environment Debug lets you see the final merged result without guessing.

### What it shows

A searchable table with three columns:

| Column | Description |
|---|---|
| **Key** | Variable name |
| **Value** | Resolved value (secrets are masked — click the eye icon to reveal) |
| **Source** | Where this value came from (`project`, `system`, `override`, `default`) |

Values shown with `●●●●●●` are masked. Click the **reveal** button to show the raw value temporarily (it is hidden again when you switch panels).

### Source priority

Variables are resolved in this order (highest priority first):
1. Task-level override (set on an individual task in the Tasks panel)
2. Project environment (configured in Environments panel)
3. System environment (your OS environment variables)
4. Default (built-in Codebolt defaults)

The **Source** column shows which level supplied each value.

### Comparing environments

Use the **Environment** dropdown at the top of the panel to switch between your configured environments without leaving the debug view. Useful for verifying that `dev` and `staging` have the expected differences.

---

## Plugin Debug {#plugin-debug}

The Plugin Debug panel shows the WebSocket connection state, incoming/outgoing messages, and errors for all installed plugins — chat integration plugins, custom node plugins, embedding provider plugins, and others.

Open via: **Debug Tools dropdown → Plugin Debug**

### What it shows

Each plugin appears as a collapsible section with:

| Field | Description |
|---|---|
| **Plugin name** | The plugin's identifier |
| **Status** | `connected`, `disconnected`, `error` |
| **Connection time** | When the plugin connected |
| **Message count** | Total messages exchanged this session |
| **Last message** | Timestamp and type of the most recent message |

Expand a plugin section to see the live WebSocket message stream:

- **Outgoing** (→) — messages sent from Codebolt to the plugin
- **Incoming** (←) — messages received from the plugin
- Each message shows the type, payload (collapsed), and timestamp

### Debugging a disconnected plugin

If a plugin shows `disconnected` or `error`:

1. Check the **error message** in the plugin's section (shown in red)
2. Look for connection refusals (the plugin process crashed or isn't running)
3. Check the plugin's own log output in the Console panel
4. Verify the plugin's configuration in **System Settings → Plugins**

### Message filtering

Use the **Type** filter to show only specific message types (e.g., only `chatMessage` events from a chat integration plugin). Reduces noise when diagnosing a specific interaction.
