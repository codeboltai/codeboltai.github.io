---
name: create
cbbaseinfo:
  description: "Creates a new capability.

Registers a new capability in the system, defining a skill or action
that agents can use."
cbparameters:
  parameters:
    - name: data
      typeName: CreateCapabilityRequest
      description: The capability creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<Capability>"
    description: A promise that resolves to the newly created Capability
data:
  name: create
  category: capability
  link: create.md
---
# create

```typescript
client.capability.create(data: CreateCapabilityRequest): Promise<Capability>
```

Creates a new capability.

Registers a new capability in the system, defining a skill or action
that agents can use.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCapabilityRequest` | The capability creation payload |

## Returns

**`Promise<Capability>`** — A promise that resolves to the newly created Capability

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.create(/* CreateCapabilityRequest */);
```
