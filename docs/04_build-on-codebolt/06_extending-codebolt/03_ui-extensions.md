---
sidebar_position: 3
title: UI Extensions
---

# UI Extensions

Embed new panels, views, and widgets directly into the Codebolt interface. Users see your extension inside Codebolt — not in a separate app.

## When to write a UI extension

- You want a custom dashboard showing agent run metrics.
- You need a domain-specific control panel alongside the chat (e.g. a DB schema browser, a design token viewer).
- You're building a review workflow that needs a purpose-built UI step inside Codebolt.

## Panel anatomy

A UI extension is a React component bundled as a plugin panel entry point.

```ts
// src/panel.tsx
import { useCodeboltPanel } from '@codebolt/plugin-sdk/ui';

export default function MyPanel() {
  const { runId, agentId } = useCodeboltPanel();
  return <div className="my-panel">...</div>;
}
```

Declare in `plugin.yaml`:

```yaml
contributes:
  uiPanels:
    - id: my-panel
      label: My Panel
      entry: ./dist/panel.js
      placement: sidebar        # sidebar | bottom | floating | modal
      activateOn:
        - agentRunStart
        - command:my-panel.open
```

## Placement options

| Placement | Where it appears |
|---|---|
| `sidebar` | Collapsible panel in the left/right sidebar |
| `bottom` | Tab in the bottom panel (alongside terminal, logs) |
| `floating` | Draggable floating window |
| `modal` | Full modal overlay, opened on demand |

## See also

- [Themes](./04_themes.md) — style your panel to match Codebolt
- [Custom Commands](./05_custom-commands.md) — wire keyboard shortcuts to open your panel
- [Plugin SDK](../05_plugins/01_overview.md)
