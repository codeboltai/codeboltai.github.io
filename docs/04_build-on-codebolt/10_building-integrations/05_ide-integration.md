---
sidebar_position: 5
title: IDE Integration
---

# IDE Integration

Embed Codebolt agent runs inside VS Code, JetBrains, Neovim, or any editor. The editor extension talks to the Codebolt server over WebSocket via `clientsdk`.

## Architecture

```
Editor extension (VS Code / JetBrains / Neovim)
      ↓ clientsdk WebSocket
  Codebolt server → agent run
      ↓ streaming events
  Editor extension → inline diff, panel, notification
```

## VS Code extension skeleton

```ts
import * as vscode from 'vscode';
import { CodeboltClient } from '@codebolt/clientsdk';

let client: CodeboltClient;

export function activate(context: vscode.ExtensionContext) {
  client = new CodeboltClient({
    serverUrl: vscode.workspace.getConfiguration('codebolt').get('serverUrl')!,
  });

  context.subscriptions.push(
    vscode.commands.registerCommand('codebolt.explainSelection', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.document.getText(editor.selection);
      const run = await client.agents.start('explain-agent', {
        task: `Explain this code:\n\`\`\`\n${selection}\n\`\`\``,
      });

      const panel = vscode.window.createWebviewPanel(
        'codeExplanation', 'Codebolt Explanation', vscode.ViewColumn.Beside, {}
      );

      for await (const event of run.events()) {
        if (event.type === 'agent_message') {
          panel.webview.html = `<pre>${event.content}</pre>`;
        }
      }
    })
  );
}
```

## Streaming inline diffs

For agents that produce file edits, stream changes as inline suggestions:

```ts
for await (const event of run.events()) {
  if (event.type === 'tool_result' && event.tool === 'fs_write') {
    const uri = vscode.Uri.file(event.path);
    // Show diff between original and agent's proposed content
    await vscode.commands.executeCommand('vscode.diff',
      uri, vscode.Uri.parse(`codebolt-proposed:${event.path}`), 'Agent suggestion');
  }
}
```

## See also

- [Custom UIs — clientsdk](../04_custom-uis/01_overview.md)
- [Chat Integrations](./02_chat-integrations.md) — same pattern, different surface
