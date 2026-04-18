---
name: setRequestHandler
cbbaseinfo:
  description: Sets a global request handler for all incoming messages
cbparameters:
  parameters:
    - name: handler
      typeName: RequestHandler
      description: The async handler function
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: setRequestHandler
  category: chat
  link: setRequestHandler.md
---
# setRequestHandler

```typescript
plugin.chat.setRequestHandler(handler: RequestHandler): void
```

Sets a global request handler for all incoming messages

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `handler` | `RequestHandler` | The async handler function |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.setRequestHandler(/* RequestHandler */);
```
