---
name: update
cbbaseinfo:
  description: "Updates an existing specification document.

Modifies the content, metadata, or structure of a spec. Use this to
add new sections, update information, change versions, or make other
modifications as specifications evolve."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateSpecRequest
      description: Request containing the spec updates
      isOptional: false
  returns:
    signatureTypeName: "Promise<Spec>"
    description: A promise that resolves to the updated Spec object
data:
  name: update
  category: specs
  link: update.md
---
# update

```typescript
client.specs.update(data: UpdateSpecRequest): Promise<Spec>
```

Updates an existing specification document.

Modifies the content, metadata, or structure of a spec. Use this to
add new sections, update information, change versions, or make other
modifications as specifications evolve.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateSpecRequest` | Request containing the spec updates |

## Returns

**`Promise<Spec>`** — A promise that resolves to the updated Spec object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.specs.update(/* UpdateSpecRequest */);
```
