---
sidebar_position: 0
title: Quickstart
---

# CLI Quickstart

Get the Codebolt CLI installed and run your first agent from the terminal.

> If you have the desktop app installed you already have the CLI — skip to [step 3](#3-open-a-project).

---

## 1. Install

```bash
# npm (requires Node.js 18+)
npm install -g codebolt

# Homebrew (macOS / Linux)
brew install codebolt/tap/cli

# apt (Ubuntu / Debian)
curl -fsSL https://pkg.codebolt.ai/gpg | sudo gpg --dearmor -o /usr/share/keyrings/codebolt.gpg
echo "deb [signed-by=/usr/share/keyrings/codebolt.gpg] https://pkg.codebolt.ai/apt stable main" \
  | sudo tee /etc/apt/sources.list.d/codebolt.list
sudo apt update && sudo apt install codebolt-cli
```

Verify:

```bash
codebolt --version
```

---

## 2. Sign in

```bash
codebolt auth login
```

A browser window opens to the CodeBolt portal. Log in or create an account — the CLI stores the token locally. First-time users are prompted to pick a provider and model:

```
? Select a provider  › CodeBolt AI  (no key needed)
? Select a model     › codebolt-default
? Workspace path     › /Users/you/projects
```

---

## 3. Open a project

```bash
cd my-project
codebolt .
```

This starts the Codebolt server (if not already running) and attaches it to the current directory. The project is indexed automatically.

---

## 4. Run an agent task

```bash
codebolt run "Explain what this codebase does in 3 bullet points"
```

The agent streams its output to the terminal. Tool calls (file reads, writes) are shown inline.

To make a change:

```bash
codebolt run "Add a .editorconfig with 2-space indentation for JS/TS"
```

---

## 5. Review the result

```bash
# See what changed
git diff

# Roll back everything the agent wrote (uses shadow git)
codebolt rollback

# Keep it — commit normally
git add .editorconfig
git commit -m "add editorconfig"
```

`codebolt rollback` restores to the snapshot taken before the agent ran. Your real git history is untouched.

---

## Useful commands

```bash
codebolt run "<task>"          # run a one-shot agent task
codebolt chat                  # start an interactive chat session
codebolt agent list            # list installed agents
codebolt agent install <id>    # install an agent from the marketplace
codebolt rollback              # undo last agent run
codebolt status                # show server status and active project
codebolt --help                # full command reference
```

---

**Next:** [CLI Overview](./01_overview.md) · [Agent Commands](./02_agent-commands.md)
