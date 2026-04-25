# Quickstart

> Get the desktop app running and complete your first agent task.

# Desktop App Quickstart

Get the desktop app running and complete your first agent task.

---

## 1. Install

Download the installer for your OS from the Codebolt website.

**Windows**
```powershell
# Installer
Codebolt-Setup-x64.exe   # run and accept defaults

# Winget
winget install Codebolt.Codebolt
```

**macOS**
```bash
# DMG — drag Codebolt.app to /Applications
# or Homebrew
brew install --cask codebolt
```

**Linux**
```bash
# AppImage
chmod +x Codebolt-x86_64.AppImage && ./Codebolt-x86_64.AppImage

# Debian / Ubuntu
sudo dpkg -i codebolt.deb

# Fedora / RHEL
sudo rpm -i codebolt.rpm

# Flatpak
flatpak install flathub com.codebolt.Codebolt
```

Launch the app. The first start takes ~30 seconds while the local server initialises.

---

## 2. Sign in and complete setup

Click **Sign In** in the top-right corner. A browser window opens to the CodeBolt portal. Log in or create an account — the app picks up the token automatically.

If this is your first time, a setup wizard runs:

1. **Select AI models** — choose CodeBolt AI (no key needed) or paste an API key for OpenAI / Anthropic / other provider. Select an LLM and an embedding model.
2. **Workspace & theme** — pick a default project folder and a colour theme.
3. **Default agent** — choose which agent handles new projects by default.

The wizard takes about 2 minutes. You can change every setting later in **Settings**.

---

## 3. Open a project

You land on the project dashboard. Click **Open Project** and pick a folder. Codebolt indexes it — file tree, symbols, and codemap appear in the left panel within a few seconds.

---

## 4. Chat with an agent

The chat panel is on the right. Type a task:

```
Explain what this codebase does in 3 bullet points.
```

The agent reads files in real time (you see the tool calls stream in). It responds in chat.

Try a task that writes something:

```
Create a .editorconfig file with 2-space indentation for JS/TS and 4-space for Python.
```

The file appears in the editor with a diff highlight.

---

## 5. Keep or roll back

Click the **checkpoint badge** at the top of the chat to see the snapshot created before the agent ran. Options:

- **Keep** — files stay as written. Use the git panel (bottom bar → Tools → Git) to commit.
- **Rollback** — instantly restores all files to before the agent ran. Safe — your real git is untouched.

---

## Keyboard shortcuts to know

| Action | Shortcut |
|---|---|
| New chat tab | `Ctrl+T` / `Cmd+T` |
| Inline code edit | `Ctrl+K` / `Cmd+K` |
| Command palette | `Ctrl+Shift+P` / `Cmd+Shift+P` |
| Toggle terminal | `Ctrl+`` ` |
| Open agent picker | `@` in chat |

---

**Next:** [Desktop App Overview](./01_workspace-and-projects.md) · [Chat](../../03_chat/01_overview.md) · [Agents](../../04_agents/01_what-is-an-agent.md)
