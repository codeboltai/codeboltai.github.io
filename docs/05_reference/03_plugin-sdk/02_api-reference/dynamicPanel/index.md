---
cbapicategory:
  - name: close
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/close
    description: Closes a DynamicPanel and removes it from the UI.
  - name: list
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/list
    description: Lists all currently active DynamicPanels.
  - name: offMessage
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/offMessage
    description: Removes the message handler for a specific panel.
  - name: onMessage
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/onMessage
    description: "Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler."
  - name: open
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/open
    description: "Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data."
  - name: send
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/send
    description: "Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler."
  - name: update
    link: /docs/reference/plugin-sdk/api-reference/dynamicPanel/update
    description: Replaces the HTML content of an existing DynamicPanel.
---
# DynamicPanel API

The `dynamicPanel` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`close()`](./close) — Closes a DynamicPanel and removes it from the UI.
- [`list()`](./list) — Lists all currently active DynamicPanels.
- [`offMessage()`](./offMessage) — Removes the message handler for a specific panel.
- [`onMessage()`](./onMessage) — Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler.
- [`open()`](./open) — Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data.
- [`send()`](./send) — Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler.
- [`update()`](./update) — Replaces the HTML content of an existing DynamicPanel.
