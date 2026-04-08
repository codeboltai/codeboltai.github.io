---
sidebar_position: 2
title: Tabs and History
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tabs and History

Each chat tab is a separate conversation with its own agent, model, and message history. History persists across restarts — closing a tab is a decision to lose it, not an accident.

## Tabs

Create a tab: **Ctrl+N** or `+` in the tab bar.

Each tab has:
- A bound agent (picker at the top)
- A bound model (picker at the top)
- Its own message stream
- Its own checkpoint timeline
- Its own tab name (editable; defaults to the first user message)

Tabs are independent — a tool call in tab A doesn't affect tab B. You can have a planner tab, a coder tab, and a reviewer tab running at once on the same project.

## Tab management

| Action | Shortcut |
|---|---|
| New tab | Ctrl+N |
| Close tab | Ctrl+W |
| Next tab | Ctrl+Tab |
| Previous tab | Ctrl+Shift+Tab |
| Rename tab | double-click tab title |
| Pin tab | right-click → Pin |

Pinned tabs can't be closed with Ctrl+W — protects important conversations from accidental close.

## History

Every tab is backed by a persisted chat thread. **Settings → History** shows all past threads across all projects, searchable:

- By text in messages.
- By date.
- By agent.
- By project.
- By checkpoint activity (threads that had rollbacks).

Reopen a thread from history to continue an old conversation with full context — all previous turns, tool calls, and checkpoints are restored.

## Session vs thread

A **session** is a single time you had a chat tab open. A **thread** can span many sessions — you closed the tab yesterday, reopened it today, it's the same thread. The thread's ID is stable; session IDs are not.

This matters for:
- **Memory** — the thread-level persistent memory sees all sessions in the thread.
- **Replay** — replaying a thread replays all sessions combined.
- **Analytics** — "how many sessions on this thread" is different from "how many threads".

## Thread length limits

Threads don't have a hard cap, but:

- **Compression** kicks in around 30-50 turns depending on turn size.
- **Eventually** the compression becomes lossy enough that starting a new thread (and importing the important bits into persistent memory) is better than continuing.
- **Replay fidelity** decreases with heavily compressed threads.

Rule of thumb: when a thread is making the agent visibly confused about earlier decisions, it's time to start fresh.

## Deleting history

Two levels of delete:

- **Archive a thread** — removes it from the main list but keeps the data. Recoverable.
- **Delete a thread** — removes the data permanently. Not recoverable.

For compliance reasons, the event log entries referenced by a deleted thread remain (append-only) but lose their chat metadata. If strict deletion is required, use the admin tool: `codebolt admin purge-thread <id>`.

## Exporting

<Tabs groupId="surface">
<TabItem value="cli" label="CLI" default>

```bash
codebolt chat export <thread-id> --format markdown > thread.md
codebolt chat export <thread-id> --format json > thread.json
```

</TabItem>
<TabItem value="desktop" label="Desktop">

Settings → History → row context menu → **Export → Markdown** or **Export → JSON**.

</TabItem>
<TabItem value="api" label="HTTP API">

```http
GET /api/threads/:threadId/export?format=markdown
GET /api/threads/:threadId/export?format=json
```

</TabItem>
</Tabs>

Markdown is human-readable; JSON preserves full structure including tool calls and checkpoints.

## See also

- [Chat Overview](./01_overview.md)
- [Context and @-mentions](./03_context-and-at-mentions.md)
- [Checkpoints and rollback](./04_checkpoints-and-rollback.md)
