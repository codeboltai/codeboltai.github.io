---
name: create
cbbaseinfo:
  description: "Creates a new hook.

Registers a hook that will fire when the specified event occurs.
The hook is enabled by default upon creation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateHookRequest
      description: Hook creation payload including event type and action
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: A promise that resolves to the newly created
data:
  name: create
  category: hooks
  link: create.md
---
# create

```typescript
client.hooks.create(data: CreateHookRequest): Promise<Hook>
```

Creates a new hook.

Registers a hook that will fire when the specified event occurs.
The hook is enabled by default upon creation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateHookRequest` | Hook creation payload including event type and action |

## Returns

**`Promise<Hook>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.create(/* CreateHookRequest */);
```
