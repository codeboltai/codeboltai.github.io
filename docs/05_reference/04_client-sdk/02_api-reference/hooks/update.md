---
name: update
cbbaseinfo:
  description: "Updates an existing hook's configuration.

Modifies hook properties such as its name, event trigger, or action.
Only the fields provided in the request body are updated."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the hook to update
      isOptional: false
    - name: data
      typeName: UpdateHookRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: A promise that resolves to the updated
data:
  name: update
  category: hooks
  link: update.md
---
# update

```typescript
client.hooks.update(id: string, data: UpdateHookRequest): Promise<Hook>
```

Updates an existing hook's configuration.

Modifies hook properties such as its name, event trigger, or action.
Only the fields provided in the request body are updated.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the hook to update |
| `data` | `UpdateHookRequest` | The fields to update |

## Returns

**`Promise<Hook>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.update('id', /* UpdateHookRequest */);
```
