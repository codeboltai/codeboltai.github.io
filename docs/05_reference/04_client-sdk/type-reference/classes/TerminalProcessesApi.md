---
title: TerminalProcessesApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: TerminalProcessesApi

Defined in: CodeBolt/packages/clientsdk/src/api/terminal-processes.api.ts:11

Manages terminal processes spawned by the CodeBolt platform.

Terminal processes are shell sessions started by agents for executing
commands, running scripts, and performing system-level operations.
This API provides visibility and control over these processes.

## Constructors

### Constructor

```ts
new TerminalProcessesApi(http: HttpClient): TerminalProcessesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/terminal-processes.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`TerminalProcessesApi`

## Methods

### getActiveProcesses()

```ts
getActiveProcesses(): Promise<TerminalProcess[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/terminal-processes.api.ts:29

Retrieves all currently active terminal processes.

Returns terminal processes that are currently running, including
their process IDs, commands, and status information. Use this to
monitor what shell operations are in progress.

#### Returns

`Promise`\<`TerminalProcess`[]\>

A promise that resolves to an array of active TerminalProcess objects

#### Example

```typescript
const processes = await client.terminalProcesses.getActiveProcesses();
processes.forEach(p => console.log(`${p.id}: ${p.command}`));
```

***

### stopAllProcesses()

```ts
stopAllProcesses(): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/terminal-processes.api.ts:69

Stops all running terminal processes.

Terminates every currently active terminal process in the system.
Use this for cleanup operations or when shutting down the platform
to ensure no orphaned processes remain.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when all processes have been stopped

#### Example

```typescript
await client.terminalProcesses.stopAllProcesses();
console.log('All terminal processes stopped');
```

***

### stopProcess()

```ts
stopProcess(processId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/terminal-processes.api.ts:50

Stops a specific terminal process by its ID.

Sends a termination signal to the specified terminal process,
ending its execution gracefully if possible. The process will be
removed from the active process list.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processId` | `string` | The unique identifier of the terminal process to stop |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the process has been stopped

#### Example

```typescript
await client.terminalProcesses.stopProcess('proc-123');
```
