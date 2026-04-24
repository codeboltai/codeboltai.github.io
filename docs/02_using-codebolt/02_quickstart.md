---
sidebar_position: 2
title: Quickstart
---

import { Steps, Step } from '@site/src/components/Steps';
import { TryItCard } from '@site/src/components/TryItCard';
import { OsTabs } from '@site/src/components/OsTabs';

# Quickstart

This guide gets you from zero to your first agent result in under 5 minutes. One path, no decisions — desktop app with the built-in CodeBolt AI provider.

Using the CLI or TUI instead? → [CLI Quickstart](./02_surfaces/03_cli/00_quickstart.md) · [TUI Quickstart](./02_surfaces/04_tui/00_quickstart.md)

---

<Steps>

<Step title="Download and install">

<OsTabs
  mac={<>

Open the `.dmg`, drag **Codebolt.app** to `/Applications`, and launch it.

```bash
# or via Homebrew
brew install --cask codebolt
```

  </>}
  windows={<>

Run `Codebolt-Setup-x64.exe` and accept the defaults.

```powershell
# or via Winget
winget install Codebolt.Codebolt
```

  </>}
  linux={<>

```bash
# AppImage
chmod +x Codebolt-x86_64.AppImage && ./Codebolt-x86_64.AppImage

# Debian / Ubuntu
sudo dpkg -i codebolt.deb

# Fedora / RHEL
sudo rpm -i codebolt.rpm
```

  </>}
/>

First launch takes ~30 seconds while the local server initialises.

</Step>

<Step title="Sign in">

Click **Sign In** in the app. A browser window opens to the CodeBolt portal — log in or create a free account. The token is picked up automatically.

First-time users see a short setup wizard. Select **CodeBolt AI** as your provider (no API key needed), pick any model, choose a workspace folder, and click through. Takes about 2 minutes.

> Want to use OpenAI, Anthropic, or a local model? See [Installation & Setup](./03_installation.md).

</Step>

<Step title="Open a project">

On the project dashboard click **Open Project** and pick any folder on your machine. Any git repo works — or create a new empty folder for a clean start.

Codebolt indexes the project (file tree, symbols, codemap). Takes a few seconds for small projects.

</Step>

<Step title="Run your first agent">

A chat panel opens. Ask the agent to understand your codebase first:

<TryItCard prompt="Read the codebase and give me a one-paragraph summary of what this project does." />

Watch it read files in real time. Then try something that makes a change:

<TryItCard prompt="Add a short CONTRIBUTING.md explaining how to run the project locally." />

The agent reads your existing README, writes the file, and shows you the diff.

</Step>

<Step title="Review and keep — or roll back">

Every change is checkpointed automatically. You have three options:

- **Keep it** — the file stays as written. Commit to git whenever you're ready using the git panel or your own terminal.
- **Roll back** — click the checkpoint badge at the top of the chat → **Rollback**. Every file returns to exactly where it was before the agent ran. Real git history is untouched.
- **Iterate** — type a follow-up. The agent keeps the full context from the previous turn.

</Step>

</Steps>

---

That's the core loop. Every other feature builds on this.

**Where to go next:**

- [What is Codebolt](./01b_what-is-codebolt.md) — understand the bigger picture
- [Chat](./03_chat/01_overview.md) — @-mentions, context, inline edit
- [Agents](./04_agents/01_what-is-an-agent.md) — install and run different agents
- [Guides](../03_guides/01_overview.md) — step-by-step walkthroughs for specific tasks
