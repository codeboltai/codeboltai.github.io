---
sidebar_position: 7
title: Publishing
---

# Publishing an Agent

When your agent is ready to share — with your team, your org, or the public marketplace — there's a publishing workflow. It's deliberately a little ceremonious: published agents are consumed by other people's automation, and regressions are expensive.

## Before you publish

Checklist:

- [ ] Version bumped in `agent.yaml` (semver).
- [ ] `description` is specific and clear.
- [ ] `inputs` and `outputs` schemas match what the handler actually does.
- [ ] `tools.allow` is tight — no wildcards unless you really need them.
- [ ] `limits` are set. Published agents without limits are a liability.
- [ ] You have replay tests committed (see [Testing](./06_testing-and-debugging.md)).
- [ ] The README documents at least: what the agent does, what inputs it expects, what outputs it produces, what tools it needs, known limitations.
- [ ] The agent has been tested against a real project, not just mocks.

Running `codebolt agent lint my-agent` checks most of these mechanically.

## Three audiences, three publishing targets

### 1. Private to the project

No publishing needed. The agent lives in `.codebolt/agents/my-agent/` and is committed to your project repo. Anyone who opens the project gets the agent automatically.

Use this for agents that are specific to one codebase. Don't put company-wide reviewers here.

### 2. Private to your organisation

Push to a **private registry** — either a self-hosted Codebolt registry or a file-backed one on shared storage.

```bash
codebolt agent publish my-agent --registry https://codebolt.my-org.com/registry
```

Users in your org install with:

```bash
codebolt agent install org/my-agent
```

Private registries support access control, version pinning, and internal review workflows. See [Self-hosting → Registries](../09_self-hosting/01_overview.md) for running one.

### 3. Public marketplace

```bash
codebolt agent publish my-agent
```

With no `--registry`, this publishes to the public Codebolt marketplace. Requires:

- An account with marketplace publisher access.
- Your agent passing automated review (lint + security scan + basic behaviour checks).
- A non-empty README.
- A unique name in the marketplace namespace.

Published agents get a marketplace page with screenshots (from `metadata.marketplace`), install count, ratings, and changelog. Other users install with:

```bash
codebolt agent install marketplace/my-agent
```

## Versioning

Every publish is a new version. Codebolt enforces semver:

- **Patch** (0.1.0 → 0.1.1) — bug fix, no behaviour change.
- **Minor** (0.1.0 → 0.2.0) — new capability, backwards-compatible. Users on 0.1.x can upgrade without thinking.
- **Major** (0.1.0 → 1.0.0) — breaking change. Old users must opt in.

A breaking change includes:
- Changing the `inputs` or `outputs` schema incompatibly.
- Removing a tool from `allow`.
- Changing the semantics of the system prompt in a way existing callers rely on.
- Changing a default (model, temperature) such that existing callers get materially different behaviour.

**Don't publish breaking changes as patches.** If you're unsure, treat it as a minor at minimum.

## The changelog

Every marketplace publish requires a changelog entry:

```yaml
# CHANGELOG.md
## 0.2.0 (2026-04-06)
- Added support for monorepos
- Tightened tool allowlist (dropped codebolt_fs.write_file — use version 0.1.x if you need writes)
- Fixed loop detection on long files

## 0.1.1 (2026-03-20)
- Fixed occasional heartbeat timeout on very large codebases
```

The changelog surfaces in the marketplace UI. Write it for the person deciding whether to upgrade.

## Metadata

For marketplace visibility, fill in `metadata.marketplace` in `agent.yaml`:

```yaml
metadata:
  marketplace:
    icon: ./icon.png
    screenshots:
      - ./screenshots/1.png
      - ./screenshots/2.png
    readme: ./README.md
    categories: [code-review, typescript, testing]
    keywords: [review, quality, bugs]
    homepage: https://github.com/my-org/my-agent
    repository: https://github.com/my-org/my-agent.git
    issues: https://github.com/my-org/my-agent/issues
```

- **Icon** — PNG, square, at least 256×256. Don't use a photograph; a simple mark works better at small sizes.
- **Screenshots** — showing the agent in action. Two or three is enough; don't flood.
- **Categories** — from a fixed list. See the marketplace docs.
- **Keywords** — for search.

## The publish workflow

```bash
# 1. lint
codebolt agent lint my-agent

# 2. run replay tests
codebolt agent test-all my-agent

# 3. dry run
codebolt agent publish my-agent --dry-run

# 4. publish
codebolt agent publish my-agent

# 5. verify
codebolt agent install marketplace/my-agent --version 0.2.0
```

Step 5 is important: install your own agent from the marketplace into a clean environment and confirm it works. Local `.codebolt/agents/my-agent/` and installed `marketplace/my-agent@0.2.0` can diverge in subtle ways (missing files, dependency drift, etc.).

## Unpublishing and deprecation

You can't unpublish a version that anyone has installed. You can:

- **Deprecate** a version — marks it as "don't use" but leaves it available for existing users.
  ```bash
  codebolt agent deprecate my-agent@0.1.0 --reason "security fix, use 0.1.1"
  ```
- **Yank** a version — strong deprecation; new installs are blocked unless the user opts in.
- **Delete** a version — only within 24 hours of publish, only if no one has installed it yet.

Plan for permanence. Don't publish something you're not willing to maintain.

## Handling breaking changes in published agents

When you need to make a breaking change:

1. Bump major version.
2. Keep the previous major maintained for critical fixes for a declared period (30/90 days is common).
3. Publish both majors to the marketplace. Users choose when to upgrade.
4. In the new major's README, document the migration.

Don't yank the old major silently. People's automation depends on it.

## Security considerations

Published agents run on other people's machines with their credentials. Treat them like a library you distribute:

- **No hard-coded secrets.** Not even in example code. The marketplace scan will flag obvious ones, but subtle ones slip through.
- **Validate inputs.** Your agent's inputs come from callers who may be other agents; don't trust them.
- **Document what tools the agent uses** and why. Users should be able to verify before installing.
- **Consider the blast radius** — if your agent has `codebolt_fs.write_file` in its allowlist, say so prominently in the README. Users who don't want write-capable agents should be able to tell.

## See also

- [agent.yaml](./04_agent-anatomy/agent-yaml.md) — where metadata and limits live
- [Testing and debugging](./06_testing-and-debugging.md) — the tests you should have before publishing
- [Marketplace (user-facing)](../../02_using-codebolt/04_agents/04_the-marketplace.md)
- [Self-hosting → Registries](../09_self-hosting/01_overview.md)
