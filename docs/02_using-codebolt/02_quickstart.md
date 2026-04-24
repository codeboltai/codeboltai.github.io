---
sidebar_position: 2
title: Quickstart
---

# Quickstart

The fastest path to running an agent in a real project. No decisions, one happy path. If you need something other than the defaults, come back and read [Installation](./02b_installation.md) after.

**What you'll do:**

1. Install the desktop app.
2. Sign in and connect an LLM provider.
3. Open a project.
4. Run an agent on a small task.
5. Review and keep (or roll back) the change.

**You'll need:**

- A machine on Windows, macOS, or Linux (~4 GB free disk).
- An internet connection.
- An API key from OpenAI or Anthropic (or a local model — noted below).
- A local project to try it on. Any git repo will do; if you don't have one handy, `git clone` a small one.

## 1. Install the desktop app

Download the installer for your OS from the Codebolt website and run it. Accept the defaults. When it finishes, launch the app.

First launch takes a minute — it's starting a local server, initialising the database, and doing a first-run handshake.

> **Want the CLI instead?** See [Installation → CLI](./02b_installation.md#cli-only). The rest of this guide works identically from the CLI; the screenshots just won't match.

## 2. Sign in and pick a provider

When the app is ready you'll see a sign-in screen. Create an account (or sign in) and the app will take you to the provider setup.

Pick one:

- **OpenAI** — paste an API key from platform.openai.com.
- **Anthropic** — paste an API key from console.anthropic.com.
- **Local model (Ollama)** — if you already have Ollama running, click "local" and pick a model. The first run is slower while Codebolt warms the model.

You can change providers any time later. See [Using Codebolt → LLM Providers](../02_using-codebolt/08_integrations/01_llm-providers.md).

## 3. Open a project

Click **Open project** and pick a folder on disk. Codebolt will:

- Index the project (codemap, file structure, symbol graph).
- Set up a shadow git repo alongside your real one, so changes are rollback-able.
- Load any project-level settings if it finds a `.codebolt/` directory.

Indexing takes seconds for small projects, up to a minute for large ones. You can start chatting before it's fully done.

## 4. Run an agent

Open a new chat tab. You'll see a message box and a model picker. Leave the default agent selected — it's a good generalist.

Type a concrete task. Examples that work well for a first run:

- `Add a README.md with a short description of this project and a "getting started" section.`
- `Find any TODO comments in src/ and list them with file:line.`
- `Write a short summary of what the main entrypoint does.`

Hit send. The agent will:

1. Read the files it thinks are relevant (you'll see the tool calls in the stream).
2. Plan.
3. Make changes (or produce a report, depending on the task).
4. Tell you what it did.

Any file writes are shown as a diff. Your real git is untouched — writes are staged in the workspace and checkpointed in shadow git so you can undo.

## 5. Review and decide

You have three options on the change:

- **Keep it.** The files stay edited. Commit them to real git whenever you're ready (`git add` / `git commit` from your own terminal, or use the built-in git panel).
- **Roll back to before the agent started.** Click the checkpoint at the top of the chat and pick "rollback to here". Shadow git restores every file to its pre-agent state instantly. Your real git is untouched. See [Checkpoints](../04_build-on-codebolt/08_internals/04_data-flow-walkthroughs/checkpoint-and-rollback.md).
- **Ask for changes.** Type a follow-up message. The agent keeps the context from the first turn and iterates.

## That's the core loop

Open a project → describe a task → review → keep or roll back.

Every other feature — custom agents, multi-agent flows, marketplace tools, memory layers — is a variation on that loop.

## Where to next

- **Try something more ambitious** → [Guides → Build your first agent](../03_guides/02_first-steps/build-your-first-agent.md)
- **Understand what happened when you ran the agent** → [Chat message end-to-end](../04_build-on-codebolt/08_internals/04_data-flow-walkthroughs/chat-message-end-to-end.md)
- **See the full feature list** → [Using Codebolt → Overview](../02_using-codebolt/01_overview.md)
- **Something didn't work** → [Install troubleshooting](./10_troubleshooting/01_common-issues.md)
