---
title: Terminal API
---

# Terminal API

The `terminal` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`eventEmitter`](./eventEmitter) |  |
| [`executeCommand`](./executeCommand) | Executes a given command and returns the result. |
| [`executeCommandRunUntilError`](./executeCommandRunUntilError) | Executes a given command and keeps running until an error occurs. |
| [`executeCommandRunUntilInterrupt`](./executeCommandRunUntilInterrupt) | Executes a given command and keeps running until manually interrupted. |
| [`executeCommandWithStream`](./executeCommandWithStream) | Executes a given command and streams the output. |
| [`sendManualInterrupt`](./sendManualInterrupt) | Sends a manual interrupt signal to the terminal. |

## Methods

---

### `eventEmitter`

```typescript
plugin.terminal.eventEmitter(): void
```



_No parameters._

**Returns:** `void`

[Full reference →](./eventEmitter)

---

### `executeCommand`

```typescript
plugin.terminal.executeCommand(command: string, returnEmptyStringOnSuccess: boolean): Promise<CommandOutput | CommandError | CommandFinish>
```

Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `returnEmptyStringOnSuccess` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `Promise<CommandOutput | CommandError | CommandFinish>` — A promise that resolves with the command's output, error, or finish signal.

[Full reference →](./executeCommand)

---

### `executeCommandRunUntilError`

```typescript
plugin.terminal.executeCommandRunUntilError(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `Promise<CommandError>` — A promise that resolves when an error occurs during command execution.

[Full reference →](./executeCommandRunUntilError)

---

### `executeCommandRunUntilInterrupt`

```typescript
plugin.terminal.executeCommandRunUntilInterrupt(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes | Whether to execute in main terminal. _(default: `false`)_ |

**Returns:** `Promise<CommandError>` — A promise that resolves when the command is interrupted.

[Full reference →](./executeCommandRunUntilInterrupt)

---

### `executeCommandWithStream`

```typescript
plugin.terminal.executeCommandWithStream(command: string, executeInMain: boolean): CustomEventEmitter
```

Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `CustomEventEmitter` — A promise that streams the output data during command execution.

[Full reference →](./executeCommandWithStream)

---

### `sendManualInterrupt`

```typescript
plugin.terminal.sendManualInterrupt(): Promise<TerminalInterruptResponse>
```

Sends a manual interrupt signal to the terminal.

_No parameters._

**Returns:** `Promise<TerminalInterruptResponse>`

[Full reference →](./sendManualInterrupt)

