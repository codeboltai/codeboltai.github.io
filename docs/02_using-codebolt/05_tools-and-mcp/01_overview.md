---
sidebar_position: 1
title: Tools & MCP Overview
---

# Tools & MCP Overview

Tools are what agents *do*. Every file read, every file write, every shell command, every web request — all go through the tool layer. This section is the user's view: what tools are, how to install more, how to manage them. If you want to *build* a tool, see [Build on Codebolt → MCP Tools](../../04_build-on-codebolt/03_agent-extensions/04_mcp-tools/01_overview.md).

## The three kinds of tool

From your point of view, they all look the same. An agent calls a tool; the tool runs; the result comes back. Under the hood, there are three sources:

| Kind | Where it runs | How to get more |
|---|---|---|
| **Built-in tools** | Inside the server | Ship with Codebolt; nothing to install |
| **MCP servers** | External processes | Install from the marketplace or configure manually |
| **Capabilities** | Bundled extensions (tools + prompts + UI) | Install from the marketplace |

## Built-in tool families

The tools that come with Codebolt. Each family has several related tools; agents see them as a namespace like `codebolt_fs.read_file`.

| Family | What it does |
|---|---|
| `codebolt_fs` | Read, write, search, edit, list files |
| `codebolt_git` | Git operations: status, diff, commit, branch, clone, log, etc. Also shadow-git. |
| `codebolt_code` | Analyze code, format, list definitions |
| `codebolt_codebase` | Semantic search across the project |
| `codebolt_browser` | Headless browser control |
| `codebolt_chat` | Read chat history, send chat messages |
| `codebolt_debug` | Debugger, add log points, open a browser debugger |
| `codebolt_memory` | Get and set across the memory layers |
| `codebolt_state` | Inspect and modify run state (e.g. start a sibling agent) |
| `codebolt_agent` | Find, start, and inspect other agents |

Every built-in tool has a schema and a description. You can see the full list and details under [Reference → Built-in Tools](../../05_reference/01_overview.md).

## MCP: why it exists

MCP (Model Context Protocol) is an open standard for AI tool interfaces. It was designed so that any AI host can use any MCP-compliant tool — you write the tool once, it works in Codebolt, Claude Desktop, Cursor, and anything else that speaks MCP.

For you as a user, this means:

- **A huge catalog of third-party tools** is already available. Anything on the public MCP ecosystem works in Codebolt.
- **Your tool investments are portable.** If you build a custom tool for Codebolt, it'll still work if you ever use another MCP host.
- **Vendors provide official MCP servers.** Databases, SaaS APIs, cloud providers — many ship first-party MCP servers you can install.

## Installing an MCP server

Two paths:

### From the marketplace
**Settings → Marketplace → Tools** → search → click install. Codebolt downloads the server, starts it, verifies it responds to the MCP handshake, and adds its tools to your workspace.

See [Installing MCP servers](./02_installing-mcp-servers.md).

### Manual configuration
If you have an MCP server binary (local file) or a remote MCP server (URL), you can add it manually:

```yaml
# .codebolt/mcp-servers.yaml
servers:
  my-linter:
    command: /usr/local/bin/my-linter-mcp
    args: ["--config", ".linterrc"]
  internal-api:
    url: https://mcp.my-company.com
    auth:
      type: bearer
      token_env: INTERNAL_MCP_TOKEN
```

The server is started automatically when the workspace opens.

## How tools become available to agents

When you install a new MCP server (or ship a capability that provides tools):

1. The server process starts, supervised by [`PluginProcessManager`](../../04_build-on-codebolt/09_internals/03_subsystems/02_mcp-and-tools.md).
2. Codebolt handshakes and asks "what tools do you provide?".
3. The provided tools are registered in your workspace's tool namespace.
4. Agents in that workspace see the new tools — if their `tools.allow` list permits them.

**Important:** installing an MCP server doesn't automatically give every agent access to its tools. Each agent's `tools.allow` list must permit the new tool family (or `*` for all). This is a security property — you can install a payment API tool without every agent suddenly being able to charge your credit card.

## Managing installed tools

**Settings → Tools** shows:

- Every installed MCP server and its state (running, stopped, erroring).
- Tools provided by each server.
- Per-server logs (useful when a server crashes).
- Start / stop / restart controls.
- Uninstall.

See [Managing MCP servers](./03_managing-mcp-servers.md).

## Debugging tool issues

Common symptoms:

### "Agent says tool not found"
The tool isn't in the agent's allowlist. Add it to the agent's `tools.allow`, or use a different agent.

### "Agent says tool call failed with timeout"
The MCP server is slow or hung. Check Settings → Tools → logs for the server. Restart it.

### "Tool isn't in the picker"
The MCP server isn't running. Settings → Tools → status. Restart or reinstall.

### "Tool ran but returned a weird result"
Could be a bug in the server, a bad schema, or a guardrail that transformed the result. Check the run trace (`codebolt agent trace <run_id>`) to see the raw result before any post-processing.

## Constraining what tools can do

Tools can be dangerous. Guardrails are the built-in mechanism for limiting them:

- **Workspace-level guardrails** — project-wide rules like "never write to `/infra` from any agent".
- **Per-agent allowlists** — "this reviewer agent cannot use write tools".
- **Per-tool hooks** — "log every call to `codebolt_git.push` to the SIEM".

See [Guardrails (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/09_guardrails-and-eval.md) and [Hooks](../../04_build-on-codebolt/05_plugins/01_overview.md).

## Private MCP servers for teams

If you're self-hosting and want to ship an internal MCP server to everyone on your team, there are two paths:

1. **Publish to a private registry.** Users install normally from the private registry.
2. **Ship as part of the workspace.** Commit `.codebolt/mcp-servers.yaml` to the project repo. Anyone who opens the project gets the configuration automatically.

Pick #2 when the server is project-specific (e.g. a custom tool for interacting with *this* codebase's DSL). Pick #1 for org-wide tools.

## See also

- [Installing MCP servers](./02_installing-mcp-servers.md)
- [Managing MCP servers](./03_managing-mcp-servers.md)
- [Built-in tools](./04_built-in-tools.md)
- [MCP Tools (for builders)](../../04_build-on-codebolt/03_agent-extensions/04_mcp-tools/01_overview.md)
- [MCP & Tools (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/02_mcp-and-tools.md)
