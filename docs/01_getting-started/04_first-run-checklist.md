---
sidebar_position: 4
title: First-run checklist
---

# First-run checklist

A 5-minute pass to confirm Codebolt is working correctly after install. Run through this after [Quickstart](./02_quickstart.md) — if anything here fails, it points you at the right troubleshooting page.

## 1. The server is running

Open the app. The status bar at the bottom should say **Connected**. If it says Connecting, Retrying, or Disconnected, the local server isn't up — see [Install troubleshooting](./03_installation/07_install-troubleshooting.md).

CLI equivalent: `codebolt --version` should print the version number.

## 2. You're signed in

Open **Settings → Account**. You should see your email and plan. If not, sign in from the account screen.

## 3. A provider is configured and responding

**Settings → Providers.** At least one provider should show as **Connected**, not **Not configured** or **Error**. Click it and use the **Test** button — you should get back a short completion in a few seconds.

If the test fails:
- **401 / auth error** → bad API key. Re-paste it.
- **Rate limit** → you're fine, just hit quota. Try a different provider or wait.
- **Network error** → check your internet / firewall. Local models don't need internet but need the local server (e.g. Ollama) running.

## 4. A project is open and indexed

Open any project. Wait for the indexing indicator to finish (it's at the bottom of the project panel). When it's done you should see:
- File tree populated.
- **Codemap** entry available (project panel → codemap).
- No red errors in the status bar.

If indexing hangs or fails, check **Settings → Logs** for the `projectStructureService` or `codebaseIndexService` messages.

## 5. You can send a chat message and get a response

Open a new chat tab. Send a trivial message: `say hello`. You should get a streamed response in a few seconds.

If the send button is greyed out, no provider is configured (see step 3). If the message sends but never gets a response, the agent process failed to spawn — check **Settings → Logs** for `AgentProcessManager`.

## 6. Tools work

In the same chat, send: `read the README in this project and tell me what it says`.

The agent should:
- Emit a `codebolt_fs.read_file` tool call (visible in the stream).
- Return a summary.

If the tool call is rejected by a guardrail, check **Settings → Guardrails** — the default policy should allow reads anywhere in the workspace.

## 7. Shadow git is set up

Send: `add a comment line to the first file in src/ saying "hello from codebolt"`.

When the agent finishes:
- The file should have the change.
- The **checkpoint** indicator at the top of the chat should be active.
- Click the checkpoint → **Rollback** → confirm. The file should revert instantly.

If rollback has no effect, shadow git isn't initialised for this project. Delete `.codebolt/shadow-git` and re-open the project; it will be re-created.

## 8. (Optional) CLI works

From a terminal in the project directory:

```bash
codebolt --version
```

Should print the version number. If it says "command not found", the CLI isn't on PATH — make sure the desktop app is installed, or install the CLI separately per [Installation → CLI](./03_installation/03_cli.md).

## 9. (Optional) You can open the TUI

```bash
codebolt
```

Should launch the server and TUI. Exit with Ctrl+C. See [TUI Overview](../02_using-codebolt/02_surfaces/04_tui/01_overview.md).

## 10. (Optional) Checkpoint + replay

In the chat you just did, click any earlier step and pick **Replay**. You should see a read-only view of the FS state at that step. This uses shadow git + the event log; if it doesn't work, the event log isn't being written — check logs for `eventLogDataService` errors.

---

## Everything worked?

You're set up. Next:

- **Just want to use it** → [Using Codebolt](../02_using-codebolt/01_overview.md)
- **Want concrete tasks to try** → [Guides](../03_guides/01_overview.md)
- **Want to build an extension** → [Build on Codebolt](../04_build-on-codebolt/01_overview.md)

## Something didn't work?

- [Install troubleshooting](./03_installation/07_install-troubleshooting.md)
- [Using Codebolt → Troubleshooting](../02_using-codebolt/10_troubleshooting/01_common-issues.md)
- [Reporting bugs](../02_using-codebolt/10_troubleshooting/03_reporting-bugs.md)
