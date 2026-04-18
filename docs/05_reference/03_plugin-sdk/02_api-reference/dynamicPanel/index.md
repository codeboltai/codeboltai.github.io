---
title: DynamicPanel API
---

# DynamicPanel API

The `dynamicPanel` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`close`](./close) | Closes a DynamicPanel and removes it from the UI. |
| [`list`](./list) | Lists all currently active DynamicPanels. |
| [`offMessage`](./offMessage) | Removes the message handler for a specific panel. |
| [`onMessage`](./onMessage) | Registers a handler for messages coming **from** a specific panel's iframe. |
| [`open`](./open) | Opens a new DynamicPanel with the given HTML content. |
| [`send`](./send) | Pushes arbitrary data into the panel's iframe via `postMessage`. |
| [`update`](./update) | Replaces the HTML content of an existing DynamicPanel. |

## Methods

---

### `close`

```typescript
plugin.dynamicPanel.close(panelId: string): Promise<DynamicPanelResponse>
```

Closes a DynamicPanel and removes it from the UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to close |

**Returns:** `Promise<DynamicPanelResponse>`

[Full reference →](./close)

---

### `list`

```typescript
plugin.dynamicPanel.list(): Promise<DynamicPanelListResponse>
```

Lists all currently active DynamicPanels.

_No parameters._

**Returns:** `Promise<DynamicPanelListResponse>`

[Full reference →](./list)

---

### `offMessage`

```typescript
plugin.dynamicPanel.offMessage(panelId: string): void
```

Removes the message handler for a specific panel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to stop listening to |

**Returns:** `void`

[Full reference →](./offMessage)

---

### `onMessage`

```typescript
plugin.dynamicPanel.onMessage(panelId: string, handler: Function): void
```

Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to listen to |
| `handler` | `Function` | Yes | Callback receiving the message data |

**Returns:** `void`

[Full reference →](./onMessage)

---

### `open`

```typescript
plugin.dynamicPanel.open(panelId: string, title: string, html: string, opts?: DynamicPanelOpenOptions): Promise<DynamicPanelOpenResponse>
```

Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | Unique identifier for the panel |
| `title` | `string` | Yes | Human-readable panel title shown in the tab |
| `html` | `string` | Yes | Full HTML document rendered inside the panel iframe |
| `opts` | `DynamicPanelOpenOptions` | No | Optional: `waitForResponse`, `timeout` |

**Returns:** `Promise<DynamicPanelOpenResponse>`

[Full reference →](./open)

---

### `send`

```typescript
plugin.dynamicPanel.send(panelId: string, data: any): Promise<DynamicPanelResponse>
```

Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The target panel |
| `data` | `any` | Yes | Any JSON-serializable payload |

**Returns:** `Promise<DynamicPanelResponse>`

[Full reference →](./send)

---

### `update`

```typescript
plugin.dynamicPanel.update(panelId: string, html: string): Promise<DynamicPanelResponse>
```

Replaces the HTML content of an existing DynamicPanel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to update |
| `html` | `string` | Yes | New HTML content |

**Returns:** `Promise<DynamicPanelResponse>`

[Full reference →](./update)

