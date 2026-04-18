---
title: sendManualInterrupt
---

# `sendManualInterrupt`

```typescript
plugin.terminal.sendManualInterrupt(): Promise<TerminalInterruptResponse>
```

Sends a manual interrupt signal to the terminal.

## Parameters

_No parameters._

## Returns

`Promise<TerminalInterruptResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.terminal.sendManualInterrupt();
console.log(result);
```
