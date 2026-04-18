---
name: processStarted
cbbaseinfo:
  description: Notifies the server that a process has started and sets up a listener for stopProcessClicked events.
cbparameters:
  parameters:
    - name: onStopClicked
      typeName: Function
      description: Callback function to handle stop process events.
      isOptional: true
  returns:
    signatureTypeName: "ProcessControl | ProcessControlWithCleanup"
    description: An object containing a stopProcess method.
data:
  name: processStarted
  category: chat
  link: processStarted.md
---
# processStarted

```typescript
plugin.chat.processStarted(onStopClicked?: Function): ProcessControl | ProcessControlWithCleanup
```

Notifies the server that a process has started and sets up a listener for stopProcessClicked events.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `onStopClicked` | `Function` _(optional)_ | Callback function to handle stop process events. |

## Returns

**`ProcessControl | ProcessControlWithCleanup`** — An object containing a stopProcess method.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.processStarted();
```
