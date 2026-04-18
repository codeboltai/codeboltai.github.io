---
title: processStarted
---

# `processStarted`

```typescript
plugin.chat.processStarted(onStopClicked?: Function): ProcessControl | ProcessControlWithCleanup
```

Notifies the server that a process has started and sets up a listener for stopProcessClicked events.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `onStopClicked` | `Function` | No | Callback function to handle stop process events. |

## Returns

`ProcessControl | ProcessControlWithCleanup` — An object containing a stopProcess method.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.processStarted();
console.log(result);
```
