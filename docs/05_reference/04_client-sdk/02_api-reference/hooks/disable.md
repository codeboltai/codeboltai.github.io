---
name: disable
cbbaseinfo:
  description: "Disables a hook without deleting it.

Prevents the hook from firing while preserving its configuration.
The hook can be re-enabled later with ."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the hook to disable
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the hook has been disabled
data:
  name: disable
  category: hooks
  link: disable.md
---
# disable

```typescript
client.hooks.disable(id: string): Promise<unknown>
```

Disables a hook without deleting it.

Prevents the hook from firing while preserving its configuration.
The hook can be re-enabled later with .

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the hook to disable |

## Returns

**`Promise<unknown>`** — A promise that resolves when the hook has been disabled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.disable('id');
```
