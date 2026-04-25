# Quickstart

> The TUI requires the CLI to be installed. If you haven't installed it yet, see CLI Quickstart first — the sign-in and provider setup there applies here too.

# TUI Quickstart

Launch the Codebolt terminal UI and run your first agent task without leaving the terminal.

> The TUI requires the CLI to be installed. If you haven't installed it yet, see [CLI Quickstart](../03_cli/00_quickstart.md) first — the sign-in and provider setup there applies here too.

---

## 1. Launch the TUI

```bash
cd my-project
codebolt
```

The TUI starts, connects to the local server, and attaches to the current directory. You'll see the main layout: a chat panel on the right, a file tree on the left, and a status bar at the bottom.

---

## 2. Navigate the interface

| Key | Action |
|---|---|
| `Tab` | Move focus between panels |
| `↑ / ↓` | Navigate lists |
| `Enter` | Select / confirm |
| `Esc` | Go back / cancel |
| `?` | Show help overlay |
| `q` | Quit |

The status bar shows the active panel name and available shortcuts for the current context.

---

## 3. Send your first message

Focus the chat panel (`Tab` until the input box is highlighted). Type a task and press `Enter`:

```
Explain what this codebase does in 3 bullet points.
```

The agent's response streams into the chat panel. Tool calls (file reads, searches) appear as they happen.

---

## 4. Make a change

Type a follow-up that writes something:

```
Add a .editorconfig with 2-space indentation for JS/TS.
```

When the agent finishes, the file tree updates to show the new file. Press `Tab` to move to the file tree, navigate to `.editorconfig`, and press `Enter` to preview it in the editor panel.

---

## 5. Roll back or keep

Press `c` to open the checkpoint list. You'll see a snapshot created before the agent ran. Options:

- **`r`** — rollback to the selected checkpoint (restores all files instantly)
- **`Esc`** — dismiss and keep the changes

To commit what you like:

```bash
# Switch to a regular terminal (don't quit the TUI — just open another tab)
git add .editorconfig && git commit -m "add editorconfig"
```

---

## Key panels

| Panel | How to open |
|---|---|
| Chat | `Tab` to focus, or press `1` |
| File tree | Press `2` |
| Terminal | Press `3` |
| Agent list | Press `a` |
| Settings | Press `s` |
| Checkpoint list | Press `c` |

---

**Next:** [TUI Overview](./01_overview.md) · [Navigation & Keybindings](./02_navigation-and-keybindings.md)
