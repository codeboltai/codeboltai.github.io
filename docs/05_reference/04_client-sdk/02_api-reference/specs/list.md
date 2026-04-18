---
name: list
cbbaseinfo:
  description: "Lists all specification documents.

Returns every spec document in the system, optionally filtered by
project, type, or other criteria. Use this for browsing specs or
populating specification management UIs."
cbparameters:
  parameters:
    - name: params
      typeName: ListSpecsParams
      description: Optional query parameters for filtering specs
      isOptional: true
  returns:
    signatureTypeName: "Promise<Spec[]>"
    description: A promise that resolves to an array of Spec objects
data:
  name: list
  category: specs
  link: list.md
---
# list

```typescript
client.specs.list(params?: ListSpecsParams): Promise<Spec[]>
```

Lists all specification documents.

Returns every spec document in the system, optionally filtered by
project, type, or other criteria. Use this for browsing specs or
populating specification management UIs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListSpecsParams` _(optional)_ | Optional query parameters for filtering specs |

## Returns

**`Promise<Spec[]>`** — A promise that resolves to an array of Spec objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.specs.list();
```
