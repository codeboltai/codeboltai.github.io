---
name: enable
cbbaseinfo:
  description: "Enables a previously disabled hook.

Re-activates the hook so it will fire again when its event occurs.
Has no effect if the hook is already enabled."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the hook to enable
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the hook has been enabled
data:
  name: enable
  category: hooks
  link: enable.md
---
# enable

```typescript
client.hooks.enable(id: string): Promise<unknown>
```

Enables a previously disabled hook.

Re-activates the hook so it will fire again when its event occurs.
Has no effect if the hook is already enabled.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the hook to enable |

## Returns

**`Promise<unknown>`** — A promise that resolves when the hook has been enabled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.enable('id');
```
