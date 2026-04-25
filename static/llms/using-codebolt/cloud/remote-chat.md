# Remote Chat

> Remote Chat is the portal's equivalent of the desktop app's Chat tab — a conversation with an agent — except the CodeBolt server running that agent lives in a.

**Remote Chat** is the portal's equivalent of the desktop app's Chat tab — a conversation with an agent — except the CodeBolt server running that agent lives in a cloud sandbox instead of on your laptop. Open it at **Agents → Remote Chat** in the portal.

## What happens when you start a chat

1. You pick (or create) a **runtime** — the cloud-hosted sandbox the server runs in.
2. You pick an **agent** from the registry (or let it default to the last one you used).
3. Optionally, you pick a **GitHub repository** — the portal clones it into the sandbox before starting the server.
4. The portal spins up the sandbox, installs the CodeBolt CLI, writes your settings into the sandbox's `.codebolt/settings.json`, and starts `codebolt --server` on port 3100.
5. A WebSocket tunnel connects your browser to the sandbox. Chat behaves exactly like the desktop app.

You see every step streamed in the sandbox log panel next to the chat — create, clone, install, copy settings, start, ready.

## Runtime: existing vs new

At the top of the chat, a toggle picks how you want to run:

- **Existing** — drop-down of your live runtimes. Fast; no spin-up cost. Shows the runtime's name, the repo it's bound to (if any), and a green / amber dot for idle / busy.
- **New** — pick a runtime provider (currently `E2B Remote`; Daytona available once configured). The portal spins up a fresh sandbox for this chat.

Pick **New** for a clean environment per task. Pick **Existing** to keep state, continue a thread, or avoid the sandbox start-up cost.

## GitHub integration

Most agent work is anchored to a codebase. The portal can clone a GitHub repo into the sandbox before the agent starts:

1. Click **Select repository** in the chat header.
2. Sign in with GitHub (OAuth) on first use. The token is stored in browser storage, not sent to the portal backend.
3. Pick the repo (and optionally a branch). Private repos require the token.
4. The portal runs `git clone` inside the sandbox as step 2 of the startup flow.

If the clone fails, the portal inspects the output and surfaces an actionable hint — "GitHub rejected the clone credentials", "Repository not found", "Branch not found", etc. — rather than a raw git error.

If no repo is selected, the agent starts in an empty project directory.

## What gets installed in the sandbox

A sandbox isn't a pre-baked CodeBolt instance — the portal installs CodeBolt on first start:

- **Template** — a small E2B image with Node and git pre-installed.
- **CodeBolt CLI** — installed via `npm install -g codebolt@<version>` at startup. The portal pins a specific version so your cloud experience matches what you see in release notes.
- **Settings** — your current LLM provider keys, selected model, selected agent, and user profile are serialised and written to `/home/user/.codebolt/settings.json` before the server starts. That is why your provider / model choice in the portal is what the cloud agent uses.

Startup normally takes 30–90 s the first time on a new runtime. Subsequent chats against the same runtime reuse the already-installed CLI.

## Selecting the agent

The model selector in the chat input bar picks which agent handles your next message. Available agents come from the public agent list plus any you've published. Changing the agent mid-thread is allowed; the new agent picks up the conversation on the next message.

Self-executed remote agents require the thread token — select the agent, hover the help icon in the selector, copy the token, and paste it on the machine running your agent process. See [Authentication → Remote agent](../09_account/01_authentication-and-authorization.md#authentication) for the full flow.

## Threads

The left sidebar lists every chat thread tied to the runtime you're connected to. Threads persist across sandbox restarts because the conversation history is stored on the portal backend, not inside the sandbox itself. Click a thread to resume.

## Stopping and cleaning up

Closing the browser tab does *not* terminate the runtime. Sandboxes have a 1-hour keep-alive window; they auto-terminate after that if nothing reconnects. To stop a runtime immediately go to **Agents → Runtimes** and click the delete icon on its card.

## When Remote Chat is the wrong tool

- **You want the full IDE** (code editor + terminal + git panel). The portal focuses on chat; use the desktop app.
- **You need to run many threads in parallel on the same runtime.** Remote Chat works but is optimised for one active thread per runtime. Spawn multiple runtimes instead.
- **You're debugging agent code live.** Use the desktop app's Agent Debug panel; the portal exposes the chat stream, not the full debug panel.

## Related

- [Cloud Overview](./01_overview.md)
- [Runtimes & Providers](./04_runtimes-and-providers.md) — manage the sandboxes behind Remote Chat
- [Authentication & Authorization](../09_account/01_authentication-and-authorization.md)
