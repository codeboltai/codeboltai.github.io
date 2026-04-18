---
name: get
cbbaseinfo:
  description: "Retrieves a specific specification document.

Returns the spec matching the provided query parameters, typically
by spec ID or project. The document includes all sections, metadata,
and version information."
cbparameters:
  parameters:
    - name: params
      typeName: GetSpecParams
      description: Query parameters to identify the spec
      isOptional: true
  returns:
    signatureTypeName: "Promise<Spec>"
    description: A promise that resolves to the Spec object
data:
  name: get
  category: specs
  link: get.md
---
# get

```typescript
client.specs.get(params?: GetSpecParams): Promise<Spec>
```

Retrieves a specific specification document.

Returns the spec matching the provided query parameters, typically
by spec ID or project. The document includes all sections, metadata,
and version information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `GetSpecParams` _(optional)_ | Query parameters to identify the spec |

## Returns

**`Promise<Spec>`** — A promise that resolves to the Spec object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.specs.get();
```
