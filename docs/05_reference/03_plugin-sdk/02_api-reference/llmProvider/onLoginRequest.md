---
name: onLoginRequest
cbbaseinfo:
  description: "Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, { authenticated: true }) or sendError()."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onLoginRequest
  category: llmProvider
  link: onLoginRequest.md
---
# onLoginRequest

```typescript
plugin.llmProvider.onLoginRequest(callback: Function): void
```

Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, { authenticated: true }) or sendError().

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.onLoginRequest(/* Function */);
```
