---
name: list
cbbaseinfo:
  description: "Lists all codemaps.

Returns every codemap that has been generated in the current workspace."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<Codemap[]>"
    description: A promise that resolves to an array of  objects
data:
  name: list
  category: codemap
  link: list.md
---
# list

```typescript
client.codemap.list(params?: Record<string, unknown>): Promise<Codemap[]>
```

Lists all codemaps.

Returns every codemap that has been generated in the current workspace.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<Codemap[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codemap.list();
```
