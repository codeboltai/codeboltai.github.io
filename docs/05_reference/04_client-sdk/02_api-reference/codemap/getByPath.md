---
name: getByPath
cbbaseinfo:
  description: "Retrieves codemap entries by file path.

Looks up codemaps associated with a specific file path, returning
all structural information for that file."
cbparameters:
  parameters:
    - name: params
      typeName: CodemapByPathParams
      description: Query parameters including the file path to look up
      isOptional: false
  returns:
    signatureTypeName: "Promise<Codemap[]>"
    description: A promise that resolves to an array of matching  objects
data:
  name: getByPath
  category: codemap
  link: getByPath.md
---
# getByPath

```typescript
client.codemap.getByPath(params: CodemapByPathParams): Promise<Codemap[]>
```

Retrieves codemap entries by file path.

Looks up codemaps associated with a specific file path, returning
all structural information for that file.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CodemapByPathParams` | Query parameters including the file path to look up |

## Returns

**`Promise<Codemap[]>`** — A promise that resolves to an array of matching  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codemap.getByPath(/* CodemapByPathParams */);
```
