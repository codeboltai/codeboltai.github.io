# Agent Tools Overview

> Agent Tools are the built-in capabilities available to every agent — the panel-based interfaces and programmatic tool families that agents use to interact with.

# Agent Tools

Agent Tools are the built-in capabilities available to every agent — the panel-based interfaces and programmatic tool families that agents use to interact with your code, terminal, browser, and workspace.

These are single-agent tools: they work within the context of one agent's run. For extending agents with external services, see [Agent Extensions → MCP Servers](../04b_agent-extensions/06_installing-mcp-servers.md).

## Panel tools

Panel tools are workspace panels that agents can open, read from, and write to directly.

| Panel | What agents can do |
|---|---|
| **Code Editor** | Read and write files, navigate the codebase, apply diffs |
| **Terminal** | Run shell commands, capture stdout/stderr |
| **Browser** | Navigate URLs, click, type, screenshot, read DOM content |
| **Preview** | Render and inspect a running web app or static file |
| **Git** | Stage, commit, branch, push, pull, diff |
| **Chat** | Post messages to the conversation thread, read chat history |

## Built-in tool families

Every agent has access to a set of built-in tool namespaces — no installation required. See [Built-in Tools](./02_built-in-tools.md) for the full list of functions in each family.

| Family | What it does |
|---|---|
| `codebolt_fs` | Read, write, search, and edit files |
| `codebolt_git` | Git operations — status, diff, commit, branch, push, pull |
| `codebolt_code` | Semantic code analysis and formatting |
| `codebolt_codebase` | Project-wide semantic search |
| `codebolt_browser` | Headless browser control — navigate, click, type, screenshot |
| `codebolt_chat` | Send and read chat messages |
| `codebolt_debug` | Add log points and open browser debugger |
| `codebolt_memory` | Read and write across memory layers |
| `codebolt_state` | Inspect and modify agent run state |
| `codebolt_agent` | Find, start, and inspect other agents |

## Tool access and guardrails

Agents only have access to the tools their `tools.allow` list permits. This is a deliberate security boundary — a reviewer agent can be given read-only tools, while a coding agent gets write access.

Even when an agent's allowlist permits a tool, [Guardrails](../05b_guardrails-and-settings/01_guardrails.md) can block specific calls — for example, preventing writes to protected branches or outside the workspace root.

```yaml
# .codebolt/agents/my-agent/agent.yaml
tools:
  allow:
    - codebolt_fs.*
    - codebolt_git.read_*
    - codebolt_browser.browser_action
  deny:
    - codebolt_fs.write_file
```

`deny` always wins over `allow`.

## Adding more tools

To give agents access to external APIs and services, install an MCP server — see [Agent Extensions → Installing MCP Servers](../04b_agent-extensions/06_installing-mcp-servers.md).
