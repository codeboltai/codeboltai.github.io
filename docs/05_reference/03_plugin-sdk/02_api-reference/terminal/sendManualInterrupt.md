---
name: sendManualInterrupt
cbbaseinfo:
  description: Sends a manual interrupt signal to the terminal.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TerminalInterruptResponse>"
    description: ""
data:
  name: sendManualInterrupt
  category: terminal
  link: sendManualInterrupt.md
---
# sendManualInterrupt

```typescript
plugin.terminal.sendManualInterrupt(): Promise<TerminalInterruptResponse>
```

Sends a manual interrupt signal to the terminal.

## Parameters

_None_

## Returns

**`Promise<TerminalInterruptResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.sendManualInterrupt();
```
