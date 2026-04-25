# Dynamic Panels

> Not every custom UI needs to be a separate application. Codebolt can render runtime UI panels inside the existing app through the dynamic panel system.

Not every custom UI needs to be a separate application. Codebolt can render runtime UI panels *inside the existing app* through the dynamic panel system.

Dynamic panels are driven by **agents** or **plugins** — they open a panel, send it data, and listen for user interactions. This is different from a [custom UI](./06_custom-ui.md), which is a standalone app that owns the entire UX.

## How It Works

1. An **agent or plugin** opens a panel with HTML content.
2. The **server** registers the panel and emits a Socket.IO event to the UI.
3. The **UI** renders the panel in the specified position.
4. **Messages** flow bidirectionally between the panel and the originating agent/plugin.
5. **Cleanup** happens automatically when the agent/plugin disconnects.

## Panel Interface

```typescript
interface DynamicPanelOptions {
  panelId: string;              // Unique identifier
  title: string;                // Panel title bar text
  html: string;                 // HTML content to render
  position?: 'left' | 'right' | 'bottom' | 'center';  // default: 'right'
  width?: number;               // Panel width
  height?: number;              // Panel height
  waitForResponse?: boolean;    // Block until user responds
  timeout?: number;             // Timeout for waitForResponse (ms)
}
```

## Supported Actions

| Action | Description |
|---|---|
| `dynamicPanel.open` | Create and display a new panel |
| `dynamicPanel.update` | Update an existing panel's content or title |
| `dynamicPanel.close` | Close and remove a panel |
| `dynamicPanel.send` | Send a message to the panel |
| `dynamicPanel.list` | List all active panels |

## From an Agent

Agents use the `codebolt.dynamicPanel` API:

```typescript
// Open a panel
await codebolt.dynamicPanel.open({
  panelId: 'my-review-panel',
  title: 'Code Review',
  html: '<div id="review">Loading...</div>',
  position: 'right',
});

// Update content
codebolt.dynamicPanel.update({
  panelId: 'my-review-panel',
  html: '<div id="review"><h2>3 issues found</h2>...</div>',
});

// Listen for user interactions
codebolt.dynamicPanel.onMessage('my-review-panel', (msg) => {
  if (msg.type === 'approve') {
    // User approved the review
  }
});

// Close when done
codebolt.dynamicPanel.close('my-review-panel');
```

### Request/Response Pattern

Use `waitForResponse` to block the agent until the user interacts:

```typescript
const response = await codebolt.dynamicPanel.open({
  panelId: 'confirm-deploy',
  title: 'Confirm Deployment',
  html: `

      Deploy to production?
      <button onclick="respond({ type: 'confirm' })">Yes</button>
      <button onclick="respond({ type: 'cancel' })">No</button>

  `,
  waitForResponse: true,
  timeout: 30000,
});

if (response?.type === 'confirm') {
  // proceed with deployment
}
```

## From a Plugin

Plugins declare a UI HTML file in `package.json` and communicate with it through the Plugin SDK.

### Plugin SDK API

| Method | Direction | Description |
|---|---|---|
| `plugin.dynamicPanel.send(panelId, data)` | Plugin → Panel | Send a JSON message to the panel |
| `plugin.dynamicPanel.onMessage(panelId, handler)` | Panel → Plugin | Listen for messages from the panel |
| `plugin.dynamicPanel.offMessage(panelId)` | — | Remove the message handler |
| `plugin.dynamicPanel.list()` | — | List all active panels |

### Client-Side API (inside panel HTML)

Codebolt injects a global `codeboltPlugin` object into your panel HTML:

| Method | Direction | Description |
|---|---|---|
| `codeboltPlugin.sendMessage(data)` | Panel → Plugin | Send a JSON message to the plugin backend |
| `codeboltPlugin.onMessage(handler)` | Plugin → Panel | Listen for messages from the plugin backend |

For a complete step-by-step walkthrough of building a plugin with a dynamic panel, see [Build Your First Dynamic Panel](./07_build-your-first-dynamic-panel.md).

## Use Cases

| Use case | Example |
|---|---|
| **Focused UI during a run** | Show a progress dashboard while an agent works |
| **Human-in-the-loop** | Confirmation dialogs, form inputs, review approvals |
| **Rich interactive views** | Charts, tables, or visualizations beyond plain chat |
| **Settings panels** | Plugin configuration UI |
| **Monitoring** | Real-time agent activity or system metrics |

## Dynamic Panels vs Custom UI

| Use dynamic panels when | Use a [custom UI](./06_custom-ui.md) when |
|---|---|
| UI should live inside the existing Codebolt app | You want to own the whole product surface |
| Interaction is tied to one agent run or one plugin | UI runs outside the existing desktop/web app |
| You want to augment the built-in app | You need your own routing, branding, or shell |

## See Also

- [Build Your First Dynamic Panel](./07_build-your-first-dynamic-panel.md) — step-by-step tutorial
- [Custom UI](./06_custom-ui.md) — standalone UI overview
- [Client SDK](./02_client-sdk.md) — for building standalone UIs
- [Plugins](../05_plugins/01_overview.md) — backend extensions that can drive panels
