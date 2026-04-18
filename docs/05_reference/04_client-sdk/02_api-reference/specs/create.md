---
name: create
cbbaseinfo:
  description: "Creates a new specification document.

Registers a new spec with the system using the provided content.
The spec can include technical details, API definitions, architecture
descriptions, and other structured specification information."
cbparameters:
  parameters:
    - name: data
      typeName: CreateSpecRequest
      description: Request containing the spec details
      isOptional: false
  returns:
    signatureTypeName: "Promise<Spec>"
    description: A promise that resolves to the created Spec object
data:
  name: create
  category: specs
  link: create.md
---
# create

```typescript
client.specs.create(data: CreateSpecRequest): Promise<Spec>
```

Creates a new specification document.

Registers a new spec with the system using the provided content.
The spec can include technical details, API definitions, architecture
descriptions, and other structured specification information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateSpecRequest` | Request containing the spec details |

## Returns

**`Promise<Spec>`** — A promise that resolves to the created Spec object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.specs.create(/* CreateSpecRequest */);
```
