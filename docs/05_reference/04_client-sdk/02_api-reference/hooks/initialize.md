---
name: initialize
cbbaseinfo:
  description: "Initializes the hooks subsystem.

Sets up the hooks infrastructure, loading any persisted hooks and
preparing event listeners. Should be called once during application
bootstrap before registering or triggering hooks."
cbparameters:
  parameters:
    - name: data
      typeName: InitializeHooksRequest
      description: Optional initialization configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when initialization is complete
data:
  name: initialize
  category: hooks
  link: initialize.md
---
# initialize

```typescript
client.hooks.initialize(data?: InitializeHooksRequest): Promise<unknown>
```

Initializes the hooks subsystem.

Sets up the hooks infrastructure, loading any persisted hooks and
preparing event listeners. Should be called once during application
bootstrap before registering or triggering hooks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InitializeHooksRequest` _(optional)_ | Optional initialization configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when initialization is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.initialize();
```
