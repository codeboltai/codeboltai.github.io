---
sidebar_position: 1
title: Reference Overview
---

# Reference Overview

Dry, complete, mostly auto-generated. This section is for when you need the exact signature, schema, or command — not for learning how Codebolt works.

If you want to understand a subsystem, read [Build on Codebolt → Internals](../04_build-on-codebolt/08_internals/01_architecture-overview.md). If you want to learn how to extend Codebolt, read [Build on Codebolt](../04_build-on-codebolt/01_overview.md). Reference is the last stop, not the first.

## What's in this section

| Subsection | What |
|---|---|
| **SDKs** | `@codebolt/codeboltjs`, `@codebolt/client-sdk`, `@codebolt/plugin-sdk`, Unified Agent Framework — auto-generated from TypeScript |
| **Processor Reference** | Every built-in modifier class and its options |
| **CLI Reference** | Every `codebolt` command and flag |
| **Built-in Tools** | Schema for every tool that ships with the server |
| **Protocols** | WebSocket, REST, MCP extensions |
| **Config Schemas** | `agent.yaml`, project config, settings, environment variables |
| **Types** | Shared types from `packages/types` |
| **Query Languages** | `eventLogQueryCompiler` and `kvStoreQueryCompiler` |

## Which reference for which job

### "I'm building an agent"
- [TypeScript type reference](./09_type-reference/index.md) for the auto-generated SDK surface.
- [API access reference](./10_api-access/1-index.md) for every `codebolt.*` category.
- [Legacy overview](./13_legacy-overview.md) for pre-migration notes.

### "I'm building an MCP tool"
- [MCP access reference](./11_mcp-access/1-index.md) for Codebolt-specific MCP fields.
- [Built-in Tools](../02_using-codebolt/05_tools-and-mcp/04_built-in-tools.md) for examples of what a schema looks like.

### "I'm scripting against the CLI"
- [CLI commands](../02_using-codebolt/02_surfaces/03_cli/01_overview.md) for every command and flag.

### "I'm writing a client in a non-JS language"
- [API access reference](./10_api-access/1-index.md) for the HTTP + WebSocket surface.
- [Type reference](./09_type-reference/index.md) for the shared wire types.

### "I'm querying history or building an audit tool"
- [Event log guide](../03_guides/07_advanced/query-the-event-log.md) for `eventLogQueryCompiler`.
- [Utility functions reference](./12_utility-functions/index.md).

### "I'm self-hosting"
- [Self-hosting guide](../04_build-on-codebolt/10_self-hosting/01_overview.md) for the setup walkthrough.
- [API access reference](./10_api-access/1-index.md) to understand the server's surface area.

## Auto-generation

Most of the reference is generated from source:

- **TypeScript SDKs** — TypeDoc produces the class/interface/function docs. Regenerated on every server release.
- **Built-in tools** — each tool declares its schema; the reference pages are generated from those declarations.
- **CLI commands** — each command declares its flags and help text; `codebolt help --format=md` produces the reference pages.
- **Config schemas** — the JSON Schema for each config file is generated from the TypeScript types.

When source changes, the reference changes automatically. Writing reference documentation by hand is discouraged — it drifts.

## Hand-written parts

A few reference pages can't be auto-generated:

- **Protocol guides** — overview pages that explain the WebSocket/REST protocols as whole things, not just as endpoint lists.
- **Query language tutorials** — the syntax is auto-documentable, but the examples that make the syntax usable are not.
- **Migration notes** — "what changed between v1 and v2" is always hand-written.

These pages are explicitly marked as hand-written in their frontmatter so the auto-gen doesn't overwrite them.

## Versioning

The reference is versioned alongside the server. Each Codebolt release produces a snapshot of the reference. Older snapshots are accessible via the version switcher at the top of the docs site.

**If you're running an older server**, switch the docs version to match or you'll see APIs that don't exist in your install.

## Existing content being migrated

The current `docs/5_api/` tree contains auto-generated TypeDoc output for the unified agent framework and processor pieces. These are being relocated under this section as:

- `docs/5_api/11_doc-type-ref/agent/unified/` → `05_reference/02_sdks/04_unified-agent-framework/`
- `docs/5_api/11_doc-type-ref/agent/processor-pieces/` → `05_reference/03_processor-reference/`

The migration is mechanical — same files, new paths. URL redirects will be in place during transition.

## See also

- [Build on Codebolt](../04_build-on-codebolt/01_overview.md) — the prose that the reference complements
- [Architecture Overview](../04_build-on-codebolt/08_internals/01_architecture-overview.md) — the mental model
- [Custom Agents Quickstart](../04_build-on-codebolt/02_creating-agents/02_quickstart.md) — how to actually use the SDK
