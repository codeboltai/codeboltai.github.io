---
name: debug
cbbaseinfo:
  description: Sends a log message to the debug websocket and waits for a response.
cbparameters:
  parameters:
    - name: log
      typeName: string
      description: The log message to send.
      isOptional: false
    - name: type
      typeName: logType
      description: The type of the log message (info, error, warning).
      isOptional: false
  returns:
    signatureTypeName: "Promise<DebugAddLogResponse>"
    description: A promise that resolves with the response from the debug event.
data:
  name: debug
  category: debug
  link: debug.md
---
# debug

```typescript
plugin.debug.debug(log: string, type: logType): Promise<DebugAddLogResponse>
```

Sends a log message to the debug websocket and waits for a response.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `log` | `string` | The log message to send. |
| `type` | `logType` | The type of the log message (info, error, warning). |

## Returns

**`Promise<DebugAddLogResponse>`** — A promise that resolves with the response from the debug event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.debug.debug('log', /* logType */);
```
