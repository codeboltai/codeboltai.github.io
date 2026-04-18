---
sidebar_label: Overview
sidebar_position: 1
title: Pseudo CLI
description: Reference for the CodeboltJS pseudo command layer that intercepts agent exec-style commands and routes them to SDK modules.
---

The CodeboltJS pseudo CLI is a command-shaped adapter over the SDK. It lets an agent send an exec-style string and have the SDK route it to a registered CodeboltJS module instead of handing the string to the operating system shell.

The implementation lives in `packages/codeboltjs/src/tools/pseudo-cli/` and is wired into the terminal `execute_command` tool in `packages/codeboltjs/src/tools/terminal/execute-command.ts`.

## What It Does

- Intercepts pseudo commands before normal shell execution.
- Skips shell confirmation for matched pseudo commands.
- Parses the command into `module`, `action`, and named flags.
- Looks up the command in a registry of SDK-backed handlers.
- Executes the mapped SDK method and normalizes the result into a `ToolResult`.

## Execution Flow

1. The agent calls the terminal `execute_command` tool with a command string.
2. `ExecuteCommandTool.shouldConfirmExecute()` checks `isCodeboltCommand()` and suppresses shell confirmation when the command is recognized as pseudo CLI.
3. `ExecuteCommandTool.execute()` bypasses `cbterminal.executeCommand()` and calls `executeCodeboltCommand()`.
4. `parseCommand()` extracts the target module, action, and named parameters.
5. `commandRegistry` validates the module and action, then checks required flags.
6. The mapped SDK function runs and the formatter returns a normalized `ToolResult` with `llmContent`, `returnDisplay`, and structured errors when needed.

## Relationship To The SDK

Pseudo CLI is not a separate API surface. It is a text-based adapter over the same SDK modules documented in [Direct API Access](../10_api-access/1-index.md).

Examples:

- `codebolt fs read --path "./package.json"` maps to the filesystem module.
- `codebolt git status` maps to the git module.
- `codebolt terminal exec --command "npm run build"` maps to the terminal module.
- `codebolt browser navigate --url "https://example.com"` maps to the browser module.

The current registry exposes 57 modules, ranging from `fs`, `git`, `browser`, and `terminal` to higher-level modules like `swarm`, `capability`, `project`, `memory`, and `mcp`.

## Current Source Caveat

The current source has an implementation mismatch:

- `isCodeboltCommand()` currently detects the prefix `codeboltcmd `
- The parser, help output, and formatter messages describe commands as `codebolt <module> <action>`

This documentation describes the registry and parser shape as implemented in `parseCommand()` and `commandRegistry`. If you are wiring a runtime emitter that should trigger interception, verify the exact prefix expected by your runtime before relying on it.

## In This Section

- [Command Format](./command-format.md): syntax, quoting, flags, JSON values, and error behavior
- [Modules](./modules/index.md): generated per-module command docs with parameter tables for every pseudo CLI action
- [Module Reference](./module-reference.md): registry-wide inventory and links into the per-module docs
