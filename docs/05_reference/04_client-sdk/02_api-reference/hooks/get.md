---
name: get
cbbaseinfo:
  description: "Retrieves a specific hook by its ID.

Returns the full configuration and state of a single hook."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the hook
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: A promise that resolves to the
data:
  name: get
  category: hooks
  link: get.md
---
# get

```typescript
client.hooks.get(id: string): Promise<Hook>
```

Retrieves a specific hook by its ID.

Returns the full configuration and state of a single hook.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the hook |

## Returns

**`Promise<Hook>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.get('id');
```
