---
title: terminal
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: terminal

```ts
const terminal: {
  eventEmitter: CustomEventEmitter;
  executeCommand: (command: string, returnEmptyStringOnSuccess: boolean) => Promise<CommandOutput | CommandError | CommandFinish>;
  executeCommandRunUntilError: (command: string, executeInMain: boolean) => Promise<CommandError>;
  executeCommandRunUntilInterrupt: (command: string, executeInMain: boolean) => Promise<CommandError>;
  executeCommandWithStream: CustomEventEmitter;
  sendManualInterrupt: Promise<TerminalInterruptResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/terminal.ts:30

A module for executing commands in a terminal-like environment via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="eventemitter"></a> `eventEmitter` | `CustomEventEmitter` | - | [packages/codeboltjs/src/modules/terminal.ts:31](packages/codeboltjs/src/modules/terminal.ts#L31) |
| <a id="executecommand"></a> `executeCommand()` | (`command`: `string`, `returnEmptyStringOnSuccess`: `boolean`) => `Promise`\<`CommandOutput` \| `CommandError` \| `CommandFinish`\> | Executes a given command and returns the result. Listens for messages from the WebSocket that indicate the output, error, or finish state of the executed command and resolves the promise accordingly. | [packages/codeboltjs/src/modules/terminal.ts:41](packages/codeboltjs/src/modules/terminal.ts#L41) |
| <a id="executecommandrununtilerror"></a> `executeCommandRunUntilError()` | (`command`: `string`, `executeInMain`: `boolean`) => `Promise`\<`CommandError`\> | Executes a given command and keeps running until an error occurs. Listens for messages from the WebSocket and resolves the promise when an error is encountered. | [packages/codeboltjs/src/modules/terminal.ts:59](packages/codeboltjs/src/modules/terminal.ts#L59) |
| <a id="executecommandrununtilinterrupt"></a> `executeCommandRunUntilInterrupt()` | (`command`: `string`, `executeInMain`: `boolean`) => `Promise`\<`CommandError`\> | Executes a given command and keeps running until manually interrupted. Listens for messages from the WebSocket and resolves the promise when interrupted. | [packages/codeboltjs/src/modules/terminal.ts:78](packages/codeboltjs/src/modules/terminal.ts#L78) |
| `executeCommandWithStream()` | (`command`: `string`, `executeInMain`: `boolean`) => `CustomEventEmitter` | Executes a given command and streams the output. Listens for messages from the WebSocket and streams the output data. | [packages/codeboltjs/src/modules/terminal.ts:111](packages/codeboltjs/src/modules/terminal.ts#L111) |
| `sendManualInterrupt()` | () => `Promise`\<`TerminalInterruptResponse`\> | Sends a manual interrupt signal to the terminal. | [packages/codeboltjs/src/modules/terminal.ts:95](packages/codeboltjs/src/modules/terminal.ts#L95) |
