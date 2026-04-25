# Marketplace Publishing

> The cloud portal is where anything publishable lives. Every entity type has an All page (public marketplace) and a My page (what you've published)

The cloud portal is where anything publishable lives. Every entity type has an **All** page (public marketplace) and a **My** page (what you've published). Publishing happens from the portal; once published, your item is discoverable and installable from the desktop app, CLI, and TUI.

## What you can publish

| Entity | All / My routes | Upload form |
|---|---|---|
| **Agents** | `/agents/list` · `/myAgents` | ZIP upload or YAML-based form; supports `codeboltExecuted` and `selfExecuted` remote agents |
| **MCPs** | `/mcp/all` · `/mcp/mymcp` | Connection details and capability list |
| **Providers** | `/providers/all` · `/providers/my` | LLM provider integrations |
| **Skills** | `/skills/all` · `/skills/my` | Slash-command skills |
| **Action Blocks** | `/actionblocks/all` · `/actionblocks/my` | Side-execution code units |
| **Capabilities** | `/capabilities/all` · `/capabilities/my` | Versioned capability bundles with typed I/O |
| **Plugins** | `/plugins/all` · `/plugins/my` | Plugin packages |
| **Executors** | `/executors/all` · `/executors/my` | Language runtimes (Node, Python, shell) |
| **Templates** | `/templates/all` · `/templates` | Project templates |
| **Apps** | `/apps/all` · `/apps/my` | Packaged apps |

Every type follows the same shape: a **search / filter** experience on the All page, a **card detail** view with description, ratings, version history, and tags, plus an **Upload** button on the My page.

## The agent publishing flow

Agents are the most common publish target. Two ways to create one:

### From a ZIP upload

**Agents → My Agents → Upload ZIP.** Drop a packaged agent directory (must include `codeboltagent.yaml`). The portal validates the manifest, extracts the metadata, and creates a draft agent record. You review, fill in the marketplace listing (description, tags, pricing), and click publish.

### From the Add Agent form

**Agents → My Agents → New agent.** A guided form for building the manifest inline — name, description, supported frameworks, tools, execution mode, tags, cover image. Produces an agent manifest you can then download, edit, and re-upload, or publish directly.

### Remote-agent modes

When creating an agent, you pick the execution mode:

- **`codeboltExecuted`** — Codebolt launches the agent process from a `remotePath`. Installs cleanly from the marketplace; no extra setup for the user.
- **`selfExecuted`** — the user runs the process themselves. The marketplace listing includes the env-var snippet (`threadToken` + `agentId`) the user needs. Good for wrapping existing tools (Claude Code, Codex, Gemini) as Codebolt agents.

See [Creating Agents → Quickstart](../../04_build-on-codebolt/02_creating-agents/02_quickstart.md) for the code side.

## What you fill in on a listing

For every entity type the listing form collects:

- **Name** and **slug** (globally unique).
- **Description** — Markdown.
- **Tags / categories** — drives discovery.
- **Cover image / screenshots** — hosted on the portal CDN.
- **Version** — semver; new versions supersede old ones but older versions remain installable.
- **Visibility** — public (marketplace) or unlisted (installable by URL only; good for team-private items).
- **Pricing** — free or paid (paid routes through the portal billing system).

## Managing what you've published

The **My** view of each entity type lets you:

- Edit metadata (description, tags, cover).
- Upload a new version.
- Deprecate (keeps old installs working; hides from new discovery).
- Delete (breaks installs — use deprecate instead unless the item was never used).
- View ratings, downloads, and usage stats per version.

## How users install what you publish

From the **desktop app / CLI / TUI**, the marketplace pages (in the app) query the same portal backend. A user sees your listing, clicks install, and the tool downloads + registers the entity locally. See [Installing an Agent](../04_agents/05_installing-an-agent.md) and [Installing MCP Servers](../05a_tools-and-mcp/02_installing-mcp-servers.md) for the install flow from the app side.

## Who publishes what

Anyone with a signed-in account can publish. Team-owned items (self-hosted deployments) can be restricted to team admins via custom roles — see [Teams → Roles](../09_account/02_teams.md#roles).

## Related

- [Cloud Overview](./01_overview.md)
- [Cloud Portal](./02_cloud-portal.md)
- [Installing an Agent](../04_agents/05_installing-an-agent.md)
- [The Marketplace (in-app)](../04_agents/04_the-marketplace.md)
