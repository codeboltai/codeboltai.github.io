---
cbapicategory:
  - name: eventEmitter
    link: /docs/reference/plugin-sdk/api-reference/terminal/eventEmitter
    description: eventEmitter
  - name: executeCommand
    link: /docs/reference/plugin-sdk/api-reference/terminal/executeCommand
    description: "Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly."
  - name: executeCommandRunUntilError
    link: /docs/reference/plugin-sdk/api-reference/terminal/executeCommandRunUntilError
    description: "Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered."
  - name: executeCommandRunUntilInterrupt
    link: /docs/reference/plugin-sdk/api-reference/terminal/executeCommandRunUntilInterrupt
    description: "Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted."
  - name: executeCommandWithStream
    link: /docs/reference/plugin-sdk/api-reference/terminal/executeCommandWithStream
    description: "Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data."
  - name: sendManualInterrupt
    link: /docs/reference/plugin-sdk/api-reference/terminal/sendManualInterrupt
    description: Sends a manual interrupt signal to the terminal.
---
# Terminal API

The `terminal` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`eventEmitter()`](./eventEmitter) — 
- [`executeCommand()`](./executeCommand) — Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly.
- [`executeCommandRunUntilError()`](./executeCommandRunUntilError) — Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered.
- [`executeCommandRunUntilInterrupt()`](./executeCommandRunUntilInterrupt) — Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted.
- [`executeCommandWithStream()`](./executeCommandWithStream) — Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data.
- [`sendManualInterrupt()`](./sendManualInterrupt) — Sends a manual interrupt signal to the terminal.
