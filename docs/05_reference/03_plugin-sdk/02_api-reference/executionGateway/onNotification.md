---
name: onNotification
cbbaseinfo:
  description: "Register a callback for execution notifications.
These are broadcast after any locally-executed agent action."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: Called with each ExecutionNotification
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onNotification
  category: executionGateway
  link: onNotification.md
---
# onNotification

```typescript
plugin.executionGateway.onNotification(callback: Function): void
```

Register a callback for execution notifications.
These are broadcast after any locally-executed agent action.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` | Called with each ExecutionNotification |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.onNotification(/* Function */);
```
