---
sidebar_position: 5
title: Capability Download Flow
---

# Capability Download Flow

What happens, step by step, when you install a capability from the marketplace. This page is useful if you're writing capabilities (to understand what users experience) or debugging install failures.

## The flow

```
codebolt capability install marketplace/stripe-support
       │
       ▼
1. Resolve              marketplace lookup → bundle URL + manifest + signature
       │
       ▼
2. Download             capabilityDownloadHandler fetches the bundle
       │
       ▼
3. Verify               signature check + manifest validation
       │
       ▼
4. Stage                extract to a staging directory
       │
       ▼
5. Compatibility check  codebolt_version range + required env + dependencies
       │
       ▼
6. Prompt user          show what will be installed + any new permissions
       │
       ▼
7. Register pieces      MCP server / agents / hooks / panels / prompts
       │
       ▼
8. Start processes      PluginProcessManager spawns MCP servers
       │
       ▼
9. Verify healthy       handshake each piece, confirm running
       │
       ▼
10. Commit              move from staging to installed, add to CapabilityRegistry
       │
       ▼
11. Notify              UI and event log
```

Failures at any step roll back to the previous state — a failed install leaves no partial artefacts.

## Source code

Owned by `CapabilityManager` with `capabilityDownloadHandler` as the download side and `capabilityRegistry` as the post-install registry. All in `packages/server/src/services` and `managers/`.

## Step-by-step detail

### 1. Resolve

`capabilityRegistry.lookup("marketplace/stripe-support")` asks the configured registries (public marketplace, private registries) for the capability. The response includes:

- Bundle URL (HTTPS, typically a tarball or zip)
- Manifest (`capability.yaml`)
- Signature + signing key ID
- Dependencies (other capabilities or MCP servers required)

If multiple registries have the same name, private registries take precedence over public. Version resolution follows semver rules.

### 2. Download

`capabilityDownloadHandler` fetches the bundle over HTTPS. Progress is streamed to the UI. Download is resumable — an interrupted download can be continued without restarting.

### 3. Verify

- **Signature check** — the bundle's signature is verified against the publisher's key. An unsigned bundle from an untrusted source fails here unless the user has explicitly allowed unsigned installs (not recommended).
- **Manifest validation** — `capability.yaml` is parsed and checked against the schema.
- **Hash check** — the bundle's SHA-256 matches the value declared in the registry response.

Any failure aborts with a specific error.

### 4. Stage

The bundle is extracted to `.codebolt/staging/<capability-name>@<version>/`. At this point the bundle is on disk but not yet active.

### 5. Compatibility check

- **Codebolt version** — `requires.codebolt_version` must be satisfied.
- **Environment variables** — any `requires.env` vars must be present in the environment (or the user must be prompted to provide them).
- **Dependencies** — any referenced capabilities, MCP servers, or LLM providers must be present or installable.

If anything's missing, the install is paused and the user is prompted. For missing env vars, the install asks the user to provide them before continuing.

### 6. Prompt user

The UI shows:

- What the capability provides (list of tools, agents, hooks, panels).
- New permissions required (e.g. new tool families that weren't in the workspace before).
- Any security-relevant notes from the manifest.

The user clicks "Install" to continue or "Cancel" to abort.

### 7. Register pieces

For each piece declared in the manifest:

- **MCP servers** — added to `mcp-servers.yaml`.
- **Agents** — copied to `.codebolt/agents/`. Their manifests are validated.
- **Hooks** — copied to `.codebolt/hooks/`. Code hooks go through `PluginProcessManager`'s sandboxed load path.
- **Panels** — registered with `dynamicPanelService`. The panel JS is loaded into an iframe with a restricted permission set.
- **Prompts** — added to `markdownMemory` under a capability-scoped prefix.

Each registration is idempotent — if something's already there with the same version, it's skipped, not duplicated.

### 8. Start processes

`PluginProcessManager` spawns any new processes:

- MCP servers declared by the capability.
- Any long-running workers the capability provides.

Each is registered with `HeartbeatManager` so crashes are detected.

### 9. Verify healthy

For each spawned process:

- Wait for the MCP handshake (or equivalent protocol handshake).
- Confirm it responds to a ping within the startup timeout.
- Confirm it lists the expected tools/capabilities.

If any piece fails health check, the install is rolled back.

### 10. Commit

The staging directory is moved into the final location (`.codebolt/capabilities/<name>@<version>/`), and the capability is added to `capabilityRegistry`. It now appears in **Settings → Capabilities** as installed and active.

### 11. Notify

A `capability.installed` event is emitted on the bus. The UI updates. Any hooks listening for `capability.installed` fire.

## What happens on failure

Any failure before step 10 rolls back:

- Downloaded files are deleted from staging.
- Any processes that started are stopped.
- Any registrations already made are reverted.
- The user gets a specific error pointing at the failing step.

After step 10, an install is committed and the only way to remove it is an explicit uninstall.

## Updates

Installing a new version of an already-installed capability:

1. Runs the download-and-verify path for the new version.
2. Stages the new version alongside the old.
3. Confirms compatibility.
4. Prompts the user if any breaking changes are declared.
5. **Atomic swap** — the new version is activated and the old version is marked for deletion.
6. Old version processes are stopped after a grace period.
7. Old version files are deleted.

This atomic swap is important: at no point is the workspace in a half-upgraded state.

## Uninstall

1. Mark the capability as uninstalling.
2. Stop any processes it was running.
3. Unregister everything it declared (reverse of step 7 above).
4. Delete its files.
5. Remove from `capabilityRegistry`.
6. Emit `capability.uninstalled`.

Data the capability wrote (memory, kvStore entries, event log events) is **not** deleted — it's append-only history. To purge capability-written data, use **Settings → Capabilities → Purge data**.

## Debugging install failures

```bash
codebolt capability install <name> --verbose
```

Streams every step to stdout. The last successful step tells you where it broke.

Common failures:
- **signature_invalid** — the bundle was tampered with or came from an untrusted publisher.
- **compatibility_failed** — your Codebolt version is too old or too new.
- **missing_env** — a required env var isn't set.
- **mcp_handshake_timeout** — the MCP server started but didn't respond in time.
- **port_conflict** — another process is already bound to a port the capability wants.

## See also

- [Capabilities Overview](./04_capabilities-overview.md)
- [Hooks Overview](./01_hooks-overview.md)
- [MCP & Tools (internals)](../08_internals/03_subsystems/02_mcp-and-tools.md)
- [Process Model (internals)](../08_internals/02_process-model.md)
