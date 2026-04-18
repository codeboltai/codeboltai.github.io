---
cbapicategory:
  - name: getActiveProcesses
    link: /docs/reference/client-sdk/api-reference/terminalProcesses/getActiveProcesses
    description: "Retrieves all currently active terminal processes.

Returns terminal processes that are currently running, including
their process IDs, commands, and status information. Use this to
monitor what shell operations are in progress."
  - name: stopAllProcesses
    link: /docs/reference/client-sdk/api-reference/terminalProcesses/stopAllProcesses
    description: "Stops all running terminal processes.

Terminates every currently active terminal process in the system.
Use this for cleanup operations or when shutting down the platform
to ensure no orphaned processes remain."
  - name: stopProcess
    link: /docs/reference/client-sdk/api-reference/terminalProcesses/stopProcess
    description: "Stops a specific terminal process by its ID.

Sends a termination signal to the specified terminal process,
ending its execution gracefully if possible. The process will be
removed from the active process list."
---
# TerminalProcesses API

Terminal Processes API

<CBAPICategory />

## Methods

- [`getActiveProcesses()`](./getActiveProcesses) — Retrieves all currently active terminal processes.

Returns terminal processes that are currently running, including
their process IDs, commands, and status information. Use this to
monitor what shell operations are in progress.
- [`stopAllProcesses()`](./stopAllProcesses) — Stops all running terminal processes.

Terminates every currently active terminal process in the system.
Use this for cleanup operations or when shutting down the platform
to ensure no orphaned processes remain.
- [`stopProcess()`](./stopProcess) — Stops a specific terminal process by its ID.

Sends a termination signal to the specified terminal process,
ending its execution gracefully if possible. The process will be
removed from the active process list.
