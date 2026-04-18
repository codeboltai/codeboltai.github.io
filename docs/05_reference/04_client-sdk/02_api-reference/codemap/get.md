---
name: get
cbbaseinfo:
  description: "Retrieves a specific codemap by its ID.

Returns the full structural representation including all symbols,
relationships, and metadata."
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: The unique identifier of the codemap
      isOptional: false
  returns:
    signatureTypeName: "Promise<Codemap>"
    description: A promise that resolves to the
data:
  name: get
  category: codemap
  link: get.md
---
# get

```typescript
client.codemap.get(codemapId: string): Promise<Codemap>
```

Retrieves a specific codemap by its ID.

Returns the full structural representation including all symbols,
relationships, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` | The unique identifier of the codemap |

## Returns

**`Promise<Codemap>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codemap.get('codemapId');
```
